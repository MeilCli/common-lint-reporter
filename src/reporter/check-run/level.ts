import { LintResult, LintResultLevel } from "../../lint-result";

export function countLevel(lintResults: LintResult[], targetLevel: LintResultLevel): number {
    let count = 0;
    for (const lintResult of lintResults) {
        if (lintResult.level == targetLevel) {
            count += 1;
        }
    }
    return count;
}
