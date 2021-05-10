import { StyleLintTransformer } from "../../src/transformer/stylelint";
import { LintResult } from "../../src/lint-result";
import * as fs from "fs";

test("transform", async () => {
    const text = fs.readFileSync("data/stylelint.json", "utf-8");
    const transformer = new StyleLintTransformer();
    const result = transformer.parse(text);

    expect(result.length).toBe(3);
    expect(result[0]).toMatchObject({
        path: "test/test.css",
        rule: "block-opening-brace-space-before",
        message: 'Expected single space before "{"',
        startLine: 1,
        endLine: undefined,
        startColumn: undefined,
        endColumn: undefined,
        level: "failure",
    } as LintResult);
    expect(result[1]).toMatchObject({
        path: "test/test.css",
        rule: "no-missing-end-of-source-newline",
        message: "Unexpected missing end-of-source newline",
        startLine: 3,
        endLine: undefined,
        startColumn: undefined,
        endColumn: undefined,
        level: "failure",
    } as LintResult);
    expect(result[2]).toMatchObject({
        path: "test/test.css",
        rule: "indentation",
        message: "Expected indentation of 2 spaces",
        startLine: 2,
        endLine: undefined,
        startColumn: undefined,
        endColumn: undefined,
        level: "failure",
    } as LintResult);
});
