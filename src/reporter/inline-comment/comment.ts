import { GetPullRequestReviewThreadsQueryPullRequestReviewThreadsNode } from "../../github/types";
import { LintResult } from "../../lint-result";

function lintInlineCommentIdentifier(reportName: string): string {
    return `<!-- common-lint-reporter: ${reportName} -->`;
}

export function isLintInlineComment(body: string, reportName: string): boolean {
    return body.startsWith(lintInlineCommentIdentifier(reportName));
}

export function createLintInlineComment(body: string, reportName: string): string {
    return `${lintInlineCommentIdentifier(reportName)}  \n${body}`;
}

export function createInlineComment(lintResult: LintResult): string {
    return `**Rule: ${lintResult.rule}**\n\n${lintResult.message}`;
}

export function equalsInlineComment(
    left: GetPullRequestReviewThreadsQueryPullRequestReviewThreadsNode,
    right: LintResult,
    reportName: string
): boolean {
    if (left.comments.nodes == null || left.comments.nodes == undefined) {
        return false;
    }
    if (left.comments.nodes.length < 1) {
        return false;
    }
    if (left.comments.nodes[0] == null || left.comments.nodes[0] == undefined) {
        return false;
    }
    if (left.path != right.path) {
        return false;
    }
    if (left.startLine) {
        if (left.line != right.endLine) {
            return false;
        }
        if (left.startLine != right.startLine) {
            return false;
        }
    } else {
        if (left.line != right.startLine) {
            return false;
        }
    }
    if (left.comments.nodes[0].body != createLintInlineComment(createInlineComment(right), reportName)) {
        return false;
    }

    return true;
}
