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
            }

            if (e !== this._last) {
                next.prev = prev;
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
                            e = this._first;

                        case 1:
                            _context.next = 3;
                            return [e.key, e.value];

                        case 3:
                            if (e = e.next) {
                                _context.next = 1;
                                break;
                            }

                        case 4:
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
    if (undefined !== BoundFunction && obj instanceof BoundFunction) {
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

            Object.defineProperty(mixin, 'arguments', { value: null, writable: false, enumerable: false, configurable: false });
            Object.defineProperty(mixin, 'caller', { value: null, writable: false, enumerable: false, configurable: false });
            Object.defineProperty(mixin, 'prototype', { value: undefined, writable: false, enumerable: false, configurable: false });

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
            if (undefined === this._asyncSupport) {
                this._asyncSupport = false;

                try {
                    var fn = void 0;
                    eval('fn = async function () { }');
                    this._asyncSupport = 'AsyncFunction' === (fn.constructor.name || fn.constructor.displayName);
                } catch (e) {
                    if (!(e instanceof SyntaxError)) {
                        throw e;
                    }
                }
            }

            return this._asyncSupport;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvRXhjZXB0aW9uL0ludmFsaWRBcmd1bWVudEV4Y2VwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9FeGNlcHRpb24vSW52YWxpZFBhcmFtZXRlckV4Y2VwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9FeGNlcHRpb24vTWlzc2luZ01hbmRhdG9yeVBhcmFtZXRlcnNFeGNlcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vanMvRXhjZXB0aW9uL1JvdXRlTm90Rm91bmRFeGNlcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vanMvVXJsR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanltZm9ueS9kYXRhc3RydWN0dXJlL3NyYy9IYXNoVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqeW1mb255L2RhdGFzdHJ1Y3R1cmUvc3JjL1RyYWl0cy9HZW5lcmljQ29sbGVjdGlvblRyYWl0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanltZm9ueS91dGlsL2xpYi9Jcy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqeW1mb255L3V0aWwvbGliL01peGlucy9JbnRlcmZhY2VzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanltZm9ueS91dGlsL2xpYi9NaXhpbnMvTWl4aW5zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanltZm9ueS91dGlsL2xpYi9NaXhpbnMvVHJhaXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanltZm9ueS91dGlsL2xpYi9PYmplY3QvZW50cmllcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGp5bWZvbnkvdXRpbC9saWIvUGxhdGZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqeW1mb255L3V0aWwvbGliL1JlZ2V4L3F1b3RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanltZm9ueS91dGlsL2xpYi9TdHJpbmcvc3RydHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqeW1mb255L3V0aWwvbGliL2lzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanltZm9ueS91dGlsL2xpYi9taXhpbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyJdLCJuYW1lcyI6WyJJbnZhbGlkQXJndW1lbnRFeGNlcHRpb24iLCJFcnJvciIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwiSW52YWxpZFBhcmFtZXRlckV4Y2VwdGlvbiIsIk1pc3NpbmdNYW5kYXRvcnlQYXJhbWV0ZXJzRXhjZXB0aW9uIiwiUm91dGVOb3RGb3VuZEV4Y2VwdGlvbiIsImRlY29kZWRDaGFycyIsIlVybEdlbmVyYXRvciIsInJvdXRlQ29sbGVjdGlvbiIsIl9yb3V0ZUNvbGxlY3Rpb24iLCJPYmplY3QiLCJhc3NpZ24iLCJzY2hlbWUiLCJsb2NhdGlvbiIsInByb3RvY29sIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiaXNTZWN1cmUiLCJfY29udGV4dCIsInBhdGhpbmZvIiwicGF0aG5hbWUiLCJob3N0IiwiaG9zdG5hbWUiLCJodHRwUG9ydCIsInBvcnQiLCJodHRwc1BvcnQiLCJxdWVyeVN0cmluZyIsInNlYXJjaCIsImVudHJpZXMiLCJuYW1lIiwicm91dGUiLCJwYXJhbWV0ZXJzIiwicmVmZXJlbmNlVHlwZSIsIkFCU09MVVRFX1BBVEgiLCJfZG9HZW5lcmF0ZSIsInZhcmlhYmxlcyIsImRlZmF1bHRzIiwidG9rZW5zIiwiaG9zdFRva2VucyIsInNjaGVtZXMiLCJyZXF1aXJlZFNjaGVtZXMiLCJtZXJnZWRQYXJhbXMiLCJkaWZmIiwiZmlsdGVyIiwiaGFzT3duUHJvcGVydHkiLCJsZW5ndGgiLCJqb2luIiwidXJsIiwib3B0aW9uYWwiLCJtZXNzYWdlIiwidG9rZW4iLCJTdHJpbmciLCJyZWdleCIsIlJlZ0V4cCIsInRlc3QiLCJfX2p5bWZvbnkiLCJzdHJ0ciIsImVuY29kZVVSSUNvbXBvbmVudCIsInN1YnN0ciIsInNjaGVtZUF1dGhvcml0eSIsImluZGV4T2YiLCJBQlNPTFVURV9VUkwiLCJyb3V0ZUhvc3QiLCJORVRXT1JLX1BBVEgiLCJSRUxBVElWRV9QQVRIIiwiZ2V0UmVsYXRpdmVQYXRoIiwiZXh0cmFzIiwia2V5cyIsInByb3RvdHlwZSIsImNhbGwiLCJmcmFnbWVudCIsIl9mcmFnbWVudCIsImlkeCIsInRvSGFzaFRhYmxlIiwib2JqIiwiaXNPYmplY3RMaXRlcmFsIiwiaXNBcnJheSIsInRhYmxlIiwiSGFzaFRhYmxlIiwiZ2V0RW50cmllcyIsImsiLCJ2IiwicHV0IiwidG9RdWVyeSIsImtleSIsInZhbHVlIiwiYmFzZSIsIkFycmF5IiwiZnJvbSIsIm1hcCIsImVsIiwiaHQiLCJyZWR1Y2UiLCJyZXMiLCJxdWVyeSIsImJhc2VQYXRoIiwidGFyZ2V0UGF0aCIsInNvdXJjZURpcnMiLCJjaGFyQXQiLCJzcGxpdCIsInRhcmdldERpcnMiLCJwb3AiLCJ0YXJnZXRGaWxlIiwiaSIsImRpciIsInB1c2giLCJwYXRoIiwicmVwZWF0IiwiY29sb25Qb3MiLCJzbGFzaFBvcyIsIndpbmRvdyIsIkdlbmVyaWNDb2xsZWN0aW9uVHJhaXQiLCJJTklUSUFMX1NJWkUiLCJoYXNoIiwic3RyIiwiY2hhckNvZGVBdCIsImlzTnVtZXJpY0ludCIsInZhbCIsIkVudHJ5IiwiaGFzaENvZGUiLCJuZXh0IiwidW5kZWZpbmVkIiwicHJldiIsImJ1Y2tldFNpemUiLCJfYnVja2V0U2l6ZSIsImNsZWFyIiwiX2J1Y2tldHMiLCJmaWxsIiwiX2ZpcnN0IiwiX2xhc3QiLCJfbGVuZ3RoIiwiX2xhc3ROdW1lcmljSWR4IiwiZW50cnkiLCJidWNrZXRJZHgiLCJfYWRkIiwiZSIsImNvcHkiLCJsYXN0IiwiX3NlYXJjaCIsInJlc29sdmUiLCJ0b09iamVjdCIsInRvQXJyYXkiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm1peCIsImdsb2JhbCIsInRvU3RyaW5nVGFnIiwiY29uc3RydWN0b3IiLCJnZXRUcmFpdCIsImlzR2VuZXJhdG9yIiwidGhyb3ciLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZGlzcGxheU5hbWUiLCJQbGF0Zm9ybSIsImhhc0FzeW5jRnVuY3Rpb25TdXBwb3J0IiwiaXNBc3luY0Z1bmN0aW9uIiwiaXNGdW5jdGlvbiIsIkJvdW5kRnVuY3Rpb24iLCJ0b1N0cmluZyIsIk1peGlucyIsIkNMQVNTX1RZUEUiLCJjaGVja2VkQ2xhc3Nlc0NhY2hlIiwiU2V0IiwiSW50ZXJmYWNlcyIsIm1peGluIiwiY2xhc3NUeXBlU3ltYm9sIiwiZGVmaW5pdGlvbiIsImNoZWNrcyIsImhhcyIsImdldEZ1bmN0aW9ucyIsImRlc2NyaXB0b3IiLCJmbiIsIlN5bnRheEVycm9yIiwicHJvcGVydHkiLCJ0YXJnZXQiLCJ0YXJnZXREZXNjcmlwdG9yIiwiZ2V0UHJvcGVydHlEZXNjcmlwdG9yIiwic3ByaW50ZiIsImdldCIsInNldCIsImFkZCIsImNyZWF0ZU1peGluIiwic2V0UHJvdG90eXBlT2YiLCJoYXNJbnN0YW5jZSIsIl9jcmVhdGVIYXNJbnN0YW5jZSIsImlzT2JqZWN0IiwibyIsIm1peGlucyIsImFwcGxpZWRJbnRlcmZhY2VzU3ltYm9sIiwiRnVuY3Rpb25Qcm9wcyIsImdldE93blByb3BlcnR5TmFtZXMiLCJGdW5jdGlvbiIsInN5bU91dGVyTWl4aW4iLCJzeW1BcHBsaWVkSW50ZXJmYWNlcyIsInN5bUNsYXNzVHlwZSIsImNiIiwiY29uc3RydWN0Q2IiLCJzdXBlcmNsYXNzIiwibSIsImFyZ3MiLCJpc01peGluIiwiZ2V0Q29uc3RhbnRzTmFtZXMiLCJjb25zdGFudCIsImRlZmluZVByb3BlcnR5Iiwid3JpdGFibGUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwicHJvcEtleSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImdldFByb3RvdHlwZU9mIiwiY2hhaW4iLCJfZ2V0Q2xhc3NDaGFpbiIsImdlbiIsImlzU3RhdGljIiwiUCIsInBhcmVudCIsInVuc2hpZnQiLCJUcmFpdHMiLCJpbmhlcml0cyIsIk1hcCIsImdldE93blByb3BlcnR5U3ltYm9scyIsInAiLCJwcm9wIiwidHJhaXQiLCJfX2NvbnN0cnVjdCIsIm9iamVudHJpZXMiLCJvYmplY3QiLCJfYXN5bmNTdXBwb3J0IiwiZXZhbCIsInByb2Nlc3MiLCJwbGF0Zm9ybSIsInJlZ2V4X3F1b3RlIiwic3RyaW5nIiwicmVwbGFjZVBhaXJzIiwic2VhcmNoUGF0dGVybiIsIm1hdGNoIiwiYXJnIiwicHJpbWl0aXZlcyIsIk51bWJlciIsIkJvb2xlYW4iLCJpc1NjYWxhciIsInByb3RvIiwidHlwZSIsImlzUHJvbWlzZSIsInRoZW4iLCJpc1N0cmVhbSIsInN0cmVhbSIsInBpcGUiLCJnZXRJbnRlcmZhY2UiLCJjcmVhdGUiLCJpc0ludGVyZmFjZSIsImlzVHJhaXQiLCJnZXRJbnRlcmZhY2VzIiwiQ2xhc3MiLCJKT2JqZWN0IiwiYSIsImIiLCJpbnRlcmZhY2VzIiwib3V0ZXIiLCJnZXRNaXhpbiIsIm1peGVkIiwicyIsImltcGxlbWVudGF0aW9uT2YiLCJjYWNoZWRTZXRUaW1lb3V0IiwiY2FjaGVkQ2xlYXJUaW1lb3V0IiwiZGVmYXVsdFNldFRpbW91dCIsImRlZmF1bHRDbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsInF1ZXVlIiwiZHJhaW5pbmciLCJjdXJyZW50UXVldWUiLCJxdWV1ZUluZGV4IiwiY2xlYW5VcE5leHRUaWNrIiwiY29uY2F0IiwiZHJhaW5RdWV1ZSIsInRpbWVvdXQiLCJsZW4iLCJydW4iLCJuZXh0VGljayIsImFyZ3VtZW50cyIsIkl0ZW0iLCJhcnJheSIsImFwcGx5IiwidGl0bGUiLCJicm93c2VyIiwiZW52IiwiYXJndiIsInZlcnNpb24iLCJ2ZXJzaW9ucyIsIm5vb3AiLCJvbiIsImFkZExpc3RlbmVyIiwib25jZSIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiZW1pdCIsInByZXBlbmRMaXN0ZW5lciIsInByZXBlbmRPbmNlTGlzdGVuZXIiLCJsaXN0ZW5lcnMiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJ1bWFzayIsIk9wIiwiaGFzT3duIiwiJFN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsImluTW9kdWxlIiwicnVudGltZSIsInJlZ2VuZXJhdG9yUnVudGltZSIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY29udGV4dCIsIkNvbnRleHQiLCJfaW52b2tlIiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZXJyIiwiR2VuU3RhdGVTdXNwZW5kZWRTdGFydCIsIkdlblN0YXRlU3VzcGVuZGVkWWllbGQiLCJHZW5TdGF0ZUV4ZWN1dGluZyIsIkdlblN0YXRlQ29tcGxldGVkIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJnZW5GdW4iLCJjdG9yIiwibWFyayIsIl9fcHJvdG9fXyIsImF3cmFwIiwiX19hd2FpdCIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJQcm9taXNlIiwidW53cmFwcGVkIiwicHJldmlvdXNQcm9taXNlIiwiZW5xdWV1ZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiYXN5bmMiLCJpdGVyIiwiZG9uZSIsInN0YXRlIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJyZXR1cm4iLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsInJldmVyc2UiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJza2lwVGVtcFJlc2V0Iiwic2xpY2UiLCJzdG9wIiwicm9vdEVudHJ5Iiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJnIiwid2VicGFja1BvbHlmaWxsIiwiZGVwcmVjYXRlIiwicGF0aHMiLCJjaGlsZHJlbiIsImwiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7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RW5DM0IsUUFBSyxlQUFXO0FBQ2YsV0FBT2xMLE9BQU91RyxDQUFkO0FBQ0E7QUFKa0MsR0FBcEM7QUFNQXZHLFNBQU82WixlQUFQLEdBQXlCLENBQXpCO0FBQ0E7QUFDRCxRQUFPN1osTUFBUDtBQUNBLENBckJELEMiLCJmaWxlIjoidXJsLWdlbmVyYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL2luZGV4LmpzXCIpO1xuIiwiLyoqXG4gKiBCYXNlIEVycm9yIGNsYXNzLlxuICovXG5jbGFzcyBJbnZhbGlkQXJndW1lbnRFeGNlcHRpb24gZXh0ZW5kcyBFcnJvciB7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uO1xuIiwiY29uc3QgSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uID0gcmVxdWlyZSgnLi9JbnZhbGlkQXJndW1lbnRFeGNlcHRpb24nKTtcblxuLyoqXG4gKiBFeGNlcHRpb24gdGhyb3duIHdoZW4gYSBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkLlxuICovXG5jbGFzcyBJbnZhbGlkUGFyYW1ldGVyRXhjZXB0aW9uIGV4dGVuZHMgSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uIHtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbnZhbGlkUGFyYW1ldGVyRXhjZXB0aW9uO1xuIiwiY29uc3QgSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uID0gcmVxdWlyZSgnLi9JbnZhbGlkQXJndW1lbnRFeGNlcHRpb24nKTtcblxuLyoqXG4gKiBFeGNlcHRpb24gdGhyb3duIHdoZW4gYSByb3V0ZSBjYW5ub3QgYmUgZ2VuZXJhdGVkIGJlY2F1c2Ugb2YgbWlzc2luZ1xuICogbWFuZGF0b3J5IHBhcmFtZXRlcnMuXG4gKi9cbmNsYXNzIE1pc3NpbmdNYW5kYXRvcnlQYXJhbWV0ZXJzRXhjZXB0aW9uIGV4dGVuZHMgSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uIHtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNaXNzaW5nTWFuZGF0b3J5UGFyYW1ldGVyc0V4Y2VwdGlvbjtcbiIsImNvbnN0IEludmFsaWRBcmd1bWVudEV4Y2VwdGlvbiA9IHJlcXVpcmUoJy4vSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uJyk7XG5cbi8qKlxuICogRXhjZXB0aW9uIHRocm93biB3aGVuIGEgcm91dGUgZG9lcyBub3QgZXhpc3QuXG4gKi9cbmNsYXNzIFJvdXRlTm90Rm91bmRFeGNlcHRpb24gZXh0ZW5kcyBJbnZhbGlkQXJndW1lbnRFeGNlcHRpb24ge1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJvdXRlTm90Rm91bmRFeGNlcHRpb247XG4iLCJyZXF1aXJlKCdAanltZm9ueS91dGlsL2xpYi9QbGF0Zm9ybScpO1xucmVxdWlyZSgnQGp5bWZvbnkvdXRpbC9saWIvaXMnKTtcbnJlcXVpcmUoJ0BqeW1mb255L3V0aWwvbGliL09iamVjdC9lbnRyaWVzJyk7XG5yZXF1aXJlKCdAanltZm9ueS91dGlsL2xpYi9SZWdleC9xdW90ZScpO1xucmVxdWlyZSgnQGp5bWZvbnkvdXRpbC9saWIvU3RyaW5nL3N0cnRyJyk7XG5yZXF1aXJlKCdAanltZm9ueS91dGlsL2xpYi9taXhpbnMnKTtcbnJlcXVpcmUoJ0BqeW1mb255L2RhdGFzdHJ1Y3R1cmUvc3JjL0hhc2hUYWJsZScpO1xuXG5jb25zdCBJbnZhbGlkUGFyYW1ldGVyRXhjZXB0aW9uID0gcmVxdWlyZSgnLi9FeGNlcHRpb24vSW52YWxpZFBhcmFtZXRlckV4Y2VwdGlvbicpO1xuY29uc3QgTWlzc2luZ01hbmRhdG9yeVBhcmFtZXRlcnNFeGNlcHRpb24gPSByZXF1aXJlKCcuL0V4Y2VwdGlvbi9NaXNzaW5nTWFuZGF0b3J5UGFyYW1ldGVyc0V4Y2VwdGlvbicpO1xuY29uc3QgUm91dGVOb3RGb3VuZEV4Y2VwdGlvbiA9IHJlcXVpcmUoJy4vRXhjZXB0aW9uL1JvdXRlTm90Rm91bmRFeGNlcHRpb24nKTtcblxuY29uc3QgZGVjb2RlZENoYXJzID0ge1xuICAgICclMkYnOiAnLycsXG4gICAgJyU0MCc6ICdAJyxcbiAgICAnJTNBJzogJzonLFxuICAgICclM0InOiAnOycsXG4gICAgJyUyQyc6ICcsJyxcbiAgICAnJTNEJzogJz0nLFxuICAgICclMkInOiAnKycsXG4gICAgJyUyMSc6ICchJyxcbiAgICAnJTJBJzogJyonLFxuICAgICclN0MnOiAnfCcsXG59O1xuXG5jbGFzcyBVcmxHZW5lcmF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHJvdXRlQ29sbGVjdGlvbikge1xuICAgICAgICB0aGlzLl9yb3V0ZUNvbGxlY3Rpb24gPSBPYmplY3QuYXNzaWduKHt9LCByb3V0ZUNvbGxlY3Rpb24pO1xuXG4gICAgICAgIGNvbnN0IHNjaGVtZSA9IGxvY2F0aW9uLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGlzU2VjdXJlID0gc2NoZW1lID09PSAnaHR0cHMnO1xuXG4gICAgICAgIHRoaXMuX2NvbnRleHQgPSB7XG4gICAgICAgICAgICBwYXRoaW5mbzogbG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICAgICAgICBob3N0OiBsb2NhdGlvbi5ob3N0bmFtZSxcbiAgICAgICAgICAgIHNjaGVtZSxcbiAgICAgICAgICAgIGh0dHBQb3J0OiBpc1NlY3VyZSA/IDgwIDogfn4obG9jYXRpb24ucG9ydCB8fCA4MCksXG4gICAgICAgICAgICBodHRwc1BvcnQ6IGlzU2VjdXJlID8gfn4obG9jYXRpb24ucG9ydCB8fCA0NDMpIDogNDQzLFxuICAgICAgICAgICAgcXVlcnlTdHJpbmc6IGxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCByb3V0ZXMgdG8gcm91dGVyIGNvbGxlY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIE9iamVjdD59IHJvdXRlQ29sbGVjdGlvblxuICAgICAqL1xuICAgIGFkZFJvdXRlcyhyb3V0ZUNvbGxlY3Rpb24pIHtcbiAgICAgICAgZm9yIChjb25zdCBbIG5hbWUsIHJvdXRlIF0gb2YgT2JqZWN0LmVudHJpZXMocm91dGVDb2xsZWN0aW9uKSkge1xuICAgICAgICAgICAgdGhpcy5fcm91dGVDb2xsZWN0aW9uW25hbWVdID0gcm91dGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSBVUkwgb3IgcGF0aCBmb3IgYSBzcGVjaWZpYyByb3V0ZSBiYXNlZCBvbiB0aGUgZ2l2ZW4gcGFyYW1ldGVycy5cbiAgICAgKlxuICAgICAqIFBhcmFtZXRlcnMgdGhhdCByZWZlcmVuY2UgcGxhY2Vob2xkZXJzIGluIHRoZSByb3V0ZSBwYXR0ZXJuIHdpbGwgc3Vic3RpdHV0ZSB0aGVtIGluIHRoZVxuICAgICAqIHBhdGggb3IgaG9zdC4gRXh0cmEgcGFyYW1zIGFyZSBhZGRlZCBhcyBxdWVyeSBzdHJpbmcgdG8gdGhlIFVSTC5cbiAgICAgKlxuICAgICAqIFdoZW4gdGhlIHBhc3NlZCByZWZlcmVuY2UgdHlwZSBjYW5ub3QgYmUgZ2VuZXJhdGVkIGZvciB0aGUgcm91dGUgYmVjYXVzZSBpdCByZXF1aXJlcyBhIGRpZmZlcmVudFxuICAgICAqIGhvc3Qgb3Igc2NoZW1lIHRoYW4gdGhlIGN1cnJlbnQgb25lLCB0aGUgbWV0aG9kIHdpbGwgcmV0dXJuIGEgbW9yZSBjb21wcmVoZW5zaXZlIHJlZmVyZW5jZVxuICAgICAqIHRoYXQgaW5jbHVkZXMgdGhlIHJlcXVpcmVkIHBhcmFtcy4gRm9yIGV4YW1wbGUsIHdoZW4geW91IGNhbGwgdGhpcyBtZXRob2Qgd2l0aCByZWZlcmVuY2VUeXBlID0gQUJTT0xVVEVfUEFUSFxuICAgICAqIGJ1dCB0aGUgcm91dGUgcmVxdWlyZXMgdGhlIGh0dHBzIHNjaGVtZSB3aGVyZWFzIHRoZSBjdXJyZW50IHNjaGVtZSBpcyBodHRwLCBpdCB3aWxsIGluc3RlYWQgcmV0dXJuIGFuXG4gICAgICogQUJTT0xVVEVfVVJMIHdpdGggdGhlIGh0dHBzIHNjaGVtZSBhbmQgdGhlIGN1cnJlbnQgaG9zdC4gVGhpcyBtYWtlcyBzdXJlIHRoZSBnZW5lcmF0ZWQgVVJMIG1hdGNoZXNcbiAgICAgKiB0aGUgcm91dGUgaW4gYW55IGNhc2UuXG4gICAgICpcbiAgICAgKiBXaWxsIHRocm93IGFuIGVycm9yIGlmIHRoZXJlIGlzIG5vIHJvdXRlIHdpdGggdGhlIGdpdmVuIG5hbWVcbiAgICAgKlxuICAgICAqIFRoZSBzcGVjaWFsIHBhcmFtZXRlciBfZnJhZ21lbnQgd2lsbCBiZSB1c2VkIGFzIHRoZSBkb2N1bWVudCBmcmFnbWVudCBzdWZmaXhlZCB0byB0aGUgZmluYWwgVVJMLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsICo+fSBwYXJhbWV0ZXJzXG4gICAgICogQHBhcmFtIHtpbnR9IHJlZmVyZW5jZVR5cGVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2VuZXJhdGUobmFtZSwgcGFyYW1ldGVycyA9IHt9LCByZWZlcmVuY2VUeXBlID0gVXJsR2VuZXJhdG9yLkFCU09MVVRFX1BBVEgpIHtcbiAgICAgICAgY29uc3Qgcm91dGUgPSB0aGlzLl9yb3V0ZUNvbGxlY3Rpb25bbmFtZV07XG4gICAgICAgIGlmICh2b2lkIDAgPT09IHJvdXRlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUm91dGVOb3RGb3VuZEV4Y2VwdGlvbihgVW5hYmxlIHRvIGdlbmVyYXRlIGEgVVJMIGZvciB0aGUgbmFtZWQgcm91dGUgXCIke25hbWV9XCIgYXMgc3VjaCByb3V0ZSBkb2VzIG5vdCBleGlzdC5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9kb0dlbmVyYXRlKFxuICAgICAgICAgICAgcm91dGUudmFyaWFibGVzLFxuICAgICAgICAgICAgcm91dGUuZGVmYXVsdHMsXG4gICAgICAgICAgICByb3V0ZS50b2tlbnMsXG4gICAgICAgICAgICBwYXJhbWV0ZXJzLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHJlZmVyZW5jZVR5cGUsXG4gICAgICAgICAgICByb3V0ZS5ob3N0VG9rZW5zLFxuICAgICAgICAgICAgcm91dGUuc2NoZW1lc1xuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERvIGdlbmVyYXRlIGFuIGFkZHJlc3MgZnJvbSByb3V0ZSBjb21wb25lbnRzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmdbXX0gdmFyaWFibGVzXG4gICAgICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBzdHJpbmc+fSBkZWZhdWx0c1xuICAgICAqIEBwYXJhbSB7W1tzdHJpbmddXX0gdG9rZW5zXG4gICAgICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCAqPn0gcGFyYW1ldGVyc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtpbnR9IHJlZmVyZW5jZVR5cGVcbiAgICAgKiBAcGFyYW0ge1tbc3RyaW5nXV19IGhvc3RUb2tlbnNcbiAgICAgKiBAcGFyYW0ge1tzdHJpbmddfSByZXF1aXJlZFNjaGVtZXNcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9kb0dlbmVyYXRlKHZhcmlhYmxlcywgZGVmYXVsdHMsIHRva2VucywgcGFyYW1ldGVycywgbmFtZSwgcmVmZXJlbmNlVHlwZSwgaG9zdFRva2VucywgcmVxdWlyZWRTY2hlbWVzID0gW10pIHtcbiAgICAgICAgY29uc3QgbWVyZ2VkUGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdHMsIHBhcmFtZXRlcnMpO1xuXG4gICAgICAgIGNvbnN0IGRpZmYgPSB2YXJpYWJsZXMuZmlsdGVyKG5hbWUgPT4gIW1lcmdlZFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSk7XG4gICAgICAgIGlmIChkaWZmLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IE1pc3NpbmdNYW5kYXRvcnlQYXJhbWV0ZXJzRXhjZXB0aW9uKGBTb21lIG1hbmRhdG9yeSBwYXJhbWV0ZXJzIGFyZSBtaXNzaW5nIChcIiR7ZGlmZi5qb2luKCdcIiwgXCInKX1cIikgdG8gZ2VuZXJhdGUgYSBVUkwgZm9yIHJvdXRlIFwiJHtuYW1lfVwiLmApXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdXJsID0gJyc7XG4gICAgICAgIGxldCBvcHRpb25hbCA9IHRydWU7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnUGFyYW1ldGVyIFwie3BhcmFtZXRlcn1cIiBmb3Igcm91dGUgXCJ7cm91dGV9XCIgbXVzdCBtYXRjaCBcIntleHBlY3RlZH1cIiAoXCJ7Z2l2ZW59XCIgZ2l2ZW4pIHRvIGdlbmVyYXRlIGEgY29ycmVzcG9uZGluZyBVUkwuJztcblxuICAgICAgICBmb3IgKGNvbnN0IHRva2VuIG9mIHRva2Vucykge1xuICAgICAgICAgICAgaWYgKCd2YXJpYWJsZScgPT09IHRva2VuWzBdKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFvcHRpb25hbCB8fCAhZGVmYXVsdHMuaGFzT3duUHJvcGVydHkodG9rZW5bM10pIHx8IHZvaWQgMCAhPT0gbWVyZ2VkUGFyYW1zW3Rva2VuWzNdXSAmJiBTdHJpbmcobWVyZ2VkUGFyYW1zW3Rva2VuWzNdXSkgIT09IFN0cmluZyhkZWZhdWx0c1t0b2tlblszXV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXicgKyB0b2tlblsyXSArICckJywgISF0b2tlbls0XSA/ICd1JyA6ICcnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEgcmVnZXgudGVzdChtZXJnZWRQYXJhbXNbdG9rZW5bM11dKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEludmFsaWRQYXJhbWV0ZXJFeGNlcHRpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX19qeW1mb255LnN0cnRyKG1lc3NhZ2UsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3twYXJhbWV0ZXJ9JzogdG9rZW5bM10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd7cm91dGV9JzogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3tleHBlY3RlZH0nOiB0b2tlblsyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3tnaXZlbn0nOiBtZXJnZWRQYXJhbXNbdG9rZW5bM11dXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB1cmwgPSB0b2tlblsxXSArIG1lcmdlZFBhcmFtc1t0b2tlblszXV0gKyB1cmw7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbmFsID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1cmwgPSB0b2tlblsxXSArIHVybDtcbiAgICAgICAgICAgICAgICBvcHRpb25hbCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHVybCA9PT0gJycpIHtcbiAgICAgICAgICAgIHVybCA9ICcvJztcbiAgICAgICAgfVxuXG4gICAgICAgIHVybCA9IF9fanltZm9ueS5zdHJ0cihcbiAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudCh1cmwpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLycvZywgJyUyNycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcKC9nLCAnJTI4JylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwpL2csICclMjknKSxcbiAgICAgICAgICAgIGRlY29kZWRDaGFyc1xuICAgICAgICApO1xuXG4gICAgICAgIC8vIHRoZSBwYXRoIHNlZ21lbnRzIFwiLlwiIGFuZCBcIi4uXCIgYXJlIGludGVycHJldGVkIGFzIHJlbGF0aXZlIHJlZmVyZW5jZSB3aGVuIHJlc29sdmluZyBhIFVSSTsgc2VlIGh0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi0zLjNcbiAgICAgICAgLy8gc28gd2UgbmVlZCB0byBlbmNvZGUgdGhlbSBhcyB0aGV5IGFyZSBub3QgdXNlZCBmb3IgdGhpcyBwdXJwb3NlIGhlcmVcbiAgICAgICAgLy8gb3RoZXJ3aXNlIHdlIHdvdWxkIGdlbmVyYXRlIGEgVVJJIHRoYXQsIHdoZW4gZm9sbG93ZWQgYnkgYSB1c2VyIGFnZW50IChlLmcuIGJyb3dzZXIpLCBkb2VzIG5vdCBtYXRjaCB0aGlzIHJvdXRlXG4gICAgICAgIHVybCA9IF9fanltZm9ueS5zdHJ0cih1cmwsIHsnLy4uLyc6ICcvJTJFJTJFLycsICcvLi8nOiAnLyUyRS8nfSk7XG4gICAgICAgIGlmICgnLy4uJyA9PT0gdXJsLnN1YnN0cigtMykpIHtcbiAgICAgICAgICAgIHVybCA9IHVybC5zdWJzdHIoMCwgLTIpICsgJyUyRSUyRSc7XG4gICAgICAgIH0gZWxzZSBpZiAoJy8uJyA9PT0gdXJsLnN1YnN0cigtMikpIHtcbiAgICAgICAgICAgIHVybCA9IHVybC5zdWJzdHIoMCwgLTEpICsgJyUyRSc7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2NoZW1lQXV0aG9yaXR5ID0gJyc7XG4gICAgICAgIGxldCBob3N0ID0gdGhpcy5fY29udGV4dC5ob3N0O1xuICAgICAgICBpZiAoISEgaG9zdCkge1xuICAgICAgICAgICAgbGV0IHNjaGVtZSA9IHRoaXMuX2NvbnRleHQuc2NoZW1lO1xuICAgICAgICAgICAgaWYgKHJlcXVpcmVkU2NoZW1lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWRTY2hlbWVzLmluZGV4T2Yoc2NoZW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlVHlwZSA9IFVybEdlbmVyYXRvci5BQlNPTFVURV9VUkw7XG4gICAgICAgICAgICAgICAgICAgIHNjaGVtZSA9IHJlcXVpcmVkU2NoZW1lc1swXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChob3N0VG9rZW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGxldCByb3V0ZUhvc3QgPSAnJztcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHRva2VuIG9mIGhvc3RUb2tlbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCd2YXJpYWJsZScgPT09IHRva2VuWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoJ14nICsgdG9rZW5bMl0gKyAnJCcsICEhdG9rZW5bNF0gPyAndScgOiAnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISByZWdleC50ZXN0KG1lcmdlZFBhcmFtc1t0b2tlblszXV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEludmFsaWRQYXJhbWV0ZXJFeGNlcHRpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fanltZm9ueS5zdHJ0cihtZXNzYWdlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAne3BhcmFtZXRlcn0nOiB0b2tlblszXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd7cm91dGV9JzogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd7ZXhwZWN0ZWR9JzogdG9rZW5bMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAne2dpdmVufSc6IG1lcmdlZFBhcmFtc1t0b2tlblszXV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUhvc3QgPSB0b2tlblsxXSArIG1lcmdlZFBhcmFtc1t0b2tlblszXV0gKyByb3V0ZUhvc3Q7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUhvc3QgPSB0b2tlblsxXSArIHJvdXRlSG9zdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyb3V0ZUhvc3QgIT09IGhvc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaG9zdCA9IHJvdXRlSG9zdDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFVybEdlbmVyYXRvci5BQlNPTFVURV9VUkwgIT09IHJlZmVyZW5jZVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZVR5cGUgPSBVcmxHZW5lcmF0b3IuTkVUV09SS19QQVRIO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoVXJsR2VuZXJhdG9yLkFCU09MVVRFX1VSTCA9PT0gcmVmZXJlbmNlVHlwZSB8fCBVcmxHZW5lcmF0b3IuTkVUV09SS19QQVRIID09PSByZWZlcmVuY2VUeXBlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBvcnQgPSAnJztcbiAgICAgICAgICAgICAgICBpZiAoJ2h0dHAnID09PSBzY2hlbWUgJiYgODAgIT09IHRoaXMuX2NvbnRleHQuaHR0cFBvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9ydCArPSAnOicgKyB0aGlzLl9jb250ZXh0Lmh0dHBQb3J0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoJ2h0dHBzJyA9PT0gc2NoZW1lICYmIDQ0MyAhPT0gdGhpcy5fY29udGV4dC5odHRwc1BvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9ydCArPSAnOicgKyB0aGlzLl9jb250ZXh0Lmh0dHBzUG9ydDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzY2hlbWVBdXRob3JpdHkgPSBVcmxHZW5lcmF0b3IuTkVUV09SS19QQVRIID09PSByZWZlcmVuY2VUeXBlID8gJy8vJyA6IGAke3NjaGVtZX06Ly9gO1xuICAgICAgICAgICAgICAgIHNjaGVtZUF1dGhvcml0eSArPSBob3N0ICsgcG9ydDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChVcmxHZW5lcmF0b3IuUkVMQVRJVkVfUEFUSCA9PT0gcmVmZXJlbmNlVHlwZSkge1xuICAgICAgICAgICAgdXJsID0gVXJsR2VuZXJhdG9yLmdldFJlbGF0aXZlUGF0aCh0aGlzLl9jb250ZXh0LnBhdGhpbmZvLCB1cmwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXJsID0gc2NoZW1lQXV0aG9yaXR5ICsgdXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIGEgcXVlcnkgc3RyaW5nIGlmIG5lZWRlZFxuICAgICAgICBjb25zdCBleHRyYXMgPSBPYmplY3Qua2V5cyhwYXJhbWV0ZXJzKVxuICAgICAgICAgICAgLmZpbHRlcihuYW1lID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmFyaWFibGVzLmluZGV4T2YobmFtZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGRlZmF1bHRzLCBuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmYXVsdHNbbmFtZV0gIT0gcGFyYW1ldGVyc1tuYW1lXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGV4dHJhY3QgZnJhZ21lbnRcbiAgICAgICAgbGV0IGZyYWdtZW50ID0gJyc7XG4gICAgICAgIGlmIChkZWZhdWx0cy5fZnJhZ21lbnQpIHtcbiAgICAgICAgICAgIGZyYWdtZW50ID0gZGVmYXVsdHMuX2ZyYWdtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlkeDtcbiAgICAgICAgaWYgKChpZHggPSBleHRyYXMuaW5kZXhPZignX2ZyYWdtZW50JykpICE9PSAtMSkge1xuICAgICAgICAgICAgZnJhZ21lbnQgPSBwYXJhbWV0ZXJzLl9mcmFnbWVudDtcbiAgICAgICAgICAgIGRlbGV0ZSBleHRyYXNbaWR4XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChleHRyYXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCB0b0hhc2hUYWJsZSA9IChvYmopID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoISBpc09iamVjdExpdGVyYWwob2JqKSAmJiAhIGlzQXJyYXkob2JqKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHRhYmxlID0gbmV3IEhhc2hUYWJsZSgpO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIF9fanltZm9ueS5nZXRFbnRyaWVzKG9iaikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFibGUucHV0KGssIHRvSGFzaFRhYmxlKHYpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGFibGU7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCB0b1F1ZXJ5ID0gKGtleSwgdmFsdWUsIGJhc2UgPSAnJykgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEhhc2hUYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh2YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZWwgPT4gdG9RdWVyeShlbFswXSwgZWxbMV0sIGJhc2UgPyBiYXNlICsgJ1snICsga2V5ICsgJ10nIDoga2V5KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKCcmJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChiYXNlID8gYmFzZSArICdbJyArIGtleSArICddJyA6IGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgaHQgPSB0b0hhc2hUYWJsZShPYmplY3Qua2V5cyggcGFyYW1ldGVycyApXG4gICAgICAgICAgICAgICAgLmZpbHRlcigga2V5ID0+IGV4dHJhcy5pbmRleE9mKGtleSkgIT09IC0xIClcbiAgICAgICAgICAgICAgICAucmVkdWNlKCAocmVzLCBrZXkpID0+IChyZXNba2V5XSA9IHBhcmFtZXRlcnNba2V5XSwgcmVzKSwge30gKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gQXJyYXkuZnJvbShodClcbiAgICAgICAgICAgICAgICAubWFwKGVsID0+IHRvUXVlcnkoZWxbMF0sIGVsWzFdKSlcbiAgICAgICAgICAgICAgICAuam9pbignJicpO1xuXG4gICAgICAgICAgICB1cmwgKz0gJz8nICsgX19qeW1mb255LnN0cnRyKHF1ZXJ5LCB7JyUyRic6ICcvJ30pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCcnICE9PSBmcmFnbWVudCkge1xuICAgICAgICAgICAgZnJhZ21lbnQgPSBlbmNvZGVVUklDb21wb25lbnQoZnJhZ21lbnQpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLyEvZywgJyUyMScpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLycvZywgJyUyNycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcKC9nLCAnJTI4JylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwpL2csICclMjknKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXCovZywgJyUyQScpO1xuXG4gICAgICAgICAgICB1cmwgKz0gJyMnICsgX19qeW1mb255LnN0cnRyKGZyYWdtZW50LCB7JyUyRic6ICcvJywgJyUzRic6ICc/J30pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB0YXJnZXQgcGF0aCBhcyByZWxhdGl2ZSByZWZlcmVuY2UgZnJvbSB0aGUgYmFzZSBwYXRoLlxuICAgICAqXG4gICAgICogT25seSB0aGUgVVJJcyBwYXRoIGNvbXBvbmVudCAobm8gc2NoZW1hLCBob3N0IGV0Yy4pIGlzIHJlbGV2YW50IGFuZCBtdXN0IGJlIGdpdmVuLCBzdGFydGluZyB3aXRoIGEgc2xhc2guXG4gICAgICogQm90aCBwYXRocyBtdXN0IGJlIGFic29sdXRlIGFuZCBub3QgY29udGFpbiByZWxhdGl2ZSBwYXJ0cy5cbiAgICAgKiBSZWxhdGl2ZSBVUkxzIGZyb20gb25lIHJlc291cmNlIHRvIGFub3RoZXIgYXJlIHVzZWZ1bCB3aGVuIGdlbmVyYXRpbmcgc2VsZi1jb250YWluZWQgZG93bmxvYWRhYmxlIGRvY3VtZW50IGFyY2hpdmVzLlxuICAgICAqIEZ1cnRoZXJtb3JlLCB0aGV5IGNhbiBiZSB1c2VkIHRvIHJlZHVjZSB0aGUgbGluayBzaXplIGluIGRvY3VtZW50cy5cbiAgICAgKlxuICAgICAqIEV4YW1wbGUgdGFyZ2V0IHBhdGhzLCBnaXZlbiBhIGJhc2UgcGF0aCBvZiBcIi9hL2IvYy9kXCI6XG4gICAgICogLSBcIi9hL2IvYy9kXCIgICAgIC0+IFwiXCJcbiAgICAgKiAtIFwiL2EvYi9jL1wiICAgICAgLT4gXCIuL1wiXG4gICAgICogLSBcIi9hL2IvXCIgICAgICAgIC0+IFwiLi4vXCJcbiAgICAgKiAtIFwiL2EvYi9jL290aGVyXCIgLT4gXCJvdGhlclwiXG4gICAgICogLSBcIi9hL3gveVwiICAgICAgIC0+IFwiLi4vLi4veC95XCJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlUGF0aCAgIFRoZSBiYXNlIHBhdGhcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGFyZ2V0UGF0aCBUaGUgdGFyZ2V0IHBhdGhcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSByZWxhdGl2ZSB0YXJnZXQgcGF0aFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRSZWxhdGl2ZVBhdGgoYmFzZVBhdGgsIHRhcmdldFBhdGgpIHtcbiAgICAgICAgaWYgKGJhc2VQYXRoID09PSB0YXJnZXRQYXRoKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzb3VyY2VEaXJzID0gKCcvJyA9PT0gYmFzZVBhdGguY2hhckF0KDApID8gYmFzZVBhdGguc3Vic3RyKDEpIDogYmFzZVBhdGgpLnNwbGl0KCcvJyk7XG4gICAgICAgIGNvbnN0IHRhcmdldERpcnMgPSAoJy8nID09PSB0YXJnZXRQYXRoLmNoYXJBdCgwKSA/IHRhcmdldFBhdGguc3Vic3RyKDEpIDogdGFyZ2V0UGF0aCkuc3BsaXQoJy8nKTtcblxuICAgICAgICBzb3VyY2VEaXJzLnBvcCgpO1xuICAgICAgICBjb25zdCB0YXJnZXRGaWxlID0gdGFyZ2V0RGlycy5wb3AoKTtcblxuICAgICAgICBmb3IgKGNvbnN0IFsgaSwgZGlyIF0gb2YgX19qeW1mb255LmdldEVudHJpZXMoc291cmNlRGlycykpIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXREaXJzW2ldICYmIGRpciA9PT0gdGFyZ2V0RGlyc1tpXSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBzb3VyY2VEaXJzW2ldO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0YXJnZXREaXJzW2ldO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldERpcnMucHVzaCh0YXJnZXRGaWxlKTtcbiAgICAgICAgY29uc3QgcGF0aCA9ICcuLi8nLnJlcGVhdChzb3VyY2VEaXJzLmxlbmd0aCkgKyB0YXJnZXREaXJzLmpvaW4oJy8nKTtcblxuICAgICAgICAvLyBBIHJlZmVyZW5jZSB0byB0aGUgc2FtZSBiYXNlIGRpcmVjdG9yeSBvciBhbiBlbXB0eSBzdWJkaXJlY3RvcnkgbXVzdCBiZSBwcmVmaXhlZCB3aXRoIFwiLi9cIi5cbiAgICAgICAgLy8gVGhpcyBhbHNvIGFwcGxpZXMgdG8gYSBzZWdtZW50IHdpdGggYSBjb2xvbiBjaGFyYWN0ZXIgKGUuZy4sIFwiZmlsZTpjb2xvblwiKSB0aGF0IGNhbm5vdCBiZSB1c2VkXG4gICAgICAgIC8vIGFzIHRoZSBmaXJzdCBzZWdtZW50IG9mIGEgcmVsYXRpdmUtcGF0aCByZWZlcmVuY2UsIGFzIGl0IHdvdWxkIGJlIG1pc3Rha2VuIGZvciBhIHNjaGVtZSBuYW1lXG4gICAgICAgIC8vIChzZWUgaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTQuMikuXG4gICAgICAgIGxldCBjb2xvblBvcywgc2xhc2hQb3M7XG4gICAgICAgIHJldHVybiAnJyA9PT0gcGF0aCB8fCAnLycgPT09IHBhdGguY2hhckF0KDApXG4gICAgICAgICAgICB8fCAtMSAhPT0gKGNvbG9uUG9zID0gcGF0aC5pbmRleE9mKCc6JykpICYmIChjb2xvblBvcyA8IChzbGFzaFBvcyA9IHBhdGguaW5kZXhPZignLycpKSB8fCAtMSA9PT0gc2xhc2hQb3MpXG4gICAgICAgICAgICA/IGAuLyR7cGF0aH1gIDogcGF0aDtcbiAgICB9XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGFuIGFic29sdXRlIFVSTCwgZS5nLiBcImh0dHA6Ly9leGFtcGxlLmNvbS9kaXIvZmlsZVwiLlxuICovXG5VcmxHZW5lcmF0b3IuQUJTT0xVVEVfVVJMID0gMDtcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYW4gYWJzb2x1dGUgcGF0aCwgZS5nLiBcIi9kaXIvZmlsZVwiLlxuICovXG5VcmxHZW5lcmF0b3IuQUJTT0xVVEVfUEFUSCA9IDE7XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgcmVsYXRpdmUgcGF0aCBiYXNlZCBvbiB0aGUgY3VycmVudCByZXF1ZXN0IHBhdGgsIGUuZy4gXCIuLi9wYXJlbnQtZmlsZVwiLlxuICpcbiAqIEBzZWUgVXJsR2VuZXJhdG9yLmdldFJlbGF0aXZlUGF0aCgpXG4gKi9cblVybEdlbmVyYXRvci5SRUxBVElWRV9QQVRIID0gMjtcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBuZXR3b3JrIHBhdGgsIGUuZy4gXCIvL2V4YW1wbGUuY29tL2Rpci9maWxlXCIuXG4gKiBTdWNoIHJlZmVyZW5jZSByZXVzZXMgdGhlIGN1cnJlbnQgc2NoZW1lIGJ1dCBzcGVjaWZpZXMgdGhlIGhvc3QuXG4gKi9cblVybEdlbmVyYXRvci5ORVRXT1JLX1BBVEggPSAzO1xuXG5leHBvcnQgZGVmYXVsdCBVcmxHZW5lcmF0b3I7XG4iLCJpbXBvcnQgXCJyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWVcIjtcbmltcG9ydCBVcmxHZW5lcmF0b3IgZnJvbSAnLi9VcmxHZW5lcmF0b3InO1xuXG53aW5kb3cuVXJsR2VuZXJhdG9yID0gVXJsR2VuZXJhdG9yO1xuIiwiY29uc3QgR2VuZXJpY0NvbGxlY3Rpb25UcmFpdCA9IHJlcXVpcmUoJy4vVHJhaXRzL0dlbmVyaWNDb2xsZWN0aW9uVHJhaXQnKTtcbmNvbnN0IElOSVRJQUxfU0laRSA9IDY0O1xuXG4vKipcbiAqIEhhc2hpbmcgZnVuY3Rpb24uXG4gKiBSZXR1cm5zIGFuIHVuc2lnbmVkIGludGVnZXIgYmV0d2VlbiAwIGFuZCAyXjMyLTFcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7aW50fVxuICovXG5jb25zdCBoYXNoID0gKHN0cikgPT4ge1xuICAgIGxldCBoYXNoID0gNTM4MSxcbiAgICAgICAgaSA9IHN0ci5sZW5ndGg7XG5cbiAgICB3aGlsZShpKSB7XG4gICAgICAgIGhhc2ggPSAoaGFzaCAqIDMzKSBeIHN0ci5jaGFyQ29kZUF0KC0taSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiBKYXZhU2NyaXB0IGRvZXMgYml0d2lzZSBvcGVyYXRpb25zIChsaWtlIFhPUiwgYWJvdmUpIG9uIDMyLWJpdCBzaWduZWRcbiAgICAgKiBpbnRlZ2Vycy4gU2luY2Ugd2Ugd2FudCB0aGUgcmVzdWx0cyB0byBiZSBhbHdheXMgcG9zaXRpdmUsIGNvbnZlcnQgdGhlXG4gICAgICogc2lnbmVkIGludCB0byBhbiB1bnNpZ25lZCBieSBkb2luZyBhbiB1bnNpZ25lZCBiaXRzaGlmdC5cbiAgICAgKi9cbiAgICByZXR1cm4gaGFzaCA+Pj4gMDtcbn07XG5cbmNvbnN0IGlzTnVtZXJpY0ludCA9ICh2YWwpID0+IH5+dmFsID09IHZhbDtcblxuY2xhc3MgRW50cnkge1xuICAgIGNvbnN0cnVjdG9yKGtleSwgdmFsdWUpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtpbnR9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmhhc2hDb2RlID0gaXNOdW1lcmljSW50KGtleSkgPyB+fmtleSA6IGhhc2goU3RyaW5nKGtleSkpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5rZXkgPSBTdHJpbmcoa2V5KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUgeyp9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHt1bmRlZmluZWR8RW50cnl9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm5leHQgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHt1bmRlZmluZWR8RW50cnl9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnByZXYgPSB1bmRlZmluZWQ7XG4gICAgfVxufVxuXG5jbGFzcyBIYXNoVGFibGUgZXh0ZW5kcyBtaXgodW5kZWZpbmVkLCBHZW5lcmljQ29sbGVjdGlvblRyYWl0KSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2ludH0gW2J1Y2tldFNpemU9SU5JVElBTF9TSVpFXVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGJ1Y2tldFNpemUgPSBJTklUSUFMX1NJWkUpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge2ludH1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2J1Y2tldFNpemUgPSBidWNrZXRTaXplO1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7W0VudHJ5XX1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2J1Y2tldHMgPSBBcnJheSh0aGlzLl9idWNrZXRTaXplKS5maWxsKHVuZGVmaW5lZCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtFbnRyeX1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2ZpcnN0ID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7RW50cnl9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9sYXN0ID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7aW50fVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fbGVuZ3RoID0gMDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge2ludH1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2xhc3ROdW1lcmljSWR4ID0gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdERvY1xuICAgICAqL1xuICAgIGdldCBsZW5ndGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgZmlyc3QgZWxlbWVudCBvZiB0aGUgY29sbGVjdGlvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldCBmaXJzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZpcnN0ID8gdGhpcy5fZmlyc3QudmFsdWUgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgbGFzdCBlbGVtZW50IG9mIHRoZSBjb2xsZWN0aW9uLlxuICAgICAqXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgZ2V0IGxhc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sYXN0ID8gdGhpcy5fbGFzdC52YWx1ZSA6IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnNlcnRzIHRoZSBrZXktdmFsdWUgcGFpciBpbnRvIHRoZSBzeW1ib2wgdGFibGUsIG92ZXJ3cml0aW5nIHRoZSBvbGQgdmFsdWVcbiAgICAgKiB3aXRoIHRoZSBuZXcgdmFsdWUgaWYgdGhlIGtleSBpcyBhbHJlYWR5IGluIHRoZSBzeW1ib2wgdGFibGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2ludHxzdHJpbmd9IGtleVxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKlxuICAgICAqIEB0aHJvd3MgSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uIGlmIGtleSBpcyBudWxsIG9yIHVuZGVmaW5lZFxuICAgICAqL1xuICAgIHB1dChrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmICh1bmRlZmluZWQgPT09IGtleSB8fCBudWxsID09PSBrZXkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFeGNlcHRpb24oJ0tleSBjYW5ub3QgYmUgbnVsbCBvciB1bmRlZmluZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVudHJ5ID0gbmV3IEVudHJ5KGtleSwgdmFsdWUpO1xuICAgICAgICBjb25zdCBidWNrZXRJZHggPSBlbnRyeS5oYXNoQ29kZSAlIHRoaXMuX2J1Y2tldFNpemU7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9idWNrZXRzW2J1Y2tldElkeF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2J1Y2tldHNbYnVja2V0SWR4XSA9IGVudHJ5O1xuICAgICAgICAgICAgICAgIHRoaXMuX2FkZChlbnRyeSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgZSA9IHRoaXMuX2J1Y2tldHNbYnVja2V0SWR4XTtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IGVudHJ5LmtleSkge1xuICAgICAgICAgICAgICAgICAgICBlLnZhbHVlID0gZW50cnkudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChlID0gZS5uZXh0ICYmIGUuaGFzaENvZGUgJSB0aGlzLl9idWNrZXRTaXplID09PSBidWNrZXRJZHgpO1xuXG4gICAgICAgICAgICB0aGlzLl9hZGQoZW50cnkpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gdGhpcy5fZmlyc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9maXJzdCA9IGVudHJ5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNOdW1lcmljSW50KGtleSkgJiYgdGhpcy5fbGFzdE51bWVyaWNJZHggPD0ga2V5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbGFzdE51bWVyaWNJZHggPSBrZXkgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICBjb3B5KCkge1xuICAgICAgICBjb25zdCBjb3B5ID0gbmV3IEhhc2hUYWJsZSh0aGlzLl9idWNrZXRTaXplKTtcbiAgICAgICAgZm9yIChsZXQgZSA9IHRoaXMuX2ZpcnN0OyB1bmRlZmluZWQgIT09IGU7IGUgPSBlLm5leHQpIHtcbiAgICAgICAgICAgIGNvcHkucHV0KGUua2V5LCBlLnZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb3B5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFB1c2hlcyBhIG5ldyB2YWx1ZSBpbnRvIHRoZSBjb2xsZWN0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqL1xuICAgIHB1c2godmFsdWUpIHtcbiAgICAgICAgdGhpcy5wdXQodGhpcy5fbGFzdE51bWVyaWNJZHgsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQb3BzIG91dCBhbiBlbnRyeSBmcm9tIHRoZSBlbmQgb2YgdGhlIGNvbGxlY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBwb3AoKSB7XG4gICAgICAgIGNvbnN0IGxhc3QgPSB0aGlzLl9sYXN0O1xuICAgICAgICBpZiAodW5kZWZpbmVkID09PSBsYXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbGFzdCA9IHRoaXMuX2xhc3QucHJldjtcbiAgICAgICAgdGhpcy5fbGFzdC5uZXh0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9sZW5ndGgtLTtcblxuICAgICAgICByZXR1cm4gbGFzdC52YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSB2YWx1ZSBhc3NvY2lhdGVkIHdpdGgga2V5LCBpZiBzZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2ludHxzdHJpbmd9IGtleVxuICAgICAqXG4gICAgICogQHJldHVybnMge3VuZGVmaW5lZHwqfVxuICAgICAqL1xuICAgIGdldChrZXkpIHtcbiAgICAgICAgY29uc3QgZSA9IHRoaXMuX3NlYXJjaChrZXkpO1xuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQgIT09IGUgPyBlLnZhbHVlIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYW4gZWxlbWVudCBmcm9tIHRoZSBjb2xsZWN0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtpbnR8c3RyaW5nfSBrZXlcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gICAgICovXG4gICAgcmVtb3ZlKGtleSkge1xuICAgICAgICBjb25zdCBlID0gdGhpcy5fc2VhcmNoKGtleSk7XG4gICAgICAgIGlmICh1bmRlZmluZWQgPT09IGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByZXYgPSBlLnByZXY7XG4gICAgICAgIGNvbnN0IG5leHQgPSBlLm5leHQ7XG4gICAgICAgIHRoaXMuX2xlbmd0aC0tO1xuXG4gICAgICAgIGlmIChlICE9PSB0aGlzLl9maXJzdCkge1xuICAgICAgICAgICAgcHJldi5uZXh0ID0gbmV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlICE9PSB0aGlzLl9sYXN0KSB7XG4gICAgICAgICAgICBuZXh0LnByZXYgPSBwcmV2O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZCAhPT0gZSA/IGUudmFsdWUgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXREb2NcbiAgICAgKi9cbiAgICB0b0FycmF5KCkge1xuICAgICAgICBpZiAodW5kZWZpbmVkID09PSB0aGlzLl9maXJzdCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvciBhIGxpdGVyYWwgb2JqZWN0IHdpdGggYWxsIHRoZSBlbGVtZW50c1xuICAgICAqIG9mIHRoZSBjb2xsZWN0aW9uLlxuICAgICAqXG4gICAgICogQHJldHVybnMge0FycmF5fE9iamVjdH1cbiAgICAgKi9cbiAgICB0b09iamVjdCgpIHtcbiAgICAgICAgY29uc3QgcmVzb2x2ZSA9ICh2YWwpID0+IHZhbCBpbnN0YW5jZW9mIEhhc2hUYWJsZSA/IHZhbC50b09iamVjdCgpIDogdmFsO1xuXG4gICAgICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLnRvQXJyYXkoKTtcbiAgICAgICAgY29uc3QgaXNBcnJheSA9ICgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoMCA9PT0gdGhpcy5fbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5fbGVuZ3RoICE9PSB0aGlzLl9sYXN0TnVtZXJpY0lkeCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJpZXNbaV1bMF0gIT0gaSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSkoKTtcblxuICAgICAgICBpZiAoaXNBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIGVudHJpZXMubWFwKGUgPT4gcmVzb2x2ZShlWzFdKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZW50cmllcy5yZWR1Y2UoKHJlcywgdmFsKSA9PiAocmVzW3ZhbFswXV0gPSByZXNvbHZlKHZhbFsxXSksIHJlcyksIHt9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSBjb2xsZWN0aW9uIGVsZW1lbnRzLlxuICAgICAqL1xuICAgICogW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgICAgIGxldCBlID0gdGhpcy5fZmlyc3Q7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgeWllbGQgWyBlLmtleSwgZS52YWx1ZSBdO1xuICAgICAgICB9IHdoaWxlIChlID0gZS5uZXh0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIGFkZCBhbiBlbnRyeSB0byB0aGUgY29sbGVjdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RW50cnl9IGVudHJ5XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfYWRkKGVudHJ5KSB7XG4gICAgICAgIGlmICh1bmRlZmluZWQgIT09IHRoaXMuX2xhc3QpIHtcbiAgICAgICAgICAgIHRoaXMuX2xhc3QubmV4dCA9IGVudHJ5O1xuICAgICAgICB9XG5cbiAgICAgICAgZW50cnkucHJldiA9IHRoaXMuX2xhc3Q7XG4gICAgICAgIHRoaXMuX2xhc3QgPSBlbnRyeTtcbiAgICAgICAgdGhpcy5fbGVuZ3RoKys7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VhcmNoZXMgYW4gZW50cnkgd2l0aCBrZXkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICogQHJldHVybnMge0VudHJ5fHVuZGVmaW5lZH1cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX3NlYXJjaChrZXkpIHtcbiAgICAgICAgY29uc3QgaGFzaENvZGUgPSBpc051bWVyaWNJbnQoa2V5KSA/IH5+a2V5IDogaGFzaChTdHJpbmcoa2V5KSk7XG4gICAgICAgIGNvbnN0IGJ1Y2tldElkeCA9IGhhc2hDb2RlICUgdGhpcy5fYnVja2V0U2l6ZTtcbiAgICAgICAgbGV0IGUgPSB0aGlzLl9idWNrZXRzW2J1Y2tldElkeF07XG5cbiAgICAgICAgaWYgKGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKGUua2V5ICE9IGtleSkge1xuICAgICAgICAgICAgZSA9IGUubmV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbn1cblxuZ2xvYmFsLkhhc2hUYWJsZSA9IEhhc2hUYWJsZTtcbiIsImNsYXNzIEdlbmVyaWNDb2xsZWN0aW9uVHJhaXQge1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIGNvbGxlY3Rpb24gaXMgZW1wdHkuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0VtcHR5KCkge1xuICAgICAgICByZXR1cm4gMCA9PT0gdGhpcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvbmUgdGhlIGNvbGxlY3Rpb24uXG4gICAgICpcbiAgICAgKiBAYWJzdHJhY3RcbiAgICAgKi9cbiAgICBjb3B5KCkge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogYWJzdHJhY3QgbWV0aG9kICovXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG11c3Qgb3ZlcnJpZGUgXCJjb3B5XCIgbWV0aG9kJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBjb3B5IG9mIHRoZSBjb2xsZWN0aW9uLlxuICAgICAqXG4gICAgICogQGFic3RyYWN0XG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIHRvQXJyYXkoKSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBhYnN0cmFjdCBtZXRob2QgKi9cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBvdmVycmlkZSBcInRvQXJyYXlcIiBtZXRob2QnKTtcbiAgICB9XG5cbiAgICBpbnNwZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b0FycmF5KCk7XG4gICAgfVxuXG4gICAgZ2V0IFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUcmFpdChHZW5lcmljQ29sbGVjdGlvblRyYWl0KTtcbiIsImdsb2JhbC5pc0dlbmVyYXRvciA9IGZ1bmN0aW9uIGlzR2VuZXJhdG9yKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmICdmdW5jdGlvbicgPT09IHR5cGVvZiB2YWx1ZS5uZXh0ICYmICdmdW5jdGlvbicgPT09IHR5cGVvZiB2YWx1ZS50aHJvdztcbn07XG5cbmdsb2JhbC5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24gaXNHZW5lcmF0b3JGdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmICghIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoaXNHZW5lcmF0b3IodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvciA9IHZhbHVlLmNvbnN0cnVjdG9yO1xuXG4gICAgaWYgKCEgY29uc3RydWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICgnR2VuZXJhdG9yRnVuY3Rpb24nID09PSBjb25zdHJ1Y3Rvci5uYW1lIHx8ICdHZW5lcmF0b3JGdW5jdGlvbicgPT09IGNvbnN0cnVjdG9yLmRpc3BsYXlOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBpc0dlbmVyYXRvcihjb25zdHJ1Y3Rvci5wcm90b3R5cGUpO1xufTtcblxuaWYgKF9fanltZm9ueS5QbGF0Zm9ybS5oYXNBc3luY0Z1bmN0aW9uU3VwcG9ydCgpKSB7XG4gICAgZ2xvYmFsLmlzQXN5bmNGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzQXN5bmNGdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb25zdHJ1Y3RvciA9IHZhbHVlLmNvbnN0cnVjdG9yO1xuICAgICAgICBpZiAoIWNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJ0FzeW5jRnVuY3Rpb24nID09PSAoY29uc3RydWN0b3IubmFtZSB8fCBjb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSk7XG4gICAgfTtcbn0gZWxzZSB7XG4gICAgZ2xvYmFsLmlzQXN5bmNGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzQXN5bmNGdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG59XG5cbmdsb2JhbC5pc0Z1bmN0aW9uID0gZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcbiAgICBpZiAodW5kZWZpbmVkICE9PSBCb3VuZEZ1bmN0aW9uICYmIG9iaiBpbnN0YW5jZW9mIEJvdW5kRnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGlzR2VuZXJhdG9yRnVuY3Rpb24ob2JqKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoaXNBc3luY0Z1bmN0aW9uKG9iaikpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuICdbb2JqZWN0IEZ1bmN0aW9uXScgPT09IHRvU3RyaW5nLmNhbGwob2JqKTtcbn07XG4iLCJjb25zdCBNaXhpbnMgPSByZXF1aXJlKCcuL01peGlucycpO1xuY29uc3QgQ0xBU1NfVFlQRSA9ICdJbnRlcmZhY2UnO1xuXG5jb25zdCBjaGVja2VkQ2xhc3Nlc0NhY2hlID0gbmV3IFNldCgpO1xuXG5jbGFzcyBJbnRlcmZhY2VzIHtcbiAgICBzdGF0aWMgaXNJbnRlcmZhY2UobWl4aW4pIHtcbiAgICAgICAgcmV0dXJuIG1peGluW01peGlucy5jbGFzc1R5cGVTeW1ib2xdID09PSBDTEFTU19UWVBFO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGUoZGVmaW5pdGlvbikge1xuICAgICAgICBjb25zdCBjaGVja3MgPSBvYmogPT4ge1xuICAgICAgICAgICAgaWYgKGNoZWNrZWRDbGFzc2VzQ2FjaGUuaGFzKG9iai5jb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgZGVzY3JpcHRvciBvZiBNaXhpbnMuZ2V0RnVuY3Rpb25zKGRlZmluaXRpb24pKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlc2NyaXB0b3IuZm4pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBvYmpbZGVzY3JpcHRvci5mbl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc2NyaXB0b3JbJ3N0YXRpYyddICYmICdmdW5jdGlvbicgPT09IHR5cGVvZiBvYmouY29uc3RydWN0b3JbZGVzY3JpcHRvci5mbl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdNZXRob2QgXCInICsgZGVzY3JpcHRvci5mbiArICdcIiBtdXN0IGJlIGltcGxlbWVudGVkLicpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGVzY3JpcHRvci5wcm9wZXJ0eSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBkZXNjcmlwdG9yWydzdGF0aWMnXSA/IG9iai5jb25zdHJ1Y3RvciA6IG9iajtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0RGVzY3JpcHRvciA9IE1peGlucy5nZXRQcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBkZXNjcmlwdG9yLnByb3BlcnR5KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodW5kZWZpbmVkID09PSB0YXJnZXREZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX19qeW1mb255LnNwcmludGYoJ0dldHRlci9TZXR0ZXIgZm9yIFwiJXNcIiBwcm9wZXJ0eSBtdXN0IGJlIGltcGxlbWVudGVkLicsIGRlc2NyaXB0b3IucHJvcGVydHkpXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc2NyaXB0b3JbJ2dldCddICYmIHVuZGVmaW5lZCA9PT0gdGFyZ2V0RGVzY3JpcHRvci5nZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcignR2V0dGVyIGZvciBcIicgKyBkZXNjcmlwdG9yLnByb3BlcnR5ICsgJ1wiIHByb3BlcnR5IG11c3QgYmUgaW1wbGVtZW50ZWQuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc2NyaXB0b3JbJ3NldCddICYmIHVuZGVmaW5lZCA9PT0gdGFyZ2V0RGVzY3JpcHRvci5zZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcignU2V0dGVyIGZvciBcIicgKyBkZXNjcmlwdG9yLnByb3BlcnR5ICsgJ1wiIHByb3BlcnR5IG11c3QgYmUgaW1wbGVtZW50ZWQuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNoZWNrZWRDbGFzc2VzQ2FjaGUuYWRkKG9iai5jb25zdHJ1Y3Rvcik7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgbWl4aW4gPSBNaXhpbnMuY3JlYXRlTWl4aW4oZGVmaW5pdGlvbiwgdW5kZWZpbmVkLCBjaGVja3MpO1xuXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihtaXhpbiwge1xuICAgICAgICAgICAgZGVmaW5pdGlvbjogZGVmaW5pdGlvbixcbiAgICAgICAgICAgIFtNaXhpbnMuY2xhc3NUeXBlU3ltYm9sXTogQ0xBU1NfVFlQRSxcbiAgICAgICAgICAgIFtTeW1ib2wuaGFzSW5zdGFuY2VdOiBJbnRlcmZhY2VzLl9jcmVhdGVIYXNJbnN0YW5jZShtaXhpbiksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBtaXhpbjtcbiAgICB9XG5cbiAgICBzdGF0aWMgX2NyZWF0ZUhhc0luc3RhbmNlKG1peGluKSB7XG4gICAgICAgIHJldHVybiBvID0+IHtcbiAgICAgICAgICAgIGlmICghIGlzT2JqZWN0KG8pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBtaXhpbnMgPSBvLmNvbnN0cnVjdG9yW01peGlucy5hcHBsaWVkSW50ZXJmYWNlc1N5bWJvbF07XG4gICAgICAgICAgICBpZiAoISBtaXhpbnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAtMSAhPSBtaXhpbnMuaW5kZXhPZihtaXhpbik7XG4gICAgICAgIH07XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyZmFjZXM7XG4iLCJjb25zdCBGdW5jdGlvblByb3BzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoRnVuY3Rpb24ucHJvdG90eXBlKTtcblxuY29uc3Qgc3ltT3V0ZXJNaXhpbiA9IFN5bWJvbCgnb3V0ZXJNaXhpbicpO1xuY29uc3Qgc3ltQXBwbGllZEludGVyZmFjZXMgPSBTeW1ib2woJ2FwcGxpZWRJbnRlcmZhY2VzJyk7XG5jb25zdCBzeW1DbGFzc1R5cGUgPSBTeW1ib2woJ2NsYXNzVHlwZScpO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5jbGFzcyBNaXhpbnMge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgbWl4aW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBkZWZpbml0aW9uXG4gICAgICogQHBhcmFtIHt1bmRlZmluZWR8RnVuY3Rpb259IGNiIE1vZGlmeSB0aGUgbmV3bHkgY3JlYXRlZCBpbm5lciBtaXhpblxuICAgICAqIEBwYXJhbSB7dW5kZWZpbmVkfEZ1bmN0aW9ufSBjb25zdHJ1Y3RDYiBGdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gY29uc3RydWN0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZU1peGluKGRlZmluaXRpb24sIGNiID0gdW5kZWZpbmVkLCBjb25zdHJ1Y3RDYiA9IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBtaXhpbiA9IChzdXBlcmNsYXNzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtID0gY2xhc3MgZXh0ZW5kcyBzdXBlcmNsYXNzIHtcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh1bmRlZmluZWQgIT09IGNvbnN0cnVjdENiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3RDYih0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIG0uaXNNaXhpbiA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICh1bmRlZmluZWQgIT09IGNiKSB7XG4gICAgICAgICAgICAgICAgY2IobSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtO1xuICAgICAgICB9O1xuXG4gICAgICAgIGRlZmluaXRpb25bc3ltT3V0ZXJNaXhpbl0gPSBtaXhpbjtcblxuICAgICAgICBmb3IgKGNvbnN0IGNvbnN0YW50IG9mIE1peGlucy5nZXRDb25zdGFudHNOYW1lcyhkZWZpbml0aW9uKSkge1xuICAgICAgICAgICAgbWl4aW5bY29uc3RhbnRdID0gZGVmaW5pdGlvbltjb25zdGFudF07XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobWl4aW4sICdhcmd1bWVudHMnLCB7dmFsdWU6IG51bGwsIHdyaXRhYmxlOiBmYWxzZSwgZW51bWVyYWJsZTogZmFsc2UsIGNvbmZpZ3VyYWJsZTogZmFsc2V9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG1peGluLCAnY2FsbGVyJywge3ZhbHVlOiBudWxsLCB3cml0YWJsZTogZmFsc2UsIGVudW1lcmFibGU6IGZhbHNlLCBjb25maWd1cmFibGU6IGZhbHNlfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtaXhpbiwgJ3Byb3RvdHlwZScsIHt2YWx1ZTogdW5kZWZpbmVkLCB3cml0YWJsZTogZmFsc2UsIGVudW1lcmFibGU6IGZhbHNlLCBjb25maWd1cmFibGU6IGZhbHNlfSk7XG5cbiAgICAgICAgcmV0dXJuIG1peGluO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRNaXhpbihkZWZpbml0aW9uKSB7XG4gICAgICAgIHJldHVybiBkZWZpbml0aW9uW3N5bU91dGVyTWl4aW5dO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRQcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBwcm9wS2V5KSB7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgcHJvcEtleSk7XG4gICAgICAgICAgICBpZiAodW5kZWZpbmVkICE9PSBkZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlc2NyaXB0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKG9iaiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopKTtcblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBmdW5jdGlvbiBuYW1lc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZGVmaW5pdGlvblxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHN0YXRpYyAqIGdldEZ1bmN0aW9ucyhkZWZpbml0aW9uKSB7XG4gICAgICAgIGNvbnN0IGNoYWluID0gdGhpcy5fZ2V0Q2xhc3NDaGFpbihkZWZpbml0aW9uKTtcbiAgICAgICAgY29uc3QgZ2VuID0gZnVuY3Rpb24gKiAob2JqLCBpc1N0YXRpYykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBmbiBvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBmbik7XG4gICAgICAgICAgICAgICAgaWYgKCdjb25zdHJ1Y3RvcicgIT09IGZuICYmICdmdW5jdGlvbicgPT09IHR5cGVvZiBkZXNjcmlwdG9yLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHsnc3RhdGljJzogaXNTdGF0aWMsIGZuOiBmbn07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBkZXNjcmlwdG9yLmdldCB8fCAnZnVuY3Rpb24nID09PSB0eXBlb2YgZGVzY3JpcHRvci5zZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3N0YXRpYyc6IGlzU3RhdGljLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3Byb3BlcnR5JzogZm4sXG4gICAgICAgICAgICAgICAgICAgICAgICAnZ2V0JzogdW5kZWZpbmVkICE9PSBkZXNjcmlwdG9yLmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICdzZXQnOiB1bmRlZmluZWQgIT09IGRlc2NyaXB0b3Iuc2V0LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGNvbnN0IGkgb2YgY2hhaW4pIHtcbiAgICAgICAgICAgIHlpZWxkICogZ2VuKGkucHJvdG90eXBlLCBmYWxzZSk7XG4gICAgICAgICAgICB5aWVsZCAqIGdlbihpLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhbGwgY29uc3RhbnRzIG5hbWVzIGZvciBkZWZpbml0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZGVmaW5pdGlvblxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRDb25zdGFudHNOYW1lcyhkZWZpbml0aW9uKSB7XG4gICAgICAgIGNvbnN0IGNoYWluID0gdGhpcy5fZ2V0Q2xhc3NDaGFpbihkZWZpbml0aW9uKTtcblxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShmdW5jdGlvbiAqICgpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBvZiBjaGFpbikge1xuICAgICAgICAgICAgICAgIHlpZWxkICogT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaSlcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihQID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgncHJvdG90eXBlJyA9PT0gUCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCdhcmd1bWVudHMnID09PSBQIHx8ICdjYWxsZXInID09PSBQKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gJ2NhbGxlcicgYW5kICdhcmd1bWVudHMnIGFyZSByZXN0cmljdGVkIGZ1bmN0aW9uIHByb3BlcnRpZXMgYW5kIGNhbm5vdCBiZSBhY2Nlc3NlZCBpbiB0aGlzIGNvbnRleHQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGlbUF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAtMSA9PT0gRnVuY3Rpb25Qcm9wcy5pbmRleE9mKFApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSgpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgX2dldENsYXNzQ2hhaW4oZGVmaW5pdGlvbikge1xuICAgICAgICBjb25zdCBjaGFpbiA9IFtdO1xuICAgICAgICBsZXQgcGFyZW50ID0gZGVmaW5pdGlvbjtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgaWYgKHBhcmVudFtzeW1PdXRlck1peGluXSkge1xuICAgICAgICAgICAgICAgIGNoYWluLnVuc2hpZnQocGFyZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAocGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHBhcmVudCkpO1xuXG4gICAgICAgIHJldHVybiBjaGFpbjtcbiAgICB9XG59XG5cbk1peGlucy5hcHBsaWVkSW50ZXJmYWNlc1N5bWJvbCA9IHN5bUFwcGxpZWRJbnRlcmZhY2VzO1xuTWl4aW5zLmNsYXNzVHlwZVN5bWJvbCA9IHN5bUNsYXNzVHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBNaXhpbnM7XG4iLCJjb25zdCBNaXhpbnMgPSByZXF1aXJlKCcuL01peGlucycpO1xuY29uc3QgQ0xBU1NfVFlQRSA9ICdUcmFpdCc7XG5cbmNsYXNzIFRyYWl0cyB7XG4gICAgc3RhdGljIGlzVHJhaXQobWl4aW4pIHtcbiAgICAgICAgcmV0dXJuIG1peGluW01peGlucy5jbGFzc1R5cGVTeW1ib2xdID09PSBDTEFTU19UWVBFO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGUoZGVmaW5pdGlvbikge1xuICAgICAgICBjb25zdCBpbmhlcml0cyA9IG5ldyBNYXAoKTtcbiAgICAgICAgbGV0IHBhcmVudCA9IGRlZmluaXRpb247XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGlmIChwYXJlbnQucHJvdG90eXBlKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwIG9mIFsgLi4uT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocGFyZW50LnByb3RvdHlwZSksIC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocGFyZW50LnByb3RvdHlwZSkgXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5oZXJpdHMuaGFzKHApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGluaGVyaXRzLnNldChwLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHBhcmVudC5wcm90b3R5cGUsIHApKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwYXJlbnQpKTtcblxuICAgICAgICBjb25zdCBtaXhpbiA9IE1peGlucy5jcmVhdGVNaXhpbihkZWZpbml0aW9uLCB0cmFpdCA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFsgcHJvcCwgZGVzY3JpcHRvciBdIG9mIGluaGVyaXRzLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgICAgIGlmICgnY29uc3RydWN0b3InID09PSBwcm9wIHx8ICdfX2NvbnN0cnVjdCcgPT09IHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRyYWl0LnByb3RvdHlwZSwgcHJvcCwgZGVzY3JpcHRvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIG9iaiA9PiB7XG4gICAgICAgICAgICBpZiAoaXNGdW5jdGlvbihkZWZpbml0aW9uLnByb3RvdHlwZS5fX2NvbnN0cnVjdCkpIHtcbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uLnByb3RvdHlwZS5fX2NvbnN0cnVjdC5jYWxsKG9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihtaXhpbiwge1xuICAgICAgICAgICAgZGVmaW5pdGlvbjogZGVmaW5pdGlvbixcbiAgICAgICAgICAgIFtNaXhpbnMuY2xhc3NUeXBlU3ltYm9sXTogQ0xBU1NfVFlQRSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG1peGluO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcmFpdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmdsb2JhbC5fX2p5bWZvbnkgPSBnbG9iYWwuX19qeW1mb255IHx8IHt9O1xuXG4vKipcbiAqIEdldCBbS2V5LCBWYWx1ZV0gcGFpcnMgZm9yIGFuIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAqXG4gKiBAcmV0dXJucyB7R2VuZXJhdG9yfVxuICovXG5jb25zdCBlbnRyaWVzID0gZnVuY3Rpb24gKiBvYmplbnRyaWVzKG9iamVjdCkge1xuICAgIGlmIChpc0FycmF5KG9iamVjdCkpIHtcbiAgICAgICAgZm9yIChjb25zdCBrIG9mIG9iamVjdC5rZXlzKCkpIHtcbiAgICAgICAgICAgIHlpZWxkIFsgaywgb2JqZWN0W2tdIF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mIE1hcCkge1xuICAgICAgICByZXR1cm4gb2JqZWN0LmVudHJpZXMoKTtcbiAgICB9XG5cbiAgICBpZiAoISBpc09iamVjdChvYmplY3QpKSB7XG4gICAgICAgIHRocm93IG5ldyBJbnZhbGlkQXJndW1lbnRFeGNlcHRpb24oJ0FyZ3VtZW50IDEgaXMgbm90IGFuIG9iamVjdCcpO1xuICAgIH1cblxuICAgIGlmIChPYmplY3QuZW50cmllcykge1xuICAgICAgICB5aWVsZCAqIE9iamVjdC5lbnRyaWVzKG9iamVjdCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgaWYgKCEgb2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgeWllbGQgWyBrZXksIG9iamVjdFtrZXldIF07XG4gICAgfVxufTtcblxuZ2xvYmFsLl9fanltZm9ueS5nZXRFbnRyaWVzID0gZW50cmllcztcbiIsImdsb2JhbC5fX2p5bWZvbnkgPSBnbG9iYWwuX19qeW1mb255IHx8IHt9O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBfX2p5bWZvbnlcbiAqL1xuY2xhc3MgUGxhdGZvcm0ge1xuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGlzIG5vZGUgdmVyc2lvbiBoYXMgYXN5bmMgZnVuY3Rpb24gc3VwcG9ydC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBoYXNBc3luY0Z1bmN0aW9uU3VwcG9ydCgpIHtcbiAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gdGhpcy5fYXN5bmNTdXBwb3J0KSB7XG4gICAgICAgICAgICB0aGlzLl9hc3luY1N1cHBvcnQgPSBmYWxzZTtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgZm47XG4gICAgICAgICAgICAgICAgZXZhbCgnZm4gPSBhc3luYyBmdW5jdGlvbiAoKSB7IH0nKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9hc3luY1N1cHBvcnQgPSAnQXN5bmNGdW5jdGlvbicgPT09IChmbi5jb25zdHJ1Y3Rvci5uYW1lIHx8IGZuLmNvbnN0cnVjdG9yLmRpc3BsYXlOYW1lKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIShlIGluc3RhbmNlb2YgU3ludGF4RXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2FzeW5jU3VwcG9ydDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcmUgd2UgcnVubmluZyBvbiB3aW5kb3dzP1xuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzV2luZG93cygpIHtcbiAgICAgICAgcmV0dXJuICd3aW4zMicgPT09IHByb2Nlc3MucGxhdGZvcm07XG4gICAgfVxufVxuXG5nbG9iYWwuX19qeW1mb255LlBsYXRmb3JtID0gUGxhdGZvcm07XG4iLCIndXNlIHN0cmljdCc7XG5cbmdsb2JhbC5fX2p5bWZvbnkgPSBnbG9iYWwuX19qeW1mb255IHx8IHt9O1xuXG5nbG9iYWwuX19qeW1mb255LnJlZ2V4X3F1b3RlID0gZnVuY3Rpb24gKHN0cikge1xuICAgIHJldHVybiBzdHIudG9TdHJpbmcoKVxuICAgICAgICAucmVwbGFjZSgvWy5cXFxcKyo/XFxbXFxeXFxdJCgpe309ITw+fDotXS9nLCAnXFxcXCQmJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5nbG9iYWwuX19qeW1mb255ID0gZ2xvYmFsLl9fanltZm9ueSB8fCB7fTtcblxuZ2xvYmFsLl9fanltZm9ueS5zdHJ0ciA9IGZ1bmN0aW9uIHN0cnRyKHN0cmluZywgcmVwbGFjZVBhaXJzKSB7XG4gICAgY29uc3Qgc2VhcmNoUGF0dGVybiA9IE9iamVjdC5rZXlzKHJlcGxhY2VQYWlycylcbiAgICAgICAgLm1hcChfX2p5bWZvbnkucmVnZXhfcXVvdGUpXG4gICAgICAgIC5qb2luKCd8Jyk7XG5cbiAgICByZXR1cm4gc3RyaW5nLnRvU3RyaW5nKCkucmVwbGFjZShuZXcgUmVnRXhwKHNlYXJjaFBhdHRlcm4sICdnJyksIChtYXRjaCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVwbGFjZVBhaXJzW21hdGNoXTtcbiAgICB9KTtcbn07XG4iLCJnbG9iYWwuaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5jb25zdCB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbnJlcXVpcmUoJy4vSXMvZnVuY3Rpb25zJyk7XG5cbmlmICghIGlzRnVuY3Rpb24oZ2xvYmFsLmlzT2JqZWN0KSkge1xuICAgIGdsb2JhbC5pc09iamVjdCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgcmV0dXJuICEhIGFyZyAmJiAnb2JqZWN0JyA9PT0gdHlwZW9mIGFyZztcbiAgICB9O1xufVxuXG5mb3IoY29uc3QgbmFtZSBvZiBbICdBcmd1bWVudHMnLCAnQm9vbGVhbicsICdTdHJpbmcnLCAnTnVtYmVyJywgJ0RhdGUnLCAnUmVnRXhwJywgJ0Vycm9yJywgJ1N5bWJvbCcsICdNYXAnLCAnV2Vha01hcCcsICdTZXQnLCAnV2Vha1NldCcgXSkge1xuICAgIGlmIChpc0Z1bmN0aW9uKGdsb2JhbFsnaXMnICsgbmFtZV0pKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGdsb2JhbFsnaXMnICsgbmFtZV0gPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0ICcgKyBuYW1lICsgJ10nO1xuICAgIH07XG59XG5cbmNvbnN0IHByaW1pdGl2ZXMgPSBbIE51bWJlciwgU3RyaW5nLCBCb29sZWFuIF07XG5nbG9iYWwuaXNTY2FsYXIgPSBmdW5jdGlvbiBpc1NjYWxhcih2YWx1ZSkge1xuICAgIGlmICh1bmRlZmluZWQgPT09IHZhbHVlIHx8IG51bGwgPT09IHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSk7XG4gICAgZm9yIChjb25zdCB0eXBlIG9mIHByaW1pdGl2ZXMpIHtcbiAgICAgICAgaWYgKHByb3RvID09PSB0eXBlLnByb3RvdHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5nbG9iYWwuaXNPYmplY3RMaXRlcmFsID0gZnVuY3Rpb24gaXNPYmplY3RMaXRlcmFsKHZhbHVlKSB7XG4gICAgaWYgKG51bGwgPT09IHZhbHVlIHx8IHVuZGVmaW5lZCA9PT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoe30pO1xufTtcblxuZ2xvYmFsLmlzUHJvbWlzZSA9IGZ1bmN0aW9uIGlzUHJvbWlzZSh2YWx1ZSkge1xuICAgIHJldHVybiBpc0Z1bmN0aW9uKHZhbHVlLnRoZW4pO1xufTtcblxuZ2xvYmFsLmlzU3RyZWFtID0gZnVuY3Rpb24gaXNTdHJlYW0oc3RyZWFtKSB7XG4gICAgcmV0dXJuICdvYmplY3QnID09PSB0eXBlb2Ygc3RyZWFtICYmIGlzRnVuY3Rpb24oc3RyZWFtLnBpcGUpO1xufTtcbiIsImNvbnN0IE1peGlucyA9IHJlcXVpcmUoJy4vTWl4aW5zL01peGlucycpO1xuY29uc3QgSW50ZXJmYWNlcyA9IHJlcXVpcmUoJy4vTWl4aW5zL0ludGVyZmFjZXMnKTtcbmNvbnN0IFRyYWl0cyA9IHJlcXVpcmUoJy4vTWl4aW5zL1RyYWl0cycpO1xuXG5nbG9iYWwuZ2V0SW50ZXJmYWNlID0gZnVuY3Rpb24gZ2V0SW50ZXJmYWNlKGRlZmluaXRpb24pIHtcbiAgICByZXR1cm4gSW50ZXJmYWNlcy5jcmVhdGUoZGVmaW5pdGlvbik7XG59O1xuXG5nbG9iYWwuZ2V0VHJhaXQgPSBmdW5jdGlvbiBnZXRUcmFpdChkZWZpbml0aW9uKSB7XG4gICAgcmV0dXJuIFRyYWl0cy5jcmVhdGUoZGVmaW5pdGlvbik7XG59O1xuXG5nbG9iYWwubWl4aW5zID0ge1xuICAgIGlzSW50ZXJmYWNlOiBJbnRlcmZhY2VzLmlzSW50ZXJmYWNlLFxuICAgIGlzVHJhaXQ6IFRyYWl0cy5pc1RyYWl0LFxuICAgIGdldEludGVyZmFjZXM6IChDbGFzcykgPT4gQ2xhc3NbTWl4aW5zLmFwcGxpZWRJbnRlcmZhY2VzU3ltYm9sXSB8fCBbXSxcbn07XG5cbmdsb2JhbC5taXggPSBmdW5jdGlvbiBtaXgoc3VwZXJjbGFzcywgLi4ubWl4aW5zKSB7XG4gICAgc3VwZXJjbGFzcyA9IHN1cGVyY2xhc3MgfHwgX19qeW1mb255LkpPYmplY3QgfHwgY2xhc3Mge307XG4gICAgc3VwZXJjbGFzcyA9IG1peGlucy5yZWR1Y2UoKGEsIGIpID0+IGIoYSksIHN1cGVyY2xhc3MpO1xuXG4gICAgY29uc3QgaW50ZXJmYWNlcyA9IEFycmF5LmZyb20oKGZ1bmN0aW9uICogKCkge1xuICAgICAgICBmb3IgKGNvbnN0IGkgb2YgbWl4aW5zKSB7XG4gICAgICAgICAgICBpZiAoISBJbnRlcmZhY2VzLmlzSW50ZXJmYWNlKGkpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBkZWZpbml0aW9uID0gaS5kZWZpbml0aW9uO1xuICAgICAgICAgICAgd2hpbGUgKGRlZmluaXRpb24pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvdXRlciA9IE1peGlucy5nZXRNaXhpbihkZWZpbml0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAob3V0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgb3V0ZXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZGVmaW5pdGlvbiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihkZWZpbml0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pKCkpO1xuXG4gICAgY29uc3QgbWl4ZWQgPSAocyA9PiB7XG4gICAgICAgIGNvbnN0IG1peGluID0gY2xhc3MgZXh0ZW5kcyBzIHt9O1xuICAgICAgICBtaXhpbi5pc01peGluID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gbWl4aW47XG4gICAgfSkoc3VwZXJjbGFzcyk7XG5cbiAgICBmb3IgKGNvbnN0IG1peGluIG9mIG1peGlucykge1xuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgTWl4aW5zLmdldENvbnN0YW50c05hbWVzKG1peGluLmRlZmluaXRpb24pKSB7XG4gICAgICAgICAgICBtaXhlZFtuYW1lXSA9IG1peGluW25hbWVdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG1peGVkLCBNaXhpbnMuYXBwbGllZEludGVyZmFjZXNTeW1ib2wsIHtcbiAgICAgICAgdmFsdWU6IFsgLi4uaW50ZXJmYWNlcyBdLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICB9KTtcblxuICAgIHJldHVybiBtaXhlZDtcbn07XG5cbmdsb2JhbC5pbXBsZW1lbnRhdGlvbk9mID0gZnVuY3Rpb24gaW1wbGVtZW50YXRpb25PZiguLi5pbnRlcmZhY2VzKSB7XG4gICAgcmV0dXJuIGdsb2JhbC5taXgodW5kZWZpbmVkLCAuLi5pbnRlcmZhY2VzKTtcbn07XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID1cbiAgICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGlmICghKHRvU3RyaW5nVGFnU3ltYm9sIGluIGdlbkZ1bikpIHtcbiAgICAgICAgZ2VuRnVuW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uIElmIHRoZSBQcm9taXNlIGlzIHJlamVjdGVkLCBob3dldmVyLCB0aGVcbiAgICAgICAgICAvLyByZXN1bHQgZm9yIHRoaXMgaXRlcmF0aW9uIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGUgc2FtZVxuICAgICAgICAgIC8vIHJlYXNvbi4gTm90ZSB0aGF0IHJlamVjdGlvbnMgb2YgeWllbGRlZCBQcm9taXNlcyBhcmUgbm90XG4gICAgICAgICAgLy8gdGhyb3duIGJhY2sgaW50byB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBhcyBpcyB0aGUgY2FzZVxuICAgICAgICAgIC8vIHdoZW4gYW4gYXdhaXRlZCBQcm9taXNlIGlzIHJlamVjdGVkLiBUaGlzIGRpZmZlcmVuY2UgaW5cbiAgICAgICAgICAvLyBiZWhhdmlvciBiZXR3ZWVuIHlpZWxkIGFuZCBhd2FpdCBpcyBpbXBvcnRhbnQsIGJlY2F1c2UgaXRcbiAgICAgICAgICAvLyBhbGxvd3MgdGhlIGNvbnN1bWVyIHRvIGRlY2lkZSB3aGF0IHRvIGRvIHdpdGggdGhlIHlpZWxkZWRcbiAgICAgICAgICAvLyByZWplY3Rpb24gKHN3YWxsb3cgaXQgYW5kIGNvbnRpbnVlLCBtYW51YWxseSAudGhyb3cgaXQgYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGdlbmVyYXRvciwgYWJhbmRvbiBpdGVyYXRpb24sIHdoYXRldmVyKS4gV2l0aFxuICAgICAgICAgIC8vIGF3YWl0LCBieSBjb250cmFzdCwgdGhlcmUgaXMgbm8gb3Bwb3J0dW5pdHkgdG8gZXhhbWluZSB0aGVcbiAgICAgICAgICAvLyByZWplY3Rpb24gcmVhc29uIG91dHNpZGUgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgc28gdGhlXG4gICAgICAgICAgLy8gb25seSBvcHRpb24gaXMgdG8gdGhyb3cgaXQgZnJvbSB0aGUgYXdhaXQgZXhwcmVzc2lvbiwgYW5kXG4gICAgICAgICAgLy8gbGV0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gaGFuZGxlIHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBydW50aW1lLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvci5yZXR1cm4pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvclwiO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4gIC8vIEluIHNsb3BweSBtb2RlLCB1bmJvdW5kIGB0aGlzYCByZWZlcnMgdG8gdGhlIGdsb2JhbCBvYmplY3QsIGZhbGxiYWNrIHRvXG4gIC8vIEZ1bmN0aW9uIGNvbnN0cnVjdG9yIGlmIHdlJ3JlIGluIGdsb2JhbCBzdHJpY3QgbW9kZS4gVGhhdCBpcyBzYWRseSBhIGZvcm1cbiAgLy8gb2YgaW5kaXJlY3QgZXZhbCB3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeS5cbiAgKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKVxuKTtcbiIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLCBldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2ggKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9