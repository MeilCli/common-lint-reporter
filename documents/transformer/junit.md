# Transformer of junit
```yml
- uses: MeilCli/common-lint-reporter/transformer/junit@v0
  with:
    report_files: |
      junit_report.xml
```

## Compatibility
Many tool can report result as junit format, but each output files are not same formatting. For example, eslint's junit format has path and line information, but other tool's junit format hasn't it

The compatibility is not needed because this action has standard resolver. But, if tool that is compatibility, will be better experience because transform to have many information

Now compatibility:
- eslint
- textlint
- cpplint

## Option
### Input
- `report_files`:
  - report file glob pattern
  - required
- `report_files_follow_symbolic_links`:
  - report file glob pattern option
  - value: `true` or `false`
- `output_path`:
  - output path
  - required
  - default: `common_lint.json`