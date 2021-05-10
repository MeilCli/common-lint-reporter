import { JunitTestSuite, JunitTestCase, JunitTestMessage } from "./entity";
import { LintResult } from "../../lint-result";
import { JunitHandler } from "./junit-handler";

export class EslintJunitHandler implements JunitHandler {
    match(testSuites: JunitTestSuite[]): boolean {
        if (testSuites.length == 0) {
            return false;
        }
        return testSuites[0].package == "org.eslint";
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
        this.handleTestCases(result, testSuite.testCases, testSuite);
        this.handleTestSuites(result, testSuite.testSuites);
    }

    private handleTestCases(result: LintResult[], testCases: JunitTestCase[], testSuite: JunitTestSuite) {
        for (const testCase of testCases) {
            this.handleTestCase(result, testCase, testSuite);
        }
    }

    private handleTestCase(result: LintResult[], testCase: JunitTestCase, testSuite: JunitTestSuite) {
        // ref: https://github.com/eslint/eslint/blob/master/lib/cli-engine/formatters/junit.js
        for (const failure of testCase.failures) {
            result.push({
                path: testSuite.name,
                message: failure.message,
                level: "warning",
                rule: testCase.name.slice("org.eslint.".length),
                startLine: this.findLine(failure),
                startColumn: undefined,
                endLine: undefined,
                endColumn: undefined,
            });
        }
        for (const error of testCase.errors) {
            result.push({
                path: testSuite.name,
                message: error.message,
                level: "failure",
                rule: testCase.name.slice("org.eslint.".length),
                startLine: this.findLine(error),
                startColumn: undefined,
                endLine: undefined,
                endColumn: undefined,
            });
        }
    }

    private findLine(message: JunitTestMessage): number {
        const targetLength = "line ".length;
        const index = message.body.indexOf("line ");
        if (index < 0) {
            return 0;
        }
        const lastIndex = message.body.indexOf(" ", index + targetLength);
        if (lastIndex < 0) {
            return 0;
        }
        const lineText = message.body.slice(index + targetLength, lastIndex);
        const line = parseInt(lineText);
        if (Number.isInteger(line)) {
            return line;
        }
        return 0;
    }
}
