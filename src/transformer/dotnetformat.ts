import * as core from "@actions/core";
import { getOption } from "./option.js";
import { LintResult } from "../lint-result.js";
import { Transformer } from "./transformer.js";

interface DotnetFormatReport {
    FilePath: string;
    FileChanges: DotnetFormatReportFileChange[];
}

interface DotnetFormatReportFileChange {
    DiagnosticId: string;
    FormatDescription: string;
    LineNumber: number;
    CharNumber: number;
}

export class DotnetFormatTransformer extends Transformer {
    parse(body: string): LintResult[] {
        const lintResults: LintResult[] = [];
        const dotnetFormatReports = JSON.parse(body) as DotnetFormatReport[];
        for (const dotnetFormatReport of dotnetFormatReports) {
            for (const changes of dotnetFormatReport.FileChanges) {
                lintResults.push({
                    path: dotnetFormatReport.FilePath,
                    rule: changes.DiagnosticId,
                    message: changes.FormatDescription,
                    startLine: changes.LineNumber,
                    endLine: undefined,
                    startColumn: changes.CharNumber,
                    endColumn: undefined,
                    level: "warning",
                });
            }
        }
        return lintResults;
    }
}

async function run() {
    try {
        const option = getOption();
        const transformer = new DotnetFormatTransformer();
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
