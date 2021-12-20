import * as core from "@actions/core";
import { getOperatorOption, OperatorOption } from "./option";
import { Operator } from "./operator";
import { LintResult } from "../lint-result";

export class FilterByFileChangedOperator extends Operator<OperatorOption> {
    async execute(lintResults: LintResult[], option: OperatorOption): Promise<LintResult[]> {
        const context = await this.createContext(option, lintResults, true);
        const api = context.github.api;
        if (api == null) {
            return [];
        }
        return lintResults.filter(
            (x) => api.changedFiles.filter((y) => y.path == context.github.trimPath(x.path)).length != 0
        );
    }
}

async function run() {
    try {
        const option = getOperatorOption();
        const operator = new FilterByFileChangedOperator();
        await operator.operate(option);
    } catch (error) {
        if (error instanceof Error) {
            core.setFailed(error.message);
        }
    }
}

if (process.env.NODE_ENV != "test") {
    run();
}
