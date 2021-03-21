import { GetPullRequestChangedFileQueryVariables } from "../graphql";
import { GitHubClient } from "./client";
import { GetPullRequestChangedFileQueryPullRequestFileNode } from "./types";

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
