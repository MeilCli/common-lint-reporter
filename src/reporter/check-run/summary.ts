import { LintResult } from "../../lint-result";
import { countLevel } from "../level";

export function createSummary(lintResults: LintResult[]): string {
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
