import { LintResult } from "./lint-result.js";
import { Option } from "./option.js";

export interface Reporter {
    report: (option: Option, lintResults: LintResult[]) => Promise<void>;
}
