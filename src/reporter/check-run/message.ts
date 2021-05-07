import { LintResult, LintResultLevel } from "../../lint-result";
import { GitHubContext } from "../../github/context";
import { trimPath } from "../path";
import { countLevel } from "../level";

function markdownLevelMessage(context: GitHubContext, lintResults: LintResult[], targetLevel: LintResultLevel): string {
    let result = "";
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
        result += `### [${trimPath(context, lintResult.path)} ${line}](${link})\n`;
        result += `Rule: ${lintResult.rule}\n`;
        result += lintResult.message;
        result += "\n";
    }
    return result;
}

export function createMessage(context: GitHubContext, lintResults: LintResult[]): string {
    const noticeCount = countLevel(lintResults, "notice");
    const warningCount = countLevel(lintResults, "warning");
    const failureCount = countLevel(lintResults, "failure");
    let result = "";

    if (0 < failureCount) {
        if (failureCount == 1) {
            result += "## 1 Failure\n";
        } else {
            result += `## ${failureCount} Failures\n`;
        }
        result += markdownLevelMessage(context, lintResults, "failure");
    }
    if (0 < warningCount) {
        if (warningCount == 1) {
            result += "## 1 Warning\n";
        } else {
            result += `## ${warningCount} Warnings\n`;
        }
        result += markdownLevelMessage(context, lintResults, "warning");
    }
    if (0 < noticeCount) {
        if (noticeCount == 1) {
            result += "## 1 Notice\n";
        } else {
            result += `## ${noticeCount} Notices\n`;
        }
        result += markdownLevelMessage(context, lintResults, "notice");
    }

    return result;
}
