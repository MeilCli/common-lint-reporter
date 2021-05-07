import { Option } from "../option";
import { LintResult } from "../lint-result";
import { CheckConclusionState } from "../../graphql/graphql";
import { countLevel } from "./level";

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
