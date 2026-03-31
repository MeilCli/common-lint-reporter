/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 79403
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// UNUSED EXPORTS: JunitTransformer

// EXTERNAL MODULE: ./node_modules/.pnpm/@actions+core@3.0.0/node_modules/@actions/core/lib/core.js + 13 modules
var core = __webpack_require__(18370);
// EXTERNAL MODULE: ./node_modules/.pnpm/fast-xml-parser@5.5.9/node_modules/fast-xml-parser/src/xmlparser/XMLParser.js
var XMLParser = __webpack_require__(92679);
// EXTERNAL MODULE: ./node_modules/.pnpm/he@1.2.0/node_modules/he/he.js
var he = __webpack_require__(12953);
var he_default = /*#__PURE__*/__webpack_require__.n(he);
;// ./src/transformer/option.ts

function getOption() {
    return {
        reportFiles: getInput("report_files"),
        reportFilesFollowSymbolicLinks: getInputOrNull("report_files_follow_symbolic_links") == "true",
        outputPath: getInput("output_path"),
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

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(79896);
// EXTERNAL MODULE: ./node_modules/.pnpm/@actions+glob@0.6.1/node_modules/@actions/glob/lib/glob.js + 8 modules
var glob = __webpack_require__(31754);
;// ./src/transformer/transformer.ts


class Transformer {
    async transform(option) {
        const globber = await glob/* create */.v(option.reportFiles, {
            followSymbolicLinks: option.reportFilesFollowSymbolicLinks,
        });
        const result = [];
        for await (const path of globber.globGenerator()) {
            const lintResults = this.parse(external_fs_.readFileSync(path, "utf-8"));
            result.push(...lintResults);
        }
        this.writeFile(option.outputPath, result);
    }
    writeFile(path, lintResults) {
        external_fs_.writeFileSync(path, JSON.stringify(lintResults));
    }
}

;// ./src/transformer/junit/junit-handler-default.ts
class DefaultJunitHandler {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    match(testSuites) {
        return true;
    }
    handle(testSuites) {
        const result = [];
        this.handleTestSuites(result, testSuites);
        return result;
    }
    handleTestSuites(result, testSuites) {
        for (const testSuite of testSuites) {
            this.handleTestSuite(result, testSuite);
        }
    }
    handleTestSuite(result, testSuite) {
        this.handleTestCases(result, testSuite.testCases);
        this.handleTestSuites(result, testSuite.testSuites);
    }
    handleTestCases(result, testCases) {
        for (const testCase of testCases) {
            this.handleTestCase(result, testCase);
        }
    }
    handleTestCase(result, testCase) {
        for (const failure of testCase.failures) {
            result.push({
                path: testCase.className,
                message: failure.message,
                level: "failure",
                rule: testCase.name,
                startLine: undefined,
                startColumn: undefined,
                endLine: undefined,
                endColumn: undefined,
            });
        }
        for (const error of testCase.errors) {
            result.push({
                path: testCase.className,
                message: error.message,
                level: "warning",
                rule: testCase.name,
                startLine: undefined,
                startColumn: undefined,
                endLine: undefined,
                endColumn: undefined,
            });
        }
    }
}

;// ./src/transformer/junit/junit-handler-eslint.ts
class EslintJunitHandler {
    match(testSuites) {
        if (testSuites.length == 0) {
            return false;
        }
        return testSuites[0].package == "org.eslint";
    }
    handle(testSuites) {
        const result = [];
        this.handleTestSuites(result, testSuites);
        return result;
    }
    handleTestSuites(result, testSuites) {
        for (const testSuite of testSuites) {
            this.handleTestSuite(result, testSuite);
        }
    }
    handleTestSuite(result, testSuite) {
        this.handleTestCases(result, testSuite.testCases, testSuite);
        this.handleTestSuites(result, testSuite.testSuites);
    }
    handleTestCases(result, testCases, testSuite) {
        for (const testCase of testCases) {
            this.handleTestCase(result, testCase, testSuite);
        }
    }
    handleTestCase(result, testCase, testSuite) {
        // ref: https://github.com/eslint/eslint/blob/master/lib/cli-engine/formatters/junit.js
        for (const failure of testCase.failures) {
            result.push({
                path: testSuite.name,
                message: failure.message,
                level: "warning",
                rule: testCase.name.slice("org.eslint.".length),
                startLine: this.findLine(failure),
                startColumn: undefined,
                endLine: undefined,
                endColumn: undefined,
            });
        }
        for (const error of testCase.errors) {
            result.push({
                path: testSuite.name,
                message: error.message,
                level: "failure",
                rule: testCase.name.slice("org.eslint.".length),
                startLine: this.findLine(error),
                startColumn: undefined,
                endLine: undefined,
                endColumn: undefined,
            });
        }
    }
    findLine(message) {
        const targetLength = "line ".length;
        const index = message.body.indexOf("line ");
        if (index < 0) {
            return 0;
        }
        const lastIndex = message.body.indexOf(" ", index + targetLength);
        if (lastIndex < 0) {
            return 0;
        }
        const lineText = message.body.slice(index + targetLength, lastIndex);
        const line = parseInt(lineText);
        if (Number.isInteger(line)) {
            return line;
        }
        return 0;
    }
}

;// ./src/transformer/junit/junit-handler-cpplint.ts

class CpplintJunitHandler {
    match(testSuites) {
        if (testSuites.length == 0) {
            return false;
        }
        return testSuites[0].name == "cpplint";
    }
    handle(testSuites) {
        const result = [];
        this.handleTestSuites(result, testSuites);
        return result;
    }
    handleTestSuites(result, testSuites) {
        for (const testSuite of testSuites) {
            this.handleTestSuite(result, testSuite);
        }
    }
    handleTestSuite(result, testSuite) {
        this.handleTestCases(result, testSuite.testCases);
        this.handleTestSuites(result, testSuite.testSuites);
    }
    handleTestCases(result, testCases) {
        for (const testCase of testCases) {
            this.handleTestCase(result, testCase);
        }
    }
    handleTestCase(result, testCase) {
        for (const failure of testCase.failures) {
            for (const message of this.parseBody(failure.body)) {
                result.push({
                    path: testCase.name,
                    message: message[1],
                    level: message[3] == 5 ? "failure" : 3 <= message[3] ? "warning" : "notice",
                    rule: message[2],
                    startLine: message[0],
                    startColumn: undefined,
                    endLine: undefined,
                    endColumn: undefined,
                });
            }
        }
        for (const error of testCase.errors) {
            for (const message of this.parseBody(error.body)) {
                result.push({
                    path: testCase.name,
                    message: message[1],
                    level: message[3] == 5 ? "failure" : 3 <= message[3] ? "warning" : "notice",
                    rule: message[2],
                    startLine: message[0],
                    startColumn: undefined,
                    endLine: undefined,
                    endColumn: undefined,
                });
            }
        }
    }
    parseBody(body) {
        const result = [];
        for (const line of body.split(/(\r\n)|\n|\r/g)) {
            if (line == undefined || line.length == 0) {
                continue;
            }
            const rawStartLine = line.replace(/^(\d+):\s(.+)\s\[(.+?)\]\s\[(\d)\]$/, "$1");
            const rawMessage = line.replace(/^(\d+):\s(.+)\s\[(.+?)\]\s\[(\d)\]$/, "$2");
            const rawRule = line.replace(/^(\d+):\s(.+)\s\[(.+?)\]\s\[(\d)\]$/, "$3");
            const rawConfidence = line.replace(/^(\d+):\s(.+)\s\[(.+?)\]\s\[(\d)\]$/, "$4");
            if (rawStartLine.length == 0 ||
                rawMessage.length == 0 ||
                rawRule.length == 0 ||
                rawConfidence.length == 0) {
                continue;
            }
            const startLine = parseInt(rawStartLine);
            const message = he_default().decode(rawMessage);
            const rule = he_default().decode(rawRule);
            const confidence = parseInt(rawConfidence);
            if (Number.isInteger(startLine) == false || Number.isInteger(confidence) == false) {
                continue;
            }
            result.push([startLine == 0 ? 1 : startLine, message, rule, confidence]);
        }
        return result;
    }
}

;// ./src/transformer/junit/junit-handler-rubocop.ts
class RubocopJunitHandler {
    match(testSuites) {
        if (testSuites.length == 0) {
            return false;
        }
        return testSuites[0].name == "rubocop";
    }
    handle(testSuites) {
        const result = [];
        this.handleTestSuites(result, testSuites);
        return result;
    }
    handleTestSuites(result, testSuites) {
        for (const testSuite of testSuites) {
            this.handleTestSuite(result, testSuite);
        }
    }
    handleTestSuite(result, testSuite) {
        this.handleTestCases(result, testSuite.testCases);
        this.handleTestSuites(result, testSuite.testSuites);
    }
    handleTestCases(result, testCases) {
        for (const testCase of testCases) {
            this.handleTestCase(result, testCase);
        }
    }
    handleTestCase(result, testCase) {
        for (const failure of testCase.failures) {
            const pathAndLine = this.findPathAndLine(failure);
            result.push({
                path: pathAndLine[0],
                message: this.findMessage(testCase, failure),
                level: "warning",
                rule: testCase.name,
                startLine: pathAndLine[1],
                startColumn: undefined,
                endLine: undefined,
                endColumn: undefined,
            });
        }
        for (const error of testCase.errors) {
            const pathAndLine = this.findPathAndLine(error);
            result.push({
                path: pathAndLine[0],
                message: this.findMessage(testCase, error),
                level: "failure",
                rule: testCase.name,
                startLine: pathAndLine[1],
                startColumn: undefined,
                endLine: undefined,
                endColumn: undefined,
            });
        }
    }
    findMessage(testCase, message) {
        const searchTarget = `${testCase.name}: `;
        const ruleIndex = message.message.indexOf(searchTarget);
        if (ruleIndex < 0) {
            return "";
        }
        return message.message.slice(ruleIndex + searchTarget.length);
    }
    findPathAndLine(message) {
        const body = message.body.trim();
        const path = body.replace(/^(.+):(\d+):(\d+)$/, "$1");
        const line = parseInt(body.replace(/^(.+):(\d+):(\d+)$/, "$2"));
        if (Number.isInteger(line)) {
            return [path, line];
        }
        return [path, 1];
    }
}

;// ./src/transformer/junit/convert.ts




const handlers = [
    new EslintJunitHandler(),
    new CpplintJunitHandler(),
    new RubocopJunitHandler(),
    new DefaultJunitHandler(),
];
function convertJunitToLintResult(testSuites) {
    for (const handler of handlers) {
        if (handler.match(testSuites)) {
            return handler.handle(testSuites);
        }
    }
    return [];
}

;// ./src/transformer/junit.ts






class JunitTransformer extends Transformer {
    parse(body) {
        const junitResult = new XMLParser/* default */.A({
            isArray: (tagName, jPath, isLeafNode, isAttribute) => isAttribute != true,
            ignoreAttributes: false,
            attributeNamePrefix: "",
            parseAttributeValue: true,
            attributeValueProcessor: (_, value) => he_default().decode(value),
        }).parse(body);
        const junitTestSuites = [];
        if (junitResult.testsuites != undefined) {
            for (const testSuites of junitResult.testsuites) {
                junitTestSuites.push(...this.parseTestSuites(testSuites.testsuite));
            }
        }
        else {
            // for cpplint
            const testSuites = junitResult;
            if (testSuites.testsuite != undefined) {
                junitTestSuites.push(...this.parseTestSuites(testSuites.testsuite));
            }
        }
        return convertJunitToLintResult(junitTestSuites);
    }
    parseTestSuites(testSuites) {
        if (testSuites == undefined) {
            return [];
        }
        const result = [];
        for (const testSuite of testSuites) {
            result.push({
                name: testSuite.name,
                package: testSuite.package,
                testCases: this.parseTestCases(testSuite.testcase),
                testSuites: this.parseTestSuites(testSuite.testsuite),
            });
        }
        return result;
    }
    parseTestCases(testCases) {
        if (testCases == undefined) {
            return [];
        }
        const result = [];
        for (const testCase of testCases) {
            result.push({
                name: testCase.name,
                className: testCase.classname,
                failures: this.parseTestMessages(testCase.failure),
                errors: this.parseTestMessages(testCase.error),
            });
        }
        return result;
    }
    parseTestMessages(testMessages) {
        if (testMessages == undefined) {
            return [];
        }
        if (typeof testMessages == "string") {
            return [{ message: testMessages, body: testMessages }];
        }
        const result = [];
        for (const testMessage of testMessages) {
            if (typeof testMessage == "string") {
                result.push({
                    message: testMessage,
                    body: testMessage,
                });
                continue;
            }
            if (testMessage["#text"] == undefined) {
                continue;
            }
            result.push({
                message: testMessage.message,
                body: he_default().decode(testMessage["#text"].toString()),
            });
        }
        return result;
    }
}
async function run() {
    try {
        const option = getOption();
        const transformer = new JunitTransformer();
        await transformer.transform(option);
    }
    catch (error) {
        if (error instanceof Error) {
            core/* setFailed */.C1(error.message);
        }
    }
}
if (true) {
    run();
}


/***/ },

/***/ 42613
(module) {

module.exports = require("assert");

/***/ },

/***/ 35317
(module) {

module.exports = require("child_process");

/***/ },

/***/ 76982
(module) {

module.exports = require("crypto");

/***/ },

/***/ 24434
(module) {

module.exports = require("events");

/***/ },

/***/ 79896
(module) {

module.exports = require("fs");

/***/ },

/***/ 58611
(module) {

module.exports = require("http");

/***/ },

/***/ 65692
(module) {

module.exports = require("https");

/***/ },

/***/ 69278
(module) {

module.exports = require("net");

/***/ },

/***/ 34589
(module) {

module.exports = require("node:assert");

/***/ },

/***/ 16698
(module) {

module.exports = require("node:async_hooks");

/***/ },

/***/ 4573
(module) {

module.exports = require("node:buffer");

/***/ },

/***/ 37540
(module) {

module.exports = require("node:console");

/***/ },

/***/ 77598
(module) {

module.exports = require("node:crypto");

/***/ },

/***/ 53053
(module) {

module.exports = require("node:diagnostics_channel");

/***/ },

/***/ 40610
(module) {

module.exports = require("node:dns");

/***/ },

/***/ 78474
(module) {

module.exports = require("node:events");

/***/ },

/***/ 37067
(module) {

module.exports = require("node:http");

/***/ },

/***/ 32467
(module) {

module.exports = require("node:http2");

/***/ },

/***/ 77030
(module) {

module.exports = require("node:net");

/***/ },

/***/ 643
(module) {

module.exports = require("node:perf_hooks");

/***/ },

/***/ 41792
(module) {

module.exports = require("node:querystring");

/***/ },

/***/ 57075
(module) {

module.exports = require("node:stream");

/***/ },

/***/ 41692
(module) {

module.exports = require("node:tls");

/***/ },

/***/ 73136
(module) {

module.exports = require("node:url");

/***/ },

/***/ 57975
(module) {

module.exports = require("node:util");

/***/ },

/***/ 73429
(module) {

module.exports = require("node:util/types");

/***/ },

/***/ 75919
(module) {

module.exports = require("node:worker_threads");

/***/ },

/***/ 38522
(module) {

module.exports = require("node:zlib");

/***/ },

/***/ 70857
(module) {

module.exports = require("os");

/***/ },

/***/ 16928
(module) {

module.exports = require("path");

/***/ },

/***/ 2203
(module) {

module.exports = require("stream");

/***/ },

/***/ 13193
(module) {

module.exports = require("string_decoder");

/***/ },

/***/ 53557
(module) {

module.exports = require("timers");

/***/ },

/***/ 64756
(module) {

module.exports = require("tls");

/***/ },

/***/ 39023
(module) {

module.exports = require("util");

/***/ }

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
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [121], () => (__webpack_require__(79403)))
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
/******/ 		// This function allow to reference async chunks and chunks that the entrypoint depends on
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + "vendor" + ".js";
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
/******/ 		__webpack_require__.j = 367;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			367: 1
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
/******/ 					var installedChunk = require("./" + __webpack_require__.u(chunkId));
/******/ 					if (!installedChunks[chunkId]) {
/******/ 						installChunk(installedChunk);
/******/ 					}
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