/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 84954
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79896);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18370);
/* harmony import */ var _actions_glob__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31754);



function getOption() {
    return {
        reportFiles: getInput("report_files"),
        reportFilesFollowSymbolicLinks: getInputOrNull("report_files_follow_symbolic_links") == "true",
        expectDataJson: getInput("expect_data_json"),
    };
}
function getInput(key) {
    return _actions_core__WEBPACK_IMPORTED_MODULE_1__/* .getInput */ .V4(key, { required: true });
}
function getInputOrNull(key) {
    const result = _actions_core__WEBPACK_IMPORTED_MODULE_1__/* .getInput */ .V4(key, { required: false });
    if (result.length == 0) {
        return null;
    }
    return result;
}
async function run() {
    try {
        const option = getOption();
        const globber = await _actions_glob__WEBPACK_IMPORTED_MODULE_2__/* .create */ .v(option.reportFiles, {
            followSymbolicLinks: option.reportFilesFollowSymbolicLinks,
        });
        const source = [];
        for await (const path of globber.globGenerator()) {
            const lintResults = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0__.readFileSync(path, "utf-8"));
            source.push(...lintResults);
        }
        const expect = JSON.parse(option.expectDataJson);
        if (expect.length != source.length) {
            _actions_core__WEBPACK_IMPORTED_MODULE_1__/* .setFailed */ .C1(`source length(${source.length}) is not match expect length(${expect.length})`);
            return;
        }
        for (let i = 0; i < expect.length; i++) {
            const s = source[i];
            const e = expect[i];
            if (s.path !== e.path) {
                _actions_core__WEBPACK_IMPORTED_MODULE_1__/* .setFailed */ .C1(`source path(${s.path}) is not match expect path(${e.path}) at index ${i}`);
                return;
            }
            if (s.rule !== e.rule) {
                _actions_core__WEBPACK_IMPORTED_MODULE_1__/* .setFailed */ .C1(`source rule(${s.rule}) is not match expect rule(${e.rule}) at index ${i}`);
                return;
            }
            if (s.message !== e.message) {
                _actions_core__WEBPACK_IMPORTED_MODULE_1__/* .setFailed */ .C1(`source message(${s.message}) is not match expect message(${e.message}) at index ${i}`);
                return;
            }
            if (s.level !== e.level) {
                _actions_core__WEBPACK_IMPORTED_MODULE_1__/* .setFailed */ .C1(`source level(${s.level}) is not match expect level(${e.level}) at index ${i}`);
                return;
            }
            if (s.startLine !== e.startLine) {
                _actions_core__WEBPACK_IMPORTED_MODULE_1__/* .setFailed */ .C1(`source startLine(${s.startLine}) is not match expect startLine(${e.startLine}) at index ${i}`);
                return;
            }
            if (s.endLine !== e.endLine) {
                _actions_core__WEBPACK_IMPORTED_MODULE_1__/* .setFailed */ .C1(`source endLine(${s.endLine}) is not match expect endLine(${e.endLine}) at index ${i}`);
                return;
            }
            if (s.startColumn !== e.startColumn) {
                _actions_core__WEBPACK_IMPORTED_MODULE_1__/* .setFailed */ .C1(`source startColumn(${s.startColumn}) is not match expect startColumn(${e.startColumn}) at index ${i}`);
                return;
            }
            if (s.endColumn !== e.endColumn) {
                _actions_core__WEBPACK_IMPORTED_MODULE_1__/* .setFailed */ .C1(`source endColumn(${s.endColumn}) is not match expect endColumn(${e.endColumn}) at index ${i}`);
                return;
            }
        }
    }
    catch (error) {
        if (error instanceof Error) {
            _actions_core__WEBPACK_IMPORTED_MODULE_1__/* .setFailed */ .C1(error.message);
        }
    }
}
run();


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
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [121], () => (__webpack_require__(84954)))
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
/******/ 		__webpack_require__.j = 693;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			693: 1
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