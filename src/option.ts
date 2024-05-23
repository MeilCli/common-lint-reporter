import * as core from "@actions/core";

export interface CommonOption {
    githubToken: string;
    githubServerUrl: string | null;
    githubGraphqlApiUrl: string | null;
    workspacePath: string | null;
    repository: string | null;
    pullRequest: number | null;
    commitSha: string | null;
}

export function getCommonOption(): CommonOption {
    return {
        githubToken: getInput("github_token"),
        githubServerUrl: getInputOrNull("github_server_url"),
        githubGraphqlApiUrl: getInputOrNull("github_graphql_api_url"),
        workspacePath: getInputOrNull("workspace_path"),
        repository: getInputOrNull("repository"),
        pullRequest: getInputNumberOrNull("pull_request"),
        commitSha: getInputOrNull("commit_sha"),
    };
}

export interface Option extends CommonOption {
    reportFiles: string;
    reportFilesFollowSymbolicLinks: boolean;
    reportName: string;
    reportType: ReportType;
    conclusionFailureThreshold: number;
    conclusionFailureWeight: number;
    conclusionWarningWeight: number;
    conclusionNoticeWeight: number;
    /**
     * inline-comment only
     */
    outdatedResolver: OutdatedResolver;
}

export enum ReportType {
    CheckRun,
    Comment,
    InlineComment,
}

export enum OutdatedResolver {
    ResolveThread,
    ForceResolveThread,
    DeleteThread,
    DeleteOrForceResolveThread,
}

export function getOption(): Option {
    const reportTypeString = getInput("report_type");
    let reportType: ReportType = ReportType.CheckRun;
    switch (reportTypeString) {
        case "comment":
            reportType = ReportType.Comment;
            break;
        case "inline_comment":
            reportType = ReportType.InlineComment;
            break;
        default:
            reportType = ReportType.CheckRun;
            break;
    }

    const outdatedResolverString = getInput("outdated_resolver");
    let outdatedResolver: OutdatedResolver = OutdatedResolver.DeleteOrForceResolveThread;
    switch (outdatedResolverString) {
        case "resolve_thread":
            outdatedResolver = OutdatedResolver.ResolveThread;
            break;
        case "force_resolve_thread":
            outdatedResolver = OutdatedResolver.ForceResolveThread;
            break;
        case "delete_thread":
            outdatedResolver = OutdatedResolver.DeleteThread;
            break;
        default:
            outdatedResolver = OutdatedResolver.DeleteOrForceResolveThread;
            break;
    }

    return {
        reportFiles: getInput("report_files"),
        reportFilesFollowSymbolicLinks: getInputOrNull("report_files_follow_symbolic_links") == "true",
        reportName: getInput("report_name"),
        reportType: reportType,
        conclusionFailureThreshold: parseInt(getInput("conclusion_failure_threshold")),
        conclusionFailureWeight: parseInt(getInput("conclusion_failure_weight")),
        conclusionWarningWeight: parseInt(getInput("conclusion_warning_weight")),
        conclusionNoticeWeight: parseInt(getInput("conclusion_notice_weight")),
        outdatedResolver: outdatedResolver,
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
