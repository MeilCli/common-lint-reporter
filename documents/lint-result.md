# Lint result file format
Lint result file format is simply JSON

```ts
type LintResultLevel = "notice" | "warning" | "failure";

interface LintResult {
    path: string;
    rule: string;
    message: string;
    startLine: number | undefined;
    endLine: number | undefined;
    startColumn: number | undefined;
    endColumn: number | undefined;
    level: LintResultLevel;
}
```

Lint result json is array of `LintResult`