// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"iTWJc":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "a1134c289bd11c02";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"lVeW7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FormValidation", ()=>FormValidation);
parcelHelpers.export(exports, "Validators", ()=>index);
parcelHelpers.export(exports, "createDefaultFormValidationResult", ()=>createDefaultFormValidationResult);
parcelHelpers.export(exports, "createDefaultRecordValidationResult", ()=>createDefaultRecordValidationResult);
parcelHelpers.export(exports, "createDefaultValidationResult", ()=>createDefaultValidationResult);
parcelHelpers.export(exports, "createFormValidation", ()=>createFormValidation);
parcelHelpers.export(exports, "parseMessageWithCustomArgs", ()=>parseMessageWithCustomArgs);
var global = arguments[3];
function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
/** Used as the `TypeError` message for "Functions" methods. */ var FUNC_ERROR_TEXT$1 = "Expected a function";
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
/** Used as references for various `Number` constants. */ var INFINITY$1 = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991;
/** `Object#toString` result references. */ var funcTag$1 = "[object Function]", genTag$1 = "[object GeneratorFunction]", symbolTag$1 = "[object Symbol]";
/** Used to match property names within property paths. */ var reIsDeepProp$1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp$1 = /^\w*$/, reLeadingDot$1 = /^\./, rePropName$1 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */ var reRegExpChar$1 = /[\\^$.*+?()[\]{}|]/g;
/** Used to match backslashes in property paths. */ var reEscapeChar$1 = /\\(\\)?/g;
/** Used to detect host constructors (Safari). */ var reIsHostCtor$1 = /^\[object .+?Constructor\]$/;
/** Used to detect unsigned integer values. */ var reIsUint = /^(?:0|[1-9]\d*)$/;
/** Detect free variable `global` from Node.js. */ var freeGlobal$1 = _typeof(commonjsGlobal) == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
/** Detect free variable `self`. */ var freeSelf$1 = (typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root$1 = freeGlobal$1 || freeSelf$1 || Function("return this")();
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */ function getValue$1(object, key) {
    return object == null ? undefined : object[key];
}
/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */ function isHostObject$1(value) {
    // Many host objects are `Object` objects that can coerce to strings
    // despite having improperly defined `toString` methods.
    var result = false;
    if (value != null && typeof value.toString != "function") try {
        result = !!(value + "");
    } catch (e) {}
    return result;
}
/** Used for built-in method references. */ var arrayProto$1 = Array.prototype, funcProto$1 = Function.prototype, objectProto$1 = Object.prototype;
/** Used to detect overreaching core-js shims. */ var coreJsData$1 = root$1["__core-js_shared__"];
/** Used to detect methods masquerading as native. */ var maskSrcKey$1 = function() {
    var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
}();
/** Used to resolve the decompiled source of functions. */ var funcToString$1 = funcProto$1.toString;
/** Used to check objects for own properties. */ var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString$1 = objectProto$1.toString;
/** Used to detect if a method is native. */ var reIsNative$1 = RegExp("^" + funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar$1, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
/** Built-in value references. */ var _Symbol$1 = root$1.Symbol, splice$1 = arrayProto$1.splice;
/* Built-in method references that are verified to be native. */ var Map$1 = getNative$1(root$1, "Map"), nativeCreate$1 = getNative$1(Object, "create");
/** Used to convert symbols to primitives and strings. */ var symbolProto$1 = _Symbol$1 ? _Symbol$1.prototype : undefined, symbolToString$1 = symbolProto$1 ? symbolProto$1.toString : undefined;
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Hash$1(entries) {
    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */ function hashClear$1() {
    this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
}
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function hashDelete$1(key) {
    return this.has(key) && delete this.__data__[key];
}
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function hashGet$1(key) {
    var data = this.__data__;
    if (nativeCreate$1) {
        var result = data[key];
        return result === HASH_UNDEFINED$1 ? undefined : result;
    }
    return hasOwnProperty$1.call(data, key) ? data[key] : undefined;
}
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function hashHas$1(key) {
    var data = this.__data__;
    return nativeCreate$1 ? data[key] !== undefined : hasOwnProperty$1.call(data, key);
}
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */ function hashSet$1(key, value) {
    var data = this.__data__;
    data[key] = nativeCreate$1 && value === undefined ? HASH_UNDEFINED$1 : value;
    return this;
}
// Add methods to `Hash`.
Hash$1.prototype.clear = hashClear$1;
Hash$1.prototype["delete"] = hashDelete$1;
Hash$1.prototype.get = hashGet$1;
Hash$1.prototype.has = hashHas$1;
Hash$1.prototype.set = hashSet$1;
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function ListCache$1(entries) {
    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */ function listCacheClear$1() {
    this.__data__ = [];
}
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function listCacheDelete$1(key) {
    var data = this.__data__, index = assocIndexOf$1(data, key);
    if (index < 0) return false;
    var lastIndex = data.length - 1;
    if (index == lastIndex) data.pop();
    else splice$1.call(data, index, 1);
    return true;
}
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function listCacheGet$1(key) {
    var data = this.__data__, index = assocIndexOf$1(data, key);
    return index < 0 ? undefined : data[index][1];
}
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function listCacheHas$1(key) {
    return assocIndexOf$1(this.__data__, key) > -1;
}
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */ function listCacheSet$1(key, value) {
    var data = this.__data__, index = assocIndexOf$1(data, key);
    if (index < 0) data.push([
        key,
        value
    ]);
    else data[index][1] = value;
    return this;
}
// Add methods to `ListCache`.
ListCache$1.prototype.clear = listCacheClear$1;
ListCache$1.prototype["delete"] = listCacheDelete$1;
ListCache$1.prototype.get = listCacheGet$1;
ListCache$1.prototype.has = listCacheHas$1;
ListCache$1.prototype.set = listCacheSet$1;
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function MapCache$1(entries) {
    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */ function mapCacheClear$1() {
    this.__data__ = {
        hash: new Hash$1(),
        map: new (Map$1 || ListCache$1)(),
        string: new Hash$1()
    };
}
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function mapCacheDelete$1(key) {
    return getMapData$1(this, key)["delete"](key);
}
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function mapCacheGet$1(key) {
    return getMapData$1(this, key).get(key);
}
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function mapCacheHas$1(key) {
    return getMapData$1(this, key).has(key);
}
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */ function mapCacheSet$1(key, value) {
    getMapData$1(this, key).set(key, value);
    return this;
}
// Add methods to `MapCache`.
MapCache$1.prototype.clear = mapCacheClear$1;
MapCache$1.prototype["delete"] = mapCacheDelete$1;
MapCache$1.prototype.get = mapCacheGet$1;
MapCache$1.prototype.has = mapCacheHas$1;
MapCache$1.prototype.set = mapCacheSet$1;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */ function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty$1.call(object, key) && eq$1(objValue, value)) || value === undefined && !(key in object)) object[key] = value;
}
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function assocIndexOf$1(array, key) {
    var length = array.length;
    while(length--){
        if (eq$1(array[length][0], key)) return length;
    }
    return -1;
}
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */ function baseIsNative$1(value) {
    if (!isObject$1(value) || isMasked$1(value)) return false;
    var pattern = isFunction$2(value) || isHostObject$1(value) ? reIsNative$1 : reIsHostCtor$1;
    return pattern.test(toSource$1(value));
}
/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */ function baseSet(object, path, value, customizer) {
    if (!isObject$1(object)) return object;
    path = isKey$1(path, object) ? [
        path
    ] : castPath$1(path);
    var index = -1, length = path.length, lastIndex = length - 1, nested = object;
    while(nested != null && ++index < length){
        var key = toKey$1(path[index]), newValue = value;
        if (index != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : undefined;
            if (newValue === undefined) newValue = isObject$1(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
    }
    return object;
}
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */ function baseToString$1(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == "string") return value;
    if (isSymbol$1(value)) return symbolToString$1 ? symbolToString$1.call(value) : "";
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */ function castPath$1(value) {
    return isArray$1(value) ? value : stringToPath$1(value);
}
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */ function getMapData$1(map, key) {
    var data = map.__data__;
    return isKeyable$1(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */ function getNative$1(object, key) {
    var value = getValue$1(object, key);
    return baseIsNative$1(value) ? value : undefined;
}
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */ function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (typeof value == "number" || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */ function isKey$1(value, object) {
    if (isArray$1(value)) return false;
    var type = _typeof(value);
    if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol$1(value)) return true;
    return reIsPlainProp$1.test(value) || !reIsDeepProp$1.test(value) || object != null && value in Object(object);
}
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */ function isKeyable$1(value) {
    var type = _typeof(value);
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */ function isMasked$1(func) {
    return !!maskSrcKey$1 && maskSrcKey$1 in func;
}
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */ var stringToPath$1 = memoize$1(function(string) {
    string = toString$1(string);
    var result = [];
    if (reLeadingDot$1.test(string)) result.push("");
    string.replace(rePropName$1, function(match, number, quote, string) {
        result.push(quote ? string.replace(reEscapeChar$1, "$1") : number || match);
    });
    return result;
});
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */ function toKey$1(value) {
    if (typeof value == "string" || isSymbol$1(value)) return value;
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */ function toSource$1(func) {
    if (func != null) {
        try {
            return funcToString$1.call(func);
        } catch (e) {}
        try {
            return func + "";
        } catch (e) {}
    }
    return "";
}
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */ function memoize$1(func, resolver) {
    if (typeof func != "function" || resolver && typeof resolver != "function") throw new TypeError(FUNC_ERROR_TEXT$1);
    var memoized = function memoized() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) return cache.get(key);
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result);
        return result;
    };
    memoized.cache = new (memoize$1.Cache || MapCache$1)();
    return memoized;
}
// Assign cache to `_.memoize`.
memoize$1.Cache = MapCache$1;
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */ function eq$1(value, other) {
    return value === other || value !== value && other !== other;
}
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var isArray$1 = Array.isArray;
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */ function isFunction$2(value) {
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 8-9 which returns 'object' for typed array and other constructors.
    var tag = isObject$1(value) ? objectToString$1.call(value) : "";
    return tag == funcTag$1 || tag == genTag$1;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject$1(value) {
    var type = _typeof(value);
    return !!value && (type == "object" || type == "function");
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike$1(value) {
    return !!value && _typeof(value) == "object";
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol$1(value) {
    return _typeof(value) == "symbol" || isObjectLike$1(value) && objectToString$1.call(value) == symbolTag$1;
}
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */ function toString$1(value) {
    return value == null ? "" : baseToString$1(value);
}
/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */ function set(object, path, value) {
    return object == null ? object : baseSet(object, path, value);
}
var set_1 = set;
// TODO: Better naming for this?
var safeArrayLength = function safeArrayLength(collection) {
    return Array.isArray(collection) ? collection.length : 0;
};
var arrayContainsEntries = function arrayContainsEntries(collection) {
    return safeArrayLength(collection) > 0;
};
// https://stackoverflow.com/questions/5999998/check-if-a-variable-is-of-function-type
var isFunction$1 = function isFunction(v) {
    return typeof v === "function";
};
var isUndefinedOrNull = function isUndefinedOrNull(v) {
    return v === void 0 || v === null;
};
var isPromise = function isPromise(value) {
    return value instanceof Promise;
};
var safeObjectKeys = function safeObjectKeys(value) {
    return Boolean(value) ? Object.keys(value) : [];
};
var reduceAsync = function reduceAsync(collection, callback, defaultResult) {
    return Array.isArray(collection) ? collection.reduce(function(promise, item, index) {
        return promise.then(function(result) {
            return callback(result, item, index);
        });
    }, Promise.resolve(defaultResult)) : Promise.resolve(defaultResult);
};
var isFieldIdInSchema = function isFieldIdInSchema(fieldId, schema) {
    return !isUndefinedOrNull(schema) && !isUndefinedOrNull(schema[fieldId]);
};
var hasFieldIdArrayValidator = function hasFieldIdArrayValidator(fieldId, schema) {
    return /\[.*\]/.test(fieldId) && !isFieldIdInSchema(fieldId, schema);
};
var formatFieldForArrayField = function formatFieldForArrayField(fieldId, value) {
    var formattedValue = set_1({}, fieldId, value);
    var keys = Boolean(fieldId) ? Object.keys(formattedValue) : [
        ""
    ];
    var id = Array.isArray(keys) && keys.length > 0 ? keys[0] : "";
    return {
        id: id,
        value: Array.isArray(formattedValue[id]) ? _toConsumableArray(formattedValue[id]) : formattedValue[id]
    };
};
/** Used as the `TypeError` message for "Functions" methods. */ var FUNC_ERROR_TEXT = "Expected a function";
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = "__lodash_hash_undefined__";
/** Used as references for various `Number` constants. */ var INFINITY = 1 / 0;
/** `Object#toString` result references. */ var funcTag = "[object Function]", genTag = "[object GeneratorFunction]", symbolTag = "[object Symbol]";
/** Used to match property names within property paths. */ var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, reLeadingDot = /^\./, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */ var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to match backslashes in property paths. */ var reEscapeChar = /\\(\\)?/g;
/** Used to detect host constructors (Safari). */ var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Detect free variable `global` from Node.js. */ var freeGlobal = _typeof(commonjsGlobal) == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
/** Detect free variable `self`. */ var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == "object" && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function("return this")();
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */ function getValue(object, key) {
    return object == null ? undefined : object[key];
}
/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */ function isHostObject(value) {
    // Many host objects are `Object` objects that can coerce to strings
    // despite having improperly defined `toString` methods.
    var result = false;
    if (value != null && typeof value.toString != "function") try {
        result = !!(value + "");
    } catch (e) {}
    return result;
}
/** Used for built-in method references. */ var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to detect overreaching core-js shims. */ var coreJsData = root["__core-js_shared__"];
/** Used to detect methods masquerading as native. */ var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
}();
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/** Used to detect if a method is native. */ var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
/** Built-in value references. */ var _Symbol = root.Symbol, splice = arrayProto.splice;
/* Built-in method references that are verified to be native. */ var Map = getNative(root, "Map"), nativeCreate = getNative(Object, "create");
/** Used to convert symbols to primitives and strings. */ var symbolProto = _Symbol ? _Symbol.prototype : undefined, symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Hash(entries) {
    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */ function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
}
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function hashDelete(key) {
    return this.has(key) && delete this.__data__[key];
}
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */ function hashSet(key, value) {
    var data = this.__data__;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
    return this;
}
// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function ListCache(entries) {
    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */ function listCacheClear() {
    this.__data__ = [];
}
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) return false;
    var lastIndex = data.length - 1;
    if (index == lastIndex) data.pop();
    else splice.call(data, index, 1);
    return true;
}
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
}
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
}
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */ function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) data.push([
        key,
        value
    ]);
    else data[index][1] = value;
    return this;
}
// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function MapCache(entries) {
    var index = -1, length = entries ? entries.length : 0;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */ function mapCacheClear() {
    this.__data__ = {
        hash: new Hash(),
        map: new (Map || ListCache)(),
        string: new Hash()
    };
}
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function mapCacheDelete(key) {
    return getMapData(this, key)["delete"](key);
}
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function mapCacheGet(key) {
    return getMapData(this, key).get(key);
}
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function mapCacheHas(key) {
    return getMapData(this, key).has(key);
}
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */ function mapCacheSet(key, value) {
    getMapData(this, key).set(key, value);
    return this;
}
// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function assocIndexOf(array, key) {
    var length = array.length;
    while(length--){
        if (eq(array[length][0], key)) return length;
    }
    return -1;
}
/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */ function baseGet(object, path) {
    path = isKey(path, object) ? [
        path
    ] : castPath(path);
    var index = 0, length = path.length;
    while(object != null && index < length)object = object[toKey(path[index++])];
    return index && index == length ? object : undefined;
}
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */ function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) return false;
    var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
}
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */ function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == "string") return value;
    if (isSymbol(value)) return symbolToString ? symbolToString.call(value) : "";
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */ function castPath(value) {
    return isArray(value) ? value : stringToPath(value);
}
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */ function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */ function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
}
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */ function isKey(value, object) {
    if (isArray(value)) return false;
    var type = _typeof(value);
    if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) return true;
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */ function isKeyable(value) {
    var type = _typeof(value);
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */ function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
}
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */ var stringToPath = memoize(function(string) {
    string = toString(string);
    var result = [];
    if (reLeadingDot.test(string)) result.push("");
    string.replace(rePropName, function(match, number, quote, string) {
        result.push(quote ? string.replace(reEscapeChar, "$1") : number || match);
    });
    return result;
});
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */ function toKey(value) {
    if (typeof value == "string" || isSymbol(value)) return value;
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */ function toSource(func) {
    if (func != null) {
        try {
            return funcToString.call(func);
        } catch (e) {}
        try {
            return func + "";
        } catch (e) {}
    }
    return "";
}
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */ function memoize(func, resolver) {
    if (typeof func != "function" || resolver && typeof resolver != "function") throw new TypeError(FUNC_ERROR_TEXT);
    var memoized = function memoized() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) return cache.get(key);
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result);
        return result;
    };
    memoized.cache = new (memoize.Cache || MapCache)();
    return memoized;
}
// Assign cache to `_.memoize`.
memoize.Cache = MapCache;
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */ function eq(value, other) {
    return value === other || value !== value && other !== other;
}
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var isArray = Array.isArray;
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */ function isFunction(value) {
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 8-9 which returns 'object' for typed array and other constructors.
    var tag = isObject(value) ? objectToString.call(value) : "";
    return tag == funcTag || tag == genTag;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = _typeof(value);
    return !!value && (type == "object" || type == "function");
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && _typeof(value) == "object";
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return _typeof(value) == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */ function toString(value) {
    return value == null ? "" : baseToString(value);
}
/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */ function get(object, path, defaultValue) {
    var result = object == null ? undefined : baseGet(object, path);
    return result === undefined ? defaultValue : result;
}
var get_1 = get;
var createDefaultValidationResult = function createDefaultValidationResult() {
    return {
        type: "",
        succeeded: true,
        message: ""
    };
};
var createDefaultInternalValidationResult = function createDefaultInternalValidationResult() {
    return {
        key: "",
        type: "",
        succeeded: true,
        message: ""
    };
};
var createDefaultRecordValidationResult = function createDefaultRecordValidationResult() {
    return {
        succeeded: true,
        recordErrors: {}
    };
};
var createDefaultFormValidationResult = function createDefaultFormValidationResult() {
    return {
        succeeded: true,
        fieldErrors: {},
        recordErrors: {}
    };
};
var createDefaultInternalFormValidationResult = function createDefaultInternalFormValidationResult() {
    return {
        succeeded: true,
        fieldErrors: {},
        recordErrors: {}
    };
};
// Sugar we admit both flavors syncrhonous and asynchronous validators
var convertFieldValidationToAsyncIfNeeded = function convertFieldValidationToAsyncIfNeeded(validation) {
    return function(fieldValidatorArgs) {
        var result = validation ? validation(fieldValidatorArgs) : createDefaultValidationResult();
        return isPromise(result) ? result : Promise.resolve(result);
    };
};
var convertRecordValidationToAsyncIfNeeded = function convertRecordValidationToAsyncIfNeeded(validation) {
    return function(recordValidatorArgs) {
        var result = validation ? validation(recordValidatorArgs) : createDefaultValidationResult();
        return isPromise(result) ? result : Promise.resolve(result);
    };
};
var mapToInternalFieldValidation = function mapToInternalFieldValidation(fieldValidation) {
    return isFunction$1(fieldValidation) ? {
        validator: convertFieldValidationToAsyncIfNeeded(fieldValidation),
        message: void 0,
        customArgs: void 0
    } : {
        validator: convertFieldValidationToAsyncIfNeeded(isFunction$1(fieldValidation.validator) ? fieldValidation.validator : fieldValidation.validator.validator),
        customArgs: fieldValidation.customArgs,
        message: fieldValidation.message
    };
};
var mapToInternalValidationCollection$1 = function mapToInternalValidationCollection(fieldValidations) {
    return Array.isArray(fieldValidations) ? fieldValidations.map(mapToInternalFieldValidation) : [];
};
var buildIntertalSchema$1 = function buildIntertalSchema(internalSchema) {
    return internalSchema.reduce(function(internalFieldValidations, _ref) {
        var _ref2 = _slicedToArray(_ref, 2), fieldId = _ref2[0], fieldValidations = _ref2[1];
        internalFieldValidations[fieldId] = fieldValidations;
        return internalFieldValidations;
    }, {});
};
var mapToInternalFieldValidationSchema = function mapToInternalFieldValidationSchema(fieldValidationSchema) {
    var validationSchema = fieldValidationSchema instanceof Object ? fieldValidationSchema : {};
    var internalFieldValidations = Object.entries(validationSchema).map(function(_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2), fielId = _ref4[0], fieldValidations = _ref4[1];
        return [
            fielId,
            mapToInternalValidationCollection$1(fieldValidations)
        ];
    });
    return buildIntertalSchema$1(internalFieldValidations);
};
var mapToInternalRecordValidation = function mapToInternalRecordValidation(recordValidation) {
    return isFunction$1(recordValidation) ? {
        validator: convertRecordValidationToAsyncIfNeeded(recordValidation),
        message: void 0
    } : {
        validator: convertRecordValidationToAsyncIfNeeded(isFunction$1(recordValidation.validator) ? recordValidation.validator : recordValidation.validator.validator),
        message: recordValidation.message
    };
};
var mapToInternalValidationCollection = function mapToInternalValidationCollection(recordValidations) {
    return Array.isArray(recordValidations) ? recordValidations.map(mapToInternalRecordValidation) : [];
};
var buildIntertalSchema = function buildIntertalSchema(internalSchema) {
    return internalSchema.reduce(function(internalRecordValidations, _ref) {
        var _ref2 = _slicedToArray(_ref, 2), recordId = _ref2[0], recordValidations = _ref2[1];
        internalRecordValidations[recordId] = recordValidations;
        return internalRecordValidations;
    }, {});
};
var mapToInternalRecordValidationSchema = function mapToInternalRecordValidationSchema(recordValidationSchema) {
    var validationSchema = recordValidationSchema instanceof Object ? recordValidationSchema : {};
    var internalRecordValidations = Object.entries(validationSchema).map(function(_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2), fielId = _ref4[0], recordValidations = _ref4[1];
        return [
            fielId,
            mapToInternalValidationCollection(recordValidations)
        ];
    });
    return buildIntertalSchema(internalRecordValidations);
};
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var renameFieldNameKeys = function renameFieldNameKeys(internalValidationResult, fieldKey, fieldErrors, index) {
    var fieldNames = Object.keys(fieldErrors);
    return fieldNames.reduce(function(result, fieldName) {
        return Object.assign(Object.assign({}, result), _defineProperty({}, "".concat(fieldKey, "[").concat(index, "].").concat(fieldName), fieldErrors[fieldName]));
    }, {});
};
var mapArrayErrorListToValidationResult = function mapArrayErrorListToValidationResult(internalValidationResult, fieldKey) {
    return internalValidationResult.arrayErrors.reduce(function(validationResult, fieldErrors, index) {
        return Object.assign(Object.assign({}, validationResult), renameFieldNameKeys(internalValidationResult, fieldKey, fieldErrors, index));
    }, {});
};
var mapInternalValidationResultToValidationResult = function mapInternalValidationResultToValidationResult(internalValidationResult) {
    return Boolean(internalValidationResult.arrayErrors) ? mapArrayErrorListToValidationResult(internalValidationResult, internalValidationResult.key) : {
        type: internalValidationResult.type,
        message: internalValidationResult.message,
        succeeded: internalValidationResult.succeeded
    };
};
var mapInternalFieldErrorsToFieldErrors = function mapInternalFieldErrorsToFieldErrors(internalFieldErrors) {
    return Object.keys(internalFieldErrors).reduce(function(fieldErrors, field) {
        var validationResult = internalFieldErrors[field];
        var fieldValidationResult = Boolean(validationResult.arrayErrors) ? mapArrayErrorListToValidationResult(validationResult, field) : _defineProperty({}, field, validationResult);
        return Object.assign(Object.assign({}, fieldErrors), fieldValidationResult);
    }, {});
};
var mapInternalFormValidationResultToFormValidationResult = function mapInternalFormValidationResultToFormValidationResult(internalFormValidationResult) {
    return {
        succeeded: internalFormValidationResult.succeeded,
        recordErrors: internalFormValidationResult.recordErrors,
        fieldErrors: mapInternalFieldErrorsToFieldErrors(internalFormValidationResult.fieldErrors)
    };
};
var fireAllFieldsValidations = function fireAllFieldsValidations(fieldIds, values, schema, validateField) {
    return fieldIds.map(function(fieldId) {
        return validateField(fieldId, get_1(values, fieldId, undefined), values, schema);
    });
};
var fireAllRecordsValidations = function fireAllRecordsValidations(recordIds, values, schema, validateRecord) {
    return recordIds.map(function(recordId) {
        return validateRecord(recordId, values, schema);
    });
};
var checkValidationResult$1 = function checkValidationResult(validationResult) {
    var result = validationResult;
    if (!validationResult || isUndefinedOrNull(validationResult.succeeded)) {
        // show a console error, warn the user one of his validators is not well formed
        console.error("form-validators: One of the record validator is returning a non expected value.");
        result = createDefaultInternalValidationResult();
    }
    return result;
};
var fireValidation$1 = function fireValidation(values, internalRecordValidation) {
    return internalRecordValidation.validator({
        values: values,
        message: internalRecordValidation.message
    }).then(checkValidationResult$1);
};
// Sequentially resolve promises with reduce: https://css-tricks.com/why-using-reduce-to-sequentially-resolve-promises-works/
// Example run promises until one succeeds: https://gist.github.com/greggman/0b6eafb335de4bbb557c
var iterateValidationsUntilFailOrAllSucceeded$1 = function iterateValidationsUntilFailOrAllSucceeded(values, internalRecordValidations) {
    return internalRecordValidations.reduce(function(result, next) {
        return result.then(function(validationResult) {
            return validationResult.succeeded ? fireValidation$1(values, next) : validationResult;
        });
    }, fireValidation$1(values, internalRecordValidations[0]) // Initial reduce value
    );
};
var fireSingleRecordValidations = function fireSingleRecordValidations(values, internalRecordValidations) {
    return arrayContainsEntries(internalRecordValidations) ? iterateValidationsUntilFailOrAllSucceeded$1(values, internalRecordValidations) : Promise.resolve(createDefaultInternalValidationResult());
};
var checkValidationResult = function checkValidationResult(validationResult) {
    var result = validationResult;
    if (!validationResult || isUndefinedOrNull(validationResult.succeeded)) {
        // show a console error, warn the user one of his validators is not well formed
        console.error("form-validators: One of the field validator is returning a non expected value.");
        result = createDefaultInternalValidationResult();
    }
    return result;
};
var fireValidation = function fireValidation(value, values, internalFieldValidation) {
    return internalFieldValidation.validator({
        value: value,
        values: values,
        customArgs: internalFieldValidation.customArgs,
        message: internalFieldValidation.message
    }).then(checkValidationResult);
};
// Sequentially resolve promises with reduce: https://css-tricks.com/why-using-reduce-to-sequentially-resolve-promises-works/
// Example run promises until one succeeds: https://gist.github.com/greggman/0b6eafb335de4bbb557c
var iterateValidationsUntilFailOrAllSucceeded = function iterateValidationsUntilFailOrAllSucceeded(value, values, internalFieldValidations) {
    return internalFieldValidations.reduce(function(result, next) {
        return result.then(function(validationResult) {
            return validationResult.succeeded ? fireValidation(value, values, next) : validationResult;
        });
    }, fireValidation(value, values, internalFieldValidations[0]) // Initial reduce value
    );
};
var fireSingleFieldValidations = function fireSingleFieldValidations(value, values, internalFieldValidations) {
    return arrayContainsEntries(internalFieldValidations) ? iterateValidationsUntilFailOrAllSucceeded(value, values, internalFieldValidations) : Promise.resolve(createDefaultInternalValidationResult());
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
var didAllValidationsSucceeded = function didAllValidationsSucceeded(validationResults) {
    return validationResults.every(function(fvr) {
        return fvr.succeeded;
    });
};
var extractErrors = function extractErrors(validationResults) {
    return validationResults.reduce(function(errors, _a) {
        var key = _a.key, validationResult = __rest(_a, [
            "key"
        ]);
        errors[key] = Object.assign({}, validationResult);
        return errors;
    }, {});
};
var buildRecordValidationResult = function buildRecordValidationResult(validationResults) {
    var recordValidationResult = createDefaultRecordValidationResult();
    if (arrayContainsEntries(validationResults)) {
        recordValidationResult.succeeded = didAllValidationsSucceeded(validationResults);
        recordValidationResult.recordErrors = extractErrors(validationResults);
    }
    return recordValidationResult;
};
var buildFormValidationResult = function buildFormValidationResult(fieldValidationResults, recordValidationResults) {
    var formValidationResult = createDefaultInternalFormValidationResult();
    if (arrayContainsEntries(fieldValidationResults)) {
        formValidationResult.succeeded = didAllValidationsSucceeded(fieldValidationResults);
        formValidationResult.fieldErrors = extractErrors(fieldValidationResults);
    }
    if (arrayContainsEntries(recordValidationResults)) {
        var recordResults = buildRecordValidationResult(recordValidationResults);
        formValidationResult.succeeded = formValidationResult.succeeded && recordResults.succeeded;
        formValidationResult.recordErrors = recordResults.recordErrors;
    }
    return formValidationResult;
};
var validateField = function validateField(fieldId, value, values, schema) {
    return !isFieldIdInSchema(fieldId, schema) ? Promise.resolve(createDefaultInternalValidationResult()) : fireSingleFieldValidations(value, values, schema[fieldId]).then(function(validationResult) {
        validationResult.key = fieldId;
        return validationResult;
    })["catch"](function(error) {
        var message = "Validation Exception, field: ".concat(fieldId);
        console.error(message);
        throw error;
    });
};
var validateSingleRecord = function validateSingleRecord(recordId, values, schema) {
    return !isFieldIdInSchema(recordId, schema) ? Promise.resolve(createDefaultInternalValidationResult()) : fireSingleRecordValidations(values, schema[recordId]).then(function(validationResult) {
        validationResult.key = recordId;
        return validationResult;
    })["catch"](function(error) {
        var message = "Validation Exception, record: ".concat(recordId);
        console.error(message);
        throw error;
    });
};
var validateRecord = function validateRecord(values, schema) {
    var promiseValidationResults = fireAllRecordsValidations(safeObjectKeys(schema), values, schema, validateSingleRecord);
    return Promise.all(promiseValidationResults).then(function(validationResults) {
        return buildRecordValidationResult(validationResults);
    })["catch"](function(error) {
        var message = "Uncontrolled error validating records";
        console.error(message);
        throw error;
    });
};
var validateForm = function validateForm(values, fieldSchema, recordSchema) {
    var promiseFieldValidationResults = fireAllFieldsValidations(safeObjectKeys(fieldSchema), values, fieldSchema, validateField);
    var promiseRecordValidationResults = fireAllRecordsValidations(safeObjectKeys(recordSchema), values, recordSchema, validateSingleRecord);
    return Promise.all(promiseFieldValidationResults).then(function(fieldValidationResults) {
        return Promise.all(promiseRecordValidationResults).then(function(recordValidationResults) {
            return [
                fieldValidationResults,
                recordValidationResults
            ];
        });
    }).then(function(_ref) {
        var _ref2 = _slicedToArray(_ref, 2), fieldValidationResults = _ref2[0], recordValidationResults = _ref2[1];
        return buildFormValidationResult(fieldValidationResults, recordValidationResults);
    })["catch"](function(error) {
        var message = "Uncontrolled error validating form";
        console.error(message);
        throw error;
    });
};
var FormValidation = function FormValidation(validationSchema) {
    var _this = this;
    _classCallCheck(this, FormValidation);
    this.fieldSchema = {};
    this.recordSchema = {};
    this.setupValidationSchema = function(validationSchema) {
        if (validationSchema && _typeof(validationSchema) === "object") {
            var record = validationSchema.record, field = validationSchema.field;
            if (field && _typeof(field) === "object") _this.fieldSchema = mapToInternalFieldValidationSchema(validationSchema.field);
            if (record && _typeof(record) === "object") _this.recordSchema = mapToInternalRecordValidationSchema(validationSchema.record);
        } else console.error("ValidationSchema must be a valid object");
    };
    this.validateField = function(fieldId, value, values) {
        var field = hasFieldIdArrayValidator(fieldId, _this.fieldSchema) ? formatFieldForArrayField(fieldId, value) : {
            id: fieldId,
            value: value
        };
        return validateField(field.id, field.value, values, _this.fieldSchema).then(function(internalValidationResult) {
            var validationResult = mapInternalValidationResultToValidationResult(internalValidationResult);
            return fieldId !== field.id ? get_1(validationResult, fieldId) : validationResult;
        });
    };
    this.validateRecord = function(values) {
        return validateRecord(values, _this.recordSchema);
    };
    this.validateForm = function(values) {
        return validateForm(values, _this.fieldSchema, _this.recordSchema).then(mapInternalFormValidationResultToFormValidationResult);
    };
    this.updateValidationSchema = function(validationSchema) {
        _this.setupValidationSchema(validationSchema);
    };
    this.setupValidationSchema(validationSchema);
};
var createFormValidation = function createFormValidation(validationSchema) {
    return new FormValidation(validationSchema);
};
var getArgsToParse = function getArgsToParse(message) {
    return message.match(/{{[^{}][\w\.]*}}/g);
};
var getArgPath = function getArgPath(arg) {
    return arg.replace(/[{}]/g, "");
};
var parseMessage = function parseMessage(message, customArgs) {
    var parsableArgs = getArgsToParse(message);
    return Array.isArray(parsableArgs) ? parsableArgs.reduce(function(customMessage, arg) {
        return customMessage.replace(arg, get_1(customArgs, getArgPath(arg), arg));
    }, message) : message;
};
var parseMessageWithCustomArgs = function parseMessageWithCustomArgs(message, customArgs) {
    return message ? parseMessage(message, customArgs) : "";
};
var VALIDATOR_TYPE$4 = "REQUIRED";
var defaultMessage$4 = "Please fill in this mandatory field.";
var setErrorMessage$4 = function setErrorMessage(message) {
    return defaultMessage$4 = message;
};
var DEFAULT_PARAMS$3 = {
    trim: true
};
var isStringValid = function isStringValid(value, trim) {
    return trim ? value.trim().length > 0 : value.length > 0;
};
var isNonStringValid = function isNonStringValid(value) {
    return value !== void 0 && value !== null;
};
var isValidField$1 = function isValidField(value, trim) {
    return typeof value === "string" ? isStringValid(value, trim) : isNonStringValid(value);
};
var validator$5 = function validator(fieldValidatorArgs) {
    var value = fieldValidatorArgs.value, _fieldValidatorArgs$c = fieldValidatorArgs.customArgs, customArgs = _fieldValidatorArgs$c === void 0 ? DEFAULT_PARAMS$3 : _fieldValidatorArgs$c, _fieldValidatorArgs$m = fieldValidatorArgs.message, message = _fieldValidatorArgs$m === void 0 ? defaultMessage$4 : _fieldValidatorArgs$m;
    var succeeded = isValidField$1(value, Boolean(customArgs.trim));
    return {
        succeeded: succeeded,
        message: succeeded ? "" : parseMessageWithCustomArgs(message, customArgs),
        type: VALIDATOR_TYPE$4
    };
};
var required = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    setErrorMessage: setErrorMessage$4,
    validator: validator$5
});
var isEmptyValue = function isEmptyValue(value) {
    return value === null || value === undefined || value === "";
};
var isValidPattern = function isValidPattern(value, pattern) {
    return isEmptyValue(value) ? true : pattern.test(value);
};
var VALIDATOR_TYPE$3 = "EMAIL";
var defaultMessage$3 = "Please enter a valid email address.";
var setErrorMessage$3 = function setErrorMessage(message) {
    return defaultMessage$3 = message;
};
// RegExp from http://emailregex.com
var EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var isValidField = function isValidField(value) {
    return isValidPattern(value, EMAIL_PATTERN);
};
var validator$4 = function validator(fieldValidatorArgs) {
    var value = fieldValidatorArgs.value, _fieldValidatorArgs$m = fieldValidatorArgs.message, message = _fieldValidatorArgs$m === void 0 ? defaultMessage$3 : _fieldValidatorArgs$m;
    var succeeded = isValidField(value);
    return {
        succeeded: succeeded,
        message: succeeded ? "" : message,
        type: VALIDATOR_TYPE$3
    };
};
var email = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    setErrorMessage: setErrorMessage$3,
    validator: validator$4
});
var VALIDATOR_TYPE$2 = "PATTERN";
var defaultMessage$2 = "Please provide a valid format.";
var setErrorMessage$2 = function setErrorMessage(message) {
    return defaultMessage$2 = message;
};
var BAD_PARAMETER$2 = "FieldValidationError: pattern option for pattern validation is mandatory. Example: { pattern: /d+/ }.";
var DEFAULT_PARAMS$2 = null;
function getRegExp(pattern) {
    return pattern instanceof RegExp ? pattern : new RegExp(pattern);
}
function parsePattern(_ref) {
    var pattern = _ref.pattern;
    // Avoid RegExp like /true/ /false/ and /null/ without an explicit "true", "false" or "null"
    if (typeof pattern === "boolean" || pattern === null) throw new Error(BAD_PARAMETER$2);
    return getRegExp(pattern);
}
var validator$3 = function validator(fieldValidatorArgs) {
    if (!fieldValidatorArgs.customArgs) throw new Error(BAD_PARAMETER$2);
    var value = fieldValidatorArgs.value, _fieldValidatorArgs$c = fieldValidatorArgs.customArgs, customArgs = _fieldValidatorArgs$c === void 0 ? DEFAULT_PARAMS$2 : _fieldValidatorArgs$c, _fieldValidatorArgs$m = fieldValidatorArgs.message, message = _fieldValidatorArgs$m === void 0 ? defaultMessage$2 : _fieldValidatorArgs$m;
    var pattern = parsePattern(customArgs);
    var succeeded = isValidPattern(value, pattern);
    return {
        succeeded: succeeded,
        message: succeeded ? "" : parseMessageWithCustomArgs(message, customArgs),
        type: VALIDATOR_TYPE$2
    };
};
var pattern = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    setErrorMessage: setErrorMessage$2,
    validator: validator$3
});
function parseLengthParams(customParams, errorMessage) {
    var length = customParams.length === null ? NaN : Number(customParams.length);
    if (isNaN(length)) throw new Error(errorMessage);
    return length;
}
function isLengthValid(value, length, validatorFn) {
    // Don't try to validate non string values
    return typeof value === "string" ? validatorFn(value, length) : true;
}
var VALIDATOR_TYPE$1 = "MIN_LENGTH";
var defaultMessage$1 = "The value provided does not fulfill min length.";
var setErrorMessage$1 = function setErrorMessage(message) {
    return defaultMessage$1 = message;
};
var BAD_PARAMETER$1 = 'FieldValidationError: Parameter "length" for minLength in customArgs is mandatory and should be a valid number. Example: { length: 4 }.';
var DEFAULT_PARAMS$1 = null;
var isStringLengthValid$1 = function isStringLengthValid(value, length) {
    return value.length >= length;
};
var validator$2 = function validator(fieldValidatorArgs) {
    if (!fieldValidatorArgs.customArgs) throw new Error(BAD_PARAMETER$1);
    var value = fieldValidatorArgs.value, _fieldValidatorArgs$c = fieldValidatorArgs.customArgs, customArgs = _fieldValidatorArgs$c === void 0 ? DEFAULT_PARAMS$1 : _fieldValidatorArgs$c, _fieldValidatorArgs$m = fieldValidatorArgs.message, message = _fieldValidatorArgs$m === void 0 ? defaultMessage$1 : _fieldValidatorArgs$m;
    var length = parseLengthParams(customArgs, BAD_PARAMETER$1);
    var succeeded = isLengthValid(value, length, isStringLengthValid$1);
    return {
        succeeded: succeeded,
        message: succeeded ? "" : parseMessageWithCustomArgs(message, customArgs),
        type: VALIDATOR_TYPE$1
    };
};
var minLength = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    setErrorMessage: setErrorMessage$1,
    validator: validator$2
});
var VALIDATOR_TYPE = "MAX_LENGTH";
var defaultMessage = "The value provided does not fulfill max length.";
var setErrorMessage = function setErrorMessage(message) {
    return defaultMessage = message;
};
var BAD_PARAMETER = 'FieldValidationError: Parameter "length" for maxLength in customArgs is mandatory and should be a valid number. Example: { length: 4 }.';
var DEFAULT_PARAMS = null;
var isStringLengthValid = function isStringLengthValid(value, length) {
    return value.length <= length;
};
var validator$1 = function validator(fieldValidatorArgs) {
    if (!fieldValidatorArgs.customArgs) throw new Error(BAD_PARAMETER);
    var value = fieldValidatorArgs.value, _fieldValidatorArgs$c = fieldValidatorArgs.customArgs, customArgs = _fieldValidatorArgs$c === void 0 ? DEFAULT_PARAMS : _fieldValidatorArgs$c, _fieldValidatorArgs$m = fieldValidatorArgs.message, message = _fieldValidatorArgs$m === void 0 ? defaultMessage : _fieldValidatorArgs$m;
    var length = parseLengthParams(customArgs, BAD_PARAMETER);
    var succeeded = isLengthValid(value, length, isStringLengthValid);
    return {
        succeeded: succeeded,
        message: succeeded ? "" : parseMessageWithCustomArgs(message, customArgs),
        type: VALIDATOR_TYPE
    };
};
var maxLength = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    setErrorMessage: setErrorMessage,
    validator: validator$1
});
var createEmptyArrayValidationResult = function createEmptyArrayValidationResult() {
    return {
        succeeded: true,
        arrayErrors: []
    };
};
var validator = function validator(validatorArgs) {
    var value = validatorArgs.value, customArgs = validatorArgs.customArgs;
    var formValidation = createFormValidation(customArgs);
    return reduceAsync(value, function(validationResult, item) {
        return formValidation.validateForm(item).then(function(_ref) {
            var fieldErrors = _ref.fieldErrors, succeeded = _ref.succeeded;
            return {
                succeeded: validationResult.succeeded && succeeded,
                arrayErrors: [].concat(_toConsumableArray(validationResult.arrayErrors), [
                    fieldErrors
                ])
            };
        });
    }, createEmptyArrayValidationResult()).then(function(arrayValidationResult) {
        return {
            succeeded: arrayValidationResult.succeeded,
            type: "ARRAY_VALIDATIONS",
            message: null,
            arrayErrors: arrayValidationResult.arrayErrors
        };
    });
};
var array = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    validator: validator
});
var index = {
    required: required,
    email: email,
    pattern: pattern,
    minLength: minLength,
    maxLength: maxLength,
    array: array
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["iTWJc"], null, "parcelRequire4bdb")

//# sourceMappingURL=property-detail.9bd11c02.js.map
