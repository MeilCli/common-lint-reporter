import * as fs from "fs";
import * as core from "@actions/core";
import { LintResult } from "../lint-result";

export interface Option {
    outputPath: string;
    dataJson: string | null;
}

function getInput(key: string): string {
    return core.getInput(key, { required: true });
}

function getInputOrNull(key: string): string | null {
    const result = core.getInput(key, { required: false });
    if (result.length == 0) {
        return null;
    }
    return result;
}

function getOption(): Option {
    return {
        outputPath: getInput("output_path"),
        dataJson: getInputOrNull("data_json"),
    };
}

function writeFile(path: string, lintResults: LintResult[]) {
    fs.writeFileSync(path, JSON.stringify(lintResults));
}

function createDefaultData(): LintResult[] {
    return [
        {
            path: "test/path1.txt",
            rule: "test-rule1",
            message: "test message",
            level: "notice",
            startLine: undefined,
            startColumn: undefined,
            endLine: undefined,
            endColumn: undefined,
        },
        {
            path: "test/path1.txt",
            rule: "test-rule2",
            message: "test message",
            level: "warning",
            startLine: 1,
            startColumn: 10,
            endLine: 1,
            endColumn: 15,
        },
        {
            path: "test/path2.txt",
            rule: "test-rule2",
            message: "test message",
            level: "failure",
            startLine: 1,
            startColumn: 10,
            endLine: 1,
            endColumn: 15,
        },
    ];
}

async function run() {
    try {
        const option = getOption();
        const data = option.dataJson != null ? (JSON.parse(option.dataJson) as LintResult[]) : createDefaultData();
        writeFile(option.outputPath, data);
    } catch (error) {
        if (error instanceof Error) {
            core.setFailed(error.message);
        }
    }
}

run();
