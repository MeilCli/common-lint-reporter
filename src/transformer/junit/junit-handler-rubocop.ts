import { JunitTestSuite, JunitTestCase, JunitTestMessage } from "./entity";
import { LintResult } from "../../lint-result";
import { JunitHandler } from "./junit-handler";

export class RubocopJunitHandler implements JunitHandler {
    match(testSuites: JunitTestSuite[]): boolean {
        if (testSuites.length == 0) {
            return false;
        }
        return testSuites[0].name == "rubocop";
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
            const pathAndLine = this.findPathAndLine(failure);
            result.push({
                path: pathAndLine[0],
                message: this.findMessage(testCase, failure),
                level: "warning",
                rule: testCase.name,
                startLine: pathAndLine[1],
                startColumn: undefined,
                endLine: undefined,
                endColumn: undefined,
            });
        }
        for (const error of testCase.errors) {
            const pathAndLine = this.findPathAndLine(error);
            result.push({
                path: pathAndLine[0],
                message: this.findMessage(testCase, error),
                level: "failure",
                rule: testCase.name,
                startLine: pathAndLine[1],
                startColumn: undefined,
                endLine: undefined,
                endColumn: undefined,
            });
        }
    }

    private findMessage(testCase: JunitTestCase, message: JunitTestMessage): string {
        const searchTarget = `${testCase.name}: `;
        const ruleIndex = message.message.indexOf(searchTarget);
        if (ruleIndex < 0) {
            return "";
        }
        return message.message.slice(ruleIndex + searchTarget.length);
    }

    private findPathAndLine(message: JunitTestMessage): [string, number] {
        const body = message.body.trim();
        const path = body.replace(/^(.+):(\d+):(\d+)$/, "$1");
        const line = parseInt(body.replace(/^(.+):(\d+):(\d+)$/, "$2"));
        if (Number.isInteger(line)) {
            return [path, line];
        }
        return [path, 1];
    }
}
