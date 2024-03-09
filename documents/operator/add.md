# Operator of add
A action for manually add lint result
```yml
- uses: MeilCli/common-lint-reporter/operator/add@v1
  with:
    function: |
      () => add({path: "test/path3.txt", rule: "test-rule-ext", message: "hello", level: "notice"})
```

## Option
### Input
- `github_token`:
  - github app token, using to read and write repository
  - required
  - default: `${{ github.token }}`
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
- `use_api_context`
  - if this option is enabled, set information to context using api
  - more information? see [this](context.md)
  - value: `true` or `false`
  - default: `false`
- `function`:
  - the function of this action
  - required
- `output_path`:
  - output path
  - required
  - default: `common_lint.json`

## function input
`function` must be JavaScript's function, such as named-function, no-named-function or lambda-function

example:
```js
function run() { 
    add({
        path: "test/file.txt",
        message: "test message",
        rule: "test_rule_1",
        startLine: 1,
        startColumn: 10,
        endLine: 1,
        endColumn: 20,
        level: "failure",
    })
}
```

`add` function argument? see [this](../lint-result.md)