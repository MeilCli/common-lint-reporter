import * as core from "@actions/core";
import { getFunctionalOption } from "./option";
import { FunctionalOperator } from "./operator";

export class AddOperator extends FunctionalOperator {
    createScript(method: string): string {
        return `
const add = (x) => {
    if(x.path !== undefined && x.rule !== undefined && x.message !== undefined) {
        if(x.level === "notice" || x.level == "warning" || x.level == "failure") {
            result.push(x);
        }
    }
};
result.push(...source);
(${method})()`;
    }
}

async function run() {
    try {
        const option = getFunctionalOption();
        const operator = new AddOperator();
        await operator.operate(option);
    } catch (error) {
        core.setFailed(error.message);
    }
}

if (process.env.NODE_ENV != "test") {
    run();
}
