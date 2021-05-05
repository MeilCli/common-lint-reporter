import * as core from "@actions/core";

export interface CommonOption {
    workspacePath: string | null;
    repository: string | null;
    pullRequest: number | null;
    commitSha: string | null;
}

export function getCommonOption(): CommonOption {
    return {
        workspacePath: getInputOrNull("workspace_path"),
        repository: getInputOrNull("repository"),
        pullRequest: getInputNumberOrNull("pull_request"),
        commitSha: getInputOrNull("commit_sha"),
    };
}

export interface Option extends CommonOption {
    githubToken: string;
    reportFiles: string;
    reportFilesFollowSymbolicLinks: boolean;
    reportName: string;
    conclusionFailureThreshold: number;
    conclusionFailureWeight: number;
    conclusionWarningWeight: number;
    conclusionNoticeWeight: number;
}

export function getOption(): Option {
    return {
        githubToken: getInput("github_token"),
        reportFiles: getInput("report_files"),
        reportFilesFollowSymbolicLinks: getInputOrNull("report_files_follow_symbolic_links") == "true",
        reportName: getInput("report_name"),
        conclusionFailureThreshold: parseInt(getInput("conclusion_failure_threshold")),
        conclusionFailureWeight: parseInt(getInput("conclusion_failure_weight")),
        conclusionWarningWeight: parseInt(getInput("conclusion_warning_weight")),
        conclusionNoticeWeight: parseInt(getInput("conclusion_notice_weight")),
        ...getCommonOption(),
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

function getInputNumberOrNull(key: string): number | null {
    const value = getInputOrNull(key);
    if (value == null) {
        return null;
    }
    return parseInt(value);
}
