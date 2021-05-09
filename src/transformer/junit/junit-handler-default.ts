import { JunitTestSuite, JunitTestCase } from "./entity";
import { LintResult } from "../../lint-result";
import { JunitHandler } from "./junit-handler";

export class DefaultJunitHandler implements JunitHandler {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    match(testSuites: JunitTestSuite[]): boolean {
        return true;
    }

    handle(testSuites: JunitTestSuite[]): LintResult[] {
        const result: LintResult[] = [];
        this.handleTestSuites(result, testSuites);
        return result;
    }

    private handleTestSuites(result: LintResult[], testSuites: JunitTestSuite[]) {
        for (const testSuite of testSuites) {
            this.handleTestSuite(result, testSuite);
        }
    }

    private handleTestSuite(result: LintResult[], testSuite: JunitTestSuite) {
        this.handleTestCases(result, testSuite.testCases);
        this.handleTestSuites(result, testSuite.testSuites);
    }

    private handleTestCases(result: LintResult[], testCases: JunitTestCase[]) {
        for (const testCase of testCases) {
            this.handleTestCase(result, testCase);
        }
    }

    private handleTestCase(result: LintResult[], testCase: JunitTestCase) {
        for (const failure of testCase.failures) {
            result.push({
                path: testCase.className,
                message: failure.message,
                level: "failure",
                rule: testCase.name,
                startLine: undefined,
                startColumn: undefined,
                endLine: undefined,
                endColumn: undefined,
            });
        }
        for (const error of testCase.errors) {
            result.push({
                path: testCase.className,
                message: error.message,
                level: "warning",
                rule: testCase.name,
                startLine: undefined,
                startColumn: undefined,
                endLine: undefined,
                endColumn: undefined,
            });
        }
    }
}
