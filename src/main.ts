import * as core from "@actions/core";
import { getOption } from "./option";
import { readLintResults } from "./lint-result";
import { CheckRunReporter } from "./reporter/check-run-reporter";

async function run() {
    try {
        const option = getOption();
        const lintResults = await readLintResults(option);
        const reporter = new CheckRunReporter();
        reporter.report(option, lintResults);
        const a: any = "a";
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
