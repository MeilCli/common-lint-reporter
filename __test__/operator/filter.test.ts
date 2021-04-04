import { FilterOperator } from "../../src/operator/filter";
import { LintResult } from "../../src/lint-result";
import { FunctionalOption } from "../../src/operator/option";

function createSource(): LintResult[] {
    return [
        {
            path: "test/file.txt",
            message: "test message",
            rule: "test_rule_1",
            startLine: 1,
            startColumn: 10,
            endLine: 1,
            endColumn: 20,
            level: "failure",
        },
        {
            path: "test/file.txt",
            message: "test message",
            rule: "test_rule_2",
            startLine: 1,
            startColumn: 10,
            endLine: 1,
            endColumn: 20,
            level: "warning",
        },
    ];
}

function expectSource(source: LintResult[]) {
    expect(source.length).toBe(2);
    expect(source[0]).toMatchObject({
        path: "test/file.txt",
        message: "test message",
        rule: "test_rule_1",
        startLine: 1,
        startColumn: 10,
        endLine: 1,
        endColumn: 20,
        level: "failure",
    } as LintResult);
    expect(source[1]).toMatchObject({
        path: "test/file.txt",
        message: "test message",
        rule: "test_rule_2",
        startLine: 1,
        startColumn: 10,
        endLine: 1,
        endColumn: 20,
        level: "warning",
    } as LintResult);
}

function expectResult(result: LintResult[]) {
    expect(result.length).toBe(1);
    expect(result[0]).toMatchObject({
        path: "test/file.txt",
        message: "test message",
        rule: "test_rule_1",
        startLine: 1,
        startColumn: 10,
        endLine: 1,
        endColumn: 20,
        level: "failure",
    } as LintResult);
}

function createOption(func: string): FunctionalOption {
    return {
        reportFiles: "",
        reportFilesFollowSymbolicLinks: true,
        func: func,
        outputPath: "",
    };
}

test("executeAsFunctionStyle", () => {
    const operator = new FilterOperator();
    const source = createSource();
    const result = operator.execute(source, createOption("function filter(x) { return x.level == 'failure' }"));

    expectSource(source);
    expectResult(result);
});

test("executeAsNoNameFunctionStyle", () => {
    const operator = new FilterOperator();
    const source = createSource();
    const result = operator.execute(source, createOption("function (x) { return x.level == 'failure' }"));

    expectSource(source);
    expectResult(result);
});

test("executeAsArrowStyle", () => {
    const operator = new FilterOperator();
    const source = createSource();
    const result = operator.execute(source, createOption("x => x.level == 'failure'"));

    expectSource(source);
    expectResult(result);
});
