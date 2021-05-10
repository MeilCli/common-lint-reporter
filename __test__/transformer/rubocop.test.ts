import { RubocopTransformer } from "../../src/transformer/rubocop";
import { LintResult } from "../../src/lint-result";
import * as fs from "fs";

test("transform", async () => {
    const text = fs.readFileSync("data/rubocop.json", "utf-8");
    const transformer = new RubocopTransformer();
    const result = transformer.parse(text);

    expect(result.length).toBe(5);
    expect(result[0]).toMatchObject({
        path: "data/rubocop/test.rb",
        rule: "Style/FrozenStringLiteralComment",
        message: `Missing frozen string literal comment.`,
        startLine: 1,
        endLine: 1,
        startColumn: 1,
        endColumn: 1,
        level: "warning",
    } as LintResult);
    expect(result[1]).toMatchObject({
        path: "data/rubocop/test.rb",
        rule: "Layout/SpaceAroundOperators",
        message: "Surrounding space missing for operator `=`.",
        startLine: 1,
        endLine: 1,
        startColumn: 6,
        endColumn: 6,
        level: "warning",
    } as LintResult);
    expect(result[2]).toMatchObject({
        path: "data/rubocop/test.rb",
        rule: "Style/StringLiterals",
        message: `Prefer single-quoted strings when you don't need string interpolation or special symbols.`,
        startLine: 1,
        endLine: 1,
        startColumn: 7,
        endColumn: 13,
        level: "warning",
    } as LintResult);
    expect(result[3]).toMatchObject({
        path: "data/rubocop/test.rb",
        rule: "Layout/EndOfLine",
        message: `Carriage return character missing.`,
        startLine: 2,
        endLine: 2,
        startColumn: 1,
        endColumn: 9,
        level: "warning",
    } as LintResult);
    expect(result[4]).toMatchObject({
        path: "data/rubocop/test.rb",
        rule: "Layout/TrailingEmptyLines",
        message: `Final newline missing.`,
        startLine: 2,
        endLine: 2,
        startColumn: 9,
        endColumn: 10,
        level: "warning",
    } as LintResult);
});
