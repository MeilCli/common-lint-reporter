import * as core from "@actions/core";
import { getOption } from "./option";
import { Operator } from "./operator";

export class MapOperator extends Operator {
    createScript(method: string): string {
        return `for(const lintResult of source){ const mapped = (${method})(Object.assign({}, lintResult)); result.push(mapped); }`;
    }
}

async function run() {
    try {
        const option = getOption();
        const operator = new MapOperator();
        await operator.operate(option);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
