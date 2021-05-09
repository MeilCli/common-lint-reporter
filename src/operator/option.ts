import * as core from "@actions/core";
import { CommonOption, getCommonOption } from "../option";

export interface OperatorOption extends CommonOption {
    reportFiles: string;
    reportFilesFollowSymbolicLinks: boolean;
    outputPath: string;
    useApiContext: boolean;
}

export interface FunctionalOption extends OperatorOption {
    func: string;
}

export function getOperatorOption(): OperatorOption {
    return {
        reportFiles: getInput("report_files"),
        reportFilesFollowSymbolicLinks: getInputOrNull("report_files_follow_symbolic_links") == "true",
        outputPath: getInput("output_path"),
        useApiContext: getInputOrNull("use_api_context") == "true",
        ...getCommonOption(),
    };
}

export function getFunctionalOption(): FunctionalOption {
    return {
        func: getInput("function"),
        ...getOperatorOption(),
    };
}

function getInput(key: string): string {
    return core.getInput(key, { required: true });
}

function getInputOrNull(key: string): string | null {
    const result = core.getInput(key, { required: false });
    if (result.length == 0) {
        return null;
    }
    return result;
}
