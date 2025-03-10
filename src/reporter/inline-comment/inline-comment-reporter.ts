import { LintResult } from "../../lint-result";
import { Option, OutdatedResolver } from "../../option";
import { GitHubClient } from "../../github/client";
import { GitHubContext } from "../../github/context";
import { getPullRequestReviewThreadsWithPaging } from "../../github/paging";
import { GetPullRequestReviewThreadsQueryPullRequestReviewThreadsNode } from "../../github/types";
import { CommentReporter, PullRequest, LoginUser } from "../comment/comment-reporter";
import { isLintInlineComment, createLintInlineComment, createInlineComment, equalsInlineComment } from "./comment";
import { trimPath } from "../path";

export class InlineCommentReporter extends CommentReporter {
    protected async reportComment(
        client: GitHubClient,
        context: GitHubContext,
        option: Option,
        pullRequest: PullRequest,
        loginUser: LoginUser,
        lintResults: LintResult[],
    ) {
        const inlineLintResults = lintResults.filter((x) => x.startLine != undefined);
        const notInlineLintResults = lintResults.filter((x) => x.startLine == undefined);
        const cannotReportedLintResults = await this.reportInlineComment(
            client,
            context,
            option,
            pullRequest,
            loginUser,
            inlineLintResults,
        );
        notInlineLintResults.push(...cannotReportedLintResults);
        await super.reportComment(client, context, option, pullRequest, loginUser, notInlineLintResults);
    }

    // return cannot reported lint result
    private async reportInlineComment(
        client: GitHubClient,
        context: GitHubContext,
        option: Option,
        pullRequest: PullRequest,
        loginUser: LoginUser,
        lintResults: LintResult[],
    ): Promise<LintResult[]> {
        const reviewThreads = await getPullRequestReviewThreadsWithPaging(client, {
            owner: context.owner(),
            name: context.repository(),
            number: pullRequest.number,
        });
        const pastReviewThreads = await this.resolveOutdatedThreadsAndFiltered(
            client,
            option,
            loginUser,
            reviewThreads,
        );
        const newLintResults = lintResults.filter(
            (x) => pastReviewThreads.filter((y) => equalsInlineComment(y, x, context, option.reportName)).length == 0,
        );

        const pullRequestReview = await client.addPullRequestReviewDraft({
            pullRequestId: pullRequest.id,
            commitSha: context.commitSha(),
        });
        const pullRequestReviewId = pullRequestReview?.addPullRequestReview?.pullRequestReview?.id;
        if (pullRequestReviewId == null || pullRequestReviewId == undefined) {
            return [];
        }

        const reportedLintResults: LintResult[] = [];
        const cannotReportedLintResults: LintResult[] = [];
        for (const lintResult of newLintResults) {
            const line = lintResult.endLine != undefined ? lintResult.endLine : lintResult.startLine;
            const startLine =
                // cannot create thread if same line
                lintResult.endLine != undefined && lintResult.endLine != lintResult.startLine
                    ? lintResult.startLine
                    : undefined;
            if (line == undefined) {
                continue;
            }
            try {
                const thread = await client.addPullRequestReviewThread({
                    pullRequestId: pullRequest.id,
                    pullRequestReviewId: pullRequestReviewId,
                    body: createLintInlineComment(createInlineComment(lintResult), option.reportName),
                    path: trimPath(context, lintResult.path),
                    line: line,
                    startLine: startLine,
                });
                if (
                    thread?.addPullRequestReviewThread?.thread?.id != null &&
                    thread.addPullRequestReviewThread.thread.id != undefined
                ) {
                    reportedLintResults.push(lintResult);
                } else {
                    cannotReportedLintResults.push(lintResult);
                }
            } catch {
                cannotReportedLintResults.push(lintResult);
            }
        }

        if (0 < reportedLintResults.length) {
            await client.submitPullRequestReview({
                pullRequestId: pullRequest.id,
                pullRequestReviewId: pullRequestReviewId,
            });
        } else {
            await client.deletePullRequestReview({ pullRequestReviewId: pullRequestReviewId });
        }

        return cannotReportedLintResults;
    }

    private async resolveOutdatedThreadsAndFiltered(
        client: GitHubClient,
        option: Option,
        loginUser: LoginUser,
        reviewThreads: GetPullRequestReviewThreadsQueryPullRequestReviewThreadsNode[],
    ): Promise<GetPullRequestReviewThreadsQueryPullRequestReviewThreadsNode[]> {
        const result: GetPullRequestReviewThreadsQueryPullRequestReviewThreadsNode[] = [];
        for (const reviewThread of reviewThreads) {
            if (reviewThread.comments.nodes == null || reviewThread.comments.nodes == undefined) {
                continue;
            }
            if (reviewThread.comments.nodes.length == 0) {
                continue;
            }
            if (reviewThread.comments.nodes[0] == null || reviewThread.comments.nodes[0] == undefined) {
                continue;
            }
            if (reviewThread.comments.nodes[0].author?.login != loginUser.login) {
                continue;
            }
            if (isLintInlineComment(reviewThread.comments.nodes[0].body, option.reportName) == false) {
                continue;
            }
            if (reviewThread.isOutdated) {
                switch (option.outdatedResolver) {
                    case OutdatedResolver.ResolveThread:
                        if (reviewThread.isResolved == false && reviewThread.comments.pageInfo.hasNextPage == false) {
                            await client.resolvePullRequestReviewThread({ pullRequestThreadId: reviewThread.id });
                        }
                        break;
                    case OutdatedResolver.ForceResolveThread:
                        if (reviewThread.isResolved == false) {
                            await client.resolvePullRequestReviewThread({ pullRequestThreadId: reviewThread.id });
                        }
                        break;
                    case OutdatedResolver.DeleteThread:
                        if (reviewThread.comments.pageInfo.hasNextPage == false) {
                            await client.deletePullRequestReviewComment({
                                pullRequestReviewCommentId: reviewThread.comments.nodes[0].id,
                            });
                        }
                        break;
                    case OutdatedResolver.DeleteOrForceResolveThread:
                        if (reviewThread.comments.pageInfo.hasNextPage == false) {
                            await client.deletePullRequestReviewComment({
                                pullRequestReviewCommentId: reviewThread.comments.nodes[0].id,
                            });
                        } else {
                            await client.resolvePullRequestReviewThread({ pullRequestThreadId: reviewThread.id });
                        }
                        break;
                }
            } else {
                result.push(reviewThread);
            }
        }
        return result;
    }
}
