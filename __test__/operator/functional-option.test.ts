import { FunctionalOption } from "../../src/operator/option";

export function createOption(func: string): FunctionalOption {
    return {
        githubToken: "",
        githubServerUrl: null,
        githubGraphqlApiUrl: null,
        workspacePath: "test/",
        repository: "MeilCli/common-lint-reporter",
        pullRequest: 1,
        commitSha: "test-hash",
        reportFiles: "",
        reportFilesFollowSymbolicLinks: true,
        func: func,
        outputPath: "",
        useApiContext: false,
    };
}

test("createOption", () => {
    createOption("");
});
