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
import * as __WEBPACK_EXTERNAL_MODULE_util__ from "util";
import { createRequire as __WEBPACK_EXTERNAL_createRequire } from "node:module";
const __WEBPACK_EXTERNAL_createRequire_require = __WEBPACK_EXTERNAL_createRequire(import.meta.url);
/******/ var __webpack_modules__ = ({

/***/ 46259
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44421);
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
module.exports = x({ ["constants"]: () => (__WEBPACK_EXTERNAL_MODULE_fs__.constants), ["promises"]: () => (__WEBPACK_EXTERNAL_MODULE_fs__.promises), ["readFileSync"]: () => (__WEBPACK_EXTERNAL_MODULE_fs__.readFileSync) });

/***/ },

/***/ 53782
(module, __unused_webpack_exports, __webpack_require__) {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = x({  });

/***/ },

/***/ 33871
(module, __unused_webpack_exports, __webpack_require__) {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = x({  });

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
module.exports = x({  });

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

/***/ 45578
(module, __unused_webpack_exports, __webpack_require__) {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = x({  });

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
/******/ 	__webpack_require__.j = 693;
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
/******/ 		693: 0
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
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module depends on other loaded chunks and execution need to be delayed
/******/ var __webpack_exports__ = __webpack_require__.O(undefined, [121], () => (__webpack_require__(46259)))
/******/ __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 
