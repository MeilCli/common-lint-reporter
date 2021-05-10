# Transformer of textlint
```yml
- uses: MeilCli/common-lint-reporter/transformer/textlint@v0
  with:
    report_files: |
      textlint_report.json
```

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