import { GetPullRequestChangedFileQuery, GetCommitStatusAndCheckRunQuery } from "../../graphql/graphql";

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
export type GetCommitStatusAndCheckRunQueryCommitStatusCheckRollupContextsNodes = Exclude<
    GetCommitStatusAndCheckRunQueryCommitStatusCheckRollupContexts["nodes"],
    null | undefined
>;
export type GetCommitStatusAndCheckRunQueryCommitStatusCheckRollupContextsNode = Exclude<
    GetCommitStatusAndCheckRunQueryCommitStatusCheckRollupContextsNodes[number],
    null | undefined
>;
