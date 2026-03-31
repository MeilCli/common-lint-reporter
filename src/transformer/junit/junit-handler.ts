import { LintResult } from "../../lint-result.js";
import { JunitTestSuite } from "./entity.js";

export interface JunitHandler {
    match: (testSuites: JunitTestSuite[]) => boolean;
    handle: (testSuites: JunitTestSuite[]) => LintResult[];
}
