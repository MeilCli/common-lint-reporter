import * as fs from "fs";
import * as core from "@actions/core";
import * as glob from "@actions/glob";
import { LintResult } from "../lint-result";

interface Option {
    reportFiles: string;
    reportFilesFollowSymbolicLinks: boolean;
    expectDataJson: string;
}

function getOption(): Option {
    return {
        reportFiles: getInput("report_files"),
        reportFilesFollowSymbolicLinks: getInputOrNull("report_files_follow_symbolic_links") == "true",
        expectDataJson: getInput("expect_data_json"),
    };
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

async function run() {
    try {
        const option = getOption();
        const globber = await glob.create(option.reportFiles, {
            followSymbolicLinks: option.reportFilesFollowSymbolicLinks,
        });
        const source: LintResult[] = [];
        for await (const path of globber.globGenerator()) {
            const lintResults = JSON.parse(fs.readFileSync(path, "utf-8")) as LintResult[];
            source.push(...lintResults);
        }
        const expect = JSON.parse(option.expectDataJson) as LintResult[];

        if (expect.length != source.length) {
            core.setFailed(`source length(${source.length}) is not match expect length(${expect.length})`);
            return;
        }
        for (let i = 0; i < expect.length; i++) {
            const s = source[i];
            const e = expect[i];
            if (s.path !== e.path) {
                core.setFailed(`source path(${s.path}) is not match expect path(${e.path}) at index ${i}`);
                return;
            }
            if (s.rule !== e.rule) {
                core.setFailed(`source rule(${s.rule}) is not match expect rule(${e.rule}) at index ${i}`);
                return;
            }
            if (s.message !== e.message) {
                core.setFailed(`source message(${s.message}) is not match expect message(${e.message}) at index ${i}`);
                return;
            }
            if (s.level !== e.level) {
                core.setFailed(`source level(${s.level}) is not match expect level(${e.level}) at index ${i}`);
                return;
            }
            if (s.startLine !== e.startLine) {
                core.setFailed(
                    `source startLine(${s.startLine}) is not match expect startLine(${e.startLine}) at index ${i}`,
                );
                return;
            }
            if (s.endLine !== e.endLine) {
                core.setFailed(`source endLine(${s.endLine}) is not match expect endLine(${e.endLine}) at index ${i}`);
                return;
            }
            if (s.startColumn !== e.startColumn) {
                core.setFailed(
                    `source startColumn(${s.startColumn}) is not match expect startColumn(${e.startColumn}) at index ${i}`,
                );
                return;
            }
            if (s.endColumn !== e.endColumn) {
                core.setFailed(
                    `source endColumn(${s.endColumn}) is not match expect endColumn(${e.endColumn}) at index ${i}`,
                );
                return;
            }
        }
    } catch (error) {
        if (error instanceof Error) {
            core.setFailed(error.message);
        }
    }
}

run();
