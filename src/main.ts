import * as core from "@actions/core";
import { getOption, ReportType } from "./option";
import { readLintResults } from "./lint-result";
import { Reporter } from "./reporter";
import { CheckRunReporter } from "./reporter/check-run/check-run-reporter";
import { CommentReporter } from "./reporter/comment/comment-reporter";

async function run() {
    try {
        const option = getOption();
        const lintResults = await readLintResults(option);
        let reporter: Reporter;
        if (option.reportType == ReportType.Comment) {
            reporter = new CommentReporter();
        } else {
            reporter = new CheckRunReporter();
        }
        reporter.report(option, lintResults);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
