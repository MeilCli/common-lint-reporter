# Operator context
Some functional operator can use context information

Example:
```yml
- uses: MeilCli/common-lint-reporter/operator/...
  with:
    function: |
      () => github.repository
```

## Context specification
```ts
interface GitHubContext {
    workspacePath: string;
    trimPath: (filePath: string) => string;
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
```

`github.api` is only usable when `use_api_context` option is `true`