# Usage of OSS or using dependabot
`github-actions` token has not `write` permission at triggered by `pull_request` that created from forked repository or created by dependabot. This reason is for security

So, such repository's `pull_request` workflow can not report lint result. In this case, you can use `workflow_run` workflow instead of the normal workflow

ref: [Keeping your GitHub Actions and workflows secure: Preventing pwn requests](https://securitylab.github.com/research/github-actions-preventing-pwn-requests/)

## Quick example
```yml
# ci.yml
name: CI

on:
  pull_request:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm run build
      - run: npm run lint:report
        continue-on-error: true
      - uses: actions/upload-artifact@v4
        with:
          name: eslint
          # your output path
          path: eslint_report.json
```
```yml
# report.yml
name: Report

on:
  workflow_run:
    workflows: ['CI']
    types:
      - completed

jobs:
  lint:
    runs-on: ubuntu-latest
    if: github.event.workflow_run.conclusion == 'success'
    steps:
      - uses: actions/checkout@v4
      - name: Download artifact
        uses: dawidd6/action-download-artifact@v3
        with:
          workflow: ci.yml
          run_id: ${{ github.event.workflow_run.id }}
          name: eslint
      - uses: MeilCli/common-lint-reporter/transformer/eslint@v1
        with:
          report_files: |
            eslint_report.json
      - name: Report lint result
        uses: MeilCli/common-lint-reporter@v1
        with:
          report_type: 'check_run'
          report_name: 'Lint Report'
```

## If use pull request information
A problem of `workflow_run` is to not be able to use information of pull request. This reason is `workflow_run` context has not PullRequestPayload

So, this action is prepared export-import pull request context tool!!

```yml
# ci.yml
name: CI

on:
  pull_request:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm run build
      - run: npm run lint:report
        continue-on-error: true
      - uses: MeilCli/common-lint-reporter/utils/export-context@v1
      - uses: actions/upload-artifact@v4
        with:
          name: result
          # your output path, and exported path
          path: |
            eslint_report.json
            common_lint_context.json
```
```yml
# report.yml
name: Report

on:
  workflow_run:
    workflows: ['CI']
    types:
      - completed

jobs:
  lint:
    runs-on: ubuntu-latest
    if: github.event.workflow_run.conclusion == 'success'
    steps:
      # download reported file and context and import context
      - name: Download artifact
        uses: dawidd6/action-download-artifact@v3
        with:
          workflow: ci.yml
          run_id: ${{ github.event.workflow_run.id }}
          name: result
      - uses: MeilCli/common-lint-reporter/utils/import-context@v1
        id: lint_context
      - uses: MeilCli/common-lint-reporter/transformer/eslint@v1
        with:
          report_files: |
            eslint_report.json
      - name: Report lint result
        uses: MeilCli/common-lint-reporter@v1
        with:
          # inline_comment can use only provided pull_request when in this situation
          report_type: 'inline_comment'
          report_name: 'Lint Report'
          # set the pull_request number
          pull_request: ${{ steps.lint_context.outputs.pull_request }}
```