/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/Exception/InvalidArgumentException.js":
/*!**************************************************!*\
  !*** ./js/Exception/InvalidArgumentException.js ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 42:0-14 */
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Base Error class.
 */
var InvalidArgumentException = /*#__PURE__*/function (_Error) {
  _inherits(InvalidArgumentException, _Error);

  var _super = _createSuper(InvalidArgumentException);

  function InvalidArgumentException() {
    _classCallCheck(this, InvalidArgumentException);

    return _super.apply(this, arguments);
  }

  return InvalidArgumentException;
}( /*#__PURE__*/_wrapNativeSuper(Error));

module.exports = InvalidArgumentException;

/***/ }),

/***/ "./js/Exception/InvalidParameterException.js":
/*!***************************************************!*\
  !*** ./js/Exception/InvalidParameterException.js ***!
  \***************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 39:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var InvalidArgumentException = __webpack_require__(/*! ./InvalidArgumentException */ "./js/Exception/InvalidArgumentException.js");
/**
 * Exception thrown when a parameter is not valid.
 */


var InvalidParameterException = /*#__PURE__*/function (_InvalidArgumentExcep) {
  _inherits(InvalidParameterException, _InvalidArgumentExcep);

  var _super = _createSuper(InvalidParameterException);

  function InvalidParameterException() {
    _classCallCheck(this, InvalidParameterException);

    return _super.apply(this, arguments);
  }

  return InvalidParameterException;
}(InvalidArgumentException);

module.exports = InvalidParameterException;

/***/ }),

/***/ "./js/Exception/MissingMandatoryParametersException.js":
/*!*************************************************************!*\
  !*** ./js/Exception/MissingMandatoryParametersException.js ***!
  \*************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 40:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var InvalidArgumentException = __webpack_require__(/*! ./InvalidArgumentException */ "./js/Exception/InvalidArgumentException.js");
/**
 * Exception thrown when a route cannot be generated because of missing
 * mandatory parameters.
 */


var MissingMandatoryParametersException = /*#__PURE__*/function (_InvalidArgumentExcep) {
  _inherits(MissingMandatoryParametersException, _InvalidArgumentExcep);

  var _super = _createSuper(MissingMandatoryParametersException);

  function MissingMandatoryParametersException() {
    _classCallCheck(this, MissingMandatoryParametersException);

    return _super.apply(this, arguments);
  }

  return MissingMandatoryParametersException;
}(InvalidArgumentException);

module.exports = MissingMandatoryParametersException;

/***/ }),

/***/ "./js/Exception/RouteNotFoundException.js":
/*!************************************************!*\
  !*** ./js/Exception/RouteNotFoundException.js ***!
  \************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 39:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var InvalidArgumentException = __webpack_require__(/*! ./InvalidArgumentException */ "./js/Exception/InvalidArgumentException.js");
/**
 * Exception thrown when a route does not exist.
 */


var RouteNotFoundException = /*#__PURE__*/function (_InvalidArgumentExcep) {
  _inherits(RouteNotFoundException, _InvalidArgumentExcep);

  var _super = _createSuper(RouteNotFoundException);

  function RouteNotFoundException() {
    _classCallCheck(this, RouteNotFoundException);

    return _super.apply(this, arguments);
  }

  return RouteNotFoundException;
}(InvalidArgumentException);

module.exports = RouteNotFoundException;

/***/ }),

/***/ "./js/UrlGenerator.js":
/*!****************************!*\
  !*** ./js/UrlGenerator.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

var UrlGenerator = /*#__PURE__*/function () {
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
    key: "addRoutes",
    value: function addRoutes(routeCollection) {
      for (var _i = 0, _Object$entries = Object.entries(routeCollection); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            name = _Object$entries$_i[0],
            route = _Object$entries$_i[1];

        this._routeCollection[name] = route;
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
    key: "generate",
    value: function generate(name) {
      var parameters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var referenceType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : UrlGenerator.ABSOLUTE_PATH;
      var route = this._routeCollection[name];

      if (void 0 === route) {
        throw new RouteNotFoundException("Unable to generate a URL for the named route \"".concat(name, "\" as such route does not exist."));
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
    key: "_doGenerate",
    value: function _doGenerate(variables, defaults, tokens, parameters, name, referenceType, hostTokens) {
      var requiredSchemes = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : [];
      var mergedParams = Object.assign({}, defaults, parameters);
      var diff = variables.filter(function (name) {
        return !mergedParams.hasOwnProperty(name);
      });

      if (diff.length) {
        throw new MissingMandatoryParametersException("Some mandatory parameters are missing (\"".concat(diff.join('", "'), "\") to generate a URL for route \"").concat(name, "\"."));
      }

      var url = '';
      var optional = true;
      var message = 'Parameter "{parameter}" for route "{route}" must match "{expected}" ("{given}" given) to generate a corresponding URL.';

      var _iterator = _createForOfIteratorHelper(tokens),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _token = _step.value;

          if ('variable' === _token[0]) {
            if (!optional || !defaults.hasOwnProperty(_token[3]) || void 0 !== mergedParams[_token[3]] && String(mergedParams[_token[3]]) !== String(defaults[_token[3]])) {
              var _regex = new RegExp('^' + _token[2] + '$', !!_token[4] ? 'u' : '');

              if (!_regex.test(mergedParams[_token[3]])) {
                throw new InvalidParameterException(__jymfony.strtr(message, {
                  '{parameter}': _token[3],
                  '{route}': name,
                  '{expected}': _token[2],
                  '{given}': mergedParams[_token[3]]
                }));
              }

              url = _token[1] + mergedParams[_token[3]] + url;
              optional = false;
            }
          } else {
            url = _token[1] + url;
            optional = false;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (url === '') {
        url = '/';
      }

      url = __jymfony.strtr(encodeURIComponent(url).replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29'), decodedChars); // the path segments "." and ".." are interpreted as relative reference when resolving a URI; see http://tools.ietf.org/html/rfc3986#section-3.3
      // so we need to encode them as they are not used for this purpose here
      // otherwise we would generate a URI that, when followed by a user agent (e.g. browser), does not match this route

      url = __jymfony.strtr(url, {
        '/../': '/%2E%2E/',
        '/./': '/%2E/'
      });

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

          var _iterator2 = _createForOfIteratorHelper(hostTokens),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var token = _step2.value;

              if ('variable' === token[0]) {
                var regex = new RegExp('^' + token[2] + '$', !!token[4] ? 'u' : '');

                if (!regex.test(mergedParams[token[3]])) {
                  throw new InvalidParameterException(__jymfony.strtr(message, {
                    '{parameter}': token[3],
                    '{route}': name,
                    '{expected}': token[2],
                    '{given}': mergedParams[token[3]]
                  }));
                }

                routeHost = token[1] + mergedParams[token[3]] + routeHost;
              } else {
                routeHost = token[1] + routeHost;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
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

          schemeAuthority = UrlGenerator.NETWORK_PATH === referenceType ? '//' : "".concat(scheme, "://");
          schemeAuthority += host + port;
        }
      }

      if (UrlGenerator.RELATIVE_PATH === referenceType) {
        url = UrlGenerator.getRelativePath(this._context.pathinfo, url);
      } else {
        url = schemeAuthority + url;
      } // add a query string if needed


      var extras = Object.keys(parameters).filter(function (name) {
        if (variables.indexOf(name) !== -1) {
          return false;
        }

        if (Object.prototype.hasOwnProperty.call(defaults, name)) {
          return defaults[name] != parameters[name];
        }

        return true;
      }); // extract fragment

      var fragment = '';

      if (defaults._fragment) {
        fragment = defaults._fragment;
      }

      var idx;

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

          var _iterator3 = _createForOfIteratorHelper(__jymfony.getEntries(obj)),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _step3$value = _slicedToArray(_step3.value, 2),
                  k = _step3$value[0],
                  v = _step3$value[1];

              table.put(k, toHashTable(v));
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
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
        url += '?' + __jymfony.strtr(query, {
          '%2F': '/'
        });
      }

      if ('' !== fragment) {
        fragment = encodeURIComponent(fragment).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
        url += '#' + __jymfony.strtr(fragment, {
          '%2F': '/',
          '%3F': '?'
        });
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
    key: "getRelativePath",
    value: function getRelativePath(basePath, targetPath) {
      if (basePath === targetPath) {
        return '';
      }

      var sourceDirs = ('/' === basePath.charAt(0) ? basePath.substr(1) : basePath).split('/');
      var targetDirs = ('/' === targetPath.charAt(0) ? targetPath.substr(1) : targetPath).split('/');
      sourceDirs.pop();
      var targetFile = targetDirs.pop();

      var _iterator4 = _createForOfIteratorHelper(__jymfony.getEntries(sourceDirs)),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _step4$value = _slicedToArray(_step4.value, 2),
              i = _step4$value[0],
              dir = _step4$value[1];

          if (targetDirs[i] && dir === targetDirs[i]) {
            delete sourceDirs[i];
            delete targetDirs[i];
          } else {
            break;
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      targetDirs.push(targetFile);
      var path = '../'.repeat(sourceDirs.length) + targetDirs.join('/'); // A reference to the same base directory or an empty subdirectory must be prefixed with "./".
      // This also applies to a segment with a colon character (e.g., "file:colon") that cannot be used
      // as the first segment of a relative-path reference, as it would be mistaken for a scheme name
      // (see http://tools.ietf.org/html/rfc3986#section-4.2).

      var colonPos, slashPos;
      return '' === path || '/' === path.charAt(0) || -1 !== (colonPos = path.indexOf(':')) && (colonPos < (slashPos = path.indexOf('/')) || -1 === slashPos) ? "./".concat(path) : path;
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UrlGenerator);

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UrlGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UrlGenerator */ "./js/UrlGenerator.js");
;

window.UrlGenerator = _UrlGenerator__WEBPACK_IMPORTED_MODULE_1__.default;

/***/ }),

/***/ "./node_modules/@jymfony/datastructure/src/HashTable.js":
/*!**************************************************************!*\
  !*** ./node_modules/@jymfony/datastructure/src/HashTable.js ***!
  \**************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, __webpack_require__.g, __webpack_require__.* */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GenericCollectionTrait = __webpack_require__(/*! ./Traits/GenericCollectionTrait */ "./node_modules/@jymfony/datastructure/src/Traits/GenericCollectionTrait.js");

var INITIAL_SIZE = 64;
/**
 * Hashing function.
 * Returns an unsigned integer between 0 and 2^32-1
 *
 * @param {string} str
 *
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

var HashTable = /*#__PURE__*/function (_mix) {
  _inherits(HashTable, _mix);

  var _super = _createSuper(HashTable);

  /**
   * Constructor.
   *
   * @param {int} [bucketSize = INITIAL_SIZE]
   */
  function HashTable() {
    var _this;

    var bucketSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_SIZE;

    _classCallCheck(this, HashTable);

    _this = _super.call(this);
    /**
     * @type {int}
     *
     * @private
     */

    _this._bucketSize = bucketSize;

    _this.clear();

    return _this;
  }

  _createClass(HashTable, [{
    key: "clear",
    value: function clear() {
      /**
       * @type {Entry[]}
       *
       * @private
       */
      this._buckets = Array(this._bucketSize).fill(undefined);
      /**
       * @type {Entry}
       *
       * @private
       */

      this._first = undefined;
      /**
       * @type {Entry}
       *
       * @private
       */

      this._last = undefined;
      /**
       * @type {int}
       *
       * @private
       */

      this._length = 0;
      /**
       * @type {int}
       *
       * @private
       */

      this._lastNumericIdx = 0;
    }
    /**
     * @inheritdoc
     */

  }, {
    key: "put",

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
        } while ((e = e.next) && e.hashCode % this._bucketSize === bucketIdx);

        this._add(entry);
      } finally {
        if (undefined === this._first) {
          this._first = entry;
        }

        if (isNumericInt(key) && this._lastNumericIdx <= key) {
          this._lastNumericIdx = ~~key + 1;
        }
      }
    }
    /**
     * @inheritdoc
     */

  }, {
    key: "copy",
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
    key: "push",
    value: function push(value) {
      this.put(this._lastNumericIdx, value);
    }
    /**
     * Pops out an entry from the end of the collection.
     *
     * @returns {*}
     */

  }, {
    key: "pop",
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
    key: "get",
    value: function get(key) {
      var e = this._search(key);

      return undefined !== e ? e.value : undefined;
    }
    /**
     * Returns if a key is present in the table.
     *
     * @param {int|string} key
     *
     * @returns {boolean}
     */

  }, {
    key: "has",
    value: function has(key) {
      var hashCode = isNumericInt(key) ? ~~key : hash(String(key));
      var bucketIdx = hashCode % this._bucketSize;
      var e = this._buckets[bucketIdx];

      if (e === undefined) {
        return false;
      }

      while (e !== undefined) {
        if (e.key == key) {
          return true;
        }

        e = e.next;
      }

      return false;
    }
    /**
     * Removes an element from the collection.
     *
     * @param {int|string} key
     *
     * @returns {undefined|*}
     */

  }, {
    key: "remove",
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

      return e.value;
    }
    /**
     * @inheritdoc
     */

  }, {
    key: "toArray",
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
    key: "toObject",
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
    key: "keys",

    /**
     * Returns all the table keys (ordered).
     *
     * @returns {Array}
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

              return _context.abrupt("return");

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
            case "end":
              return _context.stop();
          }
        }
      }, value, this);
    })
    /**
     * Helper method to add an entry to the collection.
     *
     * @param {Entry} entry
     *
     * @private
     */

  }, {
    key: "_add",
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
     * @param {string} key
     *
     * @returns {Entry|undefined}
     *
     * @private
     */

  }, {
    key: "_search",
    value: function _search(key) {
      var hashCode = isNumericInt(key) ? ~~key : hash(String(key));
      var bucketIdx = hashCode % this._bucketSize;
      var e = this._buckets[bucketIdx];

      if (e === undefined) {
        return;
      }

      while (e !== undefined && e.key != key) {
        e = e.next;
      }

      return e;
    }
  }, {
    key: "length",
    get: function get() {
      return this._length;
    }
    /**
     * Gets the first element of the collection.
     *
     * @returns {*}
     */

  }, {
    key: "first",
    get: function get() {
      return this._first ? this._first.value : undefined;
    }
    /**
     * Gets the last element of the collection.
     *
     * @returns {*}
     */

  }, {
    key: "last",
    get: function get() {
      return this._last ? this._last.value : undefined;
    }
  }], [{
    key: "fromObject",
    value: function fromObject(obj) {
      var table = new HashTable();

      for (var _i = 0, _Object$entries = Object.entries(obj); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            _value = _Object$entries$_i[1];

        table.put(key, _value);
      }

      return table;
    }
  }]);

  return HashTable;
}(mix(Object, GenericCollectionTrait));

__webpack_require__.g.HashTable = HashTable;

/***/ }),

/***/ "./node_modules/@jymfony/datastructure/src/Traits/GenericCollectionTrait.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@jymfony/datastructure/src/Traits/GenericCollectionTrait.js ***!
  \**********************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 64:0-14 */
/***/ ((module) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GenericCollectionTrait = /*#__PURE__*/function () {
  function GenericCollectionTrait() {
    _classCallCheck(this, GenericCollectionTrait);
  }

  _createClass(GenericCollectionTrait, [{
    key: "isEmpty",

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
    key: "copy",
    value: function copy() {
      /* istanbul ignore next: abstract method */
      throw new Error('You must override "copy" method');
    }
    /**
     * Returns an array copy of the collection.
     *
     * @returns {Array}
     *
     * @abstract
     */

  }, {
    key: "toArray",
    value: function toArray() {
      /* istanbul ignore next: abstract method */
      throw new Error('You must override "toArray" method');
    }
  }, {
    key: "inspect",
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
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__.g, __webpack_require__.* */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__.g.isGenerator = function isGenerator(value) {
  return isObject(value) && Reflect.has(value, 'next') && Reflect.has(value, 'throw') && 'function' === typeof value.next && 'function' === typeof value.throw;
};
/**
 * @param {*} value
 *
 * @returns {boolean}
 */


__webpack_require__.g.isGeneratorFunction = function isGeneratorFunction(value) {
  if (!value) {
    return false;
  }

  if (isGenerator(value)) {
    return false;
  }

  if ('[object AsyncGeneratorFunction]' === Object.prototype.toString.call(value)) {
    return true;
  }

  if (isGeneratorFunction(value.__invoke)) {
    return true;
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
  /**
   * @param {*} value
   *
   * @returns {boolean}
   */
  __webpack_require__.g.isAsyncFunction = function isAsyncFunction(value) {
    if (!value) {
      return false;
    }

    var constructor = value.constructor;

    if (!constructor) {
      return false;
    }

    if ('AsyncFunction' === (constructor.name || constructor.displayName)) {
      return true;
    }

    return '[object AsyncFunction]' === Object.prototype.toString.call(value);
  };
} else {
  __webpack_require__.g.isAsyncFunction = function isAsyncFunction() {
    return false;
  };
}
/**
 * @param {*} obj
 *
 * @returns {boolean}
 */


__webpack_require__.g.isFunction = function isFunction(obj) {
  if (!obj) {
    return false;
  }

  if (undefined !== __webpack_require__.g.BoundFunction && obj instanceof BoundFunction) {
    return true;
  }

  if (undefined !== __webpack_require__.g.BoundFunction && Object.prototype.hasOwnProperty.call(obj, 'innerObject') && obj.innerObject instanceof BoundFunction) {
    return true;
  }

  if (isGeneratorFunction(obj)) {
    return true;
  }

  if (isAsyncFunction(obj)) {
    return true;
  }

  if (isFunction(obj.__invoke)) {
    return true;
  }

  return '[object Function]' === Object.prototype.toString.call(obj);
};

/***/ }),

/***/ "./node_modules/@jymfony/util/lib/Mixins/Interfaces.js":
/*!*************************************************************!*\
  !*** ./node_modules/@jymfony/util/lib/Mixins/Interfaces.js ***!
  \*************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 141:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Mixins = __webpack_require__(/*! ./Mixins */ "./node_modules/@jymfony/util/lib/Mixins/Mixins.js");

var CLASS_TYPE = 'Interface';
var checkedClassesCache = new Set();

var Interfaces = /*#__PURE__*/function () {
  function Interfaces() {
    _classCallCheck(this, Interfaces);
  }

  _createClass(Interfaces, null, [{
    key: "isInterface",

    /**
     * @param {*} mixin
     *
     * @returns {boolean}
     */
    value: function isInterface(mixin) {
      return mixin[Mixins.classTypeSymbol] === CLASS_TYPE;
    }
    /**
     * @param {Object} definition
     *
     * @returns {Function}
     */

  }, {
    key: "create",
    value: function create(definition) {
      var _Object$setPrototypeO;

      var checks = function checks(obj) {
        if (checkedClassesCache.has(obj.constructor)) {
          return;
        }

        var _iterator = _createForOfIteratorHelper(Mixins.getFunctions(definition)),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var descriptor = _step.value;

            if (descriptor.fn) {
              if ('function' === typeof obj[descriptor.fn]) {
                continue;
              }

              if ('__construct' === descriptor.fn) {
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
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        checkedClassesCache.add(obj.constructor);
      };

      var mixin = Mixins.createMixin(definition, undefined, checks);
      Object.setPrototypeOf(mixin, (_Object$setPrototypeO = {
        definition: definition
      }, _defineProperty(_Object$setPrototypeO, Mixins.classTypeSymbol, CLASS_TYPE), _defineProperty(_Object$setPrototypeO, Symbol.hasInstance, Interfaces._createHasInstance(mixin)), _Object$setPrototypeO));
      return mixin;
    }
    /**
     * @param {Object} mixin
     *
     * @returns {Function}
     *
     * @private
     */

  }, {
    key: "_createHasInstance",
    value: function _createHasInstance(mixin) {
      return function (o) {
        if (null === o || undefined === o) {
          return false;
        } else if (Object.prototype.hasOwnProperty.call(o, '__self__')) {
          o = o.__self__;
        }

        if (!isObject(o)) {
          return false;
        }

        var mixins = o.constructor && o.constructor[Mixins.appliedInterfacesSymbol];

        if (!mixins) {
          return false;
        }

        return -1 !== mixins.indexOf(mixin);
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
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/*! CommonJS bailout: module.exports is used directly at 427:0-14 */
/***/ ((module) => {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FunctionProps = Object.getOwnPropertyNames(Function.prototype);
var symOuterMixin = Symbol('outerMixin');
var symAppliedInterfaces = Symbol('appliedInterfaces');
var symAppliedTraits = Symbol('appliedTraits');
var symClassType = Symbol('classType');
var symInitalizer = Symbol('Initializer');
/**
 * @internal
 */

var Mixins = /*#__PURE__*/function () {
  function Mixins() {
    _classCallCheck(this, Mixins);
  }

  _createClass(Mixins, null, [{
    key: "createMixin",

    /**
     * Creates a new mixin.
     *
     * @param {Function} definition
     * @param {undefined|Function} [cb] Modify the newly created inner mixin
     * @param {undefined|Function} [constructCb] Function to be called on construction
     *
     * @returns {Function}
     */
    value: function createMixin(definition) {
      var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var constructCb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

      var mixin = function mixin(superclass) {
        var m = /*#__PURE__*/function (_superclass) {
          _inherits(m, _superclass);

          var _super = _createSuper(m);

          function m() {
            _classCallCheck(this, m);

            return _super.apply(this, arguments);
          }

          _createClass(m, [{
            key: symInitalizer,
            value: function value() {
              if (undefined !== _get(_getPrototypeOf(m.prototype), symInitalizer, this)) {
                _get(_getPrototypeOf(m.prototype), symInitalizer, this).call(this, this);
              }

              constructCb(this);
            }
          }]);

          return m;
        }(superclass);

        Object.defineProperty(m, Symbol.for('_jymfony_mixin'), {
          value: m,
          enumerable: false
        });

        if (undefined !== cb) {
          cb(m);
        }

        return m;
      };

      definition[symOuterMixin] = mixin;

      var _iterator = _createForOfIteratorHelper(Mixins.getConstantsNames(definition)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var constant = _step.value;
          mixin[constant] = definition[constant];
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return mixin;
    }
    /**
     * @param {Object} definition
     *
     * @returns {*}
     */

  }, {
    key: "getMixin",
    value: function getMixin(definition) {
      return definition[symOuterMixin];
    }
    /**
     * @param {Object} obj
     * @param {string} propKey
     *
     * @returns {*}
     */

  }, {
    key: "getPropertyDescriptor",
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
     *
     * @internal
     */

  }, {
    key: "getFunctions",
    value: /*#__PURE__*/regeneratorRuntime.mark(function getFunctions(definition) {
      var chain, gen, _iterator3, _step3, i;

      return regeneratorRuntime.wrap(function getFunctions$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              chain = this._getClassChain(definition);
              gen = /*#__PURE__*/regeneratorRuntime.mark(function gen(obj, isStatic) {
                var _iterator2, _step2, fn, descriptor;

                return regeneratorRuntime.wrap(function gen$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _iterator2 = _createForOfIteratorHelper(Object.getOwnPropertyNames(obj));
                        _context.prev = 1;

                        _iterator2.s();

                      case 3:
                        if ((_step2 = _iterator2.n()).done) {
                          _context.next = 14;
                          break;
                        }

                        fn = _step2.value;
                        descriptor = Object.getOwnPropertyDescriptor(obj, fn);

                        if (!('constructor' !== fn && 'function' === typeof descriptor.value)) {
                          _context.next = 9;
                          break;
                        }

                        _context.next = 9;
                        return {
                          'static': isStatic,
                          fn: fn
                        };

                      case 9:
                        if (!('function' === typeof descriptor.get || 'function' === typeof descriptor.set)) {
                          _context.next = 12;
                          break;
                        }

                        _context.next = 12;
                        return {
                          'static': isStatic,
                          'property': fn,
                          'get': undefined !== descriptor.get,
                          'set': undefined !== descriptor.set
                        };

                      case 12:
                        _context.next = 3;
                        break;

                      case 14:
                        _context.next = 19;
                        break;

                      case 16:
                        _context.prev = 16;
                        _context.t0 = _context["catch"](1);

                        _iterator2.e(_context.t0);

                      case 19:
                        _context.prev = 19;

                        _iterator2.f();

                        return _context.finish(19);

                      case 22:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, gen, null, [[1, 16, 19, 22]]);
              });
              _iterator3 = _createForOfIteratorHelper(chain);
              _context2.prev = 3;

              _iterator3.s();

            case 5:
              if ((_step3 = _iterator3.n()).done) {
                _context2.next = 11;
                break;
              }

              i = _step3.value;
              return _context2.delegateYield(gen(i.prototype, false), "t0", 8);

            case 8:
              return _context2.delegateYield(gen(i, true), "t1", 9);

            case 9:
              _context2.next = 5;
              break;

            case 11:
              _context2.next = 16;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t2 = _context2["catch"](3);

              _iterator3.e(_context2.t2);

            case 16:
              _context2.prev = 16;

              _iterator3.f();

              return _context2.finish(16);

            case 19:
            case "end":
              return _context2.stop();
          }
        }
      }, getFunctions, this, [[3, 13, 16, 19]]);
    })
    /**
     * Get all constants names for definition.
     *
     * @param {Function} definition
     *
     * @returns {string[]}
     *
     * @internal
     */

  }, {
    key: "getConstantsNames",
    value: function getConstantsNames(definition) {
      var chain = this._getClassChain(definition);

      return Array.from( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _iterator4, _step4, _loop;

        return regeneratorRuntime.wrap(function _callee$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _iterator4 = _createForOfIteratorHelper(chain);
                _context4.prev = 1;
                _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop() {
                  var i;
                  return regeneratorRuntime.wrap(function _loop$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          i = _step4.value;
                          return _context3.delegateYield([].concat(_toConsumableArray(Object.getOwnPropertyNames(i)), _toConsumableArray(Object.getOwnPropertySymbols(i))).filter(function (P) {
                            if ('prototype' === P || 'length' === P || 'name' === P) {
                              // Function prototype properties
                              return false;
                            }

                            if ('arguments' === P || 'caller' === P) {
                              // 'caller' and 'arguments' are restricted function properties and cannot be accessed in this context.
                              return false;
                            }

                            if ('function' === typeof i[P]) {
                              return false;
                            }

                            if (symOuterMixin === P || Symbol.reflection === P) {
                              return false;
                            }

                            return -1 === FunctionProps.indexOf(P);
                          }), "t0", 2);

                        case 2:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _loop);
                });

                _iterator4.s();

              case 4:
                if ((_step4 = _iterator4.n()).done) {
                  _context4.next = 8;
                  break;
                }

                return _context4.delegateYield(_loop(), "t0", 6);

              case 6:
                _context4.next = 4;
                break;

              case 8:
                _context4.next = 13;
                break;

              case 10:
                _context4.prev = 10;
                _context4.t1 = _context4["catch"](1);

                _iterator4.e(_context4.t1);

              case 13:
                _context4.prev = 13;

                _iterator4.f();

                return _context4.finish(13);

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee, null, [[1, 10, 13, 16]]);
      })());
    }
    /**
     * @param {Object} definition
     *
     * @returns {Array}
     *
     * @private
     */

  }, {
    key: "_getClassChain",
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
Mixins.appliedTraitsSymbol = symAppliedTraits;
Mixins.classTypeSymbol = symClassType;
Mixins.initializerSymbol = symInitalizer;
module.exports = Mixins;

/***/ }),

/***/ "./node_modules/@jymfony/util/lib/Mixins/Traits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@jymfony/util/lib/Mixins/Traits.js ***!
  \*********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 113:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Mixins = __webpack_require__(/*! ./Mixins */ "./node_modules/@jymfony/util/lib/Mixins/Mixins.js");

var CLASS_TYPE = 'Trait';

var Traits = /*#__PURE__*/function () {
  function Traits() {
    _classCallCheck(this, Traits);
  }

  _createClass(Traits, null, [{
    key: "isTrait",

    /**
     * @param {Object} mixin
     *
     * @returns {boolean}
     */
    value: function isTrait(mixin) {
      return mixin[Mixins.classTypeSymbol] === CLASS_TYPE;
    }
    /**
     * @param {Object} definition
     *
     * @returns {Function}
     */

  }, {
    key: "create",
    value: function create(definition) {
      var inherits = new Map();
      var parent = definition;

      do {
        if (parent.prototype) {
          for (var _i = 0, _arr = [].concat(_toConsumableArray(Object.getOwnPropertyNames(parent.prototype)), _toConsumableArray(Object.getOwnPropertySymbols(parent.prototype))); _i < _arr.length; _i++) {
            var p = _arr[_i];

            if (inherits.has(p)) {
              continue;
            }

            inherits.set(p, Object.getOwnPropertyDescriptor(parent.prototype, p));
          }
        }
      } while (parent = Object.getPrototypeOf(parent));

      var mixin = Mixins.createMixin(definition, function (trait) {
        var _iterator = _createForOfIteratorHelper(inherits.entries()),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _step$value = _slicedToArray(_step.value, 2),
                prop = _step$value[0],
                descriptor = _step$value[1];

            if ('constructor' === prop || '__construct' === prop) {
              continue;
            }

            Object.defineProperty(trait.prototype, prop, descriptor);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
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
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__.g, __webpack_require__.* */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

__webpack_require__.g.__jymfony = __webpack_require__.g.__jymfony || {};
/**
 * Get key, value pairs from any object.
 *
 * @param {Object.<K, V>|Map<K, V>|V[]} object
 *
 * @returns {IterableIterator.<[K, V]>}
 * @template K, V
 */

__jymfony.getEntries = /*#__PURE__*/regeneratorRuntime.mark(function getEntries(object) {
  var _iterator, _step, k, _i, _arr, key;

  return regeneratorRuntime.wrap(function getEntries$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (object instanceof Set) {
            object = _toConsumableArray(object.values());
          }

          if (!isArray(object)) {
            _context.next = 21;
            break;
          }

          _iterator = _createForOfIteratorHelper(object.keys());
          _context.prev = 3;

          _iterator.s();

        case 5:
          if ((_step = _iterator.n()).done) {
            _context.next = 11;
            break;
          }

          k = _step.value;
          _context.next = 9;
          return [k, object[k]];

        case 9:
          _context.next = 5;
          break;

        case 11:
          _context.next = 16;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](3);

          _iterator.e(_context.t0);

        case 16:
          _context.prev = 16;

          _iterator.f();

          return _context.finish(16);

        case 19:
          _context.next = 37;
          break;

        case 21:
          if (!(object instanceof Map)) {
            _context.next = 25;
            break;
          }

          return _context.delegateYield(object.entries(), "t1", 23);

        case 23:
          _context.next = 37;
          break;

        case 25:
          if (isObject(object)) {
            _context.next = 29;
            break;
          }

          throw new InvalidArgumentException('Argument 1 is not an object');

        case 29:
          _i = 0, _arr = [].concat(_toConsumableArray(Object.keys(object)), _toConsumableArray(Object.getOwnPropertySymbols(object)));

        case 30:
          if (!(_i < _arr.length)) {
            _context.next = 37;
            break;
          }

          key = _arr[_i];
          _context.next = 34;
          return [key, object[key]];

        case 34:
          _i++;
          _context.next = 30;
          break;

        case 37:
        case "end":
          return _context.stop();
      }
    }
  }, getEntries, null, [[3, 13, 16, 19]]);
});

/***/ }),

/***/ "./node_modules/@jymfony/util/lib/Platform.js":
/*!****************************************************!*\
  !*** ./node_modules/@jymfony/util/lib/Platform.js ***!
  \****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__.g, __webpack_require__.* */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

__webpack_require__.g.__jymfony = __webpack_require__.g.__jymfony || {};
var _asyncSupport = undefined;
var _asyncGeneratorSupport = undefined;
var _nativeDecoratorSupport = undefined;
var _modernRegex = undefined;
var _publicFields = undefined;
var _privateFields = undefined;
var _privateMethods = undefined;
/**
 * @memberOf __jymfony
 */

var Platform = /*#__PURE__*/function () {
  function Platform() {
    _classCallCheck(this, Platform);
  }

  _createClass(Platform, null, [{
    key: "hasAsyncFunctionSupport",

    /**
     * Checks if this node version has async function support.
     *
     * @returns {boolean}
     */
    value: function hasAsyncFunctionSupport() {
      if (undefined === _asyncSupport) {
        _asyncSupport = false;

        try {
          var fn;
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
     * Checks if this node version has async function support.
     *
     * @returns {boolean}
     */

  }, {
    key: "hasAsyncGeneratorFunctionSupport",
    value: function hasAsyncGeneratorFunctionSupport() {
      if (undefined === _asyncGeneratorSupport) {
        _asyncGeneratorSupport = false;

        try {
          var fn;
          eval('fn = async function * () { }');
          _asyncGeneratorSupport = 'AsyncGeneratorFunction' === (fn.constructor.name || fn.constructor.displayName);
        } catch (e) {
          if (!(e instanceof SyntaxError)) {
            throw e;
          }
        }
      }

      return _asyncGeneratorSupport;
    }
    /**
     * Checks if this node version has native decorators support.
     *
     * @returns {boolean}
     */

  }, {
    key: "hasNativeDecoratorsSupport",
    value: function hasNativeDecoratorsSupport() {
      if (undefined === _nativeDecoratorSupport) {
        _nativeDecoratorSupport = false;

        try {
          eval('decorator @testDecorator(options) { _nativeDecoratorSupport = true; }\n@testDecorator class Foo {}');
        } catch (e) {
          if (!(e instanceof SyntaxError)) {
            throw e;
          }
        }
      }

      return _nativeDecoratorSupport;
    }
    /**
     * Are we running on windows?
     *
     * @returns {boolean}
     */

  }, {
    key: "isWindows",
    value: function isWindows() {
      return 'win32' === process.platform;
    }
    /**
     * Checks if this node version has modern regex (named groups) support.
     *
     * @returns {boolean}
     */

  }, {
    key: "hasModernRegex",
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
    /**
     * Checks if this node version has public instance fields support.
     *
     * @returns {boolean}
     */

  }, {
    key: "hasPublicFieldSupport",
    value: function hasPublicFieldSupport() {
      if (undefined === _publicFields) {
        _publicFields = false;

        try {
          var c;
          eval('c = class ev { field = "foobar"; }');
          var i = new c();
          return _publicFields = 'foobar' === i.field;
        } catch (e) {
          if (!(e instanceof SyntaxError)) {
            throw e;
          }
        }
      }

      return _publicFields;
    }
    /**
     * Checks if this node version has private instance fields support.
     *
     * @returns {boolean}
     */

  }, {
    key: "hasPrivateFieldSupport",
    value: function hasPrivateFieldSupport() {
      if (undefined === _privateFields) {
        _privateFields = false;

        try {
          var c;
          eval('c = class ev { #field = "foobar"; get field() { return this.#field; } }');
          var i = new c();
          return _privateFields = 'foobar' === i.field;
        } catch (e) {
          if (!(e instanceof SyntaxError)) {
            throw e;
          }
        }
      }

      return _privateFields;
    }
    /**
     * Checks if this node version has private instance methods support.
     *
     * @returns {boolean}
     */

  }, {
    key: "hasPrivateMethodsSupport",
    value: function hasPrivateMethodsSupport() {
      if (undefined === _privateMethods) {
        _privateMethods = false;

        try {
          var c;
          eval('c = class ev { #field() { return "foobar"; } get field() { return this.#field(); } }');
          var i = new c();
          return _privateMethods = 'foobar' === i.field;
        } catch (e) {
          if (!(e instanceof SyntaxError)) {
            throw e;
          }
        }
      }

      return _privateMethods;
    }
  }]);

  return Platform;
}();

__jymfony.Platform = Platform;

/***/ }),

/***/ "./node_modules/@jymfony/util/lib/Regex/quote.js":
/*!*******************************************************!*\
  !*** ./node_modules/@jymfony/util/lib/Regex/quote.js ***!
  \*******************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__.g, __webpack_require__.* */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__.g.__jymfony = __webpack_require__.g.__jymfony || {};
/**
 * @param {string} str
 *
 * @returns {string}
 */

__jymfony.regex_quote = function (str) {
  return str.toString().replace(/[.\\+*?\[\^\]$(){}=!<>|:-]/g, '\\$&');
};

/***/ }),

/***/ "./node_modules/@jymfony/util/lib/String/strtr.js":
/*!********************************************************!*\
  !*** ./node_modules/@jymfony/util/lib/String/strtr.js ***!
  \********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, __webpack_require__.g, __webpack_require__.* */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

__webpack_require__(/*! ../Regex/quote */ "./node_modules/@jymfony/util/lib/Regex/quote.js");

__webpack_require__.g.__jymfony = __webpack_require__.g.__jymfony || {};
/**
 * @param {string} string
 * @param {string|Object} replacePairs
 * @param {string} to
 *
 * @returns {string}
 */

__jymfony.strtr = function (string, replacePairs, to) {
  var keys;

  if (isString(replacePairs) && isString(to)) {
    if (replacePairs.length !== to.length) {
      throw new Exception('Replace strings must have the same length');
    }

    to = to.split('');
    keys = replacePairs.split('');
    replacePairs = {};

    var _iterator = _createForOfIteratorHelper(__jymfony.getEntries(keys)),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
            i = _step$value[0],
            key = _step$value[1];

        replacePairs[key] = to[i];
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else {
    keys = Object.keys(replacePairs);
  }

  if (0 === keys.length) {
    return string;
  }

  var searchPattern = keys.map(__jymfony.regex_quote).join('|');
  return string.toString().replace(new RegExp(searchPattern, 'g'), function (match) {
    return replacePairs[match];
  });
};

/***/ }),

/***/ "./node_modules/@jymfony/util/lib/is.js":
/*!**********************************************!*\
  !*** ./node_modules/@jymfony/util/lib/is.js ***!
  \**********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__.g, __webpack_require__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

__webpack_require__.g.isArray = Array.isArray;
__webpack_require__.g.isBuffer = !!__webpack_require__.g.Buffer ? Buffer.isBuffer : function () {
  return false;
};
var toString = Object.prototype.toString;

__webpack_require__(/*! ./Is/functions */ "./node_modules/@jymfony/util/lib/Is/functions.js");

if (!isFunction(__webpack_require__.g.isObject)) {
  __webpack_require__.g.isObject = function (arg) {
    return !!arg && 'object' === _typeof(arg);
  };
}

var _loop = function _loop() {
  var name = _arr[_i];

  if (isFunction(__webpack_require__.g['is' + name])) {
    return "continue";
  }

  __webpack_require__.g['is' + name] = function (obj) {
    return toString.call(obj) === '[object ' + name + ']';
  };
};

for (var _i = 0, _arr = ['Arguments', 'Boolean', 'String', 'Number', 'Date', 'RegExp', 'Error', 'Symbol', 'Map', 'WeakMap', 'Set', 'WeakSet']; _i < _arr.length; _i++) {
  var _ret = _loop();

  if (_ret === "continue") continue;
}

var primitives = [Number, String, Boolean];

__webpack_require__.g.isNumeric = function isNumeric(value) {
  if (isNumber(value)) {
    return true;
  }

  return !!String(value).match(/^(\d+|\.\d+|\d+.\d+)$/);
};
/**
 * @param {*} value
 *
 * @returns {boolean}
 */


__webpack_require__.g.isNumeric = function isNumeric(value) {
  if (!isScalar(value)) {
    return false;
  }

  if (isNumber(value)) {
    return true;
  }

  return !!String(value).match(/^[+-]?((\d+|\.\d+|\d+\.\d+)(e[+-]?\d+)?|0x[0-9a-f_]+)$/i);
};
/**
 * @param {*} value
 *
 * @returns {boolean}
 */


__webpack_require__.g.isScalar = function isScalar(value) {
  if (undefined === value || null === value) {
    return false;
  }

  var proto = Object.getPrototypeOf(value);

  var _iterator = _createForOfIteratorHelper(primitives),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var type = _step.value;

      if (proto === type.prototype) {
        return true;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return false;
};

var objectPrototype = Object.getPrototypeOf({});
/**
 * @param {*} value
 *
 * @returns {boolean}
 */

__webpack_require__.g.isObjectLiteral = function isObjectLiteral(value) {
  if (null === value || undefined === value) {
    return false;
  }

  var proto;

  try {
    proto = Object.getPrototypeOf(value);
  } catch (e) {
    return false;
  }

  return null === proto || proto === objectPrototype;
};
/**
 * @param {*} value
 *
 * @returns {boolean}
 */


__webpack_require__.g.isPromise = function isPromise(value) {
  return 'object' === _typeof(value) && isFunction(value.then);
};
/**
 * @param {*} stream
 *
 * @returns {boolean}
 */


__webpack_require__.g.isStream = function isStream(stream) {
  return 'object' === _typeof(stream) && isFunction(stream.pipe);
};

/***/ }),

/***/ "./node_modules/@jymfony/util/lib/mixins.js":
/*!**************************************************!*\
  !*** ./node_modules/@jymfony/util/lib/mixins.js ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__, __webpack_require__.g, __webpack_require__.* */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mixins = __webpack_require__(/*! ./Mixins/Mixins */ "./node_modules/@jymfony/util/lib/Mixins/Mixins.js");

var Interfaces = __webpack_require__(/*! ./Mixins/Interfaces */ "./node_modules/@jymfony/util/lib/Mixins/Interfaces.js");

var Traits = __webpack_require__(/*! ./Mixins/Traits */ "./node_modules/@jymfony/util/lib/Mixins/Traits.js");

__webpack_require__.g.getInterface = function getInterface(definition) {
  return Interfaces.create(definition);
};

__webpack_require__.g.getTrait = function getTrait(definition) {
  return Traits.create(definition);
};

__webpack_require__.g.mixins = {
  isInterface: Interfaces.isInterface,
  isTrait: Traits.isTrait,
  getInterfaces: function getInterfaces(Class) {
    return Class[Mixins.appliedInterfacesSymbol] || [];
  },
  getTraits: function getTraits(Class) {
    return Class[Mixins.appliedTraitsSymbol] || [];
  },

  /**
   * @internal
   */
  initializerSymbol: Mixins.initializerSymbol
};

__webpack_require__.g.mix = function mix(superclass) {
  var _Array$from, _Array$from2;

  for (var _len = arguments.length, mixins = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    mixins[_key - 1] = arguments[_key];
  }

  superclass = superclass || __jymfony.JObject || /*#__PURE__*/function () {
    function _class() {
      _classCallCheck(this, _class);
    }

    return _class;
  }();

  superclass = mixins.reduce(function (a, b) {
    if (!isFunction(b)) {
      throw new LogicException(__jymfony.sprintf('Cannot implement/use %s as interface/trait. You probably passed a broken reference to mix/implementationOf.', _typeof(b)));
    }

    return b(a);
  }, superclass);

  var interfaces = (_Array$from = Array.from( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _iterator, _step, i, definition, outer;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _iterator = _createForOfIteratorHelper(mixins);
            _context.prev = 1;

            _iterator.s();

          case 3:
            if ((_step = _iterator.n()).done) {
              _context.next = 18;
              break;
            }

            i = _step.value;

            if (Interfaces.isInterface(i)) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("continue", 16);

          case 7:
            definition = i.definition;

          case 8:
            if (!definition) {
              _context.next = 16;
              break;
            }

            outer = Mixins.getMixin(definition);

            if (!outer) {
              _context.next = 13;
              break;
            }

            _context.next = 13;
            return outer;

          case 13:
            definition = Object.getPrototypeOf(definition);
            _context.next = 8;
            break;

          case 16:
            _context.next = 3;
            break;

          case 18:
            _context.next = 23;
            break;

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](1);

            _iterator.e(_context.t0);

          case 23:
            _context.prev = 23;

            _iterator.f();

            return _context.finish(23);

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 20, 23, 26]]);
  })())).concat.apply(_Array$from, _toConsumableArray(superclass[Mixins.appliedInterfacesSymbol] || []));

  var traits = (_Array$from2 = Array.from( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var _iterator2, _step2, i, definition, outer;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _iterator2 = _createForOfIteratorHelper(mixins);
            _context2.prev = 1;

            _iterator2.s();

          case 3:
            if ((_step2 = _iterator2.n()).done) {
              _context2.next = 18;
              break;
            }

            i = _step2.value;

            if (Traits.isTrait(i)) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("continue", 16);

          case 7:
            definition = i.definition;

          case 8:
            if (!definition) {
              _context2.next = 16;
              break;
            }

            outer = Mixins.getMixin(definition);

            if (!outer) {
              _context2.next = 13;
              break;
            }

            _context2.next = 13;
            return outer;

          case 13:
            definition = Object.getPrototypeOf(definition);
            _context2.next = 8;
            break;

          case 16:
            _context2.next = 3;
            break;

          case 18:
            _context2.next = 23;
            break;

          case 20:
            _context2.prev = 20;
            _context2.t0 = _context2["catch"](1);

            _iterator2.e(_context2.t0);

          case 23:
            _context2.prev = 23;

            _iterator2.f();

            return _context2.finish(23);

          case 26:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 20, 23, 26]]);
  })())).concat.apply(_Array$from2, _toConsumableArray(superclass[Mixins.appliedTraitsSymbol] || []));

  var mixed = function (s) {
    return /*#__PURE__*/function (_s) {
      _inherits(_class2, _s);

      var _super = _createSuper(_class2);

      function _class2() {
        _classCallCheck(this, _class2);

        return _super.apply(this, arguments);
      }

      return _class2;
    }(s);
  }(superclass);

  for (var _i = 0, _mixins = mixins; _i < _mixins.length; _i++) {
    var mixin = _mixins[_i];

    var _iterator3 = _createForOfIteratorHelper(Mixins.getConstantsNames(mixin.definition)),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var name = _step3.value;
        mixed[name] = mixin[name];
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  }

  Object.defineProperty(mixed, Mixins.appliedInterfacesSymbol, {
    value: _toConsumableArray(interfaces),
    enumerable: false
  });
  Object.defineProperty(mixed, Mixins.appliedTraitsSymbol, {
    value: _toConsumableArray(traits),
    enumerable: false
  });
  Object.defineProperty(mixed, Symbol.for('_jymfony_mixin'), {
    value: mixed,
    enumerable: false
  });
  return mixed;
};

__webpack_require__.g.implementationOf = function implementationOf() {
  var _global;

  for (var _len2 = arguments.length, interfaces = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    interfaces[_key2] = arguments[_key2];
  }

  return (_global = __webpack_require__.g).mix.apply(_global, [undefined].concat(interfaces));
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module.loaded, module.id, module, __webpack_require__.nmd, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 709:79-93 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }

  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
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
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
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
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
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
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
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
        } // Be forgiving, per 25.3.3.3.3 of the spec:
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
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
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
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
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
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
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
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
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
    var entry = {
      tryLoc: locs[0]
    };

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
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
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
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
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
      } // The context.catch method must only be called with a location
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
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
( false ? 0 : _typeof(module)) === "object" ? module.exports : {});

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9FeGNlcHRpb24vSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL0V4Y2VwdGlvbi9JbnZhbGlkUGFyYW1ldGVyRXhjZXB0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL0V4Y2VwdGlvbi9NaXNzaW5nTWFuZGF0b3J5UGFyYW1ldGVyc0V4Y2VwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9FeGNlcHRpb24vUm91dGVOb3RGb3VuZEV4Y2VwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9VcmxHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqeW1mb255L2RhdGFzdHJ1Y3R1cmUvc3JjL0hhc2hUYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGp5bWZvbnkvZGF0YXN0cnVjdHVyZS9zcmMvVHJhaXRzL0dlbmVyaWNDb2xsZWN0aW9uVHJhaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqeW1mb255L3V0aWwvbGliL0lzL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGp5bWZvbnkvdXRpbC9saWIvTWl4aW5zL0ludGVyZmFjZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqeW1mb255L3V0aWwvbGliL01peGlucy9NaXhpbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqeW1mb255L3V0aWwvbGliL01peGlucy9UcmFpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqeW1mb255L3V0aWwvbGliL09iamVjdC9lbnRyaWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanltZm9ueS91dGlsL2xpYi9QbGF0Zm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGp5bWZvbnkvdXRpbC9saWIvUmVnZXgvcXVvdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqeW1mb255L3V0aWwvbGliL1N0cmluZy9zdHJ0ci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGp5bWZvbnkvdXRpbC9saWIvaXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqeW1mb255L3V0aWwvbGliL21peGlucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIkludmFsaWRBcmd1bWVudEV4Y2VwdGlvbiIsIkVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiLCJJbnZhbGlkUGFyYW1ldGVyRXhjZXB0aW9uIiwiTWlzc2luZ01hbmRhdG9yeVBhcmFtZXRlcnNFeGNlcHRpb24iLCJSb3V0ZU5vdEZvdW5kRXhjZXB0aW9uIiwiZGVjb2RlZENoYXJzIiwiVXJsR2VuZXJhdG9yIiwicm91dGVDb2xsZWN0aW9uIiwiX3JvdXRlQ29sbGVjdGlvbiIsIk9iamVjdCIsImFzc2lnbiIsInNjaGVtZSIsImxvY2F0aW9uIiwicHJvdG9jb2wiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJpc1NlY3VyZSIsIl9jb250ZXh0IiwicGF0aGluZm8iLCJwYXRobmFtZSIsImhvc3QiLCJob3N0bmFtZSIsImh0dHBQb3J0IiwicG9ydCIsImh0dHBzUG9ydCIsInF1ZXJ5U3RyaW5nIiwic2VhcmNoIiwiZW50cmllcyIsIm5hbWUiLCJyb3V0ZSIsInBhcmFtZXRlcnMiLCJyZWZlcmVuY2VUeXBlIiwiQUJTT0xVVEVfUEFUSCIsIl9kb0dlbmVyYXRlIiwidmFyaWFibGVzIiwiZGVmYXVsdHMiLCJ0b2tlbnMiLCJob3N0VG9rZW5zIiwic2NoZW1lcyIsInJlcXVpcmVkU2NoZW1lcyIsIm1lcmdlZFBhcmFtcyIsImRpZmYiLCJmaWx0ZXIiLCJoYXNPd25Qcm9wZXJ0eSIsImxlbmd0aCIsImpvaW4iLCJ1cmwiLCJvcHRpb25hbCIsIm1lc3NhZ2UiLCJ0b2tlbiIsIlN0cmluZyIsInJlZ2V4IiwiUmVnRXhwIiwidGVzdCIsIl9fanltZm9ueSIsInN0cnRyIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic3Vic3RyIiwic2NoZW1lQXV0aG9yaXR5IiwiaW5kZXhPZiIsIkFCU09MVVRFX1VSTCIsInJvdXRlSG9zdCIsIk5FVFdPUktfUEFUSCIsIlJFTEFUSVZFX1BBVEgiLCJnZXRSZWxhdGl2ZVBhdGgiLCJleHRyYXMiLCJrZXlzIiwicHJvdG90eXBlIiwiY2FsbCIsImZyYWdtZW50IiwiX2ZyYWdtZW50IiwiaWR4IiwidG9IYXNoVGFibGUiLCJvYmoiLCJpc09iamVjdExpdGVyYWwiLCJpc0FycmF5IiwidGFibGUiLCJIYXNoVGFibGUiLCJnZXRFbnRyaWVzIiwiayIsInYiLCJwdXQiLCJ0b1F1ZXJ5Iiwia2V5IiwidmFsdWUiLCJiYXNlIiwiQXJyYXkiLCJmcm9tIiwibWFwIiwiZWwiLCJodCIsInJlZHVjZSIsInJlcyIsInF1ZXJ5IiwiYmFzZVBhdGgiLCJ0YXJnZXRQYXRoIiwic291cmNlRGlycyIsImNoYXJBdCIsInNwbGl0IiwidGFyZ2V0RGlycyIsInBvcCIsInRhcmdldEZpbGUiLCJpIiwiZGlyIiwicHVzaCIsInBhdGgiLCJyZXBlYXQiLCJjb2xvblBvcyIsInNsYXNoUG9zIiwid2luZG93IiwiR2VuZXJpY0NvbGxlY3Rpb25UcmFpdCIsIklOSVRJQUxfU0laRSIsImhhc2giLCJzdHIiLCJjaGFyQ29kZUF0IiwiaXNOdW1lcmljSW50IiwidmFsIiwiRW50cnkiLCJoYXNoQ29kZSIsIm5leHQiLCJ1bmRlZmluZWQiLCJwcmV2IiwiYnVja2V0U2l6ZSIsIl9idWNrZXRTaXplIiwiY2xlYXIiLCJfYnVja2V0cyIsImZpbGwiLCJfZmlyc3QiLCJfbGFzdCIsIl9sZW5ndGgiLCJfbGFzdE51bWVyaWNJZHgiLCJlbnRyeSIsImJ1Y2tldElkeCIsIl9hZGQiLCJlIiwiY29weSIsImxhc3QiLCJfc2VhcmNoIiwicmVzb2x2ZSIsInRvT2JqZWN0IiwidG9BcnJheSIsInR1cGxlIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJtaXgiLCJnbG9iYWwiLCJ0b1N0cmluZ1RhZyIsImNvbnN0cnVjdG9yIiwiZ2V0VHJhaXQiLCJpc0dlbmVyYXRvciIsImlzT2JqZWN0IiwiUmVmbGVjdCIsImhhcyIsInRocm93IiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsInRvU3RyaW5nIiwiX19pbnZva2UiLCJkaXNwbGF5TmFtZSIsIlBsYXRmb3JtIiwiaGFzQXN5bmNGdW5jdGlvblN1cHBvcnQiLCJpc0FzeW5jRnVuY3Rpb24iLCJpc0Z1bmN0aW9uIiwiQm91bmRGdW5jdGlvbiIsImlubmVyT2JqZWN0IiwiTWl4aW5zIiwiQ0xBU1NfVFlQRSIsImNoZWNrZWRDbGFzc2VzQ2FjaGUiLCJTZXQiLCJJbnRlcmZhY2VzIiwibWl4aW4iLCJjbGFzc1R5cGVTeW1ib2wiLCJkZWZpbml0aW9uIiwiY2hlY2tzIiwiZ2V0RnVuY3Rpb25zIiwiZGVzY3JpcHRvciIsImZuIiwiU3ludGF4RXJyb3IiLCJwcm9wZXJ0eSIsInRhcmdldCIsInRhcmdldERlc2NyaXB0b3IiLCJnZXRQcm9wZXJ0eURlc2NyaXB0b3IiLCJzcHJpbnRmIiwiZ2V0Iiwic2V0IiwiYWRkIiwiY3JlYXRlTWl4aW4iLCJzZXRQcm90b3R5cGVPZiIsImhhc0luc3RhbmNlIiwiX2NyZWF0ZUhhc0luc3RhbmNlIiwibyIsIl9fc2VsZl9fIiwibWl4aW5zIiwiYXBwbGllZEludGVyZmFjZXNTeW1ib2wiLCJGdW5jdGlvblByb3BzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsIkZ1bmN0aW9uIiwic3ltT3V0ZXJNaXhpbiIsInN5bUFwcGxpZWRJbnRlcmZhY2VzIiwic3ltQXBwbGllZFRyYWl0cyIsInN5bUNsYXNzVHlwZSIsInN5bUluaXRhbGl6ZXIiLCJjYiIsImNvbnN0cnVjdENiIiwic3VwZXJjbGFzcyIsIm0iLCJkZWZpbmVQcm9wZXJ0eSIsImZvciIsImVudW1lcmFibGUiLCJnZXRDb25zdGFudHNOYW1lcyIsImNvbnN0YW50IiwicHJvcEtleSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImdldFByb3RvdHlwZU9mIiwiY2hhaW4iLCJfZ2V0Q2xhc3NDaGFpbiIsImdlbiIsImlzU3RhdGljIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiUCIsInJlZmxlY3Rpb24iLCJwYXJlbnQiLCJ1bnNoaWZ0IiwiYXBwbGllZFRyYWl0c1N5bWJvbCIsImluaXRpYWxpemVyU3ltYm9sIiwiVHJhaXRzIiwiaW5oZXJpdHMiLCJNYXAiLCJwIiwidHJhaXQiLCJwcm9wIiwiX19jb25zdHJ1Y3QiLCJvYmplY3QiLCJ2YWx1ZXMiLCJfYXN5bmNTdXBwb3J0IiwiX2FzeW5jR2VuZXJhdG9yU3VwcG9ydCIsIl9uYXRpdmVEZWNvcmF0b3JTdXBwb3J0IiwiX21vZGVyblJlZ2V4IiwiX3B1YmxpY0ZpZWxkcyIsIl9wcml2YXRlRmllbGRzIiwiX3ByaXZhdGVNZXRob2RzIiwiZXZhbCIsInByb2Nlc3MiLCJwbGF0Zm9ybSIsImMiLCJmaWVsZCIsInJlZ2V4X3F1b3RlIiwic3RyaW5nIiwicmVwbGFjZVBhaXJzIiwidG8iLCJpc1N0cmluZyIsIkV4Y2VwdGlvbiIsInNlYXJjaFBhdHRlcm4iLCJtYXRjaCIsImlzQnVmZmVyIiwiQnVmZmVyIiwiYXJnIiwicHJpbWl0aXZlcyIsIk51bWJlciIsIkJvb2xlYW4iLCJpc051bWVyaWMiLCJpc051bWJlciIsImlzU2NhbGFyIiwicHJvdG8iLCJ0eXBlIiwib2JqZWN0UHJvdG90eXBlIiwiaXNQcm9taXNlIiwidGhlbiIsImlzU3RyZWFtIiwic3RyZWFtIiwicGlwZSIsImdldEludGVyZmFjZSIsImNyZWF0ZSIsImlzSW50ZXJmYWNlIiwiaXNUcmFpdCIsImdldEludGVyZmFjZXMiLCJDbGFzcyIsImdldFRyYWl0cyIsIkpPYmplY3QiLCJhIiwiYiIsIkxvZ2ljRXhjZXB0aW9uIiwiaW50ZXJmYWNlcyIsIm91dGVyIiwiZ2V0TWl4aW4iLCJjb25jYXQiLCJ0cmFpdHMiLCJtaXhlZCIsInMiLCJpbXBsZW1lbnRhdGlvbk9mIiwicnVudGltZSIsIk9wIiwiaGFzT3duIiwiJFN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsImRlZmluZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjb250ZXh0IiwiQ29udGV4dCIsIl9pbnZva2UiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0IiwiR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCIsIkdlblN0YXRlRXhlY3V0aW5nIiwiR2VuU3RhdGVDb21wbGV0ZWQiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsImdlbkZ1biIsImN0b3IiLCJtYXJrIiwiX19wcm90b19fIiwiYXdyYXAiLCJfX2F3YWl0IiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJlbnF1ZXVlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwiZG9uZSIsInN0YXRlIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsInJldmVyc2UiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJza2lwVGVtcFJlc2V0Iiwic2xpY2UiLCJzdG9wIiwicm9vdEVudHJ5Iiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJyZWdlbmVyYXRvclJ1bnRpbWUiLCJhY2NpZGVudGFsU3RyaWN0TW9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0lBQ01BLHdCOzs7Ozs7Ozs7Ozs7aUNB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Zjs7QUF1dEJBLElBQUk7QUFDRnlZLG9CQUFrQixHQUFHeEcsT0FBckI7QUFDRCxDQUZELENBRUUsT0FBT3lHLG9CQUFQLEVBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBdk0sVUFBUSxDQUFDLEdBQUQsRUFBTSx3QkFBTixDQUFSLENBQXdDOEYsT0FBeEM7QUFDRCxDOzs7Ozs7VUMzdUJEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDeEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFOzs7O1VDSkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoidXJsLWdlbmVyYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQmFzZSBFcnJvciBjbGFzcy5cbiAqL1xuY2xhc3MgSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uIGV4dGVuZHMgRXJyb3Ige1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEludmFsaWRBcmd1bWVudEV4Y2VwdGlvbjtcbiIsImNvbnN0IEludmFsaWRBcmd1bWVudEV4Y2VwdGlvbiA9IHJlcXVpcmUoJy4vSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uJyk7XG5cbi8qKlxuICogRXhjZXB0aW9uIHRocm93biB3aGVuIGEgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZC5cbiAqL1xuY2xhc3MgSW52YWxpZFBhcmFtZXRlckV4Y2VwdGlvbiBleHRlbmRzIEludmFsaWRBcmd1bWVudEV4Y2VwdGlvbiB7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW52YWxpZFBhcmFtZXRlckV4Y2VwdGlvbjtcbiIsImNvbnN0IEludmFsaWRBcmd1bWVudEV4Y2VwdGlvbiA9IHJlcXVpcmUoJy4vSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uJyk7XG5cbi8qKlxuICogRXhjZXB0aW9uIHRocm93biB3aGVuIGEgcm91dGUgY2Fubm90IGJlIGdlbmVyYXRlZCBiZWNhdXNlIG9mIG1pc3NpbmdcbiAqIG1hbmRhdG9yeSBwYXJhbWV0ZXJzLlxuICovXG5jbGFzcyBNaXNzaW5nTWFuZGF0b3J5UGFyYW1ldGVyc0V4Y2VwdGlvbiBleHRlbmRzIEludmFsaWRBcmd1bWVudEV4Y2VwdGlvbiB7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWlzc2luZ01hbmRhdG9yeVBhcmFtZXRlcnNFeGNlcHRpb247XG4iLCJjb25zdCBJbnZhbGlkQXJndW1lbnRFeGNlcHRpb24gPSByZXF1aXJlKCcuL0ludmFsaWRBcmd1bWVudEV4Y2VwdGlvbicpO1xuXG4vKipcbiAqIEV4Y2VwdGlvbiB0aHJvd24gd2hlbiBhIHJvdXRlIGRvZXMgbm90IGV4aXN0LlxuICovXG5jbGFzcyBSb3V0ZU5vdEZvdW5kRXhjZXB0aW9uIGV4dGVuZHMgSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uIHtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSb3V0ZU5vdEZvdW5kRXhjZXB0aW9uO1xuIiwicmVxdWlyZSgnQGp5bWZvbnkvdXRpbC9saWIvUGxhdGZvcm0nKTtcbnJlcXVpcmUoJ0BqeW1mb255L3V0aWwvbGliL2lzJyk7XG5yZXF1aXJlKCdAanltZm9ueS91dGlsL2xpYi9PYmplY3QvZW50cmllcycpO1xucmVxdWlyZSgnQGp5bWZvbnkvdXRpbC9saWIvUmVnZXgvcXVvdGUnKTtcbnJlcXVpcmUoJ0BqeW1mb255L3V0aWwvbGliL1N0cmluZy9zdHJ0cicpO1xucmVxdWlyZSgnQGp5bWZvbnkvdXRpbC9saWIvbWl4aW5zJyk7XG5yZXF1aXJlKCdAanltZm9ueS9kYXRhc3RydWN0dXJlL3NyYy9IYXNoVGFibGUnKTtcblxuY29uc3QgSW52YWxpZFBhcmFtZXRlckV4Y2VwdGlvbiA9IHJlcXVpcmUoJy4vRXhjZXB0aW9uL0ludmFsaWRQYXJhbWV0ZXJFeGNlcHRpb24nKTtcbmNvbnN0IE1pc3NpbmdNYW5kYXRvcnlQYXJhbWV0ZXJzRXhjZXB0aW9uID0gcmVxdWlyZSgnLi9FeGNlcHRpb24vTWlzc2luZ01hbmRhdG9yeVBhcmFtZXRlcnNFeGNlcHRpb24nKTtcbmNvbnN0IFJvdXRlTm90Rm91bmRFeGNlcHRpb24gPSByZXF1aXJlKCcuL0V4Y2VwdGlvbi9Sb3V0ZU5vdEZvdW5kRXhjZXB0aW9uJyk7XG5cbmNvbnN0IGRlY29kZWRDaGFycyA9IHtcbiAgICAnJTJGJzogJy8nLFxuICAgICclNDAnOiAnQCcsXG4gICAgJyUzQSc6ICc6JyxcbiAgICAnJTNCJzogJzsnLFxuICAgICclMkMnOiAnLCcsXG4gICAgJyUzRCc6ICc9JyxcbiAgICAnJTJCJzogJysnLFxuICAgICclMjEnOiAnIScsXG4gICAgJyUyQSc6ICcqJyxcbiAgICAnJTdDJzogJ3wnLFxufTtcblxuY2xhc3MgVXJsR2VuZXJhdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcihyb3V0ZUNvbGxlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5fcm91dGVDb2xsZWN0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgcm91dGVDb2xsZWN0aW9uKTtcblxuICAgICAgICBjb25zdCBzY2hlbWUgPSBsb2NhdGlvbi5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBpc1NlY3VyZSA9IHNjaGVtZSA9PT0gJ2h0dHBzJztcblxuICAgICAgICB0aGlzLl9jb250ZXh0ID0ge1xuICAgICAgICAgICAgcGF0aGluZm86IGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgICAgICAgaG9zdDogbG9jYXRpb24uaG9zdG5hbWUsXG4gICAgICAgICAgICBzY2hlbWUsXG4gICAgICAgICAgICBodHRwUG9ydDogaXNTZWN1cmUgPyA4MCA6IH5+KGxvY2F0aW9uLnBvcnQgfHwgODApLFxuICAgICAgICAgICAgaHR0cHNQb3J0OiBpc1NlY3VyZSA/IH5+KGxvY2F0aW9uLnBvcnQgfHwgNDQzKSA6IDQ0MyxcbiAgICAgICAgICAgIHF1ZXJ5U3RyaW5nOiBsb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgcm91dGVzIHRvIHJvdXRlciBjb2xsZWN0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBPYmplY3Q+fSByb3V0ZUNvbGxlY3Rpb25cbiAgICAgKi9cbiAgICBhZGRSb3V0ZXMocm91dGVDb2xsZWN0aW9uKSB7XG4gICAgICAgIGZvciAoY29uc3QgWyBuYW1lLCByb3V0ZSBdIG9mIE9iamVjdC5lbnRyaWVzKHJvdXRlQ29sbGVjdGlvbikpIHtcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlQ29sbGVjdGlvbltuYW1lXSA9IHJvdXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgVVJMIG9yIHBhdGggZm9yIGEgc3BlY2lmaWMgcm91dGUgYmFzZWQgb24gdGhlIGdpdmVuIHBhcmFtZXRlcnMuXG4gICAgICpcbiAgICAgKiBQYXJhbWV0ZXJzIHRoYXQgcmVmZXJlbmNlIHBsYWNlaG9sZGVycyBpbiB0aGUgcm91dGUgcGF0dGVybiB3aWxsIHN1YnN0aXR1dGUgdGhlbSBpbiB0aGVcbiAgICAgKiBwYXRoIG9yIGhvc3QuIEV4dHJhIHBhcmFtcyBhcmUgYWRkZWQgYXMgcXVlcnkgc3RyaW5nIHRvIHRoZSBVUkwuXG4gICAgICpcbiAgICAgKiBXaGVuIHRoZSBwYXNzZWQgcmVmZXJlbmNlIHR5cGUgY2Fubm90IGJlIGdlbmVyYXRlZCBmb3IgdGhlIHJvdXRlIGJlY2F1c2UgaXQgcmVxdWlyZXMgYSBkaWZmZXJlbnRcbiAgICAgKiBob3N0IG9yIHNjaGVtZSB0aGFuIHRoZSBjdXJyZW50IG9uZSwgdGhlIG1ldGhvZCB3aWxsIHJldHVybiBhIG1vcmUgY29tcHJlaGVuc2l2ZSByZWZlcmVuY2VcbiAgICAgKiB0aGF0IGluY2x1ZGVzIHRoZSByZXF1aXJlZCBwYXJhbXMuIEZvciBleGFtcGxlLCB3aGVuIHlvdSBjYWxsIHRoaXMgbWV0aG9kIHdpdGggcmVmZXJlbmNlVHlwZSA9IEFCU09MVVRFX1BBVEhcbiAgICAgKiBidXQgdGhlIHJvdXRlIHJlcXVpcmVzIHRoZSBodHRwcyBzY2hlbWUgd2hlcmVhcyB0aGUgY3VycmVudCBzY2hlbWUgaXMgaHR0cCwgaXQgd2lsbCBpbnN0ZWFkIHJldHVybiBhblxuICAgICAqIEFCU09MVVRFX1VSTCB3aXRoIHRoZSBodHRwcyBzY2hlbWUgYW5kIHRoZSBjdXJyZW50IGhvc3QuIFRoaXMgbWFrZXMgc3VyZSB0aGUgZ2VuZXJhdGVkIFVSTCBtYXRjaGVzXG4gICAgICogdGhlIHJvdXRlIGluIGFueSBjYXNlLlxuICAgICAqXG4gICAgICogV2lsbCB0aHJvdyBhbiBlcnJvciBpZiB0aGVyZSBpcyBubyByb3V0ZSB3aXRoIHRoZSBnaXZlbiBuYW1lXG4gICAgICpcbiAgICAgKiBUaGUgc3BlY2lhbCBwYXJhbWV0ZXIgX2ZyYWdtZW50IHdpbGwgYmUgdXNlZCBhcyB0aGUgZG9jdW1lbnQgZnJhZ21lbnQgc3VmZml4ZWQgdG8gdGhlIGZpbmFsIFVSTC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCAqPn0gcGFyYW1ldGVyc1xuICAgICAqIEBwYXJhbSB7aW50fSByZWZlcmVuY2VUeXBlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdlbmVyYXRlKG5hbWUsIHBhcmFtZXRlcnMgPSB7fSwgcmVmZXJlbmNlVHlwZSA9IFVybEdlbmVyYXRvci5BQlNPTFVURV9QQVRIKSB7XG4gICAgICAgIGNvbnN0IHJvdXRlID0gdGhpcy5fcm91dGVDb2xsZWN0aW9uW25hbWVdO1xuICAgICAgICBpZiAodm9pZCAwID09PSByb3V0ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJvdXRlTm90Rm91bmRFeGNlcHRpb24oYFVuYWJsZSB0byBnZW5lcmF0ZSBhIFVSTCBmb3IgdGhlIG5hbWVkIHJvdXRlIFwiJHtuYW1lfVwiIGFzIHN1Y2ggcm91dGUgZG9lcyBub3QgZXhpc3QuYCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fZG9HZW5lcmF0ZShcbiAgICAgICAgICAgIHJvdXRlLnZhcmlhYmxlcyxcbiAgICAgICAgICAgIHJvdXRlLmRlZmF1bHRzLFxuICAgICAgICAgICAgcm91dGUudG9rZW5zLFxuICAgICAgICAgICAgcGFyYW1ldGVycyxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICByZWZlcmVuY2VUeXBlLFxuICAgICAgICAgICAgcm91dGUuaG9zdFRva2VucyxcbiAgICAgICAgICAgIHJvdXRlLnNjaGVtZXNcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEbyBnZW5lcmF0ZSBhbiBhZGRyZXNzIGZyb20gcm91dGUgY29tcG9uZW50cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nW119IHZhcmlhYmxlc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgc3RyaW5nPn0gZGVmYXVsdHNcbiAgICAgKiBAcGFyYW0ge1tbc3RyaW5nXV19IHRva2Vuc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgKj59IHBhcmFtZXRlcnNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7aW50fSByZWZlcmVuY2VUeXBlXG4gICAgICogQHBhcmFtIHtbW3N0cmluZ11dfSBob3N0VG9rZW5zXG4gICAgICogQHBhcmFtIHtbc3RyaW5nXX0gcmVxdWlyZWRTY2hlbWVzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfZG9HZW5lcmF0ZSh2YXJpYWJsZXMsIGRlZmF1bHRzLCB0b2tlbnMsIHBhcmFtZXRlcnMsIG5hbWUsIHJlZmVyZW5jZVR5cGUsIGhvc3RUb2tlbnMsIHJlcXVpcmVkU2NoZW1lcyA9IFtdKSB7XG4gICAgICAgIGNvbnN0IG1lcmdlZFBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRzLCBwYXJhbWV0ZXJzKTtcblxuICAgICAgICBjb25zdCBkaWZmID0gdmFyaWFibGVzLmZpbHRlcihuYW1lID0+ICFtZXJnZWRQYXJhbXMuaGFzT3duUHJvcGVydHkobmFtZSkpO1xuICAgICAgICBpZiAoZGlmZi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBNaXNzaW5nTWFuZGF0b3J5UGFyYW1ldGVyc0V4Y2VwdGlvbihgU29tZSBtYW5kYXRvcnkgcGFyYW1ldGVycyBhcmUgbWlzc2luZyAoXCIke2RpZmYuam9pbignXCIsIFwiJyl9XCIpIHRvIGdlbmVyYXRlIGEgVVJMIGZvciByb3V0ZSBcIiR7bmFtZX1cIi5gKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHVybCA9ICcnO1xuICAgICAgICBsZXQgb3B0aW9uYWwgPSB0cnVlO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ1BhcmFtZXRlciBcIntwYXJhbWV0ZXJ9XCIgZm9yIHJvdXRlIFwie3JvdXRlfVwiIG11c3QgbWF0Y2ggXCJ7ZXhwZWN0ZWR9XCIgKFwie2dpdmVufVwiIGdpdmVuKSB0byBnZW5lcmF0ZSBhIGNvcnJlc3BvbmRpbmcgVVJMLic7XG5cbiAgICAgICAgZm9yIChjb25zdCB0b2tlbiBvZiB0b2tlbnMpIHtcbiAgICAgICAgICAgIGlmICgndmFyaWFibGUnID09PSB0b2tlblswXSkge1xuICAgICAgICAgICAgICAgIGlmICghb3B0aW9uYWwgfHwgIWRlZmF1bHRzLmhhc093blByb3BlcnR5KHRva2VuWzNdKSB8fCB2b2lkIDAgIT09IG1lcmdlZFBhcmFtc1t0b2tlblszXV0gJiYgU3RyaW5nKG1lcmdlZFBhcmFtc1t0b2tlblszXV0pICE9PSBTdHJpbmcoZGVmYXVsdHNbdG9rZW5bM11dKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoJ14nICsgdG9rZW5bMl0gKyAnJCcsICEhdG9rZW5bNF0gPyAndScgOiAnJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIHJlZ2V4LnRlc3QobWVyZ2VkUGFyYW1zW3Rva2VuWzNdXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBJbnZhbGlkUGFyYW1ldGVyRXhjZXB0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fanltZm9ueS5zdHJ0cihtZXNzYWdlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd7cGFyYW1ldGVyfSc6IHRva2VuWzNdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAne3JvdXRlfSc6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd7ZXhwZWN0ZWR9JzogdG9rZW5bMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd7Z2l2ZW59JzogbWVyZ2VkUGFyYW1zW3Rva2VuWzNdXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdXJsID0gdG9rZW5bMV0gKyBtZXJnZWRQYXJhbXNbdG9rZW5bM11dICsgdXJsO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25hbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdXJsID0gdG9rZW5bMV0gKyB1cmw7XG4gICAgICAgICAgICAgICAgb3B0aW9uYWwgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1cmwgPT09ICcnKSB7XG4gICAgICAgICAgICB1cmwgPSAnLyc7XG4gICAgICAgIH1cblxuICAgICAgICB1cmwgPSBfX2p5bWZvbnkuc3RydHIoXG4gICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQodXJsKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csICclMjcnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXCgvZywgJyUyOCcpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcKS9nLCAnJTI5JyksXG4gICAgICAgICAgICBkZWNvZGVkQ2hhcnNcbiAgICAgICAgKTtcblxuICAgICAgICAvLyB0aGUgcGF0aCBzZWdtZW50cyBcIi5cIiBhbmQgXCIuLlwiIGFyZSBpbnRlcnByZXRlZCBhcyByZWxhdGl2ZSByZWZlcmVuY2Ugd2hlbiByZXNvbHZpbmcgYSBVUkk7IHNlZSBodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tMy4zXG4gICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gZW5jb2RlIHRoZW0gYXMgdGhleSBhcmUgbm90IHVzZWQgZm9yIHRoaXMgcHVycG9zZSBoZXJlXG4gICAgICAgIC8vIG90aGVyd2lzZSB3ZSB3b3VsZCBnZW5lcmF0ZSBhIFVSSSB0aGF0LCB3aGVuIGZvbGxvd2VkIGJ5IGEgdXNlciBhZ2VudCAoZS5nLiBicm93c2VyKSwgZG9lcyBub3QgbWF0Y2ggdGhpcyByb3V0ZVxuICAgICAgICB1cmwgPSBfX2p5bWZvbnkuc3RydHIodXJsLCB7Jy8uLi8nOiAnLyUyRSUyRS8nLCAnLy4vJzogJy8lMkUvJ30pO1xuICAgICAgICBpZiAoJy8uLicgPT09IHVybC5zdWJzdHIoLTMpKSB7XG4gICAgICAgICAgICB1cmwgPSB1cmwuc3Vic3RyKDAsIC0yKSArICclMkUlMkUnO1xuICAgICAgICB9IGVsc2UgaWYgKCcvLicgPT09IHVybC5zdWJzdHIoLTIpKSB7XG4gICAgICAgICAgICB1cmwgPSB1cmwuc3Vic3RyKDAsIC0xKSArICclMkUnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNjaGVtZUF1dGhvcml0eSA9ICcnO1xuICAgICAgICBsZXQgaG9zdCA9IHRoaXMuX2NvbnRleHQuaG9zdDtcbiAgICAgICAgaWYgKCEhIGhvc3QpIHtcbiAgICAgICAgICAgIGxldCBzY2hlbWUgPSB0aGlzLl9jb250ZXh0LnNjaGVtZTtcbiAgICAgICAgICAgIGlmIChyZXF1aXJlZFNjaGVtZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkU2NoZW1lcy5pbmRleE9mKHNjaGVtZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZVR5cGUgPSBVcmxHZW5lcmF0b3IuQUJTT0xVVEVfVVJMO1xuICAgICAgICAgICAgICAgICAgICBzY2hlbWUgPSByZXF1aXJlZFNjaGVtZXNbMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaG9zdFRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsZXQgcm91dGVIb3N0ID0gJyc7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCB0b2tlbiBvZiBob3N0VG9rZW5zKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgndmFyaWFibGUnID09PSB0b2tlblswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCdeJyArIHRva2VuWzJdICsgJyQnLCAhIXRva2VuWzRdID8gJ3UnIDogJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEgcmVnZXgudGVzdChtZXJnZWRQYXJhbXNbdG9rZW5bM11dKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBJbnZhbGlkUGFyYW1ldGVyRXhjZXB0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX2p5bWZvbnkuc3RydHIobWVzc2FnZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3twYXJhbWV0ZXJ9JzogdG9rZW5bM10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAne3JvdXRlfSc6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAne2V4cGVjdGVkfSc6IHRva2VuWzJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3tnaXZlbn0nOiBtZXJnZWRQYXJhbXNbdG9rZW5bM11dXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVIb3N0ID0gdG9rZW5bMV0gKyBtZXJnZWRQYXJhbXNbdG9rZW5bM11dICsgcm91dGVIb3N0O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVIb3N0ID0gdG9rZW5bMV0gKyByb3V0ZUhvc3Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocm91dGVIb3N0ICE9PSBob3N0KSB7XG4gICAgICAgICAgICAgICAgICAgIGhvc3QgPSByb3V0ZUhvc3Q7XG4gICAgICAgICAgICAgICAgICAgIGlmIChVcmxHZW5lcmF0b3IuQUJTT0xVVEVfVVJMICE9PSByZWZlcmVuY2VUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2VUeXBlID0gVXJsR2VuZXJhdG9yLk5FVFdPUktfUEFUSDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFVybEdlbmVyYXRvci5BQlNPTFVURV9VUkwgPT09IHJlZmVyZW5jZVR5cGUgfHwgVXJsR2VuZXJhdG9yLk5FVFdPUktfUEFUSCA9PT0gcmVmZXJlbmNlVHlwZSkge1xuICAgICAgICAgICAgICAgIGxldCBwb3J0ID0gJyc7XG4gICAgICAgICAgICAgICAgaWYgKCdodHRwJyA9PT0gc2NoZW1lICYmIDgwICE9PSB0aGlzLl9jb250ZXh0Lmh0dHBQb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcnQgKz0gJzonICsgdGhpcy5fY29udGV4dC5odHRwUG9ydDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCdodHRwcycgPT09IHNjaGVtZSAmJiA0NDMgIT09IHRoaXMuX2NvbnRleHQuaHR0cHNQb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcnQgKz0gJzonICsgdGhpcy5fY29udGV4dC5odHRwc1BvcnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2NoZW1lQXV0aG9yaXR5ID0gVXJsR2VuZXJhdG9yLk5FVFdPUktfUEFUSCA9PT0gcmVmZXJlbmNlVHlwZSA/ICcvLycgOiBgJHtzY2hlbWV9Oi8vYDtcbiAgICAgICAgICAgICAgICBzY2hlbWVBdXRob3JpdHkgKz0gaG9zdCArIHBvcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVXJsR2VuZXJhdG9yLlJFTEFUSVZFX1BBVEggPT09IHJlZmVyZW5jZVR5cGUpIHtcbiAgICAgICAgICAgIHVybCA9IFVybEdlbmVyYXRvci5nZXRSZWxhdGl2ZVBhdGgodGhpcy5fY29udGV4dC5wYXRoaW5mbywgdXJsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVybCA9IHNjaGVtZUF1dGhvcml0eSArIHVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCBhIHF1ZXJ5IHN0cmluZyBpZiBuZWVkZWRcbiAgICAgICAgY29uc3QgZXh0cmFzID0gT2JqZWN0LmtleXMocGFyYW1ldGVycylcbiAgICAgICAgICAgIC5maWx0ZXIobmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhcmlhYmxlcy5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkZWZhdWx0cywgbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRzW25hbWVdICE9IHBhcmFtZXRlcnNbbmFtZV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAvLyBleHRyYWN0IGZyYWdtZW50XG4gICAgICAgIGxldCBmcmFnbWVudCA9ICcnO1xuICAgICAgICBpZiAoZGVmYXVsdHMuX2ZyYWdtZW50KSB7XG4gICAgICAgICAgICBmcmFnbWVudCA9IGRlZmF1bHRzLl9mcmFnbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpZHg7XG4gICAgICAgIGlmICgoaWR4ID0gZXh0cmFzLmluZGV4T2YoJ19mcmFnbWVudCcpKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIGZyYWdtZW50ID0gcGFyYW1ldGVycy5fZnJhZ21lbnQ7XG4gICAgICAgICAgICBkZWxldGUgZXh0cmFzW2lkeF07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXh0cmFzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgdG9IYXNoVGFibGUgPSAob2JqKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCEgaXNPYmplY3RMaXRlcmFsKG9iaikgJiYgISBpc0FycmF5KG9iaikpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0YWJsZSA9IG5ldyBIYXNoVGFibGUoKTtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBfX2p5bWZvbnkuZ2V0RW50cmllcyhvYmopKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlLnB1dChrLCB0b0hhc2hUYWJsZSh2KSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhYmxlO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgdG9RdWVyeSA9IChrZXksIHZhbHVlLCBiYXNlID0gJycpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBIYXNoVGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKGVsID0+IHRvUXVlcnkoZWxbMF0sIGVsWzFdLCBiYXNlID8gYmFzZSArICdbJyArIGtleSArICddJyA6IGtleSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAuam9pbignJicpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoYmFzZSA/IGJhc2UgKyAnWycgKyBrZXkgKyAnXScgOiBrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGh0ID0gdG9IYXNoVGFibGUoT2JqZWN0LmtleXMoIHBhcmFtZXRlcnMgKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoIGtleSA9PiBleHRyYXMuaW5kZXhPZihrZXkpICE9PSAtMSApXG4gICAgICAgICAgICAgICAgLnJlZHVjZSggKHJlcywga2V5KSA9PiAocmVzW2tleV0gPSBwYXJhbWV0ZXJzW2tleV0sIHJlcyksIHt9ICkpO1xuXG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9IEFycmF5LmZyb20oaHQpXG4gICAgICAgICAgICAgICAgLm1hcChlbCA9PiB0b1F1ZXJ5KGVsWzBdLCBlbFsxXSkpXG4gICAgICAgICAgICAgICAgLmpvaW4oJyYnKTtcblxuICAgICAgICAgICAgdXJsICs9ICc/JyArIF9fanltZm9ueS5zdHJ0cihxdWVyeSwgeyclMkYnOiAnLyd9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgnJyAhPT0gZnJhZ21lbnQpIHtcbiAgICAgICAgICAgIGZyYWdtZW50ID0gZW5jb2RlVVJJQ29tcG9uZW50KGZyYWdtZW50KVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8hL2csICclMjEnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csICclMjcnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXCgvZywgJyUyOCcpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcKS9nLCAnJTI5JylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwqL2csICclMkEnKTtcblxuICAgICAgICAgICAgdXJsICs9ICcjJyArIF9fanltZm9ueS5zdHJ0cihmcmFnbWVudCwgeyclMkYnOiAnLycsICclM0YnOiAnPyd9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdGFyZ2V0IHBhdGggYXMgcmVsYXRpdmUgcmVmZXJlbmNlIGZyb20gdGhlIGJhc2UgcGF0aC5cbiAgICAgKlxuICAgICAqIE9ubHkgdGhlIFVSSXMgcGF0aCBjb21wb25lbnQgKG5vIHNjaGVtYSwgaG9zdCBldGMuKSBpcyByZWxldmFudCBhbmQgbXVzdCBiZSBnaXZlbiwgc3RhcnRpbmcgd2l0aCBhIHNsYXNoLlxuICAgICAqIEJvdGggcGF0aHMgbXVzdCBiZSBhYnNvbHV0ZSBhbmQgbm90IGNvbnRhaW4gcmVsYXRpdmUgcGFydHMuXG4gICAgICogUmVsYXRpdmUgVVJMcyBmcm9tIG9uZSByZXNvdXJjZSB0byBhbm90aGVyIGFyZSB1c2VmdWwgd2hlbiBnZW5lcmF0aW5nIHNlbGYtY29udGFpbmVkIGRvd25sb2FkYWJsZSBkb2N1bWVudCBhcmNoaXZlcy5cbiAgICAgKiBGdXJ0aGVybW9yZSwgdGhleSBjYW4gYmUgdXNlZCB0byByZWR1Y2UgdGhlIGxpbmsgc2l6ZSBpbiBkb2N1bWVudHMuXG4gICAgICpcbiAgICAgKiBFeGFtcGxlIHRhcmdldCBwYXRocywgZ2l2ZW4gYSBiYXNlIHBhdGggb2YgXCIvYS9iL2MvZFwiOlxuICAgICAqIC0gXCIvYS9iL2MvZFwiICAgICAtPiBcIlwiXG4gICAgICogLSBcIi9hL2IvYy9cIiAgICAgIC0+IFwiLi9cIlxuICAgICAqIC0gXCIvYS9iL1wiICAgICAgICAtPiBcIi4uL1wiXG4gICAgICogLSBcIi9hL2IvYy9vdGhlclwiIC0+IFwib3RoZXJcIlxuICAgICAqIC0gXCIvYS94L3lcIiAgICAgICAtPiBcIi4uLy4uL3gveVwiXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYmFzZVBhdGggICBUaGUgYmFzZSBwYXRoXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRhcmdldFBhdGggVGhlIHRhcmdldCBwYXRoXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcmVsYXRpdmUgdGFyZ2V0IHBhdGhcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UmVsYXRpdmVQYXRoKGJhc2VQYXRoLCB0YXJnZXRQYXRoKSB7XG4gICAgICAgIGlmIChiYXNlUGF0aCA9PT0gdGFyZ2V0UGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc291cmNlRGlycyA9ICgnLycgPT09IGJhc2VQYXRoLmNoYXJBdCgwKSA/IGJhc2VQYXRoLnN1YnN0cigxKSA6IGJhc2VQYXRoKS5zcGxpdCgnLycpO1xuICAgICAgICBjb25zdCB0YXJnZXREaXJzID0gKCcvJyA9PT0gdGFyZ2V0UGF0aC5jaGFyQXQoMCkgPyB0YXJnZXRQYXRoLnN1YnN0cigxKSA6IHRhcmdldFBhdGgpLnNwbGl0KCcvJyk7XG5cbiAgICAgICAgc291cmNlRGlycy5wb3AoKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0RmlsZSA9IHRhcmdldERpcnMucG9wKCk7XG5cbiAgICAgICAgZm9yIChjb25zdCBbIGksIGRpciBdIG9mIF9fanltZm9ueS5nZXRFbnRyaWVzKHNvdXJjZURpcnMpKSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0RGlyc1tpXSAmJiBkaXIgPT09IHRhcmdldERpcnNbaV0pIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgc291cmNlRGlyc1tpXTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGFyZ2V0RGlyc1tpXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXREaXJzLnB1c2godGFyZ2V0RmlsZSk7XG4gICAgICAgIGNvbnN0IHBhdGggPSAnLi4vJy5yZXBlYXQoc291cmNlRGlycy5sZW5ndGgpICsgdGFyZ2V0RGlycy5qb2luKCcvJyk7XG5cbiAgICAgICAgLy8gQSByZWZlcmVuY2UgdG8gdGhlIHNhbWUgYmFzZSBkaXJlY3Rvcnkgb3IgYW4gZW1wdHkgc3ViZGlyZWN0b3J5IG11c3QgYmUgcHJlZml4ZWQgd2l0aCBcIi4vXCIuXG4gICAgICAgIC8vIFRoaXMgYWxzbyBhcHBsaWVzIHRvIGEgc2VnbWVudCB3aXRoIGEgY29sb24gY2hhcmFjdGVyIChlLmcuLCBcImZpbGU6Y29sb25cIikgdGhhdCBjYW5ub3QgYmUgdXNlZFxuICAgICAgICAvLyBhcyB0aGUgZmlyc3Qgc2VnbWVudCBvZiBhIHJlbGF0aXZlLXBhdGggcmVmZXJlbmNlLCBhcyBpdCB3b3VsZCBiZSBtaXN0YWtlbiBmb3IgYSBzY2hlbWUgbmFtZVxuICAgICAgICAvLyAoc2VlIGh0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi00LjIpLlxuICAgICAgICBsZXQgY29sb25Qb3MsIHNsYXNoUG9zO1xuICAgICAgICByZXR1cm4gJycgPT09IHBhdGggfHwgJy8nID09PSBwYXRoLmNoYXJBdCgwKVxuICAgICAgICAgICAgfHwgLTEgIT09IChjb2xvblBvcyA9IHBhdGguaW5kZXhPZignOicpKSAmJiAoY29sb25Qb3MgPCAoc2xhc2hQb3MgPSBwYXRoLmluZGV4T2YoJy8nKSkgfHwgLTEgPT09IHNsYXNoUG9zKVxuICAgICAgICAgICAgPyBgLi8ke3BhdGh9YCA6IHBhdGg7XG4gICAgfVxufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhbiBhYnNvbHV0ZSBVUkwsIGUuZy4gXCJodHRwOi8vZXhhbXBsZS5jb20vZGlyL2ZpbGVcIi5cbiAqL1xuVXJsR2VuZXJhdG9yLkFCU09MVVRFX1VSTCA9IDA7XG5cbi8qKlxuICogR2VuZXJhdGVzIGFuIGFic29sdXRlIHBhdGgsIGUuZy4gXCIvZGlyL2ZpbGVcIi5cbiAqL1xuVXJsR2VuZXJhdG9yLkFCU09MVVRFX1BBVEggPSAxO1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHJlbGF0aXZlIHBhdGggYmFzZWQgb24gdGhlIGN1cnJlbnQgcmVxdWVzdCBwYXRoLCBlLmcuIFwiLi4vcGFyZW50LWZpbGVcIi5cbiAqXG4gKiBAc2VlIFVybEdlbmVyYXRvci5nZXRSZWxhdGl2ZVBhdGgoKVxuICovXG5VcmxHZW5lcmF0b3IuUkVMQVRJVkVfUEFUSCA9IDI7XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgbmV0d29yayBwYXRoLCBlLmcuIFwiLy9leGFtcGxlLmNvbS9kaXIvZmlsZVwiLlxuICogU3VjaCByZWZlcmVuY2UgcmV1c2VzIHRoZSBjdXJyZW50IHNjaGVtZSBidXQgc3BlY2lmaWVzIHRoZSBob3N0LlxuICovXG5VcmxHZW5lcmF0b3IuTkVUV09SS19QQVRIID0gMztcblxuZXhwb3J0IGRlZmF1bHQgVXJsR2VuZXJhdG9yO1xuIiwiaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCI7XG5pbXBvcnQgVXJsR2VuZXJhdG9yIGZyb20gJy4vVXJsR2VuZXJhdG9yJztcblxud2luZG93LlVybEdlbmVyYXRvciA9IFVybEdlbmVyYXRvcjtcbiIsImNvbnN0IEdlbmVyaWNDb2xsZWN0aW9uVHJhaXQgPSByZXF1aXJlKCcuL1RyYWl0cy9HZW5lcmljQ29sbGVjdGlvblRyYWl0Jyk7XG5jb25zdCBJTklUSUFMX1NJWkUgPSA2NDtcblxuLyoqXG4gKiBIYXNoaW5nIGZ1bmN0aW9uLlxuICogUmV0dXJucyBhbiB1bnNpZ25lZCBpbnRlZ2VyIGJldHdlZW4gMCBhbmQgMl4zMi0xXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICpcbiAqIEByZXR1cm5zIHtpbnR9XG4gKi9cbmNvbnN0IGhhc2ggPSAoc3RyKSA9PiB7XG4gICAgbGV0IGhhc2ggPSA1MzgxLFxuICAgICAgICBpID0gc3RyLmxlbmd0aDtcblxuICAgIHdoaWxlKGkpIHtcbiAgICAgICAgaGFzaCA9IChoYXNoICogMzMpIF4gc3RyLmNoYXJDb2RlQXQoLS1pKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAqIEphdmFTY3JpcHQgZG9lcyBiaXR3aXNlIG9wZXJhdGlvbnMgKGxpa2UgWE9SLCBhYm92ZSkgb24gMzItYml0IHNpZ25lZFxuICAgICAqIGludGVnZXJzLiBTaW5jZSB3ZSB3YW50IHRoZSByZXN1bHRzIHRvIGJlIGFsd2F5cyBwb3NpdGl2ZSwgY29udmVydCB0aGVcbiAgICAgKiBzaWduZWQgaW50IHRvIGFuIHVuc2lnbmVkIGJ5IGRvaW5nIGFuIHVuc2lnbmVkIGJpdHNoaWZ0LlxuICAgICAqL1xuICAgIHJldHVybiBoYXNoID4+PiAwO1xufTtcblxuY29uc3QgaXNOdW1lcmljSW50ID0gKHZhbCkgPT4gfn52YWwgPT0gdmFsO1xuXG5jbGFzcyBFbnRyeSB7XG4gICAgY29uc3RydWN0b3Ioa2V5LCB2YWx1ZSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge2ludH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaGFzaENvZGUgPSBpc051bWVyaWNJbnQoa2V5KSA/IH5+a2V5IDogaGFzaChTdHJpbmcoa2V5KSk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmtleSA9IFN0cmluZyhrZXkpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7Kn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge3VuZGVmaW5lZHxFbnRyeX1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubmV4dCA9IHVuZGVmaW5lZDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge3VuZGVmaW5lZHxFbnRyeX1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucHJldiA9IHVuZGVmaW5lZDtcbiAgICB9XG59XG5cbmNsYXNzIEhhc2hUYWJsZSBleHRlbmRzIG1peChPYmplY3QsIEdlbmVyaWNDb2xsZWN0aW9uVHJhaXQpIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7aW50fSBbYnVja2V0U2l6ZSA9IElOSVRJQUxfU0laRV1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihidWNrZXRTaXplID0gSU5JVElBTF9TSVpFKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtpbnR9XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9idWNrZXRTaXplID0gYnVja2V0U2l6ZTtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0VudHJ5W119XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9idWNrZXRzID0gQXJyYXkodGhpcy5fYnVja2V0U2l6ZSkuZmlsbCh1bmRlZmluZWQpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7RW50cnl9XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9maXJzdCA9IHVuZGVmaW5lZDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge0VudHJ5fVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fbGFzdCA9IHVuZGVmaW5lZDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge2ludH1cbiAgICAgICAgICpcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2xlbmd0aCA9IDA7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIHtpbnR9XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9sYXN0TnVtZXJpY0lkeCA9IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGluaGVyaXRkb2NcbiAgICAgKi9cbiAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGVuZ3RoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGZpcnN0IGVsZW1lbnQgb2YgdGhlIGNvbGxlY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXQgZmlyc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maXJzdCA/IHRoaXMuX2ZpcnN0LnZhbHVlIDogdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGxhc3QgZWxlbWVudCBvZiB0aGUgY29sbGVjdGlvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldCBsYXN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGFzdCA/IHRoaXMuX2xhc3QudmFsdWUgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5zZXJ0cyB0aGUga2V5LXZhbHVlIHBhaXIgaW50byB0aGUgc3ltYm9sIHRhYmxlLCBvdmVyd3JpdGluZyB0aGUgb2xkIHZhbHVlXG4gICAgICogd2l0aCB0aGUgbmV3IHZhbHVlIGlmIHRoZSBrZXkgaXMgYWxyZWFkeSBpbiB0aGUgc3ltYm9sIHRhYmxlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtpbnR8c3RyaW5nfSBrZXlcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICpcbiAgICAgKiBAdGhyb3dzIEludmFsaWRBcmd1bWVudEV4Y2VwdGlvbiBpZiBrZXkgaXMgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgKi9cbiAgICBwdXQoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodW5kZWZpbmVkID09PSBrZXkgfHwgbnVsbCA9PT0ga2V5KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uKCdLZXkgY2Fubm90IGJlIG51bGwgb3IgdW5kZWZpbmVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbnRyeSA9IG5ldyBFbnRyeShrZXksIHZhbHVlKTtcbiAgICAgICAgY29uc3QgYnVja2V0SWR4ID0gZW50cnkuaGFzaENvZGUgJSB0aGlzLl9idWNrZXRTaXplO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fYnVja2V0c1tidWNrZXRJZHhdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9idWNrZXRzW2J1Y2tldElkeF0gPSBlbnRyeTtcbiAgICAgICAgICAgICAgICB0aGlzLl9hZGQoZW50cnkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGUgPSB0aGlzLl9idWNrZXRzW2J1Y2tldElkeF07XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSBlbnRyeS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgZS52YWx1ZSA9IGVudHJ5LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAoKGUgPSBlLm5leHQpICYmIGUuaGFzaENvZGUgJSB0aGlzLl9idWNrZXRTaXplID09PSBidWNrZXRJZHgpO1xuXG4gICAgICAgICAgICB0aGlzLl9hZGQoZW50cnkpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gdGhpcy5fZmlyc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9maXJzdCA9IGVudHJ5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNOdW1lcmljSW50KGtleSkgJiYgdGhpcy5fbGFzdE51bWVyaWNJZHggPD0ga2V5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbGFzdE51bWVyaWNJZHggPSB+fmtleSArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqL1xuICAgIGNvcHkoKSB7XG4gICAgICAgIGNvbnN0IGNvcHkgPSBuZXcgSGFzaFRhYmxlKHRoaXMuX2J1Y2tldFNpemUpO1xuICAgICAgICBmb3IgKGxldCBlID0gdGhpcy5fZmlyc3Q7IHVuZGVmaW5lZCAhPT0gZTsgZSA9IGUubmV4dCkge1xuICAgICAgICAgICAgY29weS5wdXQoZS5rZXksIGUudmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvcHk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHVzaGVzIGEgbmV3IHZhbHVlIGludG8gdGhlIGNvbGxlY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICovXG4gICAgcHVzaCh2YWx1ZSkge1xuICAgICAgICB0aGlzLnB1dCh0aGlzLl9sYXN0TnVtZXJpY0lkeCwgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBvcHMgb3V0IGFuIGVudHJ5IGZyb20gdGhlIGVuZCBvZiB0aGUgY29sbGVjdGlvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHBvcCgpIHtcbiAgICAgICAgY29uc3QgbGFzdCA9IHRoaXMuX2xhc3Q7XG4gICAgICAgIGlmICh1bmRlZmluZWQgPT09IGxhc3QpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9sYXN0ID0gdGhpcy5fbGFzdC5wcmV2O1xuICAgICAgICB0aGlzLl9sYXN0Lm5leHQgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX2xlbmd0aC0tO1xuXG4gICAgICAgIHJldHVybiBsYXN0LnZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCBrZXksIGlmIHNldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7aW50fHN0cmluZ30ga2V5XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfCp9XG4gICAgICovXG4gICAgZ2V0KGtleSkge1xuICAgICAgICBjb25zdCBlID0gdGhpcy5fc2VhcmNoKGtleSk7XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZCAhPT0gZSA/IGUudmFsdWUgOiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBpZiBhIGtleSBpcyBwcmVzZW50IGluIHRoZSB0YWJsZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7aW50fHN0cmluZ30ga2V5XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBoYXMoa2V5KSB7XG4gICAgICAgIGNvbnN0IGhhc2hDb2RlID0gaXNOdW1lcmljSW50KGtleSkgPyB+fmtleSA6IGhhc2goU3RyaW5nKGtleSkpO1xuICAgICAgICBjb25zdCBidWNrZXRJZHggPSBoYXNoQ29kZSAlIHRoaXMuX2J1Y2tldFNpemU7XG4gICAgICAgIGxldCBlID0gdGhpcy5fYnVja2V0c1tidWNrZXRJZHhdO1xuXG4gICAgICAgIGlmIChlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PSBrZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZSA9IGUubmV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFuIGVsZW1lbnQgZnJvbSB0aGUgY29sbGVjdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7aW50fHN0cmluZ30ga2V5XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfCp9XG4gICAgICovXG4gICAgcmVtb3ZlKGtleSkge1xuICAgICAgICBjb25zdCBlID0gdGhpcy5fc2VhcmNoKGtleSk7XG4gICAgICAgIGlmICh1bmRlZmluZWQgPT09IGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByZXYgPSBlLnByZXY7XG4gICAgICAgIGNvbnN0IG5leHQgPSBlLm5leHQ7XG4gICAgICAgIHRoaXMuX2xlbmd0aC0tO1xuXG4gICAgICAgIGlmIChlICE9PSB0aGlzLl9maXJzdCkge1xuICAgICAgICAgICAgcHJldi5uZXh0ID0gbmV4dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2ZpcnN0ID0gbmV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlICE9PSB0aGlzLl9sYXN0KSB7XG4gICAgICAgICAgICBuZXh0LnByZXYgPSBwcmV2O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fbGFzdCA9IHByZXY7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZS52YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaW5oZXJpdGRvY1xuICAgICAqL1xuICAgIHRvQXJyYXkoKSB7XG4gICAgICAgIGlmICh1bmRlZmluZWQgPT09IHRoaXMuX2ZpcnN0KSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9yIGEgbGl0ZXJhbCBvYmplY3Qgd2l0aCBhbGwgdGhlIGVsZW1lbnRzXG4gICAgICogb2YgdGhlIGNvbGxlY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl8T2JqZWN0fVxuICAgICAqL1xuICAgIHRvT2JqZWN0KCkge1xuICAgICAgICBjb25zdCByZXNvbHZlID0gKHZhbCkgPT4gdmFsIGluc3RhbmNlb2YgSGFzaFRhYmxlID8gdmFsLnRvT2JqZWN0KCkgOiB2YWw7XG5cbiAgICAgICAgY29uc3QgZW50cmllcyA9IHRoaXMudG9BcnJheSgpO1xuICAgICAgICBjb25zdCBpc0FycmF5ID0gKCgpID0+IHtcbiAgICAgICAgICAgIGlmICgwID09PSB0aGlzLl9sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9sZW5ndGggIT09IHRoaXMuX2xhc3ROdW1lcmljSWR4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoZW50cmllc1tpXVswXSAhPSBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KSgpO1xuXG4gICAgICAgIGlmIChpc0FycmF5KSB7XG4gICAgICAgICAgICByZXR1cm4gZW50cmllcy5tYXAoZSA9PiByZXNvbHZlKGVbMV0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbnRyaWVzLnJlZHVjZSgocmVzLCB2YWwpID0+IChyZXNbdmFsWzBdXSA9IHJlc29sdmUodmFsWzFdKSwgcmVzKSwge30pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gSGFzaFRhYmxlIGZyb20gYW4gb2JqZWN0IG9yIGFycmF5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9ialxuICAgICAqXG4gICAgICogQHJldHVybnMge0hhc2hUYWJsZX1cbiAgICAgKi9cbiAgICBzdGF0aWMgZnJvbU9iamVjdChvYmopIHtcbiAgICAgICAgY29uc3QgdGFibGUgPSBuZXcgSGFzaFRhYmxlKCk7XG4gICAgICAgIGZvciAoY29uc3QgWyBrZXksIHZhbHVlIF0gb2YgT2JqZWN0LmVudHJpZXMob2JqKSkge1xuICAgICAgICAgICAgdGFibGUucHV0KGtleSwgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhYmxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYWxsIHRoZSB0YWJsZSBrZXlzIChvcmRlcmVkKS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBrZXlzKCkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzKVxuICAgICAgICAgICAgLm1hcCh0dXBsZSA9PiB0dXBsZVswXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgY29sbGVjdGlvbiBlbGVtZW50cy5cbiAgICAgKi9cbiAgICAqIFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuICAgICAgICBpZiAodW5kZWZpbmVkID09PSB0aGlzLl9maXJzdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGUgPSB0aGlzLl9maXJzdDtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICB5aWVsZCBbIGUua2V5LCBlLnZhbHVlIF07XG4gICAgICAgIH0gd2hpbGUgKChlID0gZS5uZXh0KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIG1ldGhvZCB0byBhZGQgYW4gZW50cnkgdG8gdGhlIGNvbGxlY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0VudHJ5fSBlbnRyeVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfYWRkKGVudHJ5KSB7XG4gICAgICAgIGlmICh1bmRlZmluZWQgIT09IHRoaXMuX2xhc3QpIHtcbiAgICAgICAgICAgIHRoaXMuX2xhc3QubmV4dCA9IGVudHJ5O1xuICAgICAgICB9XG5cbiAgICAgICAgZW50cnkucHJldiA9IHRoaXMuX2xhc3Q7XG4gICAgICAgIHRoaXMuX2xhc3QgPSBlbnRyeTtcbiAgICAgICAgdGhpcy5fbGVuZ3RoKys7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VhcmNoZXMgYW4gZW50cnkgd2l0aCBrZXkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7RW50cnl8dW5kZWZpbmVkfVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfc2VhcmNoKGtleSkge1xuICAgICAgICBjb25zdCBoYXNoQ29kZSA9IGlzTnVtZXJpY0ludChrZXkpID8gfn5rZXkgOiBoYXNoKFN0cmluZyhrZXkpKTtcbiAgICAgICAgY29uc3QgYnVja2V0SWR4ID0gaGFzaENvZGUgJSB0aGlzLl9idWNrZXRTaXplO1xuICAgICAgICBsZXQgZSA9IHRoaXMuX2J1Y2tldHNbYnVja2V0SWR4XTtcblxuICAgICAgICBpZiAoZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoZSAhPT0gdW5kZWZpbmVkICYmIGUua2V5ICE9IGtleSkge1xuICAgICAgICAgICAgZSA9IGUubmV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlO1xuICAgIH1cbn1cblxuZ2xvYmFsLkhhc2hUYWJsZSA9IEhhc2hUYWJsZTtcbiIsImNsYXNzIEdlbmVyaWNDb2xsZWN0aW9uVHJhaXQge1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIGNvbGxlY3Rpb24gaXMgZW1wdHkuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0VtcHR5KCkge1xuICAgICAgICByZXR1cm4gMCA9PT0gdGhpcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvbmUgdGhlIGNvbGxlY3Rpb24uXG4gICAgICpcbiAgICAgKiBAYWJzdHJhY3RcbiAgICAgKi9cbiAgICBjb3B5KCkge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogYWJzdHJhY3QgbWV0aG9kICovXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG11c3Qgb3ZlcnJpZGUgXCJjb3B5XCIgbWV0aG9kJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBjb3B5IG9mIHRoZSBjb2xsZWN0aW9uLlxuICAgICAqXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqXG4gICAgICogQGFic3RyYWN0XG4gICAgICovXG4gICAgdG9BcnJheSgpIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IGFic3RyYWN0IG1ldGhvZCAqL1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtdXN0IG92ZXJyaWRlIFwidG9BcnJheVwiIG1ldGhvZCcpO1xuICAgIH1cblxuICAgIGluc3BlY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvQXJyYXkoKTtcbiAgICB9XG5cbiAgICBnZXQgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFRyYWl0KEdlbmVyaWNDb2xsZWN0aW9uVHJhaXQpO1xuIiwiZ2xvYmFsLmlzR2VuZXJhdG9yID0gZnVuY3Rpb24gaXNHZW5lcmF0b3IodmFsdWUpIHtcbiAgICByZXR1cm4gaXNPYmplY3QodmFsdWUpICYmXG4gICAgICAgIFJlZmxlY3QuaGFzKHZhbHVlLCAnbmV4dCcpICYmIFJlZmxlY3QuaGFzKHZhbHVlLCAndGhyb3cnKSAmJlxuICAgICAgICAnZnVuY3Rpb24nID09PSB0eXBlb2YgdmFsdWUubmV4dCAmJiAnZnVuY3Rpb24nID09PSB0eXBlb2YgdmFsdWUudGhyb3c7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZ2xvYmFsLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbiBpc0dlbmVyYXRvckZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKCEgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChpc0dlbmVyYXRvcih2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICgnW29iamVjdCBBc3luY0dlbmVyYXRvckZ1bmN0aW9uXScgPT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGlzR2VuZXJhdG9yRnVuY3Rpb24odmFsdWUuX19pbnZva2UpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnN0cnVjdG9yID0gdmFsdWUuY29uc3RydWN0b3I7XG4gICAgaWYgKCEgY29uc3RydWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICgnR2VuZXJhdG9yRnVuY3Rpb24nID09PSBjb25zdHJ1Y3Rvci5uYW1lIHx8ICdHZW5lcmF0b3JGdW5jdGlvbicgPT09IGNvbnN0cnVjdG9yLmRpc3BsYXlOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBpc0dlbmVyYXRvcihjb25zdHJ1Y3Rvci5wcm90b3R5cGUpO1xufTtcblxuaWYgKF9fanltZm9ueS5QbGF0Zm9ybS5oYXNBc3luY0Z1bmN0aW9uU3VwcG9ydCgpKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgZ2xvYmFsLmlzQXN5bmNGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzQXN5bmNGdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb25zdHJ1Y3RvciA9IHZhbHVlLmNvbnN0cnVjdG9yO1xuICAgICAgICBpZiAoIWNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJ0FzeW5jRnVuY3Rpb24nID09PSAoY29uc3RydWN0b3IubmFtZSB8fCBjb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyA9PT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgICB9O1xufSBlbHNlIHtcbiAgICBnbG9iYWwuaXNBc3luY0Z1bmN0aW9uID0gZnVuY3Rpb24gaXNBc3luY0Z1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbn1cblxuLyoqXG4gKiBAcGFyYW0geyp9IG9ialxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5nbG9iYWwuaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKCEgb2JqKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodW5kZWZpbmVkICE9PSBnbG9iYWwuQm91bmRGdW5jdGlvbiAmJiBvYmogaW5zdGFuY2VvZiBCb3VuZEZ1bmN0aW9uKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgICAgdW5kZWZpbmVkICE9PSBnbG9iYWwuQm91bmRGdW5jdGlvbiAmJlxuICAgICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCAnaW5uZXJPYmplY3QnKSAmJlxuICAgICAgICBvYmouaW5uZXJPYmplY3QgaW5zdGFuY2VvZiBCb3VuZEZ1bmN0aW9uXG4gICAgKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChpc0dlbmVyYXRvckZ1bmN0aW9uKG9iaikpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGlzQXN5bmNGdW5jdGlvbihvYmopKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChpc0Z1bmN0aW9uKG9iai5fX2ludm9rZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuICdbb2JqZWN0IEZ1bmN0aW9uXScgPT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopO1xufTtcbiIsImNvbnN0IE1peGlucyA9IHJlcXVpcmUoJy4vTWl4aW5zJyk7XG5jb25zdCBDTEFTU19UWVBFID0gJ0ludGVyZmFjZSc7XG5cbmNvbnN0IGNoZWNrZWRDbGFzc2VzQ2FjaGUgPSBuZXcgU2V0KCk7XG5cbmNsYXNzIEludGVyZmFjZXMge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Kn0gbWl4aW5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0ludGVyZmFjZShtaXhpbikge1xuICAgICAgICByZXR1cm4gbWl4aW5bTWl4aW5zLmNsYXNzVHlwZVN5bWJvbF0gPT09IENMQVNTX1RZUEU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRlZmluaXRpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlKGRlZmluaXRpb24pIHtcbiAgICAgICAgY29uc3QgY2hlY2tzID0gb2JqID0+IHtcbiAgICAgICAgICAgIGlmIChjaGVja2VkQ2xhc3Nlc0NhY2hlLmhhcyhvYmouY29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRlc2NyaXB0b3Igb2YgTWl4aW5zLmdldEZ1bmN0aW9ucyhkZWZpbml0aW9uKSkge1xuICAgICAgICAgICAgICAgIGlmIChkZXNjcmlwdG9yLmZuKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2Ygb2JqW2Rlc2NyaXB0b3IuZm5dKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICgnX19jb25zdHJ1Y3QnID09PSBkZXNjcmlwdG9yLmZuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXNjcmlwdG9yWydzdGF0aWMnXSAmJiAnZnVuY3Rpb24nID09PSB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yW2Rlc2NyaXB0b3IuZm5dKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcignTWV0aG9kIFwiJyArIGRlc2NyaXB0b3IuZm4gKyAnXCIgbXVzdCBiZSBpbXBsZW1lbnRlZC4nKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRlc2NyaXB0b3IucHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZGVzY3JpcHRvclsnc3RhdGljJ10gPyBvYmouY29uc3RydWN0b3IgOiBvYmo7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldERlc2NyaXB0b3IgPSBNaXhpbnMuZ2V0UHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgZGVzY3JpcHRvci5wcm9wZXJ0eSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gdGFyZ2V0RGVzY3JpcHRvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fanltZm9ueS5zcHJpbnRmKCdHZXR0ZXIvU2V0dGVyIGZvciBcIiVzXCIgcHJvcGVydHkgbXVzdCBiZSBpbXBsZW1lbnRlZC4nLCBkZXNjcmlwdG9yLnByb3BlcnR5KVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXNjcmlwdG9yWydnZXQnXSAmJiB1bmRlZmluZWQgPT09IHRhcmdldERlc2NyaXB0b3IuZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ0dldHRlciBmb3IgXCInICsgZGVzY3JpcHRvci5wcm9wZXJ0eSArICdcIiBwcm9wZXJ0eSBtdXN0IGJlIGltcGxlbWVudGVkLicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXNjcmlwdG9yWydzZXQnXSAmJiB1bmRlZmluZWQgPT09IHRhcmdldERlc2NyaXB0b3Iuc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ1NldHRlciBmb3IgXCInICsgZGVzY3JpcHRvci5wcm9wZXJ0eSArICdcIiBwcm9wZXJ0eSBtdXN0IGJlIGltcGxlbWVudGVkLicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjaGVja2VkQ2xhc3Nlc0NhY2hlLmFkZChvYmouY29uc3RydWN0b3IpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG1peGluID0gTWl4aW5zLmNyZWF0ZU1peGluKGRlZmluaXRpb24sIHVuZGVmaW5lZCwgY2hlY2tzKTtcblxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YobWl4aW4sIHtcbiAgICAgICAgICAgIGRlZmluaXRpb246IGRlZmluaXRpb24sXG4gICAgICAgICAgICBbTWl4aW5zLmNsYXNzVHlwZVN5bWJvbF06IENMQVNTX1RZUEUsXG4gICAgICAgICAgICBbU3ltYm9sLmhhc0luc3RhbmNlXTogSW50ZXJmYWNlcy5fY3JlYXRlSGFzSW5zdGFuY2UobWl4aW4pLFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbWl4aW47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1peGluXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHN0YXRpYyBfY3JlYXRlSGFzSW5zdGFuY2UobWl4aW4pIHtcbiAgICAgICAgcmV0dXJuIG8gPT4ge1xuICAgICAgICAgICAgaWYgKG51bGwgPT09IG8gfHwgdW5kZWZpbmVkID09PSBvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgJ19fc2VsZl9fJykpIHtcbiAgICAgICAgICAgICAgICBvID0gby5fX3NlbGZfXztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCEgaXNPYmplY3QobykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG1peGlucyA9IG8uY29uc3RydWN0b3IgJiYgby5jb25zdHJ1Y3RvcltNaXhpbnMuYXBwbGllZEludGVyZmFjZXNTeW1ib2xdO1xuICAgICAgICAgICAgaWYgKCEgbWl4aW5zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gLTEgIT09IG1peGlucy5pbmRleE9mKG1peGluKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJmYWNlcztcbiIsImNvbnN0IEZ1bmN0aW9uUHJvcHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhGdW5jdGlvbi5wcm90b3R5cGUpO1xuXG5jb25zdCBzeW1PdXRlck1peGluID0gU3ltYm9sKCdvdXRlck1peGluJyk7XG5jb25zdCBzeW1BcHBsaWVkSW50ZXJmYWNlcyA9IFN5bWJvbCgnYXBwbGllZEludGVyZmFjZXMnKTtcbmNvbnN0IHN5bUFwcGxpZWRUcmFpdHMgPSBTeW1ib2woJ2FwcGxpZWRUcmFpdHMnKTtcbmNvbnN0IHN5bUNsYXNzVHlwZSA9IFN5bWJvbCgnY2xhc3NUeXBlJyk7XG5jb25zdCBzeW1Jbml0YWxpemVyID0gU3ltYm9sKCdJbml0aWFsaXplcicpO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5jbGFzcyBNaXhpbnMge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgbWl4aW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBkZWZpbml0aW9uXG4gICAgICogQHBhcmFtIHt1bmRlZmluZWR8RnVuY3Rpb259IFtjYl0gTW9kaWZ5IHRoZSBuZXdseSBjcmVhdGVkIGlubmVyIG1peGluXG4gICAgICogQHBhcmFtIHt1bmRlZmluZWR8RnVuY3Rpb259IFtjb25zdHJ1Y3RDYl0gRnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIGNvbnN0cnVjdGlvblxuICAgICAqXG4gICAgICogQHJldHVybnMge0Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVNaXhpbihkZWZpbml0aW9uLCBjYiA9IHVuZGVmaW5lZCwgY29uc3RydWN0Q2IgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgbWl4aW4gPSAoc3VwZXJjbGFzcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgbSA9IGNsYXNzIGV4dGVuZHMgc3VwZXJjbGFzcyB7XG4gICAgICAgICAgICAgICAgW3N5bUluaXRhbGl6ZXJdKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodW5kZWZpbmVkICE9PSBzdXBlcltzeW1Jbml0YWxpemVyXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VwZXJbc3ltSW5pdGFsaXplcl0odGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3RDYih0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobSwgU3ltYm9sLmZvcignX2p5bWZvbnlfbWl4aW4nKSwge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBtLFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh1bmRlZmluZWQgIT09IGNiKSB7XG4gICAgICAgICAgICAgICAgY2IobSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtO1xuICAgICAgICB9O1xuXG4gICAgICAgIGRlZmluaXRpb25bc3ltT3V0ZXJNaXhpbl0gPSBtaXhpbjtcblxuICAgICAgICBmb3IgKGNvbnN0IGNvbnN0YW50IG9mIE1peGlucy5nZXRDb25zdGFudHNOYW1lcyhkZWZpbml0aW9uKSkge1xuICAgICAgICAgICAgbWl4aW5bY29uc3RhbnRdID0gZGVmaW5pdGlvbltjb25zdGFudF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWl4aW47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRlZmluaXRpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRNaXhpbihkZWZpbml0aW9uKSB7XG4gICAgICAgIHJldHVybiBkZWZpbml0aW9uW3N5bU91dGVyTWl4aW5dO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcEtleVxuICAgICAqXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgc3RhdGljIGdldFByb3BlcnR5RGVzY3JpcHRvcihvYmosIHByb3BLZXkpIHtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBwcm9wS2V5KTtcbiAgICAgICAgICAgIGlmICh1bmRlZmluZWQgIT09IGRlc2NyaXB0b3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAob2JqID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikpO1xuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGZ1bmN0aW9uIG5hbWVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBkZWZpbml0aW9uXG4gICAgICpcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBzdGF0aWMgKiBnZXRGdW5jdGlvbnMoZGVmaW5pdGlvbikge1xuICAgICAgICBjb25zdCBjaGFpbiA9IHRoaXMuX2dldENsYXNzQ2hhaW4oZGVmaW5pdGlvbik7XG4gICAgICAgIGNvbnN0IGdlbiA9IGZ1bmN0aW9uICogKG9iaiwgaXNTdGF0aWMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZm4gb2YgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgZm4pO1xuICAgICAgICAgICAgICAgIGlmICgnY29uc3RydWN0b3InICE9PSBmbiAmJiAnZnVuY3Rpb24nID09PSB0eXBlb2YgZGVzY3JpcHRvci52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCB7J3N0YXRpYyc6IGlzU3RhdGljLCBmbjogZm59O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZGVzY3JpcHRvci5nZXQgfHwgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGRlc2NyaXB0b3Iuc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdGF0aWMnOiBpc1N0YXRpYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdwcm9wZXJ0eSc6IGZuLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2dldCc6IHVuZGVmaW5lZCAhPT0gZGVzY3JpcHRvci5nZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAnc2V0JzogdW5kZWZpbmVkICE9PSBkZXNjcmlwdG9yLnNldCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChjb25zdCBpIG9mIGNoYWluKSB7XG4gICAgICAgICAgICB5aWVsZCAqIGdlbihpLnByb3RvdHlwZSwgZmFsc2UpO1xuICAgICAgICAgICAgeWllbGQgKiBnZW4oaSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIGNvbnN0YW50cyBuYW1lcyBmb3IgZGVmaW5pdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGRlZmluaXRpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICAgKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRDb25zdGFudHNOYW1lcyhkZWZpbml0aW9uKSB7XG4gICAgICAgIGNvbnN0IGNoYWluID0gdGhpcy5fZ2V0Q2xhc3NDaGFpbihkZWZpbml0aW9uKTtcblxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShmdW5jdGlvbiAqICgpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBvZiBjaGFpbikge1xuICAgICAgICAgICAgICAgIHlpZWxkICogWyAuLi5PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhpKSwgLi4uT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhpKSBdXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoUCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJ3Byb3RvdHlwZScgPT09IFAgfHwgJ2xlbmd0aCcgPT09IFAgfHwgJ25hbWUnID09PSBQKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRnVuY3Rpb24gcHJvdG90eXBlIHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgnYXJndW1lbnRzJyA9PT0gUCB8fCAnY2FsbGVyJyA9PT0gUCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICdjYWxsZXInIGFuZCAnYXJndW1lbnRzJyBhcmUgcmVzdHJpY3RlZCBmdW5jdGlvbiBwcm9wZXJ0aWVzIGFuZCBjYW5ub3QgYmUgYWNjZXNzZWQgaW4gdGhpcyBjb250ZXh0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBpW1BdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3ltT3V0ZXJNaXhpbiA9PT0gUCB8fCBTeW1ib2wucmVmbGVjdGlvbiA9PT0gUCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xID09PSBGdW5jdGlvblByb3BzLmluZGV4T2YoUCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWZpbml0aW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHN0YXRpYyBfZ2V0Q2xhc3NDaGFpbihkZWZpbml0aW9uKSB7XG4gICAgICAgIGNvbnN0IGNoYWluID0gW107XG4gICAgICAgIGxldCBwYXJlbnQgPSBkZWZpbml0aW9uO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBpZiAocGFyZW50W3N5bU91dGVyTWl4aW5dKSB7XG4gICAgICAgICAgICAgICAgY2hhaW4udW5zaGlmdChwYXJlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlIChwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocGFyZW50KSk7XG5cbiAgICAgICAgcmV0dXJuIGNoYWluO1xuICAgIH1cbn1cblxuTWl4aW5zLmFwcGxpZWRJbnRlcmZhY2VzU3ltYm9sID0gc3ltQXBwbGllZEludGVyZmFjZXM7XG5NaXhpbnMuYXBwbGllZFRyYWl0c1N5bWJvbCA9IHN5bUFwcGxpZWRUcmFpdHM7XG5NaXhpbnMuY2xhc3NUeXBlU3ltYm9sID0gc3ltQ2xhc3NUeXBlO1xuTWl4aW5zLmluaXRpYWxpemVyU3ltYm9sID0gc3ltSW5pdGFsaXplcjtcblxubW9kdWxlLmV4cG9ydHMgPSBNaXhpbnM7XG4iLCJjb25zdCBNaXhpbnMgPSByZXF1aXJlKCcuL01peGlucycpO1xuY29uc3QgQ0xBU1NfVFlQRSA9ICdUcmFpdCc7XG5cbmNsYXNzIFRyYWl0cyB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1peGluXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNUcmFpdChtaXhpbikge1xuICAgICAgICByZXR1cm4gbWl4aW5bTWl4aW5zLmNsYXNzVHlwZVN5bWJvbF0gPT09IENMQVNTX1RZUEU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRlZmluaXRpb25cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlKGRlZmluaXRpb24pIHtcbiAgICAgICAgY29uc3QgaW5oZXJpdHMgPSBuZXcgTWFwKCk7XG4gICAgICAgIGxldCBwYXJlbnQgPSBkZWZpbml0aW9uO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBpZiAocGFyZW50LnByb3RvdHlwZSkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcCBvZiBbIC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHBhcmVudC5wcm90b3R5cGUpLCAuLi5PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHBhcmVudC5wcm90b3R5cGUpIF0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluaGVyaXRzLmhhcyhwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpbmhlcml0cy5zZXQocCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwYXJlbnQucHJvdG90eXBlLCBwKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlIChwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocGFyZW50KSk7XG5cbiAgICAgICAgY29uc3QgbWl4aW4gPSBNaXhpbnMuY3JlYXRlTWl4aW4oZGVmaW5pdGlvbiwgdHJhaXQgPT4ge1xuICAgICAgICAgICAgZm9yIChjb25zdCBbIHByb3AsIGRlc2NyaXB0b3IgXSBvZiBpbmhlcml0cy5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoJ2NvbnN0cnVjdG9yJyA9PT0gcHJvcCB8fCAnX19jb25zdHJ1Y3QnID09PSBwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0cmFpdC5wcm90b3R5cGUsIHByb3AsIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBvYmogPT4ge1xuICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24oZGVmaW5pdGlvbi5wcm90b3R5cGUuX19jb25zdHJ1Y3QpKSB7XG4gICAgICAgICAgICAgICAgZGVmaW5pdGlvbi5wcm90b3R5cGUuX19jb25zdHJ1Y3QuY2FsbChvYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YobWl4aW4sIHtcbiAgICAgICAgICAgIGRlZmluaXRpb246IGRlZmluaXRpb24sXG4gICAgICAgICAgICBbTWl4aW5zLmNsYXNzVHlwZVN5bWJvbF06IENMQVNTX1RZUEUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBtaXhpbjtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhaXRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5nbG9iYWwuX19qeW1mb255ID0gZ2xvYmFsLl9fanltZm9ueSB8fCB7fTtcblxuLyoqXG4gKiBHZXQga2V5LCB2YWx1ZSBwYWlycyBmcm9tIGFueSBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3QuPEssIFY+fE1hcDxLLCBWPnxWW119IG9iamVjdFxuICpcbiAqIEByZXR1cm5zIHtJdGVyYWJsZUl0ZXJhdG9yLjxbSywgVl0+fVxuICogQHRlbXBsYXRlIEssIFZcbiAqL1xuX19qeW1mb255LmdldEVudHJpZXMgPSBmdW5jdGlvbiAqIGdldEVudHJpZXMob2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mIFNldCkge1xuICAgICAgICBvYmplY3QgPSBbIC4uLm9iamVjdC52YWx1ZXMoKSBdO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5KG9iamVjdCkpIHtcbiAgICAgICAgZm9yIChjb25zdCBrIG9mIG9iamVjdC5rZXlzKCkpIHtcbiAgICAgICAgICAgIHlpZWxkIFsgaywgb2JqZWN0W2tdIF07XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9iamVjdCBpbnN0YW5jZW9mIE1hcCkge1xuICAgICAgICB5aWVsZCAqIG9iamVjdC5lbnRyaWVzKCk7XG4gICAgfSBlbHNlIGlmICghIGlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEV4Y2VwdGlvbignQXJndW1lbnQgMSBpcyBub3QgYW4gb2JqZWN0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgWyAuLi5PYmplY3Qua2V5cyhvYmplY3QpLCAuLi5PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCkgXSkge1xuICAgICAgICAgICAgeWllbGQgWyBrZXksIG9iamVjdFtrZXldIF07XG4gICAgICAgIH1cbiAgICB9XG59O1xuIiwiZ2xvYmFsLl9fanltZm9ueSA9IGdsb2JhbC5fX2p5bWZvbnkgfHwge307XG5cbmxldCBfYXN5bmNTdXBwb3J0ID0gdW5kZWZpbmVkO1xubGV0IF9hc3luY0dlbmVyYXRvclN1cHBvcnQgPSB1bmRlZmluZWQ7XG5sZXQgX25hdGl2ZURlY29yYXRvclN1cHBvcnQgPSB1bmRlZmluZWQ7XG5sZXQgX21vZGVyblJlZ2V4ID0gdW5kZWZpbmVkO1xubGV0IF9wdWJsaWNGaWVsZHMgPSB1bmRlZmluZWQ7XG5sZXQgX3ByaXZhdGVGaWVsZHMgPSB1bmRlZmluZWQ7XG5sZXQgX3ByaXZhdGVNZXRob2RzID0gdW5kZWZpbmVkO1xuXG4vKipcbiAqIEBtZW1iZXJPZiBfX2p5bWZvbnlcbiAqL1xuY2xhc3MgUGxhdGZvcm0ge1xuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGlzIG5vZGUgdmVyc2lvbiBoYXMgYXN5bmMgZnVuY3Rpb24gc3VwcG9ydC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBoYXNBc3luY0Z1bmN0aW9uU3VwcG9ydCgpIHtcbiAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gX2FzeW5jU3VwcG9ydCkge1xuICAgICAgICAgICAgX2FzeW5jU3VwcG9ydCA9IGZhbHNlO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBmbjtcbiAgICAgICAgICAgICAgICBldmFsKCdmbiA9IGFzeW5jIGZ1bmN0aW9uICgpIHsgfScpO1xuICAgICAgICAgICAgICAgIF9hc3luY1N1cHBvcnQgPSAnQXN5bmNGdW5jdGlvbicgPT09IChmbi5jb25zdHJ1Y3Rvci5uYW1lIHx8IGZuLmNvbnN0cnVjdG9yLmRpc3BsYXlOYW1lKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIShlIGluc3RhbmNlb2YgU3ludGF4RXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9hc3luY1N1cHBvcnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoaXMgbm9kZSB2ZXJzaW9uIGhhcyBhc3luYyBmdW5jdGlvbiBzdXBwb3J0LlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGhhc0FzeW5jR2VuZXJhdG9yRnVuY3Rpb25TdXBwb3J0KCkge1xuICAgICAgICBpZiAodW5kZWZpbmVkID09PSBfYXN5bmNHZW5lcmF0b3JTdXBwb3J0KSB7XG4gICAgICAgICAgICBfYXN5bmNHZW5lcmF0b3JTdXBwb3J0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IGZuO1xuICAgICAgICAgICAgICAgIGV2YWwoJ2ZuID0gYXN5bmMgZnVuY3Rpb24gKiAoKSB7IH0nKTtcbiAgICAgICAgICAgICAgICBfYXN5bmNHZW5lcmF0b3JTdXBwb3J0ID0gJ0FzeW5jR2VuZXJhdG9yRnVuY3Rpb24nID09PSAoZm4uY29uc3RydWN0b3IubmFtZSB8fCBmbi5jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFN5bnRheEVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfYXN5bmNHZW5lcmF0b3JTdXBwb3J0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGlzIG5vZGUgdmVyc2lvbiBoYXMgbmF0aXZlIGRlY29yYXRvcnMgc3VwcG9ydC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBoYXNOYXRpdmVEZWNvcmF0b3JzU3VwcG9ydCgpIHtcbiAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gX25hdGl2ZURlY29yYXRvclN1cHBvcnQpIHtcbiAgICAgICAgICAgIF9uYXRpdmVEZWNvcmF0b3JTdXBwb3J0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZXZhbCgnZGVjb3JhdG9yIEB0ZXN0RGVjb3JhdG9yKG9wdGlvbnMpIHsgX25hdGl2ZURlY29yYXRvclN1cHBvcnQgPSB0cnVlOyB9XFxuQHRlc3REZWNvcmF0b3IgY2xhc3MgRm9vIHt9Jyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFN5bnRheEVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfbmF0aXZlRGVjb3JhdG9yU3VwcG9ydDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcmUgd2UgcnVubmluZyBvbiB3aW5kb3dzP1xuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzV2luZG93cygpIHtcbiAgICAgICAgcmV0dXJuICd3aW4zMicgPT09IHByb2Nlc3MucGxhdGZvcm07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoaXMgbm9kZSB2ZXJzaW9uIGhhcyBtb2Rlcm4gcmVnZXggKG5hbWVkIGdyb3Vwcykgc3VwcG9ydC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBoYXNNb2Rlcm5SZWdleCgpIHtcbiAgICAgICAgaWYgKHVuZGVmaW5lZCA9PT0gX21vZGVyblJlZ2V4KSB7XG4gICAgICAgICAgICBfbW9kZXJuUmVnZXggPSBmYWxzZTtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBSZWdFeHAoJyg/PHRlc3Q+LispJyk7XG4gICAgICAgICAgICAgICAgX21vZGVyblJlZ2V4ID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIShlIGluc3RhbmNlb2YgU3ludGF4RXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9tb2Rlcm5SZWdleDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhpcyBub2RlIHZlcnNpb24gaGFzIHB1YmxpYyBpbnN0YW5jZSBmaWVsZHMgc3VwcG9ydC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBoYXNQdWJsaWNGaWVsZFN1cHBvcnQoKSB7XG4gICAgICAgIGlmICh1bmRlZmluZWQgPT09IF9wdWJsaWNGaWVsZHMpIHtcbiAgICAgICAgICAgIF9wdWJsaWNGaWVsZHMgPSBmYWxzZTtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgYztcbiAgICAgICAgICAgICAgICBldmFsKCdjID0gY2xhc3MgZXYgeyBmaWVsZCA9IFwiZm9vYmFyXCI7IH0nKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGkgPSBuZXcgYygpO1xuICAgICAgICAgICAgICAgIHJldHVybiBfcHVibGljRmllbGRzID0gJ2Zvb2JhcicgPT09IGkuZmllbGQ7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFN5bnRheEVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfcHVibGljRmllbGRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGlzIG5vZGUgdmVyc2lvbiBoYXMgcHJpdmF0ZSBpbnN0YW5jZSBmaWVsZHMgc3VwcG9ydC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBoYXNQcml2YXRlRmllbGRTdXBwb3J0KCkge1xuICAgICAgICBpZiAodW5kZWZpbmVkID09PSBfcHJpdmF0ZUZpZWxkcykge1xuICAgICAgICAgICAgX3ByaXZhdGVGaWVsZHMgPSBmYWxzZTtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgYztcbiAgICAgICAgICAgICAgICBldmFsKCdjID0gY2xhc3MgZXYgeyAjZmllbGQgPSBcImZvb2JhclwiOyBnZXQgZmllbGQoKSB7IHJldHVybiB0aGlzLiNmaWVsZDsgfSB9Jyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpID0gbmV3IGMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ByaXZhdGVGaWVsZHMgPSAnZm9vYmFyJyA9PT0gaS5maWVsZDtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIShlIGluc3RhbmNlb2YgU3ludGF4RXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9wcml2YXRlRmllbGRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGlzIG5vZGUgdmVyc2lvbiBoYXMgcHJpdmF0ZSBpbnN0YW5jZSBtZXRob2RzIHN1cHBvcnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaGFzUHJpdmF0ZU1ldGhvZHNTdXBwb3J0KCkge1xuICAgICAgICBpZiAodW5kZWZpbmVkID09PSBfcHJpdmF0ZU1ldGhvZHMpIHtcbiAgICAgICAgICAgIF9wcml2YXRlTWV0aG9kcyA9IGZhbHNlO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBjO1xuICAgICAgICAgICAgICAgIGV2YWwoJ2MgPSBjbGFzcyBldiB7ICNmaWVsZCgpIHsgcmV0dXJuIFwiZm9vYmFyXCI7IH0gZ2V0IGZpZWxkKCkgeyByZXR1cm4gdGhpcy4jZmllbGQoKTsgfSB9Jyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpID0gbmV3IGMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ByaXZhdGVNZXRob2RzID0gJ2Zvb2JhcicgPT09IGkuZmllbGQ7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFN5bnRheEVycm9yKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfcHJpdmF0ZU1ldGhvZHM7XG4gICAgfVxufVxuXG5fX2p5bWZvbnkuUGxhdGZvcm0gPSBQbGF0Zm9ybTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZ2xvYmFsLl9fanltZm9ueSA9IGdsb2JhbC5fX2p5bWZvbnkgfHwge307XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbl9fanltZm9ueS5yZWdleF9xdW90ZSA9IChzdHIpID0+IHtcbiAgICByZXR1cm4gc3RyLnRvU3RyaW5nKClcbiAgICAgICAgLnJlcGxhY2UoL1suXFxcXCsqP1xcW1xcXlxcXSQoKXt9PSE8Pnw6LV0vZywgJ1xcXFwkJicpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vUmVnZXgvcXVvdGUnKTtcblxuZ2xvYmFsLl9fanltZm9ueSA9IGdsb2JhbC5fX2p5bWZvbnkgfHwge307XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSByZXBsYWNlUGFpcnNcbiAqIEBwYXJhbSB7c3RyaW5nfSB0b1xuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbl9fanltZm9ueS5zdHJ0ciA9IChzdHJpbmcsIHJlcGxhY2VQYWlycywgdG8pID0+IHtcbiAgICBsZXQga2V5cztcblxuICAgIGlmIChpc1N0cmluZyhyZXBsYWNlUGFpcnMpICYmIGlzU3RyaW5nKHRvKSkge1xuICAgICAgICBpZiAocmVwbGFjZVBhaXJzLmxlbmd0aCAhPT0gdG8ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdSZXBsYWNlIHN0cmluZ3MgbXVzdCBoYXZlIHRoZSBzYW1lIGxlbmd0aCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdG8gPSB0by5zcGxpdCgnJyk7XG4gICAgICAgIGtleXMgPSByZXBsYWNlUGFpcnMuc3BsaXQoJycpO1xuICAgICAgICByZXBsYWNlUGFpcnMgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBbIGksIGtleSBdIG9mIF9fanltZm9ueS5nZXRFbnRyaWVzKGtleXMpKSB7XG4gICAgICAgICAgICByZXBsYWNlUGFpcnNba2V5XSA9IHRvW2ldO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAga2V5cyA9IE9iamVjdC5rZXlzKHJlcGxhY2VQYWlycyk7XG4gICAgfVxuXG4gICAgaWYgKDAgPT09IGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfVxuXG4gICAgY29uc3Qgc2VhcmNoUGF0dGVybiA9IGtleXNcbiAgICAgICAgLm1hcChfX2p5bWZvbnkucmVnZXhfcXVvdGUpXG4gICAgICAgIC5qb2luKCd8Jyk7XG5cbiAgICByZXR1cm4gc3RyaW5nLnRvU3RyaW5nKCkucmVwbGFjZShuZXcgUmVnRXhwKHNlYXJjaFBhdHRlcm4sICdnJyksIChtYXRjaCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVwbGFjZVBhaXJzW21hdGNoXTtcbiAgICB9KTtcbn07XG4iLCJnbG9iYWwuaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5nbG9iYWwuaXNCdWZmZXIgPSAhISBnbG9iYWwuQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogKCkgPT4gZmFsc2U7XG5jb25zdCB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbnJlcXVpcmUoJy4vSXMvZnVuY3Rpb25zJyk7XG5cbmlmICghIGlzRnVuY3Rpb24oZ2xvYmFsLmlzT2JqZWN0KSkge1xuICAgIGdsb2JhbC5pc09iamVjdCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgcmV0dXJuICEhIGFyZyAmJiAnb2JqZWN0JyA9PT0gdHlwZW9mIGFyZztcbiAgICB9O1xufVxuXG5mb3IgKGNvbnN0IG5hbWUgb2YgWyAnQXJndW1lbnRzJywgJ0Jvb2xlYW4nLCAnU3RyaW5nJywgJ051bWJlcicsICdEYXRlJywgJ1JlZ0V4cCcsICdFcnJvcicsICdTeW1ib2wnLCAnTWFwJywgJ1dlYWtNYXAnLCAnU2V0JywgJ1dlYWtTZXQnIF0pIHtcbiAgICBpZiAoaXNGdW5jdGlvbihnbG9iYWxbJ2lzJyArIG5hbWVdKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBnbG9iYWxbJ2lzJyArIG5hbWVdID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCAnICsgbmFtZSArICddJztcbiAgICB9O1xufVxuXG5jb25zdCBwcmltaXRpdmVzID0gWyBOdW1iZXIsIFN0cmluZywgQm9vbGVhbiBdO1xuXG5nbG9iYWwuaXNOdW1lcmljID0gZnVuY3Rpb24gaXNOdW1lcmljKHZhbHVlKSB7XG4gICAgaWYgKGlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gISEgU3RyaW5nKHZhbHVlKS5tYXRjaCgvXihcXGQrfFxcLlxcZCt8XFxkKy5cXGQrKSQvKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5nbG9iYWwuaXNOdW1lcmljID0gZnVuY3Rpb24gaXNOdW1lcmljKHZhbHVlKSB7XG4gICAgaWYgKCEgaXNTY2FsYXIodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiAhISBTdHJpbmcodmFsdWUpLm1hdGNoKC9eWystXT8oKFxcZCt8XFwuXFxkK3xcXGQrXFwuXFxkKykoZVsrLV0/XFxkKyk/fDB4WzAtOWEtZl9dKykkL2kpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmdsb2JhbC5pc1NjYWxhciA9IGZ1bmN0aW9uIGlzU2NhbGFyKHZhbHVlKSB7XG4gICAgaWYgKHVuZGVmaW5lZCA9PT0gdmFsdWUgfHwgbnVsbCA9PT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKTtcbiAgICBmb3IgKGNvbnN0IHR5cGUgb2YgcHJpbWl0aXZlcykge1xuICAgICAgICBpZiAocHJvdG8gPT09IHR5cGUucHJvdG90eXBlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IG9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih7fSk7XG5cbi8qKlxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5nbG9iYWwuaXNPYmplY3RMaXRlcmFsID0gZnVuY3Rpb24gaXNPYmplY3RMaXRlcmFsKHZhbHVlKSB7XG4gICAgaWYgKG51bGwgPT09IHZhbHVlIHx8IHVuZGVmaW5lZCA9PT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGxldCBwcm90bztcbiAgICB0cnkge1xuICAgICAgICBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGwgPT09IHByb3RvIHx8IHByb3RvID09PSBvYmplY3RQcm90b3R5cGU7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZ2xvYmFsLmlzUHJvbWlzZSA9IGZ1bmN0aW9uIGlzUHJvbWlzZSh2YWx1ZSkge1xuICAgIHJldHVybiAnb2JqZWN0JyA9PT0gdHlwZW9mIHZhbHVlICYmIGlzRnVuY3Rpb24odmFsdWUudGhlbik7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7Kn0gc3RyZWFtXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmdsb2JhbC5pc1N0cmVhbSA9IGZ1bmN0aW9uIGlzU3RyZWFtKHN0cmVhbSkge1xuICAgIHJldHVybiAnb2JqZWN0JyA9PT0gdHlwZW9mIHN0cmVhbSAmJiBpc0Z1bmN0aW9uKHN0cmVhbS5waXBlKTtcbn07XG4iLCJjb25zdCBNaXhpbnMgPSByZXF1aXJlKCcuL01peGlucy9NaXhpbnMnKTtcbmNvbnN0IEludGVyZmFjZXMgPSByZXF1aXJlKCcuL01peGlucy9JbnRlcmZhY2VzJyk7XG5jb25zdCBUcmFpdHMgPSByZXF1aXJlKCcuL01peGlucy9UcmFpdHMnKTtcblxuZ2xvYmFsLmdldEludGVyZmFjZSA9IGZ1bmN0aW9uIGdldEludGVyZmFjZShkZWZpbml0aW9uKSB7XG4gICAgcmV0dXJuIEludGVyZmFjZXMuY3JlYXRlKGRlZmluaXRpb24pO1xufTtcblxuZ2xvYmFsLmdldFRyYWl0ID0gZnVuY3Rpb24gZ2V0VHJhaXQoZGVmaW5pdGlvbikge1xuICAgIHJldHVybiBUcmFpdHMuY3JlYXRlKGRlZmluaXRpb24pO1xufTtcblxuZ2xvYmFsLm1peGlucyA9IHtcbiAgICBpc0ludGVyZmFjZTogSW50ZXJmYWNlcy5pc0ludGVyZmFjZSxcbiAgICBpc1RyYWl0OiBUcmFpdHMuaXNUcmFpdCxcbiAgICBnZXRJbnRlcmZhY2VzOiAoQ2xhc3MpID0+IENsYXNzW01peGlucy5hcHBsaWVkSW50ZXJmYWNlc1N5bWJvbF0gfHwgW10sXG4gICAgZ2V0VHJhaXRzOiAoQ2xhc3MpID0+IENsYXNzW01peGlucy5hcHBsaWVkVHJhaXRzU3ltYm9sXSB8fCBbXSxcblxuICAgIC8qKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIGluaXRpYWxpemVyU3ltYm9sOiBNaXhpbnMuaW5pdGlhbGl6ZXJTeW1ib2wsXG59O1xuXG5nbG9iYWwubWl4ID0gZnVuY3Rpb24gbWl4KHN1cGVyY2xhc3MsIC4uLm1peGlucykge1xuICAgIHN1cGVyY2xhc3MgPSBzdXBlcmNsYXNzIHx8IF9fanltZm9ueS5KT2JqZWN0IHx8IGNsYXNzIHt9O1xuICAgIHN1cGVyY2xhc3MgPSBtaXhpbnMucmVkdWNlKChhLCBiKSA9PiB7XG4gICAgICAgIGlmICghIGlzRnVuY3Rpb24oYikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBMb2dpY0V4Y2VwdGlvbihfX2p5bWZvbnkuc3ByaW50ZignQ2Fubm90IGltcGxlbWVudC91c2UgJXMgYXMgaW50ZXJmYWNlL3RyYWl0LiBZb3UgcHJvYmFibHkgcGFzc2VkIGEgYnJva2VuIHJlZmVyZW5jZSB0byBtaXgvaW1wbGVtZW50YXRpb25PZi4nLCB0eXBlb2YgYikpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGIoYSk7XG4gICAgfSwgc3VwZXJjbGFzcyk7XG5cbiAgICBjb25zdCBpbnRlcmZhY2VzID0gQXJyYXkuZnJvbSgoZnVuY3Rpb24gKiAoKSB7XG4gICAgICAgIGZvciAoY29uc3QgaSBvZiBtaXhpbnMpIHtcbiAgICAgICAgICAgIGlmICghIEludGVyZmFjZXMuaXNJbnRlcmZhY2UoaSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGRlZmluaXRpb24gPSBpLmRlZmluaXRpb247XG4gICAgICAgICAgICB3aGlsZSAoZGVmaW5pdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IG91dGVyID0gTWl4aW5zLmdldE1peGluKGRlZmluaXRpb24pO1xuICAgICAgICAgICAgICAgIGlmIChvdXRlcikge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBvdXRlcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkZWZpbml0aW9uID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGRlZmluaXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSkoKSkuY29uY2F0KC4uLihzdXBlcmNsYXNzW01peGlucy5hcHBsaWVkSW50ZXJmYWNlc1N5bWJvbF0gfHwgW10pKTtcblxuICAgIGNvbnN0IHRyYWl0cyA9IEFycmF5LmZyb20oKGZ1bmN0aW9uICogKCkge1xuICAgICAgICBmb3IgKGNvbnN0IGkgb2YgbWl4aW5zKSB7XG4gICAgICAgICAgICBpZiAoISBUcmFpdHMuaXNUcmFpdChpKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgZGVmaW5pdGlvbiA9IGkuZGVmaW5pdGlvbjtcbiAgICAgICAgICAgIHdoaWxlIChkZWZpbml0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3V0ZXIgPSBNaXhpbnMuZ2V0TWl4aW4oZGVmaW5pdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKG91dGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIG91dGVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRlZmluaXRpb24gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZGVmaW5pdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KSgpKS5jb25jYXQoLi4uKHN1cGVyY2xhc3NbTWl4aW5zLmFwcGxpZWRUcmFpdHNTeW1ib2xdIHx8IFtdKSk7XG5cbiAgICBjb25zdCBtaXhlZCA9IChzID0+IHtcbiAgICAgICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgcyB7fTtcbiAgICB9KShzdXBlcmNsYXNzKTtcblxuICAgIGZvciAoY29uc3QgbWl4aW4gb2YgbWl4aW5zKSB7XG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBNaXhpbnMuZ2V0Q29uc3RhbnRzTmFtZXMobWl4aW4uZGVmaW5pdGlvbikpIHtcbiAgICAgICAgICAgIG1peGVkW25hbWVdID0gbWl4aW5bbmFtZV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobWl4ZWQsIE1peGlucy5hcHBsaWVkSW50ZXJmYWNlc1N5bWJvbCwge1xuICAgICAgICB2YWx1ZTogWyAuLi5pbnRlcmZhY2VzIF0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG1peGVkLCBNaXhpbnMuYXBwbGllZFRyYWl0c1N5bWJvbCwge1xuICAgICAgICB2YWx1ZTogWyAuLi50cmFpdHMgXSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobWl4ZWQsIFN5bWJvbC5mb3IoJ19qeW1mb255X21peGluJyksIHtcbiAgICAgICAgdmFsdWU6IG1peGVkLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICB9KTtcblxuICAgIHJldHVybiBtaXhlZDtcbn07XG5cbmdsb2JhbC5pbXBsZW1lbnRhdGlvbk9mID0gZnVuY3Rpb24gaW1wbGVtZW50YXRpb25PZiguLi5pbnRlcmZhY2VzKSB7XG4gICAgcmV0dXJuIGdsb2JhbC5taXgodW5kZWZpbmVkLCAuLi5pbnRlcmZhY2VzKTtcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vanMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9