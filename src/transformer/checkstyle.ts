import * as core from "@actions/core";
import * as xml from "fast-xml-parser";
import * as he from "he";
import { getOption } from "./option";
import { LintResult } from "../lint-result";
import { Transformer } from "./transformer";

interface Checkstyle {
    checkstyle: CheckstyleReport[];
}

interface CheckstyleReport {
    file: CheckstyleReportFile[];
}

interface CheckstyleReportFile {
    name: string;
    error: CheckstyleReportError[];
}

interface CheckstyleReportError {
    line: number;
    column: number;
    severity: string;
    message: string;
    source: string;
}

export class CheckstyleTransformer extends Transformer {
    parse(body: string): LintResult[] {
        const lintResults: LintResult[] = [];
        const checkstyles = xml.parse(body, {
            arrayMode: true,
            ignoreAttributes: false,
            attributeNamePrefix: "",
            parseAttributeValue: true,
            attrValueProcessor: (value, _) => he.decode(value),
        }) as Checkstyle;
        for (const checkstyle of checkstyles.checkstyle) {
            for (const checkstyleFile of checkstyle.file) {
                for (const error of checkstyleFile.error) {
                    const level =
                        error.severity == "warning" ? "warning" : error.severity == "error" ? "failure" : "notice";
                    lintResults.push({
                        path: checkstyleFile.name,
                        rule: error.source,
                        message: error.message,
                        startLine: error.line,
                        endLine: undefined,
                        startColumn: error.column,
                        endColumn: undefined,
                        level: level,
                    });
                }
            }
        }
        return lintResults;
    }
}

async function run() {
    try {
        const option = getOption();
        const transformer = new CheckstyleTransformer();
        await transformer.transform(option);
    } catch (error) {
        core.setFailed(error.message);
    }
}

if (process.env.NODE_ENV != "test") {
    run();
}
