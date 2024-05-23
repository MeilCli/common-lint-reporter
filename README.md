# common-lint-reporter
[![CI-Master](https://github.com/MeilCli/common-lint-reporter/actions/workflows/ci-master.yml/badge.svg)](https://github.com/MeilCli/common-lint-reporter/actions/workflows/ci-master.yml)  
This is multiple format supported lint reporter for GitHub Actions

Focuses on:
- Many lint file format support
- Flexible extendable reporting
- Multiple report format support, as check-run, comment or inline-comment

### Specification
Current supporting lint file format:

|report format|file format|tool compatibility|
|:--|:--|:--|
|androidlint|xml|androidlint|
|checkstyle|xml|eslint|
|dotnet format|json|dotnet format|
|eslint|json|eslint|
|junit|xml|eslint, textlint, cpplint, RuboCop|
|markdownlint|txt|markdownlint|
|RuboCop|json|RuboCop|
|stylelint|json|stylelint|
|textlint|json|textlint|

### Feature request
Now, this action is WIP. Features are not enough and should improve about transformer and operator. If you have nice idea, please send as issue:heart:

## Usage
### Basic information
This action have 3 steps. Flexible and extendable are realized by separating step

1. Transform lint report file to common lint format file
1. Operate converting common lint file
1. Report common lint to GitHub

### Quick usage
```yml
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
      - run: npm run lint
        continue-on-error: true
      - uses: MeilCli/common-lint-reporter/transformer/eslint@1
        with:
          # your output path
          report_files: |
            eslint_report.json
      - uses: MeilCli/common-lint-reporter/operator/filter-by-file-changed@v1
      - uses: MeilCli/common-lint-reporter@v1
        with:
          report_type: 'check_run'
          report_name: 'Lint Report'
```

### Detail information
- General
  - [Usage of OSS or using dependabot](documents/oss-or-dependabot-usage.md)
  - [Report lint result](documents/report-lint-result.md)
- Transformer
  - [androidlint](documents/transformer/androidlint.md)
  - [checkstyle](documents/transformer/checkstyle.md)
  - [dotnet format](documents/transformer/dotnetformat.md)
  - [eslint](documents/transformer/eslint.md)
  - [junit](documents/transformer/junit.md)
  - [markdownlint](documents/transformer/markdownlint.md)
  - [RuboCop](documents/transformer/rubocop.md)
  - [stylelint](documents/transformer/stylelint.md)
  - [textlint](documents/transformer/textlint.md)
- Operator
  - [add](documents/operator/add.md)
  - [distinct](documents/operator/distinct.md)
  - [filter](documents/operator/filter.md)
  - [filter-by-file-changed](documents/operator/filter-by-file-changed.md)
  - [map](documents/operator/map.md)
- Reference
  - [Lint result file format](documents/lint-result.md)
  - [Operator context](documents/operator/context.md)

## Contributes
[<img src="https://gist.githubusercontent.com/MeilCli/2d3bbbc636d3e542aba28207b33b78bc/raw/6e7801da9bce505660ac5f2b429f98e06853e3d1/metrics_contributors.svg">](https://github.com/MeilCli/common-lint-reporter/graphs/contributors)

### Could you want to contribute?
see [Contributing.md](./.github/CONTRIBUTING.md)

## License
[<img src="https://gist.githubusercontent.com/MeilCli/2d3bbbc636d3e542aba28207b33b78bc/raw/6e7801da9bce505660ac5f2b429f98e06853e3d1/metrics_licenses.svg">](LICENSE.txt)

### Using
- [actions/toolkit](https://github.com/actions/toolkit), published by [MIT License](https://github.com/actions/toolkit/blob/master/LICENSE.md)
- [apollo-client](https://github.com/apollographql/apollo-client), published by [MIT License](https://github.com/apollographql/apollo-client/blob/main/LICENSE)
- [cross-fetch](https://github.com/lquixada/cross-fetch), published by [MIT License](https://github.com/lquixada/cross-fetch/blob/main/LICENSE)
- [graphql](https://github.com/graphql/graphql-js), published by [MIT License](https://github.com/graphql/graphql-js/blob/main/LICENSE)
- [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser), published by [MIT License](https://github.com/NaturalIntelligence/fast-xml-parser/blob/master/LICENSE)
- [he](https://github.com/mathiasbynens/he), published by [MIT License](https://github.com/mathiasbynens/he/blob/master/LICENSE-MIT.txt)
