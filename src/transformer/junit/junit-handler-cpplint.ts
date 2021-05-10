import { JunitTestSuite, JunitTestCase } from "./entity";
import { LintResult } from "../../lint-result";
import { JunitHandler } from "./junit-handler";
import * as he from "he";

export class CpplintJunitHandler implements JunitHandler {
    match(testSuites: JunitTestSuite[]): boolean {
        if (testSuites.length == 0) {
            return false;
        }
        return testSuites[0].name == "cpplint";
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
            for (const message of this.parseBody(failure.body)) {
                result.push({
                    path: testCase.name,
                    message: message[1],
                    level: message[3] == 5 ? "failure" : 3 <= message[3] ? "warning" : "notice",
                    rule: message[2],
                    startLine: message[0],
                    startColumn: undefined,
                    endLine: undefined,
                    endColumn: undefined,
                });
            }
        }
        for (const error of testCase.errors) {
            for (const message of this.parseBody(error.body)) {
                result.push({
                    path: testCase.name,
                    message: message[1],
                    level: message[3] == 5 ? "failure" : 3 <= message[3] ? "warning" : "notice",
                    rule: message[2],
                    startLine: message[0],
                    startColumn: undefined,
                    endLine: undefined,
                    endColumn: undefined,
                });
            }
        }
    }

    private parseBody(body: string): [number, string, string, number][] {
        const result: [number, string, string, number][] = [];
        for (const line of body.split(/(\r\n)|\n|\r/g)) {
            if (line == undefined || line.length == 0) {
                continue;
            }

            const rawStartLine = line.replace(/^(\d+):\s(.+)\s\[(.+?)\]\s\[(\d)\]$/, "$1");
            const rawMessage = line.replace(/^(\d+):\s(.+)\s\[(.+?)\]\s\[(\d)\]$/, "$2");
            const rawRule = line.replace(/^(\d+):\s(.+)\s\[(.+?)\]\s\[(\d)\]$/, "$3");
            const rawConfidence = line.replace(/^(\d+):\s(.+)\s\[(.+?)\]\s\[(\d)\]$/, "$4");
            if (
                rawStartLine.length == 0 ||
                rawMessage.length == 0 ||
                rawRule.length == 0 ||
                rawConfidence.length == 0
            ) {
                continue;
            }
            const startLine = parseInt(rawStartLine);
            const message = he.decode(rawMessage);
            const rule = he.decode(rawRule);
            const confidence = parseInt(rawConfidence);
            if (Number.isInteger(startLine) == false || Number.isInteger(confidence) == false) {
                continue;
            }

            result.push([startLine == 0 ? 1 : startLine, message, rule, confidence]);
        }
        return result;
    }
}
