import * as core from "@actions/core";
import * as fs from "fs";
import { githubContext } from "../github/context";
import { Context } from "./context";

function getInput(key: string): string {
    return core.getInput(key, { required: true });
}

async function run() {
    try {
        const context: Context = {
            pullRequest: githubContext(null).pullRequest(),
        };
        const outputPath = getInput("output_path");
        fs.writeFileSync(outputPath, JSON.stringify(context));
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
