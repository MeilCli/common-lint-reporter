import { GetPullRequestChangedFileQuery } from "../../graphql/graphql";

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
