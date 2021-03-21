import { LintResult } from "./lint-result";
import { Option } from "./option";

export interface Reporter {
    report: (option: Option, lintResults: LintResult[]) => Promise<void>;
}
