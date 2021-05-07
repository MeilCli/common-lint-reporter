import * as core from "@actions/core";
import * as fs from "fs";
import { Context } from "./context";

function getInput(key: string): string {
    return core.getInput(key, { required: true });
}

async function run() {
    try {
        const inputPath = getInput("input_path");
        const context = JSON.parse(fs.readFileSync(inputPath, "utf-8")) as Context;
        core.setOutput("pull_request", context.pullRequest);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
