"use strict";
exports.id = 952;
exports.ids = [952];
exports.modules = {

/***/ 6088:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GitHubClient = exports.githubClient = void 0;
const cross_fetch_1 = __importDefault(__webpack_require__(5221));
const client_1 = __webpack_require__(2091);
const context_1 = __webpack_require__(6289);
const graphql_1 = __webpack_require__(2634);
function githubClient(option) {
    const context = (0, context_1.githubContext)(option);
    return new GitHubClient(new client_1.ApolloClient({
        link: new client_1.HttpLink({
            uri: context.graphqlApiUrl(),
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
    serverUrl() {
        if (this.option?.githubServerUrl != null) {
            return this.option.githubServerUrl;
        }
        return github.context.serverUrl;
    }
    graphqlApiUrl() {
        if (this.option?.githubGraphqlApiUrl != null) {
            return this.option.githubGraphqlApiUrl;
        }
        return github.context.graphqlUrl;
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

/***/ 9713:
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
exports.FunctionalOperator = exports.Operator = void 0;
const fs = __importStar(__webpack_require__(9896));
const glob = __importStar(__webpack_require__(631));
const vm = __importStar(__webpack_require__(9154));
const path = __importStar(__webpack_require__(6928));
const context_1 = __webpack_require__(6289);
const client_1 = __webpack_require__(6088);
const paging_1 = __webpack_require__(6964);
class Operator {
    async operate(option) {
        const globber = await glob.create(option.reportFiles, {
            followSymbolicLinks: option.reportFilesFollowSymbolicLinks,
        });
        const source = [];
        for await (const path of globber.globGenerator()) {
            const lintResults = JSON.parse(fs.readFileSync(path, "utf-8"));
            source.push(...lintResults);
        }
        const result = await this.execute(source, option);
        this.writeFile(option.outputPath, result);
    }
    async createContext(option, lintResults, forceAccessApi = false) {
        return {
            source: lintResults,
            result: [],
            github: await this.createGitHubContext(option, forceAccessApi),
        };
    }
    async createGitHubContext(option, forceAccessApi) {
        const github = (0, context_1.githubContext)(option);
        return {
            workspacePath: github.workspacePath(),
            trimPath: (filePath) => filePath.replace(`${github.workspacePath()}${path.sep}`, ""),
            owner: github.owner(),
            repository: github.repository(),
            pullRequest: github.pullRequest(),
            commitSha: github.commitSha(),
            api: option.useApiContext || forceAccessApi ? await this.createApiContext(option) : null,
        };
    }
    async createApiContext(option) {
        const github = (0, context_1.githubContext)(option);
        const client = (0, client_1.githubClient)(option);
        const pullRequestNumber = github.pullRequest();
        if (pullRequestNumber == null) {
            return {
                changedFiles: [],
            };
        }
        const changedFiles = await (0, paging_1.getPullRequestChangedFileWithPaging)(client, {
            owner: github.owner(),
            name: github.repository(),
            pull_request: pullRequestNumber,
        });
        const changedFilesResult = [];
        for (const changedFile of changedFiles) {
            changedFilesResult.push({
                path: changedFile.path,
                additions: changedFile.additions,
                deletions: changedFile.deletions,
            });
        }
        return {
            changedFiles: changedFilesResult,
        };
    }
    writeFile(path, lintResults) {
        fs.writeFileSync(path, JSON.stringify(lintResults));
    }
}
exports.Operator = Operator;
class FunctionalOperator extends Operator {
    async execute(lintResults, option) {
        const context = await this.createContext(option, lintResults);
        const script = new vm.Script(this.createScript(option.func));
        script.runInNewContext(context);
        return context.result;
    }
}
exports.FunctionalOperator = FunctionalOperator;


/***/ }),

/***/ 3968:
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
exports.getFunctionalOption = exports.getOperatorOption = void 0;
const core = __importStar(__webpack_require__(6977));
const option_1 = __webpack_require__(2243);
function getOperatorOption() {
    return {
        reportFiles: getInput("report_files"),
        reportFilesFollowSymbolicLinks: getInputOrNull("report_files_follow_symbolic_links") == "true",
        outputPath: getInput("output_path"),
        useApiContext: getInputOrNull("use_api_context") == "true",
        ...(0, option_1.getCommonOption)(),
    };
}
exports.getOperatorOption = getOperatorOption;
function getFunctionalOption() {
    return {
        func: getInput("function"),
        ...getOperatorOption(),
    };
}
exports.getFunctionalOption = getFunctionalOption;
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
        githubServerUrl: getInputOrNull("github_server_url"),
        githubGraphqlApiUrl: getInputOrNull("github_graphql_api_url"),
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


/***/ })

};
;