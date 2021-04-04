import * as core from "@actions/core";
import { getFunctionalOption } from "./option";
import { FunctionalOperator } from "./operator";

export class MapOperator extends FunctionalOperator {
    createScript(method: string): string {
        return `for(const lintResult of source){ const mapped = (${method})(Object.assign({}, lintResult)); result.push(mapped); }`;
    }
}

async function run() {
    try {
        const option = getFunctionalOption();
        const operator = new MapOperator();
        await operator.operate(option);
    } catch (error) {
        core.setFailed(error.message);
    }
}

if (process.env.NODE_ENV != "test") {
    run();
}
