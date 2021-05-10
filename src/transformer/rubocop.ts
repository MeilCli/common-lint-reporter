import * as core from "@actions/core";
import { getOption } from "./option";
import { LintResult, LintResultLevel } from "../lint-result";
import { Transformer } from "./transformer";

interface RubocopReport {
    files: RubocopFile[];
}

interface RubocopFile {
    path: string;
    offenses: RubocopMessage[];
}

interface RubocopMessage {
    cop_name: string;
    severity: string;
    message: string;
    location: RubocopLocation;
}

interface RubocopLocation {
    start_line: number;
    start_column: number;
    last_line: number;
    last_column: number;
}

export class RubocopTransformer extends Transformer {
    parse(body: string): LintResult[] {
        const lintResults: LintResult[] = [];
        const rubocopReport = JSON.parse(body) as RubocopReport;
        for (const rubocopFile of rubocopReport.files) {
            for (const message of rubocopFile.offenses) {
                let level: LintResultLevel = "notice";
                switch (message.severity) {
                    case "convention":
                    case "warning":
                        level = "warning";
                        break;
                    case "error":
                    case "fatal":
                        level = "failure";
                        break;
                    default:
                        level = "notice";
                        break;
                }

                const searchTarget = `${message.cop_name}: `;
                const ruleIndex = message.message.indexOf(searchTarget);
                if (ruleIndex < 0) {
                    continue;
                }
                const escapedMessage = message.message.slice(ruleIndex + searchTarget.length);

                const location = message.location;
                const startColumn =
                    location.start_line == location.last_line && location.last_column < location.start_column
                        ? location.last_column
                        : location.start_column;
                const endColumn =
                    location.start_line == location.last_line && location.last_column < location.start_column
                        ? location.start_column
                        : location.last_column;

                lintResults.push({
                    path: rubocopFile.path,
                    rule: message.cop_name,
                    message: escapedMessage,
                    startLine: message.location.start_line,
                    endLine: message.location.last_line,
                    startColumn: startColumn,
                    endColumn: endColumn,
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
        const transformer = new RubocopTransformer();
        await transformer.transform(option);
    } catch (error) {
        core.setFailed(error.message);
    }
}

if (process.env.NODE_ENV != "test") {
    run();
}
