export interface JunitTestSuite {
    package: string;
    name: string;
    testCases: JunitTestCase[];
    testSuites: JunitTestSuite[];
}

export interface JunitTestCase {
    name: string;
    className: string;
    errors: JunitTestMessage[];
    failures: JunitTestMessage[];
}

export interface JunitTestMessage {
    message: string;
    body: string;
}
