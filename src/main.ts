import * as core from "@actions/core";
import { getOption } from "./option";

async function run() {
    try {
        const option = getOption();
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
