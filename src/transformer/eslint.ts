import * as core from "@actions/core";
import { getOption } from "./option";
import { LintResult } from "../lint-result";
import { Transformer } from "./transformer";

interface EsLintReport {
    filePath: string;
    messages: EsLintReportMessage[];
}

interface EsLintReportMessage {
    ruleId: string;
    severity: number;
    message: string;
    line: number;
    column: number;
    endLine: number;
    endColumn: number;
}

export class EslintTransformer extends Transformer {
    parse(body: string): LintResult[] {
        const lintResults: LintResult[] = [];
        const esLintReports = JSON.parse(body) as EsLintReport[];
        for (const esLintReport of esLintReports) {
            for (const message of esLintReport.messages) {
                const level = message.severity == 1 ? "warning" : "failure";
                lintResults.push({
                    path: esLintReport.filePath,
                    rule: message.ruleId,
                    message: message.message,
                    startLine: message.line,
                    endLine: message.endLine,
                    startColumn: message.column,
                    endColumn: message.endColumn,
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
        const transformer = new EslintTransformer();
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
