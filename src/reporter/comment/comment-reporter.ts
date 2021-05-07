import { LintResult } from "../../lint-result";
import { Option } from "../../option";
import { Reporter } from "../../reporter";
import { githubClient, GitHubClient } from "../../github/client";
import { githubContext, GitHubContext } from "../../github/context";
import { getCommitStatusAndCheckRunWithPaging, getPullRequestCommentsWithPaging } from "../../github/paging";
import { RequestableCheckStatusState } from "../../../graphql/graphql";
import { calculateConclusion } from "../conclusion";
import { isLintComment, createLintComment, createComment } from "./comment";

export class CommentReporter implements Reporter {
    async report(option: Option, lintResults: LintResult[]): Promise<void> {
        const client = githubClient(option);
        const context = githubContext(option);

        const repositoryId = (await client.getRepositoryId({ owner: context.owner(), name: context.repository() }))
            .repository?.id;
        if (repositoryId == undefined) {
            throw Error("not found repository");
        }

        const statusAndCheckRuns = await getCommitStatusAndCheckRunWithPaging(client, {
            owner: context.owner(),
            name: context.repository(),
            commitSha: context.commitSha(),
        });
        const foundSameCheckRun = statusAndCheckRuns.find(
            (x) => x.__typename == "CheckRun" && x.name == option.reportName
        );

        if (foundSameCheckRun != undefined) {
            await client.updateCheckRun({
                repositoryId: repositoryId,
                checkRunId: foundSameCheckRun.id,
                status: RequestableCheckStatusState.InProgress,
            });
        }

        const checkRunId =
            foundSameCheckRun == undefined
                ? (
                      await client.createCheckRun({
                          repositoryId: repositoryId,
                          headSha: context.commitSha(),
                          name: option.reportName,
                          startedAt: new Date().toISOString(),
                          status: RequestableCheckStatusState.InProgress,
                      })
                  )?.createCheckRun?.checkRun?.id
                : foundSameCheckRun.id;
        if (checkRunId == undefined) {
            throw Error("cannot create check-run");
        }

        await this.reportComment(client, context, option, lintResults);

        await client.updateCheckRun({
            repositoryId: repositoryId,
            checkRunId: checkRunId,
            status: RequestableCheckStatusState.Completed,
            conclusion: calculateConclusion(option, lintResults),
            completedAt: new Date().toISOString(),
        });
    }

    private async reportComment(
        client: GitHubClient,
        context: GitHubContext,
        option: Option,
        lintResults: LintResult[]
    ) {
        const pullRequestNumber = context.pullRequest();
        if (pullRequestNumber == null) {
            throw Error("pull_request number is not provided");
        }

        const pullRequest = await client.getPullRequest({
            owner: context.owner(),
            name: context.repository(),
            number: pullRequestNumber,
        });

        const pullRequestId = pullRequest.repository?.pullRequest?.id;
        if (pullRequestId == null || pullRequestId == undefined) {
            throw Error("not found pull request id");
        }

        // if bot account, including '[bot]'. but author.login will not include it
        const loginUser = (await client.getLoginUser({})).viewer.login.split("[")[0];

        const comments = await getPullRequestCommentsWithPaging(client, {
            owner: context.owner(),
            name: context.repository(),
            pull_request: pullRequestNumber,
        });

        for (const comment of comments) {
            if (comment.author?.login != loginUser) {
                continue;
            }
            if (isLintComment(comment.body, option.reportName)) {
                await client.deleteComment({ id: comment.id });
            }
        }

        if (lintResults.length == 0) {
            return;
        }
        await client.addComment({
            id: pullRequestId,
            body: createLintComment(createComment(context, lintResults), option.reportName),
        });
    }
}
