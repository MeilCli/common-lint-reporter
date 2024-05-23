import * as github from "@actions/github";
import { CommonOption } from "../option";

export function githubContext(option: CommonOption | null): GitHubContext {
    return new GitHubContext(option);
}

export class GitHubContext {
    constructor(private readonly option: CommonOption | null) {}

    workspacePath(): string {
        if (this.option?.workspacePath != null) {
            return this.option.workspacePath;
        }
        return process.env.GITHUB_WORKSPACE ?? "";
    }

    owner(): string {
        if (this.option?.repository != null) {
            return this.option.repository.split("/")[0];
        }
        return github.context.repo.owner;
    }

    repository(): string {
        if (this.option?.repository != null) {
            return this.option.repository.split("/")[1];
        }
        return github.context.repo.repo;
    }

    serverUrl(): string {
        if (this.option?.githubServerUrl != null) {
            return this.option.githubServerUrl;
        }
        return github.context.serverUrl;
    }

    graphqlApiUrl(): string {
        if (this.option?.githubGraphqlApiUrl != null) {
            return this.option.githubGraphqlApiUrl;
        }
        return github.context.graphqlUrl;
    }

    pullRequest(): number | null {
        if (this.option?.pullRequest != null) {
            return this.option.pullRequest;
        }
        if (github.context.payload.pull_request != undefined) {
            return github.context.payload.pull_request.number;
        }
        return null;
    }

    commitSha(): string {
        if (this.option?.commitSha != null) {
            return this.option.commitSha;
        }
        if (github.context.payload.pull_request != undefined) {
            return github.context.payload.pull_request.head.sha;
        }
        if (github.context.payload.workflow_run != undefined) {
            return github.context.payload.workflow_run.head_sha;
        }
        return github.context.sha;
    }
}
