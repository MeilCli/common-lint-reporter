# Operator of filter-by-file-changed
A action for filter lint result by PullRequest's changed files
```yml
- uses: MeilCli/common-lint-reporter/operator/filter-by-file-changed@v1
```

**If you use `workflow_run` workflow, must set `pull_request` input. see [this document](../oss-or-dependabot-usage.md)**

## Option
### Input

- `github_token`:
  - github app token, using to read and write repository
  - required
  - default: `${{ github.token }}`
- `github_server_url`:
  - github server url, this option is for github enterprise user
  - if this value is not set, this actions uses `github.server_url`
- `github_graphql_api_url`:
  - github graphql api url, this option is for github enterprise user
  - if this value is not set, this actions uses `github.graphql_url`
- `workspace_path`:
  - workspace path, using to convert relative path from absolute path
- `repository`:
  - running repository, format: owner/repository
- `pull_request`:
  - running pull request number
- `commit_sha`:
  - running commit sha
- `report_files`:
  - report file glob pattern
  - required
  - default: `common_lint.json`
- `report_files_follow_symbolic_links`:
  - report file glob pattern option
  - value: `true` or `false`
- `output_path`:
  - output path
  - required
  - default: `common_lint.json`
