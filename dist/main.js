/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
var client_1 = __webpack_require__(6829);
var graphql_1 = __webpack_require__(1973);
function githubClient(option) {
    return new GitHubClient(new client_1.ApolloClient({
        link: new client_1.HttpLink({
            uri: "https://api.github.com/graphql",
            headers: { authorization: "token " + option.githubToken },
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
    return GitHubClient;
}());
exports.GitHubClient = GitHubClient;


/***/ }),

/***/ 2754:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
exports.getPullRequestCommentsWithPaging = exports.getCheckRunAnnotationsWithPaging = exports.getCommitStatusAndCheckRunWithPaging = exports.getPullRequestChangedFileWithPaging = void 0;
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


/***/ }),

/***/ 1744:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.writeLintResults = exports.readLintResults = void 0;
var glob = __importStar(__webpack_require__(5826));
var fs = __importStar(__webpack_require__(5747));
function readLintResults(option) {
    var e_1, _a;
    return __awaiter(this, void 0, void 0, function () {
        var globber, result, _b, _c, file, readContents, lintResults, e_1_1;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, glob.create(option.reportFiles, {
                        followSymbolicLinks: option.reportFilesFollowSymbolicLinks,
                    })];
                case 1:
                    globber = _d.sent();
                    result = [];
                    _d.label = 2;
                case 2:
                    _d.trys.push([2, 7, 8, 13]);
                    _b = __asyncValues(globber.globGenerator());
                    _d.label = 3;
                case 3: return [4 /*yield*/, _b.next()];
                case 4:
                    if (!(_c = _d.sent(), !_c.done)) return [3 /*break*/, 6];
                    file = _c.value;
                    readContents = fs.readFileSync(file, "utf-8");
                    lintResults = JSON.parse(readContents);
                    result.push.apply(result, lintResults);
                    _d.label = 5;
                case 5: return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 13];
                case 7:
                    e_1_1 = _d.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 13];
                case 8:
                    _d.trys.push([8, , 11, 12]);
                    if (!(_c && !_c.done && (_a = _b.return))) return [3 /*break*/, 10];
                    return [4 /*yield*/, _a.call(_b)];
                case 9:
                    _d.sent();
                    _d.label = 10;
                case 10: return [3 /*break*/, 12];
                case 11:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 12: return [7 /*endfinally*/];
                case 13: return [2 /*return*/, result];
            }
        });
    });
}
exports.readLintResults = readLintResults;
function writeLintResults(path, lintResults) {
    var text = JSON.stringify(lintResults);
    fs.writeFileSync(path, text);
}
exports.writeLintResults = writeLintResults;


/***/ }),

/***/ 8519:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var core = __importStar(__webpack_require__(2225));
var option_1 = __webpack_require__(8089);
var lint_result_1 = __webpack_require__(1744);
var check_run_reporter_1 = __webpack_require__(7334);
var comment_reporter_1 = __webpack_require__(7390);
function run() {
    return __awaiter(this, void 0, void 0, function () {
        var option, lintResults, reporter, a, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    option = option_1.getOption();
                    return [4 /*yield*/, lint_result_1.readLintResults(option)];
                case 1:
                    lintResults = _a.sent();
                    reporter = void 0;
                    if (option.reportType == option_1.ReportType.Comment) {
                        reporter = new comment_reporter_1.CommentReporter();
                    }
                    else {
                        reporter = new check_run_reporter_1.CheckRunReporter();
                    }
                    reporter.report(option, lintResults);
                    a = "a";
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    core.setFailed(error_1.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
run();


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
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
exports.getOption = exports.ReportType = exports.getCommonOption = void 0;
var core = __importStar(__webpack_require__(2225));
function getCommonOption() {
    return {
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
})(ReportType = exports.ReportType || (exports.ReportType = {}));
function getOption() {
    var reportTypeString = getInput("report_type");
    var reportType = ReportType.CheckRun;
    if (reportTypeString == "comment") {
        reportType = ReportType.Comment;
    }
    return __assign({ githubToken: getInput("github_token"), reportFiles: getInput("report_files"), reportFilesFollowSymbolicLinks: getInputOrNull("report_files_follow_symbolic_links") == "true", reportName: getInput("report_name"), reportType: reportType, conclusionFailureThreshold: parseInt(getInput("conclusion_failure_threshold")), conclusionFailureWeight: parseInt(getInput("conclusion_failure_weight")), conclusionWarningWeight: parseInt(getInput("conclusion_warning_weight")), conclusionNoticeWeight: parseInt(getInput("conclusion_notice_weight")) }, getCommonOption());
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


/***/ }),

/***/ 4523:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.equalsAnnotation = exports.createAnnotation = void 0;
var graphql_1 = __webpack_require__(1973);
var path_1 = __webpack_require__(5565);
function createAnnotation(context, lintResult) {
    var _a;
    if (lintResult.startLine == undefined) {
        // report only at summary
        return null;
    }
    var level;
    if (lintResult.level == "notice") {
        level = graphql_1.CheckAnnotationLevel.Notice;
    }
    else if (lintResult.level == "warning") {
        level = graphql_1.CheckAnnotationLevel.Warning;
    }
    else {
        level = graphql_1.CheckAnnotationLevel.Failure;
    }
    var startColumn;
    var endColumn;
    if (lintResult.startLine == lintResult.endLine) {
        startColumn = lintResult.startColumn;
        endColumn = lintResult.endColumn;
    }
    else {
        startColumn = undefined;
        endColumn = undefined;
    }
    return {
        path: path_1.trimPath(context, lintResult.path),
        location: {
            startLine: lintResult.startLine,
            endLine: (_a = lintResult.endLine) !== null && _a !== void 0 ? _a : lintResult.startLine,
            startColumn: startColumn,
            endColumn: endColumn,
        },
        annotationLevel: level,
        title: "Rule: " + lintResult.rule,
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

/***/ 7334:
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CheckRunReporter = void 0;
var client_1 = __webpack_require__(9330);
var context_1 = __webpack_require__(2754);
var paging_1 = __webpack_require__(9639);
var graphql_1 = __webpack_require__(1973);
var conclusion_1 = __webpack_require__(2135);
var summary_1 = __webpack_require__(8863);
var message_1 = __webpack_require__(2507);
var annotation_1 = __webpack_require__(4523);
var CheckRunReporter = /** @class */ (function () {
    function CheckRunReporter() {
    }
    CheckRunReporter.prototype.report = function (option, lintResults) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var client, context, repositoryId, statusAndCheckRuns, foundSameCheckRun, checkRunId, _e, pastAnnotations, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        client = client_1.githubClient(option);
                        context = context_1.githubContext(option);
                        return [4 /*yield*/, client.getRepositoryId({ owner: context.owner(), name: context.repository() })];
                    case 1:
                        repositoryId = (_a = (_g.sent())
                            .repository) === null || _a === void 0 ? void 0 : _a.id;
                        if (repositoryId == undefined) {
                            throw Error("not found repository");
                        }
                        return [4 /*yield*/, paging_1.getCommitStatusAndCheckRunWithPaging(client, {
                                owner: context.owner(),
                                name: context.repository(),
                                commitSha: context.commitSha(),
                            })];
                    case 2:
                        statusAndCheckRuns = _g.sent();
                        foundSameCheckRun = statusAndCheckRuns.find(function (x) { return x.__typename == "CheckRun" && x.name == option.reportName; });
                        if (!(foundSameCheckRun != undefined)) return [3 /*break*/, 4];
                        return [4 /*yield*/, client.updateCheckRun({
                                repositoryId: repositoryId,
                                checkRunId: foundSameCheckRun.id,
                                status: graphql_1.RequestableCheckStatusState.InProgress,
                            })];
                    case 3:
                        _g.sent();
                        _g.label = 4;
                    case 4:
                        if (!(foundSameCheckRun == undefined)) return [3 /*break*/, 6];
                        return [4 /*yield*/, client.createCheckRun({
                                repositoryId: repositoryId,
                                headSha: context.commitSha(),
                                name: option.reportName,
                                startedAt: new Date().toISOString(),
                                status: graphql_1.RequestableCheckStatusState.InProgress,
                            })];
                    case 5:
                        _e = (_d = (_c = (_b = (_g.sent())) === null || _b === void 0 ? void 0 : _b.createCheckRun) === null || _c === void 0 ? void 0 : _c.checkRun) === null || _d === void 0 ? void 0 : _d.id;
                        return [3 /*break*/, 7];
                    case 6:
                        _e = foundSameCheckRun.id;
                        _g.label = 7;
                    case 7:
                        checkRunId = _e;
                        if (checkRunId == undefined) {
                            throw Error("cannot create check-run");
                        }
                        if (!(foundSameCheckRun == undefined)) return [3 /*break*/, 8];
                        _f = [];
                        return [3 /*break*/, 10];
                    case 8: return [4 /*yield*/, paging_1.getCheckRunAnnotationsWithPaging(client, { checkRunId: foundSameCheckRun.id })];
                    case 9:
                        _f = _g.sent();
                        _g.label = 10;
                    case 10:
                        pastAnnotations = _f;
                        return [4 /*yield*/, this.uploadResult(client, context, option, repositoryId, checkRunId, lintResults, pastAnnotations)];
                    case 11:
                        _g.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CheckRunReporter.prototype.uploadResult = function (client, context, option, repositoryId, checkRunId, lintResults, pastAnnotations) {
        return __awaiter(this, void 0, void 0, function () {
            var batchSize, currentIndex, rawAnnotations, newAnnotations, batchNumber, surmmary, batchedAnnotations, annotations;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        batchSize = 50;
                        currentIndex = 0;
                        rawAnnotations = this.convertToCheckAnnotationData(context, lintResults);
                        newAnnotations = rawAnnotations.filter(function (x) { return pastAnnotations.filter(function (y) { return annotation_1.equalsAnnotation(y, x); }).length == 0; });
                        _a.label = 1;
                    case 1:
                        if (!(currentIndex + batchSize < newAnnotations.length)) return [3 /*break*/, 3];
                        batchNumber = currentIndex / batchSize + 1 + "/" + Math.ceil(newAnnotations.length / batchSize);
                        surmmary = summary_1.createSummary(lintResults) + ", while batch " + batchNumber;
                        batchedAnnotations = newAnnotations.slice(currentIndex, currentIndex + batchSize);
                        return [4 /*yield*/, client.updateCheckRun({
                                repositoryId: repositoryId,
                                checkRunId: checkRunId,
                                status: graphql_1.RequestableCheckStatusState.InProgress,
                                output: {
                                    title: option.reportName,
                                    summary: surmmary,
                                    annotations: batchedAnnotations,
                                },
                            })];
                    case 2:
                        _a.sent();
                        currentIndex += batchSize;
                        return [3 /*break*/, 1];
                    case 3:
                        annotations = newAnnotations.slice(currentIndex);
                        return [4 /*yield*/, client.updateCheckRun({
                                repositoryId: repositoryId,
                                checkRunId: checkRunId,
                                status: graphql_1.RequestableCheckStatusState.Completed,
                                conclusion: conclusion_1.calculateConclusion(option, lintResults),
                                completedAt: new Date().toISOString(),
                                output: {
                                    title: option.reportName,
                                    summary: summary_1.createSummary(lintResults),
                                    text: message_1.createMessage(context, lintResults),
                                    annotations: annotations,
                                },
                            })];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CheckRunReporter.prototype.convertToCheckAnnotationData = function (context, lintResults) {
        var result = [];
        for (var _i = 0, lintResults_1 = lintResults; _i < lintResults_1.length; _i++) {
            var lintResult = lintResults_1[_i];
            var annotation = annotation_1.createAnnotation(context, lintResult);
            if (annotation != null) {
                result.push(annotation);
            }
        }
        return result;
    };
    return CheckRunReporter;
}());
exports.CheckRunReporter = CheckRunReporter;


/***/ }),

/***/ 2507:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createMessage = void 0;
var path_1 = __webpack_require__(5565);
var level_1 = __webpack_require__(4507);
function markdownLevelMessage(context, lintResults, targetLevel) {
    var result = "";
    for (var _i = 0, lintResults_1 = lintResults; _i < lintResults_1.length; _i++) {
        var lintResult = lintResults_1[_i];
        if (lintResult.level != targetLevel) {
            continue;
        }
        var line = "";
        if (lintResult.startLine != undefined) {
            line += "L" + lintResult.startLine;
        }
        if (lintResult.startLine != undefined &&
            lintResult.endLine != undefined &&
            lintResult.startLine != lintResult.endLine) {
            line += "-L" + lintResult.endLine;
        }
        var baseUrl = "https://github.com/" + context.owner() + "/" + context.repository();
        var link = baseUrl + "/blob/" + context.commitSha() + "/" + path_1.trimPath(context, lintResult.path) + "#" + line;
        result += "### [" + path_1.trimPath(context, lintResult.path) + " " + line + "](" + link + ")\n";
        result += "Rule: " + lintResult.rule + "\n";
        result += lintResult.message;
        result += "\n";
    }
    return result;
}
function createMessage(context, lintResults) {
    var noticeCount = level_1.countLevel(lintResults, "notice");
    var warningCount = level_1.countLevel(lintResults, "warning");
    var failureCount = level_1.countLevel(lintResults, "failure");
    var result = "";
    if (0 < failureCount) {
        if (failureCount == 1) {
            result += "## 1 Failure\n";
        }
        else {
            result += "## " + failureCount + " Failures\n";
        }
        result += markdownLevelMessage(context, lintResults, "failure");
    }
    if (0 < warningCount) {
        if (warningCount == 1) {
            result += "## 1 Warning\n";
        }
        else {
            result += "## " + warningCount + " Warnings\n";
        }
        result += markdownLevelMessage(context, lintResults, "warning");
    }
    if (0 < noticeCount) {
        if (noticeCount == 1) {
            result += "## 1 Notice\n";
        }
        else {
            result += "## " + noticeCount + " Notices\n";
        }
        result += markdownLevelMessage(context, lintResults, "notice");
    }
    return result;
}
exports.createMessage = createMessage;


/***/ }),

/***/ 8863:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createSummary = void 0;
var level_1 = __webpack_require__(4507);
function createSummary(lintResults) {
    var noticeCount = level_1.countLevel(lintResults, "notice");
    var warningCount = level_1.countLevel(lintResults, "warning");
    var failureCount = level_1.countLevel(lintResults, "failure");
    var messages = [];
    if (noticeCount == 1) {
        messages.push("1 notice");
    }
    if (2 <= noticeCount) {
        messages.push(noticeCount + " notices");
    }
    if (warningCount == 1) {
        messages.push("1 warning");
    }
    if (2 <= warningCount) {
        messages.push(warningCount + " warnings");
    }
    if (failureCount == 1) {
        messages.push("1 failure");
    }
    if (2 <= failureCount) {
        messages.push(failureCount + " failures");
    }
    if (messages.length == 0) {
        return "lint message is empty";
    }
    return messages.join(" and ") + " found";
}
exports.createSummary = createSummary;


/***/ }),

/***/ 7390:
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CommentReporter = void 0;
var client_1 = __webpack_require__(9330);
var context_1 = __webpack_require__(2754);
var paging_1 = __webpack_require__(9639);
var graphql_1 = __webpack_require__(1973);
var conclusion_1 = __webpack_require__(2135);
var comment_1 = __webpack_require__(3973);
var CommentReporter = /** @class */ (function () {
    function CommentReporter() {
    }
    CommentReporter.prototype.report = function (option, lintResults) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var client, context, repositoryId, statusAndCheckRuns, foundSameCheckRun, checkRunId, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        client = client_1.githubClient(option);
                        context = context_1.githubContext(option);
                        return [4 /*yield*/, client.getRepositoryId({ owner: context.owner(), name: context.repository() })];
                    case 1:
                        repositoryId = (_a = (_f.sent())
                            .repository) === null || _a === void 0 ? void 0 : _a.id;
                        if (repositoryId == undefined) {
                            throw Error("not found repository");
                        }
                        return [4 /*yield*/, paging_1.getCommitStatusAndCheckRunWithPaging(client, {
                                owner: context.owner(),
                                name: context.repository(),
                                commitSha: context.commitSha(),
                            })];
                    case 2:
                        statusAndCheckRuns = _f.sent();
                        foundSameCheckRun = statusAndCheckRuns.find(function (x) { return x.__typename == "CheckRun" && x.name == option.reportName; });
                        if (!(foundSameCheckRun != undefined)) return [3 /*break*/, 4];
                        return [4 /*yield*/, client.updateCheckRun({
                                repositoryId: repositoryId,
                                checkRunId: foundSameCheckRun.id,
                                status: graphql_1.RequestableCheckStatusState.InProgress,
                            })];
                    case 3:
                        _f.sent();
                        _f.label = 4;
                    case 4:
                        if (!(foundSameCheckRun == undefined)) return [3 /*break*/, 6];
                        return [4 /*yield*/, client.createCheckRun({
                                repositoryId: repositoryId,
                                headSha: context.commitSha(),
                                name: option.reportName,
                                startedAt: new Date().toISOString(),
                                status: graphql_1.RequestableCheckStatusState.InProgress,
                            })];
                    case 5:
                        _e = (_d = (_c = (_b = (_f.sent())) === null || _b === void 0 ? void 0 : _b.createCheckRun) === null || _c === void 0 ? void 0 : _c.checkRun) === null || _d === void 0 ? void 0 : _d.id;
                        return [3 /*break*/, 7];
                    case 6:
                        _e = foundSameCheckRun.id;
                        _f.label = 7;
                    case 7:
                        checkRunId = _e;
                        if (checkRunId == undefined) {
                            throw Error("cannot create check-run");
                        }
                        return [4 /*yield*/, this.reportComment(client, context, option, lintResults)];
                    case 8:
                        _f.sent();
                        return [4 /*yield*/, client.updateCheckRun({
                                repositoryId: repositoryId,
                                checkRunId: checkRunId,
                                status: graphql_1.RequestableCheckStatusState.Completed,
                                conclusion: conclusion_1.calculateConclusion(option, lintResults),
                                completedAt: new Date().toISOString(),
                            })];
                    case 9:
                        _f.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CommentReporter.prototype.reportComment = function (client, context, option, lintResults) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var pullRequestNumber, pullRequest, pullRequestId, loginUser, comments, _i, comments_1, comment;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        pullRequestNumber = context.pullRequest();
                        if (pullRequestNumber == null) {
                            throw Error("pull_request number is not provided");
                        }
                        return [4 /*yield*/, client.getPullRequest({
                                owner: context.owner(),
                                name: context.repository(),
                                number: pullRequestNumber,
                            })];
                    case 1:
                        pullRequest = _d.sent();
                        pullRequestId = (_b = (_a = pullRequest.repository) === null || _a === void 0 ? void 0 : _a.pullRequest) === null || _b === void 0 ? void 0 : _b.id;
                        if (pullRequestId == null || pullRequestId == undefined) {
                            throw Error("not found pull request id");
                        }
                        return [4 /*yield*/, client.getLoginUser({})];
                    case 2:
                        loginUser = (_d.sent()).viewer.login.split("[")[0];
                        return [4 /*yield*/, paging_1.getPullRequestCommentsWithPaging(client, {
                                owner: context.owner(),
                                name: context.repository(),
                                pull_request: pullRequestNumber,
                            })];
                    case 3:
                        comments = _d.sent();
                        _i = 0, comments_1 = comments;
                        _d.label = 4;
                    case 4:
                        if (!(_i < comments_1.length)) return [3 /*break*/, 7];
                        comment = comments_1[_i];
                        if (((_c = comment.author) === null || _c === void 0 ? void 0 : _c.login) != loginUser) {
                            return [3 /*break*/, 6];
                        }
                        if (!comment_1.isLintComment(comment.body, option.reportName)) return [3 /*break*/, 6];
                        return [4 /*yield*/, client.deleteComment({ id: comment.id })];
                    case 5:
                        _d.sent();
                        _d.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 4];
                    case 7:
                        if (lintResults.length == 0) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, client.addComment({
                                id: pullRequestId,
                                body: comment_1.createLintComment(comment_1.createComment(context, lintResults), option.reportName),
                            })];
                    case 8:
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return CommentReporter;
}());
exports.CommentReporter = CommentReporter;


/***/ }),

/***/ 3973:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createComment = exports.createLintComment = exports.isLintComment = void 0;
var level_1 = __webpack_require__(4507);
var path_1 = __webpack_require__(5565);
function lintCommentIdentifier(reportName) {
    return "<!-- common-lint-reporter: " + reportName + " -->";
}
function isLintComment(body, reportName) {
    return body.startsWith(lintCommentIdentifier(reportName));
}
exports.isLintComment = isLintComment;
function createLintComment(body, reportName) {
    return lintCommentIdentifier(reportName) + "  \n" + body;
}
exports.createLintComment = createLintComment;
function createComment(context, lintResults) {
    var result = "# " + createTitle(lintResults) + "\n";
    result += "\n";
    if (0 < level_1.countLevel(lintResults, "failure")) {
        result += "## Failure\n";
        result += createLevelTable(context, lintResults, "failure");
    }
    if (0 < level_1.countLevel(lintResults, "warning")) {
        result += "## Warning\n";
        result += createLevelTable(context, lintResults, "warning");
    }
    if (0 < level_1.countLevel(lintResults, "notice")) {
        result += "## Notice\n";
        result += createLevelTable(context, lintResults, "notice");
    }
    return result;
}
exports.createComment = createComment;
function createTitle(lintResults) {
    var noticeCount = level_1.countLevel(lintResults, "notice");
    var warningCount = level_1.countLevel(lintResults, "warning");
    var failureCount = level_1.countLevel(lintResults, "failure");
    var messages = [];
    if (noticeCount == 1) {
        messages.push("1 notice");
    }
    if (2 <= noticeCount) {
        messages.push(noticeCount + " notices");
    }
    if (warningCount == 1) {
        messages.push("1 warning");
    }
    if (2 <= warningCount) {
        messages.push(warningCount + " warnings");
    }
    if (failureCount == 1) {
        messages.push("1 failure");
    }
    if (2 <= failureCount) {
        messages.push(failureCount + " failures");
    }
    if (messages.length == 0) {
        return "lint message is empty";
    }
    return messages.join(" and ") + " found";
}
function createLevelTable(context, lintResults, targetLevel) {
    var result = "|file|message|rule|\n";
    result += "|:--|:--|:--|\n";
    for (var _i = 0, lintResults_1 = lintResults; _i < lintResults_1.length; _i++) {
        var lintResult = lintResults_1[_i];
        if (lintResult.level != targetLevel) {
            continue;
        }
        var line = "";
        if (lintResult.startLine != undefined) {
            line += "L" + lintResult.startLine;
        }
        if (lintResult.startLine != undefined &&
            lintResult.endLine != undefined &&
            lintResult.startLine != lintResult.endLine) {
            line += "-L" + lintResult.endLine;
        }
        var baseUrl = "https://github.com/" + context.owner() + "/" + context.repository();
        var path = path_1.trimPath(context, lintResult.path);
        var message = lintResult.message.replace(/(\r\n)|\r|\n/g, "<br />");
        var link = baseUrl + "/blob/" + context.commitSha() + "/" + path + "#" + line;
        result += "|[" + path + " " + line + "](" + link + ")|" + message + "|" + lintResult.rule + "|\n";
    }
    return result;
}


/***/ }),

/***/ 2135:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.calculateConclusion = void 0;
var graphql_1 = __webpack_require__(1973);
var level_1 = __webpack_require__(4507);
function calculateConclusion(option, lintResults) {
    var noticeCount = level_1.countLevel(lintResults, "notice");
    var warningCount = level_1.countLevel(lintResults, "warning");
    var failureCount = level_1.countLevel(lintResults, "failure");
    var score = noticeCount * option.conclusionNoticeWeight +
        warningCount * option.conclusionWarningWeight +
        failureCount * option.conclusionFailureWeight;
    return score < option.conclusionFailureThreshold ? graphql_1.CheckConclusionState.Success : graphql_1.CheckConclusionState.Failure;
}
exports.calculateConclusion = calculateConclusion;


/***/ }),

/***/ 4507:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.countLevel = void 0;
function countLevel(lintResults, targetLevel) {
    var count = 0;
    for (var _i = 0, lintResults_1 = lintResults; _i < lintResults_1.length; _i++) {
        var lintResult = lintResults_1[_i];
        if (lintResult.level == targetLevel) {
            count += 1;
        }
    }
    return count;
}
exports.countLevel = countLevel;


/***/ }),

/***/ 5565:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var path = __importStar(__webpack_require__(5622));
function trimPath(context, filePath) {
    return filePath.replace("" + context.workspacePath() + path.sep, "");
}
exports.trimPath = trimPath;


/***/ }),

/***/ 2357:
/***/ ((module) => {

module.exports = require("assert");;

/***/ }),

/***/ 8614:
/***/ ((module) => {

module.exports = require("events");;

/***/ }),

/***/ 5747:
/***/ ((module) => {

module.exports = require("fs");;

/***/ }),

/***/ 8605:
/***/ ((module) => {

module.exports = require("http");;

/***/ }),

/***/ 7211:
/***/ ((module) => {

module.exports = require("https");;

/***/ }),

/***/ 1631:
/***/ ((module) => {

module.exports = require("net");;

/***/ }),

/***/ 2087:
/***/ ((module) => {

module.exports = require("os");;

/***/ }),

/***/ 5622:
/***/ ((module) => {

module.exports = require("path");;

/***/ }),

/***/ 2413:
/***/ ((module) => {

module.exports = require("stream");;

/***/ }),

/***/ 4016:
/***/ ((module) => {

module.exports = require("tls");;

/***/ }),

/***/ 8835:
/***/ ((module) => {

module.exports = require("url");;

/***/ }),

/***/ 1669:
/***/ ((module) => {

module.exports = require("util");;

/***/ }),

/***/ 8761:
/***/ ((module) => {

module.exports = require("zlib");;

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
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [736,265], () => (__webpack_require__(8519)))
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
/******/ 					result = fn();
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
/******/ 			return "" + {"265":"graphql","736":"vendor"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
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
/******/ 		__webpack_require__.j = 179;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			179: 1
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
/******/ 			__webpack_require__.e(736);
/******/ 			__webpack_require__.e(265);
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