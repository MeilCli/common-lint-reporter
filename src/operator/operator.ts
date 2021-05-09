import * as fs from "fs";
import * as glob from "@actions/glob";
import * as vm from "vm";
import { OperatorOption, FunctionalOption } from "./option";
import { LintResult } from "../lint-result";
import { githubContext } from "../github/context";
import { githubClient } from "../github/client";
import { getPullRequestChangedFileWithPaging } from "../github/paging";

interface Context {
    source: LintResult[];
    result: LintResult[];
    github: GitHubContext;
}

interface GitHubContext {
    workspacePath: string;
    owner: string;
    repository: string;
    pullRequest: number | null;
    commitSha: string;
    api: ApiContext | null;
}

interface ApiContext {
    changedFiles: ChangedFile[];
}

interface ChangedFile {
    path: string;
    additions: number;
    deletions: number;
}

export abstract class Operator<TOption extends OperatorOption> {
    async operate(option: TOption): Promise<void> {
        const globber = await glob.create(option.reportFiles, {
            followSymbolicLinks: option.reportFilesFollowSymbolicLinks,
        });
        const result: LintResult[] = [];
        for await (const path of globber.globGenerator()) {
            const lintResults = JSON.parse(fs.readFileSync(path, "utf-8")) as LintResult[];
            const executeResults = await this.execute(lintResults, option);
            result.push(...executeResults);
        }
        this.writeFile(option.outputPath, result);
    }

    public abstract execute(lintResults: LintResult[], option: TOption): Promise<LintResult[]>;

    protected async createContext(
        option: TOption,
        lintResults: LintResult[],
        forceAccessApi = false
    ): Promise<Context> {
        return {
            source: lintResults,
            result: [],
            github: await this.createGitHubContext(option, forceAccessApi),
        };
    }

    private async createGitHubContext(option: TOption, forceAccessApi: boolean): Promise<GitHubContext> {
        const github = githubContext(option);
        return {
            workspacePath: github.workspacePath(),
            owner: github.owner(),
            repository: github.repository(),
            pullRequest: github.pullRequest(),
            commitSha: github.commitSha(),
            api: option.useApiContext || forceAccessApi ? await this.createApiContext(option) : null,
        };
    }

    private async createApiContext(option: TOption): Promise<ApiContext> {
        const github = githubContext(option);
        const client = githubClient(option);
        const pullRequestNumber = github.pullRequest();
        if (pullRequestNumber == null) {
            return {
                changedFiles: [],
            };
        }

        const changedFiles = await getPullRequestChangedFileWithPaging(client, {
            owner: github.owner(),
            name: github.repository(),
            pull_request: pullRequestNumber,
        });
        const changedFilesResult: ChangedFile[] = [];
        for (const changedFile of changedFiles) {
            changedFilesResult.push({
                path: changedFile.path,
                additions: changedFile.additions,
                deletions: changedFile.deletions,
            });
        }

        return {
            changedFiles: changedFilesResult,
        };
    }

    protected writeFile(path: string, lintResults: LintResult[]) {
        fs.writeFileSync(path, JSON.stringify(lintResults));
    }
}

export abstract class FunctionalOperator extends Operator<FunctionalOption> {
    async execute(lintResults: LintResult[], option: FunctionalOption): Promise<LintResult[]> {
        const context = await this.createContext(option, lintResults);
        const script = new vm.Script(this.createScript(option.func));
        script.runInNewContext(context);
        return context.result;
    }

    protected abstract createScript(func: string): string;
}
