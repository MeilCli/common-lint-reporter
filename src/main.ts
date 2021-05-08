import * as core from "@actions/core";
import { getOption, ReportType } from "./option";
import { readLintResults } from "./lint-result";
import { Reporter } from "./reporter";
import { CheckRunReporter } from "./reporter/check-run/check-run-reporter";
import { CommentReporter } from "./reporter/comment/comment-reporter";
import { InlineCommentReporter } from "./reporter/inline-comment/inline-comment-reporter";

async function run() {
    try {
        const option = getOption();
        const b: any = "b";
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
        const a: any = "a";
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
