import { MarkdownLintTransformer } from "../../src/transformer/markdownlint";
import * as fs from "fs";
import { test, expect } from "@jest/globals";

test("transform", async () => {
    const text = fs.readFileSync("data/markdownlint.txt", "utf-8");
    const transformer = new MarkdownLintTransformer();
    const result = transformer.parse(text);

    expect(result.length).toBe(3);
    expect(result[0]).toMatchObject({
        path: "data/markdownlint/test.md",
        rule: "MD022/blanks-around-headings/blanks-around-headers",
        message: "Headings should be surrounded by blank lines",
        startLine: 1,
        endLine: undefined,
        startColumn: undefined,
        endColumn: undefined,
        level: "warning",
    });
    expect(result[1]).toMatchObject({
        path: "data/markdownlint/test.md",
        rule: "MD041/first-line-heading/first-line-h1",
        message: "First line in a file should be a top-level heading",
        startLine: 1,
        endLine: undefined,
        startColumn: undefined,
        endColumn: undefined,
        level: "warning",
    });
    expect(result[2]).toMatchObject({
        path: "data/markdownlint/test.md",
        rule: "MD047/single-trailing-newline",
        message: "Files should end with a single newline character",
        startLine: 3,
        endLine: undefined,
        startColumn: undefined,
        endColumn: undefined,
        level: "warning",
    });
});
