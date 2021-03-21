import * as core from "@actions/core";
import * as fs from "fs";
import * as glob from "@actions/glob";
import { getOption } from "./option";
import { LintResult } from "../lint-result";

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

async function run() {
    try {
        const option = getOption();
        const globber = await glob.create(option.reportFiles, {
            followSymbolicLinks: option.reportFilesFollowSymbolicLinks,
        });
        core.info("run");
        for await (const path of globber.globGenerator()) {
            core.info(`path: ${path}`);
            const lintResults: LintResult[] = [];
            const esLintReports = JSON.parse(fs.readFileSync(path, "utf-8")) as EsLintReport[];
            core.info(`reports: ${esLintReports.length}`);
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
            core.info(`result: ${JSON.stringify(lintResults)}`);
            fs.writeFileSync(`${path}.transformed`, JSON.stringify(lintResults));
        }
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
