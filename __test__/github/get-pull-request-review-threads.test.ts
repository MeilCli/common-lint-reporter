import { MockedResponse, MockLink } from "@apollo/client/testing";
import { ApolloClient, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import {
    GetPullRequestReviewThreads,
    GetPullRequestReviewThreadsQuery,
    GetPullRequestReviewThreadsQueryVariables,
} from "../../graphql/graphql";
import { GitHubClient } from "../../src/github/client";
import { getPullRequestReviewThreadsWithPaging } from "../../src/github/paging";

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
                query: GetPullRequestReviewThreads,
                variables: {
                    owner: "MeilCli",
                    name: "common-lint-reporter",
                    number: 1,
                    after: undefined,
                } as GetPullRequestReviewThreadsQueryVariables,
            },
            result: {
                data: {
                    __typename: "Query",
                    repository: {
                        __typename: "Repository",
                        pullRequest: {
                            __typename: "PullRequest",
                            reviewThreads: {
                                __typename: "PullRequestReviewThreadConnection",
                                pageInfo: {
                                    __typename: "PageInfo",
                                    hasNextPage: true,
                                    endCursor: "1",
                                },
                                nodes: [
                                    {
                                        __typename: "PullRequestReviewThread",
                                        id: "thread1",
                                        path: "test/file1.txt",
                                        line: 1,
                                        startLine: 5,
                                        isOutdated: false,
                                        isResolved: false,
                                        comments: {
                                            __typename: "PullRequestReviewCommentConnection",
                                            pageInfo: {
                                                __typename: "PageInfo",
                                                hasNextPage: false,
                                            },
                                            nodes: [
                                                {
                                                    __typename: "PullRequestReviewComment",
                                                    id: "thread1-comment1",
                                                    body: "test body1",
                                                    author: {
                                                        __typename: "User",
                                                        login: "MeilCli",
                                                    },
                                                },
                                            ],
                                        },
                                    },
                                ],
                            },
                        },
                    },
                } as GetPullRequestReviewThreadsQuery,
            },
        },
        {
            request: {
                query: GetPullRequestReviewThreads,
                variables: {
                    owner: "MeilCli",
                    name: "common-lint-reporter",
                    number: 1,
                    after: "1",
                } as GetPullRequestReviewThreadsQueryVariables,
            },
            result: {
                data: {
                    __typename: "Query",
                    repository: {
                        __typename: "Repository",
                        pullRequest: {
                            __typename: "PullRequest",
                            reviewThreads: {
                                __typename: "PullRequestReviewThreadConnection",
                                pageInfo: {
                                    __typename: "PageInfo",
                                    hasNextPage: false,
                                    endCursor: "2",
                                },
                                nodes: [
                                    {
                                        __typename: "PullRequestReviewThread",
                                        id: "thread2",
                                        path: "test/file2.txt",
                                        line: 10,
                                        startLine: 5,
                                        isOutdated: false,
                                        isResolved: false,
                                        comments: {
                                            __typename: "PullRequestReviewCommentConnection",
                                            pageInfo: {
                                                __typename: "PageInfo",
                                                hasNextPage: false,
                                            },
                                            nodes: [
                                                {
                                                    __typename: "PullRequestReviewComment",
                                                    id: "thread2-comment1",
                                                    body: "test body1",
                                                    author: {
                                                        __typename: "User",
                                                        login: "MeilCli",
                                                    },
                                                },
                                            ],
                                        },
                                    },
                                ],
                            },
                        },
                    },
                } as GetPullRequestReviewThreadsQuery,
            },
        },
    ];

    const client = new GitHubClient(createMockClient(mocks));
    const result = await getPullRequestReviewThreadsWithPaging(client, {
        owner: "MeilCli",
        name: "common-lint-reporter",
        number: 1,
    });

    expect(result.length).toBe(2);
    expect(result[0].id).toBe("thread1");
    expect(result[0].path).toBe("test/file1.txt");
    expect(result[0].line).toBe(1);
    expect(result[0].startLine).toBe(5);
    expect(result[0].isOutdated).toBe(false);
    expect(result[0].isResolved).toBe(false);
    expect(result[0].comments?.pageInfo?.hasNextPage).toBe(false);
    expect(result[0].comments?.nodes?.length).toBe(1);
    if (result[0].comments?.nodes != null && result[0].comments?.nodes != undefined) {
        expect(result[0].comments.nodes[0]?.id).toBe("thread1-comment1");
        expect(result[0].comments.nodes[0]?.body).toBe("test body1");
        expect(result[0].comments.nodes[0]?.author?.login).toBe("MeilCli");
    }
    expect(result[1].id).toBe("thread2");
    expect(result[1].path).toBe("test/file2.txt");
    expect(result[1].line).toBe(10);
    expect(result[1].startLine).toBe(5);
    expect(result[1].isOutdated).toBe(false);
    expect(result[1].isResolved).toBe(false);
    expect(result[1].comments?.pageInfo?.hasNextPage).toBe(false);
    expect(result[1].comments?.nodes?.length).toBe(1);
    if (result[1].comments?.nodes != null && result[0].comments?.nodes != undefined) {
        expect(result[1].comments.nodes[0]?.id).toBe("thread2-comment1");
        expect(result[1].comments.nodes[0]?.body).toBe("test body1");
        expect(result[1].comments.nodes[0]?.author?.login).toBe("MeilCli");
    }
});

test("getPullRequestCommentsWithPagingWithPagingInfinityLoop", async () => {
    const mocks: MockedResponse[] = [
        {
            request: {
                query: GetPullRequestReviewThreads,
                variables: {
                    owner: "MeilCli",
                    name: "common-lint-reporter",
                    number: 1,
                    after: undefined,
                } as GetPullRequestReviewThreadsQueryVariables,
            },
            result: {
                data: {
                    __typename: "Query",
                    repository: {
                        __typename: "Repository",
                        pullRequest: {
                            __typename: "PullRequest",
                            reviewThreads: {
                                __typename: "PullRequestReviewThreadConnection",
                                pageInfo: {
                                    __typename: "PageInfo",
                                    hasNextPage: true,
                                    endCursor: "1",
                                },
                                nodes: [
                                    {
                                        __typename: "PullRequestReviewThread",
                                        id: "thread1",
                                        path: "test/file1.txt",
                                        line: 1,
                                        startLine: 5,
                                        isOutdated: false,
                                        isResolved: false,
                                        comments: {
                                            __typename: "PullRequestReviewCommentConnection",
                                            pageInfo: {
                                                __typename: "PageInfo",
                                                hasNextPage: false,
                                            },
                                            nodes: [
                                                {
                                                    __typename: "PullRequestReviewComment",
                                                    id: "thread1-comment1",
                                                    body: "test body1",
                                                    author: {
                                                        __typename: "User",
                                                        login: "MeilCli",
                                                    },
                                                },
                                            ],
                                        },
                                    },
                                ],
                            },
                        },
                    },
                } as GetPullRequestReviewThreadsQuery,
            },
        },
        {
            request: {
                query: GetPullRequestReviewThreads,
                variables: {
                    owner: "MeilCli",
                    name: "common-lint-reporter",
                    number: 1,
                    after: "1",
                } as GetPullRequestReviewThreadsQueryVariables,
            },
            result: {
                data: {
                    __typename: "Query",
                    repository: {
                        __typename: "Repository",
                        pullRequest: {
                            __typename: "PullRequest",
                            reviewThreads: {
                                __typename: "PullRequestReviewThreadConnection",
                                pageInfo: {
                                    __typename: "PageInfo",
                                    hasNextPage: true,
                                    endCursor: "1",
                                },
                                nodes: [
                                    {
                                        __typename: "PullRequestReviewThread",
                                        id: "thread2",
                                        path: "test/file2.txt",
                                        line: 10,
                                        startLine: 5,
                                        isOutdated: false,
                                        isResolved: false,
                                        comments: {
                                            __typename: "PullRequestReviewCommentConnection",
                                            pageInfo: {
                                                __typename: "PageInfo",
                                                hasNextPage: false,
                                            },
                                            nodes: [
                                                {
                                                    __typename: "PullRequestReviewComment",
                                                    id: "thread2-comment1",
                                                    body: "test body1",
                                                    author: {
                                                        __typename: "User",
                                                        login: "MeilCli",
                                                    },
                                                },
                                            ],
                                        },
                                    },
                                ],
                            },
                        },
                    },
                } as GetPullRequestReviewThreadsQuery,
            },
        },
    ];

    const client = new GitHubClient(createMockClient(mocks));
    await expect(
        getPullRequestReviewThreadsWithPaging(client, {
            owner: "MeilCli",
            name: "common-lint-reporter",
            number: 1,
        })
    ).rejects.toThrow();
});
