import { EslintTransformer } from "../../src/transformer/eslint";
import { LintResult } from "../../src/lint-result";
import * as fs from "fs";

test("transform", async () => {
    const text = fs.readFileSync("data/eslint.json", "utf-8");
    const transformer = new EslintTransformer();
    const result = transformer.parse(text);

    expect(result.length).toBe(3);
    expect(result[0]).toMatchObject({
        path: "filepath.txt",
        rule: "@typescript-eslint/no-unused-vars",
        message: "'method' is defined but never used.",
        startLine: 1,
        endLine: 1,
        startColumn: 10,
        endColumn: 16,
        level: "failure",
    } as LintResult);
    expect(result[1]).toMatchObject({
        path: "filepath.txt",
        rule: "filepath.txt",
        message: "Insert `·`",
        startLine: 1,
        endLine: 1,
        startColumn: 18,
        endColumn: 18,
        level: "failure",
    } as LintResult);
    expect(result[2]).toMatchObject({
        path: "filepath.txt",
        rule: "@typescript-eslint/no-unused-vars",
        message: "'a' is assigned a value but never used.",
        startLine: 2,
        endLine: 2,
        startColumn: 11,
        endColumn: 12,
        level: "failure",
    } as LintResult);
});
