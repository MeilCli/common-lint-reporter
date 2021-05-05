import { AddOperator } from "../../src/operator/add";
import { LintResult } from "../../src/lint-result";
import { createOption } from "./functional-option.test";

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

test("executeAsFunctionStyle", () => {
    const operator = new AddOperator();
    const result = operator.execute(
        [],
        createOption(`
            function run() { 
                add({
                    path: "test/file.txt",
                    message: "test message",
                    rule: "test_rule_1",
                    startLine: 1,
                    startColumn: 10,
                    endLine: 1,
                    endColumn: 20,
                    level: "failure",
                })
            }
        `)
    );

    expectResult(result);
});

test("executeAsNoNameFunctionStyle", () => {
    const operator = new AddOperator();
    const result = operator.execute(
        [],
        createOption(`
            function () { 
                add({
                    path: "test/file.txt",
                    message: "test message",
                    rule: "test_rule_1",
                    startLine: 1,
                    startColumn: 10,
                    endLine: 1,
                    endColumn: 20,
                    level: "failure",
                })
            }
        `)
    );

    expectResult(result);
});

test("executeAsArrowStyle", () => {
    const operator = new AddOperator();
    const result = operator.execute(
        [],
        createOption(`() => add({
                    path: "test/file.txt",
                    message: "test message",
                    rule: "test_rule_1",
                    startLine: 1,
                    startColumn: 10,
                    endLine: 1,
                    endColumn: 20,
                    level: "failure",
                })
        `)
    );

    expectResult(result);
});
