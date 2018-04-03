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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/Exception/InvalidArgumentException.js":
/*!**************************************************!*\
  !*** ./js/Exception/InvalidArgumentException.js ***!
  \**************************************************/
/*! no static exports found */
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

/***/ "./js/Exception/InvalidParameterException.js":
/*!***************************************************!*\
  !*** ./js/Exception/InvalidParameterException.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InvalidArgumentException = __webpack_require__(/*! ./InvalidArgumentException */ "./js/Exception/InvalidArgumentException.js");

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

/***/ "./js/Exception/MissingMandatoryParametersException.js":
/*!*************************************************************!*\
  !*** ./js/Exception/MissingMandatoryParametersException.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InvalidArgumentException = __webpack_require__(/*! ./InvalidArgumentException */ "./js/Exception/InvalidArgumentException.js");

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

/***/ "./js/Exception/RouteNotFoundException.js":
/*!************************************************!*\
  !*** ./js/Exception/RouteNotFoundException.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InvalidArgumentException = __webpack_require__(/*! ./InvalidArgumentException */ "./js/Exception/InvalidArgumentException.js");

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

/***/ }),

/***/ "./js/UrlGenerator.js":
/*!****************************!*\
  !*** ./js/UrlGenerator.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__webpack_require__(/*! @jymfony/util/lib/Platform */ "./node_modules/@jymfony/util/lib/Platform.js");
__webpack_require__(/*! @jymfony/util/lib/is */ "./node_modules/@jymfony/util/lib/is.js");
__webpack_require__(/*! @jymfony/util/lib/Object/entries */ "./node_modules/@jymfony/util/lib/Object/entries.js");
__webpack_require__(/*! @jymfony/util/lib/Regex/quote */ "./node_modules/@jymfony/util/lib/Regex/quote.js");
__webpack_require__(/*! @jymfony/util/lib/String/strtr */ "./node_modules/@jymfony/util/lib/String/strtr.js");
__webpack_require__(/*! @jymfony/util/lib/mixins */ "./node_modules/@jymfony/util/lib/mixins.js");
__webpack_require__(/*! @jymfony/datastructure/src/HashTable */ "./node_modules/@jymfony/datastructure/src/HashTable.js");

var InvalidParameterException = __webpack_require__(/*! ./Exception/InvalidParameterException */ "./js/Exception/InvalidParameterException.js");
var MissingMandatoryParametersException = __webpack_require__(/*! ./Exception/MissingMandatoryParametersException */ "./js/Exception/MissingMandatoryParametersException.js");
var RouteNotFoundException = __webpack_require__(/*! ./Exception/RouteNotFoundException */ "./js/Exception/RouteNotFoundException.js");

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
         * @param {[string]} requiredSchemes
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
                        if (!optional || !defaults.hasOwnProperty(token[3]) || void 0 !== mergedParams[token[3]] && String(mergedParams[token[3]]) !== String(defaults[token[3]])) {
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

            url = __jymfony.strtr(encodeURIComponent(url).replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29'), decodedChars);

            // the path segments "." and ".." are interpreted as relative reference when resolving a URI; see http://tools.ietf.org/html/rfc3986#section-3.3
            // so we need to encode them as they are not used for this purpose here
            // otherwise we would generate a URI that, when followed by a user agent (e.g. browser), does not match this route
            url = __jymfony.strtr(url, { '/../': '/%2E%2E/', '/./': '/%2E/' });
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

                if (Object.prototype.hasOwnProperty.call(defaults, name)) {
                    return defaults[name] != parameters[name];
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
                var toHashTable = function toHashTable(obj) {
                    if (!isObjectLiteral(obj) && !isArray(obj)) {
                        return obj;
                    }

                    var table = new HashTable();
                    var _iteratorNormalCompletion4 = true;
                    var _didIteratorError4 = false;
                    var _iteratorError4 = undefined;

                    try {
                        for (var _iterator4 = __jymfony.getEntries(obj)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                            var _ref3 = _step4.value;

                            var _ref4 = _slicedToArray(_ref3, 2);

                            var k = _ref4[0];
                            var v = _ref4[1];

                            table.put(k, toHashTable(v));
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

                    return table;
                };

                var toQuery = function toQuery(key, value) {
                    var base = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

                    if (value instanceof HashTable) {
                        return Array.from(value).map(function (el) {
                            return toQuery(el[0], el[1], base ? base + '[' + key + ']' : key);
                        }).join('&');
                    }

                    return encodeURIComponent(base ? base + '[' + key + ']' : key) + '=' + encodeURIComponent(value);
                };

                var ht = toHashTable(Object.keys(parameters).filter(function (key) {
                    return extras.indexOf(key) !== -1;
                }).reduce(function (res, key) {
                    return res[key] = parameters[key], res;
                }, {}));

                var query = Array.from(ht).map(function (el) {
                    return toQuery(el[0], el[1]);
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

            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
                for (var _iterator5 = __jymfony.getEntries(sourceDirs)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var _ref5 = _step5.value;

                    var _ref6 = _slicedToArray(_ref5, 2);

                    var i = _ref6[0];
                    var dir = _ref6[1];

                    if (targetDirs[i] && dir === targetDirs[i]) {
                        delete sourceDirs[i];
                        delete targetDirs[i];
                    } else {
                        break;
                    }
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                        _iterator5.return();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
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

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");

var _UrlGenerator = __webpack_require__(/*! ./UrlGenerator */ "./js/UrlGenerator.js");

var _UrlGenerator2 = _interopRequireDefault(_UrlGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.UrlGenerator = _UrlGenerator2.default;

/***/ }),

/***/ "./node_modules/@jymfony/datastructure/src/HashTable.js":
/*!**************************************************************!*\
  !*** ./node_modules/@jymfony/datastructure/src/HashTable.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GenericCollectionTrait = __webpack_require__(/*! ./Traits/GenericCollectionTrait */ "./node_modules/@jymfony/datastructure/src/Traits/GenericCollectionTrait.js");
var INITIAL_SIZE = 64;

/**
 * Hashing function.
 * Returns an unsigned integer between 0 and 2^32-1
 *
 * @param {string} str
 * @returns {int}
 */
var hash = function hash(str) {
    var hash = 5381,
        i = str.length;

    while (i) {
        hash = hash * 33 ^ str.charCodeAt(--i);
    }

    /*
     * JavaScript does bitwise operations (like XOR, above) on 32-bit signed
     * integers. Since we want the results to be always positive, convert the
     * signed int to an unsigned by doing an unsigned bitshift.
     */
    return hash >>> 0;
};

var isNumericInt = function isNumericInt(val) {
    return ~~val == val;
};

var Entry = function Entry(key, value) {
    _classCallCheck(this, Entry);

    /**
     * @type {int}
     */
    this.hashCode = isNumericInt(key) ? ~~key : hash(String(key));

    /**
     * @type {string}
     */
    this.key = String(key);

    /**
     * @type {*}
     */
    this.value = value;

    /**
     * @type {undefined|Entry}
     */
    this.next = undefined;

    /**
     * @type {undefined|Entry}
     */
    this.prev = undefined;
};

var HashTable = function (_mix) {
    _inherits(HashTable, _mix);

    /**
     * Constructor.
     *
     * @param {int} [bucketSize=INITIAL_SIZE]
     */
    function HashTable() {
        var bucketSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_SIZE;

        _classCallCheck(this, HashTable);

        /**
         * @type {int}
         * @private
         */
        var _this = _possibleConstructorReturn(this, (HashTable.__proto__ || Object.getPrototypeOf(HashTable)).call(this));

        _this._bucketSize = bucketSize;
        _this.clear();
        return _this;
    }

    _createClass(HashTable, [{
        key: 'clear',
        value: function clear() {
            /**
             * @type {[Entry]}
             * @private
             */
            this._buckets = Array(this._bucketSize).fill(undefined);

            /**
             * @type {Entry}
             * @private
             */
            this._first = undefined;

            /**
             * @type {Entry}
             * @private
             */
            this._last = undefined;

            /**
             * @type {int}
             * @private
             */
            this._length = 0;

            /**
             * @type {int}
             * @private
             */
            this._lastNumericIdx = 0;
        }

        /**
         * @inheritDoc
         */

    }, {
        key: 'put',


        /**
         * Inserts the key-value pair into the symbol table, overwriting the old value
         * with the new value if the key is already in the symbol table.
         *
         * @param {int|string} key
         * @param {*} value
         *
         * @throws InvalidArgumentException if key is null or undefined
         */
        value: function put(key, value) {
            if (undefined === key || null === key) {
                throw new InvalidArgumentException('Key cannot be null or undefined');
            }

            var entry = new Entry(key, value);
            var bucketIdx = entry.hashCode % this._bucketSize;

            try {
                if (this._buckets[bucketIdx] === undefined) {
                    this._buckets[bucketIdx] = entry;
                    this._add(entry);
                    return;
                }

                var e = this._buckets[bucketIdx];
                do {
                    if (e.key === entry.key) {
                        e.value = entry.value;
                        return;
                    }
                } while (e = e.next && e.hashCode % this._bucketSize === bucketIdx);

                this._add(entry);
            } finally {
                if (undefined === this._first) {
                    this._first = entry;
                }

                if (isNumericInt(key) && this._lastNumericIdx <= key) {
                    this._lastNumericIdx = key + 1;
                }
            }
        }

        /**
         * @inheritDoc
         */

    }, {
        key: 'copy',
        value: function copy() {
            var copy = new HashTable(this._bucketSize);
            for (var e = this._first; undefined !== e; e = e.next) {
                copy.put(e.key, e.value);
            }

            return copy;
        }

        /**
         * Pushes a new value into the collection.
         *
         * @param {*} value
         */

    }, {
        key: 'push',
        value: function push(value) {
            this.put(this._lastNumericIdx, value);
        }

        /**
         * Pops out an entry from the end of the collection.
         *
         * @returns {*}
         */

    }, {
        key: 'pop',
        value: function pop() {
            var last = this._last;
            if (undefined === last) {
                return undefined;
            }

            this._last = this._last.prev;
            this._last.next = undefined;
            this._length--;

            return last.value;
        }

        /**
         * Gets the value associated with key, if set.
         *
         * @param {int|string} key
         *
         * @returns {undefined|*}
         */

    }, {
        key: 'get',
        value: function get(key) {
            var e = this._search(key);

            return undefined !== e ? e.value : undefined;
        }

        /**
         * Removes an element from the collection.
         *
         * @param {int|string} key
         *
         * @returns {undefined}
         */

    }, {
        key: 'remove',
        value: function remove(key) {
            var e = this._search(key);
            if (undefined === e) {
                return;
            }

            var prev = e.prev;
            var next = e.next;
            this._length--;

            if (e !== this._first) {
                prev.next = next;
            } else {
                this._first = next;
            }

            if (e !== this._last) {
                next.prev = prev;
            } else {
                this._last = prev;
            }

            return undefined !== e ? e.value : undefined;
        }

        /**
         * @inheritDoc
         */

    }, {
        key: 'toArray',
        value: function toArray() {
            if (undefined === this._first) {
                return [];
            }

            return Array.from(this);
        }

        /**
         * Returns an array or a literal object with all the elements
         * of the collection.
         *
         * @returns {Array|Object}
         */

    }, {
        key: 'toObject',
        value: function toObject() {
            var _this2 = this;

            var resolve = function resolve(val) {
                return val instanceof HashTable ? val.toObject() : val;
            };

            var entries = this.toArray();
            var isArray = function () {
                if (0 === _this2._length) {
                    return false;
                }

                if (_this2._length !== _this2._lastNumericIdx) {
                    return false;
                }

                for (var i = 0; i < entries.length; i++) {
                    if (entries[i][0] != i) {
                        return false;
                    }
                }

                return true;
            }();

            if (isArray) {
                return entries.map(function (e) {
                    return resolve(e[1]);
                });
            }

            return entries.reduce(function (res, val) {
                return res[val[0]] = resolve(val[1]), res;
            }, {});
        }

        /**
         * Creates an HashTable from an object or array.
         *
         * @param {Object|Array} obj
         *
         * @returns {HashTable}
         */

    }, {
        key: 'keys',


        /**
         * Returns all the table keys (ordered).
         *
         * @returns {[]}
         */
        value: function keys() {
            return Array.from(this).map(function (tuple) {
                return tuple[0];
            });
        }

        /**
         * Iterate over all the collection elements.
         */

    }, {
        key: Symbol.iterator,
        value: /*#__PURE__*/regeneratorRuntime.mark(function value() {
            var e;
            return regeneratorRuntime.wrap(function value$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            if (!(undefined === this._first)) {
                                _context.next = 2;
                                break;
                            }

                            return _context.abrupt('return');

                        case 2:
                            e = this._first;

                        case 3:
                            _context.next = 5;
                            return [e.key, e.value];

                        case 5:
                            if (e = e.next) {
                                _context.next = 3;
                                break;
                            }

                        case 6:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, value, this);
        })

        /**
         * Helper method to add an entry to the collection.
         *
         * @param {Entry} entry
         * @private
         */

    }, {
        key: '_add',
        value: function _add(entry) {
            if (undefined !== this._last) {
                this._last.next = entry;
            }

            entry.prev = this._last;
            this._last = entry;
            this._length++;
        }

        /**
         * Searches an entry with key.
         *
         * @param key
         * @returns {Entry|undefined}
         *
         * @private
         */

    }, {
        key: '_search',
        value: function _search(key) {
            var hashCode = isNumericInt(key) ? ~~key : hash(String(key));
            var bucketIdx = hashCode % this._bucketSize;
            var e = this._buckets[bucketIdx];

            if (e === undefined) {
                return;
            }

            while (e.key != key) {
                e = e.next;
            }

            return e;
        }
    }, {
        key: 'length',
        get: function get() {
            return this._length;
        }

        /**
         * Gets the first element of the collection.
         *
         * @returns {*}
         */

    }, {
        key: 'first',
        get: function get() {
            return this._first ? this._first.value : undefined;
        }

        /**
         * Gets the last element of the collection.
         *
         * @returns {*}
         */

    }, {
        key: 'last',
        get: function get() {
            return this._last ? this._last.value : undefined;
        }
    }], [{
        key: 'fromObject',
        value: function fromObject(obj) {
            var table = new HashTable();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = __jymfony.getEntries(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _ref = _step.value;

                    var _ref2 = _slicedToArray(_ref, 2);

                    var key = _ref2[0];
                    var _value = _ref2[1];

                    table.put(key, _value);
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

            return table;
        }
    }]);

    return HashTable;
}(mix(undefined, GenericCollectionTrait));

global.HashTable = HashTable;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@jymfony/datastructure/src/Traits/GenericCollectionTrait.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@jymfony/datastructure/src/Traits/GenericCollectionTrait.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GenericCollectionTrait = function () {
    function GenericCollectionTrait() {
        _classCallCheck(this, GenericCollectionTrait);
    }

    _createClass(GenericCollectionTrait, [{
        key: 'isEmpty',

        /**
         * Whether the collection is empty.
         *
         * @returns {boolean}
         */
        value: function isEmpty() {
            return 0 === this.length;
        }

        /**
         * Clone the collection.
         *
         * @abstract
         */

    }, {
        key: 'copy',
        value: function copy() {
            /* istanbul ignore next: abstract method */
            throw new Error('You must override "copy" method');
        }

        /**
         * Returns an array copy of the collection.
         *
         * @abstract
         * @returns {Array}
         */

    }, {
        key: 'toArray',
        value: function toArray() {
            /* istanbul ignore next: abstract method */
            throw new Error('You must override "toArray" method');
        }
    }, {
        key: 'inspect',
        value: function inspect() {
            return this.toArray();
        }
    }, {
        key: Symbol.toStringTag,
        get: function get() {
            return this.constructor.name;
        }
    }]);

    return GenericCollectionTrait;
}();

module.exports = getTrait(GenericCollectionTrait);

/***/ }),

/***/ "./node_modules/@jymfony/util/lib/Is/functions.js":
/*!********************************************************!*\
  !*** ./node_modules/@jymfony/util/lib/Is/functions.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

global.isGenerator = function isGenerator(value) {
    return value && 'function' === typeof value.next && 'function' === typeof value.throw;
};

global.isGeneratorFunction = function isGeneratorFunction(value) {
    if (!value) {
        return false;
    }

    if (isGenerator(value)) {
        return false;
    }

    var constructor = value.constructor;

    if (!constructor) {
        return false;
    }

    if ('GeneratorFunction' === constructor.name || 'GeneratorFunction' === constructor.displayName) {
        return true;
    }

    return isGenerator(constructor.prototype);
};

if (__jymfony.Platform.hasAsyncFunctionSupport()) {
    global.isAsyncFunction = function isAsyncFunction(value) {
        if (!value) {
            return false;
        }

        var constructor = value.constructor;
        if (!constructor) {
            return false;
        }

        return 'AsyncFunction' === (constructor.name || constructor.displayName);
    };
} else {
    global.isAsyncFunction = function isAsyncFunction() {
        return false;
    };
}

global.isFunction = function isFunction(obj) {
    if (undefined !== global.BoundFunction && obj instanceof BoundFunction) {
        return true;
    }

    if (isGeneratorFunction(obj)) {
        return true;
    }

    if (isAsyncFunction(obj)) {
        return true;
    }

    return '[object Function]' === toString.call(obj);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@jymfony/util/lib/Mixins/Interfaces.js":
/*!*************************************************************!*\
  !*** ./node_modules/@jymfony/util/lib/Mixins/Interfaces.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mixins = __webpack_require__(/*! ./Mixins */ "./node_modules/@jymfony/util/lib/Mixins/Mixins.js");
var CLASS_TYPE = 'Interface';

var checkedClassesCache = new Set();

var Interfaces = function () {
    function Interfaces() {
        _classCallCheck(this, Interfaces);
    }

    _createClass(Interfaces, null, [{
        key: 'isInterface',
        value: function isInterface(mixin) {
            return mixin[Mixins.classTypeSymbol] === CLASS_TYPE;
        }
    }, {
        key: 'create',
        value: function create(definition) {
            var _Object$setPrototypeO;

            var checks = function checks(obj) {
                if (checkedClassesCache.has(obj.constructor)) {
                    return;
                }

                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = Mixins.getFunctions(definition)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var descriptor = _step.value;

                        if (descriptor.fn) {
                            if ('function' === typeof obj[descriptor.fn]) {
                                continue;
                            }

                            if (descriptor['static'] && 'function' === typeof obj.constructor[descriptor.fn]) {
                                continue;
                            }

                            throw new SyntaxError('Method "' + descriptor.fn + '" must be implemented.');
                        } else if (descriptor.property) {
                            var target = descriptor['static'] ? obj.constructor : obj;
                            var targetDescriptor = Mixins.getPropertyDescriptor(target, descriptor.property);

                            if (undefined === targetDescriptor) {
                                throw new SyntaxError(__jymfony.sprintf('Getter/Setter for "%s" property must be implemented.', descriptor.property));
                            }

                            if (descriptor['get'] && undefined === targetDescriptor.get) {
                                throw new SyntaxError('Getter for "' + descriptor.property + '" property must be implemented.');
                            }
                            if (descriptor['set'] && undefined === targetDescriptor.set) {
                                throw new SyntaxError('Setter for "' + descriptor.property + '" property must be implemented.');
                            }
                        }
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

                checkedClassesCache.add(obj.constructor);
            };

            var mixin = Mixins.createMixin(definition, undefined, checks);

            Object.setPrototypeOf(mixin, (_Object$setPrototypeO = {
                definition: definition
            }, _defineProperty(_Object$setPrototypeO, Mixins.classTypeSymbol, CLASS_TYPE), _defineProperty(_Object$setPrototypeO, Symbol.hasInstance, Interfaces._createHasInstance(mixin)), _Object$setPrototypeO));

            return mixin;
        }
    }, {
        key: '_createHasInstance',
        value: function _createHasInstance(mixin) {
            return function (o) {
                if (!isObject(o)) {
                    return false;
                }

                var mixins = o.constructor[Mixins.appliedInterfacesSymbol];
                if (!mixins) {
                    return false;
                }

                return -1 != mixins.indexOf(mixin);
            };
        }
    }]);

    return Interfaces;
}();

module.exports = Interfaces;

/***/ }),

/***/ "./node_modules/@jymfony/util/lib/Mixins/Mixins.js":
/*!*********************************************************!*\
  !*** ./node_modules/@jymfony/util/lib/Mixins/Mixins.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FunctionProps = Object.getOwnPropertyNames(Function.prototype);

var symOuterMixin = Symbol('outerMixin');
var symAppliedInterfaces = Symbol('appliedInterfaces');
var symClassType = Symbol('classType');

/**
 * @internal
 */

var Mixins = function () {
    function Mixins() {
        _classCallCheck(this, Mixins);
    }

    _createClass(Mixins, null, [{
        key: 'createMixin',

        /**
         * Creates a new mixin.
         *
         * @param {Function} definition
         * @param {undefined|Function} cb Modify the newly created inner mixin
         * @param {undefined|Function} constructCb Function to be called on construction
         *
         * @returns {Function}
         */
        value: function createMixin(definition) {
            var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
            var constructCb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

            var mixin = function mixin(superclass) {
                var m = function (_superclass) {
                    _inherits(m, _superclass);

                    function m() {
                        var _ref;

                        _classCallCheck(this, m);

                        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                            args[_key] = arguments[_key];
                        }

                        var _this = _possibleConstructorReturn(this, (_ref = m.__proto__ || Object.getPrototypeOf(m)).call.apply(_ref, [this].concat(args)));

                        if (undefined !== constructCb) {
                            constructCb(_this);
                        }
                        return _this;
                    }

                    return m;
                }(superclass);

                m.isMixin = true;

                if (undefined !== cb) {
                    cb(m);
                }

                return m;
            };

            definition[symOuterMixin] = mixin;

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = Mixins.getConstantsNames(definition)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var constant = _step.value;

                    mixin[constant] = definition[constant];
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

            return mixin;
        }
    }, {
        key: 'getMixin',
        value: function getMixin(definition) {
            return definition[symOuterMixin];
        }
    }, {
        key: 'getPropertyDescriptor',
        value: function getPropertyDescriptor(obj, propKey) {
            do {
                var descriptor = Object.getOwnPropertyDescriptor(obj, propKey);
                if (undefined !== descriptor) {
                    return descriptor;
                }
            } while (obj = Object.getPrototypeOf(obj));

            return undefined;
        }

        /**
         * Get function names
         *
         * @param {Function} definition
         * @internal
         */

    }, {
        key: 'getFunctions',
        value: /*#__PURE__*/regeneratorRuntime.mark(function getFunctions(definition) {
            var chain, gen, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, i;

            return regeneratorRuntime.wrap(function getFunctions$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            chain = this._getClassChain(definition);
                            gen = /*#__PURE__*/regeneratorRuntime.mark(function gen(obj, isStatic) {
                                var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, fn, descriptor;

                                return regeneratorRuntime.wrap(function gen$(_context) {
                                    while (1) {
                                        switch (_context.prev = _context.next) {
                                            case 0:
                                                _iteratorNormalCompletion2 = true;
                                                _didIteratorError2 = false;
                                                _iteratorError2 = undefined;
                                                _context.prev = 3;
                                                _iterator2 = Object.getOwnPropertyNames(obj)[Symbol.iterator]();

                                            case 5:
                                                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                                                    _context.next = 17;
                                                    break;
                                                }

                                                fn = _step2.value;
                                                descriptor = Object.getOwnPropertyDescriptor(obj, fn);

                                                if (!('constructor' !== fn && 'function' === typeof descriptor.value)) {
                                                    _context.next = 11;
                                                    break;
                                                }

                                                _context.next = 11;
                                                return { 'static': isStatic, fn: fn };

                                            case 11:
                                                if (!('function' === typeof descriptor.get || 'function' === typeof descriptor.set)) {
                                                    _context.next = 14;
                                                    break;
                                                }

                                                _context.next = 14;
                                                return {
                                                    'static': isStatic,
                                                    'property': fn,
                                                    'get': undefined !== descriptor.get,
                                                    'set': undefined !== descriptor.set
                                                };

                                            case 14:
                                                _iteratorNormalCompletion2 = true;
                                                _context.next = 5;
                                                break;

                                            case 17:
                                                _context.next = 23;
                                                break;

                                            case 19:
                                                _context.prev = 19;
                                                _context.t0 = _context['catch'](3);
                                                _didIteratorError2 = true;
                                                _iteratorError2 = _context.t0;

                                            case 23:
                                                _context.prev = 23;
                                                _context.prev = 24;

                                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                                    _iterator2.return();
                                                }

                                            case 26:
                                                _context.prev = 26;

                                                if (!_didIteratorError2) {
                                                    _context.next = 29;
                                                    break;
                                                }

                                                throw _iteratorError2;

                                            case 29:
                                                return _context.finish(26);

                                            case 30:
                                                return _context.finish(23);

                                            case 31:
                                            case 'end':
                                                return _context.stop();
                                        }
                                    }
                                }, gen, this, [[3, 19, 23, 31], [24,, 26, 30]]);
                            });
                            _iteratorNormalCompletion3 = true;
                            _didIteratorError3 = false;
                            _iteratorError3 = undefined;
                            _context2.prev = 5;
                            _iterator3 = chain[Symbol.iterator]();

                        case 7:
                            if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                                _context2.next = 14;
                                break;
                            }

                            i = _step3.value;
                            return _context2.delegateYield(gen(i.prototype, false), 't0', 10);

                        case 10:
                            return _context2.delegateYield(gen(i, true), 't1', 11);

                        case 11:
                            _iteratorNormalCompletion3 = true;
                            _context2.next = 7;
                            break;

                        case 14:
                            _context2.next = 20;
                            break;

                        case 16:
                            _context2.prev = 16;
                            _context2.t2 = _context2['catch'](5);
                            _didIteratorError3 = true;
                            _iteratorError3 = _context2.t2;

                        case 20:
                            _context2.prev = 20;
                            _context2.prev = 21;

                            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                _iterator3.return();
                            }

                        case 23:
                            _context2.prev = 23;

                            if (!_didIteratorError3) {
                                _context2.next = 26;
                                break;
                            }

                            throw _iteratorError3;

                        case 26:
                            return _context2.finish(23);

                        case 27:
                            return _context2.finish(20);

                        case 28:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, getFunctions, this, [[5, 16, 20, 28], [21,, 23, 27]]);
        })

        /**
         * Get all constants names for definition.
         *
         * @param {Function} definition
         *
         * @returns {string[]}
         * @internal
         */

    }, {
        key: 'getConstantsNames',
        value: function getConstantsNames(definition) {
            var chain = this._getClassChain(definition);

            return Array.from( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _this2 = this;

                var _loop, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, i;

                return regeneratorRuntime.wrap(function _callee$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop(i) {
                                    return regeneratorRuntime.wrap(function _loop$(_context3) {
                                        while (1) {
                                            switch (_context3.prev = _context3.next) {
                                                case 0:
                                                    return _context3.delegateYield(Object.getOwnPropertyNames(i).filter(function (P) {
                                                        if ('prototype' === P) {
                                                            return false;
                                                        }

                                                        if ('arguments' === P || 'caller' === P) {
                                                            // 'caller' and 'arguments' are restricted function properties and cannot be accessed in this context.
                                                            return false;
                                                        }

                                                        if ('function' === typeof i[P]) {
                                                            return false;
                                                        }

                                                        return -1 === FunctionProps.indexOf(P);
                                                    }), 't0', 1);

                                                case 1:
                                                case 'end':
                                                    return _context3.stop();
                                            }
                                        }
                                    }, _loop, _this2);
                                });
                                _iteratorNormalCompletion4 = true;
                                _didIteratorError4 = false;
                                _iteratorError4 = undefined;
                                _context4.prev = 4;
                                _iterator4 = chain[Symbol.iterator]();

                            case 6:
                                if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
                                    _context4.next = 12;
                                    break;
                                }

                                i = _step4.value;
                                return _context4.delegateYield(_loop(i), 't0', 9);

                            case 9:
                                _iteratorNormalCompletion4 = true;
                                _context4.next = 6;
                                break;

                            case 12:
                                _context4.next = 18;
                                break;

                            case 14:
                                _context4.prev = 14;
                                _context4.t1 = _context4['catch'](4);
                                _didIteratorError4 = true;
                                _iteratorError4 = _context4.t1;

                            case 18:
                                _context4.prev = 18;
                                _context4.prev = 19;

                                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                    _iterator4.return();
                                }

                            case 21:
                                _context4.prev = 21;

                                if (!_didIteratorError4) {
                                    _context4.next = 24;
                                    break;
                                }

                                throw _iteratorError4;

                            case 24:
                                return _context4.finish(21);

                            case 25:
                                return _context4.finish(18);

                            case 26:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee, this, [[4, 14, 18, 26], [19,, 21, 25]]);
            })());
        }
    }, {
        key: '_getClassChain',
        value: function _getClassChain(definition) {
            var chain = [];
            var parent = definition;
            do {
                if (parent[symOuterMixin]) {
                    chain.unshift(parent);
                }
            } while (parent = Object.getPrototypeOf(parent));

            return chain;
        }
    }]);

    return Mixins;
}();

Mixins.appliedInterfacesSymbol = symAppliedInterfaces;
Mixins.classTypeSymbol = symClassType;

module.exports = Mixins;

/***/ }),

/***/ "./node_modules/@jymfony/util/lib/Mixins/Traits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@jymfony/util/lib/Mixins/Traits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mixins = __webpack_require__(/*! ./Mixins */ "./node_modules/@jymfony/util/lib/Mixins/Mixins.js");
var CLASS_TYPE = 'Trait';

var Traits = function () {
    function Traits() {
        _classCallCheck(this, Traits);
    }

    _createClass(Traits, null, [{
        key: 'isTrait',
        value: function isTrait(mixin) {
            return mixin[Mixins.classTypeSymbol] === CLASS_TYPE;
        }
    }, {
        key: 'create',
        value: function create(definition) {
            var inherits = new Map();
            var parent = definition;
            do {
                if (parent.prototype) {
                    var _arr = [].concat(_toConsumableArray(Object.getOwnPropertyNames(parent.prototype)), _toConsumableArray(Object.getOwnPropertySymbols(parent.prototype)));

                    for (var _i = 0; _i < _arr.length; _i++) {
                        var p = _arr[_i];
                        if (inherits.has(p)) {
                            continue;
                        }

                        inherits.set(p, Object.getOwnPropertyDescriptor(parent.prototype, p));
                    }
                }
            } while (parent = Object.getPrototypeOf(parent));

            var mixin = Mixins.createMixin(definition, function (trait) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = inherits.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var _ref = _step.value;

                        var _ref2 = _slicedToArray(_ref, 2);

                        var prop = _ref2[0];
                        var descriptor = _ref2[1];

                        if ('constructor' === prop || '__construct' === prop) {
                            continue;
                        }

                        Object.defineProperty(trait.prototype, prop, descriptor);
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
            }, function (obj) {
                if (isFunction(definition.prototype.__construct)) {
                    definition.prototype.__construct.call(obj);
                }
            });

            Object.setPrototypeOf(mixin, _defineProperty({
                definition: definition
            }, Mixins.classTypeSymbol, CLASS_TYPE));

            return mixin;
        }
    }]);

    return Traits;
}();

module.exports = Traits;

/***/ }),

/***/ "./node_modules/@jymfony/util/lib/Object/entries.js":
/*!**********************************************************!*\
  !*** ./node_modules/@jymfony/util/lib/Object/entries.js ***!
  \**********************************************************/
/*! no static exports found */
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@jymfony/util/lib/Platform.js":
/*!****************************************************!*\
  !*** ./node_modules/@jymfony/util/lib/Platform.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

global.__jymfony = global.__jymfony || {};

var _asyncSupport = undefined;
var _modernRegex = undefined;

/**
 * @memberOf __jymfony
 */

var Platform = function () {
    function Platform() {
        _classCallCheck(this, Platform);
    }

    _createClass(Platform, null, [{
        key: 'hasAsyncFunctionSupport',

        /**
         * Checks if this node version has async function support.
         *
         * @returns {boolean}
         */
        value: function hasAsyncFunctionSupport() {
            if (undefined === _asyncSupport) {
                _asyncSupport = false;

                try {
                    var fn = void 0;
                    eval('fn = async function () { }');
                    _asyncSupport = 'AsyncFunction' === (fn.constructor.name || fn.constructor.displayName);
                } catch (e) {
                    if (!(e instanceof SyntaxError)) {
                        throw e;
                    }
                }
            }

            return _asyncSupport;
        }

        /**
         * Are we running on windows?
         *
         * @returns {boolean}
         */

    }, {
        key: 'isWindows',
        value: function isWindows() {
            return 'win32' === process.platform;
        }

        /**
         * Checks if this node version has modern regex (named groups) support.
         *
         * @returns {boolean}
         */

    }, {
        key: 'hasModernRegex',
        value: function hasModernRegex() {
            if (undefined === _modernRegex) {
                _modernRegex = false;

                try {
                    RegExp('(?<test>.+)');
                    _modernRegex = true;
                } catch (e) {
                    if (!(e instanceof SyntaxError)) {
                        throw e;
                    }
                }
            }

            return _modernRegex;
        }
    }]);

    return Platform;
}();

global.__jymfony.Platform = Platform;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/@jymfony/util/lib/Regex/quote.js":
/*!*******************************************************!*\
  !*** ./node_modules/@jymfony/util/lib/Regex/quote.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

global.__jymfony = global.__jymfony || {};

global.__jymfony.regex_quote = function (str) {
    return str.toString().replace(/[.\\+*?\[\^\]$(){}=!<>|:-]/g, '\\$&');
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@jymfony/util/lib/String/strtr.js":
/*!********************************************************!*\
  !*** ./node_modules/@jymfony/util/lib/String/strtr.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

__webpack_require__(/*! ../Regex/quote */ "./node_modules/@jymfony/util/lib/Regex/quote.js");

global.__jymfony = global.__jymfony || {};

global.__jymfony.strtr = function strtr(string, replacePairs) {
    var searchPattern = Object.keys(replacePairs).map(__jymfony.regex_quote).join('|');

    return string.toString().replace(new RegExp(searchPattern, 'g'), function (match) {
        return replacePairs[match];
    });
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@jymfony/util/lib/is.js":
/*!**********************************************!*\
  !*** ./node_modules/@jymfony/util/lib/is.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

global.isArray = Array.isArray;
var toString = Object.prototype.toString;

__webpack_require__(/*! ./Is/functions */ "./node_modules/@jymfony/util/lib/Is/functions.js");

if (!isFunction(global.isObject)) {
    global.isObject = function (arg) {
        return !!arg && 'object' === (typeof arg === 'undefined' ? 'undefined' : _typeof(arg));
    };
}

var _loop = function _loop(name) {
    if (isFunction(global['is' + name])) {
        return 'continue';
    }

    global['is' + name] = function (obj) {
        return toString.call(obj) === '[object ' + name + ']';
    };
};

var _arr = ['Arguments', 'Boolean', 'String', 'Number', 'Date', 'RegExp', 'Error', 'Symbol', 'Map', 'WeakMap', 'Set', 'WeakSet'];
for (var _i = 0; _i < _arr.length; _i++) {
    var name = _arr[_i];
    var _ret = _loop(name);

    if (_ret === 'continue') continue;
}

var primitives = [Number, String, Boolean];
global.isScalar = function isScalar(value) {
    if (undefined === value || null === value) {
        return false;
    }

    var proto = Object.getPrototypeOf(value);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = primitives[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var type = _step.value;

            if (proto === type.prototype) {
                return true;
            }
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

    return false;
};

global.isObjectLiteral = function isObjectLiteral(value) {
    if (null === value || undefined === value) {
        return false;
    }

    return Object.getPrototypeOf(value) === Object.getPrototypeOf({});
};

global.isPromise = function isPromise(value) {
    return isFunction(value.then);
};

global.isStream = function isStream(stream) {
    return 'object' === (typeof stream === 'undefined' ? 'undefined' : _typeof(stream)) && isFunction(stream.pipe);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@jymfony/util/lib/mixins.js":
/*!**************************************************!*\
  !*** ./node_modules/@jymfony/util/lib/mixins.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mixins = __webpack_require__(/*! ./Mixins/Mixins */ "./node_modules/@jymfony/util/lib/Mixins/Mixins.js");
var Interfaces = __webpack_require__(/*! ./Mixins/Interfaces */ "./node_modules/@jymfony/util/lib/Mixins/Interfaces.js");
var Traits = __webpack_require__(/*! ./Mixins/Traits */ "./node_modules/@jymfony/util/lib/Mixins/Traits.js");

global.getInterface = function getInterface(definition) {
    return Interfaces.create(definition);
};

global.getTrait = function getTrait(definition) {
    return Traits.create(definition);
};

global.mixins = {
    isInterface: Interfaces.isInterface,
    isTrait: Traits.isTrait,
    getInterfaces: function getInterfaces(Class) {
        return Class[Mixins.appliedInterfacesSymbol] || [];
    }
};

global.mix = function mix(superclass) {
    for (var _len = arguments.length, mixins = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        mixins[_key - 1] = arguments[_key];
    }

    superclass = superclass || __jymfony.JObject || function () {
        function _class() {
            _classCallCheck(this, _class);
        }

        return _class;
    }();
    superclass = mixins.reduce(function (a, b) {
        return b(a);
    }, superclass);

    var interfaces = Array.from( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, i, definition, outer;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _iteratorNormalCompletion = true;
                        _didIteratorError = false;
                        _iteratorError = undefined;
                        _context.prev = 3;
                        _iterator = mixins[Symbol.iterator]();

                    case 5:
                        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                            _context.next = 21;
                            break;
                        }

                        i = _step.value;

                        if (Interfaces.isInterface(i)) {
                            _context.next = 9;
                            break;
                        }

                        return _context.abrupt('continue', 18);

                    case 9:
                        definition = i.definition;

                    case 10:
                        if (!definition) {
                            _context.next = 18;
                            break;
                        }

                        outer = Mixins.getMixin(definition);

                        if (!outer) {
                            _context.next = 15;
                            break;
                        }

                        _context.next = 15;
                        return outer;

                    case 15:

                        definition = Object.getPrototypeOf(definition);
                        _context.next = 10;
                        break;

                    case 18:
                        _iteratorNormalCompletion = true;
                        _context.next = 5;
                        break;

                    case 21:
                        _context.next = 27;
                        break;

                    case 23:
                        _context.prev = 23;
                        _context.t0 = _context['catch'](3);
                        _didIteratorError = true;
                        _iteratorError = _context.t0;

                    case 27:
                        _context.prev = 27;
                        _context.prev = 28;

                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }

                    case 30:
                        _context.prev = 30;

                        if (!_didIteratorError) {
                            _context.next = 33;
                            break;
                        }

                        throw _iteratorError;

                    case 33:
                        return _context.finish(30);

                    case 34:
                        return _context.finish(27);

                    case 35:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[3, 23, 27, 35], [28,, 30, 34]]);
    })());

    var mixed = function (s) {
        var mixin = function (_s) {
            _inherits(mixin, _s);

            function mixin() {
                _classCallCheck(this, mixin);

                return _possibleConstructorReturn(this, (mixin.__proto__ || Object.getPrototypeOf(mixin)).apply(this, arguments));
            }

            return mixin;
        }(s);
        mixin.isMixin = true;

        return mixin;
    }(superclass);

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = mixins[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var mixin = _step2.value;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = Mixins.getConstantsNames(mixin.definition)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var name = _step3.value;

                    mixed[name] = mixin[name];
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

    Object.defineProperty(mixed, Mixins.appliedInterfacesSymbol, {
        value: [].concat(_toConsumableArray(interfaces)),
        enumerable: false
    });

    return mixed;
};

global.implementationOf = function implementationOf() {
    var _global;

    for (var _len2 = arguments.length, interfaces = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        interfaces[_key2] = arguments[_key2];
    }

    return (_global = global).mix.apply(_global, [undefined].concat(interfaces));
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!function (global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = ( false ? undefined : _typeof(module)) === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function (arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value && (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
}(
// In sloppy mode, unbound `this` refers to the global object, fallback to
// Function constructor if we're in global strict mode. That is sadly a form
// of indirect eval which violates Content Security Policy.
function () {
  return this;
}() || Function("return this")());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
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

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvRXhjZXB0aW9uL0ludmFsaWRBcmd1bWVudEV4Y2VwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9FeGNlcHRpb24vSW52YWxpZFBhcmFtZXRlckV4Y2VwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9FeGNlcHRpb24vTWlzc2luZ01hbmRhdG9yeVBhcmFtZXRlcnNFeGNlcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vanMvRXhjZXB0aW9uL1JvdXRlTm90Rm91bmRFeGNlcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vanMvVXJsR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanltZm9ueS9kYXRhc3RydWN0dXJlL3NyYy9IYXNoVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqeW1mb255L2RhdGFzdHJ1Y3R1cmUvc3JjL1RyYWl0cy9HZW5lcmljQ29sbGVjdGlvblRyYWl0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanltZm9ueS91dGlsL2xpYi9Jcy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqeW1mb255L3V0aWwvbGliL01peGlucy9JbnRlcmZhY2VzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanltZm9ueS91dGlsL2xpYi9NaXhpbnMvTWl4aW5zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanltZm9ueS91dGlsL2xpYi9NaXhpbnMvVHJhaXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanltZm9ueS91dGlsL2xpYi9PYmplY3QvZW50cmllcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGp5bWZvbnkvdXRpbC9saWIvUGxhdGZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqeW1mb255L3V0aWwvbGliL1JlZ2V4L3F1b3RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanltZm9ueS91dGlsL2xpYi9TdHJpbmcvc3RydHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqeW1mb255L3V0aWwvbGliL2lzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanltZm9ueS91dGlsL2xpYi9taXhpbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyJdLCJuYW1lcyI6WyJJbnZhbGlkQXJndW1lbnRFeGNlcHRpb24iLCJFcnJvciIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwiSW52YWxpZFBhcmFtZXRlckV4Y2VwdGlvbiIsIk1pc3NpbmdNYW5kYXRvcnlQYXJhbWV0ZXJzRXhjZXB0aW9uIiwiUm91dGVOb3RGb3VuZEV4Y2VwdGlvbiIsImRlY29kZWRDaGFycyIsIlVybEdlbmVyYXRvciIsInJvdXRlQ29sbGVjdGlvbiIsIl9yb3V0ZUNvbGxlY3Rpb24iLCJPYmplY3QiLCJhc3NpZ24iLCJzY2hlbWUiLCJsb2NhdGlvbiIsInByb3RvY29sIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiaXNTZWN1cmUiLCJfY29udGV4dCIsInBhdGhpbmZvIiwicGF0aG5hbWUiLCJob3N0IiwiaG9zdG5hbWUiLCJodHRwUG9ydCIsInBvcnQiLCJodHRwc1BvcnQiLCJxdWVyeVN0cmluZyIsInNlYXJjaCIsImVudHJpZXMiLCJuYW1lIiwicm91dGUiLCJwYXJhbWV0ZXJzIiwicmVmZXJlbmNlVHlwZSIsIkFCU09MVVRFX1BBVEgiLCJfZG9HZW5lcmF0ZSIsInZhcmlhYmxlcyIsImRlZmF1bHRzIiwidG9rZW5zIiwiaG9zdFRva2VucyIsInNjaGVtZXMiLCJyZXF1aXJlZFNjaGVtZXMiLCJtZXJnZWRQYXJhbXMiLCJkaWZmIiwiZmlsdGVyIiwiaGFzT3duUHJvcGVydHkiLCJsZW5ndGgiLCJqb2luIiwidXJsIiwib3B0aW9uYWwiLCJtZXNzYWdlIiwidG9rZW4iLCJTdHJpbmciLCJyZWdleCIsIlJlZ0V4cCIsInRlc3QiLCJfX2p5bWZvbnkiLCJzdHJ0ciIsImVuY29kZVVSSUNvbXBvbmVudCIsInN1YnN0ciIsInNjaGVtZUF1dGhvcml0eSIsImluZGV4T2YiLCJBQlNPTFVURV9VUkwiLCJyb3V0ZUhvc3QiLCJORVRXT1JLX1BBVEgiLCJSRUxBVElWRV9QQVRIIiwiZ2V0UmVsYXRpdmVQYXRoIiwiZXh0cmFzIiwia2V5cyIsInByb3RvdHlwZSIsImNhbGwiLCJmcmFnbWVudCIsIl9mcmFnbWVudCIsImlkeCIsInRvSGFzaFRhYmxlIiwib2JqIiwiaXNPYmplY3RMaXRlcmFsIiwiaXNBcnJheSIsInRhYmxlIiwiSGFzaFRhYmxlIiwiZ2V0RW50cmllcyIsImsiLCJ2IiwicHV0IiwidG9RdWVyeSIsImtleSIsInZhbHVlIiwiYmFzZSIsIkFycmF5IiwiZnJvbSIsIm1hcCIsImVsIiwiaHQiLCJyZWR1Y2UiLCJyZXMiLCJxdWVyeSIsImJhc2VQYXRoIiwidGFyZ2V0UGF0aCIsInNvdXJjZURpcnMiLCJjaGFyQXQiLCJzcGxpdCIsInRhcmdldERpcnMiLCJwb3AiLCJ0YXJnZXRGaWxlIiwiaSIsImRpciIsInB1c2giLCJwYXRoIiwicmVwZWF0IiwiY29sb25Qb3MiLCJzbGFzaFBvcyIsIndpbmRvdyIsIkdlbmVyaWNDb2xsZWN0aW9uVHJhaXQiLCJJTklUSUFMX1NJWkUiLCJoYXNoIiwic3RyIiwiY2hhckNvZGVBdCIsImlzTnVtZXJpY0ludCIsInZhbCIsIkVudHJ5IiwiaGFzaENvZGUiLCJuZXh0IiwidW5kZWZpbmVkIiwicHJldiIsImJ1Y2tldFNpemUiLCJfYnVja2V0U2l6ZSIsImNsZWFyIiwiX2J1Y2tldHMiLCJmaWxsIiwiX2ZpcnN0IiwiX2xhc3QiLCJfbGVuZ3RoIiwiX2xhc3ROdW1lcmljSWR4IiwiZW50cnkiLCJidWNrZXRJZHgiLCJfYWRkIiwiZSIsImNvcHkiLCJsYXN0IiwiX3NlYXJjaCIsInJlc29sdmUiLCJ0b09iamVjdCIsInRvQXJyYXkiLCJ0dXBsZSIsIlN5bWJvbCIsIml0ZXJhdG9yIiwibWl4IiwiZ2xvYmFsIiwidG9TdHJpbmdUYWciLCJjb25zdHJ1Y3RvciIsImdldFRyYWl0IiwiaXNHZW5lcmF0b3IiLCJ0aHJvdyIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJkaXNwbGF5TmFtZSIsIlBsYXRmb3JtIiwiaGFzQXN5bmNGdW5jdGlvblN1cHBvcnQiLCJpc0FzeW5jRnVuY3Rpb24iLCJpc0Z1bmN0aW9uIiwiQm91bmRGdW5jdGlvbiIsInRvU3RyaW5nIiwiTWl4aW5zIiwiQ0xBU1NfVFlQRSIsImNoZWNrZWRDbGFzc2VzQ2FjaGUiLCJTZXQiLCJJbnRlcmZhY2VzIiwibWl4aW4iLCJjbGFzc1R5cGVTeW1ib2wiLCJkZWZpbml0aW9uIiwiY2hlY2tzIiwiaGFzIiwiZ2V0RnVuY3Rpb25zIiwiZGVzY3JpcHRvciIsImZuIiwiU3ludGF4RXJyb3IiLCJwcm9wZXJ0eSIsInRhcmdldCIsInRhcmdldERlc2NyaXB0b3IiLCJnZXRQcm9wZXJ0eURlc2NyaXB0b3IiLCJzcHJpbnRmIiwiZ2V0Iiwic2V0IiwiYWRkIiwiY3JlYXRlTWl4aW4iLCJzZXRQcm90b3R5cGVPZiIsImhhc0luc3RhbmNlIiwiX2NyZWF0ZUhhc0luc3RhbmNlIiwiaXNPYmplY3QiLCJvIiwibWl4aW5zIiwiYXBwbGllZEludGVyZmFjZXNTeW1ib2wiLCJGdW5jdGlvblByb3BzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsIkZ1bmN0aW9uIiwic3ltT3V0ZXJNaXhpbiIsInN5bUFwcGxpZWRJbnRlcmZhY2VzIiwic3ltQ2xhc3NUeXBlIiwiY2IiLCJjb25zdHJ1Y3RDYiIsInN1cGVyY2xhc3MiLCJtIiwiYXJncyIsImlzTWl4aW4iLCJnZXRDb25zdGFudHNOYW1lcyIsImNvbnN0YW50IiwicHJvcEtleSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImdldFByb3RvdHlwZU9mIiwiY2hhaW4iLCJfZ2V0Q2xhc3NDaGFpbiIsImdlbiIsImlzU3RhdGljIiwiUCIsInBhcmVudCIsInVuc2hpZnQiLCJUcmFpdHMiLCJpbmhlcml0cyIsIk1hcCIsImdldE93blByb3BlcnR5U3ltYm9scyIsInAiLCJwcm9wIiwiZGVmaW5lUHJvcGVydHkiLCJ0cmFpdCIsIl9fY29uc3RydWN0Iiwib2JqZW50cmllcyIsIm9iamVjdCIsIl9hc3luY1N1cHBvcnQiLCJfbW9kZXJuUmVnZXgiLCJldmFsIiwicHJvY2VzcyIsInBsYXRmb3JtIiwicmVnZXhfcXVvdGUiLCJzdHJpbmciLCJyZXBsYWNlUGFpcnMiLCJzZWFyY2hQYXR0ZXJuIiwibWF0Y2giLCJhcmciLCJwcmltaXRpdmVzIiwiTnVtYmVyIiwiQm9vbGVhbiIsImlzU2NhbGFyIiwicHJvdG8iLCJ0eXBlIiwiaXNQcm9taXNlIiwidGhlbiIsImlzU3RyZWFtIiwic3RyZWFtIiwicGlwZSIsImdldEludGVyZmFjZSIsImNyZWF0ZSIsImlzSW50ZXJmYWNlIiwiaXNUcmFpdCIsImdldEludGVyZmFjZXMiLCJDbGFzcyIsIkpPYmplY3QiLCJhIiwiYiIsImludGVyZmFjZXMiLCJvdXRlciIsImdldE1peGluIiwibWl4ZWQiLCJzIiwiZW51bWVyYWJsZSIsImltcGxlbWVudGF0aW9uT2YiLCJjYWNoZWRTZXRUaW1lb3V0IiwiY2FjaGVkQ2xlYXJUaW1lb3V0IiwiZGVmYXVsdFNldFRpbW91dCIsImRlZmF1bHRDbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsInF1ZXVlIiwiZHJhaW5pbmciLCJjdXJyZW50UXVldWUiLCJxdWV1ZUluZGV4IiwiY2xlYW5VcE5leHRUaWNrIiwiY29uY2F0IiwiZHJhaW5RdWV1ZSIsInRpbWVvdXQiLCJsZW4iLCJydW4iLCJuZXh0VGljayIsImFyZ3VtZW50cyIsIkl0ZW0iLCJhcnJheSIsImFwcGx5IiwidGl0bGUiLCJicm93c2VyIiwiZW52IiwiYXJndiIsInZlcnNpb24iLCJ2ZXJzaW9ucyIsIm5vb3AiLCJvbiIsImFkZExpc3RlbmVyIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiZW1pdCIsInByZXBlbmRMaXN0ZW5lciIsInByZXBlbmRPbmNlTGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJ1bWFzayIsIk9wIiwiaGFzT3duIiwiJFN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsImluTW9kdWxlIiwicnVudGltZSIsInJlZ2VuZXJhdG9yUnVudGltZSIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY29udGV4dCIsIkNvbnRleHQiLCJfaW52b2tlIiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZXJyIiwiR2VuU3RhdGVTdXNwZW5kZWRTdGFydCIsIkdlblN0YXRlU3VzcGVuZGVkWWllbGQiLCJHZW5TdGF0ZUV4ZWN1dGluZyIsIkdlblN0YXRlQ29tcGxldGVkIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJnZW5GdW4iLCJjdG9yIiwibWFyayIsIl9fcHJvdG9fXyIsImF3cmFwIiwiX19hd2FpdCIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJQcm9taXNlIiwidW53cmFwcGVkIiwicHJldmlvdXNQcm9taXNlIiwiZW5xdWV1ZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiYXN5bmMiLCJpdGVyIiwiZG9uZSIsInN0YXRlIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJyZXR1cm4iLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsInJldmVyc2UiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJza2lwVGVtcFJlc2V0Iiwic2xpY2UiLCJzdG9wIiwicm9vdEVudHJ5Iiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJnIiwid2VicGFja1BvbHlmaWxsIiwiZGVwcmVjYXRlIiwicGF0aHMiLCJjaGlsZHJlbiIsImwiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFD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Q0E7QUFDQTs7QUFFQTlHLE9BQU9DLE9BQVAsR0FBaUIyWixDQUFqQixDOzs7Ozs7Ozs7Ozs7OztBQ25CQTVaLE9BQU9DLE9BQVAsR0FBaUIsVUFBU0QsTUFBVCxFQUFpQjtBQUNqQyxLQUFJLENBQUNBLE9BQU82WixlQUFaLEVBQTZCO0FBQzVCN1osU0FBTzhaLFNBQVAsR0FBbUIsWUFBVyxDQUFFLENBQWhDO0FBQ0E5WixTQUFPK1osS0FBUCxHQUFlLEVBQWY7QUFDQTtBQUNBLE1BQUksQ0FBQy9aLE9BQU9nYSxRQUFaLEVBQXNCaGEsT0FBT2dhLFFBQVAsR0FBa0IsRUFBbEI7QUFDdEJ0WixTQUFPa04sY0FBUCxDQUFzQjVOLE1BQXRCLEVBQThCLFFBQTlCLEVBQXdDO0FBQ3ZDcVEsZUFBWSxJQUQyQjtBQUV2Q2xGLFFBQUssZUFBVztBQUNmLFdBQU9uTCxPQUFPaWEsQ0FBZDtBQUNBO0FBSnNDLEdBQXhDO0FBTUF2WixTQUFPa04sY0FBUCxDQUFzQjVOLE1BQXRCLEVBQThCLElBQTlCLEVBQW9DO0FBQ25DcVEsZUFBWSxJQUR1QjtBQUVuQ2xGLFFBQUssZUFBVztBQUNmLFdBQU9uTCxPQUFPdUcsQ0FBZDtBQUNBO0FBSmtDLEdBQXBDO0FBTUF2RyxTQUFPNlosZUFBUCxHQUF5QixDQUF6QjtBQUNBO0FBQ0QsUUFBTzdaLE1BQVA7QUFDQSxDQXJCRCxDIiwiZmlsZSI6InVybC1nZW5lcmF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9pbmRleC5qc1wiKTtcbiIsIi8qKlxuICogQmFzZSBFcnJvciBjbGFzcy5cbiAqL1xuY2xhc3MgSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uIGV4dGVuZHMgRXJyb3Ige1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEludmFsaWRBcmd1bWVudEV4Y2VwdGlvbjtcbiIsImNvbnN0IEludmFsaWRBcmd1bWVudEV4Y2VwdGlvbiA9IHJlcXVpcmUoJy4vSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uJyk7XG5cbi8qKlxuICogRXhjZXB0aW9uIHRocm93biB3aGVuIGEgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZC5cbiAqL1xuY2xhc3MgSW52YWxpZFBhcmFtZXRlckV4Y2VwdGlvbiBleHRlbmRzIEludmFsaWRBcmd1bWVudEV4Y2VwdGlvbiB7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW52YWxpZFBhcmFtZXRlckV4Y2VwdGlvbjtcbiIsImNvbnN0IEludmFsaWRBcmd1bWVudEV4Y2VwdGlvbiA9IHJlcXVpcmUoJy4vSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uJyk7XG5cbi8qKlxuICogRXhjZXB0aW9uIHRocm93biB3aGVuIGEgcm91dGUgY2Fubm90IGJlIGdlbmVyYXRlZCBiZWNhdXNlIG9mIG1pc3NpbmdcbiAqIG1hbmRhdG9yeSBwYXJhbWV0ZXJzLlxuICovXG5jbGFzcyBNaXNzaW5nTWFuZGF0b3J5UGFyYW1ldGVyc0V4Y2VwdGlvbiBleHRlbmRzIEludmFsaWRBcmd1bWVudEV4Y2VwdGlvbiB7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWlzc2luZ01hbmRhdG9yeVBhcmFtZXRlcnNFeGNlcHRpb247XG4iLCJjb25zdCBJbnZhbGlkQXJndW1lbnRFeGNlcHRpb24gPSByZXF1aXJlKCcuL0ludmFsaWRBcmd1bWVudEV4Y2VwdGlvbicpO1xuXG4vKipcbiAqIEV4Y2VwdGlvbiB0aHJvd24gd2hlbiBhIHJvdXRlIGRvZXMgbm90IGV4aXN0LlxuICovXG5jbGFzcyBSb3V0ZU5vdEZvdW5kRXhjZXB0aW9uIGV4dGVuZHMgSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uIHtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSb3V0ZU5vdEZvdW5kRXhjZXB0aW9uO1xuIiwicmVxdWlyZSgnQGp5bWZvbnkvdXRpbC9saWIvUGxhdGZvcm0nKTtcbnJlcXVpcmUoJ0BqeW1mb255L3V0aWwvbGliL2lzJyk7XG5yZXF1aXJlKCdAanltZm9ueS91dGlsL2xpYi9PYmplY3QvZW50cmllcycpO1xucmVxdWlyZSgnQGp5bWZvbnkvdXRpbC9saWIvUmVnZXgvcXVvdGUnKTtcbnJlcXVpcmUoJ0BqeW1mb255L3V0aWwvbGliL1N0cmluZy9zdHJ0cicpO1xucmVxdWlyZSgnQGp5bWZvbnkvdXRpbC9saWIvbWl4aW5zJyk7XG5yZXF1aXJlKCdAanltZm9ueS9kYXRhc3RydWN0dXJlL3NyYy9IYXNoVGFibGUnKTtcblxuY29uc3QgSW52YWxpZFBhcmFtZXRlckV4Y2VwdGlvbiA9IHJlcXVpcmUoJy4vRXhjZXB0aW9uL0ludmFsaWRQYXJhbWV0ZXJFeGNlcHRpb24nKTtcbmNvbnN0IE1pc3NpbmdNYW5kYXRvcnlQYXJhbWV0ZXJzRXhjZXB0aW9uID0gcmVxdWlyZSgnLi9FeGNlcHRpb24vTWlzc2luZ01hbmRhdG9yeVBhcmFtZXRlcnNFeGNlcHRpb24nKTtcbmNvbnN0IFJvdXRlTm90Rm91bmRFeGNlcHRpb24gPSByZXF1aXJlKCcuL0V4Y2VwdGlvbi9Sb3V0ZU5vdEZvdW5kRXhjZXB0aW9uJyk7XG5cbmNvbnN0IGRlY29kZWRDaGFycyA9IHtcbiAgICAnJTJGJzogJy8nLFxuICAgICclNDAnOiAnQCcsXG4gICAgJyUzQSc6ICc6JyxcbiAgICAnJTNCJzogJzsnLFxuICAgICclMkMnOiAnLCcsXG4gICAgJyUzRCc6ICc9JyxcbiAgICAnJTJCJzogJysnLFxuICAgICclMjEnOiAnIScsXG4gICAgJyUyQSc6ICcqJyxcbiAgICAnJTdDJzogJ3wnLFxufTtcblxuY2xhc3MgVXJsR2VuZXJhdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcihyb3V0ZUNvbGxlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5fcm91dGVDb2xsZWN0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgcm91dGVDb2xsZWN0aW9uKTtcblxuICAgICAgICBjb25zdCBzY2hlbWUgPSBsb2NhdGlvbi5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBpc1NlY3VyZSA9IHNjaGVtZSA9PT0gJ2h0dHBzJztcblxuICAgICAgICB0aGlzLl9jb250ZXh0ID0ge1xuICAgICAgICAgICAgcGF0aGluZm86IGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgICAgICAgaG9zdDogbG9jYXRpb24uaG9zdG5hbWUsXG4gICAgICAgICAgICBzY2hlbWUsXG4gICAgICAgICAgICBodHRwUG9ydDogaXNTZWN1cmUgPyA4MCA6IH5+KGxvY2F0aW9uLnBvcnQgfHwgODApLFxuICAgICAgICAgICAgaHR0cHNQb3J0OiBpc1NlY3VyZSA/IH5+KGxvY2F0aW9uLnBvcnQgfHwgNDQzKSA6IDQ0MyxcbiAgICAgICAgICAgIHF1ZXJ5U3RyaW5nOiBsb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgcm91dGVzIHRvIHJvdXRlciBjb2xsZWN0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBPYmplY3Q+fSByb3V0ZUNvbGxlY3Rpb25cbiAgICAgKi9cbiAgICBhZGRSb3V0ZXMocm91dGVDb2xsZWN0aW9uKSB7XG4gICAgICAgIGZvciAoY29uc3QgWyBuYW1lLCByb3V0ZSBdIG9mIE9iamVjdC5lbnRyaWVzKHJvdXRlQ29sbGVjdGlvbikpIHtcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlQ29sbGVjdGlvbltuYW1lXSA9IHJvdXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgVVJMIG9yIHBhdGggZm9yIGEgc3BlY2lmaWMgcm91dGUgYmFzZWQgb24gdGhlIGdpdmVuIHBhcmFtZXRlcnMuXG4gICAgICpcbiAgICAgKiBQYXJhbWV0ZXJzIHRoYXQgcmVmZXJlbmNlIHBsYWNlaG9sZGVycyBpbiB0aGUgcm91dGUgcGF0dGVybiB3aWxsIHN1YnN0aXR1dGUgdGhlbSBpbiB0aGVcbiAgICAgKiBwYXRoIG9yIGhvc3QuIEV4dHJhIHBhcmFtcyBhcmUgYWRkZWQgYXMgcXVlcnkgc3RyaW5nIHRvIHRoZSBVUkwuXG4gICAgICpcbiAgICAgKiBXaGVuIHRoZSBwYXNzZWQgcmVmZXJlbmNlIHR5cGUgY2Fubm90IGJlIGdlbmVyYXRlZCBmb3IgdGhlIHJvdXRlIGJlY2F1c2UgaXQgcmVxdWlyZXMgYSBkaWZmZXJlbnRcbiAgICAgKiBob3N0IG9yIHNjaGVtZSB0aGFuIHRoZSBjdXJyZW50IG9uZSwgdGhlIG1ldGhvZCB3aWxsIHJldHVybiBhIG1vcmUgY29tcHJlaGVuc2l2ZSByZWZlcmVuY2VcbiAgICAgKiB0aGF0IGluY2x1ZGVzIHRoZSByZXF1aXJlZCBwYXJhbXMuIEZvciBleGFtcGxlLCB3aGVuIHlvdSBjYWxsIHRoaXMgbWV0aG9kIHdpdGggcmVmZXJlbmNlVHlwZSA9IEFCU09MVVRFX1BBVEhcbiAgICAgKiBidXQgdGhlIHJvdXRlIHJlcXVpcmVzIHRoZSBodHRwcyBzY2hlbWUgd2hlcmVhcyB0aGUgY3VycmVudCBzY2hlbWUgaXMgaHR0cCwgaXQgd2lsbCBpbnN0ZWFkIHJldHVybiBhblxuICAgICAqIEFCU09MVVRFX1VSTCB3aXRoIHRoZSBodHRwcyBzY2hlbWUgYW5kIHRoZSBjdXJyZW50IGhvc3QuIFRoaXMgbWFrZXMgc3VyZSB0aGUgZ2VuZXJhdGVkIFVSTCBtYXRjaGVzXG4gICAgICogdGhlIHJvdXRlIGluIGFueSBjYXNlLlxuICAgICAqXG4gICAgICogV2lsbCB0aHJvdyBhbiBlcnJvciBpZiB0aGVyZSBpcyBubyByb3V0ZSB3aXRoIHRoZSBnaXZlbiBuYW1lXG4gICAgICpcbiAgICAgKiBUaGUgc3BlY2lhbCBwYXJhbWV0ZXIgX2ZyYWdtZW50IHdpbGwgYmUgdXNlZCBhcyB0aGUgZG9jdW1lbnQgZnJhZ21lbnQgc3VmZml4ZWQgdG8gdGhlIGZpbmFsIFVSTC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCAqPn0gcGFyYW1ldGVyc1xuICAgICAqIEBwYXJhbSB7aW50fSByZWZlcmVuY2VUeXBlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdlbmVyYXRlKG5hbWUsIHBhcmFtZXRlcnMgPSB7fSwgcmVmZXJlbmNlVHlwZSA9IFVybEdlbmVyYXRvci5BQlNPTFVURV9QQVRIKSB7XG4gICAgICAgIGNvbnN0IHJvdXRlID0gdGhpcy5fcm91dGVDb2xsZWN0aW9uW25hbWVdO1xuICAgICAgICBpZiAodm9pZCAwID09PSByb3V0ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJvdXRlTm90Rm91bmRFeGNlcHRpb24oYFVuYWJsZSB0byBnZW5lcmF0ZSBhIFVSTCBmb3IgdGhlIG5hbWVkIHJvdXRlIFwiJHtuYW1lfVwiIGFzIHN1Y2ggcm91dGUgZG9lcyBub3QgZXhpc3QuYCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fZG9HZW5lcmF0ZShcbiAgICAgICAgICAgIHJvdXRlLnZhcmlhYmxlcyxcbiAgICAgICAgICAgIHJvdXRlLmRlZmF1bHRzLFxuICAgICAgICAgICAgcm91dGUudG9rZW5zLFxuICAgICAgICAgICAgcGFyYW1ldGVycyxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICByZWZlcmVuY2VUeXBlLFxuICAgICAgICAgICAgcm91dGUuaG9zdFRva2VucyxcbiAgICAgICAgICAgIHJvdXRlLnNjaGVtZXNcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEbyBnZW5lcmF0ZSBhbiBhZGRyZXNzIGZyb20gcm91dGUgY29tcG9uZW50cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nW119IHZhcmlhYmxlc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgc3RyaW5nPn0gZGVmYXVsdHNcbiAgICAgKiBAcGFyYW0ge1tbc3RyaW5nXV19IHRva2Vuc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgKj59IHBhcmFtZXRlcnNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7aW50fSByZWZlcmVuY2VUeXBlXG4gICAgICogQHBhcmFtIHtbW3N0cmluZ11dfSBob3N0VG9rZW5zXG4gICAgICogQHBhcmFtIHtbc3RyaW5nXX0gcmVxdWlyZWRTY2hlbWVzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfZG9HZW5lcmF0ZSh2YXJpYWJsZXMsIGRlZmF1bHRzLCB0b2tlbnMsIHBhcmFtZXRlcnMsIG5hbWUsIHJlZmVyZW5jZVR5cGUsIGhvc3RUb2tlbnMsIHJlcXVpcmVkU2NoZW1lcyA9IFtdKSB7XG4gICAgICAgIGNvbnN0IG1lcmdlZFBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRzLCBwYXJhbWV0ZXJzKTtcblxuICAgICAgICBjb25zdCBkaWZmID0gdmFyaWFibGVzLmZpbHRlcihuYW1lID0+ICFtZXJnZWRQYXJhbXMuaGFzT3duUHJvcGVydHkobmFtZSkpO1xuICAgICAgICBpZiAoZGlmZi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBNaXNzaW5nTWFuZGF0b3J5UGFyYW1ldGVyc0V4Y2VwdGlvbihgU29tZSBtYW5kYXRvcnkgcGFyYW1ldGVycyBhcmUgbWlzc2luZyAoXCIke2RpZmYuam9pbignXCIsIFwiJyl9XCIpIHRvIGdlbmVyYXRlIGEgVVJMIGZvciByb3V0ZSBcIiR7bmFtZX1cIi5gKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHVybCA9ICcnO1xuICAgICAgICBsZXQgb3B0aW9uYWwgPSB0cnVlO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ1BhcmFtZXRlciBcIntwYXJhbWV0ZXJ9XCIgZm9yIHJvdXRlIFwie3JvdXRlfVwiIG11c3QgbWF0Y2ggXCJ7ZXhwZWN0ZWR9XCIgKFwie2dpdmVufVwiIGdpdmVuKSB0byBnZW5lcmF0ZSBhIGNvcnJlc3BvbmRpbmcgVVJMLic7XG5cbiAgICAgICAgZm9yIChjb25zdCB0b2tlbiBvZiB0b2tlbnMpIHtcbiAgICAgICAgICAgIGlmICgndmFyaWFibGUnID09PSB0b2tlblswXSkge1xuICAgICAgICAgICAgICAgIGlmICghb3B0aW9uYWwgfHwgIWRlZmF1bHRzLmhhc093blByb3BlcnR5KHRva2VuWzNdKSB8fCB2b2lkIDAgIT09IG1lcmdlZFBhcmFtc1t0b2tlblszXV0gJiYgU3RyaW5nKG1lcmdlZFBhcmFtc1t0b2tlblszXV0pICE9PSBTdHJpbmcoZGVmYXVsdHNbdG9rZW5bM11dKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoJ14nICsgdG9rZW5bMl0gKyAnJCcsICEhdG9rZW5bNF0gPyAndScgOiAnJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIHJlZ2V4LnRlc3QobWVyZ2VkUGFyYW1zW3Rva2VuWzNdXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBJbnZhbGlkUGFyYW1ldGVyRXhjZXB0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fanltZm9ueS5zdHJ0cihtZXNzYWdlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd7cGFyYW1ldGVyfSc6IHRva2VuWzNdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAne3JvdXRlfSc6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd7ZXhwZWN0ZWR9JzogdG9rZW5bMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd7Z2l2ZW59JzogbWVyZ2VkUGFyYW1zW3Rva2VuWzNdXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdXJsID0gdG9rZW5bMV0gKyBtZXJnZWRQYXJhbXNbdG9rZW5bM11dICsgdXJsO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25hbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdXJsID0gdG9rZW5bMV0gKyB1cmw7XG4gICAgICAgICAgICAgICAgb3B0aW9uYWwgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1cmwgPT09ICcnKSB7XG4gICAgICAgICAgICB1cmwgPSAnLyc7XG4gICAgICAgIH1cblxuICAgICAgICB1cmwgPSBfX2p5bWZvbnkuc3RydHIoXG4gICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQodXJsKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csICclMjcnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXCgvZywgJyUyOCcpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcKS9nLCAnJTI5JyksXG4gICAgICAgICAgICBkZWNvZGVkQ2hhcnNcbiAgICAgICAgKTtcblxuICAgICAgICAvLyB0aGUgcGF0aCBzZWdtZW50cyBcIi5cIiBhbmQgXCIuLlwiIGFyZSBpbnRlcnByZXRlZCBhcyByZWxhdGl2ZSByZWZlcmVuY2Ugd2hlbiByZXNvbHZpbmcgYSBVUkk7IHNlZSBodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tMy4zXG4gICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gZW5jb2RlIHRoZW0gYXMgdGhleSBhcmUgbm90IHVzZWQgZm9yIHRoaXMgcHVycG9zZSBoZXJlXG4gICAgICAgIC8vIG90aGVyd2lzZSB3ZSB3b3VsZCBnZW5lcmF0ZSBhIFVSSSB0aGF0LCB3aGVuIGZvbGxvd2VkIGJ5IGEgdXNlciBhZ2VudCAoZS5nLiBicm93c2VyKSwgZG9lcyBub3QgbWF0Y2ggdGhpcyByb3V0ZVxuICAgICAgICB1cmwgPSBfX2p5bWZvbnkuc3RydHIodXJsLCB7Jy8uLi8nOiAnLyUyRSUyRS8nLCAnLy4vJzogJy8lMkUvJ30pO1xuICAgICAgICBpZiAoJy8uLicgPT09IHVybC5zdWJzdHIoLTMpKSB7XG4gICAgICAgICAgICB1cmwgPSB1cmwuc3Vic3RyKDAsIC0yKSArICclMkUlMkUnO1xuICAgICAgICB9IGVsc2UgaWYgKCcvLicgPT09IHVybC5zdWJzdHIoLTIpKSB7XG4gICAgICAgICAgICB1cmwgPSB1cmwuc3Vic3RyKDAsIC0xKSArICclMkUnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNjaGVtZUF1dGhvcml0eSA9ICcnO1xuICAgICAgICBsZXQgaG9zdCA9IHRoaXMuX2NvbnRleHQuaG9zdDtcbiAgICAgICAgaWYgKCEhIGhvc3QpIHtcbiAgICAgICAgICAgIGxldCBzY2hlbWUgPSB0aGlzLl9jb250ZXh0LnNjaGVtZTtcbiAgICAgICAgICAgIGlmIChyZXF1aXJlZFNjaGVtZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkU2NoZW1lcy5pbmRleE9mKHNjaGVtZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZVR5cGUgPSBVcmxHZW5lcmF0b3IuQUJTT0xVVEVfVVJMO1xuICAgICAgICAgICAgICAgICAgICBzY2hlbWUgPSByZXF1aXJlZFNjaGVtZXNbMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaG9zdFRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsZXQgcm91dGVIb3N0ID0gJyc7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCB0b2tlbiBvZiBob3N0VG9rZW5zKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgndmFyaWFibGUnID09PSB0b2tlblswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCdeJyArIHRva2VuWzJdICsgJyQnLCAhIXRva2VuWzRdID8gJ3UnIDogJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEgcmVnZXgudGVzdChtZXJnZWRQYXJhbXNbdG9rZW5bM11dKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBJbnZhbGlkUGFyYW1ldGVyRXhjZXB0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX2p5bWZvbnkuc3RydHIobWVzc2FnZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3twYXJhbWV0ZXJ9JzogdG9rZW5bM10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAne3JvdXRlfSc6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAne2V4cGVjdGVkfSc6IHRva2VuWzJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3tnaXZlbn0nOiBtZXJnZWRQYXJhbXNbdG9rZW5bM11dXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVIb3N0ID0gdG9rZW5bMV0gKyBtZXJnZWRQYXJhbXNbdG9rZW5bM11dICsgcm91dGVIb3N0O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVIb3N0ID0gdG9rZW5bMV0gKyByb3V0ZUhvc3Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocm91dGVIb3N0ICE9PSBob3N0KSB7XG4gICAgICAgICAgICAgICAgICAgIGhvc3QgPSByb3V0ZUhvc3Q7XG4gICAgICAgICAgICAgICAgICAgIGlmIChVcmxHZW5lcmF0b3IuQUJTT0xVVEVfVVJMICE9PSByZWZlcmVuY2VUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2VUeXBlID0gVXJsR2VuZXJhdG9yLk5FVFdPUktfUEFUSDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFVybEdlbmVyYXRvci5BQlNPTFVURV9VUkwgPT09IHJlZmVyZW5jZVR5cGUgfHwgVXJsR2VuZXJhdG9yLk5FVFdPUktfUEFUSCA9PT0gcmVmZXJlbmNlVHlwZSkge1xuICAgICAgICAgICAgICAgIGxldCBwb3J0ID0gJyc7XG4gICAgICAgICAgICAgICAgaWYgKCdodHRwJyA9PT0gc2NoZW1lICYmIDgwICE9PSB0aGlzLl9jb250ZXh0Lmh0dHBQb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcnQgKz0gJzonICsgdGhpcy5fY29udGV4dC5odHRwUG9ydDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCdodHRwcycgPT09IHNjaGVtZSAmJiA0NDMgIT09IHRoaXMuX2NvbnRleHQuaHR0cHNQb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcnQgKz0gJzonICsgdGhpcy5fY29udGV4dC5odHRwc1BvcnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2NoZW1lQXV0aG9yaXR5ID0gVXJsR2VuZXJhdG9yLk5FVFdPUktfUEFUSCA9PT0gcmVmZXJlbmNlVHlwZSA/ICcvLycgOiBgJHtzY2hlbWV9Oi8vYDtcbiAgICAgICAgICAgICAgICBzY2hlbWVBdXRob3JpdHkgKz0gaG9zdCArIHBvcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVXJsR2VuZXJhdG9yLlJFTEFUSVZFX1BBVEggPT09IHJlZmVyZW5jZVR5cGUpIHtcbiAgICAgICAgICAgIHVybCA9IFVybEdlbmVyYXRvci5nZXRSZWxhdGl2ZVBhdGgodGhpcy5fY29udGV4dC5wYXRoaW5mbywgdXJsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVybCA9IHNjaGVtZUF1dGhvcml0eSArIHVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCBhIHF1ZXJ5IHN0cmluZyBpZiBuZWVkZWRcbiAgICAgICAgY29uc3QgZXh0cmFzID0gT2JqZWN0LmtleXMocGFyYW1ldGVycylcbiAgICAgICAgICAgIC5maWx0ZXIobmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhcmlhYmxlcy5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkZWZhdWx0cywgbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRzW25hbWVdICE9IHBhcmFtZXRlcnNbbmFtZV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAvLyBleHRyYWN0IGZyYWdtZW50XG4gICAgICAgIGxldCBmcmFnbWVudCA9ICcnO1xuICAgICAgICBpZiAoZGVmYXVsdHMuX2ZyYWdtZW50KSB7XG4gICAgICAgICAgICBmcmFnbWVudCA9IGRlZmF1bHRzLl9mcmFnbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpZHg7XG4gICAgICAgIGlmICgoaWR4ID0gZXh0cmFzLmluZGV4T2YoJ19mcmFnbWVudCcpKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGZyYWdtZW50ID0gcGFyYW1ldGVycy5fZnJhZ21lbnQ7XG4gICAgICAgICAgICBkZWxldGUgZXh0cmFzW2lkeF07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXh0cmFzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgdG9IYXNoVGFibGUgPSAob2JqKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCEgaXNPYmplY3RMaXRlcmFsKG9iaikgJiYgISBpc0FycmF5KG9iaikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0YWJsZSA9IG5ldyBIYXNoVGFibGUoKTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBfX2p5bWZvbnkuZ2V0RW50cmllcyhvYmopKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlLnB1dChrLCB0b0hhc2hUYWJsZSh2KSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhYmxlO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgdG9RdWVyeSA9IChrZXksIHZhbHVlLCBiYXNlID0gJycpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBIYXNoVGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKGVsID0+IHRvUXVlcnkoZWxbMF0sIGVsWzFdLCBiYXNlID8gYmFzZSArICdbJyArIGtleSArICddJyA6IGtleSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAuam9pbignJicpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoYmFzZSA/IGJhc2UgKyAnWycgKyBrZXkgKyAnXScgOiBrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGh0ID0gdG9IYXNoVGFibGUoT2JqZWN0LmtleXMoIHBhcmFtZXRlcnMgKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoIGtleSA9PiBleHRyYXMuaW5kZXhPZihrZXkpICE9PSAtMSApXG4gICAgICAgICAgICAgICAgLnJlZHVjZSggKHJlcywga2V5KSA9PiAocmVzW2tleV0gPSBwYXJhbWV0ZXJzW2tleV0sIHJlcyksIHt9ICkpO1xuXG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9IEFycmF5LmZyb20oaHQpXG4gICAgICAgICAgICAgICAgLm1hcChlbCA9PiB0b1F1ZXJ5KGVsWzBdLCBlbFsxXSkpXG4gICAgICAgICAgICAgICAgLmpvaW4oJyYnKTtcblxuICAgICAgICAgICAgdXJsICs9ICc/JyArIF9fanltZm9ueS5zdHJ0cihxdWVyeSwgeyclMkYnOiAnLyd9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgnJyAhPT0gZnJhZ21lbnQpIHtcbiAgICAgICAgICAgIGZyYWdtZW50ID0gZW5jb2RlVVJJQ29tcG9uZW50KGZyYWdtZW50KVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8hL2csICclMjEnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csICclMjcnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXCgvZywgJyUyOCcpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcKS9nLCAnJTI5JylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwqL2csICclMkEnKTtcblxuICAgICAgICAgICAgdXJsICs9ICcjJyArIF9fanltZm9ueS5zdHJ0cihmcmFnbWVudCwgeyclMkYnOiAnLycsICclM0YnOiAnPyd9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdGFyZ2V0IHBhdGggYXMgcmVsYXRpdmUgcmVmZXJlbmNlIGZyb20gdGhlIGJhc2UgcGF0aC5cbiAgICAgKlxuICAgICAqIE9ubHkgdGhlIFVSSXMgcGF0aCBjb21wb25lbnQgKG5vIHNjaGVtYSwgaG9zdCBldGMuKSBpcyByZWxldmFudCBhbmQgbXVzdCBiZSBnaXZlbiwgc3RhcnRpbmcgd2l0aCBhIHNsYXNoLlxuICAgICAqIEJvdGggcGF0aHMgbXVzdCBiZSBhYnNvbHV0ZSBhbmQgbm90IGNvbnRhaW4gcmVsYXRpdmUgcGFydHMuXG4gICAgICogUmVsYXRpdmUgVVJMcyBmcm9tIG9uZSByZXNvdXJjZSB0byBhbm90aGVyIGFyZSB1c2VmdWwgd2hlbiBnZW5lcmF0aW5nIHNlbGYtY29udGFpbmVkIGRvd25sb2FkYWJsZSBkb2N1bWVudCBhcmNoaXZlcy5cbiAgICAgKiBGdXJ0aGVybW9yZSwgdGhleSBjYW4gYmUgdXNlZCB0byByZWR1Y2UgdGhlIGxpbmsgc2l6ZSBpbiBkb2N1bWVudHMuXG4gICAgICpcbiAgICAgKiBFeGFtcGxlIHRhcmdldCBwYXRocywgZ2l2ZW4gYSBiYXNlIHBhdGggb2YgXCIvYS9iL2MvZFwiOlxuICAgICAqIC0gXCIvYS9iL2MvZFwiICAgICAtPiBcIlwiXG4gICAgICogLSBcIi9hL2IvYy9cIiAgICAgIC0+IFwiLi9cIlxuICAgICAqIC0gXCIvYS9iL1wiICAgICAgICAtPiBcIi4uL1wiXG4gICAgICogLSBcIi9hL2IvYy9vdGhlclwiIC0+IFwib3RoZXJcIlxuICAgICAqIC0gXCIvYS94L3lcIiAgICAgICAtPiBcIi4uLy4uL3gveVwiXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYmFzZVBhdGggICBUaGUgYmFzZSBwYXRoXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRhcmdldFBhdGggVGhlIHRhcmdldCBwYXRoXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcmVsYXRpdmUgdGFyZ2V0IHBhdGhcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UmVsYXRpdmVQYXRoKGJhc2VQYXRoLCB0YXJnZXRQYXRoKSB7XG4gICAgICAgIGlmIChiYXNlUGF0aCA9PT0gdGFyZ2V0UGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc291cmNlRGlycyA9ICgnLycgPT09IGJhc2VQYXRoLmNoYXJBdCgwKSA/IGJhc2VQYXRoLnN1YnN0cigxKSA6IGJhc2VQYXRoKS5zcGxpdCgnLycpO1xuICAgICAgICBjb25zdCB0YXJnZXREaXJzID0gKCcvJyA9PT0gdGFyZ2V0UGF0aC5jaGFyQXQoMCkgPyB0YXJnZXRQYXRoLnN1YnN0cigxKSA6IHRhcmdldFBhdGgpLnNwbGl0KCcvJyk7XG5cbiAgICAgICAgc291cmNlRGlycy5wb3AoKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0RmlsZSA9IHRhcmdldERpcnMucG9wKCk7XG5cbiAgICAgICAgZm9yIChjb25zdCBbIGksIGRpciBdIG9mIF9fanltZm9ueS5nZXRFbnRyaWVzKHNvdXJjZURpcnMpKSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0RGlyc1tpXSAmJiBkaXIgPT09IHRhcmdldERpcnNbaV0pIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgc291cmNlRGlyc1tpXTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGFyZ2V0RGlyc1tpXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXREaXJzLnB1c2godGFyZ2V0RmlsZSk7XG4gICAgICAgIGNvbnN0IHBhdGggPSAnLi4vJy5yZXBlYXQoc291cmNlRGlycy5sZW5ndGgpICsgdGFyZ2V0RGlycy5qb2luKCcvJyk7XG5cbiAgICAgICAgLy8gQSByZWZlcmVuY2UgdG8gdGhlIHNhbWUgYmFzZSBkaXJlY3Rvcnkgb3IgYW4gZW1wdHkgc3ViZGlyZWN0b3J5IG11c3QgYmUgcHJlZml4ZWQgd2l0aCBcIi4vXCIuXG4gICAgICAgIC8vIFRoaXMgYWxzbyBhcHBsaWVzIHRvIGEgc2VnbWVudCB3aXRoIGEgY29sb24gY2hhcmFjdGVyIChlLmcuLCBcImZpbGU6Y29sb25cIikgdGhhdCBjYW5ub3QgYmUgdXNlZFxuICAgICAgICAvLyBhcyB0aGUgZmlyc3Qgc2VnbWVudCBvZiBhIHJlbGF0aXZlLXBhdGggcmVmZXJlbmNlLCBhcyBpdCB3b3VsZCBiZSBtaXN0YWtlbiBmb3IgYSBzY2hlbWUgbmFtZVxuICAgICAgICAvLyAoc2VlIGh0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi00LjIpLlxuICAgICAgICBsZXQgY29sb25Qb3MsIHNsYXNoUG9zO1xuICAgICAgICByZXR1cm4gJycgPT09IHBhdGggfHwgJy8nID09PSBwYXRoLmNoYXJBdCgwKVxuICAgICAgICAgICAgfHwgLTEgIT09IChjb2xvblBvcyA9IHBhdGguaW5kZXhPZignOicpKSAmJiAoY29sb25Qb3MgPCAoc2xhc2hQb3MgPSBwYXRoLmluZGV4T2YoJy8nKSkgfHwgLTEgPT09IHNsYXNoUG9zKVxuICAgICAgICAgICAgPyBgLi8ke3BhdGh9YCA6IHBhdGg7XG4gICAgfVxufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhbiBhYnNvbHV0ZSBVUkwsIGUuZy4gXCJodHRwOi8vZXhhbXBsZS5jb20vZGlyL2ZpbGVcIi5cbiAqL1xuVXJsR2VuZXJhdG9yLkFCU09MVVRFX1VSTCA9IDA7XG5cbi8qKlxuICogR2VuZXJhdGVzIGFuIGFic29sdXRlIHBhdGgsIGUuZy4gXCIvZGlyL2ZpbGVcIi5cbiAqL1xuVXJsR2VuZXJhdG9yLkFCU09MVVRFX1BBVEggPSAxO1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHJlbGF0aXZlIHBhdGggYmFzZWQgb24gdGhlIGN1cnJlbnQgcmVxdWVzdCBwYXRoLCBlLmcuIFwiLi4vcGFyZW50LWZpbGVcIi5cbiAqXG4gKiBAc2VlIFVybEdlbmVyYXRvci5nZXRSZWxhdGl2ZVBhdGgoKVxuICovXG5VcmxHZW5lcmF0b3IuUkVMQVRJVkVfUEFUSCA9IDI7XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgbmV0d29yayBwYXRoLCBlLmcuIFwiLy9leGFtcGxlLmNvbS9kaXIvZmlsZVwiLlxuICogU3VjaCByZWZlcmVuY2UgcmV1c2VzIHRoZSBjdXJyZW50IHNjaGVtZSBidXQgc3BlY2lmaWVzIHRoZSBob3N0LlxuICovXG5VcmxHZW5lcmF0b3IuTkVUV09SS19QQVRIID0gMztcblxuZXhwb3J0IGRlZmF1bHQgVXJsR2VuZXJhdG9yO1xuIiwiaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCI7XG5pbXBvcnQgVXJsR2VuZXJhdG9yIGZyb20gJy4vVXJsR2VuZXJhdG9yJztcblxud2luZG93LlVybEdlbmVyYXRvciA9IFVybEdlbmVyYXRvcjtcbiIsImNvbnN0IEdlbmVyaWNDb2xsZWN0aW9uVHJhaXQgPSByZXF1aXJlKCcuL1RyYWl0cy9HZW5lcmljQ29sbGVjdGlvblRyYWl0Jyk7XG5jb25zdCBJTklUSUFMX1NJWkUgPSA2NDtcblxuLyoqXG4gKiBIYXNoaW5nIGZ1bmN0aW9uLlxuICogUmV0dXJucyBhbiB1bnNpZ25lZCBpbnRlZ2VyIGJldHdlZW4gMCBhbmQgMl4zMi0xXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybnMge2ludH1cbiAqL1xuY29uc3QgaGFzaCA9IChzdHIpID0+IHtcbiAgICBsZXQgaGFzaCA9IDUzODEsXG4gICAgICAgIGkgPSBzdHIubGVuZ3RoO1xuXG4gICAgd2hpbGUoaSkge1xuICAgICAgICBoYXNoID0gKGhhc2ggKiAzMykgXiBzdHIuY2hhckNvZGVBdCgtLWkpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogSmF2YVNjcmlwdCBkb2VzIGJpdHdpc2Ugb3BlcmF0aW9ucyAobGlrZSBYT1IsIGFib3ZlKSBvbiAzMi1iaXQgc2lnbmVkXG4gICAgICogaW50ZWdlcnMuIFNpbmNlIHdlIHdhbnQgdGhlIHJlc3VsdHMgdG8gYmUgYWx3YXlzIHBvc2l0aXZlLCBjb252ZXJ0IHRoZVxuICAgICAqIHNpZ25lZCBpbnQgdG8gYW4gdW5zaWduZWQgYnkgZG9pbmcgYW4gdW5zaWduZWQgYml0c2hpZnQuXG4gICAgICovXG4gICAgcmV0dXJuIGhhc2ggPj4+IDA7XG59O1xuXG5jb25zdCBpc051bWVyaWNJbnQgPSAodmFsKSA9PiB+fnZhbCA9PSB2YWw7XG5cbmNsYXNzIEVudHJ5IHtcbiAgICBjb25zdHJ1Y3RvcihrZXksIHZhbHVlKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7aW50fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5oYXNoQ29kZSA9IGlzTnVtZXJpY0ludChrZXkpID8gfn5rZXkgOiBoYXNoKFN0cmluZyhrZXkpKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMua2V5ID0gU3RyaW5nKGtleSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHsqfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7dW5kZWZpbmVkfEVudHJ5fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5uZXh0ID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7dW5kZWZpbmVkfEVudHJ5fVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5wcmV2ID0gdW5kZWZpbmVkO1xuICAgIH1cbn1cblxuY2xhc3MgSGFzaFRhYmxlIGV4dGVuZHMgbWl4KHVuZGVmaW5lZCwgR2VuZXJpY0NvbGxlY3Rpb25UcmFpdCkge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtpbnR9IFtidWNrZXRTaXplPUlOSVRJQUxfU0laRV1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihidWNrZXRTaXplID0gSU5JVElBTF9TSVpFKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtpbnR9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9idWNrZXRTaXplID0gYnVja2V0U2l6ZTtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge1tFbnRyeV19XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9idWNrZXRzID0gQXJyYXkodGhpcy5fYnVja2V0U2l6ZSkuZmlsbCh1bmRlZmluZWQpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7RW50cnl9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9maXJzdCA9IHVuZGVmaW5lZDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0VudHJ5fVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fbGFzdCA9IHVuZGVmaW5lZDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge2ludH1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2xlbmd0aCA9IDA7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtpbnR9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9sYXN0TnVtZXJpY0lkeCA9IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGVuZ3RoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGZpcnN0IGVsZW1lbnQgb2YgdGhlIGNvbGxlY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXQgZmlyc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maXJzdCA/IHRoaXMuX2ZpcnN0LnZhbHVlIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGxhc3QgZWxlbWVudCBvZiB0aGUgY29sbGVjdGlvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldCBsYXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGFzdCA/IHRoaXMuX2xhc3QudmFsdWUgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5zZXJ0cyB0aGUga2V5LXZhbHVlIHBhaXIgaW50byB0aGUgc3ltYm9sIHRhYmxlLCBvdmVyd3JpdGluZyB0aGUgb2xkIHZhbHVlXG4gICAgICogd2l0aCB0aGUgbmV3IHZhbHVlIGlmIHRoZSBrZXkgaXMgYWxyZWFkeSBpbiB0aGUgc3ltYm9sIHRhYmxlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtpbnR8c3RyaW5nfSBrZXlcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICpcbiAgICAgKiBAdGhyb3dzIEludmFsaWRBcmd1bWVudEV4Y2VwdGlvbiBpZiBrZXkgaXMgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgKi9cbiAgICBwdXQoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodW5kZWZpbmVkID09PSBrZXkgfHwgbnVsbCA9PT0ga2V5KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uKCdLZXkgY2Fubm90IGJlIG51bGwgb3IgdW5kZWZpbmVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbnRyeSA9IG5ldyBFbnRyeShrZXksIHZhbHVlKTtcbiAgICAgICAgY29uc3QgYnVja2V0SWR4ID0gZW50cnkuaGFzaENvZGUgJSB0aGlzLl9idWNrZXRTaXplO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fYnVja2V0c1tidWNrZXRJZHhdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9idWNrZXRzW2J1Y2tldElkeF0gPSBlbnRyeTtcbiAgICAgICAgICAgICAgICB0aGlzLl9hZGQoZW50cnkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGUgPSB0aGlzLl9idWNrZXRzW2J1Y2tldElkeF07XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSBlbnRyeS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgZS52YWx1ZSA9IGVudHJ5LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAoZSA9IGUubmV4dCAmJiBlLmhhc2hDb2RlICUgdGhpcy5fYnVja2V0U2l6ZSA9PT0gYnVja2V0SWR4KTtcblxuICAgICAgICAgICAgdGhpcy5fYWRkKGVudHJ5KTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmICh1bmRlZmluZWQgPT09IHRoaXMuX2ZpcnN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZmlyc3QgPSBlbnRyeTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzTnVtZXJpY0ludChrZXkpICYmIHRoaXMuX2xhc3ROdW1lcmljSWR4IDw9IGtleSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2xhc3ROdW1lcmljSWR4ID0ga2V5ICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpbmhlcml0RG9jXG4gICAgICovXG4gICAgY29weSgpIHtcbiAgICAgICAgY29uc3QgY29weSA9IG5ldyBIYXNoVGFibGUodGhpcy5fYnVja2V0U2l6ZSk7XG4gICAgICAgIGZvciAobGV0IGUgPSB0aGlzLl9maXJzdDsgdW5kZWZpbmVkICE9PSBlOyBlID0gZS5uZXh0KSB7XG4gICAgICAgICAgICBjb3B5LnB1dChlLmtleSwgZS52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29weTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdXNoZXMgYSBuZXcgdmFsdWUgaW50byB0aGUgY29sbGVjdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKi9cbiAgICBwdXNoKHZhbHVlKSB7XG4gICAgICAgIHRoaXMucHV0KHRoaXMuX2xhc3ROdW1lcmljSWR4LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUG9wcyBvdXQgYW4gZW50cnkgZnJvbSB0aGUgZW5kIG9mIHRoZSBjb2xsZWN0aW9uLlxuICAgICAqXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgcG9wKCkge1xuICAgICAgICBjb25zdCBsYXN0ID0gdGhpcy5fbGFzdDtcbiAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gbGFzdCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2xhc3QgPSB0aGlzLl9sYXN0LnByZXY7XG4gICAgICAgIHRoaXMuX2xhc3QubmV4dCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fbGVuZ3RoLS07XG5cbiAgICAgICAgcmV0dXJuIGxhc3QudmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIGtleSwgaWYgc2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtpbnR8c3RyaW5nfSBrZXlcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt1bmRlZmluZWR8Kn1cbiAgICAgKi9cbiAgICBnZXQoa2V5KSB7XG4gICAgICAgIGNvbnN0IGUgPSB0aGlzLl9zZWFyY2goa2V5KTtcblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkICE9PSBlID8gZS52YWx1ZSA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFuIGVsZW1lbnQgZnJvbSB0aGUgY29sbGVjdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7aW50fHN0cmluZ30ga2V5XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIHJlbW92ZShrZXkpIHtcbiAgICAgICAgY29uc3QgZSA9IHRoaXMuX3NlYXJjaChrZXkpO1xuICAgICAgICBpZiAodW5kZWZpbmVkID09PSBlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmV2ID0gZS5wcmV2O1xuICAgICAgICBjb25zdCBuZXh0ID0gZS5uZXh0O1xuICAgICAgICB0aGlzLl9sZW5ndGgtLTtcblxuICAgICAgICBpZiAoZSAhPT0gdGhpcy5fZmlyc3QpIHtcbiAgICAgICAgICAgIHByZXYubmV4dCA9IG5leHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9maXJzdCA9IG5leHQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZSAhPT0gdGhpcy5fbGFzdCkge1xuICAgICAgICAgICAgbmV4dC5wcmV2ID0gcHJldjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2xhc3QgPSBwcmV2O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZCAhPT0gZSA/IGUudmFsdWUgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICB0b0FycmF5KCkge1xuICAgICAgICBpZiAodW5kZWZpbmVkID09PSB0aGlzLl9maXJzdCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvciBhIGxpdGVyYWwgb2JqZWN0IHdpdGggYWxsIHRoZSBlbGVtZW50c1xuICAgICAqIG9mIHRoZSBjb2xsZWN0aW9uLlxuICAgICAqXG4gICAgICogQHJldHVybnMge0FycmF5fE9iamVjdH1cbiAgICAgKi9cbiAgICB0b09iamVjdCgpIHtcbiAgICAgICAgY29uc3QgcmVzb2x2ZSA9ICh2YWwpID0+IHZhbCBpbnN0YW5jZW9mIEhhc2hUYWJsZSA/IHZhbC50b09iamVjdCgpIDogdmFsO1xuXG4gICAgICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLnRvQXJyYXkoKTtcbiAgICAgICAgY29uc3QgaXNBcnJheSA9ICgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoMCA9PT0gdGhpcy5fbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5fbGVuZ3RoICE9PSB0aGlzLl9sYXN0TnVtZXJpY0lkeCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJpZXNbaV1bMF0gIT0gaSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSkoKTtcblxuICAgICAgICBpZiAoaXNBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIGVudHJpZXMubWFwKGUgPT4gcmVzb2x2ZShlWzFdKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZW50cmllcy5yZWR1Y2UoKHJlcywgdmFsKSA9PiAocmVzW3ZhbFswXV0gPSByZXNvbHZlKHZhbFsxXSksIHJlcyksIHt9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIEhhc2hUYWJsZSBmcm9tIGFuIG9iamVjdCBvciBhcnJheS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmpcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtIYXNoVGFibGV9XG4gICAgICovXG4gICAgc3RhdGljIGZyb21PYmplY3Qob2JqKSB7XG4gICAgICAgIGNvbnN0IHRhYmxlID0gbmV3IEhhc2hUYWJsZSgpO1xuICAgICAgICBmb3IgKGNvbnN0IFsga2V5LCB2YWx1ZSBdIG9mIF9fanltZm9ueS5nZXRFbnRyaWVzKG9iaikpIHtcbiAgICAgICAgICAgIHRhYmxlLnB1dChrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YWJsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCB0aGUgdGFibGUga2V5cyAob3JkZXJlZCkuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7W119XG4gICAgICovXG4gICAga2V5cygpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcylcbiAgICAgICAgICAgIC5tYXAodHVwbGUgPT4gdHVwbGVbMF0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIGNvbGxlY3Rpb24gZWxlbWVudHMuXG4gICAgICovXG4gICAgKiBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gdGhpcy5fZmlyc3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBlID0gdGhpcy5fZmlyc3Q7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgeWllbGQgWyBlLmtleSwgZS52YWx1ZSBdO1xuICAgICAgICB9IHdoaWxlIChlID0gZS5uZXh0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIGFkZCBhbiBlbnRyeSB0byB0aGUgY29sbGVjdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RW50cnl9IGVudHJ5XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfYWRkKGVudHJ5KSB7XG4gICAgICAgIGlmICh1bmRlZmluZWQgIT09IHRoaXMuX2xhc3QpIHtcbiAgICAgICAgICAgIHRoaXMuX2xhc3QubmV4dCA9IGVudHJ5O1xuICAgICAgICB9XG5cbiAgICAgICAgZW50cnkucHJldiA9IHRoaXMuX2xhc3Q7XG4gICAgICAgIHRoaXMuX2xhc3QgPSBlbnRyeTtcbiAgICAgICAgdGhpcy5fbGVuZ3RoKys7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VhcmNoZXMgYW4gZW50cnkgd2l0aCBrZXkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICogQHJldHVybnMge0VudHJ5fHVuZGVmaW5lZH1cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3NlYXJjaChrZXkpIHtcbiAgICAgICAgY29uc3QgaGFzaENvZGUgPSBpc051bWVyaWNJbnQoa2V5KSA/IH5+a2V5IDogaGFzaChTdHJpbmcoa2V5KSk7XG4gICAgICAgIGNvbnN0IGJ1Y2tldElkeCA9IGhhc2hDb2RlICUgdGhpcy5fYnVja2V0U2l6ZTtcbiAgICAgICAgbGV0IGUgPSB0aGlzLl9idWNrZXRzW2J1Y2tldElkeF07XG5cbiAgICAgICAgaWYgKGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKGUua2V5ICE9IGtleSkge1xuICAgICAgICAgICAgZSA9IGUubmV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbn1cblxuZ2xvYmFsLkhhc2hUYWJsZSA9IEhhc2hUYWJsZTtcbiIsImNsYXNzIEdlbmVyaWNDb2xsZWN0aW9uVHJhaXQge1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIGNvbGxlY3Rpb24gaXMgZW1wdHkuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0VtcHR5KCkge1xuICAgICAgICByZXR1cm4gMCA9PT0gdGhpcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvbmUgdGhlIGNvbGxlY3Rpb24uXG4gICAgICpcbiAgICAgKiBAYWJzdHJhY3RcbiAgICAgKi9cbiAgICBjb3B5KCkge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogYWJzdHJhY3QgbWV0aG9kICovXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG11c3Qgb3ZlcnJpZGUgXCJjb3B5XCIgbWV0aG9kJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBjb3B5IG9mIHRoZSBjb2xsZWN0aW9uLlxuICAgICAqXG4gICAgICogQGFic3RyYWN0XG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIHRvQXJyYXkoKSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBhYnN0cmFjdCBtZXRob2QgKi9cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBvdmVycmlkZSBcInRvQXJyYXlcIiBtZXRob2QnKTtcbiAgICB9XG5cbiAgICBpbnNwZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b0FycmF5KCk7XG4gICAgfVxuXG4gICAgZ2V0IFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUcmFpdChHZW5lcmljQ29sbGVjdGlvblRyYWl0KTtcbiIsImdsb2JhbC5pc0dlbmVyYXRvciA9IGZ1bmN0aW9uIGlzR2VuZXJhdG9yKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmICdmdW5jdGlvbicgPT09IHR5cGVvZiB2YWx1ZS5uZXh0ICYmICdmdW5jdGlvbicgPT09IHR5cGVvZiB2YWx1ZS50aHJvdztcbn07XG5cbmdsb2JhbC5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24gaXNHZW5lcmF0b3JGdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmICghIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoaXNHZW5lcmF0b3IodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvciA9IHZhbHVlLmNvbnN0cnVjdG9yO1xuXG4gICAgaWYgKCEgY29uc3RydWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICgnR2VuZXJhdG9yRnVuY3Rpb24nID09PSBjb25zdHJ1Y3Rvci5uYW1lIHx8ICdHZW5lcmF0b3JGdW5jdGlvbicgPT09IGNvbnN0cnVjdG9yLmRpc3BsYXlOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBpc0dlbmVyYXRvcihjb25zdHJ1Y3Rvci5wcm90b3R5cGUpO1xufTtcblxuaWYgKF9fanltZm9ueS5QbGF0Zm9ybS5oYXNBc3luY0Z1bmN0aW9uU3VwcG9ydCgpKSB7XG4gICAgZ2xvYmFsLmlzQXN5bmNGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzQXN5bmNGdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb25zdHJ1Y3RvciA9IHZhbHVlLmNvbnN0cnVjdG9yO1xuICAgICAgICBpZiAoIWNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJ0FzeW5jRnVuY3Rpb24nID09PSAoY29uc3RydWN0b3IubmFtZSB8fCBjb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSk7XG4gICAgfTtcbn0gZWxzZSB7XG4gICAgZ2xvYmFsLmlzQXN5bmNGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzQXN5bmNGdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG59XG5cbmdsb2JhbC5pc0Z1bmN0aW9uID0gZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcbiAgICBpZiAodW5kZWZpbmVkICE9PSBnbG9iYWwuQm91bmRGdW5jdGlvbiAmJiBvYmogaW5zdGFuY2VvZiBCb3VuZEZ1bmN0aW9uKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChpc0dlbmVyYXRvckZ1bmN0aW9uKG9iaikpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGlzQXN5bmNGdW5jdGlvbihvYmopKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiAnW29iamVjdCBGdW5jdGlvbl0nID09PSB0b1N0cmluZy5jYWxsKG9iaik7XG59O1xuIiwiY29uc3QgTWl4aW5zID0gcmVxdWlyZSgnLi9NaXhpbnMnKTtcbmNvbnN0IENMQVNTX1RZUEUgPSAnSW50ZXJmYWNlJztcblxuY29uc3QgY2hlY2tlZENsYXNzZXNDYWNoZSA9IG5ldyBTZXQoKTtcblxuY2xhc3MgSW50ZXJmYWNlcyB7XG4gICAgc3RhdGljIGlzSW50ZXJmYWNlKG1peGluKSB7XG4gICAgICAgIHJldHVybiBtaXhpbltNaXhpbnMuY2xhc3NUeXBlU3ltYm9sXSA9PT0gQ0xBU1NfVFlQRTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlKGRlZmluaXRpb24pIHtcbiAgICAgICAgY29uc3QgY2hlY2tzID0gb2JqID0+IHtcbiAgICAgICAgICAgIGlmIChjaGVja2VkQ2xhc3Nlc0NhY2hlLmhhcyhvYmouY29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRlc2NyaXB0b3Igb2YgTWl4aW5zLmdldEZ1bmN0aW9ucyhkZWZpbml0aW9uKSkge1xuICAgICAgICAgICAgICAgIGlmIChkZXNjcmlwdG9yLmZuKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2Ygb2JqW2Rlc2NyaXB0b3IuZm5dKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXNjcmlwdG9yWydzdGF0aWMnXSAmJiAnZnVuY3Rpb24nID09PSB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yW2Rlc2NyaXB0b3IuZm5dKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcignTWV0aG9kIFwiJyArIGRlc2NyaXB0b3IuZm4gKyAnXCIgbXVzdCBiZSBpbXBsZW1lbnRlZC4nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRlc2NyaXB0b3IucHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZGVzY3JpcHRvclsnc3RhdGljJ10gPyBvYmouY29uc3RydWN0b3IgOiBvYmo7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldERlc2NyaXB0b3IgPSBNaXhpbnMuZ2V0UHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgZGVzY3JpcHRvci5wcm9wZXJ0eSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gdGFyZ2V0RGVzY3JpcHRvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fanltZm9ueS5zcHJpbnRmKCdHZXR0ZXIvU2V0dGVyIGZvciBcIiVzXCIgcHJvcGVydHkgbXVzdCBiZSBpbXBsZW1lbnRlZC4nLCBkZXNjcmlwdG9yLnByb3BlcnR5KVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXNjcmlwdG9yWydnZXQnXSAmJiB1bmRlZmluZWQgPT09IHRhcmdldERlc2NyaXB0b3IuZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ0dldHRlciBmb3IgXCInICsgZGVzY3JpcHRvci5wcm9wZXJ0eSArICdcIiBwcm9wZXJ0eSBtdXN0IGJlIGltcGxlbWVudGVkLicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXNjcmlwdG9yWydzZXQnXSAmJiB1bmRlZmluZWQgPT09IHRhcmdldERlc2NyaXB0b3Iuc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ1NldHRlciBmb3IgXCInICsgZGVzY3JpcHRvci5wcm9wZXJ0eSArICdcIiBwcm9wZXJ0eSBtdXN0IGJlIGltcGxlbWVudGVkLicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjaGVja2VkQ2xhc3Nlc0NhY2hlLmFkZChvYmouY29uc3RydWN0b3IpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG1peGluID0gTWl4aW5zLmNyZWF0ZU1peGluKGRlZmluaXRpb24sIHVuZGVmaW5lZCwgY2hlY2tzKTtcblxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YobWl4aW4sIHtcbiAgICAgICAgICAgIGRlZmluaXRpb246IGRlZmluaXRpb24sXG4gICAgICAgICAgICBbTWl4aW5zLmNsYXNzVHlwZVN5bWJvbF06IENMQVNTX1RZUEUsXG4gICAgICAgICAgICBbU3ltYm9sLmhhc0luc3RhbmNlXTogSW50ZXJmYWNlcy5fY3JlYXRlSGFzSW5zdGFuY2UobWl4aW4pLFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbWl4aW47XG4gICAgfVxuXG4gICAgc3RhdGljIF9jcmVhdGVIYXNJbnN0YW5jZShtaXhpbikge1xuICAgICAgICByZXR1cm4gbyA9PiB7XG4gICAgICAgICAgICBpZiAoISBpc09iamVjdChvKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbWl4aW5zID0gby5jb25zdHJ1Y3RvcltNaXhpbnMuYXBwbGllZEludGVyZmFjZXNTeW1ib2xdO1xuICAgICAgICAgICAgaWYgKCEgbWl4aW5zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gLTEgIT0gbWl4aW5zLmluZGV4T2YobWl4aW4pO1xuICAgICAgICB9O1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmZhY2VzO1xuIiwiY29uc3QgRnVuY3Rpb25Qcm9wcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKEZ1bmN0aW9uLnByb3RvdHlwZSk7XG5cbmNvbnN0IHN5bU91dGVyTWl4aW4gPSBTeW1ib2woJ291dGVyTWl4aW4nKTtcbmNvbnN0IHN5bUFwcGxpZWRJbnRlcmZhY2VzID0gU3ltYm9sKCdhcHBsaWVkSW50ZXJmYWNlcycpO1xuY29uc3Qgc3ltQ2xhc3NUeXBlID0gU3ltYm9sKCdjbGFzc1R5cGUnKTtcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuY2xhc3MgTWl4aW5zIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IG1peGluLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZGVmaW5pdGlvblxuICAgICAqIEBwYXJhbSB7dW5kZWZpbmVkfEZ1bmN0aW9ufSBjYiBNb2RpZnkgdGhlIG5ld2x5IGNyZWF0ZWQgaW5uZXIgbWl4aW5cbiAgICAgKiBAcGFyYW0ge3VuZGVmaW5lZHxGdW5jdGlvbn0gY29uc3RydWN0Q2IgRnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIGNvbnN0cnVjdGlvblxuICAgICAqXG4gICAgICogQHJldHVybnMge0Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVNaXhpbihkZWZpbml0aW9uLCBjYiA9IHVuZGVmaW5lZCwgY29uc3RydWN0Q2IgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgbWl4aW4gPSAoc3VwZXJjbGFzcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgbSA9IGNsYXNzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICAgICAgICAgICAgICBzdXBlciguLi5hcmdzKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodW5kZWZpbmVkICE9PSBjb25zdHJ1Y3RDYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0Q2IodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBtLmlzTWl4aW4gPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAodW5kZWZpbmVkICE9PSBjYikge1xuICAgICAgICAgICAgICAgIGNiKG0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgfTtcblxuICAgICAgICBkZWZpbml0aW9uW3N5bU91dGVyTWl4aW5dID0gbWl4aW47XG5cbiAgICAgICAgZm9yIChjb25zdCBjb25zdGFudCBvZiBNaXhpbnMuZ2V0Q29uc3RhbnRzTmFtZXMoZGVmaW5pdGlvbikpIHtcbiAgICAgICAgICAgIG1peGluW2NvbnN0YW50XSA9IGRlZmluaXRpb25bY29uc3RhbnRdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1peGluO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRNaXhpbihkZWZpbml0aW9uKSB7XG4gICAgICAgIHJldHVybiBkZWZpbml0aW9uW3N5bU91dGVyTWl4aW5dO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRQcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBwcm9wS2V5KSB7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgcHJvcEtleSk7XG4gICAgICAgICAgICBpZiAodW5kZWZpbmVkICE9PSBkZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlc2NyaXB0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKG9iaiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopKTtcblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBmdW5jdGlvbiBuYW1lc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZGVmaW5pdGlvblxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHN0YXRpYyAqIGdldEZ1bmN0aW9ucyhkZWZpbml0aW9uKSB7XG4gICAgICAgIGNvbnN0IGNoYWluID0gdGhpcy5fZ2V0Q2xhc3NDaGFpbihkZWZpbml0aW9uKTtcbiAgICAgICAgY29uc3QgZ2VuID0gZnVuY3Rpb24gKiAob2JqLCBpc1N0YXRpYykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBmbiBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBmbik7XG4gICAgICAgICAgICAgICAgaWYgKCdjb25zdHJ1Y3RvcicgIT09IGZuICYmICdmdW5jdGlvbicgPT09IHR5cGVvZiBkZXNjcmlwdG9yLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHsnc3RhdGljJzogaXNTdGF0aWMsIGZuOiBmbn07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBkZXNjcmlwdG9yLmdldCB8fCAnZnVuY3Rpb24nID09PSB0eXBlb2YgZGVzY3JpcHRvci5zZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3N0YXRpYyc6IGlzU3RhdGljLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3Byb3BlcnR5JzogZm4sXG4gICAgICAgICAgICAgICAgICAgICAgICAnZ2V0JzogdW5kZWZpbmVkICE9PSBkZXNjcmlwdG9yLmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICdzZXQnOiB1bmRlZmluZWQgIT09IGRlc2NyaXB0b3Iuc2V0LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGNvbnN0IGkgb2YgY2hhaW4pIHtcbiAgICAgICAgICAgIHlpZWxkICogZ2VuKGkucHJvdG90eXBlLCBmYWxzZSk7XG4gICAgICAgICAgICB5aWVsZCAqIGdlbihpLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhbGwgY29uc3RhbnRzIG5hbWVzIGZvciBkZWZpbml0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZGVmaW5pdGlvblxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRDb25zdGFudHNOYW1lcyhkZWZpbml0aW9uKSB7XG4gICAgICAgIGNvbnN0IGNoYWluID0gdGhpcy5fZ2V0Q2xhc3NDaGFpbihkZWZpbml0aW9uKTtcblxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShmdW5jdGlvbiAqICgpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBvZiBjaGFpbikge1xuICAgICAgICAgICAgICAgIHlpZWxkICogT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaSlcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihQID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgncHJvdG90eXBlJyA9PT0gUCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCdhcmd1bWVudHMnID09PSBQIHx8ICdjYWxsZXInID09PSBQKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gJ2NhbGxlcicgYW5kICdhcmd1bWVudHMnIGFyZSByZXN0cmljdGVkIGZ1bmN0aW9uIHByb3BlcnRpZXMgYW5kIGNhbm5vdCBiZSBhY2Nlc3NlZCBpbiB0aGlzIGNvbnRleHQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGlbUF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMSA9PT0gRnVuY3Rpb25Qcm9wcy5pbmRleE9mKFApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSgpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgX2dldENsYXNzQ2hhaW4oZGVmaW5pdGlvbikge1xuICAgICAgICBjb25zdCBjaGFpbiA9IFtdO1xuICAgICAgICBsZXQgcGFyZW50ID0gZGVmaW5pdGlvbjtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgaWYgKHBhcmVudFtzeW1PdXRlck1peGluXSkge1xuICAgICAgICAgICAgICAgIGNoYWluLnVuc2hpZnQocGFyZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAocGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHBhcmVudCkpO1xuXG4gICAgICAgIHJldHVybiBjaGFpbjtcbiAgICB9XG59XG5cbk1peGlucy5hcHBsaWVkSW50ZXJmYWNlc1N5bWJvbCA9IHN5bUFwcGxpZWRJbnRlcmZhY2VzO1xuTWl4aW5zLmNsYXNzVHlwZVN5bWJvbCA9IHN5bUNsYXNzVHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBNaXhpbnM7XG4iLCJjb25zdCBNaXhpbnMgPSByZXF1aXJlKCcuL01peGlucycpO1xuY29uc3QgQ0xBU1NfVFlQRSA9ICdUcmFpdCc7XG5cbmNsYXNzIFRyYWl0cyB7XG4gICAgc3RhdGljIGlzVHJhaXQobWl4aW4pIHtcbiAgICAgICAgcmV0dXJuIG1peGluW01peGlucy5jbGFzc1R5cGVTeW1ib2xdID09PSBDTEFTU19UWVBFO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGUoZGVmaW5pdGlvbikge1xuICAgICAgICBjb25zdCBpbmhlcml0cyA9IG5ldyBNYXAoKTtcbiAgICAgICAgbGV0IHBhcmVudCA9IGRlZmluaXRpb247XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGlmIChwYXJlbnQucHJvdG90eXBlKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwIG9mIFsgLi4uT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocGFyZW50LnByb3RvdHlwZSksIC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocGFyZW50LnByb3RvdHlwZSkgXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5oZXJpdHMuaGFzKHApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGluaGVyaXRzLnNldChwLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHBhcmVudC5wcm90b3R5cGUsIHApKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwYXJlbnQpKTtcblxuICAgICAgICBjb25zdCBtaXhpbiA9IE1peGlucy5jcmVhdGVNaXhpbihkZWZpbml0aW9uLCB0cmFpdCA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFsgcHJvcCwgZGVzY3JpcHRvciBdIG9mIGluaGVyaXRzLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgICAgIGlmICgnY29uc3RydWN0b3InID09PSBwcm9wIHx8ICdfX2NvbnN0cnVjdCcgPT09IHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRyYWl0LnByb3RvdHlwZSwgcHJvcCwgZGVzY3JpcHRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIG9iaiA9PiB7XG4gICAgICAgICAgICBpZiAoaXNGdW5jdGlvbihkZWZpbml0aW9uLnByb3RvdHlwZS5fX2NvbnN0cnVjdCkpIHtcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uLnByb3RvdHlwZS5fX2NvbnN0cnVjdC5jYWxsKG9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihtaXhpbiwge1xuICAgICAgICAgICAgZGVmaW5pdGlvbjogZGVmaW5pdGlvbixcbiAgICAgICAgICAgIFtNaXhpbnMuY2xhc3NUeXBlU3ltYm9sXTogQ0xBU1NfVFlQRSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG1peGluO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcmFpdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmdsb2JhbC5fX2p5bWZvbnkgPSBnbG9iYWwuX19qeW1mb255IHx8IHt9O1xuXG4vKipcbiAqIEdldCBbS2V5LCBWYWx1ZV0gcGFpcnMgZm9yIGFuIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAqXG4gKiBAcmV0dXJucyB7R2VuZXJhdG9yfVxuICovXG5jb25zdCBlbnRyaWVzID0gZnVuY3Rpb24gKiBvYmplbnRyaWVzKG9iamVjdCkge1xuICAgIGlmIChpc0FycmF5KG9iamVjdCkpIHtcbiAgICAgICAgZm9yIChjb25zdCBrIG9mIG9iamVjdC5rZXlzKCkpIHtcbiAgICAgICAgICAgIHlpZWxkIFsgaywgb2JqZWN0W2tdIF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mIE1hcCkge1xuICAgICAgICByZXR1cm4gb2JqZWN0LmVudHJpZXMoKTtcbiAgICB9XG5cbiAgICBpZiAoISBpc09iamVjdChvYmplY3QpKSB7XG4gICAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFeGNlcHRpb24oJ0FyZ3VtZW50IDEgaXMgbm90IGFuIG9iamVjdCcpO1xuICAgIH1cblxuICAgIGlmIChPYmplY3QuZW50cmllcykge1xuICAgICAgICB5aWVsZCAqIE9iamVjdC5lbnRyaWVzKG9iamVjdCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgaWYgKCEgb2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgeWllbGQgWyBrZXksIG9iamVjdFtrZXldIF07XG4gICAgfVxufTtcblxuZ2xvYmFsLl9fanltZm9ueS5nZXRFbnRyaWVzID0gZW50cmllcztcbiIsImdsb2JhbC5fX2p5bWZvbnkgPSBnbG9iYWwuX19qeW1mb255IHx8IHt9O1xuXG5sZXQgX2FzeW5jU3VwcG9ydCA9IHVuZGVmaW5lZDtcbmxldCBfbW9kZXJuUmVnZXggPSB1bmRlZmluZWQ7XG5cbi8qKlxuICogQG1lbWJlck9mIF9fanltZm9ueVxuICovXG5jbGFzcyBQbGF0Zm9ybSB7XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoaXMgbm9kZSB2ZXJzaW9uIGhhcyBhc3luYyBmdW5jdGlvbiBzdXBwb3J0LlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGhhc0FzeW5jRnVuY3Rpb25TdXBwb3J0KCkge1xuICAgICAgICBpZiAodW5kZWZpbmVkID09PSBfYXN5bmNTdXBwb3J0KSB7XG4gICAgICAgICAgICBfYXN5bmNTdXBwb3J0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IGZuO1xuICAgICAgICAgICAgICAgIGV2YWwoJ2ZuID0gYXN5bmMgZnVuY3Rpb24gKCkgeyB9Jyk7XG4gICAgICAgICAgICAgICAgX2FzeW5jU3VwcG9ydCA9ICdBc3luY0Z1bmN0aW9uJyA9PT0gKGZuLmNvbnN0cnVjdG9yLm5hbWUgfHwgZm4uY29uc3RydWN0b3IuZGlzcGxheU5hbWUpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBTeW50YXhFcnJvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX2FzeW5jU3VwcG9ydDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcmUgd2UgcnVubmluZyBvbiB3aW5kb3dzP1xuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzV2luZG93cygpIHtcbiAgICAgICAgcmV0dXJuICd3aW4zMicgPT09IHByb2Nlc3MucGxhdGZvcm07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoaXMgbm9kZSB2ZXJzaW9uIGhhcyBtb2Rlcm4gcmVnZXggKG5hbWVkIGdyb3Vwcykgc3VwcG9ydC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBoYXNNb2Rlcm5SZWdleCgpIHtcbiAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gX21vZGVyblJlZ2V4KSB7XG4gICAgICAgICAgICBfbW9kZXJuUmVnZXggPSBmYWxzZTtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBSZWdFeHAoJyg/PHRlc3Q+LispJyk7XG4gICAgICAgICAgICAgICAgX21vZGVyblJlZ2V4ID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIShlIGluc3RhbmNlb2YgU3ludGF4RXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9tb2Rlcm5SZWdleDtcbiAgICB9XG59XG5cbmdsb2JhbC5fX2p5bWZvbnkuUGxhdGZvcm0gPSBQbGF0Zm9ybTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZ2xvYmFsLl9fanltZm9ueSA9IGdsb2JhbC5fX2p5bWZvbnkgfHwge307XG5cbmdsb2JhbC5fX2p5bWZvbnkucmVnZXhfcXVvdGUgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci50b1N0cmluZygpXG4gICAgICAgIC5yZXBsYWNlKC9bLlxcXFwrKj9cXFtcXF5cXF0kKCl7fT0hPD58Oi1dL2csICdcXFxcJCYnKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uL1JlZ2V4L3F1b3RlJyk7XG5cbmdsb2JhbC5fX2p5bWZvbnkgPSBnbG9iYWwuX19qeW1mb255IHx8IHt9O1xuXG5nbG9iYWwuX19qeW1mb255LnN0cnRyID0gZnVuY3Rpb24gc3RydHIoc3RyaW5nLCByZXBsYWNlUGFpcnMpIHtcbiAgICBjb25zdCBzZWFyY2hQYXR0ZXJuID0gT2JqZWN0LmtleXMocmVwbGFjZVBhaXJzKVxuICAgICAgICAubWFwKF9fanltZm9ueS5yZWdleF9xdW90ZSlcbiAgICAgICAgLmpvaW4oJ3wnKTtcblxuICAgIHJldHVybiBzdHJpbmcudG9TdHJpbmcoKS5yZXBsYWNlKG5ldyBSZWdFeHAoc2VhcmNoUGF0dGVybiwgJ2cnKSwgKG1hdGNoKSA9PiB7XG4gICAgICAgIHJldHVybiByZXBsYWNlUGFpcnNbbWF0Y2hdO1xuICAgIH0pO1xufTtcbiIsImdsb2JhbC5pc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbmNvbnN0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxucmVxdWlyZSgnLi9Jcy9mdW5jdGlvbnMnKTtcblxuaWYgKCEgaXNGdW5jdGlvbihnbG9iYWwuaXNPYmplY3QpKSB7XG4gICAgZ2xvYmFsLmlzT2JqZWN0ID0gZnVuY3Rpb24gKGFyZykge1xuICAgICAgICByZXR1cm4gISEgYXJnICYmICdvYmplY3QnID09PSB0eXBlb2YgYXJnO1xuICAgIH07XG59XG5cbmZvcihjb25zdCBuYW1lIG9mIFsgJ0FyZ3VtZW50cycsICdCb29sZWFuJywgJ1N0cmluZycsICdOdW1iZXInLCAnRGF0ZScsICdSZWdFeHAnLCAnRXJyb3InLCAnU3ltYm9sJywgJ01hcCcsICdXZWFrTWFwJywgJ1NldCcsICdXZWFrU2V0JyBdKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24oZ2xvYmFsWydpcycgKyBuYW1lXSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgZ2xvYmFsWydpcycgKyBuYW1lXSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgJyArIG5hbWUgKyAnXSc7XG4gICAgfTtcbn1cblxuY29uc3QgcHJpbWl0aXZlcyA9IFsgTnVtYmVyLCBTdHJpbmcsIEJvb2xlYW4gXTtcbmdsb2JhbC5pc1NjYWxhciA9IGZ1bmN0aW9uIGlzU2NhbGFyKHZhbHVlKSB7XG4gICAgaWYgKHVuZGVmaW5lZCA9PT0gdmFsdWUgfHwgbnVsbCA9PT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKTtcbiAgICBmb3IgKGNvbnN0IHR5cGUgb2YgcHJpbWl0aXZlcykge1xuICAgICAgICBpZiAocHJvdG8gPT09IHR5cGUucHJvdG90eXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbmdsb2JhbC5pc09iamVjdExpdGVyYWwgPSBmdW5jdGlvbiBpc09iamVjdExpdGVyYWwodmFsdWUpIHtcbiAgICBpZiAobnVsbCA9PT0gdmFsdWUgfHwgdW5kZWZpbmVkID09PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSkgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih7fSk7XG59O1xuXG5nbG9iYWwuaXNQcm9taXNlID0gZnVuY3Rpb24gaXNQcm9taXNlKHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzRnVuY3Rpb24odmFsdWUudGhlbik7XG59O1xuXG5nbG9iYWwuaXNTdHJlYW0gPSBmdW5jdGlvbiBpc1N0cmVhbShzdHJlYW0pIHtcbiAgICByZXR1cm4gJ29iamVjdCcgPT09IHR5cGVvZiBzdHJlYW0gJiYgaXNGdW5jdGlvbihzdHJlYW0ucGlwZSk7XG59O1xuIiwiY29uc3QgTWl4aW5zID0gcmVxdWlyZSgnLi9NaXhpbnMvTWl4aW5zJyk7XG5jb25zdCBJbnRlcmZhY2VzID0gcmVxdWlyZSgnLi9NaXhpbnMvSW50ZXJmYWNlcycpO1xuY29uc3QgVHJhaXRzID0gcmVxdWlyZSgnLi9NaXhpbnMvVHJhaXRzJyk7XG5cbmdsb2JhbC5nZXRJbnRlcmZhY2UgPSBmdW5jdGlvbiBnZXRJbnRlcmZhY2UoZGVmaW5pdGlvbikge1xuICAgIHJldHVybiBJbnRlcmZhY2VzLmNyZWF0ZShkZWZpbml0aW9uKTtcbn07XG5cbmdsb2JhbC5nZXRUcmFpdCA9IGZ1bmN0aW9uIGdldFRyYWl0KGRlZmluaXRpb24pIHtcbiAgICByZXR1cm4gVHJhaXRzLmNyZWF0ZShkZWZpbml0aW9uKTtcbn07XG5cbmdsb2JhbC5taXhpbnMgPSB7XG4gICAgaXNJbnRlcmZhY2U6IEludGVyZmFjZXMuaXNJbnRlcmZhY2UsXG4gICAgaXNUcmFpdDogVHJhaXRzLmlzVHJhaXQsXG4gICAgZ2V0SW50ZXJmYWNlczogKENsYXNzKSA9PiBDbGFzc1tNaXhpbnMuYXBwbGllZEludGVyZmFjZXNTeW1ib2xdIHx8IFtdLFxufTtcblxuZ2xvYmFsLm1peCA9IGZ1bmN0aW9uIG1peChzdXBlcmNsYXNzLCAuLi5taXhpbnMpIHtcbiAgICBzdXBlcmNsYXNzID0gc3VwZXJjbGFzcyB8fCBfX2p5bWZvbnkuSk9iamVjdCB8fCBjbGFzcyB7fTtcbiAgICBzdXBlcmNsYXNzID0gbWl4aW5zLnJlZHVjZSgoYSwgYikgPT4gYihhKSwgc3VwZXJjbGFzcyk7XG5cbiAgICBjb25zdCBpbnRlcmZhY2VzID0gQXJyYXkuZnJvbSgoZnVuY3Rpb24gKiAoKSB7XG4gICAgICAgIGZvciAoY29uc3QgaSBvZiBtaXhpbnMpIHtcbiAgICAgICAgICAgIGlmICghIEludGVyZmFjZXMuaXNJbnRlcmZhY2UoaSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGRlZmluaXRpb24gPSBpLmRlZmluaXRpb247XG4gICAgICAgICAgICB3aGlsZSAoZGVmaW5pdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG91dGVyID0gTWl4aW5zLmdldE1peGluKGRlZmluaXRpb24pO1xuICAgICAgICAgICAgICAgIGlmIChvdXRlcikge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBvdXRlcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGRlZmluaXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSkoKSk7XG5cbiAgICBjb25zdCBtaXhlZCA9IChzID0+IHtcbiAgICAgICAgY29uc3QgbWl4aW4gPSBjbGFzcyBleHRlbmRzIHMge307XG4gICAgICAgIG1peGluLmlzTWl4aW4gPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiBtaXhpbjtcbiAgICB9KShzdXBlcmNsYXNzKTtcblxuICAgIGZvciAoY29uc3QgbWl4aW4gb2YgbWl4aW5zKSB7XG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBNaXhpbnMuZ2V0Q29uc3RhbnRzTmFtZXMobWl4aW4uZGVmaW5pdGlvbikpIHtcbiAgICAgICAgICAgIG1peGVkW25hbWVdID0gbWl4aW5bbmFtZV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobWl4ZWQsIE1peGlucy5hcHBsaWVkSW50ZXJmYWNlc1N5bWJvbCwge1xuICAgICAgICB2YWx1ZTogWyAuLi5pbnRlcmZhY2VzIF0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1peGVkO1xufTtcblxuZ2xvYmFsLmltcGxlbWVudGF0aW9uT2YgPSBmdW5jdGlvbiBpbXBsZW1lbnRhdGlvbk9mKC4uLmludGVyZmFjZXMpIHtcbiAgICByZXR1cm4gZ2xvYmFsLm1peCh1bmRlZmluZWQsIC4uLmludGVyZmFjZXMpO1xufTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGhvd2V2ZXIsIHRoZVxuICAgICAgICAgIC8vIHJlc3VsdCBmb3IgdGhpcyBpdGVyYXRpb24gd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgLy8gcmVhc29uLiBOb3RlIHRoYXQgcmVqZWN0aW9ucyBvZiB5aWVsZGVkIFByb21pc2VzIGFyZSBub3RcbiAgICAgICAgICAvLyB0aHJvd24gYmFjayBpbnRvIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIGFzIGlzIHRoZSBjYXNlXG4gICAgICAgICAgLy8gd2hlbiBhbiBhd2FpdGVkIFByb21pc2UgaXMgcmVqZWN0ZWQuIFRoaXMgZGlmZmVyZW5jZSBpblxuICAgICAgICAgIC8vIGJlaGF2aW9yIGJldHdlZW4geWllbGQgYW5kIGF3YWl0IGlzIGltcG9ydGFudCwgYmVjYXVzZSBpdFxuICAgICAgICAgIC8vIGFsbG93cyB0aGUgY29uc3VtZXIgdG8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgeWllbGRlZFxuICAgICAgICAgIC8vIHJlamVjdGlvbiAoc3dhbGxvdyBpdCBhbmQgY29udGludWUsIG1hbnVhbGx5IC50aHJvdyBpdCBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgZ2VuZXJhdG9yLCBhYmFuZG9uIGl0ZXJhdGlvbiwgd2hhdGV2ZXIpLiBXaXRoXG4gICAgICAgICAgLy8gYXdhaXQsIGJ5IGNvbnRyYXN0LCB0aGVyZSBpcyBubyBvcHBvcnR1bml0eSB0byBleGFtaW5lIHRoZVxuICAgICAgICAgIC8vIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBzbyB0aGVcbiAgICAgICAgICAvLyBvbmx5IG9wdGlvbiBpcyB0byB0aHJvdyBpdCBmcm9tIHRoZSBhd2FpdCBleHByZXNzaW9uLCBhbmRcbiAgICAgICAgICAvLyBsZXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBoYW5kbGUgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHJ1bnRpbWUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gSW4gc2xvcHB5IG1vZGUsIHVuYm91bmQgYHRoaXNgIHJlZmVycyB0byB0aGUgZ2xvYmFsIG9iamVjdCwgZmFsbGJhY2sgdG9cbiAgLy8gRnVuY3Rpb24gY29uc3RydWN0b3IgaWYgd2UncmUgaW4gZ2xvYmFsIHN0cmljdCBtb2RlLiBUaGF0IGlzIHNhZGx5IGEgZm9ybVxuICAvLyBvZiBpbmRpcmVjdCBldmFsIHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5LlxuICAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpXG4pO1xuIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsIGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaCAoZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=