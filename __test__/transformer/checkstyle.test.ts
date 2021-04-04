import { CheckstyleTransformer } from "../../src/transformer/checkstyle";
import { LintResult } from "../../src/lint-result";
import * as fs from "fs";

test("transform", async () => {
    const text = fs.readFileSync("data/checkstyle.xml", "utf-8");
    const transformer = new CheckstyleTransformer();
    const result = transformer.parse(text);

    expect(result.length).toBe(3);
    expect(result[0]).toMatchObject({
        path: "filepath.txt",
        rule: "eslint.rules.@typescript-eslint/no-unused-vars",
        message: "'method' is defined but never used. (@typescript-eslint/no-unused-vars)",
        startLine: 1,
        endLine: undefined,
        startColumn: 10,
        endColumn: undefined,
        level: "warning",
    } as LintResult);
    expect(result[1]).toMatchObject({
        path: "filepath.txt",
        rule: "eslint.rules.prettier/prettier",
        message: "Insert `·` (prettier/prettier)",
        startLine: 1,
        endLine: undefined,
        startColumn: 18,
        endColumn: undefined,
        level: "failure",
    } as LintResult);
    expect(result[2]).toMatchObject({
        path: "filepath.txt",
        rule: "eslint.rules.@typescript-eslint/no-unused-vars",
        message: "'a' is assigned a value but never used. (@typescript-eslint/no-unused-vars)",
        startLine: 2,
        endLine: undefined,
        startColumn: 11,
        endColumn: undefined,
        level: "warning",
    } as LintResult);
});
