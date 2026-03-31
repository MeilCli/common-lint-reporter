import { Option } from "../option.js";
import { LintResult } from "../lint-result.js";
import { CheckConclusionState } from "../../graphql/graphql.js";
import { countLevel } from "./level.js";

export function calculateConclusion(option: Option, lintResults: LintResult[]): CheckConclusionState {
    const noticeCount = countLevel(lintResults, "notice");
    const warningCount = countLevel(lintResults, "warning");
    const failureCount = countLevel(lintResults, "failure");
    const score =
        noticeCount * option.conclusionNoticeWeight +
        warningCount * option.conclusionWarningWeight +
        failureCount * option.conclusionFailureWeight;
    return score < option.conclusionFailureThreshold ? CheckConclusionState.Success : CheckConclusionState.Failure;
}
