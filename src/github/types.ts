import {
    GetPullRequestChangedFileQuery,
    GetCommitStatusAndCheckRunQuery,
    GetCheckRunAnnotationsQuery,
    GetPullRequestCommentQuery,
    GetPullRequestReviewThreadsQuery,
} from "../../graphql/graphql";

export type GetPullRequestChangedFileQueryRepository = Exclude<
    GetPullRequestChangedFileQuery["repository"],
    null | undefined
>;
export type GetPullRequestChangedFileQueryPullRequest = Exclude<
    GetPullRequestChangedFileQueryRepository["pullRequest"],
    null | undefined
>;
export type GetPullRequestChangedFileQueryPullRequestFile = Exclude<
    GetPullRequestChangedFileQueryPullRequest["files"],
    null | undefined
>;
export type GetPullRequestChangedFileQueryPullRequestFilePageInfo = Exclude<
    GetPullRequestChangedFileQueryPullRequestFile["pageInfo"],
    null | undefined
>;
export type GetPullRequestChangedFileQueryPullRequestFileNodes = Exclude<
    GetPullRequestChangedFileQueryPullRequestFile["nodes"],
    null | undefined
>;
export type GetPullRequestChangedFileQueryPullRequestFileNode = Exclude<
    GetPullRequestChangedFileQueryPullRequestFileNodes[number],
    null | undefined
>;

export type GetCommitStatusAndCheckRunQueryRepository = Exclude<
    GetCommitStatusAndCheckRunQuery["repository"],
    null | undefined
>;
export type GetCommitStatusAndCheckRunQueryObject = Exclude<
    GetCommitStatusAndCheckRunQueryRepository["object"],
    null | undefined
>;
export type GetCommitStatusAndCheckRunQueryCommit = GetCommitStatusAndCheckRunQueryObject & { __typename: "Commit" };
export type GetCommitStatusAndCheckRunQueryCommitStatusCheckRollup = Exclude<
    GetCommitStatusAndCheckRunQueryCommit["statusCheckRollup"],
    null | undefined
>;
export type GetCommitStatusAndCheckRunQueryCommitStatusCheckRollupContexts = Exclude<
    GetCommitStatusAndCheckRunQueryCommitStatusCheckRollup["contexts"],
    null | undefined
>;
export type GetCommitStatusAndCheckRunQueryCommitStatusCheckRollupContextsPageInfo = Exclude<
    GetCommitStatusAndCheckRunQueryCommitStatusCheckRollupContexts["pageInfo"],
    null | undefined
>;
export type GetCommitStatusAndCheckRunQueryCommitStatusCheckRollupContextsNodes = Exclude<
    GetCommitStatusAndCheckRunQueryCommitStatusCheckRollupContexts["nodes"],
    null | undefined
>;
export type GetCommitStatusAndCheckRunQueryCommitStatusCheckRollupContextsNode = Exclude<
    GetCommitStatusAndCheckRunQueryCommitStatusCheckRollupContextsNodes[number],
    null | undefined
>;

export type GetCheckRunAnnotationsQueryNode = Exclude<GetCheckRunAnnotationsQuery["node"], null | undefined>;
export type GetCheckRunAnnotationsQueryCheckRun = GetCheckRunAnnotationsQueryNode & { __typename: "CheckRun" };
export type GetCheckRunAnnotationsQueryCheckRunAnnotations = Exclude<
    GetCheckRunAnnotationsQueryCheckRun["annotations"],
    null | undefined
>;
export type GetCheckRunAnnotationsQueryCheckRunAnnotationsPageInfo = Exclude<
    GetCheckRunAnnotationsQueryCheckRunAnnotations["pageInfo"],
    null | undefined
>;
export type GetCheckRunAnnotationsQueryCheckRunAnnotationsNodes = Exclude<
    GetCheckRunAnnotationsQueryCheckRunAnnotations["nodes"],
    null | undefined
>;
export type GetCheckRunAnnotationsQueryCheckRunAnnotationsNode = Exclude<
    GetCheckRunAnnotationsQueryCheckRunAnnotationsNodes[number],
    null | undefined
>;

export type GetPullRequestCommentQueryRepository = Exclude<GetPullRequestCommentQuery["repository"], null | undefined>;
export type GetPullRequestCommentQueryPullRequest = Exclude<
    GetPullRequestCommentQueryRepository["pullRequest"],
    null | undefined
>;
export type GetPullRequestCommentQueryPullRequestComments = Exclude<
    GetPullRequestCommentQueryPullRequest["comments"],
    null | undefined
>;
export type GetPullRequestCommentQueryPullRequestCommentsPageInfo = Exclude<
    GetPullRequestCommentQueryPullRequestComments["pageInfo"],
    null | undefined
>;
export type GetPullRequestCommentQueryPullRequestCommentsNodes = Exclude<
    GetPullRequestCommentQueryPullRequestComments["nodes"],
    null | undefined
>;
export type GetPullRequestCommentQueryPullRequestCommentsNode = Exclude<
    GetPullRequestCommentQueryPullRequestCommentsNodes[number],
    null | undefined
>;

export type GetPullRequestReviewThreadsQueryRepository = Exclude<
    GetPullRequestReviewThreadsQuery["repository"],
    null | undefined
>;
export type GetPullRequestReviewThreadsQueryPullRequest = Exclude<
    GetPullRequestReviewThreadsQueryRepository["pullRequest"],
    null | undefined
>;
export type GetPullRequestReviewThreadsQueryPullRequestReviewThreads = Exclude<
    GetPullRequestReviewThreadsQueryPullRequest["reviewThreads"],
    null | undefined
>;
export type GetPullRequestReviewThreadsQueryPullRequestReviewThreadsPageInfo = Exclude<
    GetPullRequestReviewThreadsQueryPullRequestReviewThreads["pageInfo"],
    null | undefined
>;
export type GetPullRequestReviewThreadsQueryPullRequestReviewThreadsNodes = Exclude<
    GetPullRequestReviewThreadsQueryPullRequestReviewThreads["nodes"],
    null | undefined
>;
export type GetPullRequestReviewThreadsQueryPullRequestReviewThreadsNode = Exclude<
    GetPullRequestReviewThreadsQueryPullRequestReviewThreadsNodes[number],
    null | undefined
>;
