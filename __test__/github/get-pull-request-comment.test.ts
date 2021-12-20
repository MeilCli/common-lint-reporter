import { MockedResponse, MockLink } from "@apollo/client/testing";
import { ApolloClient, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import {
    GetPullRequestComment,
    GetPullRequestCommentQuery,
    GetPullRequestCommentQueryVariables,
} from "../../graphql/graphql";
import { GitHubClient } from "../../src/github/client";
import { getPullRequestCommentsWithPaging } from "../../src/github/paging";

function createMockClient(mocks: ReadonlyArray<MockedResponse>): ApolloClient<NormalizedCacheObject> {
    return new ApolloClient({
        cache: new InMemoryCache({ addTypename: true }),
        link: new MockLink(mocks, true),
    });
}

test("getPullRequestCommentsWithPagingWithPaging", async () => {
    const mocks: MockedResponse[] = [
        {
            request: {
                query: GetPullRequestComment,
                variables: {
                    owner: "MeilCli",
                    name: "common-lint-reporter",
                    pull_request: 1,
                    after: undefined,
                } as GetPullRequestCommentQueryVariables,
            },
            result: {
                data: {
                    __typename: "Query",
                    repository: {
                        __typename: "Repository",
                        pullRequest: {
                            __typename: "PullRequest",
                            id: "id1",
                            comments: {
                                pageInfo: {
                                    __typename: "PageInfo",
                                    hasNextPage: true,
                                    endCursor: "1",
                                },
                                nodes: [
                                    {
                                        id: "comment1",
                                        body: "test1",
                                        author: {
                                            login: "MeilCli",
                                        },
                                    },
                                ],
                            },
                        },
                    },
                } as GetPullRequestCommentQuery,
            },
        },
        {
            request: {
                query: GetPullRequestComment,
                variables: {
                    owner: "MeilCli",
                    name: "common-lint-reporter",
                    pull_request: 1,
                    after: "1",
                } as GetPullRequestCommentQueryVariables,
            },
            result: {
                data: {
                    __typename: "Query",
                    repository: {
                        __typename: "Repository",
                        pullRequest: {
                            __typename: "PullRequest",
                            id: "id1",
                            comments: {
                                pageInfo: {
                                    __typename: "PageInfo",
                                    hasNextPage: false,
                                    endCursor: "2",
                                },
                                nodes: [
                                    {
                                        id: "comment2",
                                        body: "test2",
                                        author: {
                                            login: "MeilCli",
                                        },
                                    },
                                ],
                            },
                        },
                    },
                } as GetPullRequestCommentQuery,
            },
        },
    ];

    const client = new GitHubClient(createMockClient(mocks));
    const result = await getPullRequestCommentsWithPaging(client, {
        owner: "MeilCli",
        name: "common-lint-reporter",
        pull_request: 1,
    });

    expect(result.length).toBe(2);
    expect(result[0].id).toBe("comment1");
    expect(result[0].body).toBe("test1");
    expect(result[0].author?.login).toBe("MeilCli");
    expect(result[1].id).toBe("comment2");
    expect(result[1].body).toBe("test2");
    expect(result[1].author?.login).toBe("MeilCli");
});

test("getPullRequestCommentsWithPagingInfinityLoop", async () => {
    const mocks: MockedResponse[] = [
        {
            request: {
                query: GetPullRequestComment,
                variables: {
                    owner: "MeilCli",
                    name: "common-lint-reporter",
                    pull_request: 1,
                    after: undefined,
                } as GetPullRequestCommentQueryVariables,
            },
            result: {
                data: {
                    __typename: "Query",
                    repository: {
                        __typename: "Repository",
                        pullRequest: {
                            __typename: "PullRequest",
                            id: "id1",
                            comments: {
                                pageInfo: {
                                    __typename: "PageInfo",
                                    hasNextPage: true,
                                    endCursor: "1",
                                },
                                nodes: [
                                    {
                                        id: "comment1",
                                        body: "test1",
                                        author: {
                                            login: "MeilCli",
                                        },
                                    },
                                ],
                            },
                        },
                    },
                } as GetPullRequestCommentQuery,
            },
        },
        {
            request: {
                query: GetPullRequestComment,
                variables: {
                    owner: "MeilCli",
                    name: "common-lint-reporter",
                    pull_request: 1,
                    after: "1",
                } as GetPullRequestCommentQueryVariables,
            },
            result: {
                data: {
                    __typename: "Query",
                    repository: {
                        __typename: "Repository",
                        pullRequest: {
                            __typename: "PullRequest",
                            id: "id1",
                            comments: {
                                pageInfo: {
                                    __typename: "PageInfo",
                                    hasNextPage: true,
                                    endCursor: "1",
                                },
                                nodes: [
                                    {
                                        id: "comment2",
                                        body: "test2",
                                        author: {
                                            login: "MeilCli",
                                        },
                                    },
                                ],
                            },
                        },
                    },
                } as GetPullRequestCommentQuery,
            },
        },
    ];

    const client = new GitHubClient(createMockClient(mocks));
    await expect(
        getPullRequestCommentsWithPaging(client, {
            owner: "MeilCli",
            name: "common-lint-reporter",
            pull_request: 1,
        })
    ).rejects.toThrow();
});
