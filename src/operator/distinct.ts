import * as core from "@actions/core";
import { getFunctionalOption } from "./option";
import { FunctionalOperator } from "./operator";

export class DistinctOperator extends FunctionalOperator {
    createScript(method: string): string {
        return `
const keys = [];
for(const lintResult of source){
    const key = (${method})(Object.assign({}, lintResult)); 
    if(keys.includes(key))
        continue;
    result.push(lintResult); 
    keys.push(key);
}`;
    }
}

async function run() {
    try {
        const option = getFunctionalOption();
        const operator = new DistinctOperator();
        await operator.operate(option);
    } catch (error) {
        core.setFailed(error.message);
    }
}

if (process.env.NODE_ENV != "test") {
    run();
}
