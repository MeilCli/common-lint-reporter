import * as core from "@actions/core";
import { getOption } from "./option";
import { LintResult } from "../lint-result";
import { Transformer } from "./transformer";

export class MarkdownLintTransformer extends Transformer {
    parse(body: string): LintResult[] {
        const lintResults: LintResult[] = [];
        for (const line of body.split(/(\r\n)|\n|\r/g)) {
            if (line == undefined || line.length == 0) {
                continue;
            }
            const pathAndLineAndColumnEndIndex = line.indexOf(" ");
            if (pathAndLineAndColumnEndIndex < 0) {
                continue;
            }
            const pathAndLineAndColumn = line.slice(0, pathAndLineAndColumnEndIndex);
            const locations = pathAndLineAndColumn.split(":");
            const path = locations[0];
            const startLine =
                1 <= locations.length && Number.isInteger(parseInt(locations[1])) ? parseInt(locations[1]) : undefined;
            const ruleEndIndex = line.indexOf(" ", pathAndLineAndColumnEndIndex + 1);
            if (ruleEndIndex < 0) {
                continue;
            }
            const rule = line.slice(pathAndLineAndColumnEndIndex + 1, ruleEndIndex);
            const message = line.slice(ruleEndIndex + 1).replace(/^(.+?)\s?(\[.+\])*?$/, "$1");
            lintResults.push({
                path: path,
                message: message,
                rule: rule,
                startLine: startLine,
                startColumn: undefined,
                endLine: undefined,
                endColumn: undefined,
                level: "warning",
            });
        }
        return lintResults;
    }
}

async function run() {
    try {
        const option = getOption();
        const transformer = new MarkdownLintTransformer();
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
