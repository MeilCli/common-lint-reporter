# Transformer of markdownlint
```yml
- uses: MeilCli/common-lint-reporter/transformer/markdownlint@v0
  with:
    report_files: |
      markdownlint_report.txt
```

**must save markdownlint result to file**

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