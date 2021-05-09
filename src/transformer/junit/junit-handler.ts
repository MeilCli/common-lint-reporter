import { LintResult } from "../../lint-result";
import { JunitTestSuite } from "./entity";

export interface JunitHandler {
    match: (testSuites: JunitTestSuite[]) => boolean;
    handle: (testSuites: JunitTestSuite[]) => LintResult[];
}
