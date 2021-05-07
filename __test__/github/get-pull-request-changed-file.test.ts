import { MockedResponse, MockLink } from "@apollo/client/testing";
import { ApolloClient, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import {
    GetPullRequestChangedFile,
    GetPullRequestChangedFileQuery,
    GetPullRequestChangedFileQueryVariables,
} from "../../graphql/graphql";
import { GitHubClient } from "../../src/github/client";
import { getPullRequestChangedFileWithPaging } from "../../src/github/paging";

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
