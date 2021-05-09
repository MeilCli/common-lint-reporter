import * as core from "@actions/core";
import * as xml from "fast-xml-parser";
import * as he from "he";
import { getOption } from "./option";
import { LintResult } from "../lint-result";
import { Transformer } from "./transformer";
import { JunitTestSuite, JunitTestCase, JunitTestMessage } from "./junit/entity";
import { convertJunitToLintResult } from "./junit/convert";

interface JunitResult {
    testsuites: TestSuites[];
}

interface TestSuites {
    testsuite: TestSuite[] | undefined;
}

interface TestSuite {
    package: string;
    name: string;
    testcase: TestCase[] | undefined;
    testsuite: TestSuite[] | undefined;
}

interface TestCase {
    name: string;
    classname: string;
    error: TestMessage[] | undefined;
    failure: TestMessage[] | undefined;
}

interface TestMessage {
    message: string;
    "#text": string;
}

export class JunitTransformer extends Transformer {
    parse(body: string): LintResult[] {
        const junitResult = xml.parse(body, {
            arrayMode: true,
            ignoreAttributes: false,
            attributeNamePrefix: "",
            parseAttributeValue: true,
            attrValueProcessor: (value, _) => he.decode(value),
        }) as JunitResult;
        const junitTestSuites: JunitTestSuite[] = [];
        for (const testSuites of junitResult.testsuites) {
            junitTestSuites.push(...this.parseTestSuites(testSuites.testsuite));
        }
        return convertJunitToLintResult(junitTestSuites);
    }

    private parseTestSuites(testSuites: TestSuite[] | undefined): JunitTestSuite[] {
        if (testSuites == undefined) {
            return [];
        }
        const result: JunitTestSuite[] = [];
        for (const testSuite of testSuites) {
            result.push({
                name: testSuite.name,
                package: testSuite.package,
                testCases: this.parseTestCases(testSuite.testcase),
                testSuites: this.parseTestSuites(testSuite.testsuite),
            });
        }
        return result;
    }

    private parseTestCases(testCases: TestCase[] | undefined): JunitTestCase[] {
        if (testCases == undefined) {
            return [];
        }
        const result: JunitTestCase[] = [];
        for (const testCase of testCases) {
            result.push({
                name: testCase.name,
                className: testCase.classname,
                failures: this.parseTestMessages(testCase.failure),
                errors: this.parseTestMessages(testCase.error),
            });
        }
        return result;
    }

    private parseTestMessages(testMessages: TestMessage[] | undefined): JunitTestMessage[] {
        if (testMessages == undefined) {
            return [];
        }
        const result: JunitTestMessage[] = [];
        for (const testMessage of testMessages) {
            result.push({
                message: testMessage.message,
                body: he.decode(testMessage["#text"]),
            });
        }
        return result;
    }
}

async function run() {
    try {
        const option = getOption();
        const transformer = new JunitTransformer();
        await transformer.transform(option);
    } catch (error) {
        core.setFailed(error.message);
    }
}

if (process.env.NODE_ENV != "test") {
    run();
}
