import { MockedResponse, MockLink } from "@apollo/client/testing";
import { ApolloClient, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import {
    GetPullRequestChangedFile,
    GetPullRequestChangedFileQuery,
    GetPullRequestChangedFileQueryVariables,
    GetCommitStatusAndCheckRun,
    GetCommitStatusAndCheckRunQuery,
    GetCommitStatusAndCheckRunQueryVariables,
    StatusState,
} from "../graphql/graphql";
import { GitHubClient } from "../src/github/client";
import { getCommitStatusAndCheckRunWithPaging, getPullRequestChangedFileWithPaging } from "../src/github/paging";
import { GetCommitStatusAndCheckRunQueryCommitStatusCheckRollupContextsNode } from "../src/github/types";

function createMockClient(mocks: ReadonlyArray<MockedResponse>): ApolloClient<NormalizedCacheObject> {
    return new ApolloClient({
        cache: new InMemoryCache({ addTypename: true }),
        link: new MockLink(mocks, true),
    });
}

test("getPullRequestChangedFileWithPaging", async () => {
    const mocks: MockedResponse[] = [
        {
            request: {
                query: GetPullRequestChangedFile,
                variables: {
                    owner: "MeilCli",
                    name: "common-lint-reporter",
                    pull_request: 1,
                    after: undefined,
                } as GetPullRequestChangedFileQueryVariables,
            },
            result: {
                data: {
                    __typename: "Query",
                    repository: {
                        __typename: "Repository",
                        pullRequest: {
                            __typename: "PullRequest",
                            files: {
                                __typename: "PullRequestChangedFileConnection",
                                pageInfo: {
                                    __typename: "PageInfo",
                                    hasNextPage: true,
                                    endCursor: "1",
                                },
                                nodes: [{ __typename: "PullRequestChangedFile", path: "README.md" }],
                            },
                        },
                    },
                } as GetPullRequestChangedFileQuery,
            },
        },
        {
            request: {
                query: GetPullRequestChangedFile,
                variables: {
                    owner: "MeilCli",
                    name: "common-lint-reporter",
                    pull_request: 1,
                    after: "1",
                } as GetPullRequestChangedFileQueryVariables,
            },
            result: {
                data: {
                    __typename: "Query",
                    repository: {
                        __typename: "Repository",
                        pullRequest: {
                            __typename: "PullRequest",
                            files: {
                                __typename: "PullRequestChangedFileConnection",
                                pageInfo: {
                                    __typename: "PageInfo",
                                    hasNextPage: false,
                                    endCursor: "2",
                                },
                                nodes: [{ __typename: "PullRequestChangedFile", path: "LICENSE.txt" }],
                            },
                        },
                    },
                } as GetPullRequestChangedFileQuery,
            },
        },
    ];

    const client = new GitHubClient(createMockClient(mocks));
    const result = await getPullRequestChangedFileWithPaging(client, {
        owner: "MeilCli",
        name: "common-lint-reporter",
        pull_request: 1,
    });

    expect(result.length).toBe(2);
    expect(result[0].path).toBe("README.md");
    expect(result[1].path).toBe("LICENSE.txt");
});

test("getPullRequestChangedFileWithPagingInfinityLoop", async () => {
    const mocks: MockedResponse[] = [
        {
            request: {
                query: GetPullRequestChangedFile,
                variables: {
                    owner: "MeilCli",
                    name: "common-lint-reporter",
                    pull_request: 1,
                    after: undefined,
                } as GetPullRequestChangedFileQueryVariables,
            },
            result: {
                data: {
                    __typename: "Query",
                    repository: {
                        __typename: "Repository",
                        pullRequest: {
                            __typename: "PullRequest",
                            files: {
                                __typename: "PullRequestChangedFileConnection",
                                pageInfo: {
                                    __typename: "PageInfo",
                                    hasNextPage: true,
                                    endCursor: "1",
                                },
                                nodes: [{ __typename: "PullRequestChangedFile", path: "README.md" }],
                            },
                        },
                    },
                } as GetPullRequestChangedFileQuery,
            },
        },
        {
            request: {
                query: GetPullRequestChangedFile,
                variables: {
                    owner: "MeilCli",
                    name: "common-lint-reporter",
                    pull_request: 1,
                    after: "1",
                } as GetPullRequestChangedFileQueryVariables,
            },
            result: {
                data: {
                    __typename: "Query",
                    repository: {
                        __typename: "Repository",
                        pullRequest: {
                            __typename: "PullRequest",
                            files: {
                                __typename: "PullRequestChangedFileConnection",
                                pageInfo: {
                                    __typename: "PageInfo",
                                    hasNextPage: true,
                                    endCursor: "1",
                                },
                                nodes: [{ __typename: "PullRequestChangedFile", path: "LICENSE.txt" }],
                            },
                        },
                    },
                } as GetPullRequestChangedFileQuery,
            },
        },
    ];

    const client = new GitHubClient(createMockClient(mocks));
    await expect(
        getPullRequestChangedFileWithPaging(client, {
            owner: "MeilCli",
            name: "common-lint-reporter",
            pull_request: 1,
        })
    ).rejects.toThrow();
});

test("getCommitStatusAndCheckRunWithPaging", async () => {
    const mocks: MockedResponse[] = [
        {
            request: {
                query: GetCommitStatusAndCheckRun,
                variables: {
                    owner: "MeilCli",
                    name: "common-lint-reporter",
                    commitSha: "sha-1",
                    after: undefined,
                } as GetCommitStatusAndCheckRunQueryVariables,
            },
            result: {
                data: {
                    __typename: "Query",
                    repository: {
                        __typename: "Repository",
                        object: {
                            __typename: "Commit",
                            statusCheckRollup: {
                                __typename: "StatusCheckRollup",
                                contexts: {
                                    __typename: "StatusCheckRollupContextConnection",
                                    pageInfo: {
                                        __typename: "PageInfo",
                                        hasNextPage: true,
                                        endCursor: "1",
                                    },
                                    nodes: [
                                        {
                                            __typename: "StatusContext",
                                            state: StatusState.Success,
                                            id: "id1",
                                            context: "context1",
                                        },
                                    ],
                                },
                            },
                        },
                    },
                } as GetCommitStatusAndCheckRunQuery,
            },
        },
        {
            request: {
                query: GetCommitStatusAndCheckRun,
                variables: {
                    owner: "MeilCli",
                    name: "common-lint-reporter",
                    commitSha: "sha-1",
                    after: "1",
                } as GetCommitStatusAndCheckRunQueryVariables,
            },
            result: {
                data: {
                    __typename: "Query",
                    repository: {
                        __typename: "Repository",
                        object: {
                            __typename: "Commit",
                            statusCheckRollup: {
                                __typename: "StatusCheckRollup",
                                contexts: {
                                    __typename: "StatusCheckRollupContextConnection",
                                    pageInfo: {
                                        __typename: "PageInfo",
                                        hasNextPage: false,
                                        endCursor: "2",
                                    },
                                    nodes: [
                                        {
                                            __typename: "StatusContext",
                                            state: StatusState.Success,
                                            id: "id2",
                                            context: "context2",
                                        },
                                    ],
                                },
                            },
                        },
                    },
                } as GetCommitStatusAndCheckRunQuery,
            },
        },
    ];

    const client = new GitHubClient(createMockClient(mocks));
    const result = await getCommitStatusAndCheckRunWithPaging(client, {
        owner: "MeilCli",
        name: "common-lint-reporter",
        commitSha: "sha-1",
    });

    expect(result.length).toBe(2);
    expect(result[0]).toMatchObject({
        __typename: "StatusContext",
        context: "context1",
        state: StatusState.Success,
        id: "id1",
    } as GetCommitStatusAndCheckRunQueryCommitStatusCheckRollupContextsNode);
    expect(result[1]).toMatchObject({
        __typename: "StatusContext",
        context: "context2",
        state: StatusState.Success,
        id: "id2",
    } as GetCommitStatusAndCheckRunQueryCommitStatusCheckRollupContextsNode);
});

test("getCommitStatusAndCheckRunWithPagingInfinityLoop", async () => {
    const mocks: MockedResponse[] = [
        {
            request: {
                query: GetCommitStatusAndCheckRun,
                variables: {
                    owner: "MeilCli",
                    name: "common-lint-reporter",
                    commitSha: "sha-1",
                    after: undefined,
                } as GetCommitStatusAndCheckRunQueryVariables,
            },
            result: {
                data: {
                    __typename: "Query",
                    repository: {
                        __typename: "Repository",
                        object: {
                            __typename: "Commit",
                            statusCheckRollup: {
                                __typename: "StatusCheckRollup",
                                contexts: {
                                    __typename: "StatusCheckRollupContextConnection",
                                    pageInfo: {
                                        __typename: "PageInfo",
                                        hasNextPage: true,
                                        endCursor: "1",
                                    },
                                    nodes: [
                                        {
                                            __typename: "StatusContext",
                                            state: StatusState.Success,
                                            id: "id1",
                                            context: "context1",
                                        },
                                    ],
                                },
                            },
                        },
                    },
                } as GetCommitStatusAndCheckRunQuery,
            },
        },
        {
            request: {
                query: GetCommitStatusAndCheckRun,
                variables: {
                    owner: "MeilCli",
                    name: "common-lint-reporter",
                    commitSha: "sha-1",
                    after: "1",
                } as GetCommitStatusAndCheckRunQueryVariables,
            },
            result: {
                data: {
                    __typename: "Query",
                    repository: {
                        __typename: "Repository",
                        object: {
                            __typename: "Commit",
                            statusCheckRollup: {
                                __typename: "StatusCheckRollup",
                                contexts: {
                                    __typename: "StatusCheckRollupContextConnection",
                                    pageInfo: {
                                        __typename: "PageInfo",
                                        hasNextPage: true,
                                        endCursor: "2",
                                    },
                                    nodes: [
                                        {
                                            __typename: "StatusContext",
                                            state: StatusState.Success,
                                            id: "id2",
                                            context: "context2",
                                        },
                                    ],
                                },
                            },
                        },
                    },
                } as GetCommitStatusAndCheckRunQuery,
            },
        },
    ];

    const client = new GitHubClient(createMockClient(mocks));

    await expect(
        getCommitStatusAndCheckRunWithPaging(client, {
            owner: "MeilCli",
            name: "common-lint-reporter",
            commitSha: "sha-1",
        })
    ).rejects.toThrow();
});
