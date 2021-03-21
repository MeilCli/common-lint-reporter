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
        const a1: any = "a";
        const a2: any = "a";
        const a3: any = "a";
        const a4: any = "a";
        const a5: any = "a";
        const a6: any = "a";
        const a7: any = "a";
        const a8: any = "a";
        const a9: any = "a";
        const a10: any = "a";
        const a11: any = "a";
        const a12: any = "a";
        const a13: any = "a";
        const a14: any = "a";
        const a15: any = "a";
        const a16: any = "a";
        const a17: any = "a";
        const a18: any = "a";
        const a19: any = "a";
        const a20: any = "a";
        const a21: any = "a";
        const a22: any = "a";
        const a23: any = "a";
        const a24: any = "a";
        const a25: any = "a";
        const a26: any = "a";
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
