"use strict";
exports.id = 208;
exports.ids = [208];
exports.modules = {

/***/ 9330:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GitHubClient = exports.githubClient = void 0;
var cross_fetch_1 = __importDefault(__webpack_require__(4165));
var client_1 = __webpack_require__(5864);
var graphql_1 = __webpack_require__(1973);
function githubClient(option) {
    return new GitHubClient(new client_1.ApolloClient({
        link: new client_1.HttpLink({
            uri: "https://api.github.com/graphql",
            headers: { authorization: "token ".concat(option.githubToken) },
            fetch: cross_fetch_1.default,
        }),
        cache: new client_1.InMemoryCache(),
    }));
}
exports.githubClient = githubClient;
var GitHubClient = /** @class */ (function () {
    function GitHubClient(client) {
        this.client = client;
    }
    GitHubClient.prototype.createCheckRun = function (variables) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.mutate({
                            mutation: graphql_1.CreateCheckRun,
                            variables: variables,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data];
                }
            });
        });
    };
    GitHubClient.prototype.getPullRequestChangedFile = function (variables) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.query({
                            query: graphql_1.GetPullRequestChangedFile,
                            variables: variables,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data];
                }
            });
        });
    };
    GitHubClient.prototype.getRepositoryId = function (variables) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.query({
                            query: graphql_1.GetRepositoryId,
                            variables: variables,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data];
                }
            });
        });
    };
    GitHubClient.prototype.updateCheckRun = function (variables) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.mutate({
                            mutation: graphql_1.UpdateCheckRun,
                            variables: variables,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data];
                }
            });
        });
    };
    GitHubClient.prototype.getCommitStatusAndCheckRun = function (variables) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.query({
                            query: graphql_1.GetCommitStatusAndCheckRun,
                            variables: variables,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data];
                }
            });
        });
    };
    GitHubClient.prototype.getCheckRunAnnotations = function (variables) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.query({
                            query: graphql_1.GetCheckRunAnnotations,
                            variables: variables,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data];
                }
            });
        });
    };
    GitHubClient.prototype.getPullRequest = function (variables) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.query({
                            query: graphql_1.GetPullRequest,
                            variables: variables,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data];
                }
            });
        });
    };
    GitHubClient.prototype.getPullRequestComments = function (variables) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.query({
                            query: graphql_1.GetPullRequestComment,
                            variables: variables,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data];
                }
            });
        });
    };
    GitHubClient.prototype.addComment = function (variables) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.mutate({
                            mutation: graphql_1.AddComment,
                            variables: variables,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data];
                }
            });
        });
    };
    GitHubClient.prototype.deleteComment = function (variables) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.mutate({
                            mutation: graphql_1.DeleteComment,
                            variables: variables,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data];
                }
            });
        });
    };
    GitHubClient.prototype.getLoginUser = function (variables) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.query({
                            query: graphql_1.GetLoginUser,
                            variables: variables,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data];
                }
            });
        });
    };
    GitHubClient.prototype.addPullRequestReviewDraft = function (variables) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.mutate({
                            mutation: graphql_1.AddPullRequestReviewDraft,
                            variables: variables,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data];
                }
            });
        });
    };
    GitHubClient.prototype.submitPullRequestReview = function (variables) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.mutate({
                            mutation: graphql_1.SubmitPullRequestReview,
                            variables: variables,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data];
                }
            });
        });
    };
    GitHubClient.prototype.deletePullRequestReview = function (variables) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.mutate({
                            mutation: graphql_1.DeletePullRequestReview,
                            variables: variables,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data];
                }
            });
        });
    };
    GitHubClient.prototype.addPullRequestReviewThread = function (variables) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.mutate({
                            mutation: graphql_1.AddPullRequestReviewThread,
                            variables: variables,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data];
                }
            });
        });
    };
    GitHubClient.prototype.deletePullRequestReviewComment = function (variables) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.mutate({
                            mutation: graphql_1.DeletePullRequestReviewComment,
                            variables: variables,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data];
                }
            });
        });
    };
    GitHubClient.prototype.resolvePullRequestReviewThread = function (variables) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.mutate({
                            mutation: graphql_1.ResolvePullRequestReviewThread,
                            variables: variables,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data];
                }
            });
        });
    };
    GitHubClient.prototype.getPullRequestReviewThreads = function (variables) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.query({
                            query: graphql_1.GetPullRequestReviewThreads,
                            variables: variables,
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.data];
                }
            });
        });
    };
    return GitHubClient;
}());
exports.GitHubClient = GitHubClient;


/***/ }),

/***/ 2754:
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
var github = __importStar(__webpack_require__(8142));
function githubContext(option) {
    return new GitHubContext(option);
}
exports.githubContext = githubContext;
var GitHubContext = /** @class */ (function () {
    function GitHubContext(option) {
        this.option = option;
    }
    GitHubContext.prototype.workspacePath = function () {
        var _a, _b;
        if (((_a = this.option) === null || _a === void 0 ? void 0 : _a.workspacePath) != null) {
            return this.option.workspacePath;
        }
        return (_b = process.env.GITHUB_WORKSPACE) !== null && _b !== void 0 ? _b : "";
    };
    GitHubContext.prototype.owner = function () {
        var _a;
        if (((_a = this.option) === null || _a === void 0 ? void 0 : _a.repository) != null) {
            return this.option.repository.split("/")[0];
        }
        return github.context.repo.owner;
    };
    GitHubContext.prototype.repository = function () {
        var _a;
        if (((_a = this.option) === null || _a === void 0 ? void 0 : _a.repository) != null) {
            return this.option.repository.split("/")[1];
        }
        return github.context.repo.repo;
    };
    GitHubContext.prototype.pullRequest = function () {
        var _a;
        if (((_a = this.option) === null || _a === void 0 ? void 0 : _a.pullRequest) != null) {
            return this.option.pullRequest;
        }
        if (github.context.payload.pull_request != undefined) {
            return github.context.payload.pull_request.number;
        }
        return null;
    };
    GitHubContext.prototype.commitSha = function () {
        var _a;
        if (((_a = this.option) === null || _a === void 0 ? void 0 : _a.commitSha) != null) {
            return this.option.commitSha;
        }
        if (github.context.payload.pull_request != undefined) {
            return github.context.payload.pull_request.head.sha;
        }
        if (github.context.payload.workflow_run != undefined) {
            return github.context.payload.workflow_run.head_sha;
        }
        return github.context.sha;
    };
    return GitHubContext;
}());
exports.GitHubContext = GitHubContext;


/***/ }),

/***/ 9639:
/***/ (function(__unused_webpack_module, exports) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPullRequestReviewThreadsWithPaging = exports.getPullRequestCommentsWithPaging = exports.getCheckRunAnnotationsWithPaging = exports.getCommitStatusAndCheckRunWithPaging = exports.getPullRequestChangedFileWithPaging = void 0;
// gurad for infinity loop
var maxLoop = 100;
function getResponseWithPaging(variables, getResponse, selectorPageInfo, selectorNodes) {
    return __awaiter(this, void 0, void 0, function () {
        var result, response, pageInfo, nodes, _i, nodes_1, node, loopCount, _a, nodes_2, node;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    result = [];
                    return [4 /*yield*/, getResponse(variables)];
                case 1:
                    response = _b.sent();
                    pageInfo = selectorPageInfo(response);
                    nodes = selectorNodes(response);
                    if (nodes == null || nodes == undefined) {
                        return [2 /*return*/, result];
                    }
                    for (_i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
                        node = nodes_1[_i];
                        if (node == null || node == undefined) {
                            continue;
                        }
                        result.push(node);
                    }
                    loopCount = 0;
                    _b.label = 2;
                case 2:
                    if (!(pageInfo != null &&
                        pageInfo != undefined &&
                        pageInfo.hasNextPage &&
                        pageInfo.endCursor != null &&
                        pageInfo.endCursor != undefined)) return [3 /*break*/, 4];
                    loopCount += 1;
                    return [4 /*yield*/, getResponse(__assign(__assign({}, variables), { after: pageInfo.endCursor }))];
                case 3:
                    response = _b.sent();
                    pageInfo = selectorPageInfo(response);
                    nodes = selectorNodes(response);
                    if (nodes == null || nodes == undefined) {
                        return [2 /*return*/, result];
                    }
                    for (_a = 0, nodes_2 = nodes; _a < nodes_2.length; _a++) {
                        node = nodes_2[_a];
                        if (node == null || node == undefined) {
                            continue;
                        }
                        result.push(node);
                    }
                    if (maxLoop <= loopCount) {
                        throw Error("infinity loop detected");
                    }
                    return [3 /*break*/, 2];
                case 4: return [2 /*return*/, result];
            }
        });
    });
}
function getPullRequestChangedFileWithPaging(client, variables) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, getResponseWithPaging(variables, function (variables) { return client.getPullRequestChangedFile(variables); }, function (response) { var _a, _b, _c; return (_c = (_b = (_a = response.repository) === null || _a === void 0 ? void 0 : _a.pullRequest) === null || _b === void 0 ? void 0 : _b.files) === null || _c === void 0 ? void 0 : _c.pageInfo; }, function (response) { var _a, _b, _c; return (_c = (_b = (_a = response.repository) === null || _a === void 0 ? void 0 : _a.pullRequest) === null || _b === void 0 ? void 0 : _b.files) === null || _c === void 0 ? void 0 : _c.nodes; })];
        });
    });
}
exports.getPullRequestChangedFileWithPaging = getPullRequestChangedFileWithPaging;
function getCommitStatusAndCheckRunWithPaging(client, variables) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, getResponseWithPaging(variables, function (variables) { return client.getCommitStatusAndCheckRun(variables); }, function (response) {
                    var _a, _b, _c;
                    if (((_b = (_a = response.repository) === null || _a === void 0 ? void 0 : _a.object) === null || _b === void 0 ? void 0 : _b.__typename) != "Commit") {
                        return null;
                    }
                    return (_c = response.repository.object.statusCheckRollup) === null || _c === void 0 ? void 0 : _c.contexts.pageInfo;
                }, function (response) {
                    var _a, _b, _c;
                    if (((_b = (_a = response.repository) === null || _a === void 0 ? void 0 : _a.object) === null || _b === void 0 ? void 0 : _b.__typename) != "Commit") {
                        return null;
                    }
                    return (_c = response.repository.object.statusCheckRollup) === null || _c === void 0 ? void 0 : _c.contexts.nodes;
                })];
        });
    });
}
exports.getCommitStatusAndCheckRunWithPaging = getCommitStatusAndCheckRunWithPaging;
function getCheckRunAnnotationsWithPaging(client, variables) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, getResponseWithPaging(variables, function (variables) { return client.getCheckRunAnnotations(variables); }, function (response) {
                    var _a, _b;
                    if (((_a = response.node) === null || _a === void 0 ? void 0 : _a.__typename) != "CheckRun") {
                        return null;
                    }
                    return (_b = response.node.annotations) === null || _b === void 0 ? void 0 : _b.pageInfo;
                }, function (response) {
                    var _a, _b;
                    if (((_a = response.node) === null || _a === void 0 ? void 0 : _a.__typename) != "CheckRun") {
                        return null;
                    }
                    return (_b = response.node.annotations) === null || _b === void 0 ? void 0 : _b.nodes;
                })];
        });
    });
}
exports.getCheckRunAnnotationsWithPaging = getCheckRunAnnotationsWithPaging;
function getPullRequestCommentsWithPaging(client, variables) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, getResponseWithPaging(variables, function (variables) { return client.getPullRequestComments(variables); }, function (response) { var _a, _b; return (_b = (_a = response.repository) === null || _a === void 0 ? void 0 : _a.pullRequest) === null || _b === void 0 ? void 0 : _b.comments.pageInfo; }, function (response) { var _a, _b; return (_b = (_a = response.repository) === null || _a === void 0 ? void 0 : _a.pullRequest) === null || _b === void 0 ? void 0 : _b.comments.nodes; })];
        });
    });
}
exports.getPullRequestCommentsWithPaging = getPullRequestCommentsWithPaging;
function getPullRequestReviewThreadsWithPaging(client, variables) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, getResponseWithPaging(variables, function (variables) { return client.getPullRequestReviewThreads(variables); }, function (response) { var _a, _b; return (_b = (_a = response.repository) === null || _a === void 0 ? void 0 : _a.pullRequest) === null || _b === void 0 ? void 0 : _b.reviewThreads.pageInfo; }, function (response) { var _a, _b; return (_b = (_a = response.repository) === null || _a === void 0 ? void 0 : _a.pullRequest) === null || _b === void 0 ? void 0 : _b.reviewThreads.nodes; })];
        });
    });
}
exports.getPullRequestReviewThreadsWithPaging = getPullRequestReviewThreadsWithPaging;


/***/ }),

/***/ 8089:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var core = __importStar(__webpack_require__(2225));
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
})(ReportType = exports.ReportType || (exports.ReportType = {}));
var OutdatedResolver;
(function (OutdatedResolver) {
    OutdatedResolver[OutdatedResolver["ResolveThread"] = 0] = "ResolveThread";
    OutdatedResolver[OutdatedResolver["ForceResolveThread"] = 1] = "ForceResolveThread";
    OutdatedResolver[OutdatedResolver["DeleteThread"] = 2] = "DeleteThread";
    OutdatedResolver[OutdatedResolver["DeleteOrForceResolveThread"] = 3] = "DeleteOrForceResolveThread";
})(OutdatedResolver = exports.OutdatedResolver || (exports.OutdatedResolver = {}));
function getOption() {
    var reportTypeString = getInput("report_type");
    var reportType = ReportType.CheckRun;
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
    var outdatedResolverString = getInput("outdated_resolver");
    var outdatedResolver = OutdatedResolver.DeleteOrForceResolveThread;
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
    return __assign({ reportFiles: getInput("report_files"), reportFilesFollowSymbolicLinks: getInputOrNull("report_files_follow_symbolic_links") == "true", reportName: getInput("report_name"), reportType: reportType, conclusionFailureThreshold: parseInt(getInput("conclusion_failure_threshold")), conclusionFailureWeight: parseInt(getInput("conclusion_failure_weight")), conclusionWarningWeight: parseInt(getInput("conclusion_warning_weight")), conclusionNoticeWeight: parseInt(getInput("conclusion_notice_weight")), outdatedResolver: outdatedResolver }, getCommonOption());
}
exports.getOption = getOption;
function getInput(key) {
    return core.getInput(key, { required: true });
}
function getInputOrNull(key) {
    var result = core.getInput(key, { required: false });
    if (result.length == 0) {
        return null;
    }
    return result;
}
function getInputNumberOrNull(key) {
    var value = getInputOrNull(key);
    if (value == null) {
        return null;
    }
    return parseInt(value);
}


/***/ })

};
;