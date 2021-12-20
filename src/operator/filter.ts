import * as core from "@actions/core";
import { getFunctionalOption } from "./option";
import { FunctionalOperator } from "./operator";

export class FilterOperator extends FunctionalOperator {
    createScript(method: string): string {
        return `for(const lintResult of source){ const predicate = (${method})(Object.assign({}, lintResult)); if(predicate) result.push(lintResult); }`;
    }
}

async function run() {
    try {
        const option = getFunctionalOption();
        const operator = new FilterOperator();
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
