/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
var inline_comment_reporter_1 = __webpack_require__(2144);
function run() {
    return __awaiter(this, void 0, void 0, function () {
        var option, lintResults, reporter, a, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    option = option_1.getOption();
                    return [4 /*yield*/, lint_result_1.readLintResults(option)];
                case 1:
                    lintResults = _a.sent();
                    reporter = void 0;
                    if (option.reportType == option_1.ReportType.Comment) {
                        reporter = new comment_reporter_1.CommentReporter();
                    }
                    else if (option.reportType == option_1.ReportType.InlineComment) {
                        reporter = new inline_comment_reporter_1.InlineCommentReporter();
                    }
                    else {
                        reporter = new check_run_reporter_1.CheckRunReporter();
                    }
                    return [4 /*yield*/, reporter.report(option, lintResults)];
                case 2:
                    _a.sent();
                    a = "a";
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    core.setFailed(error_1.message);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
run();


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
            var client, context, repositoryId, statusAndCheckRuns, foundSameCheckRun, checkRunId, _e, pullRequest, loginUser;
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
                        return [4 /*yield*/, this.getPullRequest(client, context)];
                    case 8:
                        pullRequest = _f.sent();
                        return [4 /*yield*/, this.getLoginUser(client)];
                    case 9:
                        loginUser = _f.sent();
                        return [4 /*yield*/, this.reportComment(client, context, option, pullRequest, loginUser, lintResults)];
                    case 10:
                        _f.sent();
                        return [4 /*yield*/, client.updateCheckRun({
                                repositoryId: repositoryId,
                                checkRunId: checkRunId,
                                status: graphql_1.RequestableCheckStatusState.Completed,
                                conclusion: conclusion_1.calculateConclusion(option, lintResults),
                                completedAt: new Date().toISOString(),
                            })];
                    case 11:
                        _f.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CommentReporter.prototype.getPullRequest = function (client, context) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var pullRequestNumber, pullRequest, pullRequestId;
            return __generator(this, function (_c) {
                switch (_c.label) {
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
                        pullRequest = _c.sent();
                        pullRequestId = (_b = (_a = pullRequest.repository) === null || _a === void 0 ? void 0 : _a.pullRequest) === null || _b === void 0 ? void 0 : _b.id;
                        if (pullRequestId == null || pullRequestId == undefined) {
                            throw Error("not found pull request id");
                        }
                        return [2 /*return*/, {
                                number: pullRequestNumber,
                                id: pullRequestId,
                            }];
                }
            });
        });
    };
    CommentReporter.prototype.getLoginUser = function (client) {
        return __awaiter(this, void 0, void 0, function () {
            var loginUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, client.getLoginUser({})];
                    case 1:
                        loginUser = (_a.sent()).viewer.login.split("[")[0];
                        return [2 /*return*/, {
                                login: loginUser,
                            }];
                }
            });
        });
    };
    CommentReporter.prototype.reportComment = function (client, context, option, pullRequest, loginUser, lintResults) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var comments, _i, comments_1, comment;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, paging_1.getPullRequestCommentsWithPaging(client, {
                            owner: context.owner(),
                            name: context.repository(),
                            pull_request: pullRequest.number,
                        })];
                    case 1:
                        comments = _b.sent();
                        _i = 0, comments_1 = comments;
                        _b.label = 2;
                    case 2:
                        if (!(_i < comments_1.length)) return [3 /*break*/, 5];
                        comment = comments_1[_i];
                        if (((_a = comment.author) === null || _a === void 0 ? void 0 : _a.login) != loginUser.login) {
                            return [3 /*break*/, 4];
                        }
                        if (!comment_1.isLintComment(comment.body, option.reportName)) return [3 /*break*/, 4];
                        return [4 /*yield*/, client.deleteComment({ id: comment.id })];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5:
                        if (lintResults.length == 0) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, client.addComment({
                                id: pullRequest.id,
                                body: comment_1.createLintComment(comment_1.createComment(context, lintResults), option.reportName),
                            })];
                    case 6:
                        _b.sent();
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

/***/ 2676:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.equalsInlineComment = exports.createInlineComment = exports.createLintInlineComment = exports.isLintInlineComment = void 0;
var path_1 = __webpack_require__(5565);
function lintInlineCommentIdentifier(reportName) {
    return "<!-- common-lint-reporter: " + reportName + " -->";
}
function isLintInlineComment(body, reportName) {
    return body.startsWith(lintInlineCommentIdentifier(reportName));
}
exports.isLintInlineComment = isLintInlineComment;
function createLintInlineComment(body, reportName) {
    return lintInlineCommentIdentifier(reportName) + "  \n" + body;
}
exports.createLintInlineComment = createLintInlineComment;
function createInlineComment(lintResult) {
    return "**Rule: " + lintResult.rule + "**\n\n" + lintResult.message;
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
    if (left.path != path_1.trimPath(context, right.path)) {
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

/***/ 2144:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.InlineCommentReporter = void 0;
var option_1 = __webpack_require__(8089);
var paging_1 = __webpack_require__(9639);
var comment_reporter_1 = __webpack_require__(7390);
var comment_1 = __webpack_require__(2676);
var path_1 = __webpack_require__(5565);
var InlineCommentReporter = /** @class */ (function (_super) {
    __extends(InlineCommentReporter, _super);
    function InlineCommentReporter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InlineCommentReporter.prototype.reportComment = function (client, context, option, pullRequest, loginUser, lintResults) {
        return __awaiter(this, void 0, void 0, function () {
            var inlineLintResults, notInlineLintResults, cannotReportedLintResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        inlineLintResults = lintResults.filter(function (x) { return x.startLine != undefined; });
                        notInlineLintResults = lintResults.filter(function (x) { return x.startLine == undefined; });
                        return [4 /*yield*/, this.reportInlineComment(client, context, option, pullRequest, loginUser, inlineLintResults)];
                    case 1:
                        cannotReportedLintResults = _a.sent();
                        notInlineLintResults.push.apply(notInlineLintResults, cannotReportedLintResults);
                        return [4 /*yield*/, _super.prototype.reportComment.call(this, client, context, option, pullRequest, loginUser, notInlineLintResults)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // return cannot reported lint result
    InlineCommentReporter.prototype.reportInlineComment = function (client, context, option, pullRequest, loginUser, lintResults) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var reviewThreads, pastReviewThreads, newLintResults, pullRequestReview, pullRequestReviewId, reportedLintResults, cannotReportedLintResults, _i, newLintResults_1, lintResult, line, startLine, thread, error_1;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0: return [4 /*yield*/, paging_1.getPullRequestReviewThreadsWithPaging(client, {
                            owner: context.owner(),
                            name: context.repository(),
                            number: pullRequest.number,
                        })];
                    case 1:
                        reviewThreads = _e.sent();
                        return [4 /*yield*/, this.resolveOutdatedThreadsAndFiltered(client, option, loginUser, reviewThreads)];
                    case 2:
                        pastReviewThreads = _e.sent();
                        newLintResults = lintResults.filter(function (x) { return pastReviewThreads.filter(function (y) { return comment_1.equalsInlineComment(y, x, context, option.reportName); }).length == 0; });
                        return [4 /*yield*/, client.addPullRequestReviewDraft({
                                pullRequestId: pullRequest.id,
                                commitSha: context.commitSha(),
                            })];
                    case 3:
                        pullRequestReview = _e.sent();
                        pullRequestReviewId = (_b = (_a = pullRequestReview === null || pullRequestReview === void 0 ? void 0 : pullRequestReview.addPullRequestReview) === null || _a === void 0 ? void 0 : _a.pullRequestReview) === null || _b === void 0 ? void 0 : _b.id;
                        if (pullRequestReviewId == null || pullRequestReviewId == undefined) {
                            return [2 /*return*/, []];
                        }
                        reportedLintResults = [];
                        cannotReportedLintResults = [];
                        _i = 0, newLintResults_1 = newLintResults;
                        _e.label = 4;
                    case 4:
                        if (!(_i < newLintResults_1.length)) return [3 /*break*/, 9];
                        lintResult = newLintResults_1[_i];
                        line = lintResult.endLine != undefined ? lintResult.endLine : lintResult.startLine;
                        startLine = 
                        // cannot create thread if same line
                        lintResult.endLine != undefined && lintResult.endLine != lintResult.startLine
                            ? lintResult.startLine
                            : undefined;
                        if (line == undefined) {
                            return [3 /*break*/, 8];
                        }
                        _e.label = 5;
                    case 5:
                        _e.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, client.addPullRequestReviewThread({
                                pullRequestId: pullRequest.id,
                                pullRequestReviewId: pullRequestReviewId,
                                body: comment_1.createLintInlineComment(comment_1.createInlineComment(lintResult), option.reportName),
                                path: path_1.trimPath(context, lintResult.path),
                                line: line,
                                startLine: startLine,
                            })];
                    case 6:
                        thread = _e.sent();
                        if (((_d = (_c = thread === null || thread === void 0 ? void 0 : thread.addPullRequestReviewThread) === null || _c === void 0 ? void 0 : _c.thread) === null || _d === void 0 ? void 0 : _d.id) != null &&
                            thread.addPullRequestReviewThread.thread.id != undefined) {
                            reportedLintResults.push(lintResult);
                        }
                        else {
                            cannotReportedLintResults.push(lintResult);
                        }
                        return [3 /*break*/, 8];
                    case 7:
                        error_1 = _e.sent();
                        cannotReportedLintResults.push(lintResult);
                        return [3 /*break*/, 8];
                    case 8:
                        _i++;
                        return [3 /*break*/, 4];
                    case 9:
                        if (!(0 < reportedLintResults.length)) return [3 /*break*/, 11];
                        return [4 /*yield*/, client.submitPullRequestReview({
                                pullRequestId: pullRequest.id,
                                pullRequestReviewId: pullRequestReviewId,
                            })];
                    case 10:
                        _e.sent();
                        return [3 /*break*/, 13];
                    case 11: return [4 /*yield*/, client.deletePullRequestReview({ pullRequestReviewId: pullRequestReviewId })];
                    case 12:
                        _e.sent();
                        _e.label = 13;
                    case 13: return [2 /*return*/, cannotReportedLintResults];
                }
            });
        });
    };
    InlineCommentReporter.prototype.resolveOutdatedThreadsAndFiltered = function (client, option, loginUser, reviewThreads) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var result, _i, reviewThreads_1, reviewThread, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        result = [];
                        _i = 0, reviewThreads_1 = reviewThreads;
                        _c.label = 1;
                    case 1:
                        if (!(_i < reviewThreads_1.length)) return [3 /*break*/, 19];
                        reviewThread = reviewThreads_1[_i];
                        if (reviewThread.comments.nodes == null || reviewThread.comments.nodes == undefined) {
                            return [3 /*break*/, 18];
                        }
                        if (reviewThread.comments.nodes.length == 0) {
                            return [3 /*break*/, 18];
                        }
                        if (reviewThread.comments.nodes[0] == null || reviewThread.comments.nodes[0] == undefined) {
                            return [3 /*break*/, 18];
                        }
                        if (((_a = reviewThread.comments.nodes[0].author) === null || _a === void 0 ? void 0 : _a.login) != loginUser.login) {
                            return [3 /*break*/, 18];
                        }
                        if (comment_1.isLintInlineComment(reviewThread.comments.nodes[0].body, option.reportName) == false) {
                            return [3 /*break*/, 18];
                        }
                        if (!reviewThread.isOutdated) return [3 /*break*/, 17];
                        _b = option.outdatedResolver;
                        switch (_b) {
                            case option_1.OutdatedResolver.ResolveThread: return [3 /*break*/, 2];
                            case option_1.OutdatedResolver.ForceResolveThread: return [3 /*break*/, 5];
                            case option_1.OutdatedResolver.DeleteThread: return [3 /*break*/, 8];
                            case option_1.OutdatedResolver.DeleteOrForceResolveThread: return [3 /*break*/, 11];
                        }
                        return [3 /*break*/, 16];
                    case 2:
                        if (!(reviewThread.isResolved == false && reviewThread.comments.pageInfo.hasNextPage == false)) return [3 /*break*/, 4];
                        return [4 /*yield*/, client.resolvePullRequestReviewThread({ pullRequestThreadId: reviewThread.id })];
                    case 3:
                        _c.sent();
                        _c.label = 4;
                    case 4: return [3 /*break*/, 16];
                    case 5:
                        if (!(reviewThread.isResolved == false)) return [3 /*break*/, 7];
                        return [4 /*yield*/, client.resolvePullRequestReviewThread({ pullRequestThreadId: reviewThread.id })];
                    case 6:
                        _c.sent();
                        _c.label = 7;
                    case 7: return [3 /*break*/, 16];
                    case 8:
                        if (!(reviewThread.comments.pageInfo.hasNextPage == false)) return [3 /*break*/, 10];
                        return [4 /*yield*/, client.deletePullRequestReviewComment({
                                pullRequestReviewCommentId: reviewThread.comments.nodes[0].id,
                            })];
                    case 9:
                        _c.sent();
                        _c.label = 10;
                    case 10: return [3 /*break*/, 16];
                    case 11:
                        if (!(reviewThread.comments.pageInfo.hasNextPage == false)) return [3 /*break*/, 13];
                        return [4 /*yield*/, client.deletePullRequestReviewComment({
                                pullRequestReviewCommentId: reviewThread.comments.nodes[0].id,
                            })];
                    case 12:
                        _c.sent();
                        return [3 /*break*/, 15];
                    case 13: return [4 /*yield*/, client.resolvePullRequestReviewThread({ pullRequestThreadId: reviewThread.id })];
                    case 14:
                        _c.sent();
                        _c.label = 15;
                    case 15: return [3 /*break*/, 16];
                    case 16: return [3 /*break*/, 18];
                    case 17:
                        result.push(reviewThread);
                        _c.label = 18;
                    case 18:
                        _i++;
                        return [3 /*break*/, 1];
                    case 19: return [2 /*return*/, result];
                }
            });
        });
    };
    return InlineCommentReporter;
}(comment_reporter_1.CommentReporter));
exports.InlineCommentReporter = InlineCommentReporter;


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
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [736,265,208], () => (__webpack_require__(8519)))
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
/******/ 			return "" + ({"265":"graphql","736":"vendor"}[chunkId] || chunkId) + ".js";
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
/******/ 			__webpack_require__.e(208);
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