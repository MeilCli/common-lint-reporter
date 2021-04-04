import { MapOperator } from "../../src/operator/map";
import { LintResult } from "../../src/lint-result";

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
            level: "warning",
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
        level: "warning",
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
    expect(result.length).toBe(2);
    expect(result[0]).toMatchObject({
        path: "test/file.txt",
        message: "[test_rule_1] test message",
        rule: "test_rule_1",
        startLine: 1,
        startColumn: 10,
        endLine: 1,
        endColumn: 20,
        level: "warning",
    } as LintResult);
    expect(result[1]).toMatchObject({
        path: "test/file.txt",
        message: "[test_rule_2] test message",
        rule: "test_rule_2",
        startLine: 1,
        startColumn: 10,
        endLine: 1,
        endColumn: 20,
        level: "warning",
    } as LintResult);
}

test("executeAsFunctionStyle", () => {
    const operator = new MapOperator();
    const source = createSource();
    const result = operator.execute(source, "function map(x) { return { ...x, message: `[${x.rule}] ${x.message}` } }");

    expectSource(source);
    expectResult(result);
});

test("executeAsNoNameFunctionStyle", () => {
    const operator = new MapOperator();
    const source = createSource();
    const result = operator.execute(source, "function (x) { return { ...x, message: `[${x.rule}] ${x.message}` } }");

    expectSource(source);
    expectResult(result);
});

test("executeAsArrowStyle", () => {
    const operator = new MapOperator();
    const source = createSource();
    const result = operator.execute(source, "x => Object.assign(x, { message: `[${x.rule}] ${x.message}` })");

    expectSource(source);
    expectResult(result);
});
