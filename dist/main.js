/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 3707:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GitHubClient = exports.githubClient = void 0;
const cross_fetch_1 = __importDefault(__webpack_require__(5221));
const client_1 = __webpack_require__(2091);
const graphql_1 = __webpack_require__(2634);
function githubClient(option) {
    return new GitHubClient(new client_1.ApolloClient({
        link: new client_1.HttpLink({
            uri: "https://api.github.com/graphql",
            headers: { authorization: `token ${option.githubToken}` },
            fetch: cross_fetch_1.default,
        }),
        cache: new client_1.InMemoryCache(),
    }));
}
exports.githubClient = githubClient;
class GitHubClient {
    constructor(client) {
        this.client = client;
    }
    async createCheckRun(variables) {
        const result = await this.client.mutate({
            mutation: graphql_1.CreateCheckRun,
            variables: variables,
        });
        return result.data;
    }
    async getPullRequestChangedFile(variables) {
        const result = await this.client.query({
            query: graphql_1.GetPullRequestChangedFile,
            variables: variables,
        });
        return result.data;
    }
    async getRepositoryId(variables) {
        const result = await this.client.query({
            query: graphql_1.GetRepositoryId,
            variables: variables,
        });
        return result.data;
    }
    async updateCheckRun(variables) {
        const result = await this.client.mutate({
            mutation: graphql_1.UpdateCheckRun,
            variables: variables,
        });
        return result.data;
    }
    async getCommitStatusAndCheckRun(variables) {
        const result = await this.client.query({
            query: graphql_1.GetCommitStatusAndCheckRun,
            variables: variables,
        });
        return result.data;
    }
    async getCheckRunAnnotations(variables) {
        const result = await this.client.query({
            query: graphql_1.GetCheckRunAnnotations,
            variables: variables,
        });
        return result.data;
    }
    async getPullRequest(variables) {
        const result = await this.client.query({
            query: graphql_1.GetPullRequest,
            variables: variables,
        });
        return result.data;
    }
    async getPullRequestComments(variables) {
        const result = await this.client.query({
            query: graphql_1.GetPullRequestComment,
            variables: variables,
        });
        return result.data;
    }
    async addComment(variables) {
        const result = await this.client.mutate({
            mutation: graphql_1.AddComment,
            variables: variables,
        });
        return result.data;
    }
    async deleteComment(variables) {
        const result = await this.client.mutate({
            mutation: graphql_1.DeleteComment,
            variables: variables,
        });
        return result.data;
    }
    async getLoginUser(variables) {
        const result = await this.client.query({
            query: graphql_1.GetLoginUser,
            variables: variables,
        });
        return result.data;
    }
    async addPullRequestReviewDraft(variables) {
        const result = await this.client.mutate({
            mutation: graphql_1.AddPullRequestReviewDraft,
            variables: variables,
        });
        return result.data;
    }
    async submitPullRequestReview(variables) {
        const result = await this.client.mutate({
            mutation: graphql_1.SubmitPullRequestReview,
            variables: variables,
        });
        return result.data;
    }
    async deletePullRequestReview(variables) {
        const result = await this.client.mutate({
            mutation: graphql_1.DeletePullRequestReview,
            variables: variables,
        });
        return result.data;
    }
    async addPullRequestReviewThread(variables) {
        const result = await this.client.mutate({
            mutation: graphql_1.AddPullRequestReviewThread,
            variables: variables,
        });
        return result.data;
    }
    async deletePullRequestReviewComment(variables) {
        const result = await this.client.mutate({
            mutation: graphql_1.DeletePullRequestReviewComment,
            variables: variables,
        });
        return result.data;
    }
    async resolvePullRequestReviewThread(variables) {
        const result = await this.client.mutate({
            mutation: graphql_1.ResolvePullRequestReviewThread,
            variables: variables,
        });
        return result.data;
    }
    async getPullRequestReviewThreads(variables) {
        const result = await this.client.query({
            query: graphql_1.GetPullRequestReviewThreads,
            variables: variables,
        });
        return result.data;
    }
}
exports.GitHubClient = GitHubClient;


/***/ }),

/***/ 6289:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GitHubContext = exports.githubContext = void 0;
const github = __importStar(__webpack_require__(4834));
function githubContext(option) {
    return new GitHubContext(option);
}
exports.githubContext = githubContext;
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
        return github.context.repo.owner;
    }
    repository() {
        if (this.option?.repository != null) {
            return this.option.repository.split("/")[1];
        }
        return github.context.repo.repo;
    }
    pullRequest() {
        if (this.option?.pullRequest != null) {
            return this.option.pullRequest;
        }
        if (github.context.payload.pull_request != undefined) {
            return github.context.payload.pull_request.number;
        }
        return null;
    }
    commitSha() {
        if (this.option?.commitSha != null) {
            return this.option.commitSha;
        }
        if (github.context.payload.pull_request != undefined) {
            return github.context.payload.pull_request.head.sha;
        }
        if (github.context.payload.workflow_run != undefined) {
            return github.context.payload.workflow_run.head_sha;
        }
        return github.context.sha;
    }
}
exports.GitHubContext = GitHubContext;


/***/ }),

/***/ 6964:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPullRequestReviewThreadsWithPaging = exports.getPullRequestCommentsWithPaging = exports.getCheckRunAnnotationsWithPaging = exports.getCommitStatusAndCheckRunWithPaging = exports.getPullRequestChangedFileWithPaging = void 0;
// gurad for infinity loop
const maxLoop = 100;
async function getResponseWithPaging(variables, getResponse, selectorPageInfo, selectorNodes) {
    const result = [];
    let response = await getResponse(variables);
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
exports.getPullRequestChangedFileWithPaging = getPullRequestChangedFileWithPaging;
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
exports.getCommitStatusAndCheckRunWithPaging = getCommitStatusAndCheckRunWithPaging;
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
exports.getCheckRunAnnotationsWithPaging = getCheckRunAnnotationsWithPaging;
async function getPullRequestCommentsWithPaging(client, variables) {
    return getResponseWithPaging(variables, (variables) => client.getPullRequestComments(variables), (response) => response.repository?.pullRequest?.comments.pageInfo, (response) => response.repository?.pullRequest?.comments.nodes);
}
exports.getPullRequestCommentsWithPaging = getPullRequestCommentsWithPaging;
async function getPullRequestReviewThreadsWithPaging(client, variables) {
    return getResponseWithPaging(variables, (variables) => client.getPullRequestReviewThreads(variables), (response) => response.repository?.pullRequest?.reviewThreads.pageInfo, (response) => response.repository?.pullRequest?.reviewThreads.nodes);
}
exports.getPullRequestReviewThreadsWithPaging = getPullRequestReviewThreadsWithPaging;


/***/ }),

/***/ 2757:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.writeLintResults = exports.readLintResults = void 0;
const glob = __importStar(__webpack_require__(631));
const fs = __importStar(__webpack_require__(9896));
async function readLintResults(option) {
    const globber = await glob.create(option.reportFiles, {
        followSymbolicLinks: option.reportFilesFollowSymbolicLinks,
    });
    const result = [];
    for await (const file of globber.globGenerator()) {
        const readContents = fs.readFileSync(file, "utf-8");
        const lintResults = JSON.parse(readContents);
        result.push(...lintResults);
    }
    return result;
}
exports.readLintResults = readLintResults;
function writeLintResults(path, lintResults) {
    const text = JSON.stringify(lintResults);
    fs.writeFileSync(path, text);
}
exports.writeLintResults = writeLintResults;


/***/ }),

/***/ 7927:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const core = __importStar(__webpack_require__(6977));
const option_1 = __webpack_require__(2243);
const lint_result_1 = __webpack_require__(2757);
const check_run_reporter_1 = __webpack_require__(7465);
const comment_reporter_1 = __webpack_require__(1309);
const inline_comment_reporter_1 = __webpack_require__(4713);
async function run() {
    try {
        const option = (0, option_1.getOption)();
        const lintResults = await (0, lint_result_1.readLintResults)(option);
        let reporter;
        if (option.reportType == option_1.ReportType.Comment) {
            reporter = new comment_reporter_1.CommentReporter();
        }
        else if (option.reportType == option_1.ReportType.InlineComment) {
            reporter = new inline_comment_reporter_1.InlineCommentReporter();
        }
        else {
            reporter = new check_run_reporter_1.CheckRunReporter();
        }
        await reporter.report(option, lintResults);
    }
    catch (error) {
        if (error instanceof Error) {
            core.setFailed(error.message);
        }
    }
}
run();


/***/ }),

/***/ 2243:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getOption = exports.OutdatedResolver = exports.ReportType = exports.getCommonOption = void 0;
const core = __importStar(__webpack_require__(6977));
function getCommonOption() {
    return {
        githubToken: getInput("github_token"),
        workspacePath: getInputOrNull("workspace_path"),
        repository: getInputOrNull("repository"),
        pullRequest: getInputNumberOrNull("pull_request"),
        commitSha: getInputOrNull("commit_sha"),
    };
}
exports.getCommonOption = getCommonOption;
var ReportType;
(function (ReportType) {
    ReportType[ReportType["CheckRun"] = 0] = "CheckRun";
    ReportType[ReportType["Comment"] = 1] = "Comment";
    ReportType[ReportType["InlineComment"] = 2] = "InlineComment";
})(ReportType || (exports.ReportType = ReportType = {}));
var OutdatedResolver;
(function (OutdatedResolver) {
    OutdatedResolver[OutdatedResolver["ResolveThread"] = 0] = "ResolveThread";
    OutdatedResolver[OutdatedResolver["ForceResolveThread"] = 1] = "ForceResolveThread";
    OutdatedResolver[OutdatedResolver["DeleteThread"] = 2] = "DeleteThread";
    OutdatedResolver[OutdatedResolver["DeleteOrForceResolveThread"] = 3] = "DeleteOrForceResolveThread";
})(OutdatedResolver || (exports.OutdatedResolver = OutdatedResolver = {}));
function getOption() {
    const reportTypeString = getInput("report_type");
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
        conclusionFailureThreshold: parseInt(getInput("conclusion_failure_threshold")),
        conclusionFailureWeight: parseInt(getInput("conclusion_failure_weight")),
        conclusionWarningWeight: parseInt(getInput("conclusion_warning_weight")),
        conclusionNoticeWeight: parseInt(getInput("conclusion_notice_weight")),
        outdatedResolver: outdatedResolver,
        ...getCommonOption(),
    };
}
exports.getOption = getOption;
function getInput(key) {
    return core.getInput(key, { required: true });
}
function getInputOrNull(key) {
    const result = core.getInput(key, { required: false });
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


/***/ }),

/***/ 4506:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.equalsAnnotation = exports.createAnnotation = void 0;
const graphql_1 = __webpack_require__(2634);
const path_1 = __webpack_require__(969);
function createAnnotation(context, lintResult) {
    if (lintResult.startLine == undefined) {
        // report only at summary
        return null;
    }
    let level;
    if (lintResult.level == "notice") {
        level = graphql_1.CheckAnnotationLevel.Notice;
    }
    else if (lintResult.level == "warning") {
        level = graphql_1.CheckAnnotationLevel.Warning;
    }
    else {
        level = graphql_1.CheckAnnotationLevel.Failure;
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
        path: (0, path_1.trimPath)(context, lintResult.path),
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
exports.createAnnotation = createAnnotation;
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
exports.equalsAnnotation = equalsAnnotation;


/***/ }),

/***/ 7465:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CheckRunReporter = void 0;
const client_1 = __webpack_require__(3707);
const context_1 = __webpack_require__(6289);
const paging_1 = __webpack_require__(6964);
const graphql_1 = __webpack_require__(2634);
const conclusion_1 = __webpack_require__(9245);
const summary_1 = __webpack_require__(6735);
const message_1 = __webpack_require__(5736);
const annotation_1 = __webpack_require__(4506);
class CheckRunReporter {
    async report(option, lintResults) {
        const client = (0, client_1.githubClient)(option);
        const context = (0, context_1.githubContext)(option);
        const repositoryId = (await client.getRepositoryId({ owner: context.owner(), name: context.repository() }))
            .repository?.id;
        if (repositoryId == undefined) {
            throw Error("not found repository");
        }
        const statusAndCheckRuns = await (0, paging_1.getCommitStatusAndCheckRunWithPaging)(client, {
            owner: context.owner(),
            name: context.repository(),
            commitSha: context.commitSha(),
        });
        const foundSameCheckRun = statusAndCheckRuns.find((x) => x.__typename == "CheckRun" && x.name == option.reportName);
        if (foundSameCheckRun != undefined) {
            await client.updateCheckRun({
                repositoryId: repositoryId,
                checkRunId: foundSameCheckRun.id,
                status: graphql_1.RequestableCheckStatusState.InProgress,
            });
        }
        const checkRunId = foundSameCheckRun == undefined
            ? (await client.createCheckRun({
                repositoryId: repositoryId,
                headSha: context.commitSha(),
                name: option.reportName,
                startedAt: new Date().toISOString(),
                status: graphql_1.RequestableCheckStatusState.InProgress,
            }))?.createCheckRun?.checkRun?.id
            : foundSameCheckRun.id;
        if (checkRunId == undefined) {
            throw Error("cannot create check-run");
        }
        const pastAnnotations = foundSameCheckRun == undefined
            ? []
            : await (0, paging_1.getCheckRunAnnotationsWithPaging)(client, { checkRunId: foundSameCheckRun.id });
        await this.uploadResult(client, context, option, repositoryId, checkRunId, lintResults, pastAnnotations);
    }
    async uploadResult(client, context, option, repositoryId, checkRunId, lintResults, pastAnnotations) {
        const batchSize = 50;
        let currentIndex = 0;
        const rawAnnotations = this.convertToCheckAnnotationData(context, lintResults);
        const newAnnotations = rawAnnotations.filter((x) => pastAnnotations.filter((y) => (0, annotation_1.equalsAnnotation)(y, x)).length == 0);
        while (currentIndex + batchSize < newAnnotations.length) {
            const batchNumber = `${currentIndex / batchSize + 1}/${Math.ceil(newAnnotations.length / batchSize)}`;
            const surmmary = `${(0, summary_1.createSummary)(lintResults)}, while batch ${batchNumber}`;
            const batchedAnnotations = newAnnotations.slice(currentIndex, currentIndex + batchSize);
            await client.updateCheckRun({
                repositoryId: repositoryId,
                checkRunId: checkRunId,
                status: graphql_1.RequestableCheckStatusState.InProgress,
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
            status: graphql_1.RequestableCheckStatusState.Completed,
            conclusion: (0, conclusion_1.calculateConclusion)(option, lintResults),
            completedAt: new Date().toISOString(),
            output: {
                title: option.reportName,
                summary: (0, summary_1.createSummary)(lintResults),
                text: (0, message_1.createMessage)(context, lintResults),
                annotations: annotations,
            },
        });
    }
    convertToCheckAnnotationData(context, lintResults) {
        const result = [];
        for (const lintResult of lintResults) {
            const annotation = (0, annotation_1.createAnnotation)(context, lintResult);
            if (annotation != null) {
                result.push(annotation);
            }
        }
        return result;
    }
}
exports.CheckRunReporter = CheckRunReporter;


/***/ }),

/***/ 5736:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createMessage = void 0;
const path_1 = __webpack_require__(969);
const level_1 = __webpack_require__(3590);
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
        const baseUrl = `https://github.com/${context.owner()}/${context.repository()}`;
        const link = `${baseUrl}/blob/${context.commitSha()}/${(0, path_1.trimPath)(context, lintResult.path)}#${line}`;
        result += `### [${(0, path_1.trimPath)(context, lintResult.path)} ${line}](${link})\n`;
        result += `Rule: ${lintResult.rule}\n`;
        result += lintResult.message;
        result += "\n";
    }
    return result;
}
function createMessage(context, lintResults) {
    const noticeCount = (0, level_1.countLevel)(lintResults, "notice");
    const warningCount = (0, level_1.countLevel)(lintResults, "warning");
    const failureCount = (0, level_1.countLevel)(lintResults, "failure");
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
exports.createMessage = createMessage;


/***/ }),

/***/ 6735:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createSummary = void 0;
const level_1 = __webpack_require__(3590);
function createSummary(lintResults) {
    const noticeCount = (0, level_1.countLevel)(lintResults, "notice");
    const warningCount = (0, level_1.countLevel)(lintResults, "warning");
    const failureCount = (0, level_1.countLevel)(lintResults, "failure");
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
exports.createSummary = createSummary;


/***/ }),

/***/ 1309:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentReporter = void 0;
const client_1 = __webpack_require__(3707);
const context_1 = __webpack_require__(6289);
const paging_1 = __webpack_require__(6964);
const graphql_1 = __webpack_require__(2634);
const conclusion_1 = __webpack_require__(9245);
const comment_1 = __webpack_require__(4775);
class CommentReporter {
    async report(option, lintResults) {
        const client = (0, client_1.githubClient)(option);
        const context = (0, context_1.githubContext)(option);
        const repositoryId = (await client.getRepositoryId({ owner: context.owner(), name: context.repository() }))
            .repository?.id;
        if (repositoryId == undefined) {
            throw Error("not found repository");
        }
        const statusAndCheckRuns = await (0, paging_1.getCommitStatusAndCheckRunWithPaging)(client, {
            owner: context.owner(),
            name: context.repository(),
            commitSha: context.commitSha(),
        });
        const foundSameCheckRun = statusAndCheckRuns.find((x) => x.__typename == "CheckRun" && x.name == option.reportName);
        if (foundSameCheckRun != undefined) {
            await client.updateCheckRun({
                repositoryId: repositoryId,
                checkRunId: foundSameCheckRun.id,
                status: graphql_1.RequestableCheckStatusState.InProgress,
            });
        }
        const checkRunId = foundSameCheckRun == undefined
            ? (await client.createCheckRun({
                repositoryId: repositoryId,
                headSha: context.commitSha(),
                name: option.reportName,
                startedAt: new Date().toISOString(),
                status: graphql_1.RequestableCheckStatusState.InProgress,
            }))?.createCheckRun?.checkRun?.id
            : foundSameCheckRun.id;
        if (checkRunId == undefined) {
            throw Error("cannot create check-run");
        }
        const pullRequest = await this.getPullRequest(client, context);
        const loginUser = await this.getLoginUser(client);
        await this.reportComment(client, context, option, pullRequest, loginUser, lintResults);
        await client.updateCheckRun({
            repositoryId: repositoryId,
            checkRunId: checkRunId,
            status: graphql_1.RequestableCheckStatusState.Completed,
            conclusion: (0, conclusion_1.calculateConclusion)(option, lintResults),
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
        const pullRequestId = pullRequest.repository?.pullRequest?.id;
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
        const loginUser = (await client.getLoginUser({})).viewer.login.split("[")[0];
        return {
            login: loginUser,
        };
    }
    async reportComment(client, context, option, pullRequest, loginUser, lintResults) {
        const comments = await (0, paging_1.getPullRequestCommentsWithPaging)(client, {
            owner: context.owner(),
            name: context.repository(),
            pull_request: pullRequest.number,
        });
        for (const comment of comments) {
            if (comment.author?.login != loginUser.login) {
                continue;
            }
            if ((0, comment_1.isLintComment)(comment.body, option.reportName)) {
                await client.deleteComment({ id: comment.id });
            }
        }
        if (lintResults.length == 0) {
            return;
        }
        await client.addComment({
            id: pullRequest.id,
            body: (0, comment_1.createLintComment)((0, comment_1.createComment)(context, lintResults), option.reportName),
        });
    }
}
exports.CommentReporter = CommentReporter;


/***/ }),

/***/ 4775:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createComment = exports.createLintComment = exports.isLintComment = void 0;
const level_1 = __webpack_require__(3590);
const path_1 = __webpack_require__(969);
function lintCommentIdentifier(reportName) {
    return `<!-- common-lint-reporter: ${reportName} -->`;
}
function isLintComment(body, reportName) {
    return body.startsWith(lintCommentIdentifier(reportName));
}
exports.isLintComment = isLintComment;
function createLintComment(body, reportName) {
    return `${lintCommentIdentifier(reportName)}  \n${body}`;
}
exports.createLintComment = createLintComment;
function createComment(context, lintResults) {
    let result = `# ${createTitle(lintResults)}\n`;
    result += `\n`;
    if (0 < (0, level_1.countLevel)(lintResults, "failure")) {
        result += `## Failure\n`;
        result += createLevelTable(context, lintResults, "failure");
    }
    if (0 < (0, level_1.countLevel)(lintResults, "warning")) {
        result += `## Warning\n`;
        result += createLevelTable(context, lintResults, "warning");
    }
    if (0 < (0, level_1.countLevel)(lintResults, "notice")) {
        result += `## Notice\n`;
        result += createLevelTable(context, lintResults, "notice");
    }
    return result;
}
exports.createComment = createComment;
function createTitle(lintResults) {
    const noticeCount = (0, level_1.countLevel)(lintResults, "notice");
    const warningCount = (0, level_1.countLevel)(lintResults, "warning");
    const failureCount = (0, level_1.countLevel)(lintResults, "failure");
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
        const baseUrl = `https://github.com/${context.owner()}/${context.repository()}`;
        const path = (0, path_1.trimPath)(context, lintResult.path);
        const message = lintResult.message.replace(/(\r\n)|\r|\n/g, "<br />");
        const link = `${baseUrl}/blob/${context.commitSha()}/${path}#${line}`;
        result += `|[${path} ${line}](${link})|${message}|${lintResult.rule}|\n`;
    }
    return result;
}


/***/ }),

/***/ 9245:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.calculateConclusion = void 0;
const graphql_1 = __webpack_require__(2634);
const level_1 = __webpack_require__(3590);
function calculateConclusion(option, lintResults) {
    const noticeCount = (0, level_1.countLevel)(lintResults, "notice");
    const warningCount = (0, level_1.countLevel)(lintResults, "warning");
    const failureCount = (0, level_1.countLevel)(lintResults, "failure");
    const score = noticeCount * option.conclusionNoticeWeight +
        warningCount * option.conclusionWarningWeight +
        failureCount * option.conclusionFailureWeight;
    return score < option.conclusionFailureThreshold ? graphql_1.CheckConclusionState.Success : graphql_1.CheckConclusionState.Failure;
}
exports.calculateConclusion = calculateConclusion;


/***/ }),

/***/ 9393:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.equalsInlineComment = exports.createInlineComment = exports.createLintInlineComment = exports.isLintInlineComment = void 0;
const path_1 = __webpack_require__(969);
function lintInlineCommentIdentifier(reportName) {
    return `<!-- common-lint-reporter: ${reportName} -->`;
}
function isLintInlineComment(body, reportName) {
    return body.startsWith(lintInlineCommentIdentifier(reportName));
}
exports.isLintInlineComment = isLintInlineComment;
function createLintInlineComment(body, reportName) {
    return `${lintInlineCommentIdentifier(reportName)}  \n${body}`;
}
exports.createLintInlineComment = createLintInlineComment;
function createInlineComment(lintResult) {
    return `**Rule: ${lintResult.rule}**\n\n${lintResult.message}`;
}
exports.createInlineComment = createInlineComment;
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
    if (left.path != (0, path_1.trimPath)(context, right.path)) {
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
exports.equalsInlineComment = equalsInlineComment;


/***/ }),

/***/ 4713:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InlineCommentReporter = void 0;
const option_1 = __webpack_require__(2243);
const paging_1 = __webpack_require__(6964);
const comment_reporter_1 = __webpack_require__(1309);
const comment_1 = __webpack_require__(9393);
const path_1 = __webpack_require__(969);
class InlineCommentReporter extends comment_reporter_1.CommentReporter {
    async reportComment(client, context, option, pullRequest, loginUser, lintResults) {
        const inlineLintResults = lintResults.filter((x) => x.startLine != undefined);
        const notInlineLintResults = lintResults.filter((x) => x.startLine == undefined);
        const cannotReportedLintResults = await this.reportInlineComment(client, context, option, pullRequest, loginUser, inlineLintResults);
        notInlineLintResults.push(...cannotReportedLintResults);
        await super.reportComment(client, context, option, pullRequest, loginUser, notInlineLintResults);
    }
    // return cannot reported lint result
    async reportInlineComment(client, context, option, pullRequest, loginUser, lintResults) {
        const reviewThreads = await (0, paging_1.getPullRequestReviewThreadsWithPaging)(client, {
            owner: context.owner(),
            name: context.repository(),
            number: pullRequest.number,
        });
        const pastReviewThreads = await this.resolveOutdatedThreadsAndFiltered(client, option, loginUser, reviewThreads);
        const newLintResults = lintResults.filter((x) => pastReviewThreads.filter((y) => (0, comment_1.equalsInlineComment)(y, x, context, option.reportName)).length == 0);
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
                    body: (0, comment_1.createLintInlineComment)((0, comment_1.createInlineComment)(lintResult), option.reportName),
                    path: (0, path_1.trimPath)(context, lintResult.path),
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
            catch (error) {
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
            if ((0, comment_1.isLintInlineComment)(reviewThread.comments.nodes[0].body, option.reportName) == false) {
                continue;
            }
            if (reviewThread.isOutdated) {
                switch (option.outdatedResolver) {
                    case option_1.OutdatedResolver.ResolveThread:
                        if (reviewThread.isResolved == false && reviewThread.comments.pageInfo.hasNextPage == false) {
                            await client.resolvePullRequestReviewThread({ pullRequestThreadId: reviewThread.id });
                        }
                        break;
                    case option_1.OutdatedResolver.ForceResolveThread:
                        if (reviewThread.isResolved == false) {
                            await client.resolvePullRequestReviewThread({ pullRequestThreadId: reviewThread.id });
                        }
                        break;
                    case option_1.OutdatedResolver.DeleteThread:
                        if (reviewThread.comments.pageInfo.hasNextPage == false) {
                            await client.deletePullRequestReviewComment({
                                pullRequestReviewCommentId: reviewThread.comments.nodes[0].id,
                            });
                        }
                        break;
                    case option_1.OutdatedResolver.DeleteOrForceResolveThread:
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
exports.InlineCommentReporter = InlineCommentReporter;


/***/ }),

/***/ 3590:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.countLevel = void 0;
function countLevel(lintResults, targetLevel) {
    let count = 0;
    for (const lintResult of lintResults) {
        if (lintResult.level == targetLevel) {
            count += 1;
        }
    }
    return count;
}
exports.countLevel = countLevel;


/***/ }),

/***/ 969:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.trimPath = void 0;
const path = __importStar(__webpack_require__(6928));
function trimPath(context, filePath) {
    return filePath.replace(`${context.workspacePath()}${path.sep}`, "");
}
exports.trimPath = trimPath;


/***/ }),

/***/ 2613:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 6982:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 4434:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 9896:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 8611:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 9278:
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ 857:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 6928:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 4876:
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ 2203:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 4756:
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ 7016:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 9023:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 3106:
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [121,630], () => (__webpack_require__(7927)))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + {"121":"vendor","630":"graphql"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/runtimeId */
/******/ 	(() => {
/******/ 		__webpack_require__.j = 792;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			792: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = (chunkId) => (installedChunks[chunkId]);
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			__webpack_require__.e(121);
/******/ 			__webpack_require__.e(630);
/******/ 			return next();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;