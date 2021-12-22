import * as core from "@actions/core";
import * as xml from "fast-xml-parser";
import * as he from "he";
import { getOption } from "./option";
import { LintResult } from "../lint-result";
import { Transformer } from "./transformer";

interface AndroidLint {
    issues: AndroidLintIssues[];
}

interface AndroidLintIssues {
    issue: AndroidLintIssue[] | undefined;
}

interface AndroidLintIssue {
    id: string;
    category: string;
    severity: string;
    message: string;
    summary: string;
    location: AndroidLintLocation[];
}

interface AndroidLintLocation {
    line: number | undefined;
    column: number | undefined;
    file: string;
}

export class AndroidLintTransformer extends Transformer {
    parse(body: string): LintResult[] {
        const lintResults: LintResult[] = [];
        const androidLint = xml.parse(body, {
            arrayMode: true,
            ignoreAttributes: false,
            attributeNamePrefix: "",
            parseAttributeValue: true,
            attrValueProcessor: (value, _) => he.decode(value),
        }) as AndroidLint;
        for (const issues of androidLint.issues) {
            for (const issue of issues.issue ?? []) {
                const level = issue.severity == "Warning" ? "warning" : "failure";
                const location = issue.location[0];
                lintResults.push({
                    path: location.file,
                    rule: `${issue.category}.${issue.id}`,
                    message: `${issue.summary}\n\n${issue.message}`,
                    startLine: location.line,
                    endLine: undefined,
                    startColumn: location.column,
                    endColumn: undefined,
                    level: level,
                });
            }
        }
        return lintResults;
    }
}

async function run() {
    try {
        const option = getOption();
        const transformer = new AndroidLintTransformer();
        await transformer.transform(option);
    } catch (error) {
        if (error instanceof Error) {
            core.setFailed(error.message);
        }
    }
}

if (process.env.NODE_ENV != "test") {
    run();
}
