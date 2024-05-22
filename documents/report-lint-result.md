# Report lint result
common-lint-reporter's final step, it's report lint result to GitHub

```yml
- uses: MeilCli/common-lint-reporter@v1
  with:
    report_type: 'check_run'
    report_name: 'Lint Report'
```

## Reporter type
### Check run
Report lint-result as check-run annotations or check-run summary

Check-run is based on Commit, so this reporter type can use target of Commit or PullRequest

### Comment
Report lint-result as PullRequest comment

This reporter type is only usable when provided `pull_request`.  
common-lint-reporter find `pull_request` number automally. but, if use `workflow_run` workflow, cannot find `pull_request` number.  
more inforemation: [this](oss-or-dependabot-usage.md)

### Inline comment
Report lint-result as PullRequest review comment or comment

This reporter type is only usable when provided `pull_request`.  
common-lint-reporter find `pull_request` number automally. but, if use `workflow_run` workflow, cannot find `pull_request` number.  
more inforemation: [this](oss-or-dependabot-usage.md)

#### Outdated resolver
You can select way to resolve when common-lint-reporter find outdated review comment

- `resolve_thread`: resolve review thread, but doesn't resolve it when additional comment by anyone
- `force_resolve_thread`: resolve review thread anytime
- `delete_thread`: delete review thread, but doesn't delte it when additional comment by anyone
- `delete_or_force_resolve_thread`: delete review thread, or resolve review thread when additional comment by anyone

## Option
### Input
- `github_token`:
  - github app token, using to read and write repository
  - required
  - default: `${{ github.token }}`
- `github_graphql_api_url`:
  - github graphql api url, this option is for github enterprise user
  - if this value is not set, this actions uses `https://api.github.com/graphql`
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
- `report_name`:
  - report name, if multiple report, should be unique name
  - required
  - default: `Lint report`
- `report_type`:
  - report type, value is `check_run` or `comment` or `inline_comment`
  - required
  - default: `check_run`
- `conclusion_failure_threshold`:
  - threshold of conclution as failure
  - required
  - default: `100`
- `conclusion_failure_weight`:
  - weight of reported failure by lint for conclusion
  - required
  - default: `100`
- `conclusion_warning_weight`:
  - weight of reported warning by lint for conclusion
  - required
  - default: `1`
- `conclusion_notice_weight`:
  - weight of reported notice by lint for conclusion
  - required 
  - default: `0`
- `outdated_resolver`:
  - inline_comment only option, option of how resolve when found outdated thread
  - value: `resolve_thread` or `force_resolve_thread` or `delete_thread` or `delete_or_force_resolve_thread`
  - default: `delete_or_force_resolve_thread`

### Conclusion formula
Conclusion is calculated each lint-level count and weight:
```ts
const score =
        noticeCount * option.conclusionNoticeWeight +
        warningCount * option.conclusionWarningWeight +
        failureCount * option.conclusionFailureWeight;
return score < option.conclusionFailureThreshold ? CheckConclusionState.Success : CheckConclusionState.Failure;
```