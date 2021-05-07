import fetch from "cross-fetch";
import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
import { Option } from "../option";
import {
    CreateCheckRun,
    CreateCheckRunMutation,
    CreateCheckRunMutationVariables,
    GetPullRequestChangedFile,
    GetPullRequestChangedFileQuery,
    GetPullRequestChangedFileQueryVariables,
    GetRepositoryId,
    GetRepositoryIdQuery,
    GetRepositoryIdQueryVariables,
    UpdateCheckRun,
    UpdateCheckRunMutation,
    UpdateCheckRunMutationVariables,
    GetCommitStatusAndCheckRun,
    GetCommitStatusAndCheckRunQuery,
    GetCommitStatusAndCheckRunQueryVariables,
    GetCheckRunAnnotations,
    GetCheckRunAnnotationsQuery,
    GetCheckRunAnnotationsQueryVariables,
    GetPullRequest,
    GetPullRequestQuery,
    GetPullRequestQueryVariables,
    GetPullRequestComment,
    GetPullRequestCommentQuery,
    GetPullRequestCommentQueryVariables,
    AddComment,
    AddCommentMutation,
    AddCommentMutationVariables,
    DeleteComment,
    DeleteCommentMutation,
    DeleteCommentMutationVariables,
    GetLoginUser,
    GetLoginUserQuery,
    GetLoginUserQueryVariables,
} from "../../graphql/graphql";

export function githubClient(option: Option): GitHubClient {
    return new GitHubClient(
        new ApolloClient({
            link: new HttpLink({
                uri: "https://api.github.com/graphql",
                headers: { authorization: `token ${option.githubToken}` },
                fetch,
            }),
            cache: new InMemoryCache(),
        })
    );
}

export class GitHubClient {
    constructor(private readonly client: ApolloClient<NormalizedCacheObject>) {}

    async createCheckRun(
        variables: CreateCheckRunMutationVariables
    ): Promise<CreateCheckRunMutation | null | undefined> {
        const result = await this.client.mutate<CreateCheckRunMutation>({
            mutation: CreateCheckRun,
            variables: variables,
        });
        return result.data;
    }

    async getPullRequestChangedFile(
        variables: GetPullRequestChangedFileQueryVariables
    ): Promise<GetPullRequestChangedFileQuery> {
        const result = await this.client.query<GetPullRequestChangedFileQuery>({
            query: GetPullRequestChangedFile,
            variables: variables,
        });
        return result.data;
    }

    async getRepositoryId(variables: GetRepositoryIdQueryVariables): Promise<GetRepositoryIdQuery> {
        const result = await this.client.query<GetRepositoryIdQuery>({
            query: GetRepositoryId,
            variables: variables,
        });
        return result.data;
    }

    async updateCheckRun(
        variables: UpdateCheckRunMutationVariables
    ): Promise<UpdateCheckRunMutation | null | undefined> {
        const result = await this.client.mutate<UpdateCheckRunMutation>({
            mutation: UpdateCheckRun,
            variables: variables,
        });
        return result.data;
    }

    async getCommitStatusAndCheckRun(
        variables: GetCommitStatusAndCheckRunQueryVariables
    ): Promise<GetCommitStatusAndCheckRunQuery> {
        const result = await this.client.query<GetCommitStatusAndCheckRunQuery>({
            query: GetCommitStatusAndCheckRun,
            variables: variables,
        });
        return result.data;
    }

    async getCheckRunAnnotations(
        variables: GetCheckRunAnnotationsQueryVariables
    ): Promise<GetCheckRunAnnotationsQuery> {
        const result = await this.client.query<GetCheckRunAnnotationsQuery>({
            query: GetCheckRunAnnotations,
            variables: variables,
        });
        return result.data;
    }

    async getPullRequest(variables: GetPullRequestQueryVariables): Promise<GetPullRequestQuery> {
        const result = await this.client.query<GetPullRequestQuery>({
            query: GetPullRequest,
            variables: variables,
        });
        return result.data;
    }

    async getPullRequestComments(variables: GetPullRequestCommentQueryVariables): Promise<GetPullRequestCommentQuery> {
        const result = await this.client.query<GetPullRequestCommentQuery>({
            query: GetPullRequestComment,
            variables: variables,
        });
        return result.data;
    }

    async addComment(variables: AddCommentMutationVariables): Promise<AddCommentMutation | null | undefined> {
        const result = await this.client.mutate<AddCommentMutation>({
            mutation: AddComment,
            variables: variables,
        });
        return result.data;
    }

    async deleteComment(variables: DeleteCommentMutationVariables): Promise<DeleteCommentMutation | null | undefined> {
        const result = await this.client.mutate<DeleteCommentMutation>({
            mutation: DeleteComment,
            variables: variables,
        });
        return result.data;
    }

    async getLoginUser(variables: GetLoginUserQueryVariables): Promise<GetLoginUserQuery> {
        const result = await this.client.query<GetLoginUserQuery>({
            query: GetLoginUser,
            variables: variables,
        });
        return result.data;
    }
}
