/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Base Error class.
 */
var InvalidArgumentException = function (_Error) {
  _inherits(InvalidArgumentException, _Error);

  function InvalidArgumentException() {
    _classCallCheck(this, InvalidArgumentException);

    return _possibleConstructorReturn(this, (InvalidArgumentException.__proto__ || Object.getPrototypeOf(InvalidArgumentException)).apply(this, arguments));
  }

  return InvalidArgumentException;
}(Error);

module.exports = InvalidArgumentException;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _UrlGenerator = __webpack_require__(3);

var _UrlGenerator2 = _interopRequireDefault(_UrlGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.UrlGenerator = _UrlGenerator2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__webpack_require__(4);
__webpack_require__(5);

var InvalidParameterException = __webpack_require__(6);
var MissingMandatoryParametersException = __webpack_require__(7);
var RouteNotFoundException = __webpack_require__(8);

var decodedChars = {
    '%2F': '/',
    '%40': '@',
    '%3A': ':',
    '%3B': ';',
    '%2C': ',',
    '%3D': '=',
    '%2B': '+',
    '%21': '!',
    '%2A': '*',
    '%7C': '|'
};

var UrlGenerator = function () {
    function UrlGenerator(routeCollection) {
        _classCallCheck(this, UrlGenerator);

        this._routeCollection = Object.assign({}, routeCollection);

        var scheme = location.protocol.replace(/:$/, '').toLowerCase();
        var isSecure = scheme === 'https';

        this._context = {
            pathinfo: location.pathname,
            host: location.hostname,
            scheme: scheme,
            httpPort: isSecure ? 80 : ~~(location.port || 80),
            httpsPort: isSecure ? ~~(location.port || 443) : 443,
            queryString: location.search.replace(/^\?/, '')
        };
    }

    /**
     * Add routes to router collection.
     *
     * @param {Object<string, Object>} routeCollection
     */


    _createClass(UrlGenerator, [{
        key: 'addRoutes',
        value: function addRoutes(routeCollection) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = Object.entries(routeCollection)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _ref = _step.value;

                    var _ref2 = _slicedToArray(_ref, 2);

                    var name = _ref2[0];
                    var route = _ref2[1];

                    this._routeCollection[name] = route;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }

        /**
         * Generates a URL or path for a specific route based on the given parameters.
         *
         * Parameters that reference placeholders in the route pattern will substitute them in the
         * path or host. Extra params are added as query string to the URL.
         *
         * When the passed reference type cannot be generated for the route because it requires a different
         * host or scheme than the current one, the method will return a more comprehensive reference
         * that includes the required params. For example, when you call this method with referenceType = ABSOLUTE_PATH
         * but the route requires the https scheme whereas the current scheme is http, it will instead return an
         * ABSOLUTE_URL with the https scheme and the current host. This makes sure the generated URL matches
         * the route in any case.
         *
         * Will throw an error if there is no route with the given name
         *
         * The special parameter _fragment will be used as the document fragment suffixed to the final URL.
         *
         * @param {string} name
         * @param {Object<string, *>} parameters
         * @param {int} referenceType
         *
         * @returns {string}
         */

    }, {
        key: 'generate',
        value: function generate(name) {
            var parameters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var referenceType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : UrlGenerator.ABSOLUTE_PATH;

            var route = this._routeCollection[name];
            if (void 0 === route) {
                throw new RouteNotFoundException('Unable to generate a URL for the named route "' + name + '" as such route does not exist.');
            }

            return this._doGenerate(route.variables, route.defaults, route.tokens, parameters, name, referenceType, route.hostTokens, route.schemes);
        }

        /**
         * Do generate an address from route components.
         *
         * @param {string[]} variables
         * @param {Object<string, string>} defaults
         * @param {[[string]]} tokens
         * @param {Object<string, *>} parameters
         * @param {string} name
         * @param {int} referenceType
         * @param {[[string]]} hostTokens
         * @param {string} requiredSchemes
         *
         * @returns {string}
         *
         * @private
         */

    }, {
        key: '_doGenerate',
        value: function _doGenerate(variables, defaults, tokens, parameters, name, referenceType, hostTokens) {
            var requiredSchemes = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : [];

            var mergedParams = Object.assign({}, defaults, parameters);

            var diff = variables.filter(function (name) {
                return !mergedParams.hasOwnProperty(name);
            });
            if (diff.length) {
                throw new MissingMandatoryParametersException('Some mandatory parameters are missing ("' + diff.join('", "') + '") to generate a URL for route "' + name + '".');
            }

            var url = '';
            var optional = true;
            var message = 'Parameter "{parameter}" for route "{route}" must match "{expected}" ("{given}" given) to generate a corresponding URL.';

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = tokens[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var token = _step2.value;

                    if ('variable' === token[0]) {
                        if (!optional || !defaults.hasOwnProperty(token[3]) || void 0 !== mergedParams[token[3]] && mergedParams[token[3]].toString() !== defaults[token[3]].toString()) {
                            var _regex = new RegExp('^' + token[2] + '$', !!token[4] ? 'u' : '');
                            if (!_regex.test(mergedParams[token[3]])) {
                                throw new InvalidParameterException(__jymfony.strtr(message, {
                                    '{parameter}': token[3],
                                    '{route}': name,
                                    '{expected}': token[2],
                                    '{given}': mergedParams[token[3]]
                                }));
                            }

                            url = token[1] + mergedParams[token[3]] + url;
                            optional = false;
                        }
                    } else {
                        url = token[1] + url;
                        optional = false;
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            if (url === '') {
                url = '/';
            }

            url = strtr(encodeURIComponent(url).replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29'), decodedChars);

            // the path segments "." and ".." are interpreted as relative reference when resolving a URI; see http://tools.ietf.org/html/rfc3986#section-3.3
            // so we need to encode them as they are not used for this purpose here
            // otherwise we would generate a URI that, when followed by a user agent (e.g. browser), does not match this route
            url = strtr(url, { '/../': '/%2E%2E/', '/./': '/%2E/' });
            if ('/..' === url.substr(-3)) {
                url = url.substr(0, -2) + '%2E%2E';
            } else if ('/.' === url.substr(-2)) {
                url = url.substr(0, -1) + '%2E';
            }

            var schemeAuthority = '';
            var host = this._context.host;
            if (!!host) {
                var scheme = this._context.scheme;
                if (requiredSchemes.length) {
                    if (requiredSchemes.indexOf(scheme) === -1) {
                        referenceType = UrlGenerator.ABSOLUTE_URL;
                        scheme = requiredSchemes[0];
                    }
                }

                if (hostTokens.length) {
                    var routeHost = '';
                    var _iteratorNormalCompletion3 = true;
                    var _didIteratorError3 = false;
                    var _iteratorError3 = undefined;

                    try {
                        for (var _iterator3 = hostTokens[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                            var _token = _step3.value;

                            if ('variable' === _token[0]) {
                                var regex = new RegExp('^' + _token[2] + '$', !!_token[4] ? 'u' : '');
                                if (!regex.test(mergedParams[_token[3]])) {
                                    throw new InvalidParameterException(__jymfony.strtr(message, {
                                        '{parameter}': _token[3],
                                        '{route}': name,
                                        '{expected}': _token[2],
                                        '{given}': mergedParams[_token[3]]
                                    }));
                                }

                                routeHost = _token[1] + mergedParams[_token[3]] + routeHost;
                            } else {
                                routeHost = _token[1] + routeHost;
                            }
                        }
                    } catch (err) {
                        _didIteratorError3 = true;
                        _iteratorError3 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                _iterator3.return();
                            }
                        } finally {
                            if (_didIteratorError3) {
                                throw _iteratorError3;
                            }
                        }
                    }

                    if (routeHost !== host) {
                        host = routeHost;
                        if (UrlGenerator.ABSOLUTE_URL !== referenceType) {
                            referenceType = UrlGenerator.NETWORK_PATH;
                        }
                    }
                }

                if (UrlGenerator.ABSOLUTE_URL === referenceType || UrlGenerator.NETWORK_PATH === referenceType) {
                    var port = '';
                    if ('http' === scheme && 80 !== this._context.httpPort) {
                        port += ':' + this._context.httpPort;
                    } else if ('https' === scheme && 443 !== this._context.httpsPort) {
                        port += ':' + this._context.httpsPort;
                    }

                    schemeAuthority = UrlGenerator.NETWORK_PATH === referenceType ? '//' : scheme + '://';
                    schemeAuthority += host + port;
                }
            }

            if (UrlGenerator.RELATIVE_PATH === referenceType) {
                url = UrlGenerator.getRelativePath(this._context.pathinfo, url);
            } else {
                url = schemeAuthority + url;
            }

            // add a query string if needed
            var extras = Object.keys(parameters).filter(function (name) {
                if (variables.indexOf(name) !== -1) {
                    return false;
                }

                if (defaults.hasOwnProperty(name)) {
                    return defaults[name] == parameters[name];
                }

                return true;
            });

            // extract fragment
            var fragment = '';
            if (defaults._fragment) {
                fragment = defaults._fragment;
            }

            var idx = void 0;
            if ((idx = extras.indexOf('_fragment')) !== -1) {
                fragment = parameters._fragment;
                delete extras[idx];
            }

            if (extras.length) {
                var query = Object.keys(parameters).filter(function (k) {
                    return extras.indexOf(k) !== -1;
                }).map(function (k) {
                    return encodeURIComponent(k) + '=' + encodeURIComponent(parameters[k]);
                }).join('&');

                url += '?' + __jymfony.strtr(query, { '%2F': '/' });
            }

            if ('' !== fragment) {
                fragment = encodeURIComponent(fragment).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');

                url += '#' + __jymfony.strtr(fragment, { '%2F': '/', '%3F': '?' });
            }

            return url;
        }

        /**
         * Returns the target path as relative reference from the base path.
         *
         * Only the URIs path component (no schema, host etc.) is relevant and must be given, starting with a slash.
         * Both paths must be absolute and not contain relative parts.
         * Relative URLs from one resource to another are useful when generating self-contained downloadable document archives.
         * Furthermore, they can be used to reduce the link size in documents.
         *
         * Example target paths, given a base path of "/a/b/c/d":
         * - "/a/b/c/d"     -> ""
         * - "/a/b/c/"      -> "./"
         * - "/a/b/"        -> "../"
         * - "/a/b/c/other" -> "other"
         * - "/a/x/y"       -> "../../x/y"
         *
         * @param {string} basePath   The base path
         * @param {string} targetPath The target path
         *
         * @returns {string} The relative target path
         */

    }], [{
        key: 'getRelativePath',
        value: function getRelativePath(basePath, targetPath) {
            if (basePath === targetPath) {
                return '';
            }

            var sourceDirs = ('/' === basePath.charAt(0) ? basePath.substr(1) : basePath).split('/');
            var targetDirs = ('/' === targetPath.charAt(0) ? targetPath.substr(1) : targetPath).split('/');

            sourceDirs.pop();
            var targetFile = targetDirs.pop();

            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = __jymfony.getEntries(sourceDirs)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var _ref3 = _step4.value;

                    var _ref4 = _slicedToArray(_ref3, 2);

                    var i = _ref4[0];
                    var dir = _ref4[1];

                    if (targetDirs[i] && dir === targetDirs[i]) {
                        delete sourceDirs[i];
                        delete targetDirs[i];
                    } else {
                        break;
                    }
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }

            targetDirs.push(targetFile);
            var path = '../'.repeat(sourceDirs.length) + targetDirs.join('/');

            // A reference to the same base directory or an empty subdirectory must be prefixed with "./".
            // This also applies to a segment with a colon character (e.g., "file:colon") that cannot be used
            // as the first segment of a relative-path reference, as it would be mistaken for a scheme name
            // (see http://tools.ietf.org/html/rfc3986#section-4.2).
            var colonPos = void 0,
                slashPos = void 0;
            return '' === path || '/' === path.charAt(0) || -1 !== (colonPos = path.indexOf(':')) && (colonPos < (slashPos = path.indexOf('/')) || -1 === slashPos) ? './' + path : path;
        }
    }]);

    return UrlGenerator;
}();

/**
 * Generates an absolute URL, e.g. "http://example.com/dir/file".
 */


UrlGenerator.ABSOLUTE_URL = 0;

/**
 * Generates an absolute path, e.g. "/dir/file".
 */
UrlGenerator.ABSOLUTE_PATH = 1;

/**
 * Generates a relative path based on the current request path, e.g. "../parent-file".
 *
 * @see UrlGenerator.getRelativePath()
 */
UrlGenerator.RELATIVE_PATH = 2;

/**
 * Generates a network path, e.g. "//example.com/dir/file".
 * Such reference reuses the current scheme but specifies the host.
 */
UrlGenerator.NETWORK_PATH = 3;

exports.default = UrlGenerator;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

global.__jymfony = global.__jymfony || {};

/**
 * Get [Key, Value] pairs for an object
 *
 * @param {Object} object
 *
 * @returns {Generator}
 */
var entries = /*#__PURE__*/regeneratorRuntime.mark(function objentries(object) {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, k, key;

    return regeneratorRuntime.wrap(function objentries$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    if (!isArray(object)) {
                        _context.next = 28;
                        break;
                    }

                    _iteratorNormalCompletion = true;
                    _didIteratorError = false;
                    _iteratorError = undefined;
                    _context.prev = 4;
                    _iterator = object.keys()[Symbol.iterator]();

                case 6:
                    if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                        _context.next = 13;
                        break;
                    }

                    k = _step.value;
                    _context.next = 10;
                    return [k, object[k]];

                case 10:
                    _iteratorNormalCompletion = true;
                    _context.next = 6;
                    break;

                case 13:
                    _context.next = 19;
                    break;

                case 15:
                    _context.prev = 15;
                    _context.t0 = _context['catch'](4);
                    _didIteratorError = true;
                    _iteratorError = _context.t0;

                case 19:
                    _context.prev = 19;
                    _context.prev = 20;

                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }

                case 22:
                    _context.prev = 22;

                    if (!_didIteratorError) {
                        _context.next = 25;
                        break;
                    }

                    throw _iteratorError;

                case 25:
                    return _context.finish(22);

                case 26:
                    return _context.finish(19);

                case 27:
                    return _context.abrupt('return');

                case 28:
                    if (!(object instanceof Map)) {
                        _context.next = 30;
                        break;
                    }

                    return _context.abrupt('return', object.entries());

                case 30:
                    if (isObject(object)) {
                        _context.next = 32;
                        break;
                    }

                    throw new InvalidArgumentException('Argument 1 is not an object');

                case 32:
                    if (!Object.entries) {
                        _context.next = 35;
                        break;
                    }

                    return _context.delegateYield(Object.entries(object), 't1', 34);

                case 34:
                    return _context.abrupt('return');

                case 35:
                    _context.t2 = regeneratorRuntime.keys(object);

                case 36:
                    if ((_context.t3 = _context.t2()).done) {
                        _context.next = 44;
                        break;
                    }

                    key = _context.t3.value;

                    if (object.hasOwnProperty(key)) {
                        _context.next = 40;
                        break;
                    }

                    return _context.abrupt('continue', 36);

                case 40:
                    _context.next = 42;
                    return [key, object[key]];

                case 42:
                    _context.next = 36;
                    break;

                case 44:
                case 'end':
                    return _context.stop();
            }
        }
    }, objentries, this, [[4, 15, 19, 27], [20,, 22, 26]]);
});

global.__jymfony.getEntries = entries;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

global.__jymfony = global.__jymfony || {};

global.__jymfony.strtr = function strtr(string, replacePairs) {
    var str = string.toString(),
        re = void 0;

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = __jymfony.getEntries(replacePairs)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ref = _step.value;

            var _ref2 = _slicedToArray(_ref, 2);

            var key = _ref2[0];
            var value = _ref2[1];

            key = key.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
            re = new RegExp(key, 'g');
            str = str.replace(re, value);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return str;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InvalidArgumentException = __webpack_require__(0);

/**
 * Exception thrown when a parameter is not valid.
 */

var InvalidParameterException = function (_InvalidArgumentExcep) {
  _inherits(InvalidParameterException, _InvalidArgumentExcep);

  function InvalidParameterException() {
    _classCallCheck(this, InvalidParameterException);

    return _possibleConstructorReturn(this, (InvalidParameterException.__proto__ || Object.getPrototypeOf(InvalidParameterException)).apply(this, arguments));
  }

  return InvalidParameterException;
}(InvalidArgumentException);

module.exports = InvalidParameterException;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InvalidArgumentException = __webpack_require__(0);

/**
 * Exception thrown when a route cannot be generated because of missing
 * mandatory parameters.
 */

var MissingMandatoryParametersException = function (_InvalidArgumentExcep) {
  _inherits(MissingMandatoryParametersException, _InvalidArgumentExcep);

  function MissingMandatoryParametersException() {
    _classCallCheck(this, MissingMandatoryParametersException);

    return _possibleConstructorReturn(this, (MissingMandatoryParametersException.__proto__ || Object.getPrototypeOf(MissingMandatoryParametersException)).apply(this, arguments));
  }

  return MissingMandatoryParametersException;
}(InvalidArgumentException);

module.exports = MissingMandatoryParametersException;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InvalidArgumentException = __webpack_require__(0);

/**
 * Exception thrown when a route does not exist.
 */

var RouteNotFoundException = function (_InvalidArgumentExcep) {
  _inherits(RouteNotFoundException, _InvalidArgumentExcep);

  function RouteNotFoundException() {
    _classCallCheck(this, RouteNotFoundException);

    return _possibleConstructorReturn(this, (RouteNotFoundException.__proto__ || Object.getPrototypeOf(RouteNotFoundException)).apply(this, arguments));
  }

  return RouteNotFoundException;
}(InvalidArgumentException);

module.exports = RouteNotFoundException;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjEzZGY1MjllZDI0MzBlNDdjYmYiLCJ3ZWJwYWNrOi8vLy4vanMvRXhjZXB0aW9uL0ludmFsaWRBcmd1bWVudEV4Y2VwdGlvbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2pzL1VybEdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGp5bWZvbnkvdXRpbC9saWIvT2JqZWN0L2VudHJpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqeW1mb255L3V0aWwvbGliL1N0cmluZy9zdHJ0ci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9FeGNlcHRpb24vSW52YWxpZFBhcmFtZXRlckV4Y2VwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9FeGNlcHRpb24vTWlzc2luZ01hbmRhdG9yeVBhcmFtZXRlcnNFeGNlcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vanMvRXhjZXB0aW9uL1JvdXRlTm90Rm91bmRFeGNlcHRpb24uanMiXSwibmFtZXMiOlsiSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uIiwiRXJyb3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiZyIsIkZ1bmN0aW9uIiwiZXZhbCIsImUiLCJ3aW5kb3ciLCJVcmxHZW5lcmF0b3IiLCJyZXF1aXJlIiwiSW52YWxpZFBhcmFtZXRlckV4Y2VwdGlvbiIsIk1pc3NpbmdNYW5kYXRvcnlQYXJhbWV0ZXJzRXhjZXB0aW9uIiwiUm91dGVOb3RGb3VuZEV4Y2VwdGlvbiIsImRlY29kZWRDaGFycyIsInJvdXRlQ29sbGVjdGlvbiIsIl9yb3V0ZUNvbGxlY3Rpb24iLCJPYmplY3QiLCJhc3NpZ24iLCJzY2hlbWUiLCJsb2NhdGlvbiIsInByb3RvY29sIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiaXNTZWN1cmUiLCJfY29udGV4dCIsInBhdGhpbmZvIiwicGF0aG5hbWUiLCJob3N0IiwiaG9zdG5hbWUiLCJodHRwUG9ydCIsInBvcnQiLCJodHRwc1BvcnQiLCJxdWVyeVN0cmluZyIsInNlYXJjaCIsImVudHJpZXMiLCJuYW1lIiwicm91dGUiLCJwYXJhbWV0ZXJzIiwicmVmZXJlbmNlVHlwZSIsIkFCU09MVVRFX1BBVEgiLCJfZG9HZW5lcmF0ZSIsInZhcmlhYmxlcyIsImRlZmF1bHRzIiwidG9rZW5zIiwiaG9zdFRva2VucyIsInNjaGVtZXMiLCJyZXF1aXJlZFNjaGVtZXMiLCJtZXJnZWRQYXJhbXMiLCJkaWZmIiwiZmlsdGVyIiwiaGFzT3duUHJvcGVydHkiLCJsZW5ndGgiLCJqb2luIiwidXJsIiwib3B0aW9uYWwiLCJtZXNzYWdlIiwidG9rZW4iLCJ0b1N0cmluZyIsInJlZ2V4IiwiUmVnRXhwIiwidGVzdCIsIl9fanltZm9ueSIsInN0cnRyIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic3Vic3RyIiwic2NoZW1lQXV0aG9yaXR5IiwiaW5kZXhPZiIsIkFCU09MVVRFX1VSTCIsInJvdXRlSG9zdCIsIk5FVFdPUktfUEFUSCIsIlJFTEFUSVZFX1BBVEgiLCJnZXRSZWxhdGl2ZVBhdGgiLCJleHRyYXMiLCJrZXlzIiwiZnJhZ21lbnQiLCJfZnJhZ21lbnQiLCJpZHgiLCJxdWVyeSIsImsiLCJtYXAiLCJiYXNlUGF0aCIsInRhcmdldFBhdGgiLCJzb3VyY2VEaXJzIiwiY2hhckF0Iiwic3BsaXQiLCJ0YXJnZXREaXJzIiwicG9wIiwidGFyZ2V0RmlsZSIsImdldEVudHJpZXMiLCJpIiwiZGlyIiwicHVzaCIsInBhdGgiLCJyZXBlYXQiLCJjb2xvblBvcyIsInNsYXNoUG9zIiwiZ2xvYmFsIiwib2JqZW50cmllcyIsIm9iamVjdCIsImlzQXJyYXkiLCJNYXAiLCJpc09iamVjdCIsImtleSIsInN0cmluZyIsInJlcGxhY2VQYWlycyIsInN0ciIsInJlIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FB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b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiMTNkZjUyOWVkMjQzMGU0N2NiZiIsIi8qKlxuICogQmFzZSBFcnJvciBjbGFzcy5cbiAqL1xuY2xhc3MgSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uIGV4dGVuZHMgRXJyb3Ige1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEludmFsaWRBcmd1bWVudEV4Y2VwdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL0V4Y2VwdGlvbi9JbnZhbGlkQXJndW1lbnRFeGNlcHRpb24uanMiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwiaW1wb3J0IFVybEdlbmVyYXRvciBmcm9tICcuL1VybEdlbmVyYXRvcic7XG53aW5kb3cuVXJsR2VuZXJhdG9yID0gVXJsR2VuZXJhdG9yO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvaW5kZXguanMiLCJyZXF1aXJlKCdAanltZm9ueS91dGlsL2xpYi9PYmplY3QvZW50cmllcycpO1xucmVxdWlyZSgnQGp5bWZvbnkvdXRpbC9saWIvU3RyaW5nL3N0cnRyJyk7XG5cbmNvbnN0IEludmFsaWRQYXJhbWV0ZXJFeGNlcHRpb24gPSByZXF1aXJlKCcuL0V4Y2VwdGlvbi9JbnZhbGlkUGFyYW1ldGVyRXhjZXB0aW9uJyk7XG5jb25zdCBNaXNzaW5nTWFuZGF0b3J5UGFyYW1ldGVyc0V4Y2VwdGlvbiA9IHJlcXVpcmUoJy4vRXhjZXB0aW9uL01pc3NpbmdNYW5kYXRvcnlQYXJhbWV0ZXJzRXhjZXB0aW9uJyk7XG5jb25zdCBSb3V0ZU5vdEZvdW5kRXhjZXB0aW9uID0gcmVxdWlyZSgnLi9FeGNlcHRpb24vUm91dGVOb3RGb3VuZEV4Y2VwdGlvbicpO1xuXG5jb25zdCBkZWNvZGVkQ2hhcnMgPSB7XG4gICAgJyUyRic6ICcvJyxcbiAgICAnJTQwJzogJ0AnLFxuICAgICclM0EnOiAnOicsXG4gICAgJyUzQic6ICc7JyxcbiAgICAnJTJDJzogJywnLFxuICAgICclM0QnOiAnPScsXG4gICAgJyUyQic6ICcrJyxcbiAgICAnJTIxJzogJyEnLFxuICAgICclMkEnOiAnKicsXG4gICAgJyU3Qyc6ICd8Jyxcbn07XG5cbmNsYXNzIFVybEdlbmVyYXRvciB7XG4gICAgY29uc3RydWN0b3Iocm91dGVDb2xsZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuX3JvdXRlQ29sbGVjdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIHJvdXRlQ29sbGVjdGlvbik7XG5cbiAgICAgICAgY29uc3Qgc2NoZW1lID0gbG9jYXRpb24ucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgaXNTZWN1cmUgPSBzY2hlbWUgPT09ICdodHRwcyc7XG5cbiAgICAgICAgdGhpcy5fY29udGV4dCA9IHtcbiAgICAgICAgICAgIHBhdGhpbmZvOiBsb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgICAgIGhvc3Q6IGxvY2F0aW9uLmhvc3RuYW1lLFxuICAgICAgICAgICAgc2NoZW1lLFxuICAgICAgICAgICAgaHR0cFBvcnQ6IGlzU2VjdXJlID8gODAgOiB+fihsb2NhdGlvbi5wb3J0IHx8IDgwKSxcbiAgICAgICAgICAgIGh0dHBzUG9ydDogaXNTZWN1cmUgPyB+fihsb2NhdGlvbi5wb3J0IHx8IDQ0MykgOiA0NDMsXG4gICAgICAgICAgICBxdWVyeVN0cmluZzogbG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJyksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIHJvdXRlcyB0byByb3V0ZXIgY29sbGVjdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgT2JqZWN0Pn0gcm91dGVDb2xsZWN0aW9uXG4gICAgICovXG4gICAgYWRkUm91dGVzKHJvdXRlQ29sbGVjdGlvbikge1xuICAgICAgICBmb3IgKGNvbnN0IFsgbmFtZSwgcm91dGUgXSBvZiBPYmplY3QuZW50cmllcyhyb3V0ZUNvbGxlY3Rpb24pKSB7XG4gICAgICAgICAgICB0aGlzLl9yb3V0ZUNvbGxlY3Rpb25bbmFtZV0gPSByb3V0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIFVSTCBvciBwYXRoIGZvciBhIHNwZWNpZmljIHJvdXRlIGJhc2VkIG9uIHRoZSBnaXZlbiBwYXJhbWV0ZXJzLlxuICAgICAqXG4gICAgICogUGFyYW1ldGVycyB0aGF0IHJlZmVyZW5jZSBwbGFjZWhvbGRlcnMgaW4gdGhlIHJvdXRlIHBhdHRlcm4gd2lsbCBzdWJzdGl0dXRlIHRoZW0gaW4gdGhlXG4gICAgICogcGF0aCBvciBob3N0LiBFeHRyYSBwYXJhbXMgYXJlIGFkZGVkIGFzIHF1ZXJ5IHN0cmluZyB0byB0aGUgVVJMLlxuICAgICAqXG4gICAgICogV2hlbiB0aGUgcGFzc2VkIHJlZmVyZW5jZSB0eXBlIGNhbm5vdCBiZSBnZW5lcmF0ZWQgZm9yIHRoZSByb3V0ZSBiZWNhdXNlIGl0IHJlcXVpcmVzIGEgZGlmZmVyZW50XG4gICAgICogaG9zdCBvciBzY2hlbWUgdGhhbiB0aGUgY3VycmVudCBvbmUsIHRoZSBtZXRob2Qgd2lsbCByZXR1cm4gYSBtb3JlIGNvbXByZWhlbnNpdmUgcmVmZXJlbmNlXG4gICAgICogdGhhdCBpbmNsdWRlcyB0aGUgcmVxdWlyZWQgcGFyYW1zLiBGb3IgZXhhbXBsZSwgd2hlbiB5b3UgY2FsbCB0aGlzIG1ldGhvZCB3aXRoIHJlZmVyZW5jZVR5cGUgPSBBQlNPTFVURV9QQVRIXG4gICAgICogYnV0IHRoZSByb3V0ZSByZXF1aXJlcyB0aGUgaHR0cHMgc2NoZW1lIHdoZXJlYXMgdGhlIGN1cnJlbnQgc2NoZW1lIGlzIGh0dHAsIGl0IHdpbGwgaW5zdGVhZCByZXR1cm4gYW5cbiAgICAgKiBBQlNPTFVURV9VUkwgd2l0aCB0aGUgaHR0cHMgc2NoZW1lIGFuZCB0aGUgY3VycmVudCBob3N0LiBUaGlzIG1ha2VzIHN1cmUgdGhlIGdlbmVyYXRlZCBVUkwgbWF0Y2hlc1xuICAgICAqIHRoZSByb3V0ZSBpbiBhbnkgY2FzZS5cbiAgICAgKlxuICAgICAqIFdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgdGhlcmUgaXMgbm8gcm91dGUgd2l0aCB0aGUgZ2l2ZW4gbmFtZVxuICAgICAqXG4gICAgICogVGhlIHNwZWNpYWwgcGFyYW1ldGVyIF9mcmFnbWVudCB3aWxsIGJlIHVzZWQgYXMgdGhlIGRvY3VtZW50IGZyYWdtZW50IHN1ZmZpeGVkIHRvIHRoZSBmaW5hbCBVUkwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgKj59IHBhcmFtZXRlcnNcbiAgICAgKiBAcGFyYW0ge2ludH0gcmVmZXJlbmNlVHlwZVxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZW5lcmF0ZShuYW1lLCBwYXJhbWV0ZXJzID0ge30sIHJlZmVyZW5jZVR5cGUgPSBVcmxHZW5lcmF0b3IuQUJTT0xVVEVfUEFUSCkge1xuICAgICAgICBjb25zdCByb3V0ZSA9IHRoaXMuX3JvdXRlQ29sbGVjdGlvbltuYW1lXTtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSb3V0ZU5vdEZvdW5kRXhjZXB0aW9uKGBVbmFibGUgdG8gZ2VuZXJhdGUgYSBVUkwgZm9yIHRoZSBuYW1lZCByb3V0ZSBcIiR7bmFtZX1cIiBhcyBzdWNoIHJvdXRlIGRvZXMgbm90IGV4aXN0LmApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2RvR2VuZXJhdGUoXG4gICAgICAgICAgICByb3V0ZS52YXJpYWJsZXMsXG4gICAgICAgICAgICByb3V0ZS5kZWZhdWx0cyxcbiAgICAgICAgICAgIHJvdXRlLnRva2VucyxcbiAgICAgICAgICAgIHBhcmFtZXRlcnMsXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgcmVmZXJlbmNlVHlwZSxcbiAgICAgICAgICAgIHJvdXRlLmhvc3RUb2tlbnMsXG4gICAgICAgICAgICByb3V0ZS5zY2hlbWVzXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRG8gZ2VuZXJhdGUgYW4gYWRkcmVzcyBmcm9tIHJvdXRlIGNvbXBvbmVudHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ1tdfSB2YXJpYWJsZXNcbiAgICAgKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIHN0cmluZz59IGRlZmF1bHRzXG4gICAgICogQHBhcmFtIHtbW3N0cmluZ11dfSB0b2tlbnNcbiAgICAgKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsICo+fSBwYXJhbWV0ZXJzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge2ludH0gcmVmZXJlbmNlVHlwZVxuICAgICAqIEBwYXJhbSB7W1tzdHJpbmddXX0gaG9zdFRva2Vuc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSByZXF1aXJlZFNjaGVtZXNcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9kb0dlbmVyYXRlKHZhcmlhYmxlcywgZGVmYXVsdHMsIHRva2VucywgcGFyYW1ldGVycywgbmFtZSwgcmVmZXJlbmNlVHlwZSwgaG9zdFRva2VucywgcmVxdWlyZWRTY2hlbWVzID0gW10pIHtcbiAgICAgICAgY29uc3QgbWVyZ2VkUGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdHMsIHBhcmFtZXRlcnMpO1xuXG4gICAgICAgIGNvbnN0IGRpZmYgPSB2YXJpYWJsZXMuZmlsdGVyKG5hbWUgPT4gIW1lcmdlZFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSk7XG4gICAgICAgIGlmIChkaWZmLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IE1pc3NpbmdNYW5kYXRvcnlQYXJhbWV0ZXJzRXhjZXB0aW9uKGBTb21lIG1hbmRhdG9yeSBwYXJhbWV0ZXJzIGFyZSBtaXNzaW5nIChcIiR7ZGlmZi5qb2luKCdcIiwgXCInKX1cIikgdG8gZ2VuZXJhdGUgYSBVUkwgZm9yIHJvdXRlIFwiJHtuYW1lfVwiLmApXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdXJsID0gJyc7XG4gICAgICAgIGxldCBvcHRpb25hbCA9IHRydWU7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnUGFyYW1ldGVyIFwie3BhcmFtZXRlcn1cIiBmb3Igcm91dGUgXCJ7cm91dGV9XCIgbXVzdCBtYXRjaCBcIntleHBlY3RlZH1cIiAoXCJ7Z2l2ZW59XCIgZ2l2ZW4pIHRvIGdlbmVyYXRlIGEgY29ycmVzcG9uZGluZyBVUkwuJztcblxuICAgICAgICBmb3IgKGNvbnN0IHRva2VuIG9mIHRva2Vucykge1xuICAgICAgICAgICAgaWYgKCd2YXJpYWJsZScgPT09IHRva2VuWzBdKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFvcHRpb25hbCB8fCAhZGVmYXVsdHMuaGFzT3duUHJvcGVydHkodG9rZW5bM10pIHx8IHZvaWQgMCAhPT0gbWVyZ2VkUGFyYW1zW3Rva2VuWzNdXSAmJiBtZXJnZWRQYXJhbXNbdG9rZW5bM11dLnRvU3RyaW5nKCkgIT09IGRlZmF1bHRzW3Rva2VuWzNdXS50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXicgKyB0b2tlblsyXSArICckJywgISF0b2tlbls0XSA/ICd1JyA6ICcnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEgcmVnZXgudGVzdChtZXJnZWRQYXJhbXNbdG9rZW5bM11dKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEludmFsaWRQYXJhbWV0ZXJFeGNlcHRpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX19qeW1mb255LnN0cnRyKG1lc3NhZ2UsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3twYXJhbWV0ZXJ9JzogdG9rZW5bM10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd7cm91dGV9JzogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3tleHBlY3RlZH0nOiB0b2tlblsyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3tnaXZlbn0nOiBtZXJnZWRQYXJhbXNbdG9rZW5bM11dXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB1cmwgPSB0b2tlblsxXSArIG1lcmdlZFBhcmFtc1t0b2tlblszXV0gKyB1cmw7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1cmwgPSB0b2tlblsxXSArIHVybDtcbiAgICAgICAgICAgICAgICBvcHRpb25hbCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHVybCA9PT0gJycpIHtcbiAgICAgICAgICAgIHVybCA9ICcvJztcbiAgICAgICAgfVxuXG4gICAgICAgIHVybCA9IHN0cnRyKFxuICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHVybClcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvJy9nLCAnJTI3JylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwoL2csICclMjgnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXCkvZywgJyUyOScpLFxuICAgICAgICAgICAgZGVjb2RlZENoYXJzXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gdGhlIHBhdGggc2VnbWVudHMgXCIuXCIgYW5kIFwiLi5cIiBhcmUgaW50ZXJwcmV0ZWQgYXMgcmVsYXRpdmUgcmVmZXJlbmNlIHdoZW4gcmVzb2x2aW5nIGEgVVJJOyBzZWUgaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTMuM1xuICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIGVuY29kZSB0aGVtIGFzIHRoZXkgYXJlIG5vdCB1c2VkIGZvciB0aGlzIHB1cnBvc2UgaGVyZVxuICAgICAgICAvLyBvdGhlcndpc2Ugd2Ugd291bGQgZ2VuZXJhdGUgYSBVUkkgdGhhdCwgd2hlbiBmb2xsb3dlZCBieSBhIHVzZXIgYWdlbnQgKGUuZy4gYnJvd3NlciksIGRvZXMgbm90IG1hdGNoIHRoaXMgcm91dGVcbiAgICAgICAgdXJsID0gc3RydHIodXJsLCB7Jy8uLi8nOiAnLyUyRSUyRS8nLCAnLy4vJzogJy8lMkUvJ30pO1xuICAgICAgICBpZiAoJy8uLicgPT09IHVybC5zdWJzdHIoLTMpKSB7XG4gICAgICAgICAgICB1cmwgPSB1cmwuc3Vic3RyKDAsIC0yKSArICclMkUlMkUnO1xuICAgICAgICB9IGVsc2UgaWYgKCcvLicgPT09IHVybC5zdWJzdHIoLTIpKSB7XG4gICAgICAgICAgICB1cmwgPSB1cmwuc3Vic3RyKDAsIC0xKSArICclMkUnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNjaGVtZUF1dGhvcml0eSA9ICcnO1xuICAgICAgICBsZXQgaG9zdCA9IHRoaXMuX2NvbnRleHQuaG9zdDtcbiAgICAgICAgaWYgKCEhIGhvc3QpIHtcbiAgICAgICAgICAgIGxldCBzY2hlbWUgPSB0aGlzLl9jb250ZXh0LnNjaGVtZTtcbiAgICAgICAgICAgIGlmIChyZXF1aXJlZFNjaGVtZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkU2NoZW1lcy5pbmRleE9mKHNjaGVtZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZVR5cGUgPSBVcmxHZW5lcmF0b3IuQUJTT0xVVEVfVVJMO1xuICAgICAgICAgICAgICAgICAgICBzY2hlbWUgPSByZXF1aXJlZFNjaGVtZXNbMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaG9zdFRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsZXQgcm91dGVIb3N0ID0gJyc7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCB0b2tlbiBvZiBob3N0VG9rZW5zKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgndmFyaWFibGUnID09PSB0b2tlblswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCdeJyArIHRva2VuWzJdICsgJyQnLCAhIXRva2VuWzRdID8gJ3UnIDogJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEgcmVnZXgudGVzdChtZXJnZWRQYXJhbXNbdG9rZW5bM11dKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBJbnZhbGlkUGFyYW1ldGVyRXhjZXB0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX2p5bWZvbnkuc3RydHIobWVzc2FnZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3twYXJhbWV0ZXJ9JzogdG9rZW5bM10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAne3JvdXRlfSc6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAne2V4cGVjdGVkfSc6IHRva2VuWzJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3tnaXZlbn0nOiBtZXJnZWRQYXJhbXNbdG9rZW5bM11dXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVIb3N0ID0gdG9rZW5bMV0gKyBtZXJnZWRQYXJhbXNbdG9rZW5bM11dICsgcm91dGVIb3N0O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVIb3N0ID0gdG9rZW5bMV0gKyByb3V0ZUhvc3Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocm91dGVIb3N0ICE9PSBob3N0KSB7XG4gICAgICAgICAgICAgICAgICAgIGhvc3QgPSByb3V0ZUhvc3Q7XG4gICAgICAgICAgICAgICAgICAgIGlmIChVcmxHZW5lcmF0b3IuQUJTT0xVVEVfVVJMICE9PSByZWZlcmVuY2VUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2VUeXBlID0gVXJsR2VuZXJhdG9yLk5FVFdPUktfUEFUSDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFVybEdlbmVyYXRvci5BQlNPTFVURV9VUkwgPT09IHJlZmVyZW5jZVR5cGUgfHwgVXJsR2VuZXJhdG9yLk5FVFdPUktfUEFUSCA9PT0gcmVmZXJlbmNlVHlwZSkge1xuICAgICAgICAgICAgICAgIGxldCBwb3J0ID0gJyc7XG4gICAgICAgICAgICAgICAgaWYgKCdodHRwJyA9PT0gc2NoZW1lICYmIDgwICE9PSB0aGlzLl9jb250ZXh0Lmh0dHBQb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcnQgKz0gJzonICsgdGhpcy5fY29udGV4dC5odHRwUG9ydDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCdodHRwcycgPT09IHNjaGVtZSAmJiA0NDMgIT09IHRoaXMuX2NvbnRleHQuaHR0cHNQb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcnQgKz0gJzonICsgdGhpcy5fY29udGV4dC5odHRwc1BvcnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2NoZW1lQXV0aG9yaXR5ID0gVXJsR2VuZXJhdG9yLk5FVFdPUktfUEFUSCA9PT0gcmVmZXJlbmNlVHlwZSA/ICcvLycgOiBgJHtzY2hlbWV9Oi8vYDtcbiAgICAgICAgICAgICAgICBzY2hlbWVBdXRob3JpdHkgKz0gaG9zdCArIHBvcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVXJsR2VuZXJhdG9yLlJFTEFUSVZFX1BBVEggPT09IHJlZmVyZW5jZVR5cGUpIHtcbiAgICAgICAgICAgIHVybCA9IFVybEdlbmVyYXRvci5nZXRSZWxhdGl2ZVBhdGgodGhpcy5fY29udGV4dC5wYXRoaW5mbywgdXJsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVybCA9IHNjaGVtZUF1dGhvcml0eSArIHVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCBhIHF1ZXJ5IHN0cmluZyBpZiBuZWVkZWRcbiAgICAgICAgY29uc3QgZXh0cmFzID0gT2JqZWN0LmtleXMocGFyYW1ldGVycylcbiAgICAgICAgICAgIC5maWx0ZXIobmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhcmlhYmxlcy5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGRlZmF1bHRzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWZhdWx0c1tuYW1lXSA9PSBwYXJhbWV0ZXJzW25hbWVdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gZXh0cmFjdCBmcmFnbWVudFxuICAgICAgICBsZXQgZnJhZ21lbnQgPSAnJztcbiAgICAgICAgaWYgKGRlZmF1bHRzLl9mcmFnbWVudCkge1xuICAgICAgICAgICAgZnJhZ21lbnQgPSBkZWZhdWx0cy5fZnJhZ21lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaWR4O1xuICAgICAgICBpZiAoKGlkeCA9IGV4dHJhcy5pbmRleE9mKCdfZnJhZ21lbnQnKSkgIT09IC0xKSB7XG4gICAgICAgICAgICBmcmFnbWVudCA9IHBhcmFtZXRlcnMuX2ZyYWdtZW50O1xuICAgICAgICAgICAgZGVsZXRlIGV4dHJhc1tpZHhdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV4dHJhcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gT2JqZWN0LmtleXMocGFyYW1ldGVycylcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGsgPT4gZXh0cmFzLmluZGV4T2YoaykgIT09IC0xKVxuICAgICAgICAgICAgICAgIC5tYXAoayA9PiBlbmNvZGVVUklDb21wb25lbnQoaykgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1ldGVyc1trXSkpXG4gICAgICAgICAgICAgICAgLmpvaW4oJyYnKTtcblxuICAgICAgICAgICAgdXJsICs9ICc/JyArIF9fanltZm9ueS5zdHJ0cihxdWVyeSwgeyclMkYnOiAnLyd9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgnJyAhPT0gZnJhZ21lbnQpIHtcbiAgICAgICAgICAgIGZyYWdtZW50ID0gZW5jb2RlVVJJQ29tcG9uZW50KGZyYWdtZW50KVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8hL2csICclMjEnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csICclMjcnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXCgvZywgJyUyOCcpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcKS9nLCAnJTI5JylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwqL2csICclMkEnKTtcblxuICAgICAgICAgICAgdXJsICs9ICcjJyArIF9fanltZm9ueS5zdHJ0cihmcmFnbWVudCwgeyclMkYnOiAnLycsICclM0YnOiAnPyd9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdGFyZ2V0IHBhdGggYXMgcmVsYXRpdmUgcmVmZXJlbmNlIGZyb20gdGhlIGJhc2UgcGF0aC5cbiAgICAgKlxuICAgICAqIE9ubHkgdGhlIFVSSXMgcGF0aCBjb21wb25lbnQgKG5vIHNjaGVtYSwgaG9zdCBldGMuKSBpcyByZWxldmFudCBhbmQgbXVzdCBiZSBnaXZlbiwgc3RhcnRpbmcgd2l0aCBhIHNsYXNoLlxuICAgICAqIEJvdGggcGF0aHMgbXVzdCBiZSBhYnNvbHV0ZSBhbmQgbm90IGNvbnRhaW4gcmVsYXRpdmUgcGFydHMuXG4gICAgICogUmVsYXRpdmUgVVJMcyBmcm9tIG9uZSByZXNvdXJjZSB0byBhbm90aGVyIGFyZSB1c2VmdWwgd2hlbiBnZW5lcmF0aW5nIHNlbGYtY29udGFpbmVkIGRvd25sb2FkYWJsZSBkb2N1bWVudCBhcmNoaXZlcy5cbiAgICAgKiBGdXJ0aGVybW9yZSwgdGhleSBjYW4gYmUgdXNlZCB0byByZWR1Y2UgdGhlIGxpbmsgc2l6ZSBpbiBkb2N1bWVudHMuXG4gICAgICpcbiAgICAgKiBFeGFtcGxlIHRhcmdldCBwYXRocywgZ2l2ZW4gYSBiYXNlIHBhdGggb2YgXCIvYS9iL2MvZFwiOlxuICAgICAqIC0gXCIvYS9iL2MvZFwiICAgICAtPiBcIlwiXG4gICAgICogLSBcIi9hL2IvYy9cIiAgICAgIC0+IFwiLi9cIlxuICAgICAqIC0gXCIvYS9iL1wiICAgICAgICAtPiBcIi4uL1wiXG4gICAgICogLSBcIi9hL2IvYy9vdGhlclwiIC0+IFwib3RoZXJcIlxuICAgICAqIC0gXCIvYS94L3lcIiAgICAgICAtPiBcIi4uLy4uL3gveVwiXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYmFzZVBhdGggICBUaGUgYmFzZSBwYXRoXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRhcmdldFBhdGggVGhlIHRhcmdldCBwYXRoXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcmVsYXRpdmUgdGFyZ2V0IHBhdGhcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UmVsYXRpdmVQYXRoKGJhc2VQYXRoLCB0YXJnZXRQYXRoKSB7XG4gICAgICAgIGlmIChiYXNlUGF0aCA9PT0gdGFyZ2V0UGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc291cmNlRGlycyA9ICgnLycgPT09IGJhc2VQYXRoLmNoYXJBdCgwKSA/IGJhc2VQYXRoLnN1YnN0cigxKSA6IGJhc2VQYXRoKS5zcGxpdCgnLycpO1xuICAgICAgICBjb25zdCB0YXJnZXREaXJzID0gKCcvJyA9PT0gdGFyZ2V0UGF0aC5jaGFyQXQoMCkgPyB0YXJnZXRQYXRoLnN1YnN0cigxKSA6IHRhcmdldFBhdGgpLnNwbGl0KCcvJyk7XG5cbiAgICAgICAgc291cmNlRGlycy5wb3AoKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0RmlsZSA9IHRhcmdldERpcnMucG9wKCk7XG5cbiAgICAgICAgZm9yIChjb25zdCBbIGksIGRpciBdIG9mIF9fanltZm9ueS5nZXRFbnRyaWVzKHNvdXJjZURpcnMpKSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0RGlyc1tpXSAmJiBkaXIgPT09IHRhcmdldERpcnNbaV0pIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgc291cmNlRGlyc1tpXTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGFyZ2V0RGlyc1tpXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXREaXJzLnB1c2godGFyZ2V0RmlsZSk7XG4gICAgICAgIGNvbnN0IHBhdGggPSAnLi4vJy5yZXBlYXQoc291cmNlRGlycy5sZW5ndGgpICsgdGFyZ2V0RGlycy5qb2luKCcvJyk7XG5cbiAgICAgICAgLy8gQSByZWZlcmVuY2UgdG8gdGhlIHNhbWUgYmFzZSBkaXJlY3Rvcnkgb3IgYW4gZW1wdHkgc3ViZGlyZWN0b3J5IG11c3QgYmUgcHJlZml4ZWQgd2l0aCBcIi4vXCIuXG4gICAgICAgIC8vIFRoaXMgYWxzbyBhcHBsaWVzIHRvIGEgc2VnbWVudCB3aXRoIGEgY29sb24gY2hhcmFjdGVyIChlLmcuLCBcImZpbGU6Y29sb25cIikgdGhhdCBjYW5ub3QgYmUgdXNlZFxuICAgICAgICAvLyBhcyB0aGUgZmlyc3Qgc2VnbWVudCBvZiBhIHJlbGF0aXZlLXBhdGggcmVmZXJlbmNlLCBhcyBpdCB3b3VsZCBiZSBtaXN0YWtlbiBmb3IgYSBzY2hlbWUgbmFtZVxuICAgICAgICAvLyAoc2VlIGh0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi00LjIpLlxuICAgICAgICBsZXQgY29sb25Qb3MsIHNsYXNoUG9zO1xuICAgICAgICByZXR1cm4gJycgPT09IHBhdGggfHwgJy8nID09PSBwYXRoLmNoYXJBdCgwKVxuICAgICAgICAgICAgfHwgLTEgIT09IChjb2xvblBvcyA9IHBhdGguaW5kZXhPZignOicpKSAmJiAoY29sb25Qb3MgPCAoc2xhc2hQb3MgPSBwYXRoLmluZGV4T2YoJy8nKSkgfHwgLTEgPT09IHNsYXNoUG9zKVxuICAgICAgICAgICAgPyBgLi8ke3BhdGh9YCA6IHBhdGg7XG4gICAgfVxufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhbiBhYnNvbHV0ZSBVUkwsIGUuZy4gXCJodHRwOi8vZXhhbXBsZS5jb20vZGlyL2ZpbGVcIi5cbiAqL1xuVXJsR2VuZXJhdG9yLkFCU09MVVRFX1VSTCA9IDA7XG5cbi8qKlxuICogR2VuZXJhdGVzIGFuIGFic29sdXRlIHBhdGgsIGUuZy4gXCIvZGlyL2ZpbGVcIi5cbiAqL1xuVXJsR2VuZXJhdG9yLkFCU09MVVRFX1BBVEggPSAxO1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHJlbGF0aXZlIHBhdGggYmFzZWQgb24gdGhlIGN1cnJlbnQgcmVxdWVzdCBwYXRoLCBlLmcuIFwiLi4vcGFyZW50LWZpbGVcIi5cbiAqXG4gKiBAc2VlIFVybEdlbmVyYXRvci5nZXRSZWxhdGl2ZVBhdGgoKVxuICovXG5VcmxHZW5lcmF0b3IuUkVMQVRJVkVfUEFUSCA9IDI7XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgbmV0d29yayBwYXRoLCBlLmcuIFwiLy9leGFtcGxlLmNvbS9kaXIvZmlsZVwiLlxuICogU3VjaCByZWZlcmVuY2UgcmV1c2VzIHRoZSBjdXJyZW50IHNjaGVtZSBidXQgc3BlY2lmaWVzIHRoZSBob3N0LlxuICovXG5VcmxHZW5lcmF0b3IuTkVUV09SS19QQVRIID0gMztcblxuZXhwb3J0IGRlZmF1bHQgVXJsR2VuZXJhdG9yO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvVXJsR2VuZXJhdG9yLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5nbG9iYWwuX19qeW1mb255ID0gZ2xvYmFsLl9fanltZm9ueSB8fCB7fTtcblxuLyoqXG4gKiBHZXQgW0tleSwgVmFsdWVdIHBhaXJzIGZvciBhbiBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0XG4gKlxuICogQHJldHVybnMge0dlbmVyYXRvcn1cbiAqL1xuY29uc3QgZW50cmllcyA9IGZ1bmN0aW9uICogb2JqZW50cmllcyhvYmplY3QpIHtcbiAgICBpZiAoaXNBcnJheShvYmplY3QpKSB7XG4gICAgICAgIGZvciAoY29uc3QgayBvZiBvYmplY3Qua2V5cygpKSB7XG4gICAgICAgICAgICB5aWVsZCBbIGssIG9iamVjdFtrXSBdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBNYXApIHtcbiAgICAgICAgcmV0dXJuIG9iamVjdC5lbnRyaWVzKCk7XG4gICAgfVxuXG4gICAgaWYgKCEgaXNPYmplY3Qob2JqZWN0KSkge1xuICAgICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uKCdBcmd1bWVudCAxIGlzIG5vdCBhbiBvYmplY3QnKTtcbiAgICB9XG5cbiAgICBpZiAoT2JqZWN0LmVudHJpZXMpIHtcbiAgICAgICAgeWllbGQgKiBPYmplY3QuZW50cmllcyhvYmplY3QpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgIGlmICghIG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHlpZWxkIFsga2V5LCBvYmplY3Rba2V5XSBdO1xuICAgIH1cbn07XG5cbmdsb2JhbC5fX2p5bWZvbnkuZ2V0RW50cmllcyA9IGVudHJpZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvQGp5bWZvbnkvdXRpbC9saWIvT2JqZWN0L2VudHJpZXMuanMiLCIndXNlIHN0cmljdCc7XG5cbmdsb2JhbC5fX2p5bWZvbnkgPSBnbG9iYWwuX19qeW1mb255IHx8IHt9O1xuXG5nbG9iYWwuX19qeW1mb255LnN0cnRyID0gZnVuY3Rpb24gc3RydHIoc3RyaW5nLCByZXBsYWNlUGFpcnMpIHtcbiAgICBsZXQgc3RyID0gc3RyaW5nLnRvU3RyaW5nKCksIHJlO1xuXG4gICAgZm9yIChsZXQgWyBrZXksIHZhbHVlIF0gb2YgX19qeW1mb255LmdldEVudHJpZXMocmVwbGFjZVBhaXJzKSkge1xuICAgICAgICBrZXkgPSBrZXkucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy5dL2csICdcXFxcJCYnKTtcbiAgICAgICAgcmUgPSBuZXcgUmVnRXhwKGtleSwgJ2cnKTtcbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UocmUsIHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9AanltZm9ueS91dGlsL2xpYi9TdHJpbmcvc3RydHIuanMiLCJjb25zdCBJbnZhbGlkQXJndW1lbnRFeGNlcHRpb24gPSByZXF1aXJlKCcuL0ludmFsaWRBcmd1bWVudEV4Y2VwdGlvbicpO1xuXG4vKipcbiAqIEV4Y2VwdGlvbiB0aHJvd24gd2hlbiBhIHBhcmFtZXRlciBpcyBub3QgdmFsaWQuXG4gKi9cbmNsYXNzIEludmFsaWRQYXJhbWV0ZXJFeGNlcHRpb24gZXh0ZW5kcyBJbnZhbGlkQXJndW1lbnRFeGNlcHRpb24ge1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEludmFsaWRQYXJhbWV0ZXJFeGNlcHRpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9FeGNlcHRpb24vSW52YWxpZFBhcmFtZXRlckV4Y2VwdGlvbi5qcyIsImNvbnN0IEludmFsaWRBcmd1bWVudEV4Y2VwdGlvbiA9IHJlcXVpcmUoJy4vSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uJyk7XG5cbi8qKlxuICogRXhjZXB0aW9uIHRocm93biB3aGVuIGEgcm91dGUgY2Fubm90IGJlIGdlbmVyYXRlZCBiZWNhdXNlIG9mIG1pc3NpbmdcbiAqIG1hbmRhdG9yeSBwYXJhbWV0ZXJzLlxuICovXG5jbGFzcyBNaXNzaW5nTWFuZGF0b3J5UGFyYW1ldGVyc0V4Y2VwdGlvbiBleHRlbmRzIEludmFsaWRBcmd1bWVudEV4Y2VwdGlvbiB7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWlzc2luZ01hbmRhdG9yeVBhcmFtZXRlcnNFeGNlcHRpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9FeGNlcHRpb24vTWlzc2luZ01hbmRhdG9yeVBhcmFtZXRlcnNFeGNlcHRpb24uanMiLCJjb25zdCBJbnZhbGlkQXJndW1lbnRFeGNlcHRpb24gPSByZXF1aXJlKCcuL0ludmFsaWRBcmd1bWVudEV4Y2VwdGlvbicpO1xuXG4vKipcbiAqIEV4Y2VwdGlvbiB0aHJvd24gd2hlbiBhIHJvdXRlIGRvZXMgbm90IGV4aXN0LlxuICovXG5jbGFzcyBSb3V0ZU5vdEZvdW5kRXhjZXB0aW9uIGV4dGVuZHMgSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uIHtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSb3V0ZU5vdEZvdW5kRXhjZXB0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvRXhjZXB0aW9uL1JvdXRlTm90Rm91bmRFeGNlcHRpb24uanMiXSwic291cmNlUm9vdCI6IiJ9