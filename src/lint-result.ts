import * as glob from "@actions/glob";
import * as fs from "fs";
import { Option } from "./option";

export type LintResultLevel = "notice" | "warning" | "failure";

export interface LintResult {
    path: string;
    rule: string;
    message: string;
    startLine: number | undefined;
    endLine: number | undefined;
    startColumn: number | undefined;
    endColumn: number | undefined;
    level: LintResultLevel;
}

export async function readLintResults(option: Option): Promise<LintResult[]> {
    const globber = await glob.create(option.reportFiles, {
        followSymbolicLinks: option.reportFilesFollowSymbolicLinks,
    });
    const result: LintResult[] = [];

    for await (const file of globber.globGenerator()) {
        const readContents = fs.readFileSync(file, "utf-8");
        const lintResults = JSON.parse(readContents) as LintResult[];
        result.push(...lintResults);
    }

    return result;
}

export function writeLintResults(path: string, lintResults: LintResult[]) {
    const text = JSON.stringify(lintResults);
    fs.writeFileSync(path, text);
}
