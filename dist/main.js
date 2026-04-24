import * as __WEBPACK_EXTERNAL_MODULE_assert__ from "assert";
import * as __WEBPACK_EXTERNAL_MODULE_child_process__ from "child_process";
import * as __WEBPACK_EXTERNAL_MODULE_crypto__ from "crypto";
import * as __WEBPACK_EXTERNAL_MODULE_events__ from "events";
import * as __WEBPACK_EXTERNAL_MODULE_fs__ from "fs";
import * as __WEBPACK_EXTERNAL_MODULE_http__ from "http";
import * as __WEBPACK_EXTERNAL_MODULE_https__ from "https";
import * as __WEBPACK_EXTERNAL_MODULE_os__ from "os";
import * as __WEBPACK_EXTERNAL_MODULE_path__ from "path";
import * as __WEBPACK_EXTERNAL_MODULE_stream__ from "stream";
import * as __WEBPACK_EXTERNAL_MODULE_string_decoder__ from "string_decoder";
import * as __WEBPACK_EXTERNAL_MODULE_timers__ from "timers";
import * as __WEBPACK_EXTERNAL_MODULE_url__ from "url";
import * as __WEBPACK_EXTERNAL_MODULE_util__ from "util";
import * as __WEBPACK_EXTERNAL_MODULE_zlib__ from "zlib";
import { createRequire as __WEBPACK_EXTERNAL_createRequire } from "node:module";
const __WEBPACK_EXTERNAL_createRequire_require = __WEBPACK_EXTERNAL_createRequire(import.meta.url);
/******/ var __webpack_modules__ = ({

/***/ 87570
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/.pnpm/@actions+core@3.0.0/node_modules/@actions/core/lib/core.js + 13 modules
var core = __webpack_require__(18370);
;// ./src/option.ts

function getCommonOption() {
    return {
        githubToken: getInput("github_token"),
        githubServerUrl: getInputOrNull("github_server_url"),
        githubGraphqlApiUrl: getInputOrNull("github_graphql_api_url"),
        workspacePath: getInputOrNull("workspace_path"),
        repository: getInputOrNull("repository"),
        pullRequest: getInputNumberOrNull("pull_request"),
        commitSha: getInputOrNull("commit_sha"),
    };
}
var ReportType;
(function (ReportType) {
    ReportType[ReportType["CheckRun"] = 0] = "CheckRun";
    ReportType[ReportType["Comment"] = 1] = "Comment";
    ReportType[ReportType["InlineComment"] = 2] = "InlineComment";
})(ReportType || (ReportType = {}));
var OutdatedResolver;
(function (OutdatedResolver) {
    OutdatedResolver[OutdatedResolver["ResolveThread"] = 0] = "ResolveThread";
    OutdatedResolver[OutdatedResolver["ForceResolveThread"] = 1] = "ForceResolveThread";
    OutdatedResolver[OutdatedResolver["DeleteThread"] = 2] = "DeleteThread";
    OutdatedResolver[OutdatedResolver["DeleteOrForceResolveThread"] = 3] = "DeleteOrForceResolveThread";
})(OutdatedResolver || (OutdatedResolver = {}));
function getOption() {
    const reportTypeString = getInput("report_type");
    // eslint-disable-next-line no-useless-assignment
    let reportType = ReportType.CheckRun;
    switch (reportTypeString) {
        case "comment":
            reportType = ReportType.Comment;
            break;
        case "inline_comment":
            reportType = ReportType.InlineComment;
            break;
        default:
            reportType = ReportType.CheckRun;
            break;
    }
    const outdatedResolverString = getInput("outdated_resolver");
    // eslint-disable-next-line no-useless-assignment
    let outdatedResolver = OutdatedResolver.DeleteOrForceResolveThread;
    switch (outdatedResolverString) {
        case "resolve_thread":
            outdatedResolver = OutdatedResolver.ResolveThread;
            break;
        case "force_resolve_thread":
            outdatedResolver = OutdatedResolver.ForceResolveThread;
            break;
        case "delete_thread":
            outdatedResolver = OutdatedResolver.DeleteThread;
            break;
        default:
            outdatedResolver = OutdatedResolver.DeleteOrForceResolveThread;
            break;
    }
    return {
        reportFiles: getInput("report_files"),
        reportFilesFollowSymbolicLinks: getInputOrNull("report_files_follow_symbolic_links") == "true",
        reportName: getInput("report_name"),
        reportType: reportType,
        reportToSameCheckRun: getInputOrNull("report_to_same_check_run") == "true",
        conclusionFailureThreshold: parseInt(getInput("conclusion_failure_threshold")),
        conclusionFailureWeight: parseInt(getInput("conclusion_failure_weight")),
        conclusionWarningWeight: parseInt(getInput("conclusion_warning_weight")),
        conclusionNoticeWeight: parseInt(getInput("conclusion_notice_weight")),
        outdatedResolver: outdatedResolver,
        ...getCommonOption(),
    };
}
function getInput(key) {
    return core/* getInput */.V4(key, { required: true });
}
function getInputOrNull(key) {
    const result = core/* getInput */.V4(key, { required: false });
    if (result.length == 0) {
        return null;
    }
    return result;
}
function getInputNumberOrNull(key) {
    const value = getInputOrNull(key);
    if (value == null) {
        return null;
    }
    return parseInt(value);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/@actions+glob@0.6.1/node_modules/@actions/glob/lib/glob.js + 8 modules
var glob = __webpack_require__(31754);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(44421);
;// ./src/lint-result.ts
/* unused harmony import specifier */ var fs;


async function readLintResults(option) {
    const globber = await glob/* create */.v(option.reportFiles, {
        followSymbolicLinks: option.reportFilesFollowSymbolicLinks,
    });
    const result = [];
    for await (const file of globber.globGenerator()) {
        const readContents = external_fs_.readFileSync(file, "utf-8");
        const lintResults = JSON.parse(readContents);
        result.push(...lintResults);
    }
    return result;
}
function writeLintResults(path, lintResults) {
    const text = JSON.stringify(lintResults);
    fs.writeFileSync(path, text);
}

// EXTERNAL MODULE: ./node_modules/.pnpm/cross-fetch@4.1.0/node_modules/cross-fetch/dist/node-ponyfill.js
var node_ponyfill = __webpack_require__(45745);
var node_ponyfill_default = /*#__PURE__*/__webpack_require__.n(node_ponyfill);
// EXTERNAL MODULE: ./node_modules/.pnpm/@apollo+client@4.1.7_graphql-ws@6.0.8_graphql@16.13.2_ws@8.20.0__graphql@16.13.2_react@19.2.5_rxjs@7.8.2/node_modules/@apollo/client/core/ApolloClient.js + 3 modules
var ApolloClient = __webpack_require__(63993);
// EXTERNAL MODULE: ./node_modules/.pnpm/@apollo+client@4.1.7_graphql-ws@6.0.8_graphql@16.13.2_ws@8.20.0__graphql@16.13.2_react@19.2.5_rxjs@7.8.2/node_modules/@apollo/client/link/http/HttpLink.js + 9 modules
var HttpLink = __webpack_require__(50238);
// EXTERNAL MODULE: ./node_modules/.pnpm/@apollo+client@4.1.7_graphql-ws@6.0.8_graphql@16.13.2_ws@8.20.0__graphql@16.13.2_react@19.2.5_rxjs@7.8.2/node_modules/@apollo/client/cache/inmemory/inMemoryCache.js + 6 modules
var inMemoryCache = __webpack_require__(44719);
// EXTERNAL MODULE: ./node_modules/.pnpm/@actions+github@9.1.0/node_modules/@actions/github/lib/github.js + 14 modules
var github = __webpack_require__(49865);
;// ./src/github/context.ts

function githubContext(option) {
    return new GitHubContext(option);
}
class GitHubContext {
    constructor(option) {
        this.option = option;
    }
    workspacePath() {
        if (this.option?.workspacePath != null) {
            return this.option.workspacePath;
        }
        return process.env.GITHUB_WORKSPACE ?? "";
    }
    owner() {
        if (this.option?.repository != null) {
            return this.option.repository.split("/")[0];
        }
        return github/* context */._.repo.owner;
    }
    repository() {
        if (this.option?.repository != null) {
            return this.option.repository.split("/")[1];
        }
        return github/* context */._.repo.repo;
    }
    serverUrl() {
        if (this.option?.githubServerUrl != null) {
            return this.option.githubServerUrl;
        }
        return github/* context */._.serverUrl;
    }
    graphqlApiUrl() {
        if (this.option?.githubGraphqlApiUrl != null) {
            return this.option.githubGraphqlApiUrl;
        }
        return github/* context */._.graphqlUrl;
    }
    pullRequest() {
        if (this.option?.pullRequest != null) {
            return this.option.pullRequest;
        }
        if (github/* context */._.payload.pull_request != undefined) {
            return github/* context */._.payload.pull_request.number;
        }
        return null;
    }
    commitSha() {
        if (this.option?.commitSha != null) {
            return this.option.commitSha;
        }
        if (github/* context */._.payload.pull_request != undefined) {
            return github/* context */._.payload.pull_request.head.sha;
        }
        if (github/* context */._.payload.workflow_run != undefined) {
            return github/* context */._.payload.workflow_run.head_sha;
        }
        return github/* context */._.sha;
    }
}

// EXTERNAL MODULE: ./graphql/graphql.ts
var graphql = __webpack_require__(45881);
;// ./src/github/client.ts




function githubClient(option) {
    const context = githubContext(option);
    return new GitHubClient(new ApolloClient/* ApolloClient */.R({
        link: new HttpLink/* HttpLink */.P({
            uri: context.graphqlApiUrl(),
            headers: { authorization: `token ${option.githubToken}` },
            fetch: (node_ponyfill_default()),
        }),
        cache: new inMemoryCache/* InMemoryCache */.D(),
    }));
}
class GitHubClient {
    constructor(client) {
        this.client = client;
    }
    async createCheckRun(variables) {
        const result = await this.client.mutate({
            mutation: graphql/* CreateCheckRun */.yO2,
            variables: variables,
        });
        return result.data;
    }
    async getPullRequestChangedFile(variables) {
        const result = await this.client.query({
            query: graphql/* GetPullRequestChangedFile */.RGe,
            variables: variables,
        });
        return result.data;
    }
    async getRepositoryId(variables) {
        const result = await this.client.query({
            query: graphql/* GetRepositoryId */.Uwd,
            variables: variables,
        });
        return result.data;
    }
    async updateCheckRun(variables) {
        const result = await this.client.mutate({
            mutation: graphql/* UpdateCheckRun */.Z0m,
            variables: variables,
        });
        return result.data;
    }
    async getCommitStatusAndCheckRun(variables) {
        const result = await this.client.query({
            query: graphql/* GetCommitStatusAndCheckRun */.wLJ,
            variables: variables,
        });
        return result.data;
    }
    async getCheckRunAnnotations(variables) {
        const result = await this.client.query({
            query: graphql/* GetCheckRunAnnotations */.ob7,
            variables: variables,
        });
        return result.data;
    }
    async getPullRequest(variables) {
        const result = await this.client.query({
            query: graphql/* GetPullRequest */.vrW,
            variables: variables,
        });
        return result.data;
    }
    async getPullRequestComments(variables) {
        const result = await this.client.query({
            query: graphql/* GetPullRequestComment */.sAo,
            variables: variables,
        });
        return result.data;
    }
    async addComment(variables) {
        const result = await this.client.mutate({
            mutation: graphql/* AddComment */.HZX,
            variables: variables,
        });
        return result.data;
    }
    async deleteComment(variables) {
        const result = await this.client.mutate({
            mutation: graphql/* DeleteComment */.LWV,
            variables: variables,
        });
        return result.data;
    }
    async getLoginUser(variables) {
        const result = await this.client.query({
            query: graphql/* GetLoginUser */.vSx,
            variables: variables,
        });
        return result.data;
    }
    async addPullRequestReviewDraft(variables) {
        const result = await this.client.mutate({
            mutation: graphql/* AddPullRequestReviewDraft */.ZL4,
            variables: variables,
        });
        return result.data;
    }
    async submitPullRequestReview(variables) {
        const result = await this.client.mutate({
            mutation: graphql/* SubmitPullRequestReview */.B5f,
            variables: variables,
        });
        return result.data;
    }
    async deletePullRequestReview(variables) {
        const result = await this.client.mutate({
            mutation: graphql/* DeletePullRequestReview */.GFG,
            variables: variables,
        });
        return result.data;
    }
    async addPullRequestReviewThread(variables) {
        const result = await this.client.mutate({
            mutation: graphql/* AddPullRequestReviewThread */.cHL,
            variables: variables,
        });
        return result.data;
    }
    async deletePullRequestReviewComment(variables) {
        const result = await this.client.mutate({
            mutation: graphql/* DeletePullRequestReviewComment */.ZPu,
            variables: variables,
        });
        return result.data;
    }
    async resolvePullRequestReviewThread(variables) {
        const result = await this.client.mutate({
            mutation: graphql/* ResolvePullRequestReviewThread */.FaX,
            variables: variables,
        });
        return result.data;
    }
    async getPullRequestReviewThreads(variables) {
        const result = await this.client.query({
            query: graphql/* GetPullRequestReviewThreads */.QKw,
            variables: variables,
        });
        return result.data;
    }
}

;// ./src/github/paging.ts
// gurad for infinity loop
const maxLoop = 100;
async function getResponseWithPaging(variables, getResponse, selectorPageInfo, selectorNodes) {
    const result = [];
    let response = await getResponse(variables);
    if (response == undefined) {
        return result;
    }
    let pageInfo = selectorPageInfo(response);
    let nodes = selectorNodes(response);
    if (nodes == null || nodes == undefined) {
        return result;
    }
    for (const node of nodes) {
        if (node == null || node == undefined) {
            continue;
        }
        result.push(node);
    }
    let loopCount = 0;
    while (pageInfo != null &&
        pageInfo != undefined &&
        pageInfo.hasNextPage &&
        pageInfo.endCursor != null &&
        pageInfo.endCursor != undefined) {
        loopCount += 1;
        response = await getResponse({ ...variables, after: pageInfo.endCursor });
        if (response == undefined) {
            return result;
        }
        pageInfo = selectorPageInfo(response);
        nodes = selectorNodes(response);
        if (nodes == null || nodes == undefined) {
            return result;
        }
        for (const node of nodes) {
            if (node == null || node == undefined) {
                continue;
            }
            result.push(node);
        }
        if (maxLoop <= loopCount) {
            throw Error("infinity loop detected");
        }
    }
    return result;
}
async function getPullRequestChangedFileWithPaging(client, variables) {
    return getResponseWithPaging(variables, (variables) => client.getPullRequestChangedFile(variables), (response) => response.repository?.pullRequest?.files?.pageInfo, (response) => response.repository?.pullRequest?.files?.nodes);
}
async function getCommitStatusAndCheckRunWithPaging(client, variables) {
    return getResponseWithPaging(variables, (variables) => client.getCommitStatusAndCheckRun(variables), (response) => {
        if (response.repository?.object?.__typename != "Commit") {
            return null;
        }
        return response.repository.object.statusCheckRollup?.contexts.pageInfo;
    }, (response) => {
        if (response.repository?.object?.__typename != "Commit") {
            return null;
        }
        return response.repository.object.statusCheckRollup?.contexts.nodes;
    });
}
async function getCheckRunAnnotationsWithPaging(client, variables) {
    return getResponseWithPaging(variables, (variables) => client.getCheckRunAnnotations(variables), (response) => {
        if (response.node?.__typename != "CheckRun") {
            return null;
        }
        return response.node.annotations?.pageInfo;
    }, (response) => {
        if (response.node?.__typename != "CheckRun") {
            return null;
        }
        return response.node.annotations?.nodes;
    });
}
async function getPullRequestCommentsWithPaging(client, variables) {
    return getResponseWithPaging(variables, (variables) => client.getPullRequestComments(variables), (response) => response.repository?.pullRequest?.comments.pageInfo, (response) => response.repository?.pullRequest?.comments.nodes);
}
async function getPullRequestReviewThreadsWithPaging(client, variables) {
    return getResponseWithPaging(variables, (variables) => client.getPullRequestReviewThreads(variables), (response) => response.repository?.pullRequest?.reviewThreads.pageInfo, (response) => response.repository?.pullRequest?.reviewThreads.nodes);
}

;// ./src/reporter/level.ts
function countLevel(lintResults, targetLevel) {
    let count = 0;
    for (const lintResult of lintResults) {
        if (lintResult.level == targetLevel) {
            count += 1;
        }
    }
    return count;
}

;// ./src/reporter/conclusion.ts


function calculateConclusion(option, lintResults) {
    const noticeCount = countLevel(lintResults, "notice");
    const warningCount = countLevel(lintResults, "warning");
    const failureCount = countLevel(lintResults, "failure");
    const score = noticeCount * option.conclusionNoticeWeight +
        warningCount * option.conclusionWarningWeight +
        failureCount * option.conclusionFailureWeight;
    return score < option.conclusionFailureThreshold ? graphql/* CheckConclusionState */.zd6.Success : graphql/* CheckConclusionState */.zd6.Failure;
}

;// ./src/reporter/check-run/summary.ts

function createSummary(lintResults) {
    const noticeCount = countLevel(lintResults, "notice");
    const warningCount = countLevel(lintResults, "warning");
    const failureCount = countLevel(lintResults, "failure");
    const messages = [];
    if (noticeCount == 1) {
        messages.push("1 notice");
    }
    if (2 <= noticeCount) {
        messages.push(`${noticeCount} notices`);
    }
    if (warningCount == 1) {
        messages.push("1 warning");
    }
    if (2 <= warningCount) {
        messages.push(`${warningCount} warnings`);
    }
    if (failureCount == 1) {
        messages.push("1 failure");
    }
    if (2 <= failureCount) {
        messages.push(`${failureCount} failures`);
    }
    if (messages.length == 0) {
        return "lint message is empty";
    }
    return `${messages.join(" and ")} found`;
}

// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(12521);
;// ./src/reporter/path.ts

function trimPath(context, filePath) {
    return filePath.replace(`${context.workspacePath()}${external_path_.sep}`, "");
}

;// ./src/reporter/check-run/message.ts


function markdownLevelMessage(context, lintResults, targetLevel) {
    let result = "";
    for (const lintResult of lintResults) {
        if (lintResult.level != targetLevel) {
            continue;
        }
        let line = "";
        if (lintResult.startLine != undefined) {
            line += `L${lintResult.startLine}`;
        }
        if (lintResult.startLine != undefined &&
            lintResult.endLine != undefined &&
            lintResult.startLine != lintResult.endLine) {
            line += `-L${lintResult.endLine}`;
        }
        const baseUrl = `${context.serverUrl()}/${context.owner()}/${context.repository()}`;
        const link = `${baseUrl}/blob/${context.commitSha()}/${trimPath(context, lintResult.path)}#${line}`;
        result += `### [${trimPath(context, lintResult.path)} ${line}](${link})\n`;
        result += `Rule: ${lintResult.rule}\n`;
        result += lintResult.message;
        result += "\n";
    }
    return result;
}
function createMessage(context, lintResults) {
    const noticeCount = countLevel(lintResults, "notice");
    const warningCount = countLevel(lintResults, "warning");
    const failureCount = countLevel(lintResults, "failure");
    let result = "";
    if (0 < failureCount) {
        if (failureCount == 1) {
            result += "## 1 Failure\n";
        }
        else {
            result += `## ${failureCount} Failures\n`;
        }
        result += markdownLevelMessage(context, lintResults, "failure");
    }
    if (0 < warningCount) {
        if (warningCount == 1) {
            result += "## 1 Warning\n";
        }
        else {
            result += `## ${warningCount} Warnings\n`;
        }
        result += markdownLevelMessage(context, lintResults, "warning");
    }
    if (0 < noticeCount) {
        if (noticeCount == 1) {
            result += "## 1 Notice\n";
        }
        else {
            result += `## ${noticeCount} Notices\n`;
        }
        result += markdownLevelMessage(context, lintResults, "notice");
    }
    return result;
}

;// ./src/reporter/check-run/annotation.ts


function createAnnotation(context, lintResult) {
    if (lintResult.startLine == undefined) {
        // report only at summary
        return null;
    }
    let level;
    if (lintResult.level == "notice") {
        level = graphql/* CheckAnnotationLevel */.Cue.Notice;
    }
    else if (lintResult.level == "warning") {
        level = graphql/* CheckAnnotationLevel */.Cue.Warning;
    }
    else {
        level = graphql/* CheckAnnotationLevel */.Cue.Failure;
    }
    let startColumn;
    let endColumn;
    if (lintResult.startLine == lintResult.endLine) {
        startColumn = lintResult.startColumn;
        endColumn = lintResult.endColumn;
    }
    else {
        startColumn = undefined;
        endColumn = undefined;
    }
    return {
        path: trimPath(context, lintResult.path),
        location: {
            startLine: lintResult.startLine,
            endLine: lintResult.endLine ?? lintResult.startLine,
            startColumn: startColumn,
            endColumn: endColumn,
        },
        annotationLevel: level,
        title: `Rule: ${lintResult.rule}`,
        message: lintResult.message,
    };
}
function equalsAnnotation(left, right) {
    if (left.path !== right.path) {
        return false;
    }
    if (left.message !== right.message) {
        return false;
    }
    if (left.title !== right.title) {
        return false;
    }
    if (left.annotationLevel !== right.annotationLevel) {
        return false;
    }
    if (left.location.start.line != right.location.startLine) {
        return false;
    }
    if (left.location.start.column != right.location.startColumn) {
        return false;
    }
    if (left.location.end.line != right.location.endLine) {
        return false;
    }
    if (left.location.end.column != right.location.endColumn) {
        return false;
    }
    return true;
}

;// ./src/reporter/check-run/check-run-reporter.ts









class CheckRunReporter {
    async report(option, lintResults) {
        if (option.reportToSameCheckRun) {
            this.reportToSameCheckRun(option, lintResults);
        }
        else {
            this.reportToNewCheckRun(option, lintResults);
        }
    }
    async reportToSameCheckRun(option, lintResults) {
        const context = githubContext(option);
        for (const lintResult of lintResults) {
            const annotation = createAnnotation(context, lintResult);
            if (annotation == null) {
                continue;
            }
            const annotationProperties = {
                title: annotation.title ?? undefined,
                file: annotation.path,
                startLine: annotation.location.startLine,
                endLine: annotation.location.endLine,
                startColumn: annotation.location.startColumn ?? undefined,
                endColumn: annotation.location.endColumn ?? undefined,
            };
            if (lintResult.level == "notice") {
                core/* notice */.lm(annotation.message, annotationProperties);
            }
            if (lintResult.level == "warning") {
                core/* warning */.$e(annotation.message, annotationProperties);
            }
            if (lintResult.level == "failure") {
                core/* error */.z3(annotation.message, annotationProperties);
            }
        }
        core/* summary */.z.addRaw(createSummary(lintResults), true);
        core/* summary */.z.addRaw(createMessage(context, lintResults), true);
        core/* summary */.z.write();
        const conclusion = calculateConclusion(option, lintResults);
        if (conclusion == graphql/* CheckConclusionState */.zd6.Failure) {
            core/* setFailed */.C1("conclusion is failure");
        }
    }
    async reportToNewCheckRun(option, lintResults) {
        const client = githubClient(option);
        const context = githubContext(option);
        const repositoryId = (await client.getRepositoryId({ owner: context.owner(), name: context.repository() }))
            ?.repository?.id;
        if (repositoryId == undefined) {
            throw Error("not found repository");
        }
        const statusAndCheckRuns = await getCommitStatusAndCheckRunWithPaging(client, {
            owner: context.owner(),
            name: context.repository(),
            commitSha: context.commitSha(),
        });
        const foundSameCheckRun = statusAndCheckRuns.find((x) => x.__typename == "CheckRun" && x.name == option.reportName);
        if (foundSameCheckRun != undefined) {
            await client.updateCheckRun({
                repositoryId: repositoryId,
                checkRunId: foundSameCheckRun.id,
                status: graphql/* RequestableCheckStatusState */.pKD.InProgress,
            });
        }
        const checkRunId = foundSameCheckRun == undefined
            ? (await client.createCheckRun({
                repositoryId: repositoryId,
                headSha: context.commitSha(),
                name: option.reportName,
                startedAt: new Date().toISOString(),
                status: graphql/* RequestableCheckStatusState */.pKD.InProgress,
            }))?.createCheckRun?.checkRun?.id
            : foundSameCheckRun.id;
        if (checkRunId == undefined) {
            throw Error("cannot create check-run");
        }
        const pastAnnotations = foundSameCheckRun == undefined
            ? []
            : await getCheckRunAnnotationsWithPaging(client, { checkRunId: foundSameCheckRun.id });
        await this.uploadResult(client, context, option, repositoryId, checkRunId, lintResults, pastAnnotations);
    }
    async uploadResult(client, context, option, repositoryId, checkRunId, lintResults, pastAnnotations) {
        const batchSize = 50;
        let currentIndex = 0;
        const rawAnnotations = this.convertToCheckAnnotationData(context, lintResults);
        const newAnnotations = rawAnnotations.filter((x) => pastAnnotations.filter((y) => equalsAnnotation(y, x)).length == 0);
        while (currentIndex + batchSize < newAnnotations.length) {
            const batchNumber = `${currentIndex / batchSize + 1}/${Math.ceil(newAnnotations.length / batchSize)}`;
            const surmmary = `${createSummary(lintResults)}, while batch ${batchNumber}`;
            const batchedAnnotations = newAnnotations.slice(currentIndex, currentIndex + batchSize);
            await client.updateCheckRun({
                repositoryId: repositoryId,
                checkRunId: checkRunId,
                status: graphql/* RequestableCheckStatusState */.pKD.InProgress,
                output: {
                    title: option.reportName,
                    summary: surmmary,
                    annotations: batchedAnnotations,
                },
            });
            currentIndex += batchSize;
        }
        const annotations = newAnnotations.slice(currentIndex);
        await client.updateCheckRun({
            repositoryId: repositoryId,
            checkRunId: checkRunId,
            status: graphql/* RequestableCheckStatusState */.pKD.Completed,
            conclusion: calculateConclusion(option, lintResults),
            completedAt: new Date().toISOString(),
            output: {
                title: option.reportName,
                summary: createSummary(lintResults),
                text: createMessage(context, lintResults),
                annotations: annotations,
            },
        });
    }
    convertToCheckAnnotationData(context, lintResults) {
        const result = [];
        for (const lintResult of lintResults) {
            const annotation = createAnnotation(context, lintResult);
            if (annotation != null) {
                result.push(annotation);
            }
        }
        return result;
    }
}

;// ./src/reporter/comment/comment.ts


function lintCommentIdentifier(reportName) {
    return `<!-- common-lint-reporter: ${reportName} -->`;
}
function isLintComment(body, reportName) {
    return body.startsWith(lintCommentIdentifier(reportName));
}
function createLintComment(body, reportName) {
    return `${lintCommentIdentifier(reportName)}  \n${body}`;
}
function createComment(context, lintResults) {
    let result = `# ${createTitle(lintResults)}\n`;
    result += `\n`;
    if (0 < countLevel(lintResults, "failure")) {
        result += `## Failure\n`;
        result += createLevelTable(context, lintResults, "failure");
    }
    if (0 < countLevel(lintResults, "warning")) {
        result += `## Warning\n`;
        result += createLevelTable(context, lintResults, "warning");
    }
    if (0 < countLevel(lintResults, "notice")) {
        result += `## Notice\n`;
        result += createLevelTable(context, lintResults, "notice");
    }
    return result;
}
function createTitle(lintResults) {
    const noticeCount = countLevel(lintResults, "notice");
    const warningCount = countLevel(lintResults, "warning");
    const failureCount = countLevel(lintResults, "failure");
    const messages = [];
    if (noticeCount == 1) {
        messages.push("1 notice");
    }
    if (2 <= noticeCount) {
        messages.push(`${noticeCount} notices`);
    }
    if (warningCount == 1) {
        messages.push("1 warning");
    }
    if (2 <= warningCount) {
        messages.push(`${warningCount} warnings`);
    }
    if (failureCount == 1) {
        messages.push("1 failure");
    }
    if (2 <= failureCount) {
        messages.push(`${failureCount} failures`);
    }
    if (messages.length == 0) {
        return "lint message is empty";
    }
    return `${messages.join(" and ")} found`;
}
function createLevelTable(context, lintResults, targetLevel) {
    let result = "|file|message|rule|\n";
    result += "|:--|:--|:--|\n";
    for (const lintResult of lintResults) {
        if (lintResult.level != targetLevel) {
            continue;
        }
        let line = "";
        if (lintResult.startLine != undefined) {
            line += `L${lintResult.startLine}`;
        }
        if (lintResult.startLine != undefined &&
            lintResult.endLine != undefined &&
            lintResult.startLine != lintResult.endLine) {
            line += `-L${lintResult.endLine}`;
        }
        const baseUrl = `${context.serverUrl()}/${context.owner()}/${context.repository()}`;
        const path = trimPath(context, lintResult.path);
        const message = lintResult.message.replace(/(\r\n)|\r|\n/g, "<br />");
        const link = `${baseUrl}/blob/${context.commitSha()}/${path}#${line}`;
        result += `|[${path} ${line}](${link})|${message}|${lintResult.rule}|\n`;
    }
    return result;
}

;// ./src/reporter/comment/comment-reporter.ts






class CommentReporter {
    async report(option, lintResults) {
        const client = githubClient(option);
        const context = githubContext(option);
        const repositoryId = (await client.getRepositoryId({ owner: context.owner(), name: context.repository() }))
            ?.repository?.id;
        if (repositoryId == undefined) {
            throw Error("not found repository");
        }
        const statusAndCheckRuns = await getCommitStatusAndCheckRunWithPaging(client, {
            owner: context.owner(),
            name: context.repository(),
            commitSha: context.commitSha(),
        });
        const foundSameCheckRun = statusAndCheckRuns.find((x) => x.__typename == "CheckRun" && x.name == option.reportName);
        if (foundSameCheckRun != undefined) {
            await client.updateCheckRun({
                repositoryId: repositoryId,
                checkRunId: foundSameCheckRun.id,
                status: graphql/* RequestableCheckStatusState */.pKD.InProgress,
            });
        }
        const checkRunId = foundSameCheckRun == undefined
            ? (await client.createCheckRun({
                repositoryId: repositoryId,
                headSha: context.commitSha(),
                name: option.reportName,
                startedAt: new Date().toISOString(),
                status: graphql/* RequestableCheckStatusState */.pKD.InProgress,
            }))?.createCheckRun?.checkRun?.id
            : foundSameCheckRun.id;
        if (checkRunId == undefined) {
            throw Error("cannot create check-run");
        }
        const pullRequest = await this.getPullRequest(client, context);
        const loginUser = await this.getLoginUser(client);
        if (loginUser == undefined) {
            throw Error("cannot found login user");
        }
        await this.reportComment(client, context, option, pullRequest, loginUser, lintResults);
        await client.updateCheckRun({
            repositoryId: repositoryId,
            checkRunId: checkRunId,
            status: graphql/* RequestableCheckStatusState */.pKD.Completed,
            conclusion: calculateConclusion(option, lintResults),
            completedAt: new Date().toISOString(),
        });
    }
    async getPullRequest(client, context) {
        const pullRequestNumber = context.pullRequest();
        if (pullRequestNumber == null) {
            throw Error("pull_request number is not provided");
        }
        const pullRequest = await client.getPullRequest({
            owner: context.owner(),
            name: context.repository(),
            number: pullRequestNumber,
        });
        const pullRequestId = pullRequest?.repository?.pullRequest?.id;
        if (pullRequestId == null || pullRequestId == undefined) {
            throw Error("not found pull request id");
        }
        return {
            number: pullRequestNumber,
            id: pullRequestId,
        };
    }
    async getLoginUser(client) {
        // if bot account, including '[bot]'. but author.login will not include it
        const response = await client.getLoginUser({});
        if (response == undefined) {
            return undefined;
        }
        const loginUser = response.viewer.login.split("[")[0];
        return {
            login: loginUser,
        };
    }
    async reportComment(client, context, option, pullRequest, loginUser, lintResults) {
        const comments = await getPullRequestCommentsWithPaging(client, {
            owner: context.owner(),
            name: context.repository(),
            pull_request: pullRequest.number,
        });
        for (const comment of comments) {
            if (comment.author?.login != loginUser.login) {
                continue;
            }
            if (isLintComment(comment.body, option.reportName)) {
                await client.deleteComment({ id: comment.id });
            }
        }
        if (lintResults.length == 0) {
            return;
        }
        await client.addComment({
            id: pullRequest.id,
            body: createLintComment(createComment(context, lintResults), option.reportName),
        });
    }
}

;// ./src/reporter/inline-comment/comment.ts

function lintInlineCommentIdentifier(reportName) {
    return `<!-- common-lint-reporter: ${reportName} -->`;
}
function isLintInlineComment(body, reportName) {
    return body.startsWith(lintInlineCommentIdentifier(reportName));
}
function createLintInlineComment(body, reportName) {
    return `${lintInlineCommentIdentifier(reportName)}  \n${body}`;
}
function createInlineComment(lintResult) {
    return `**Rule: ${lintResult.rule}**\n\n${lintResult.message}`;
}
function equalsInlineComment(left, right, context, reportName) {
    if (left.comments.nodes == null || left.comments.nodes == undefined) {
        return false;
    }
    if (left.comments.nodes.length < 1) {
        return false;
    }
    if (left.comments.nodes[0] == null || left.comments.nodes[0] == undefined) {
        return false;
    }
    if (left.path != trimPath(context, right.path)) {
        return false;
    }
    if (left.startLine) {
        if (left.line != right.endLine) {
            return false;
        }
        if (left.startLine != right.startLine) {
            return false;
        }
    }
    else {
        if (left.line != right.startLine) {
            return false;
        }
    }
    if (left.comments.nodes[0].body != createLintInlineComment(createInlineComment(right), reportName)) {
        return false;
    }
    return true;
}

;// ./src/reporter/inline-comment/inline-comment-reporter.ts





class InlineCommentReporter extends CommentReporter {
    async reportComment(client, context, option, pullRequest, loginUser, lintResults) {
        const inlineLintResults = lintResults.filter((x) => x.startLine != undefined);
        const notInlineLintResults = lintResults.filter((x) => x.startLine == undefined);
        const cannotReportedLintResults = await this.reportInlineComment(client, context, option, pullRequest, loginUser, inlineLintResults);
        notInlineLintResults.push(...cannotReportedLintResults);
        await super.reportComment(client, context, option, pullRequest, loginUser, notInlineLintResults);
    }
    // return cannot reported lint result
    async reportInlineComment(client, context, option, pullRequest, loginUser, lintResults) {
        const reviewThreads = await getPullRequestReviewThreadsWithPaging(client, {
            owner: context.owner(),
            name: context.repository(),
            number: pullRequest.number,
        });
        const pastReviewThreads = await this.resolveOutdatedThreadsAndFiltered(client, option, loginUser, reviewThreads);
        const newLintResults = lintResults.filter((x) => pastReviewThreads.filter((y) => equalsInlineComment(y, x, context, option.reportName)).length == 0);
        const pullRequestReview = await client.addPullRequestReviewDraft({
            pullRequestId: pullRequest.id,
            commitSha: context.commitSha(),
        });
        const pullRequestReviewId = pullRequestReview?.addPullRequestReview?.pullRequestReview?.id;
        if (pullRequestReviewId == null || pullRequestReviewId == undefined) {
            return [];
        }
        const reportedLintResults = [];
        const cannotReportedLintResults = [];
        for (const lintResult of newLintResults) {
            const line = lintResult.endLine != undefined ? lintResult.endLine : lintResult.startLine;
            const startLine = 
            // cannot create thread if same line
            lintResult.endLine != undefined && lintResult.endLine != lintResult.startLine
                ? lintResult.startLine
                : undefined;
            if (line == undefined) {
                continue;
            }
            try {
                const thread = await client.addPullRequestReviewThread({
                    pullRequestId: pullRequest.id,
                    pullRequestReviewId: pullRequestReviewId,
                    body: createLintInlineComment(createInlineComment(lintResult), option.reportName),
                    path: trimPath(context, lintResult.path),
                    line: line,
                    startLine: startLine,
                });
                if (thread?.addPullRequestReviewThread?.thread?.id != null &&
                    thread.addPullRequestReviewThread.thread.id != undefined) {
                    reportedLintResults.push(lintResult);
                }
                else {
                    cannotReportedLintResults.push(lintResult);
                }
            }
            catch {
                cannotReportedLintResults.push(lintResult);
            }
        }
        if (0 < reportedLintResults.length) {
            await client.submitPullRequestReview({
                pullRequestId: pullRequest.id,
                pullRequestReviewId: pullRequestReviewId,
            });
        }
        else {
            await client.deletePullRequestReview({ pullRequestReviewId: pullRequestReviewId });
        }
        return cannotReportedLintResults;
    }
    async resolveOutdatedThreadsAndFiltered(client, option, loginUser, reviewThreads) {
        const result = [];
        for (const reviewThread of reviewThreads) {
            if (reviewThread.comments.nodes == null || reviewThread.comments.nodes == undefined) {
                continue;
            }
            if (reviewThread.comments.nodes.length == 0) {
                continue;
            }
            if (reviewThread.comments.nodes[0] == null || reviewThread.comments.nodes[0] == undefined) {
                continue;
            }
            if (reviewThread.comments.nodes[0].author?.login != loginUser.login) {
                continue;
            }
            if (isLintInlineComment(reviewThread.comments.nodes[0].body, option.reportName) == false) {
                continue;
            }
            if (reviewThread.isOutdated) {
                switch (option.outdatedResolver) {
                    case OutdatedResolver.ResolveThread:
                        if (reviewThread.isResolved == false && reviewThread.comments.pageInfo.hasNextPage == false) {
                            await client.resolvePullRequestReviewThread({ pullRequestThreadId: reviewThread.id });
                        }
                        break;
                    case OutdatedResolver.ForceResolveThread:
                        if (reviewThread.isResolved == false) {
                            await client.resolvePullRequestReviewThread({ pullRequestThreadId: reviewThread.id });
                        }
                        break;
                    case OutdatedResolver.DeleteThread:
                        if (reviewThread.comments.pageInfo.hasNextPage == false) {
                            await client.deletePullRequestReviewComment({
                                pullRequestReviewCommentId: reviewThread.comments.nodes[0].id,
                            });
                        }
                        break;
                    case OutdatedResolver.DeleteOrForceResolveThread:
                        if (reviewThread.comments.pageInfo.hasNextPage == false) {
                            await client.deletePullRequestReviewComment({
                                pullRequestReviewCommentId: reviewThread.comments.nodes[0].id,
                            });
                        }
                        else {
                            await client.resolvePullRequestReviewThread({ pullRequestThreadId: reviewThread.id });
                        }
                        break;
                }
            }
            else {
                result.push(reviewThread);
            }
        }
        return result;
    }
}

;// ./src/main.ts






async function run() {
    try {
        const option = getOption();
        const lintResults = await readLintResults(option);
        let reporter;
        if (option.reportType == ReportType.Comment) {
            reporter = new CommentReporter();
        }
        else if (option.reportType == ReportType.InlineComment) {
            reporter = new InlineCommentReporter();
        }
        else {
            reporter = new CheckRunReporter();
        }
        await reporter.report(option, lintResults);
    }
    catch (error) {
        if (error instanceof Error) {
            core/* setFailed */.C1(error.message);
        }
    }
}
run();


/***/ },

/***/ 10788
(module, __unused_webpack_exports, __webpack_require__) {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = x({ ["default"]: () => (__WEBPACK_EXTERNAL_MODULE_assert__["default"]) });

/***/ },

/***/ 35814
(module, __unused_webpack_exports, __webpack_require__) {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = x({ ["spawn"]: () => (__WEBPACK_EXTERNAL_MODULE_child_process__.spawn) });

/***/ },

/***/ 77823
(module, __unused_webpack_exports, __webpack_require__) {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = x({  });

/***/ },

/***/ 68551
(module, __unused_webpack_exports, __webpack_require__) {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = x({ ["EventEmitter"]: () => (__WEBPACK_EXTERNAL_MODULE_events__.EventEmitter) });

/***/ },

/***/ 44421
(module, __unused_webpack_exports, __webpack_require__) {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = x({ ["constants"]: () => (__WEBPACK_EXTERNAL_MODULE_fs__.constants), ["existsSync"]: () => (__WEBPACK_EXTERNAL_MODULE_fs__.existsSync), ["promises"]: () => (__WEBPACK_EXTERNAL_MODULE_fs__.promises), ["readFileSync"]: () => (__WEBPACK_EXTERNAL_MODULE_fs__.readFileSync) });

/***/ },

/***/ 53782
(module, __unused_webpack_exports, __webpack_require__) {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = x({ ["default"]: () => (__WEBPACK_EXTERNAL_MODULE_http__["default"]) });

/***/ },

/***/ 33871
(module, __unused_webpack_exports, __webpack_require__) {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = x({ ["default"]: () => (__WEBPACK_EXTERNAL_MODULE_https__["default"]) });

/***/ },

/***/ 8116
(module, __unused_webpack_exports, __webpack_require__) {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = x({ ["EOL"]: () => (__WEBPACK_EXTERNAL_MODULE_os__.EOL), ["default"]: () => (__WEBPACK_EXTERNAL_MODULE_os__["default"]), ["homedir"]: () => (__WEBPACK_EXTERNAL_MODULE_os__.homedir) });

/***/ },

/***/ 12521
(module, __unused_webpack_exports, __webpack_require__) {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = x({ ["basename"]: () => (__WEBPACK_EXTERNAL_MODULE_path__.basename), ["delimiter"]: () => (__WEBPACK_EXTERNAL_MODULE_path__.delimiter), ["dirname"]: () => (__WEBPACK_EXTERNAL_MODULE_path__.dirname), ["extname"]: () => (__WEBPACK_EXTERNAL_MODULE_path__.extname), ["join"]: () => (__WEBPACK_EXTERNAL_MODULE_path__.join), ["resolve"]: () => (__WEBPACK_EXTERNAL_MODULE_path__.resolve), ["sep"]: () => (__WEBPACK_EXTERNAL_MODULE_path__.sep) });

/***/ },

/***/ 80702
(module, __unused_webpack_exports, __webpack_require__) {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = x({ ["default"]: () => (__WEBPACK_EXTERNAL_MODULE_stream__["default"]) });

/***/ },

/***/ 99868
(module, __unused_webpack_exports, __webpack_require__) {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = x({  });

/***/ },

/***/ 99744
(module, __unused_webpack_exports, __webpack_require__) {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = x({ ["setTimeout"]: () => (__WEBPACK_EXTERNAL_MODULE_timers__.setTimeout) });

/***/ },

/***/ 66887
(module, __unused_webpack_exports, __webpack_require__) {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = x({ ["default"]: () => (__WEBPACK_EXTERNAL_MODULE_url__["default"]) });

/***/ },

/***/ 45578
(module, __unused_webpack_exports, __webpack_require__) {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = x({  });

/***/ },

/***/ 76627
(module, __unused_webpack_exports, __webpack_require__) {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = x({ ["default"]: () => (__WEBPACK_EXTERNAL_MODULE_zlib__["default"]) });

/***/ },

/***/ 42613
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("assert");

/***/ },

/***/ 24434
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("events");

/***/ },

/***/ 58611
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("http");

/***/ },

/***/ 65692
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("https");

/***/ },

/***/ 69278
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("net");

/***/ },

/***/ 34589
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("node:assert");

/***/ },

/***/ 16698
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("node:async_hooks");

/***/ },

/***/ 4573
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("node:buffer");

/***/ },

/***/ 37540
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("node:console");

/***/ },

/***/ 77598
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("node:crypto");

/***/ },

/***/ 53053
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("node:diagnostics_channel");

/***/ },

/***/ 40610
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("node:dns");

/***/ },

/***/ 78474
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("node:events");

/***/ },

/***/ 37067
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("node:http");

/***/ },

/***/ 32467
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("node:http2");

/***/ },

/***/ 77030
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("node:net");

/***/ },

/***/ 643
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("node:perf_hooks");

/***/ },

/***/ 41792
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("node:querystring");

/***/ },

/***/ 57075
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("node:stream");

/***/ },

/***/ 41692
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("node:tls");

/***/ },

/***/ 73136
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("node:url");

/***/ },

/***/ 57975
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("node:util");

/***/ },

/***/ 73429
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("node:util/types");

/***/ },

/***/ 75919
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("node:worker_threads");

/***/ },

/***/ 38522
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("node:zlib");

/***/ },

/***/ 16928
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("path");

/***/ },

/***/ 24876
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("punycode");

/***/ },

/***/ 13193
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("string_decoder");

/***/ },

/***/ 64756
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("tls");

/***/ },

/***/ 39023
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("util");

/***/ }

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		id: moduleId,
/******/ 		loaded: false,
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Flag the module as loaded
/******/ 	module.loaded = true;
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/******/ // expose the modules object (__webpack_modules__)
/******/ __webpack_require__.m = __webpack_modules__;
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/chunk loaded */
/******/ (() => {
/******/ 	var deferred = [];
/******/ 	__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 		if(chunkIds) {
/******/ 			priority = priority || 0;
/******/ 			for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 			deferred[i] = [chunkIds, fn, priority];
/******/ 			return;
/******/ 		}
/******/ 		var notFulfilled = Infinity;
/******/ 		for (var i = 0; i < deferred.length; i++) {
/******/ 			var [chunkIds, fn, priority] = deferred[i];
/******/ 			var fulfilled = true;
/******/ 			for (var j = 0; j < chunkIds.length; j++) {
/******/ 				if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 					chunkIds.splice(j--, 1);
/******/ 				} else {
/******/ 					fulfilled = false;
/******/ 					if(priority < notFulfilled) notFulfilled = priority;
/******/ 				}
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferred.splice(i--, 1)
/******/ 				var r = fn();
/******/ 				if (r !== undefined) result = r;
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/node module decorator */
/******/ (() => {
/******/ 	__webpack_require__.nmd = (module) => {
/******/ 		module.paths = [];
/******/ 		if (!module.children) module.children = [];
/******/ 		return module;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/runtimeId */
/******/ (() => {
/******/ 	__webpack_require__.j = 792;
/******/ })();
/******/ 
/******/ /* webpack/runtime/export webpack runtime */
/******/ export { __webpack_require__ };
/******/ 
/******/ /* webpack/runtime/import chunk loading */
/******/ (() => {
/******/ 	// no baseURI
/******/ 	
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// [resolve, Promise] = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		792: 0
/******/ 	};
/******/ 	
/******/ 	var installChunk = (data) => {
/******/ 		var {__webpack_esm_ids__, __webpack_esm_modules__, __webpack_esm_runtime__} = data;
/******/ 		// add "modules" to the modules object,
/******/ 		// then flag all "ids" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0;
/******/ 		for(moduleId in __webpack_esm_modules__) {
/******/ 			if(__webpack_require__.o(__webpack_esm_modules__, moduleId)) {
/******/ 				__webpack_require__.m[moduleId] = __webpack_esm_modules__[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(__webpack_esm_runtime__) __webpack_esm_runtime__(__webpack_require__);
/******/ 		for(;i < __webpack_esm_ids__.length; i++) {
/******/ 			chunkId = __webpack_esm_ids__[i];
/******/ 			if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				installedChunks[chunkId][0]();
/******/ 			}
/******/ 			installedChunks[__webpack_esm_ids__[i]] = 0;
/******/ 		}
/******/ 		__webpack_require__.O();
/******/ 	}
/******/ 	
/******/ 	// no chunk on demand loading
/******/ 	
/******/ 	// no prefetching
/******/ 	
/******/ 	// no preloaded
/******/ 	
/******/ 	__webpack_require__.C = installChunk;
/******/ 	
/******/ 	__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 	// no HMR
/******/ 	
/******/ 	// no HMR manifest
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ import * as __webpack_chunk_1__ from "./vendor.js";
/******/ __webpack_require__.C(__webpack_chunk_1__);
/******/ import * as __webpack_chunk_2__ from "./graphql.js";
/******/ __webpack_require__.C(__webpack_chunk_2__);
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module depends on other loaded chunks and execution need to be delayed
/******/ var __webpack_exports__ = __webpack_require__.O(undefined, [121,630], () => (__webpack_require__(87570)))
/******/ __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 
