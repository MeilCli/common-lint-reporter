# Transformer of RuboCop
```yml
- uses: MeilCli/common-lint-reporter/transformer/rubocop@v1
  with:
    report_files: |
      rubocop_report.json
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