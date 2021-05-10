# common-lint-reporter
This is generalized lint reporter action

Focuses on:
- Many lint file format support
- Flexible extendable reporting
- Multiple report format support, as check-run, comment or inline-comment

### Specification
Current supporting lint file format:
- eslint(JSON)
- checkstyle
- junit
  - compatibility: eslint, textlint

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
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: 12
      - run: npm install
      - run: npm run build
      - run: npm run lint
        continue-on-error: true
      - uses: MeilCli/common-lint-reporter/transformer/eslint@0
        with:
          # your output path
          report_files: |
            eslint_report.json
      - uses: MeilCli/common-lint-reporter/operator/filter-by-file-changed@v0
      - uses: MeilCli/common-lint-reporter@v0
        with:
          report_type: 'check_run'
          report_name: 'Lint Report'
```

### Detail information
- General
  - [Usage of oss or using dependabot repository](documents/oss-or-dependabot-usage.md)
  - [Report lint result](documents/report-lint-result.md)
- Transformer
  - [eslint](documents/transformer/eslint.md)
  - [checkstyle](documents/transformer/checkstyle.md)
  - [junit](documents/transformer/junit.md)
- Operator
  - [add](documents/operator/add.md)
  - [distinct](documents/operator/distinct.md)
  - [filter](documents/operator/filter.md)
  - [filter-by-file-changed](documents/operator/filter-by-file-changed.md)
  - [map](documents/operator/map.md)
- Reference
  - [Lint result file format](documents/lint-result.md)
  - [Operator context](documents/operator/context.md)

## License
MIT License

### Using
- [actions/toolkit](https://github.com/actions/toolkit), published by [MIT License](https://github.com/actions/toolkit/blob/master/LICENSE.md)
- [apollo-client](https://github.com/apollographql/apollo-client), published by [MIT License](https://github.com/apollographql/apollo-client/blob/main/LICENSE)
- [cross-fetch](https://github.com/lquixada/cross-fetch), published by [MIT License](https://github.com/lquixada/cross-fetch/blob/main/LICENSE)
- [graphql](https://github.com/graphql/graphql-js), published by [MIT License](https://github.com/graphql/graphql-js/blob/main/LICENSE)
- [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser), published by [MIT License](https://github.com/NaturalIntelligence/fast-xml-parser/blob/master/LICENSE)
- [he](https://github.com/mathiasbynens/he), published by [MIT License](https://github.com/mathiasbynens/he/blob/master/LICENSE-MIT.txt)
