import { DotnetFormatTransformer } from "../../src/transformer/dotnetformat";
import { LintResult } from "../../src/lint-result";
import * as fs from "fs";

test("transform", async () => {
    const text = fs.readFileSync("data/dotnetformat.json", "utf-8");
    const transformer = new DotnetFormatTransformer();
    const result = transformer.parse(text);

    expect(result.length).toBe(3);
    expect(result[0]).toMatchObject({
        path: "Project/Program.cs",
        rule: "WHITESPACE",
        message: "空白の書式設定を修正します。 Insert '\\s'.",
        startLine: 3,
        endLine: undefined,
        startColumn: 12,
        endColumn: undefined,
        level: "warning",
    } as LintResult);
    expect(result[1]).toMatchObject({
        path: "Project/Program.cs",
        rule: "WHITESPACE",
        message: "空白の書式設定を修正します。 Insert '\\s'.",
        startLine: 3,
        endLine: undefined,
        startColumn: 13,
        endColumn: undefined,
        level: "warning",
    } as LintResult);
    expect(result[2]).toMatchObject({
        path: "Project/Program.cs",
        rule: "CS0219",
        message: "warning CS0219: 変数 'text' は割り当てられていますが、その値は使用されていません",
        startLine: 3,
        endLine: undefined,
        startColumn: 8,
        endColumn: undefined,
        level: "warning",
    } as LintResult);
});
