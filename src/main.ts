import * as core from "@actions/core";
import { getOption, ReportType } from "./option.js";
import { readLintResults } from "./lint-result.js";
import { Reporter } from "./reporter.js";
import { CheckRunReporter } from "./reporter/check-run/check-run-reporter.js";
import { CommentReporter } from "./reporter/comment/comment-reporter.js";
import { InlineCommentReporter } from "./reporter/inline-comment/inline-comment-reporter.js";

async function run() {
    try {
        const option = getOption();
        const lintResults = await readLintResults(option);
        let reporter: Reporter;
        if (option.reportType == ReportType.Comment) {
            reporter = new CommentReporter();
        } else if (option.reportType == ReportType.InlineComment) {
            reporter = new InlineCommentReporter();
        } else {
            reporter = new CheckRunReporter();
        }
        await reporter.report(option, lintResults);
    } catch (error) {
        if (error instanceof Error) {
            core.setFailed(error.message);
        }
    }
}

run();
