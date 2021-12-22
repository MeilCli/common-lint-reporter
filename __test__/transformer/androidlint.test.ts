import { AndroidLintTransformer } from "../../src/transformer/androidlint";
import { LintResult } from "../../src/lint-result";
import * as fs from "fs";

test("transform", async () => {
    const text = fs.readFileSync("data/androidlint.xml", "utf-8");
    const transformer = new AndroidLintTransformer();
    const result = transformer.parse(text);

    expect(result.length).toBe(3);
    expect(result[0]).toMatchObject({
        path: "filepath.xml",
        rule: "Performance.Overdraw",
        message:
            "Overdraw: Painting regions more than once\n\nPossible overdraw: Root element paints background `?attr/selectableItemBackground` with a theme that also paints a background (inferred theme is `@android:style/Theme.Holo`)",
        startLine: 6,
        endLine: undefined,
        startColumn: 5,
        endColumn: undefined,
        level: "warning",
    } as LintResult);
    expect(result[1]).toMatchObject({
        path: "filepath.xml",
        rule: "Performance.Overdraw",
        message:
            "Overdraw: Painting regions more than once\n\nPossible overdraw: Root element paints background `?attr/selectableItemBackground` with a theme that also paints a background (inferred theme is `@android:style/Theme.Holo`)",
        startLine: 6,
        endLine: undefined,
        startColumn: 5,
        endColumn: undefined,
        level: "warning",
    } as LintResult);
    expect(result[2]).toMatchObject({
        path: "filepath.xml",
        rule: "Performance.Overdraw",
        message:
            "Overdraw: Painting regions more than once\n\nPossible overdraw: Root element paints background `?attr/selectableItemBackground` with a theme that also paints a background (inferred theme is `@android:style/Theme.Holo`)",
        startLine: 6,
        endLine: undefined,
        startColumn: 5,
        endColumn: undefined,
        level: "warning",
    } as LintResult);
});

test("transformEmpty", async () => {
    const text = fs.readFileSync("data/androidlint_empty.xml", "utf-8");
    const transformer = new AndroidLintTransformer();
    const result = transformer.parse(text);

    expect(result.length).toBe(0);
});
