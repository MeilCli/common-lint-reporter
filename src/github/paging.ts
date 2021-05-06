import { GetPullRequestChangedFileQueryVariables, GetCommitStatusAndCheckRunQueryVariables } from "../graphql";
import { GitHubClient } from "./client";
import {
    GetPullRequestChangedFileQueryPullRequestFileNode,
    GetCommitStatusAndCheckRunQueryCommitStatusCheckRollupContextsNode,
} from "./types";

// gurad for infinity loop
const maxLoop = 100;

export async function getPullRequestChangedFileWithPaging(
    client: GitHubClient,
    variables: GetPullRequestChangedFileQueryVariables
): Promise<GetPullRequestChangedFileQueryPullRequestFileNode[]> {
    const result: GetPullRequestChangedFileQueryPullRequestFileNode[] = [];

    let response = await client.getPullRequestChangedFile(variables);
    let pageInfo = response.repository?.pullRequest?.files?.pageInfo;
    if (
        response.repository?.pullRequest?.files?.nodes == null ||
        response.repository.pullRequest.files.nodes == undefined
    ) {
        return result;
    }
    for (const node of response.repository.pullRequest.files.nodes) {
        if (node == null || node == undefined) {
            continue;
        }
        result.push(node);
    }

    let loopCount = 0;
    while (
        pageInfo != null &&
        pageInfo != undefined &&
        pageInfo.hasNextPage &&
        pageInfo.endCursor != null &&
        pageInfo.endCursor != undefined
    ) {
        loopCount += 1;
        response = await client.getPullRequestChangedFile({ ...variables, after: pageInfo.endCursor });
        pageInfo = response.repository?.pullRequest?.files?.pageInfo;

        if (
            response.repository?.pullRequest?.files?.nodes == null ||
            response.repository.pullRequest.files.nodes == undefined
        ) {
            return result;
        }
        for (const node of response.repository.pullRequest.files.nodes) {
            if (node == null || node == undefined) {
                continue;
            }
            result.push(node);
        }

        if (maxLoop <= loopCount) {
            throw Error("infinity loop detected");
        }
    }

    return result;
}

export async function getCommitStatusAndCheckRunWithPaging(
    client: GitHubClient,
    variables: GetCommitStatusAndCheckRunQueryVariables
): Promise<GetCommitStatusAndCheckRunQueryCommitStatusCheckRollupContextsNode[]> {
    const result: GetCommitStatusAndCheckRunQueryCommitStatusCheckRollupContextsNode[] = [];

    let response = await client.getCommitStatusAndCheckRun(variables);
    if (response.repository?.object?.__typename != "Commit") {
        return result;
    }
    let pageInfo = response.repository?.object.statusCheckRollup?.contexts.pageInfo;
    if (
        response.repository.object.statusCheckRollup?.contexts.nodes == null ||
        response.repository.object.statusCheckRollup.contexts.nodes == undefined
    ) {
        return result;
    }
    for (const node of response.repository.object.statusCheckRollup.contexts.nodes) {
        if (node == null || node == undefined) {
            continue;
        }
        result.push(node);
    }

    let loopCount = 0;
    while (
        pageInfo != null &&
        pageInfo != undefined &&
        pageInfo.hasNextPage &&
        pageInfo.endCursor != null &&
        pageInfo.endCursor != undefined
    ) {
        loopCount += 1;
        response = await client.getCommitStatusAndCheckRun({ ...variables, after: pageInfo.endCursor });
        if (response.repository?.object?.__typename != "Commit") {
            return result;
        }
        pageInfo = response.repository?.object.statusCheckRollup?.contexts.pageInfo;

        if (
            response.repository?.object.statusCheckRollup?.contexts.nodes == null ||
            response.repository?.object.statusCheckRollup?.contexts.nodes == undefined
        ) {
            return result;
        }
        for (const node of response.repository?.object.statusCheckRollup?.contexts.nodes) {
            if (node == null || node == undefined) {
                continue;
            }
            result.push(node);
        }

        if (maxLoop <= loopCount) {
            throw Error("infinity loop detected");
        }
    }

    return result;
}
