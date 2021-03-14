# action-template
This repository is my GitHub Action Repository template

## Usage of this template
1. use this template
1. rename package at `package.json`
1. change labels use `.github/labels.yml` and [MobileAct/GithubLabelSetUpper](https://github.com/MobileAct/GithubLabelSetUpper)
   - change `bug` and `question` labels before GithubLabelSetUpper, because it tool has bug case insensitive
1. add bot account token `MEILCLI_BOT`(`public_repo` scope)
1. add branch protection rule `master`
   - `Require pull request reviews before merging`
     - `Dismiss stale pull request approvals when new commits are pushed`
     - `Require review from Code Owners`
   - `Require status checks to pass before merging`
     - change `build` to required
1. add branch protection rule `v*`
1. change setting to off
   - Wikis
   - Projects
   - Allow rebase merging
1. change setting to on
    - Automatically delete head branches
1. remove comment out `release.yml` schedule cron

### For without MeilCli
changelist:
- CodeOwner
- Dependabot
- secret name at `ci.yml` and `merge.yml`
- license copyright

## Contributing
see [Contributing.md](./.github/CONTRIBUTING.md)

## License
MIT License

### Using
- [actions/toolkit](https://github.com/actions/toolkit), published by [MIT License](https://github.com/actions/toolkit/blob/master/LICENSE.md)