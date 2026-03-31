import { MockLink } from "@apollo/client/testing";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import {
    GetCommitStatusAndCheckRun,
    GetCommitStatusAndCheckRunQuery,
    GetCommitStatusAndCheckRunQueryVariables,
    StatusState,
} from "../../graphql/graphql";
import { GitHubClient } from "../../src/github/client";
import { getCommitStatusAndCheckRunWithPaging } from "../../src/github/paging";
import { test, expect } from "@jest/globals";

function createMockClient(mocks: ReadonlyArray<MockLink.MockedResponse>): ApolloClient {
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new MockLink(mocks),
    });
}

test("getCommitStatusAndCheckRunWithPaging", async () => {
    const mocks: MockLink.MockedResponse[] = [
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
    });
    expect(result[1]).toMatchObject({
        __typename: "StatusContext",
        context: "context2",
        state: StatusState.Success,
        id: "id2",
    });
});

test("getCommitStatusAndCheckRunWithPagingInfinityLoop", async () => {
    const mocks: MockLink.MockedResponse[] = [
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
        {
            request: {
                query: GetCommitStatusAndCheckRun,
                variables: {
                    owner: "MeilCli",
                    name: "common-lint-reporter",
                    commitSha: "sha-1",
                    after: "2",
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
        }),
    ).rejects.toThrow();
});
