import { FunctionalOption } from "../../src/operator/option";

export function createOption(func: string): FunctionalOption {
    return {
        githubToken: "",
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
