import * as core from "@actions/core";
import { getOption } from "./option";
import { LintResult } from "../lint-result";
import { Transformer } from "./transformer";

interface StyleLintReport {
    source: string;
    warnings: StyleLintReportMessage[];
}

interface StyleLintReportMessage {
    rule: string;
    severity: string;
    text: string;
    line: number;
}

export class StyleLintTransformer extends Transformer {
    parse(body: string): LintResult[] {
        const lintResults: LintResult[] = [];
        const styleLintReports = JSON.parse(body) as StyleLintReport[];
        for (const styleLintReport of styleLintReports) {
            for (const message of styleLintReport.warnings) {
                const level = message.severity == "error" ? "failure" : "warning";
                lintResults.push({
                    path: styleLintReport.source,
                    rule: message.rule,
                    message: message.text.replace(/^(.+)\s(\(.+?\))$/, "$1"),
                    startLine: message.line,
                    endLine: undefined,
                    startColumn: undefined,
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
        const transformer = new StyleLintTransformer();
        await transformer.transform(option);
    } catch (error) {
        core.setFailed(error.message);
    }
}

if (process.env.NODE_ENV != "test") {
    run();
}
