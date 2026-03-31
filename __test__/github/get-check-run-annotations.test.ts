import { MockLink } from "@apollo/client/testing";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import {
    CheckAnnotationLevel,
    GetCheckRunAnnotations,
    GetCheckRunAnnotationsQuery,
    GetCheckRunAnnotationsQueryVariables,
} from "../../graphql/graphql";
import { GitHubClient } from "../../src/github/client";
import { getCheckRunAnnotationsWithPaging } from "../../src/github/paging";
import { test, expect } from "@jest/globals";

function createMockClient(mocks: ReadonlyArray<MockLink.MockedResponse>): ApolloClient {
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new MockLink(mocks),
    });
}

test("getPullRequestChangedFileWithPaging", async () => {
    const mocks: MockLink.MockedResponse[] = [
        {
            request: {
                query: GetCheckRunAnnotations,
                variables: {
                    checkRunId: "check-run-1",
                    after: undefined,
                } as GetCheckRunAnnotationsQueryVariables,
            },
            result: {
                data: {
                    __typename: "Query",
                    node: {
                        __typename: "CheckRun",
                        id: "check-run-1",
                        annotations: {
                            __typename: "CheckAnnotationConnection",
                            pageInfo: {
                                __typename: "PageInfo",
                                hasNextPage: true,
                                endCursor: "1",
                            },
                            nodes: [
                                {
                                    __typename: "CheckAnnotation",
                                    path: "test/path1.txt",
                                    message: "test message1",
                                    title: "test title1",
                                    annotationLevel: CheckAnnotationLevel.Notice,
                                    location: {
                                        start: {
                                            line: 1,
                                            column: 1,
                                        },
                                        end: {
                                            line: 1,
                                            column: 10,
                                        },
                                    },
                                },
                            ],
                        },
                    },
                } as GetCheckRunAnnotationsQuery,
            },
        },
        {
            request: {
                query: GetCheckRunAnnotations,
                variables: {
                    checkRunId: "check-run-1",
                    after: "1",
                } as GetCheckRunAnnotationsQueryVariables,
            },
            result: {
                data: {
                    __typename: "Query",
                    node: {
                        __typename: "CheckRun",
                        id: "check-run-1",
                        annotations: {
                            __typename: "CheckAnnotationConnection",
                            pageInfo: {
                                __typename: "PageInfo",
                                hasNextPage: false,
                                endCursor: "2",
                            },
                            nodes: [
                                {
                                    __typename: "CheckAnnotation",
                                    path: "test/path2.txt",
                                    message: "test message2",
                                    title: "test title2",
                                    annotationLevel: CheckAnnotationLevel.Warning,
                                    location: {
                                        start: {
                                            line: 1,
                                            column: 1,
                                        },
                                        end: {
                                            line: 1,
                                            column: 10,
                                        },
                                    },
                                },
                            ],
                        },
                    },
                } as GetCheckRunAnnotationsQuery,
            },
        },
    ];

    const client = new GitHubClient(createMockClient(mocks));
    const result = await getCheckRunAnnotationsWithPaging(client, {
        checkRunId: "check-run-1",
    });

    expect(result.length).toBe(2);
    expect(result[0]).toMatchObject({
        __typename: "CheckAnnotation",
        path: "test/path1.txt",
        message: "test message1",
        title: "test title1",
        annotationLevel: CheckAnnotationLevel.Notice,
        location: {
            start: {
                line: 1,
                column: 1,
            },
            end: {
                line: 1,
                column: 10,
            },
        },
    });
    expect(result[1]).toMatchObject({
        __typename: "CheckAnnotation",
        path: "test/path2.txt",
        message: "test message2",
        title: "test title2",
        annotationLevel: CheckAnnotationLevel.Warning,
        location: {
            start: {
                line: 1,
                column: 1,
            },
            end: {
                line: 1,
                column: 10,
            },
        },
    });
});

test("getPullRequestChangedFileWithPagingInfinityLoop", async () => {
    const mocks: MockLink.MockedResponse[] = [
        {
            request: {
                query: GetCheckRunAnnotations,
                variables: {
                    checkRunId: "check-run-1",
                    after: undefined,
                } as GetCheckRunAnnotationsQueryVariables,
            },
            result: {
                data: {
                    __typename: "Query",
                    node: {
                        __typename: "CheckRun",
                        id: "check-run-1",
                        annotations: {
                            __typename: "CheckAnnotationConnection",
                            pageInfo: {
                                __typename: "PageInfo",
                                hasNextPage: true,
                                endCursor: "1",
                            },
                            nodes: [
                                {
                                    __typename: "CheckAnnotation",
                                    path: "test/path1.txt",
                                    message: "test message1",
                                    title: "test title1",
                                    annotationLevel: CheckAnnotationLevel.Notice,
                                    location: {
                                        start: {
                                            line: 1,
                                            column: 1,
                                        },
                                        end: {
                                            line: 1,
                                            column: 10,
                                        },
                                    },
                                },
                            ],
                        },
                    },
                } as GetCheckRunAnnotationsQuery,
            },
        },
        {
            request: {
                query: GetCheckRunAnnotations,
                variables: {
                    checkRunId: "check-run-1",
                    after: "1",
                } as GetCheckRunAnnotationsQueryVariables,
            },
            result: {
                data: {
                    __typename: "Query",
                    node: {
                        __typename: "CheckRun",
                        id: "check-run-1",
                        annotations: {
                            __typename: "CheckAnnotationConnection",
                            pageInfo: {
                                __typename: "PageInfo",
                                hasNextPage: true,
                                endCursor: "1",
                            },
                            nodes: [
                                {
                                    __typename: "CheckAnnotation",
                                    path: "test/path2.txt",
                                    message: "test message2",
                                    title: "test title2",
                                    annotationLevel: CheckAnnotationLevel.Warning,
                                    location: {
                                        start: {
                                            line: 1,
                                            column: 1,
                                        },
                                        end: {
                                            line: 1,
                                            column: 10,
                                        },
                                    },
                                },
                            ],
                        },
                    },
                } as GetCheckRunAnnotationsQuery,
            },
        },
    ];

    const client = new GitHubClient(createMockClient(mocks));
    await expect(
        getCheckRunAnnotationsWithPaging(client, {
            checkRunId: "check-run-1",
        }),
    ).rejects.toThrow();
});
