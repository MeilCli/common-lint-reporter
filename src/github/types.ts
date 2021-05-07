import {
    GetPullRequestChangedFileQuery,
    GetCommitStatusAndCheckRunQuery,
    GetCheckRunAnnotationsQuery,
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
