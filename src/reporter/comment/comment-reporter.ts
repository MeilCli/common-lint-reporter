import { LintResult } from "../../lint-result.js";
import { Option } from "../../option.js";
import { Reporter } from "../../reporter.js";
import { githubClient, GitHubClient } from "../../github/client.js";
import { githubContext, GitHubContext } from "../../github/context.js";
import { getCommitStatusAndCheckRunWithPaging, getPullRequestCommentsWithPaging } from "../../github/paging.js";
import { RequestableCheckStatusState } from "../../../graphql/graphql.js";
import { calculateConclusion } from "../conclusion.js";
import { isLintComment, createLintComment, createComment } from "./comment.js";

export interface PullRequest {
    number: number;
    id: string;
}
export interface LoginUser {
    login: string;
}

export class CommentReporter implements Reporter {
    async report(option: Option, lintResults: LintResult[]): Promise<void> {
        const client = githubClient(option);
        const context = githubContext(option);

        const repositoryId = (await client.getRepositoryId({ owner: context.owner(), name: context.repository() }))
            ?.repository?.id;
        if (repositoryId == undefined) {
            throw Error("not found repository");
        }

        const statusAndCheckRuns = await getCommitStatusAndCheckRunWithPaging(client, {
            owner: context.owner(),
            name: context.repository(),
            commitSha: context.commitSha(),
        });
        const foundSameCheckRun = statusAndCheckRuns.find(
            (x) => x.__typename == "CheckRun" && x.name == option.reportName,
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

        const pullRequest = await this.getPullRequest(client, context);
        const loginUser = await this.getLoginUser(client);
        if (loginUser == undefined) {
            throw Error("cannot found login user");
        }
        await this.reportComment(client, context, option, pullRequest, loginUser, lintResults);

        await client.updateCheckRun({
            repositoryId: repositoryId,
            checkRunId: checkRunId,
            status: RequestableCheckStatusState.Completed,
            conclusion: calculateConclusion(option, lintResults),
            completedAt: new Date().toISOString(),
        });
    }

    private async getPullRequest(client: GitHubClient, context: GitHubContext): Promise<PullRequest> {
        const pullRequestNumber = context.pullRequest();
        if (pullRequestNumber == null) {
            throw Error("pull_request number is not provided");
        }

        const pullRequest = await client.getPullRequest({
            owner: context.owner(),
            name: context.repository(),
            number: pullRequestNumber,
        });

        const pullRequestId = pullRequest?.repository?.pullRequest?.id;
        if (pullRequestId == null || pullRequestId == undefined) {
            throw Error("not found pull request id");
        }

        return {
            number: pullRequestNumber,
            id: pullRequestId,
        };
    }

    private async getLoginUser(client: GitHubClient): Promise<LoginUser | undefined> {
        // if bot account, including '[bot]'. but author.login will not include it
        const response = await client.getLoginUser({});
        if (response == undefined) {
            return undefined;
        }
        const loginUser = response.viewer.login.split("[")[0];
        return {
            login: loginUser,
        };
    }

    protected async reportComment(
        client: GitHubClient,
        context: GitHubContext,
        option: Option,
        pullRequest: PullRequest,
        loginUser: LoginUser,
        lintResults: LintResult[],
    ) {
        const comments = await getPullRequestCommentsWithPaging(client, {
            owner: context.owner(),
            name: context.repository(),
            pull_request: pullRequest.number,
        });

        for (const comment of comments) {
            if (comment.author?.login != loginUser.login) {
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
            id: pullRequest.id,
            body: createLintComment(createComment(context, lintResults), option.reportName),
        });
    }
}
