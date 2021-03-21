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
}
