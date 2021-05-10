import { TextLintTransformer } from "../../src/transformer/textlint";
import { LintResult } from "../../src/lint-result";
import * as fs from "fs";

test("transform", async () => {
    const text = fs.readFileSync("data/textlint.json", "utf-8");
    const transformer = new TextLintTransformer();
    const result = transformer.parse(text);

    expect(result.length).toBe(2);
    expect(result[0]).toMatchObject({
        path: "test/filepath.md",
        rule: "no-todo",
        message: "Found TODO: 'ToDo: test message'",
        startLine: 2,
        endLine: undefined,
        startColumn: 3,
        endColumn: undefined,
        level: "failure",
    } as LintResult);
    expect(result[1]).toMatchObject({
        path: "test/filepath.md",
        rule: "no-todo",
        message: "Found TODO: 'ToDo: write'",
        startLine: 5,
        endLine: undefined,
        startColumn: 3,
        endColumn: undefined,
        level: "failure",
    } as LintResult);
});
