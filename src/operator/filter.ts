import * as core from "@actions/core";
import { getOption } from "./option";
import { Operator } from "./operator";

export class FilterOperator extends Operator {
    createScript(method: string): string {
        return `for(const lintResult of source){ const predicate = (${method})(Object.assign({}, lintResult)); if(predicate) result.push(lintResult); }`;
    }
}

async function run() {
    try {
        const option = getOption();
        const operator = new FilterOperator();
        await operator.operate(option);
    } catch (error) {
        core.setFailed(error.message);
    }
}

if (process.env.NODE_ENV != "test") {
    run();
}
