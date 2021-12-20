import * as core from "@actions/core";
import { getOption } from "./option";
import { LintResult, LintResultLevel } from "../lint-result";
import { Transformer } from "./transformer";

interface TextLintReport {
    filePath: string;
    messages: TextLintReportMessage[];
}

interface TextLintReportMessage {
    ruleId: string;
    severity: number;
    message: string;
    line: number;
    column: number;
    endLine: number;
    endColumn: number;
}

export class TextLintTransformer extends Transformer {
    parse(body: string): LintResult[] {
        const lintResults: LintResult[] = [];
        const textLintReports = JSON.parse(body) as TextLintReport[];
        for (const textLintReport of textLintReports) {
            for (const message of textLintReport.messages) {
                let level: LintResultLevel = "notice";
                switch (message.severity) {
                    case 0:
                        level = "notice";
                        break;
                    case 1:
                        level = "warning";
                        break;
                    case 2:
                        level = "failure";
                        break;
                }
                lintResults.push({
                    path: textLintReport.filePath,
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
        const transformer = new TextLintTransformer();
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
