import { LintResult, LintResultLevel } from "../../lint-result";
import { countLevel } from "../level";
import { GitHubContext } from "../../github/context";
import { trimPath } from "../path";

function lintCommentIdentifier(reportName: string): string {
    return `<!-- common-lint-reporter: ${reportName} -->`;
}

export function isLintComment(body: string, reportName: string): boolean {
    return body.startsWith(lintCommentIdentifier(reportName));
}

export function createLintComment(body: string, reportName: string): string {
    return `${lintCommentIdentifier(reportName)}  ${body}`;
}

export function createComment(context: GitHubContext, lintResults: LintResult[]): string {
    let result = `# ${createTitle(lintResults)}\n`;
    result += `\n`;
    if (0 < countLevel(lintResults, "failure")) {
        result += `## Failure\n`;
        result += createLevelTable(context, lintResults, "failure");
    }
    if (0 < countLevel(lintResults, "warning")) {
        result += `## Warning\n`;
        result += createLevelTable(context, lintResults, "warning");
    }
    if (0 < countLevel(lintResults, "notice")) {
        result += `## Notice\n`;
        result += createLevelTable(context, lintResults, "notice");
    }
    return result;
}

function createTitle(lintResults: LintResult[]): string {
    const noticeCount = countLevel(lintResults, "notice");
    const warningCount = countLevel(lintResults, "warning");
    const failureCount = countLevel(lintResults, "failure");
    const messages: string[] = [];
    if (noticeCount == 1) {
        messages.push("1 notice");
    }
    if (2 <= noticeCount) {
        messages.push(`${noticeCount} notices`);
    }
    if (warningCount == 1) {
        messages.push("1 warning");
    }
    if (2 <= warningCount) {
        messages.push(`${warningCount} warnings`);
    }
    if (failureCount == 1) {
        messages.push("1 failure");
    }
    if (2 <= failureCount) {
        messages.push(`${failureCount} failures`);
    }
    if (messages.length == 0) {
        return "lint message is empty";
    }
    return `${messages.join(" and ")} found`;
}

function createLevelTable(context: GitHubContext, lintResults: LintResult[], targetLevel: LintResultLevel): string {
    let result = "|file|message|rule|";
    for (const lintResult of lintResults) {
        if (lintResult.level != targetLevel) {
            continue;
        }
        let line = "";
        if (lintResult.startLine != undefined) {
            line += `L${lintResult.startLine}`;
        }
        if (
            lintResult.startLine != undefined &&
            lintResult.endLine != undefined &&
            lintResult.startLine != lintResult.endLine
        ) {
            line += `-L${lintResult.endLine}`;
        }
        const baseUrl = `https://github.com/${context.owner()}/${context.repository()}`;
        const link = `${baseUrl}/blob/${context.commitSha()}/${trimPath(context, lintResult.path)}#${line}`;
        result += `|[${trimPath(context, lintResult.path)} ${line}](${link})|${lintResult.message}|${
            lintResult.rule
        }|\n`;
    }
    return result;
}
