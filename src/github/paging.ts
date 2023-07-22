import {
    GetPullRequestChangedFileQuery,
    GetPullRequestChangedFileQueryVariables,
    GetCommitStatusAndCheckRunQuery,
    GetCommitStatusAndCheckRunQueryVariables,
    GetCheckRunAnnotationsQuery,
    GetCheckRunAnnotationsQueryVariables,
    GetPullRequestCommentQuery,
    GetPullRequestCommentQueryVariables,
    GetPullRequestReviewThreadsQuery,
    GetPullRequestReviewThreadsQueryVariables,
    Maybe,
} from "../graphql";
import { GitHubClient } from "./client";
import {
    GetPullRequestChangedFileQueryPullRequestFilePageInfo,
    GetPullRequestChangedFileQueryPullRequestFileNodes,
    GetPullRequestChangedFileQueryPullRequestFileNode,
    GetCommitStatusAndCheckRunQueryCommitStatusCheckRollupContextsPageInfo,
    GetCommitStatusAndCheckRunQueryCommitStatusCheckRollupContextsNodes,
    GetCommitStatusAndCheckRunQueryCommitStatusCheckRollupContextsNode,
    GetCheckRunAnnotationsQueryCheckRunAnnotationsPageInfo,
    GetCheckRunAnnotationsQueryCheckRunAnnotationsNodes,
    GetCheckRunAnnotationsQueryCheckRunAnnotationsNode,
    GetPullRequestCommentQueryPullRequestCommentsPageInfo,
    GetPullRequestCommentQueryPullRequestCommentsNodes,
    GetPullRequestCommentQueryPullRequestCommentsNode,
    GetPullRequestReviewThreadsQueryPullRequestReviewThreadsPageInfo,
    GetPullRequestReviewThreadsQueryPullRequestReviewThreadsNodes,
    GetPullRequestReviewThreadsQueryPullRequestReviewThreadsNode,
} from "./types";

// gurad for infinity loop
const maxLoop = 100;

async function getResponseWithPaging<
    TVariables extends { after?: Maybe<string> | undefined },
    TResponse,
    TPageInfo extends { hasNextPage: boolean; endCursor?: Maybe<string> | undefined },
    TNode,
    TNodes extends Array<TNode | null | undefined>,
>(
    variables: TVariables,
    getResponse: (variables: TVariables) => Promise<TResponse>,
    selectorPageInfo: (response: TResponse) => TPageInfo | null | undefined,
    selectorNodes: (response: TResponse) => TNodes | null | undefined,
): Promise<TNode[]> {
    const result: TNode[] = [];

    let response = await getResponse(variables);
    let pageInfo = selectorPageInfo(response);
    let nodes = selectorNodes(response);
    if (nodes == null || nodes == undefined) {
        return result;
    }
    for (const node of nodes) {
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
        response = await getResponse({ ...variables, after: pageInfo.endCursor });
        pageInfo = selectorPageInfo(response);
        nodes = selectorNodes(response);

        if (nodes == null || nodes == undefined) {
            return result;
        }

        for (const node of nodes) {
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

export async function getPullRequestChangedFileWithPaging(
    client: GitHubClient,
    variables: GetPullRequestChangedFileQueryVariables,
): Promise<GetPullRequestChangedFileQueryPullRequestFileNode[]> {
    return getResponseWithPaging<
        GetPullRequestChangedFileQueryVariables,
        GetPullRequestChangedFileQuery,
        GetPullRequestChangedFileQueryPullRequestFilePageInfo,
        GetPullRequestChangedFileQueryPullRequestFileNode,
        GetPullRequestChangedFileQueryPullRequestFileNodes
    >(
        variables,
        (variables) => client.getPullRequestChangedFile(variables),
        (response) => response.repository?.pullRequest?.files?.pageInfo,
        (response) => response.repository?.pullRequest?.files?.nodes,
    );
}

export async function getCommitStatusAndCheckRunWithPaging(
    client: GitHubClient,
    variables: GetCommitStatusAndCheckRunQueryVariables,
): Promise<GetCommitStatusAndCheckRunQueryCommitStatusCheckRollupContextsNode[]> {
    return getResponseWithPaging<
        GetCommitStatusAndCheckRunQueryVariables,
        GetCommitStatusAndCheckRunQuery,
        GetCommitStatusAndCheckRunQueryCommitStatusCheckRollupContextsPageInfo,
        GetCommitStatusAndCheckRunQueryCommitStatusCheckRollupContextsNode,
        GetCommitStatusAndCheckRunQueryCommitStatusCheckRollupContextsNodes
    >(
        variables,
        (variables) => client.getCommitStatusAndCheckRun(variables),
        (response) => {
            if (response.repository?.object?.__typename != "Commit") {
                return null;
            }
            return response.repository.object.statusCheckRollup?.contexts.pageInfo;
        },
        (response) => {
            if (response.repository?.object?.__typename != "Commit") {
                return null;
            }
            return response.repository.object.statusCheckRollup?.contexts.nodes;
        },
    );
}

export async function getCheckRunAnnotationsWithPaging(
    client: GitHubClient,
    variables: GetCheckRunAnnotationsQueryVariables,
): Promise<GetCheckRunAnnotationsQueryCheckRunAnnotationsNode[]> {
    return getResponseWithPaging<
        GetCheckRunAnnotationsQueryVariables,
        GetCheckRunAnnotationsQuery,
        GetCheckRunAnnotationsQueryCheckRunAnnotationsPageInfo,
        GetCheckRunAnnotationsQueryCheckRunAnnotationsNode,
        GetCheckRunAnnotationsQueryCheckRunAnnotationsNodes
    >(
        variables,
        (variables) => client.getCheckRunAnnotations(variables),
        (response) => {
            if (response.node?.__typename != "CheckRun") {
                return null;
            }
            return response.node.annotations?.pageInfo;
        },
        (response) => {
            if (response.node?.__typename != "CheckRun") {
                return null;
            }
            return response.node.annotations?.nodes;
        },
    );
}

export async function getPullRequestCommentsWithPaging(
    client: GitHubClient,
    variables: GetPullRequestCommentQueryVariables,
): Promise<GetPullRequestCommentQueryPullRequestCommentsNode[]> {
    return getResponseWithPaging<
        GetPullRequestCommentQueryVariables,
        GetPullRequestCommentQuery,
        GetPullRequestCommentQueryPullRequestCommentsPageInfo,
        GetPullRequestCommentQueryPullRequestCommentsNode,
        GetPullRequestCommentQueryPullRequestCommentsNodes
    >(
        variables,
        (variables) => client.getPullRequestComments(variables),
        (response) => response.repository?.pullRequest?.comments.pageInfo,
        (response) => response.repository?.pullRequest?.comments.nodes,
    );
}

export async function getPullRequestReviewThreadsWithPaging(
    client: GitHubClient,
    variables: GetPullRequestReviewThreadsQueryVariables,
): Promise<GetPullRequestReviewThreadsQueryPullRequestReviewThreadsNode[]> {
    return getResponseWithPaging<
        GetPullRequestReviewThreadsQueryVariables,
        GetPullRequestReviewThreadsQuery,
        GetPullRequestReviewThreadsQueryPullRequestReviewThreadsPageInfo,
        GetPullRequestReviewThreadsQueryPullRequestReviewThreadsNode,
        GetPullRequestReviewThreadsQueryPullRequestReviewThreadsNodes
    >(
        variables,
        (variables) => client.getPullRequestReviewThreads(variables),
        (response) => response.repository?.pullRequest?.reviewThreads.pageInfo,
        (response) => response.repository?.pullRequest?.reviewThreads.nodes,
    );
}
