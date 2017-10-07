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
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

var _UrlGenerator = __webpack_require__(5);

var _UrlGenerator2 = _interopRequireDefault(_UrlGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.UrlGenerator = _UrlGenerator2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
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

  var inModule = ( false ? "undefined" : _typeof(module)) === "object";
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),
/* 4 */
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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

__webpack_require__(6);
__webpack_require__(8);
__webpack_require__(9);

var InvalidParameterException = __webpack_require__(10);
var MissingMandatoryParametersException = __webpack_require__(11);
var RouteNotFoundException = __webpack_require__(12);

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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

global.isArray = Array.isArray;
var toString = Object.prototype.toString;

__webpack_require__(7);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 7 */
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
    if (obj instanceof BoundFunction) {
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 8 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 9 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InvalidArgumentException = __webpack_require__(1);

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InvalidArgumentException = __webpack_require__(1);

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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InvalidArgumentException = __webpack_require__(1);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjRhZmJiMGNhNDc2YmM4MTgyZGEiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9FeGNlcHRpb24vSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9VcmxHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqeW1mb255L3V0aWwvbGliL2lzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanltZm9ueS91dGlsL2xpYi9Jcy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqeW1mb255L3V0aWwvbGliL09iamVjdC9lbnRyaWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanltZm9ueS91dGlsL2xpYi9TdHJpbmcvc3RydHIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvRXhjZXB0aW9uL0ludmFsaWRQYXJhbWV0ZXJFeGNlcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vanMvRXhjZXB0aW9uL01pc3NpbmdNYW5kYXRvcnlQYXJhbWV0ZXJzRXhjZXB0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL0V4Y2VwdGlvbi9Sb3V0ZU5vdEZvdW5kRXhjZXB0aW9uLmpzIl0sIm5hbWVzIjpbImciLCJGdW5jdGlvbiIsImV2YWwiLCJlIiwid2luZG93IiwibW9kdWxlIiwiZXhwb3J0cyIsIkludmFsaWRBcmd1bWVudEV4Y2VwdGlvbiIsIkVycm9yIiwiVXJsR2VuZXJhdG9yIiwiZ2xvYmFsIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsInVuZGVmaW5lZCIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiaW5Nb2R1bGUiLCJydW50aW1lIiwicmVnZW5lcmF0b3JSdW50aW1lIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIl9pbnZva2UiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsIm9iaiIsImFyZyIsInR5cGUiLCJjYWxsIiwiZXJyIiwiR2VuU3RhdGVTdXNwZW5kZWRTdGFydCIsIkdlblN0YXRlU3VzcGVuZGVkWWllbGQiLCJHZW5TdGF0ZUV4ZWN1dGluZyIsIkdlblN0YXRlQ29tcGxldGVkIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiY29uc3RydWN0b3IiLCJkaXNwbGF5TmFtZSIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsIl9fYXdhaXQiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsInZhbHVlIiwiUHJvbWlzZSIsInRoZW4iLCJ1bndyYXBwZWQiLCJwcmV2aW91c1Byb21pc2UiLCJlbnF1ZXVlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJhc3luYyIsIml0ZXIiLCJuZXh0IiwiZG9uZSIsInN0YXRlIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJyZXR1cm4iLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHRMb2MiLCJ0b1N0cmluZyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0Iiwia2V5cyIsIm9iamVjdCIsImtleSIsInJldmVyc2UiLCJsZW5ndGgiLCJwb3AiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJpIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290RW50cnkiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsIndlYnBhY2tQb2x5ZmlsbCIsImRlcHJlY2F0ZSIsInBhdGhzIiwiY2hpbGRyZW4iLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJsIiwicmVxdWlyZSIsIkludmFsaWRQYXJhbWV0ZXJFeGNlcHRpb24iLCJNaXNzaW5nTWFuZGF0b3J5UGFyYW1ldGVyc0V4Y2VwdGlvbiIsIlJvdXRlTm90Rm91bmRFeGNlcHRpb24iLCJkZWNvZGVkQ2hhcnMiLCJyb3V0ZUNvbGxlY3Rpb24iLCJfcm91dGVDb2xsZWN0aW9uIiwiYXNzaWduIiwic2NoZW1lIiwibG9jYXRpb24iLCJwcm90b2NvbCIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsImlzU2VjdXJlIiwiX2NvbnRleHQiLCJwYXRoaW5mbyIsInBhdGhuYW1lIiwiaG9zdCIsImhvc3RuYW1lIiwiaHR0cFBvcnQiLCJwb3J0IiwiaHR0cHNQb3J0IiwicXVlcnlTdHJpbmciLCJzZWFyY2giLCJlbnRyaWVzIiwicm91dGUiLCJwYXJhbWV0ZXJzIiwicmVmZXJlbmNlVHlwZSIsIkFCU09MVVRFX1BBVEgiLCJfZG9HZW5lcmF0ZSIsInZhcmlhYmxlcyIsImRlZmF1bHRzIiwidG9rZW5zIiwiaG9zdFRva2VucyIsInNjaGVtZXMiLCJyZXF1aXJlZFNjaGVtZXMiLCJtZXJnZWRQYXJhbXMiLCJkaWZmIiwiZmlsdGVyIiwiam9pbiIsInVybCIsIm9wdGlvbmFsIiwibWVzc2FnZSIsInRva2VuIiwicmVnZXgiLCJSZWdFeHAiLCJ0ZXN0IiwiX19qeW1mb255Iiwic3RydHIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzdWJzdHIiLCJzY2hlbWVBdXRob3JpdHkiLCJpbmRleE9mIiwiQUJTT0xVVEVfVVJMIiwicm91dGVIb3N0IiwiTkVUV09SS19QQVRIIiwiUkVMQVRJVkVfUEFUSCIsImdldFJlbGF0aXZlUGF0aCIsImV4dHJhcyIsImZyYWdtZW50IiwiX2ZyYWdtZW50IiwiaWR4IiwicXVlcnkiLCJrIiwibWFwIiwiYmFzZVBhdGgiLCJ0YXJnZXRQYXRoIiwic291cmNlRGlycyIsInNwbGl0IiwidGFyZ2V0RGlycyIsInRhcmdldEZpbGUiLCJnZXRFbnRyaWVzIiwiZGlyIiwicGF0aCIsInJlcGVhdCIsImNvbG9uUG9zIiwic2xhc2hQb3MiLCJpc0FycmF5IiwiQXJyYXkiLCJpc0Z1bmN0aW9uIiwiaXNPYmplY3QiLCJwcmltaXRpdmVzIiwiTnVtYmVyIiwiU3RyaW5nIiwiQm9vbGVhbiIsImlzU2NhbGFyIiwicHJvdG8iLCJpc09iamVjdExpdGVyYWwiLCJpc1Byb21pc2UiLCJpc1N0cmVhbSIsInN0cmVhbSIsInBpcGUiLCJpc0dlbmVyYXRvciIsInRocm93IiwiUGxhdGZvcm0iLCJoYXNBc3luY0Z1bmN0aW9uU3VwcG9ydCIsImlzQXN5bmNGdW5jdGlvbiIsIkJvdW5kRnVuY3Rpb24iLCJvYmplbnRyaWVzIiwiTWFwIiwic3RyaW5nIiwicmVwbGFjZVBhaXJzIiwic3RyIiwicmUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDN0RBLElBQUlBLENBQUo7O0FBRUE7QUFDQUEsSUFBSyxZQUFXO0FBQ2YsUUFBTyxJQUFQO0FBQ0EsQ0FGRyxFQUFKOztBQUlBLElBQUk7QUFDSDtBQUNBQSxLQUFJQSxLQUFLQyxTQUFTLGFBQVQsR0FBTCxJQUFrQyxDQUFDLEdBQUVDLElBQUgsRUFBUyxNQUFULENBQXRDO0FBQ0EsQ0FIRCxDQUdFLE9BQU1DLENBQU4sRUFBUztBQUNWO0FBQ0EsS0FBRyxRQUFPQyxNQUFQLHlDQUFPQSxNQUFQLE9BQWtCLFFBQXJCLEVBQ0NKLElBQUlJLE1BQUo7QUFDRDs7QUFFRDtBQUNBO0FBQ0E7O0FBRUFDLE9BQU9DLE9BQVAsR0FBaUJOLENBQWpCLEM7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTs7O0lBR01PLHdCOzs7Ozs7Ozs7O0VBQWlDQyxLOztBQUd2Q0gsT0FBT0MsT0FBUCxHQUFpQkMsd0JBQWpCLEM7Ozs7Ozs7OztBQ05BOztBQUNBOzs7Ozs7QUFFQUgsT0FBT0ssWUFBUCwwQjs7Ozs7Ozs7Ozs7QUNIQTs7Ozs7Ozs7OztBQVVBLENBQUUsVUFBU0MsTUFBVCxFQUFpQjtBQUNqQjs7QUFFQSxNQUFJQyxLQUFLQyxPQUFPQyxTQUFoQjtBQUNBLE1BQUlDLFNBQVNILEdBQUdJLGNBQWhCO0FBQ0EsTUFBSUMsU0FBSixDQUxpQixDQUtGO0FBQ2YsTUFBSUMsVUFBVSxPQUFPQyxNQUFQLEtBQWtCLFVBQWxCLEdBQStCQSxNQUEvQixHQUF3QyxFQUF0RDtBQUNBLE1BQUlDLGlCQUFpQkYsUUFBUUcsUUFBUixJQUFvQixZQUF6QztBQUNBLE1BQUlDLHNCQUFzQkosUUFBUUssYUFBUixJQUF5QixpQkFBbkQ7QUFDQSxNQUFJQyxvQkFBb0JOLFFBQVFPLFdBQVIsSUFBdUIsZUFBL0M7O0FBRUEsTUFBSUMsV0FBVyxnQ0FBT3BCLE1BQVAsT0FBa0IsUUFBakM7QUFDQSxNQUFJcUIsVUFBVWhCLE9BQU9pQixrQkFBckI7QUFDQSxNQUFJRCxPQUFKLEVBQWE7QUFDWCxRQUFJRCxRQUFKLEVBQWM7QUFDWjtBQUNBO0FBQ0FwQixhQUFPQyxPQUFQLEdBQWlCb0IsT0FBakI7QUFDRDtBQUNEO0FBQ0E7QUFDQTtBQUNEOztBQUVEO0FBQ0E7QUFDQUEsWUFBVWhCLE9BQU9pQixrQkFBUCxHQUE0QkYsV0FBV3BCLE9BQU9DLE9BQWxCLEdBQTRCLEVBQWxFOztBQUVBLFdBQVNzQixJQUFULENBQWNDLE9BQWQsRUFBdUJDLE9BQXZCLEVBQWdDQyxJQUFoQyxFQUFzQ0MsV0FBdEMsRUFBbUQ7QUFDakQ7QUFDQSxRQUFJQyxpQkFBaUJILFdBQVdBLFFBQVFqQixTQUFSLFlBQTZCcUIsU0FBeEMsR0FBb0RKLE9BQXBELEdBQThESSxTQUFuRjtBQUNBLFFBQUlDLFlBQVl2QixPQUFPd0IsTUFBUCxDQUFjSCxlQUFlcEIsU0FBN0IsQ0FBaEI7QUFDQSxRQUFJd0IsVUFBVSxJQUFJQyxPQUFKLENBQVlOLGVBQWUsRUFBM0IsQ0FBZDs7QUFFQTtBQUNBO0FBQ0FHLGNBQVVJLE9BQVYsR0FBb0JDLGlCQUFpQlgsT0FBakIsRUFBMEJFLElBQTFCLEVBQWdDTSxPQUFoQyxDQUFwQjs7QUFFQSxXQUFPRixTQUFQO0FBQ0Q7QUFDRFQsVUFBUUUsSUFBUixHQUFlQSxJQUFmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBU2EsUUFBVCxDQUFrQkMsRUFBbEIsRUFBc0JDLEdBQXRCLEVBQTJCQyxHQUEzQixFQUFnQztBQUM5QixRQUFJO0FBQ0YsYUFBTyxFQUFFQyxNQUFNLFFBQVIsRUFBa0JELEtBQUtGLEdBQUdJLElBQUgsQ0FBUUgsR0FBUixFQUFhQyxHQUFiLENBQXZCLEVBQVA7QUFDRCxLQUZELENBRUUsT0FBT0csR0FBUCxFQUFZO0FBQ1osYUFBTyxFQUFFRixNQUFNLE9BQVIsRUFBaUJELEtBQUtHLEdBQXRCLEVBQVA7QUFDRDtBQUNGOztBQUVELE1BQUlDLHlCQUF5QixnQkFBN0I7QUFDQSxNQUFJQyx5QkFBeUIsZ0JBQTdCO0FBQ0EsTUFBSUMsb0JBQW9CLFdBQXhCO0FBQ0EsTUFBSUMsb0JBQW9CLFdBQXhCOztBQUVBO0FBQ0E7QUFDQSxNQUFJQyxtQkFBbUIsRUFBdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFTbEIsU0FBVCxHQUFxQixDQUFFO0FBQ3ZCLFdBQVNtQixpQkFBVCxHQUE2QixDQUFFO0FBQy9CLFdBQVNDLDBCQUFULEdBQXNDLENBQUU7O0FBRXhDO0FBQ0E7QUFDQSxNQUFJQyxvQkFBb0IsRUFBeEI7QUFDQUEsb0JBQWtCcEMsY0FBbEIsSUFBb0MsWUFBWTtBQUM5QyxXQUFPLElBQVA7QUFDRCxHQUZEOztBQUlBLE1BQUlxQyxXQUFXNUMsT0FBTzZDLGNBQXRCO0FBQ0EsTUFBSUMsMEJBQTBCRixZQUFZQSxTQUFTQSxTQUFTRyxPQUFPLEVBQVAsQ0FBVCxDQUFULENBQTFDO0FBQ0EsTUFBSUQsMkJBQ0FBLDRCQUE0Qi9DLEVBRDVCLElBRUFHLE9BQU9nQyxJQUFQLENBQVlZLHVCQUFaLEVBQXFDdkMsY0FBckMsQ0FGSixFQUUwRDtBQUN4RDtBQUNBO0FBQ0FvQyx3QkFBb0JHLHVCQUFwQjtBQUNEOztBQUVELE1BQUlFLEtBQUtOLDJCQUEyQnpDLFNBQTNCLEdBQ1BxQixVQUFVckIsU0FBVixHQUFzQkQsT0FBT3dCLE1BQVAsQ0FBY21CLGlCQUFkLENBRHhCO0FBRUFGLG9CQUFrQnhDLFNBQWxCLEdBQThCK0MsR0FBR0MsV0FBSCxHQUFpQlAsMEJBQS9DO0FBQ0FBLDZCQUEyQk8sV0FBM0IsR0FBeUNSLGlCQUF6QztBQUNBQyw2QkFBMkIvQixpQkFBM0IsSUFDRThCLGtCQUFrQlMsV0FBbEIsR0FBZ0MsbUJBRGxDOztBQUdBO0FBQ0E7QUFDQSxXQUFTQyxxQkFBVCxDQUErQmxELFNBQS9CLEVBQTBDO0FBQ3hDLEtBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsUUFBbEIsRUFBNEJtRCxPQUE1QixDQUFvQyxVQUFTQyxNQUFULEVBQWlCO0FBQ25EcEQsZ0JBQVVvRCxNQUFWLElBQW9CLFVBQVNyQixHQUFULEVBQWM7QUFDaEMsZUFBTyxLQUFLTCxPQUFMLENBQWEwQixNQUFiLEVBQXFCckIsR0FBckIsQ0FBUDtBQUNELE9BRkQ7QUFHRCxLQUpEO0FBS0Q7O0FBRURsQixVQUFRd0MsbUJBQVIsR0FBOEIsVUFBU0MsTUFBVCxFQUFpQjtBQUM3QyxRQUFJQyxPQUFPLE9BQU9ELE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0NBLE9BQU9OLFdBQWxEO0FBQ0EsV0FBT08sT0FDSEEsU0FBU2YsaUJBQVQ7QUFDQTtBQUNBO0FBQ0EsS0FBQ2UsS0FBS04sV0FBTCxJQUFvQk0sS0FBS0MsSUFBMUIsTUFBb0MsbUJBSmpDLEdBS0gsS0FMSjtBQU1ELEdBUkQ7O0FBVUEzQyxVQUFRNEMsSUFBUixHQUFlLFVBQVNILE1BQVQsRUFBaUI7QUFDOUIsUUFBSXZELE9BQU8yRCxjQUFYLEVBQTJCO0FBQ3pCM0QsYUFBTzJELGNBQVAsQ0FBc0JKLE1BQXRCLEVBQThCYiwwQkFBOUI7QUFDRCxLQUZELE1BRU87QUFDTGEsYUFBT0ssU0FBUCxHQUFtQmxCLDBCQUFuQjtBQUNBLFVBQUksRUFBRS9CLHFCQUFxQjRDLE1BQXZCLENBQUosRUFBb0M7QUFDbENBLGVBQU81QyxpQkFBUCxJQUE0QixtQkFBNUI7QUFDRDtBQUNGO0FBQ0Q0QyxXQUFPdEQsU0FBUCxHQUFtQkQsT0FBT3dCLE1BQVAsQ0FBY3dCLEVBQWQsQ0FBbkI7QUFDQSxXQUFPTyxNQUFQO0FBQ0QsR0FYRDs7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBekMsVUFBUStDLEtBQVIsR0FBZ0IsVUFBUzdCLEdBQVQsRUFBYztBQUM1QixXQUFPLEVBQUU4QixTQUFTOUIsR0FBWCxFQUFQO0FBQ0QsR0FGRDs7QUFJQSxXQUFTK0IsYUFBVCxDQUF1QnhDLFNBQXZCLEVBQWtDO0FBQ2hDLGFBQVN5QyxNQUFULENBQWdCWCxNQUFoQixFQUF3QnJCLEdBQXhCLEVBQTZCaUMsT0FBN0IsRUFBc0NDLE1BQXRDLEVBQThDO0FBQzVDLFVBQUlDLFNBQVN0QyxTQUFTTixVQUFVOEIsTUFBVixDQUFULEVBQTRCOUIsU0FBNUIsRUFBdUNTLEdBQXZDLENBQWI7QUFDQSxVQUFJbUMsT0FBT2xDLElBQVAsS0FBZ0IsT0FBcEIsRUFBNkI7QUFDM0JpQyxlQUFPQyxPQUFPbkMsR0FBZDtBQUNELE9BRkQsTUFFTztBQUNMLFlBQUlvQyxTQUFTRCxPQUFPbkMsR0FBcEI7QUFDQSxZQUFJcUMsUUFBUUQsT0FBT0MsS0FBbkI7QUFDQSxZQUFJQSxTQUNBLFFBQU9BLEtBQVAseUNBQU9BLEtBQVAsT0FBaUIsUUFEakIsSUFFQW5FLE9BQU9nQyxJQUFQLENBQVltQyxLQUFaLEVBQW1CLFNBQW5CLENBRkosRUFFbUM7QUFDakMsaUJBQU9DLFFBQVFMLE9BQVIsQ0FBZ0JJLE1BQU1QLE9BQXRCLEVBQStCUyxJQUEvQixDQUFvQyxVQUFTRixLQUFULEVBQWdCO0FBQ3pETCxtQkFBTyxNQUFQLEVBQWVLLEtBQWYsRUFBc0JKLE9BQXRCLEVBQStCQyxNQUEvQjtBQUNELFdBRk0sRUFFSixVQUFTL0IsR0FBVCxFQUFjO0FBQ2Y2QixtQkFBTyxPQUFQLEVBQWdCN0IsR0FBaEIsRUFBcUI4QixPQUFyQixFQUE4QkMsTUFBOUI7QUFDRCxXQUpNLENBQVA7QUFLRDs7QUFFRCxlQUFPSSxRQUFRTCxPQUFSLENBQWdCSSxLQUFoQixFQUF1QkUsSUFBdkIsQ0FBNEIsVUFBU0MsU0FBVCxFQUFvQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUosaUJBQU9DLEtBQVAsR0FBZUcsU0FBZjtBQUNBUCxrQkFBUUcsTUFBUjtBQUNELFNBbEJNLEVBa0JKRixNQWxCSSxDQUFQO0FBbUJEO0FBQ0Y7O0FBRUQsUUFBSU8sZUFBSjs7QUFFQSxhQUFTQyxPQUFULENBQWlCckIsTUFBakIsRUFBeUJyQixHQUF6QixFQUE4QjtBQUM1QixlQUFTMkMsMEJBQVQsR0FBc0M7QUFDcEMsZUFBTyxJQUFJTCxPQUFKLENBQVksVUFBU0wsT0FBVCxFQUFrQkMsTUFBbEIsRUFBMEI7QUFDM0NGLGlCQUFPWCxNQUFQLEVBQWVyQixHQUFmLEVBQW9CaUMsT0FBcEIsRUFBNkJDLE1BQTdCO0FBQ0QsU0FGTSxDQUFQO0FBR0Q7O0FBRUQsYUFBT087QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsd0JBQWtCQSxnQkFBZ0JGLElBQWhCLENBQ2hCSSwwQkFEZ0I7QUFFaEI7QUFDQTtBQUNBQSxnQ0FKZ0IsQ0FBbEIsR0FLSUEsNEJBbEJOO0FBbUJEOztBQUVEO0FBQ0E7QUFDQSxTQUFLaEQsT0FBTCxHQUFlK0MsT0FBZjtBQUNEOztBQUVEdkIsd0JBQXNCWSxjQUFjOUQsU0FBcEM7QUFDQThELGdCQUFjOUQsU0FBZCxDQUF3QlEsbUJBQXhCLElBQStDLFlBQVk7QUFDekQsV0FBTyxJQUFQO0FBQ0QsR0FGRDtBQUdBSyxVQUFRaUQsYUFBUixHQUF3QkEsYUFBeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0FqRCxVQUFROEQsS0FBUixHQUFnQixVQUFTM0QsT0FBVCxFQUFrQkMsT0FBbEIsRUFBMkJDLElBQTNCLEVBQWlDQyxXQUFqQyxFQUE4QztBQUM1RCxRQUFJeUQsT0FBTyxJQUFJZCxhQUFKLENBQ1QvQyxLQUFLQyxPQUFMLEVBQWNDLE9BQWQsRUFBdUJDLElBQXZCLEVBQTZCQyxXQUE3QixDQURTLENBQVg7O0FBSUEsV0FBT04sUUFBUXdDLG1CQUFSLENBQTRCcEMsT0FBNUIsSUFDSDJELElBREcsQ0FDRTtBQURGLE1BRUhBLEtBQUtDLElBQUwsR0FBWVAsSUFBWixDQUFpQixVQUFTSCxNQUFULEVBQWlCO0FBQ2hDLGFBQU9BLE9BQU9XLElBQVAsR0FBY1gsT0FBT0MsS0FBckIsR0FBNkJRLEtBQUtDLElBQUwsRUFBcEM7QUFDRCxLQUZELENBRko7QUFLRCxHQVZEOztBQVlBLFdBQVNsRCxnQkFBVCxDQUEwQlgsT0FBMUIsRUFBbUNFLElBQW5DLEVBQXlDTSxPQUF6QyxFQUFrRDtBQUNoRCxRQUFJdUQsUUFBUTVDLHNCQUFaOztBQUVBLFdBQU8sU0FBUzRCLE1BQVQsQ0FBZ0JYLE1BQWhCLEVBQXdCckIsR0FBeEIsRUFBNkI7QUFDbEMsVUFBSWdELFVBQVUxQyxpQkFBZCxFQUFpQztBQUMvQixjQUFNLElBQUkxQyxLQUFKLENBQVUsOEJBQVYsQ0FBTjtBQUNEOztBQUVELFVBQUlvRixVQUFVekMsaUJBQWQsRUFBaUM7QUFDL0IsWUFBSWMsV0FBVyxPQUFmLEVBQXdCO0FBQ3RCLGdCQUFNckIsR0FBTjtBQUNEOztBQUVEO0FBQ0E7QUFDQSxlQUFPaUQsWUFBUDtBQUNEOztBQUVEeEQsY0FBUTRCLE1BQVIsR0FBaUJBLE1BQWpCO0FBQ0E1QixjQUFRTyxHQUFSLEdBQWNBLEdBQWQ7O0FBRUEsYUFBTyxJQUFQLEVBQWE7QUFDWCxZQUFJa0QsV0FBV3pELFFBQVF5RCxRQUF2QjtBQUNBLFlBQUlBLFFBQUosRUFBYztBQUNaLGNBQUlDLGlCQUFpQkMsb0JBQW9CRixRQUFwQixFQUE4QnpELE9BQTlCLENBQXJCO0FBQ0EsY0FBSTBELGNBQUosRUFBb0I7QUFDbEIsZ0JBQUlBLG1CQUFtQjNDLGdCQUF2QixFQUF5QztBQUN6QyxtQkFBTzJDLGNBQVA7QUFDRDtBQUNGOztBQUVELFlBQUkxRCxRQUFRNEIsTUFBUixLQUFtQixNQUF2QixFQUErQjtBQUM3QjtBQUNBO0FBQ0E1QixrQkFBUTRELElBQVIsR0FBZTVELFFBQVE2RCxLQUFSLEdBQWdCN0QsUUFBUU8sR0FBdkM7QUFFRCxTQUxELE1BS08sSUFBSVAsUUFBUTRCLE1BQVIsS0FBbUIsT0FBdkIsRUFBZ0M7QUFDckMsY0FBSTJCLFVBQVU1QyxzQkFBZCxFQUFzQztBQUNwQzRDLG9CQUFRekMsaUJBQVI7QUFDQSxrQkFBTWQsUUFBUU8sR0FBZDtBQUNEOztBQUVEUCxrQkFBUThELGlCQUFSLENBQTBCOUQsUUFBUU8sR0FBbEM7QUFFRCxTQVJNLE1BUUEsSUFBSVAsUUFBUTRCLE1BQVIsS0FBbUIsUUFBdkIsRUFBaUM7QUFDdEM1QixrQkFBUStELE1BQVIsQ0FBZSxRQUFmLEVBQXlCL0QsUUFBUU8sR0FBakM7QUFDRDs7QUFFRGdELGdCQUFRMUMsaUJBQVI7O0FBRUEsWUFBSTZCLFNBQVN0QyxTQUFTWixPQUFULEVBQWtCRSxJQUFsQixFQUF3Qk0sT0FBeEIsQ0FBYjtBQUNBLFlBQUkwQyxPQUFPbEMsSUFBUCxLQUFnQixRQUFwQixFQUE4QjtBQUM1QjtBQUNBO0FBQ0ErQyxrQkFBUXZELFFBQVFzRCxJQUFSLEdBQ0p4QyxpQkFESSxHQUVKRixzQkFGSjs7QUFJQSxjQUFJOEIsT0FBT25DLEdBQVAsS0FBZVEsZ0JBQW5CLEVBQXFDO0FBQ25DO0FBQ0Q7O0FBRUQsaUJBQU87QUFDTDZCLG1CQUFPRixPQUFPbkMsR0FEVDtBQUVMK0Msa0JBQU10RCxRQUFRc0Q7QUFGVCxXQUFQO0FBS0QsU0FoQkQsTUFnQk8sSUFBSVosT0FBT2xDLElBQVAsS0FBZ0IsT0FBcEIsRUFBNkI7QUFDbEMrQyxrQkFBUXpDLGlCQUFSO0FBQ0E7QUFDQTtBQUNBZCxrQkFBUTRCLE1BQVIsR0FBaUIsT0FBakI7QUFDQTVCLGtCQUFRTyxHQUFSLEdBQWNtQyxPQUFPbkMsR0FBckI7QUFDRDtBQUNGO0FBQ0YsS0F4RUQ7QUF5RUQ7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFTb0QsbUJBQVQsQ0FBNkJGLFFBQTdCLEVBQXVDekQsT0FBdkMsRUFBZ0Q7QUFDOUMsUUFBSTRCLFNBQVM2QixTQUFTMUUsUUFBVCxDQUFrQmlCLFFBQVE0QixNQUExQixDQUFiO0FBQ0EsUUFBSUEsV0FBV2pELFNBQWYsRUFBMEI7QUFDeEI7QUFDQTtBQUNBcUIsY0FBUXlELFFBQVIsR0FBbUIsSUFBbkI7O0FBRUEsVUFBSXpELFFBQVE0QixNQUFSLEtBQW1CLE9BQXZCLEVBQWdDO0FBQzlCLFlBQUk2QixTQUFTMUUsUUFBVCxDQUFrQmlGLE1BQXRCLEVBQThCO0FBQzVCO0FBQ0E7QUFDQWhFLGtCQUFRNEIsTUFBUixHQUFpQixRQUFqQjtBQUNBNUIsa0JBQVFPLEdBQVIsR0FBYzVCLFNBQWQ7QUFDQWdGLDhCQUFvQkYsUUFBcEIsRUFBOEJ6RCxPQUE5Qjs7QUFFQSxjQUFJQSxRQUFRNEIsTUFBUixLQUFtQixPQUF2QixFQUFnQztBQUM5QjtBQUNBO0FBQ0EsbUJBQU9iLGdCQUFQO0FBQ0Q7QUFDRjs7QUFFRGYsZ0JBQVE0QixNQUFSLEdBQWlCLE9BQWpCO0FBQ0E1QixnQkFBUU8sR0FBUixHQUFjLElBQUkwRCxTQUFKLENBQ1osZ0RBRFksQ0FBZDtBQUVEOztBQUVELGFBQU9sRCxnQkFBUDtBQUNEOztBQUVELFFBQUkyQixTQUFTdEMsU0FBU3dCLE1BQVQsRUFBaUI2QixTQUFTMUUsUUFBMUIsRUFBb0NpQixRQUFRTyxHQUE1QyxDQUFiOztBQUVBLFFBQUltQyxPQUFPbEMsSUFBUCxLQUFnQixPQUFwQixFQUE2QjtBQUMzQlIsY0FBUTRCLE1BQVIsR0FBaUIsT0FBakI7QUFDQTVCLGNBQVFPLEdBQVIsR0FBY21DLE9BQU9uQyxHQUFyQjtBQUNBUCxjQUFReUQsUUFBUixHQUFtQixJQUFuQjtBQUNBLGFBQU8xQyxnQkFBUDtBQUNEOztBQUVELFFBQUltRCxPQUFPeEIsT0FBT25DLEdBQWxCOztBQUVBLFFBQUksQ0FBRTJELElBQU4sRUFBWTtBQUNWbEUsY0FBUTRCLE1BQVIsR0FBaUIsT0FBakI7QUFDQTVCLGNBQVFPLEdBQVIsR0FBYyxJQUFJMEQsU0FBSixDQUFjLGtDQUFkLENBQWQ7QUFDQWpFLGNBQVF5RCxRQUFSLEdBQW1CLElBQW5CO0FBQ0EsYUFBTzFDLGdCQUFQO0FBQ0Q7O0FBRUQsUUFBSW1ELEtBQUtaLElBQVQsRUFBZTtBQUNiO0FBQ0E7QUFDQXRELGNBQVF5RCxTQUFTVSxVQUFqQixJQUErQkQsS0FBS3RCLEtBQXBDOztBQUVBO0FBQ0E1QyxjQUFRcUQsSUFBUixHQUFlSSxTQUFTVyxPQUF4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFJcEUsUUFBUTRCLE1BQVIsS0FBbUIsUUFBdkIsRUFBaUM7QUFDL0I1QixnQkFBUTRCLE1BQVIsR0FBaUIsTUFBakI7QUFDQTVCLGdCQUFRTyxHQUFSLEdBQWM1QixTQUFkO0FBQ0Q7QUFFRixLQW5CRCxNQW1CTztBQUNMO0FBQ0EsYUFBT3VGLElBQVA7QUFDRDs7QUFFRDtBQUNBO0FBQ0FsRSxZQUFReUQsUUFBUixHQUFtQixJQUFuQjtBQUNBLFdBQU8xQyxnQkFBUDtBQUNEOztBQUVEO0FBQ0E7QUFDQVcsd0JBQXNCSCxFQUF0Qjs7QUFFQUEsS0FBR3JDLGlCQUFILElBQXdCLFdBQXhCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQXFDLEtBQUd6QyxjQUFILElBQXFCLFlBQVc7QUFDOUIsV0FBTyxJQUFQO0FBQ0QsR0FGRDs7QUFJQXlDLEtBQUc4QyxRQUFILEdBQWMsWUFBVztBQUN2QixXQUFPLG9CQUFQO0FBQ0QsR0FGRDs7QUFJQSxXQUFTQyxZQUFULENBQXNCQyxJQUF0QixFQUE0QjtBQUMxQixRQUFJQyxRQUFRLEVBQUVDLFFBQVFGLEtBQUssQ0FBTCxDQUFWLEVBQVo7O0FBRUEsUUFBSSxLQUFLQSxJQUFULEVBQWU7QUFDYkMsWUFBTUUsUUFBTixHQUFpQkgsS0FBSyxDQUFMLENBQWpCO0FBQ0Q7O0FBRUQsUUFBSSxLQUFLQSxJQUFULEVBQWU7QUFDYkMsWUFBTUcsVUFBTixHQUFtQkosS0FBSyxDQUFMLENBQW5CO0FBQ0FDLFlBQU1JLFFBQU4sR0FBaUJMLEtBQUssQ0FBTCxDQUFqQjtBQUNEOztBQUVELFNBQUtNLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCTixLQUFyQjtBQUNEOztBQUVELFdBQVNPLGFBQVQsQ0FBdUJQLEtBQXZCLEVBQThCO0FBQzVCLFFBQUk5QixTQUFTOEIsTUFBTVEsVUFBTixJQUFvQixFQUFqQztBQUNBdEMsV0FBT2xDLElBQVAsR0FBYyxRQUFkO0FBQ0EsV0FBT2tDLE9BQU9uQyxHQUFkO0FBQ0FpRSxVQUFNUSxVQUFOLEdBQW1CdEMsTUFBbkI7QUFDRDs7QUFFRCxXQUFTekMsT0FBVCxDQUFpQk4sV0FBakIsRUFBOEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsU0FBS2tGLFVBQUwsR0FBa0IsQ0FBQyxFQUFFSixRQUFRLE1BQVYsRUFBRCxDQUFsQjtBQUNBOUUsZ0JBQVlnQyxPQUFaLENBQW9CMkMsWUFBcEIsRUFBa0MsSUFBbEM7QUFDQSxTQUFLVyxLQUFMLENBQVcsSUFBWDtBQUNEOztBQUVENUYsVUFBUTZGLElBQVIsR0FBZSxVQUFTQyxNQUFULEVBQWlCO0FBQzlCLFFBQUlELE9BQU8sRUFBWDtBQUNBLFNBQUssSUFBSUUsR0FBVCxJQUFnQkQsTUFBaEIsRUFBd0I7QUFDdEJELFdBQUtKLElBQUwsQ0FBVU0sR0FBVjtBQUNEO0FBQ0RGLFNBQUtHLE9BQUw7O0FBRUE7QUFDQTtBQUNBLFdBQU8sU0FBU2hDLElBQVQsR0FBZ0I7QUFDckIsYUFBTzZCLEtBQUtJLE1BQVosRUFBb0I7QUFDbEIsWUFBSUYsTUFBTUYsS0FBS0ssR0FBTCxFQUFWO0FBQ0EsWUFBSUgsT0FBT0QsTUFBWCxFQUFtQjtBQUNqQjlCLGVBQUtULEtBQUwsR0FBYXdDLEdBQWI7QUFDQS9CLGVBQUtDLElBQUwsR0FBWSxLQUFaO0FBQ0EsaUJBQU9ELElBQVA7QUFDRDtBQUNGOztBQUVEO0FBQ0E7QUFDQTtBQUNBQSxXQUFLQyxJQUFMLEdBQVksSUFBWjtBQUNBLGFBQU9ELElBQVA7QUFDRCxLQWZEO0FBZ0JELEdBekJEOztBQTJCQSxXQUFTL0IsTUFBVCxDQUFnQmtFLFFBQWhCLEVBQTBCO0FBQ3hCLFFBQUlBLFFBQUosRUFBYztBQUNaLFVBQUlDLGlCQUFpQkQsU0FBUzFHLGNBQVQsQ0FBckI7QUFDQSxVQUFJMkcsY0FBSixFQUFvQjtBQUNsQixlQUFPQSxlQUFlaEYsSUFBZixDQUFvQitFLFFBQXBCLENBQVA7QUFDRDs7QUFFRCxVQUFJLE9BQU9BLFNBQVNuQyxJQUFoQixLQUF5QixVQUE3QixFQUF5QztBQUN2QyxlQUFPbUMsUUFBUDtBQUNEOztBQUVELFVBQUksQ0FBQ0UsTUFBTUYsU0FBU0YsTUFBZixDQUFMLEVBQTZCO0FBQzNCLFlBQUlLLElBQUksQ0FBQyxDQUFUO0FBQUEsWUFBWXRDLE9BQU8sU0FBU0EsSUFBVCxHQUFnQjtBQUNqQyxpQkFBTyxFQUFFc0MsQ0FBRixHQUFNSCxTQUFTRixNQUF0QixFQUE4QjtBQUM1QixnQkFBSTdHLE9BQU9nQyxJQUFQLENBQVkrRSxRQUFaLEVBQXNCRyxDQUF0QixDQUFKLEVBQThCO0FBQzVCdEMsbUJBQUtULEtBQUwsR0FBYTRDLFNBQVNHLENBQVQsQ0FBYjtBQUNBdEMsbUJBQUtDLElBQUwsR0FBWSxLQUFaO0FBQ0EscUJBQU9ELElBQVA7QUFDRDtBQUNGOztBQUVEQSxlQUFLVCxLQUFMLEdBQWFqRSxTQUFiO0FBQ0EwRSxlQUFLQyxJQUFMLEdBQVksSUFBWjs7QUFFQSxpQkFBT0QsSUFBUDtBQUNELFNBYkQ7O0FBZUEsZUFBT0EsS0FBS0EsSUFBTCxHQUFZQSxJQUFuQjtBQUNEO0FBQ0Y7O0FBRUQ7QUFDQSxXQUFPLEVBQUVBLE1BQU1HLFVBQVIsRUFBUDtBQUNEO0FBQ0RuRSxVQUFRaUMsTUFBUixHQUFpQkEsTUFBakI7O0FBRUEsV0FBU2tDLFVBQVQsR0FBc0I7QUFDcEIsV0FBTyxFQUFFWixPQUFPakUsU0FBVCxFQUFvQjJFLE1BQU0sSUFBMUIsRUFBUDtBQUNEOztBQUVEckQsVUFBUXpCLFNBQVIsR0FBb0I7QUFDbEJnRCxpQkFBYXZCLE9BREs7O0FBR2xCZ0YsV0FBTyxlQUFTVyxhQUFULEVBQXdCO0FBQzdCLFdBQUtDLElBQUwsR0FBWSxDQUFaO0FBQ0EsV0FBS3hDLElBQUwsR0FBWSxDQUFaO0FBQ0E7QUFDQTtBQUNBLFdBQUtPLElBQUwsR0FBWSxLQUFLQyxLQUFMLEdBQWFsRixTQUF6QjtBQUNBLFdBQUsyRSxJQUFMLEdBQVksS0FBWjtBQUNBLFdBQUtHLFFBQUwsR0FBZ0IsSUFBaEI7O0FBRUEsV0FBSzdCLE1BQUwsR0FBYyxNQUFkO0FBQ0EsV0FBS3JCLEdBQUwsR0FBVzVCLFNBQVg7O0FBRUEsV0FBS2tHLFVBQUwsQ0FBZ0JsRCxPQUFoQixDQUF3Qm9ELGFBQXhCOztBQUVBLFVBQUksQ0FBQ2EsYUFBTCxFQUFvQjtBQUNsQixhQUFLLElBQUk1RCxJQUFULElBQWlCLElBQWpCLEVBQXVCO0FBQ3JCO0FBQ0EsY0FBSUEsS0FBSzhELE1BQUwsQ0FBWSxDQUFaLE1BQW1CLEdBQW5CLElBQ0FySCxPQUFPZ0MsSUFBUCxDQUFZLElBQVosRUFBa0J1QixJQUFsQixDQURBLElBRUEsQ0FBQzBELE1BQU0sQ0FBQzFELEtBQUsrRCxLQUFMLENBQVcsQ0FBWCxDQUFQLENBRkwsRUFFNEI7QUFDMUIsaUJBQUsvRCxJQUFMLElBQWFyRCxTQUFiO0FBQ0Q7QUFDRjtBQUNGO0FBQ0YsS0EzQmlCOztBQTZCbEJxSCxVQUFNLGdCQUFXO0FBQ2YsV0FBSzFDLElBQUwsR0FBWSxJQUFaOztBQUVBLFVBQUkyQyxZQUFZLEtBQUtwQixVQUFMLENBQWdCLENBQWhCLENBQWhCO0FBQ0EsVUFBSXFCLGFBQWFELFVBQVVqQixVQUEzQjtBQUNBLFVBQUlrQixXQUFXMUYsSUFBWCxLQUFvQixPQUF4QixFQUFpQztBQUMvQixjQUFNMEYsV0FBVzNGLEdBQWpCO0FBQ0Q7O0FBRUQsYUFBTyxLQUFLNEYsSUFBWjtBQUNELEtBdkNpQjs7QUF5Q2xCckMsdUJBQW1CLDJCQUFTc0MsU0FBVCxFQUFvQjtBQUNyQyxVQUFJLEtBQUs5QyxJQUFULEVBQWU7QUFDYixjQUFNOEMsU0FBTjtBQUNEOztBQUVELFVBQUlwRyxVQUFVLElBQWQ7QUFDQSxlQUFTcUcsTUFBVCxDQUFnQkMsR0FBaEIsRUFBcUJDLE1BQXJCLEVBQTZCO0FBQzNCN0QsZUFBT2xDLElBQVAsR0FBYyxPQUFkO0FBQ0FrQyxlQUFPbkMsR0FBUCxHQUFhNkYsU0FBYjtBQUNBcEcsZ0JBQVFxRCxJQUFSLEdBQWVpRCxHQUFmOztBQUVBLFlBQUlDLE1BQUosRUFBWTtBQUNWO0FBQ0E7QUFDQXZHLGtCQUFRNEIsTUFBUixHQUFpQixNQUFqQjtBQUNBNUIsa0JBQVFPLEdBQVIsR0FBYzVCLFNBQWQ7QUFDRDs7QUFFRCxlQUFPLENBQUMsQ0FBRTRILE1BQVY7QUFDRDs7QUFFRCxXQUFLLElBQUlaLElBQUksS0FBS2QsVUFBTCxDQUFnQlMsTUFBaEIsR0FBeUIsQ0FBdEMsRUFBeUNLLEtBQUssQ0FBOUMsRUFBaUQsRUFBRUEsQ0FBbkQsRUFBc0Q7QUFDcEQsWUFBSW5CLFFBQVEsS0FBS0ssVUFBTCxDQUFnQmMsQ0FBaEIsQ0FBWjtBQUNBLFlBQUlqRCxTQUFTOEIsTUFBTVEsVUFBbkI7O0FBRUEsWUFBSVIsTUFBTUMsTUFBTixLQUFpQixNQUFyQixFQUE2QjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxpQkFBTzRCLE9BQU8sS0FBUCxDQUFQO0FBQ0Q7O0FBRUQsWUFBSTdCLE1BQU1DLE1BQU4sSUFBZ0IsS0FBS29CLElBQXpCLEVBQStCO0FBQzdCLGNBQUlXLFdBQVcvSCxPQUFPZ0MsSUFBUCxDQUFZK0QsS0FBWixFQUFtQixVQUFuQixDQUFmO0FBQ0EsY0FBSWlDLGFBQWFoSSxPQUFPZ0MsSUFBUCxDQUFZK0QsS0FBWixFQUFtQixZQUFuQixDQUFqQjs7QUFFQSxjQUFJZ0MsWUFBWUMsVUFBaEIsRUFBNEI7QUFDMUIsZ0JBQUksS0FBS1osSUFBTCxHQUFZckIsTUFBTUUsUUFBdEIsRUFBZ0M7QUFDOUIscUJBQU8yQixPQUFPN0IsTUFBTUUsUUFBYixFQUF1QixJQUF2QixDQUFQO0FBQ0QsYUFGRCxNQUVPLElBQUksS0FBS21CLElBQUwsR0FBWXJCLE1BQU1HLFVBQXRCLEVBQWtDO0FBQ3ZDLHFCQUFPMEIsT0FBTzdCLE1BQU1HLFVBQWIsQ0FBUDtBQUNEO0FBRUYsV0FQRCxNQU9PLElBQUk2QixRQUFKLEVBQWM7QUFDbkIsZ0JBQUksS0FBS1gsSUFBTCxHQUFZckIsTUFBTUUsUUFBdEIsRUFBZ0M7QUFDOUIscUJBQU8yQixPQUFPN0IsTUFBTUUsUUFBYixFQUF1QixJQUF2QixDQUFQO0FBQ0Q7QUFFRixXQUxNLE1BS0EsSUFBSStCLFVBQUosRUFBZ0I7QUFDckIsZ0JBQUksS0FBS1osSUFBTCxHQUFZckIsTUFBTUcsVUFBdEIsRUFBa0M7QUFDaEMscUJBQU8wQixPQUFPN0IsTUFBTUcsVUFBYixDQUFQO0FBQ0Q7QUFFRixXQUxNLE1BS0E7QUFDTCxrQkFBTSxJQUFJeEcsS0FBSixDQUFVLHdDQUFWLENBQU47QUFDRDtBQUNGO0FBQ0Y7QUFDRixLQW5HaUI7O0FBcUdsQjRGLFlBQVEsZ0JBQVN2RCxJQUFULEVBQWVELEdBQWYsRUFBb0I7QUFDMUIsV0FBSyxJQUFJb0YsSUFBSSxLQUFLZCxVQUFMLENBQWdCUyxNQUFoQixHQUF5QixDQUF0QyxFQUF5Q0ssS0FBSyxDQUE5QyxFQUFpRCxFQUFFQSxDQUFuRCxFQUFzRDtBQUNwRCxZQUFJbkIsUUFBUSxLQUFLSyxVQUFMLENBQWdCYyxDQUFoQixDQUFaO0FBQ0EsWUFBSW5CLE1BQU1DLE1BQU4sSUFBZ0IsS0FBS29CLElBQXJCLElBQ0FwSCxPQUFPZ0MsSUFBUCxDQUFZK0QsS0FBWixFQUFtQixZQUFuQixDQURBLElBRUEsS0FBS3FCLElBQUwsR0FBWXJCLE1BQU1HLFVBRnRCLEVBRWtDO0FBQ2hDLGNBQUkrQixlQUFlbEMsS0FBbkI7QUFDQTtBQUNEO0FBQ0Y7O0FBRUQsVUFBSWtDLGlCQUNDbEcsU0FBUyxPQUFULElBQ0FBLFNBQVMsVUFGVixLQUdBa0csYUFBYWpDLE1BQWIsSUFBdUJsRSxHQUh2QixJQUlBQSxPQUFPbUcsYUFBYS9CLFVBSnhCLEVBSW9DO0FBQ2xDO0FBQ0E7QUFDQStCLHVCQUFlLElBQWY7QUFDRDs7QUFFRCxVQUFJaEUsU0FBU2dFLGVBQWVBLGFBQWExQixVQUE1QixHQUF5QyxFQUF0RDtBQUNBdEMsYUFBT2xDLElBQVAsR0FBY0EsSUFBZDtBQUNBa0MsYUFBT25DLEdBQVAsR0FBYUEsR0FBYjs7QUFFQSxVQUFJbUcsWUFBSixFQUFrQjtBQUNoQixhQUFLOUUsTUFBTCxHQUFjLE1BQWQ7QUFDQSxhQUFLeUIsSUFBTCxHQUFZcUQsYUFBYS9CLFVBQXpCO0FBQ0EsZUFBTzVELGdCQUFQO0FBQ0Q7O0FBRUQsYUFBTyxLQUFLNEYsUUFBTCxDQUFjakUsTUFBZCxDQUFQO0FBQ0QsS0FySWlCOztBQXVJbEJpRSxjQUFVLGtCQUFTakUsTUFBVCxFQUFpQmtDLFFBQWpCLEVBQTJCO0FBQ25DLFVBQUlsQyxPQUFPbEMsSUFBUCxLQUFnQixPQUFwQixFQUE2QjtBQUMzQixjQUFNa0MsT0FBT25DLEdBQWI7QUFDRDs7QUFFRCxVQUFJbUMsT0FBT2xDLElBQVAsS0FBZ0IsT0FBaEIsSUFDQWtDLE9BQU9sQyxJQUFQLEtBQWdCLFVBRHBCLEVBQ2dDO0FBQzlCLGFBQUs2QyxJQUFMLEdBQVlYLE9BQU9uQyxHQUFuQjtBQUNELE9BSEQsTUFHTyxJQUFJbUMsT0FBT2xDLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDbkMsYUFBSzJGLElBQUwsR0FBWSxLQUFLNUYsR0FBTCxHQUFXbUMsT0FBT25DLEdBQTlCO0FBQ0EsYUFBS3FCLE1BQUwsR0FBYyxRQUFkO0FBQ0EsYUFBS3lCLElBQUwsR0FBWSxLQUFaO0FBQ0QsT0FKTSxNQUlBLElBQUlYLE9BQU9sQyxJQUFQLEtBQWdCLFFBQWhCLElBQTRCb0UsUUFBaEMsRUFBMEM7QUFDL0MsYUFBS3ZCLElBQUwsR0FBWXVCLFFBQVo7QUFDRDs7QUFFRCxhQUFPN0QsZ0JBQVA7QUFDRCxLQXhKaUI7O0FBMEpsQjZGLFlBQVEsZ0JBQVNqQyxVQUFULEVBQXFCO0FBQzNCLFdBQUssSUFBSWdCLElBQUksS0FBS2QsVUFBTCxDQUFnQlMsTUFBaEIsR0FBeUIsQ0FBdEMsRUFBeUNLLEtBQUssQ0FBOUMsRUFBaUQsRUFBRUEsQ0FBbkQsRUFBc0Q7QUFDcEQsWUFBSW5CLFFBQVEsS0FBS0ssVUFBTCxDQUFnQmMsQ0FBaEIsQ0FBWjtBQUNBLFlBQUluQixNQUFNRyxVQUFOLEtBQXFCQSxVQUF6QixFQUFxQztBQUNuQyxlQUFLZ0MsUUFBTCxDQUFjbkMsTUFBTVEsVUFBcEIsRUFBZ0NSLE1BQU1JLFFBQXRDO0FBQ0FHLHdCQUFjUCxLQUFkO0FBQ0EsaUJBQU96RCxnQkFBUDtBQUNEO0FBQ0Y7QUFDRixLQW5LaUI7O0FBcUtsQixhQUFTLGdCQUFTMEQsTUFBVCxFQUFpQjtBQUN4QixXQUFLLElBQUlrQixJQUFJLEtBQUtkLFVBQUwsQ0FBZ0JTLE1BQWhCLEdBQXlCLENBQXRDLEVBQXlDSyxLQUFLLENBQTlDLEVBQWlELEVBQUVBLENBQW5ELEVBQXNEO0FBQ3BELFlBQUluQixRQUFRLEtBQUtLLFVBQUwsQ0FBZ0JjLENBQWhCLENBQVo7QUFDQSxZQUFJbkIsTUFBTUMsTUFBTixLQUFpQkEsTUFBckIsRUFBNkI7QUFDM0IsY0FBSS9CLFNBQVM4QixNQUFNUSxVQUFuQjtBQUNBLGNBQUl0QyxPQUFPbEMsSUFBUCxLQUFnQixPQUFwQixFQUE2QjtBQUMzQixnQkFBSXFHLFNBQVNuRSxPQUFPbkMsR0FBcEI7QUFDQXdFLDBCQUFjUCxLQUFkO0FBQ0Q7QUFDRCxpQkFBT3FDLE1BQVA7QUFDRDtBQUNGOztBQUVEO0FBQ0E7QUFDQSxZQUFNLElBQUkxSSxLQUFKLENBQVUsdUJBQVYsQ0FBTjtBQUNELEtBckxpQjs7QUF1TGxCMkksbUJBQWUsdUJBQVN0QixRQUFULEVBQW1CckIsVUFBbkIsRUFBK0JDLE9BQS9CLEVBQXdDO0FBQ3JELFdBQUtYLFFBQUwsR0FBZ0I7QUFDZDFFLGtCQUFVdUMsT0FBT2tFLFFBQVAsQ0FESTtBQUVkckIsb0JBQVlBLFVBRkU7QUFHZEMsaUJBQVNBO0FBSEssT0FBaEI7O0FBTUEsVUFBSSxLQUFLeEMsTUFBTCxLQUFnQixNQUFwQixFQUE0QjtBQUMxQjtBQUNBO0FBQ0EsYUFBS3JCLEdBQUwsR0FBVzVCLFNBQVg7QUFDRDs7QUFFRCxhQUFPb0MsZ0JBQVA7QUFDRDtBQXJNaUIsR0FBcEI7QUF1TUQsQ0Exc0JBO0FBMnNCQztBQUNBO0FBQ0E7QUFDQyxZQUFXO0FBQUUsU0FBTyxJQUFQO0FBQWEsQ0FBM0IsTUFBa0NuRCxTQUFTLGFBQVQsR0E5c0JuQyxDQUFELEM7Ozs7Ozs7Ozs7QUNWQUksT0FBT0MsT0FBUCxHQUFpQixVQUFTRCxNQUFULEVBQWlCO0FBQ2pDLEtBQUcsQ0FBQ0EsT0FBTytJLGVBQVgsRUFBNEI7QUFDM0IvSSxTQUFPZ0osU0FBUCxHQUFtQixZQUFXLENBQUUsQ0FBaEM7QUFDQWhKLFNBQU9pSixLQUFQLEdBQWUsRUFBZjtBQUNBO0FBQ0EsTUFBRyxDQUFDakosT0FBT2tKLFFBQVgsRUFBcUJsSixPQUFPa0osUUFBUCxHQUFrQixFQUFsQjtBQUNyQjNJLFNBQU80SSxjQUFQLENBQXNCbkosTUFBdEIsRUFBOEIsUUFBOUIsRUFBd0M7QUFDdkNvSixlQUFZLElBRDJCO0FBRXZDQyxRQUFLLGVBQVc7QUFDZixXQUFPckosT0FBT3NKLENBQWQ7QUFDQTtBQUpzQyxHQUF4QztBQU1BL0ksU0FBTzRJLGNBQVAsQ0FBc0JuSixNQUF0QixFQUE4QixJQUE5QixFQUFvQztBQUNuQ29KLGVBQVksSUFEdUI7QUFFbkNDLFFBQUssZUFBVztBQUNmLFdBQU9ySixPQUFPMkgsQ0FBZDtBQUNBO0FBSmtDLEdBQXBDO0FBTUEzSCxTQUFPK0ksZUFBUCxHQUF5QixDQUF6QjtBQUNBO0FBQ0QsUUFBTy9JLE1BQVA7QUFDQSxDQXJCRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsbUJBQUF1SixDQUFRLENBQVI7QUFDQSxtQkFBQUEsQ0FBUSxDQUFSO0FBQ0EsbUJBQUFBLENBQVEsQ0FBUjs7QUFFQSxJQUFNQyw0QkFBNEIsbUJBQUFELENBQVEsRUFBUixDQUFsQztBQUNBLElBQU1FLHNDQUFzQyxtQkFBQUYsQ0FBUSxFQUFSLENBQTVDO0FBQ0EsSUFBTUcseUJBQXlCLG1CQUFBSCxDQUFRLEVBQVIsQ0FBL0I7O0FBRUEsSUFBTUksZUFBZTtBQUNqQixXQUFPLEdBRFU7QUFFakIsV0FBTyxHQUZVO0FBR2pCLFdBQU8sR0FIVTtBQUlqQixXQUFPLEdBSlU7QUFLakIsV0FBTyxHQUxVO0FBTWpCLFdBQU8sR0FOVTtBQU9qQixXQUFPLEdBUFU7QUFRakIsV0FBTyxHQVJVO0FBU2pCLFdBQU8sR0FUVTtBQVVqQixXQUFPO0FBVlUsQ0FBckI7O0lBYU12SixZO0FBQ0YsMEJBQVl3SixlQUFaLEVBQTZCO0FBQUE7O0FBQ3pCLGFBQUtDLGdCQUFMLEdBQXdCdEosT0FBT3VKLE1BQVAsQ0FBYyxFQUFkLEVBQWtCRixlQUFsQixDQUF4Qjs7QUFFQSxZQUFNRyxTQUFTQyxTQUFTQyxRQUFULENBQWtCQyxPQUFsQixDQUEwQixJQUExQixFQUFnQyxFQUFoQyxFQUFvQ0MsV0FBcEMsRUFBZjtBQUNBLFlBQU1DLFdBQVdMLFdBQVcsT0FBNUI7O0FBRUEsYUFBS00sUUFBTCxHQUFnQjtBQUNaQyxzQkFBVU4sU0FBU08sUUFEUDtBQUVaQyxrQkFBTVIsU0FBU1MsUUFGSDtBQUdaViwwQkFIWTtBQUlaVyxzQkFBVU4sV0FBVyxFQUFYLEdBQWdCLENBQUMsRUFBRUosU0FBU1csSUFBVCxJQUFpQixFQUFuQixDQUpmO0FBS1pDLHVCQUFXUixXQUFXLENBQUMsRUFBRUosU0FBU1csSUFBVCxJQUFpQixHQUFuQixDQUFaLEdBQXNDLEdBTHJDO0FBTVpFLHlCQUFhYixTQUFTYyxNQUFULENBQWdCWixPQUFoQixDQUF3QixLQUF4QixFQUErQixFQUEvQjtBQU5ELFNBQWhCO0FBUUg7O0FBRUQ7Ozs7Ozs7OztrQ0FLVU4sZSxFQUFpQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUN2QixxQ0FBOEJySixPQUFPd0ssT0FBUCxDQUFlbkIsZUFBZixDQUE5Qiw4SEFBK0Q7QUFBQTs7QUFBQTs7QUFBQSx3QkFBbEQ1RixJQUFrRDtBQUFBLHdCQUE1Q2dILEtBQTRDOztBQUMzRCx5QkFBS25CLGdCQUFMLENBQXNCN0YsSUFBdEIsSUFBOEJnSCxLQUE5QjtBQUNIO0FBSHNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJMUI7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQXVCU2hILEksRUFBbUU7QUFBQSxnQkFBN0RpSCxVQUE2RCx1RUFBaEQsRUFBZ0Q7QUFBQSxnQkFBNUNDLGFBQTRDLHVFQUE1QjlLLGFBQWErSyxhQUFlOztBQUN4RSxnQkFBTUgsUUFBUSxLQUFLbkIsZ0JBQUwsQ0FBc0I3RixJQUF0QixDQUFkO0FBQ0EsZ0JBQUksS0FBSyxDQUFMLEtBQVdnSCxLQUFmLEVBQXNCO0FBQ2xCLHNCQUFNLElBQUl0QixzQkFBSixvREFBNEUxRixJQUE1RSxxQ0FBTjtBQUNIOztBQUVELG1CQUFPLEtBQUtvSCxXQUFMLENBQ0hKLE1BQU1LLFNBREgsRUFFSEwsTUFBTU0sUUFGSCxFQUdITixNQUFNTyxNQUhILEVBSUhOLFVBSkcsRUFLSGpILElBTEcsRUFNSGtILGFBTkcsRUFPSEYsTUFBTVEsVUFQSCxFQVFIUixNQUFNUyxPQVJILENBQVA7QUFVSDs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQ0FnQllKLFMsRUFBV0MsUSxFQUFVQyxNLEVBQVFOLFUsRUFBWWpILEksRUFBTWtILGEsRUFBZU0sVSxFQUFrQztBQUFBLGdCQUF0QkUsZUFBc0IsdUVBQUosRUFBSTs7QUFDeEcsZ0JBQU1DLGVBQWVwTCxPQUFPdUosTUFBUCxDQUFjLEVBQWQsRUFBa0J3QixRQUFsQixFQUE0QkwsVUFBNUIsQ0FBckI7O0FBRUEsZ0JBQU1XLE9BQU9QLFVBQVVRLE1BQVYsQ0FBaUI7QUFBQSx1QkFBUSxDQUFDRixhQUFhakwsY0FBYixDQUE0QnNELElBQTVCLENBQVQ7QUFBQSxhQUFqQixDQUFiO0FBQ0EsZ0JBQUk0SCxLQUFLdEUsTUFBVCxFQUFpQjtBQUNiLHNCQUFNLElBQUltQyxtQ0FBSiw4Q0FBbUZtQyxLQUFLRSxJQUFMLENBQVUsTUFBVixDQUFuRix3Q0FBdUk5SCxJQUF2SSxRQUFOO0FBQ0g7O0FBRUQsZ0JBQUkrSCxNQUFNLEVBQVY7QUFDQSxnQkFBSUMsV0FBVyxJQUFmO0FBQ0EsZ0JBQU1DLFVBQVUsd0hBQWhCOztBQVZ3RztBQUFBO0FBQUE7O0FBQUE7QUFZeEcsc0NBQW9CVixNQUFwQixtSUFBNEI7QUFBQSx3QkFBakJXLEtBQWlCOztBQUN4Qix3QkFBSSxlQUFlQSxNQUFNLENBQU4sQ0FBbkIsRUFBNkI7QUFDekIsNEJBQUksQ0FBQ0YsUUFBRCxJQUFhLENBQUNWLFNBQVM1SyxjQUFULENBQXdCd0wsTUFBTSxDQUFOLENBQXhCLENBQWQsSUFBbUQsS0FBSyxDQUFMLEtBQVdQLGFBQWFPLE1BQU0sQ0FBTixDQUFiLENBQVgsSUFBcUNQLGFBQWFPLE1BQU0sQ0FBTixDQUFiLEVBQXVCN0YsUUFBdkIsT0FBc0NpRixTQUFTWSxNQUFNLENBQU4sQ0FBVCxFQUFtQjdGLFFBQW5CLEVBQWxJLEVBQWlLO0FBQzdKLGdDQUFNOEYsU0FBUSxJQUFJQyxNQUFKLENBQVcsTUFBTUYsTUFBTSxDQUFOLENBQU4sR0FBaUIsR0FBNUIsRUFBaUMsQ0FBQyxDQUFDQSxNQUFNLENBQU4sQ0FBRixHQUFhLEdBQWIsR0FBbUIsRUFBcEQsQ0FBZDtBQUNBLGdDQUFJLENBQUVDLE9BQU1FLElBQU4sQ0FBV1YsYUFBYU8sTUFBTSxDQUFOLENBQWIsQ0FBWCxDQUFOLEVBQTBDO0FBQ3RDLHNDQUFNLElBQUkxQyx5QkFBSixDQUNGOEMsVUFBVUMsS0FBVixDQUFnQk4sT0FBaEIsRUFBeUI7QUFDckIsbURBQWVDLE1BQU0sQ0FBTixDQURNO0FBRXJCLCtDQUFXbEksSUFGVTtBQUdyQixrREFBY2tJLE1BQU0sQ0FBTixDQUhPO0FBSXJCLCtDQUFXUCxhQUFhTyxNQUFNLENBQU4sQ0FBYjtBQUpVLGlDQUF6QixDQURFLENBQU47QUFRSDs7QUFFREgsa0NBQU1HLE1BQU0sQ0FBTixJQUFXUCxhQUFhTyxNQUFNLENBQU4sQ0FBYixDQUFYLEdBQW9DSCxHQUExQztBQUNBQyx1Q0FBVyxLQUFYO0FBQ0g7QUFDSixxQkFqQkQsTUFpQk87QUFDSEQsOEJBQU1HLE1BQU0sQ0FBTixJQUFXSCxHQUFqQjtBQUNBQyxtQ0FBVyxLQUFYO0FBQ0g7QUFDSjtBQWxDdUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFvQ3hHLGdCQUFJRCxRQUFRLEVBQVosRUFBZ0I7QUFDWkEsc0JBQU0sR0FBTjtBQUNIOztBQUVEQSxrQkFBTU8sVUFBVUMsS0FBVixDQUNGQyxtQkFBbUJULEdBQW5CLEVBQ0s3QixPQURMLENBQ2EsSUFEYixFQUNtQixLQURuQixFQUVLQSxPQUZMLENBRWEsS0FGYixFQUVvQixLQUZwQixFQUdLQSxPQUhMLENBR2EsS0FIYixFQUdvQixLQUhwQixDQURFLEVBS0ZQLFlBTEUsQ0FBTjs7QUFRQTtBQUNBO0FBQ0E7QUFDQW9DLGtCQUFNTyxVQUFVQyxLQUFWLENBQWdCUixHQUFoQixFQUFxQixFQUFDLFFBQVEsVUFBVCxFQUFxQixPQUFPLE9BQTVCLEVBQXJCLENBQU47QUFDQSxnQkFBSSxVQUFVQSxJQUFJVSxNQUFKLENBQVcsQ0FBQyxDQUFaLENBQWQsRUFBOEI7QUFDMUJWLHNCQUFNQSxJQUFJVSxNQUFKLENBQVcsQ0FBWCxFQUFjLENBQUMsQ0FBZixJQUFvQixRQUExQjtBQUNILGFBRkQsTUFFTyxJQUFJLFNBQVNWLElBQUlVLE1BQUosQ0FBVyxDQUFDLENBQVosQ0FBYixFQUE2QjtBQUNoQ1Ysc0JBQU1BLElBQUlVLE1BQUosQ0FBVyxDQUFYLEVBQWMsQ0FBQyxDQUFmLElBQW9CLEtBQTFCO0FBQ0g7O0FBRUQsZ0JBQUlDLGtCQUFrQixFQUF0QjtBQUNBLGdCQUFJbEMsT0FBTyxLQUFLSCxRQUFMLENBQWNHLElBQXpCO0FBQ0EsZ0JBQUksQ0FBQyxDQUFFQSxJQUFQLEVBQWE7QUFDVCxvQkFBSVQsU0FBUyxLQUFLTSxRQUFMLENBQWNOLE1BQTNCO0FBQ0Esb0JBQUkyQixnQkFBZ0JwRSxNQUFwQixFQUE0QjtBQUN4Qix3QkFBSW9FLGdCQUFnQmlCLE9BQWhCLENBQXdCNUMsTUFBeEIsTUFBb0MsQ0FBQyxDQUF6QyxFQUE0QztBQUN4Q21CLHdDQUFnQjlLLGFBQWF3TSxZQUE3QjtBQUNBN0MsaUNBQVMyQixnQkFBZ0IsQ0FBaEIsQ0FBVDtBQUNIO0FBQ0o7O0FBRUQsb0JBQUlGLFdBQVdsRSxNQUFmLEVBQXVCO0FBQ25CLHdCQUFJdUYsWUFBWSxFQUFoQjtBQURtQjtBQUFBO0FBQUE7O0FBQUE7QUFFbkIsOENBQW9CckIsVUFBcEIsbUlBQWdDO0FBQUEsZ0NBQXJCVSxNQUFxQjs7QUFDNUIsZ0NBQUksZUFBZUEsT0FBTSxDQUFOLENBQW5CLEVBQTZCO0FBQ3pCLG9DQUFNQyxRQUFRLElBQUlDLE1BQUosQ0FBVyxNQUFNRixPQUFNLENBQU4sQ0FBTixHQUFpQixHQUE1QixFQUFpQyxDQUFDLENBQUNBLE9BQU0sQ0FBTixDQUFGLEdBQWEsR0FBYixHQUFtQixFQUFwRCxDQUFkO0FBQ0Esb0NBQUksQ0FBRUMsTUFBTUUsSUFBTixDQUFXVixhQUFhTyxPQUFNLENBQU4sQ0FBYixDQUFYLENBQU4sRUFBMEM7QUFDdEMsMENBQU0sSUFBSTFDLHlCQUFKLENBQ0Y4QyxVQUFVQyxLQUFWLENBQWdCTixPQUFoQixFQUF5QjtBQUNyQix1REFBZUMsT0FBTSxDQUFOLENBRE07QUFFckIsbURBQVdsSSxJQUZVO0FBR3JCLHNEQUFja0ksT0FBTSxDQUFOLENBSE87QUFJckIsbURBQVdQLGFBQWFPLE9BQU0sQ0FBTixDQUFiO0FBSlUscUNBQXpCLENBREUsQ0FBTjtBQVFIOztBQUVEVyw0Q0FBWVgsT0FBTSxDQUFOLElBQVdQLGFBQWFPLE9BQU0sQ0FBTixDQUFiLENBQVgsR0FBb0NXLFNBQWhEO0FBQ0gsNkJBZEQsTUFjTztBQUNIQSw0Q0FBWVgsT0FBTSxDQUFOLElBQVdXLFNBQXZCO0FBQ0g7QUFDSjtBQXBCa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFzQm5CLHdCQUFJQSxjQUFjckMsSUFBbEIsRUFBd0I7QUFDcEJBLCtCQUFPcUMsU0FBUDtBQUNBLDRCQUFJek0sYUFBYXdNLFlBQWIsS0FBOEIxQixhQUFsQyxFQUFpRDtBQUM3Q0EsNENBQWdCOUssYUFBYTBNLFlBQTdCO0FBQ0g7QUFDSjtBQUNKOztBQUVELG9CQUFJMU0sYUFBYXdNLFlBQWIsS0FBOEIxQixhQUE5QixJQUErQzlLLGFBQWEwTSxZQUFiLEtBQThCNUIsYUFBakYsRUFBZ0c7QUFDNUYsd0JBQUlQLE9BQU8sRUFBWDtBQUNBLHdCQUFJLFdBQVdaLE1BQVgsSUFBcUIsT0FBTyxLQUFLTSxRQUFMLENBQWNLLFFBQTlDLEVBQXdEO0FBQ3BEQyxnQ0FBUSxNQUFNLEtBQUtOLFFBQUwsQ0FBY0ssUUFBNUI7QUFDSCxxQkFGRCxNQUVPLElBQUksWUFBWVgsTUFBWixJQUFzQixRQUFRLEtBQUtNLFFBQUwsQ0FBY08sU0FBaEQsRUFBMkQ7QUFDOURELGdDQUFRLE1BQU0sS0FBS04sUUFBTCxDQUFjTyxTQUE1QjtBQUNIOztBQUVEOEIsc0NBQWtCdE0sYUFBYTBNLFlBQWIsS0FBOEI1QixhQUE5QixHQUE4QyxJQUE5QyxHQUF3RG5CLE1BQXhELFFBQWxCO0FBQ0EyQyx1Q0FBbUJsQyxPQUFPRyxJQUExQjtBQUNIO0FBQ0o7O0FBRUQsZ0JBQUl2SyxhQUFhMk0sYUFBYixLQUErQjdCLGFBQW5DLEVBQWtEO0FBQzlDYSxzQkFBTTNMLGFBQWE0TSxlQUFiLENBQTZCLEtBQUszQyxRQUFMLENBQWNDLFFBQTNDLEVBQXFEeUIsR0FBckQsQ0FBTjtBQUNILGFBRkQsTUFFTztBQUNIQSxzQkFBTVcsa0JBQWtCWCxHQUF4QjtBQUNIOztBQUVEO0FBQ0EsZ0JBQU1rQixTQUFTMU0sT0FBTzJHLElBQVAsQ0FBWStELFVBQVosRUFDVlksTUFEVSxDQUNILGdCQUFRO0FBQ1osb0JBQUlSLFVBQVVzQixPQUFWLENBQWtCM0ksSUFBbEIsTUFBNEIsQ0FBQyxDQUFqQyxFQUFvQztBQUNoQywyQkFBTyxLQUFQO0FBQ0g7O0FBRUQsb0JBQUlzSCxTQUFTNUssY0FBVCxDQUF3QnNELElBQXhCLENBQUosRUFBbUM7QUFDL0IsMkJBQU9zSCxTQUFTdEgsSUFBVCxLQUFrQmlILFdBQVdqSCxJQUFYLENBQXpCO0FBQ0g7O0FBRUQsdUJBQU8sSUFBUDtBQUNILGFBWFUsQ0FBZjs7QUFhQTtBQUNBLGdCQUFJa0osV0FBVyxFQUFmO0FBQ0EsZ0JBQUk1QixTQUFTNkIsU0FBYixFQUF3QjtBQUNwQkQsMkJBQVc1QixTQUFTNkIsU0FBcEI7QUFDSDs7QUFFRCxnQkFBSUMsWUFBSjtBQUNBLGdCQUFJLENBQUNBLE1BQU1ILE9BQU9OLE9BQVAsQ0FBZSxXQUFmLENBQVAsTUFBd0MsQ0FBQyxDQUE3QyxFQUFnRDtBQUM1Q08sMkJBQVdqQyxXQUFXa0MsU0FBdEI7QUFDQSx1QkFBT0YsT0FBT0csR0FBUCxDQUFQO0FBQ0g7O0FBRUQsZ0JBQUlILE9BQU8zRixNQUFYLEVBQW1CO0FBQ2Ysb0JBQU0rRixRQUFROU0sT0FBTzJHLElBQVAsQ0FBWStELFVBQVosRUFDVFksTUFEUyxDQUNGO0FBQUEsMkJBQUtvQixPQUFPTixPQUFQLENBQWVXLENBQWYsTUFBc0IsQ0FBQyxDQUE1QjtBQUFBLGlCQURFLEVBRVRDLEdBRlMsQ0FFTDtBQUFBLDJCQUFLZixtQkFBbUJjLENBQW5CLElBQXdCLEdBQXhCLEdBQThCZCxtQkFBbUJ2QixXQUFXcUMsQ0FBWCxDQUFuQixDQUFuQztBQUFBLGlCQUZLLEVBR1R4QixJQUhTLENBR0osR0FISSxDQUFkOztBQUtBQyx1QkFBTyxNQUFNTyxVQUFVQyxLQUFWLENBQWdCYyxLQUFoQixFQUF1QixFQUFDLE9BQU8sR0FBUixFQUF2QixDQUFiO0FBQ0g7O0FBRUQsZ0JBQUksT0FBT0gsUUFBWCxFQUFxQjtBQUNqQkEsMkJBQVdWLG1CQUFtQlUsUUFBbkIsRUFDTmhELE9BRE0sQ0FDRSxJQURGLEVBQ1EsS0FEUixFQUVOQSxPQUZNLENBRUUsSUFGRixFQUVRLEtBRlIsRUFHTkEsT0FITSxDQUdFLEtBSEYsRUFHUyxLQUhULEVBSU5BLE9BSk0sQ0FJRSxLQUpGLEVBSVMsS0FKVCxFQUtOQSxPQUxNLENBS0UsS0FMRixFQUtTLEtBTFQsQ0FBWDs7QUFPQTZCLHVCQUFPLE1BQU1PLFVBQVVDLEtBQVYsQ0FBZ0JXLFFBQWhCLEVBQTBCLEVBQUMsT0FBTyxHQUFSLEVBQWEsT0FBTyxHQUFwQixFQUExQixDQUFiO0FBQ0g7O0FBRUQsbUJBQU9uQixHQUFQO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dDQW9CdUJ5QixRLEVBQVVDLFUsRUFBWTtBQUN6QyxnQkFBSUQsYUFBYUMsVUFBakIsRUFBNkI7QUFDekIsdUJBQU8sRUFBUDtBQUNIOztBQUVELGdCQUFNQyxhQUFhLENBQUMsUUFBUUYsU0FBUzFGLE1BQVQsQ0FBZ0IsQ0FBaEIsQ0FBUixHQUE2QjBGLFNBQVNmLE1BQVQsQ0FBZ0IsQ0FBaEIsQ0FBN0IsR0FBa0RlLFFBQW5ELEVBQTZERyxLQUE3RCxDQUFtRSxHQUFuRSxDQUFuQjtBQUNBLGdCQUFNQyxhQUFhLENBQUMsUUFBUUgsV0FBVzNGLE1BQVgsQ0FBa0IsQ0FBbEIsQ0FBUixHQUErQjJGLFdBQVdoQixNQUFYLENBQWtCLENBQWxCLENBQS9CLEdBQXNEZ0IsVUFBdkQsRUFBbUVFLEtBQW5FLENBQXlFLEdBQXpFLENBQW5COztBQUVBRCx1QkFBV25HLEdBQVg7QUFDQSxnQkFBTXNHLGFBQWFELFdBQVdyRyxHQUFYLEVBQW5COztBQVR5QztBQUFBO0FBQUE7O0FBQUE7QUFXekMsc0NBQXlCK0UsVUFBVXdCLFVBQVYsQ0FBcUJKLFVBQXJCLENBQXpCLG1JQUEyRDtBQUFBOztBQUFBOztBQUFBLHdCQUE5Qy9GLENBQThDO0FBQUEsd0JBQTNDb0csR0FBMkM7O0FBQ3ZELHdCQUFJSCxXQUFXakcsQ0FBWCxLQUFpQm9HLFFBQVFILFdBQVdqRyxDQUFYLENBQTdCLEVBQTRDO0FBQ3hDLCtCQUFPK0YsV0FBVy9GLENBQVgsQ0FBUDtBQUNBLCtCQUFPaUcsV0FBV2pHLENBQVgsQ0FBUDtBQUNILHFCQUhELE1BR087QUFDSDtBQUNIO0FBQ0o7QUFsQndDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBb0J6Q2lHLHVCQUFXOUcsSUFBWCxDQUFnQitHLFVBQWhCO0FBQ0EsZ0JBQU1HLE9BQU8sTUFBTUMsTUFBTixDQUFhUCxXQUFXcEcsTUFBeEIsSUFBa0NzRyxXQUFXOUIsSUFBWCxDQUFnQixHQUFoQixDQUEvQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFJb0MsaUJBQUo7QUFBQSxnQkFBY0MsaUJBQWQ7QUFDQSxtQkFBTyxPQUFPSCxJQUFQLElBQWUsUUFBUUEsS0FBS2xHLE1BQUwsQ0FBWSxDQUFaLENBQXZCLElBQ0EsQ0FBQyxDQUFELE1BQVFvRyxXQUFXRixLQUFLckIsT0FBTCxDQUFhLEdBQWIsQ0FBbkIsTUFBMEN1QixZQUFZQyxXQUFXSCxLQUFLckIsT0FBTCxDQUFhLEdBQWIsQ0FBdkIsS0FBNkMsQ0FBQyxDQUFELEtBQU93QixRQUE5RixDQURBLFVBRUlILElBRkosR0FFYUEsSUFGcEI7QUFHSDs7Ozs7O0FBR0w7Ozs7O0FBR0E1TixhQUFhd00sWUFBYixHQUE0QixDQUE1Qjs7QUFFQTs7O0FBR0F4TSxhQUFhK0ssYUFBYixHQUE2QixDQUE3Qjs7QUFFQTs7Ozs7QUFLQS9LLGFBQWEyTSxhQUFiLEdBQTZCLENBQTdCOztBQUVBOzs7O0FBSUEzTSxhQUFhME0sWUFBYixHQUE0QixDQUE1Qjs7a0JBRWUxTSxZOzs7Ozs7Ozs7OztBQzlWZkMsT0FBTytOLE9BQVAsR0FBaUJDLE1BQU1ELE9BQXZCO0FBQ0EsSUFBTS9ILFdBQVc5RixPQUFPQyxTQUFQLENBQWlCNkYsUUFBbEM7O0FBRUEsbUJBQUFrRCxDQUFRLENBQVI7O0FBRUEsSUFBSSxDQUFFK0UsV0FBV2pPLE9BQU9rTyxRQUFsQixDQUFOLEVBQW1DO0FBQy9CbE8sV0FBT2tPLFFBQVAsR0FBa0IsVUFBVWhNLEdBQVYsRUFBZTtBQUM3QixlQUFPLENBQUMsQ0FBRUEsR0FBSCxJQUFVLHFCQUFvQkEsR0FBcEIseUNBQW9CQSxHQUFwQixFQUFqQjtBQUNILEtBRkQ7QUFHSDs7MkJBRVN5QixJO0FBQ04sUUFBSXNLLFdBQVdqTyxPQUFPLE9BQU8yRCxJQUFkLENBQVgsQ0FBSixFQUFxQztBQUNqQztBQUNIOztBQUVEM0QsV0FBTyxPQUFPMkQsSUFBZCxJQUFzQixVQUFVMUIsR0FBVixFQUFlO0FBQ2pDLGVBQU8rRCxTQUFTNUQsSUFBVCxDQUFjSCxHQUFkLE1BQXVCLGFBQWEwQixJQUFiLEdBQW9CLEdBQWxEO0FBQ0gsS0FGRDs7O1dBTGMsQ0FBRSxXQUFGLEVBQWUsU0FBZixFQUEwQixRQUExQixFQUFvQyxRQUFwQyxFQUE4QyxNQUE5QyxFQUFzRCxRQUF0RCxFQUFnRSxPQUFoRSxFQUF5RSxRQUF6RSxFQUFtRixLQUFuRixFQUEwRixTQUExRixFQUFxRyxLQUFyRyxFQUE0RyxTQUE1RyxDO0FBQWxCLHlDQUEySTtBQUF2SSxRQUFNQSxlQUFOO0FBQXVJLHFCQUFqSUEsSUFBaUk7O0FBQUEsNkJBRW5JO0FBTVA7O0FBRUQsSUFBTXdLLGFBQWEsQ0FBRUMsTUFBRixFQUFVQyxNQUFWLEVBQWtCQyxPQUFsQixDQUFuQjtBQUNBdE8sT0FBT3VPLFFBQVAsR0FBa0IsU0FBU0EsUUFBVCxDQUFrQmhLLEtBQWxCLEVBQXlCO0FBQ3ZDLFFBQUlqRSxjQUFjaUUsS0FBZCxJQUF1QixTQUFTQSxLQUFwQyxFQUEyQztBQUN2QyxlQUFPLEtBQVA7QUFDSDs7QUFFRCxRQUFNaUssUUFBUXRPLE9BQU82QyxjQUFQLENBQXNCd0IsS0FBdEIsQ0FBZDtBQUx1QztBQUFBO0FBQUE7O0FBQUE7QUFNdkMsNkJBQW1CNEosVUFBbkIsOEhBQStCO0FBQUEsZ0JBQXBCaE0sSUFBb0I7O0FBQzNCLGdCQUFJcU0sVUFBVXJNLEtBQUtoQyxTQUFuQixFQUE4QjtBQUMxQix1QkFBTyxJQUFQO0FBQ0g7QUFDSjtBQVZzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVl2QyxXQUFPLEtBQVA7QUFDSCxDQWJEOztBQWVBSCxPQUFPeU8sZUFBUCxHQUF5QixTQUFTQSxlQUFULENBQXlCbEssS0FBekIsRUFBZ0M7QUFDckQsUUFBSSxTQUFTQSxLQUFULElBQWtCakUsY0FBY2lFLEtBQXBDLEVBQTJDO0FBQ3ZDLGVBQU8sS0FBUDtBQUNIOztBQUVELFdBQU9yRSxPQUFPNkMsY0FBUCxDQUFzQndCLEtBQXRCLE1BQWlDckUsT0FBTzZDLGNBQVAsQ0FBc0IsRUFBdEIsQ0FBeEM7QUFDSCxDQU5EOztBQVFBL0MsT0FBTzBPLFNBQVAsR0FBbUIsU0FBU0EsU0FBVCxDQUFtQm5LLEtBQW5CLEVBQTBCO0FBQ3pDLFdBQU8wSixXQUFXMUosTUFBTUUsSUFBakIsQ0FBUDtBQUNILENBRkQ7O0FBSUF6RSxPQUFPMk8sUUFBUCxHQUFrQixTQUFTQSxRQUFULENBQWtCQyxNQUFsQixFQUEwQjtBQUN4QyxXQUFPLHFCQUFvQkEsTUFBcEIseUNBQW9CQSxNQUFwQixNQUE4QlgsV0FBV1csT0FBT0MsSUFBbEIsQ0FBckM7QUFDSCxDQUZELEM7Ozs7Ozs7Ozs7QUNqREE3TyxPQUFPOE8sV0FBUCxHQUFxQixTQUFTQSxXQUFULENBQXFCdkssS0FBckIsRUFBNEI7QUFDN0MsV0FBT0EsU0FBUyxlQUFlLE9BQU9BLE1BQU1TLElBQXJDLElBQTZDLGVBQWUsT0FBT1QsTUFBTXdLLEtBQWhGO0FBQ0gsQ0FGRDs7QUFJQS9PLE9BQU93RCxtQkFBUCxHQUE2QixTQUFTQSxtQkFBVCxDQUE2QmUsS0FBN0IsRUFBb0M7QUFDN0QsUUFBSSxDQUFFQSxLQUFOLEVBQWE7QUFDVCxlQUFPLEtBQVA7QUFDSDs7QUFFRCxRQUFJdUssWUFBWXZLLEtBQVosQ0FBSixFQUF3QjtBQUNwQixlQUFPLEtBQVA7QUFDSDs7QUFFRCxRQUFNcEIsY0FBY29CLE1BQU1wQixXQUExQjs7QUFFQSxRQUFJLENBQUVBLFdBQU4sRUFBbUI7QUFDZixlQUFPLEtBQVA7QUFDSDs7QUFFRCxRQUFJLHdCQUF3QkEsWUFBWVEsSUFBcEMsSUFBNEMsd0JBQXdCUixZQUFZQyxXQUFwRixFQUFpRztBQUM3RixlQUFPLElBQVA7QUFDSDs7QUFFRCxXQUFPMEwsWUFBWTNMLFlBQVloRCxTQUF4QixDQUFQO0FBQ0gsQ0FwQkQ7O0FBc0JBLElBQUk4TCxVQUFVK0MsUUFBVixDQUFtQkMsdUJBQW5CLEVBQUosRUFBa0Q7QUFDOUNqUCxXQUFPa1AsZUFBUCxHQUF5QixTQUFTQSxlQUFULENBQXlCM0ssS0FBekIsRUFBZ0M7QUFDckQsWUFBSSxDQUFDQSxLQUFMLEVBQVk7QUFDUixtQkFBTyxLQUFQO0FBQ0g7O0FBRUQsWUFBTXBCLGNBQWNvQixNQUFNcEIsV0FBMUI7QUFDQSxZQUFJLENBQUNBLFdBQUwsRUFBa0I7QUFDZCxtQkFBTyxLQUFQO0FBQ0g7O0FBRUQsZUFBTyxxQkFBcUJBLFlBQVlRLElBQVosSUFBb0JSLFlBQVlDLFdBQXJELENBQVA7QUFDSCxLQVhEO0FBWUgsQ0FiRCxNQWFPO0FBQ0hwRCxXQUFPa1AsZUFBUCxHQUF5QixTQUFTQSxlQUFULEdBQTJCO0FBQ2hELGVBQU8sS0FBUDtBQUNILEtBRkQ7QUFHSDs7QUFFRGxQLE9BQU9pTyxVQUFQLEdBQW9CLFNBQVNBLFVBQVQsQ0FBb0JoTSxHQUFwQixFQUF5QjtBQUN6QyxRQUFJQSxlQUFla04sYUFBbkIsRUFBa0M7QUFDOUIsZUFBTyxJQUFQO0FBQ0g7O0FBRUQsUUFBSTNMLG9CQUFvQnZCLEdBQXBCLENBQUosRUFBOEI7QUFDMUIsZUFBTyxJQUFQO0FBQ0g7O0FBRUQsUUFBSWlOLGdCQUFnQmpOLEdBQWhCLENBQUosRUFBMEI7QUFDdEIsZUFBTyxJQUFQO0FBQ0g7O0FBRUQsV0FBTyx3QkFBd0IrRCxTQUFTNUQsSUFBVCxDQUFjSCxHQUFkLENBQS9CO0FBQ0gsQ0FkRCxDOzs7Ozs7Ozs4Q0M3Q0E7O0FBRUFqQyxPQUFPaU0sU0FBUCxHQUFtQmpNLE9BQU9pTSxTQUFQLElBQW9CLEVBQXZDOztBQUVBOzs7Ozs7O0FBT0EsSUFBTXZCLCtDQUFVLFNBQVcwRSxVQUFYLENBQXNCdEksTUFBdEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUNSaUgsUUFBUWpILE1BQVIsQ0FEUTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUVRQSxPQUFPRCxJQUFQLEVBRlI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFR29HLHFCQUZIO0FBQUE7QUFBQSwyQkFHRSxDQUFFQSxDQUFGLEVBQUtuRyxPQUFPbUcsQ0FBUCxDQUFMLENBSEY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUEsMEJBU1JuRyxrQkFBa0J1SSxHQVRWO0FBQUE7QUFBQTtBQUFBOztBQUFBLHFEQVVEdkksT0FBTzRELE9BQVAsRUFWQzs7QUFBQTtBQUFBLHdCQWFOd0QsU0FBU3BILE1BQVQsQ0FiTTtBQUFBO0FBQUE7QUFBQTs7QUFBQSwwQkFjRixJQUFJakgsd0JBQUosQ0FBNkIsNkJBQTdCLENBZEU7O0FBQUE7QUFBQSx5QkFpQlJLLE9BQU93SyxPQWpCQztBQUFBO0FBQUE7QUFBQTs7QUFBQSxrREFrQkF4SyxPQUFPd0ssT0FBUCxDQUFlNUQsTUFBZixDQWxCQTs7QUFBQTtBQUFBOztBQUFBO0FBQUEsMERBc0JNQSxNQXRCTjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXNCREMsdUJBdEJDOztBQUFBLHdCQXVCRkQsT0FBT3pHLGNBQVAsQ0FBc0IwRyxHQUF0QixDQXZCRTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUEsMkJBMkJGLENBQUVBLEdBQUYsRUFBT0QsT0FBT0MsR0FBUCxDQUFQLENBM0JFOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBV3FJLFVBQVg7QUFBQSxDQUFWLENBQU47O0FBK0JBcFAsT0FBT2lNLFNBQVAsQ0FBaUJ3QixVQUFqQixHQUE4Qi9DLE9BQTlCLEM7Ozs7Ozs7OzhDQzFDQTs7OztBQUVBMUssT0FBT2lNLFNBQVAsR0FBbUJqTSxPQUFPaU0sU0FBUCxJQUFvQixFQUF2Qzs7QUFFQWpNLE9BQU9pTSxTQUFQLENBQWlCQyxLQUFqQixHQUF5QixTQUFTQSxLQUFULENBQWVvRCxNQUFmLEVBQXVCQyxZQUF2QixFQUFxQztBQUMxRCxRQUFJQyxNQUFNRixPQUFPdEosUUFBUCxFQUFWO0FBQUEsUUFBNkJ5SixXQUE3Qjs7QUFEMEQ7QUFBQTtBQUFBOztBQUFBO0FBRzFELDZCQUEyQnhELFVBQVV3QixVQUFWLENBQXFCOEIsWUFBckIsQ0FBM0IsOEhBQStEO0FBQUE7O0FBQUE7O0FBQUEsZ0JBQXBEeEksR0FBb0Q7QUFBQSxnQkFBL0N4QyxLQUErQzs7QUFDM0R3QyxrQkFBTUEsSUFBSThDLE9BQUosQ0FBWSxxQkFBWixFQUFtQyxNQUFuQyxDQUFOO0FBQ0E0RixpQkFBSyxJQUFJMUQsTUFBSixDQUFXaEYsR0FBWCxFQUFnQixHQUFoQixDQUFMO0FBQ0F5SSxrQkFBTUEsSUFBSTNGLE9BQUosQ0FBWTRGLEVBQVosRUFBZ0JsTCxLQUFoQixDQUFOO0FBQ0g7QUFQeUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFTMUQsV0FBT2lMLEdBQVA7QUFDSCxDQVZELEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQSxJQUFNM1AsMkJBQTJCLG1CQUFBcUosQ0FBUSxDQUFSLENBQWpDOztBQUVBOzs7O0lBR01DLHlCOzs7Ozs7Ozs7O0VBQWtDdEosd0I7O0FBR3hDRixPQUFPQyxPQUFQLEdBQWlCdUoseUJBQWpCLEM7Ozs7Ozs7Ozs7Ozs7OztBQ1JBLElBQU10SiwyQkFBMkIsbUJBQUFxSixDQUFRLENBQVIsQ0FBakM7O0FBRUE7Ozs7O0lBSU1FLG1DOzs7Ozs7Ozs7O0VBQTRDdkosd0I7O0FBR2xERixPQUFPQyxPQUFQLEdBQWlCd0osbUNBQWpCLEM7Ozs7Ozs7Ozs7Ozs7OztBQ1RBLElBQU12SiwyQkFBMkIsbUJBQUFxSixDQUFRLENBQVIsQ0FBakM7O0FBRUE7Ozs7SUFHTUcsc0I7Ozs7Ozs7Ozs7RUFBK0J4Six3Qjs7QUFHckNGLE9BQU9DLE9BQVAsR0FBaUJ5SixzQkFBakIsQyIsImZpbGUiOiJ1cmwtZ2VuZXJhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYjRhZmJiMGNhNDc2YmM4MTgyZGEiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwiLyoqXG4gKiBCYXNlIEVycm9yIGNsYXNzLlxuICovXG5jbGFzcyBJbnZhbGlkQXJndW1lbnRFeGNlcHRpb24gZXh0ZW5kcyBFcnJvciB7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvRXhjZXB0aW9uL0ludmFsaWRBcmd1bWVudEV4Y2VwdGlvbi5qcyIsImltcG9ydCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZVwiO1xuaW1wb3J0IFVybEdlbmVyYXRvciBmcm9tICcuL1VybEdlbmVyYXRvcic7XG5cbndpbmRvdy5VcmxHZW5lcmF0b3IgPSBVcmxHZW5lcmF0b3I7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9pbmRleC5qcyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvbWFzdGVyL0xJQ0VOU0UgZmlsZS4gQW5cbiAqIGFkZGl0aW9uYWwgZ3JhbnQgb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpblxuICogdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGhvd2V2ZXIsIHRoZVxuICAgICAgICAgIC8vIHJlc3VsdCBmb3IgdGhpcyBpdGVyYXRpb24gd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgLy8gcmVhc29uLiBOb3RlIHRoYXQgcmVqZWN0aW9ucyBvZiB5aWVsZGVkIFByb21pc2VzIGFyZSBub3RcbiAgICAgICAgICAvLyB0aHJvd24gYmFjayBpbnRvIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIGFzIGlzIHRoZSBjYXNlXG4gICAgICAgICAgLy8gd2hlbiBhbiBhd2FpdGVkIFByb21pc2UgaXMgcmVqZWN0ZWQuIFRoaXMgZGlmZmVyZW5jZSBpblxuICAgICAgICAgIC8vIGJlaGF2aW9yIGJldHdlZW4geWllbGQgYW5kIGF3YWl0IGlzIGltcG9ydGFudCwgYmVjYXVzZSBpdFxuICAgICAgICAgIC8vIGFsbG93cyB0aGUgY29uc3VtZXIgdG8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgeWllbGRlZFxuICAgICAgICAgIC8vIHJlamVjdGlvbiAoc3dhbGxvdyBpdCBhbmQgY29udGludWUsIG1hbnVhbGx5IC50aHJvdyBpdCBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgZ2VuZXJhdG9yLCBhYmFuZG9uIGl0ZXJhdGlvbiwgd2hhdGV2ZXIpLiBXaXRoXG4gICAgICAgICAgLy8gYXdhaXQsIGJ5IGNvbnRyYXN0LCB0aGVyZSBpcyBubyBvcHBvcnR1bml0eSB0byBleGFtaW5lIHRoZVxuICAgICAgICAgIC8vIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBzbyB0aGVcbiAgICAgICAgICAvLyBvbmx5IG9wdGlvbiBpcyB0byB0aHJvdyBpdCBmcm9tIHRoZSBhd2FpdCBleHByZXNzaW9uLCBhbmRcbiAgICAgICAgICAvLyBsZXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBoYW5kbGUgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHJ1bnRpbWUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gSW4gc2xvcHB5IG1vZGUsIHVuYm91bmQgYHRoaXNgIHJlZmVycyB0byB0aGUgZ2xvYmFsIG9iamVjdCwgZmFsbGJhY2sgdG9cbiAgLy8gRnVuY3Rpb24gY29uc3RydWN0b3IgaWYgd2UncmUgaW4gZ2xvYmFsIHN0cmljdCBtb2RlLiBUaGF0IGlzIHNhZGx5IGEgZm9ybVxuICAvLyBvZiBpbmRpcmVjdCBldmFsIHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5LlxuICAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpXG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJyZXF1aXJlKCdAanltZm9ueS91dGlsL2xpYi9pcycpO1xucmVxdWlyZSgnQGp5bWZvbnkvdXRpbC9saWIvT2JqZWN0L2VudHJpZXMnKTtcbnJlcXVpcmUoJ0BqeW1mb255L3V0aWwvbGliL1N0cmluZy9zdHJ0cicpO1xuXG5jb25zdCBJbnZhbGlkUGFyYW1ldGVyRXhjZXB0aW9uID0gcmVxdWlyZSgnLi9FeGNlcHRpb24vSW52YWxpZFBhcmFtZXRlckV4Y2VwdGlvbicpO1xuY29uc3QgTWlzc2luZ01hbmRhdG9yeVBhcmFtZXRlcnNFeGNlcHRpb24gPSByZXF1aXJlKCcuL0V4Y2VwdGlvbi9NaXNzaW5nTWFuZGF0b3J5UGFyYW1ldGVyc0V4Y2VwdGlvbicpO1xuY29uc3QgUm91dGVOb3RGb3VuZEV4Y2VwdGlvbiA9IHJlcXVpcmUoJy4vRXhjZXB0aW9uL1JvdXRlTm90Rm91bmRFeGNlcHRpb24nKTtcblxuY29uc3QgZGVjb2RlZENoYXJzID0ge1xuICAgICclMkYnOiAnLycsXG4gICAgJyU0MCc6ICdAJyxcbiAgICAnJTNBJzogJzonLFxuICAgICclM0InOiAnOycsXG4gICAgJyUyQyc6ICcsJyxcbiAgICAnJTNEJzogJz0nLFxuICAgICclMkInOiAnKycsXG4gICAgJyUyMSc6ICchJyxcbiAgICAnJTJBJzogJyonLFxuICAgICclN0MnOiAnfCcsXG59O1xuXG5jbGFzcyBVcmxHZW5lcmF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHJvdXRlQ29sbGVjdGlvbikge1xuICAgICAgICB0aGlzLl9yb3V0ZUNvbGxlY3Rpb24gPSBPYmplY3QuYXNzaWduKHt9LCByb3V0ZUNvbGxlY3Rpb24pO1xuXG4gICAgICAgIGNvbnN0IHNjaGVtZSA9IGxvY2F0aW9uLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGlzU2VjdXJlID0gc2NoZW1lID09PSAnaHR0cHMnO1xuXG4gICAgICAgIHRoaXMuX2NvbnRleHQgPSB7XG4gICAgICAgICAgICBwYXRoaW5mbzogbG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICAgICAgICBob3N0OiBsb2NhdGlvbi5ob3N0bmFtZSxcbiAgICAgICAgICAgIHNjaGVtZSxcbiAgICAgICAgICAgIGh0dHBQb3J0OiBpc1NlY3VyZSA/IDgwIDogfn4obG9jYXRpb24ucG9ydCB8fCA4MCksXG4gICAgICAgICAgICBodHRwc1BvcnQ6IGlzU2VjdXJlID8gfn4obG9jYXRpb24ucG9ydCB8fCA0NDMpIDogNDQzLFxuICAgICAgICAgICAgcXVlcnlTdHJpbmc6IGxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCByb3V0ZXMgdG8gcm91dGVyIGNvbGxlY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIE9iamVjdD59IHJvdXRlQ29sbGVjdGlvblxuICAgICAqL1xuICAgIGFkZFJvdXRlcyhyb3V0ZUNvbGxlY3Rpb24pIHtcbiAgICAgICAgZm9yIChjb25zdCBbIG5hbWUsIHJvdXRlIF0gb2YgT2JqZWN0LmVudHJpZXMocm91dGVDb2xsZWN0aW9uKSkge1xuICAgICAgICAgICAgdGhpcy5fcm91dGVDb2xsZWN0aW9uW25hbWVdID0gcm91dGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSBVUkwgb3IgcGF0aCBmb3IgYSBzcGVjaWZpYyByb3V0ZSBiYXNlZCBvbiB0aGUgZ2l2ZW4gcGFyYW1ldGVycy5cbiAgICAgKlxuICAgICAqIFBhcmFtZXRlcnMgdGhhdCByZWZlcmVuY2UgcGxhY2Vob2xkZXJzIGluIHRoZSByb3V0ZSBwYXR0ZXJuIHdpbGwgc3Vic3RpdHV0ZSB0aGVtIGluIHRoZVxuICAgICAqIHBhdGggb3IgaG9zdC4gRXh0cmEgcGFyYW1zIGFyZSBhZGRlZCBhcyBxdWVyeSBzdHJpbmcgdG8gdGhlIFVSTC5cbiAgICAgKlxuICAgICAqIFdoZW4gdGhlIHBhc3NlZCByZWZlcmVuY2UgdHlwZSBjYW5ub3QgYmUgZ2VuZXJhdGVkIGZvciB0aGUgcm91dGUgYmVjYXVzZSBpdCByZXF1aXJlcyBhIGRpZmZlcmVudFxuICAgICAqIGhvc3Qgb3Igc2NoZW1lIHRoYW4gdGhlIGN1cnJlbnQgb25lLCB0aGUgbWV0aG9kIHdpbGwgcmV0dXJuIGEgbW9yZSBjb21wcmVoZW5zaXZlIHJlZmVyZW5jZVxuICAgICAqIHRoYXQgaW5jbHVkZXMgdGhlIHJlcXVpcmVkIHBhcmFtcy4gRm9yIGV4YW1wbGUsIHdoZW4geW91IGNhbGwgdGhpcyBtZXRob2Qgd2l0aCByZWZlcmVuY2VUeXBlID0gQUJTT0xVVEVfUEFUSFxuICAgICAqIGJ1dCB0aGUgcm91dGUgcmVxdWlyZXMgdGhlIGh0dHBzIHNjaGVtZSB3aGVyZWFzIHRoZSBjdXJyZW50IHNjaGVtZSBpcyBodHRwLCBpdCB3aWxsIGluc3RlYWQgcmV0dXJuIGFuXG4gICAgICogQUJTT0xVVEVfVVJMIHdpdGggdGhlIGh0dHBzIHNjaGVtZSBhbmQgdGhlIGN1cnJlbnQgaG9zdC4gVGhpcyBtYWtlcyBzdXJlIHRoZSBnZW5lcmF0ZWQgVVJMIG1hdGNoZXNcbiAgICAgKiB0aGUgcm91dGUgaW4gYW55IGNhc2UuXG4gICAgICpcbiAgICAgKiBXaWxsIHRocm93IGFuIGVycm9yIGlmIHRoZXJlIGlzIG5vIHJvdXRlIHdpdGggdGhlIGdpdmVuIG5hbWVcbiAgICAgKlxuICAgICAqIFRoZSBzcGVjaWFsIHBhcmFtZXRlciBfZnJhZ21lbnQgd2lsbCBiZSB1c2VkIGFzIHRoZSBkb2N1bWVudCBmcmFnbWVudCBzdWZmaXhlZCB0byB0aGUgZmluYWwgVVJMLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsICo+fSBwYXJhbWV0ZXJzXG4gICAgICogQHBhcmFtIHtpbnR9IHJlZmVyZW5jZVR5cGVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2VuZXJhdGUobmFtZSwgcGFyYW1ldGVycyA9IHt9LCByZWZlcmVuY2VUeXBlID0gVXJsR2VuZXJhdG9yLkFCU09MVVRFX1BBVEgpIHtcbiAgICAgICAgY29uc3Qgcm91dGUgPSB0aGlzLl9yb3V0ZUNvbGxlY3Rpb25bbmFtZV07XG4gICAgICAgIGlmICh2b2lkIDAgPT09IHJvdXRlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUm91dGVOb3RGb3VuZEV4Y2VwdGlvbihgVW5hYmxlIHRvIGdlbmVyYXRlIGEgVVJMIGZvciB0aGUgbmFtZWQgcm91dGUgXCIke25hbWV9XCIgYXMgc3VjaCByb3V0ZSBkb2VzIG5vdCBleGlzdC5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9kb0dlbmVyYXRlKFxuICAgICAgICAgICAgcm91dGUudmFyaWFibGVzLFxuICAgICAgICAgICAgcm91dGUuZGVmYXVsdHMsXG4gICAgICAgICAgICByb3V0ZS50b2tlbnMsXG4gICAgICAgICAgICBwYXJhbWV0ZXJzLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHJlZmVyZW5jZVR5cGUsXG4gICAgICAgICAgICByb3V0ZS5ob3N0VG9rZW5zLFxuICAgICAgICAgICAgcm91dGUuc2NoZW1lc1xuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERvIGdlbmVyYXRlIGFuIGFkZHJlc3MgZnJvbSByb3V0ZSBjb21wb25lbnRzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmdbXX0gdmFyaWFibGVzXG4gICAgICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBzdHJpbmc+fSBkZWZhdWx0c1xuICAgICAqIEBwYXJhbSB7W1tzdHJpbmddXX0gdG9rZW5zXG4gICAgICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCAqPn0gcGFyYW1ldGVyc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtpbnR9IHJlZmVyZW5jZVR5cGVcbiAgICAgKiBAcGFyYW0ge1tbc3RyaW5nXV19IGhvc3RUb2tlbnNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcmVxdWlyZWRTY2hlbWVzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfZG9HZW5lcmF0ZSh2YXJpYWJsZXMsIGRlZmF1bHRzLCB0b2tlbnMsIHBhcmFtZXRlcnMsIG5hbWUsIHJlZmVyZW5jZVR5cGUsIGhvc3RUb2tlbnMsIHJlcXVpcmVkU2NoZW1lcyA9IFtdKSB7XG4gICAgICAgIGNvbnN0IG1lcmdlZFBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRzLCBwYXJhbWV0ZXJzKTtcblxuICAgICAgICBjb25zdCBkaWZmID0gdmFyaWFibGVzLmZpbHRlcihuYW1lID0+ICFtZXJnZWRQYXJhbXMuaGFzT3duUHJvcGVydHkobmFtZSkpO1xuICAgICAgICBpZiAoZGlmZi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBNaXNzaW5nTWFuZGF0b3J5UGFyYW1ldGVyc0V4Y2VwdGlvbihgU29tZSBtYW5kYXRvcnkgcGFyYW1ldGVycyBhcmUgbWlzc2luZyAoXCIke2RpZmYuam9pbignXCIsIFwiJyl9XCIpIHRvIGdlbmVyYXRlIGEgVVJMIGZvciByb3V0ZSBcIiR7bmFtZX1cIi5gKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHVybCA9ICcnO1xuICAgICAgICBsZXQgb3B0aW9uYWwgPSB0cnVlO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ1BhcmFtZXRlciBcIntwYXJhbWV0ZXJ9XCIgZm9yIHJvdXRlIFwie3JvdXRlfVwiIG11c3QgbWF0Y2ggXCJ7ZXhwZWN0ZWR9XCIgKFwie2dpdmVufVwiIGdpdmVuKSB0byBnZW5lcmF0ZSBhIGNvcnJlc3BvbmRpbmcgVVJMLic7XG5cbiAgICAgICAgZm9yIChjb25zdCB0b2tlbiBvZiB0b2tlbnMpIHtcbiAgICAgICAgICAgIGlmICgndmFyaWFibGUnID09PSB0b2tlblswXSkge1xuICAgICAgICAgICAgICAgIGlmICghb3B0aW9uYWwgfHwgIWRlZmF1bHRzLmhhc093blByb3BlcnR5KHRva2VuWzNdKSB8fCB2b2lkIDAgIT09IG1lcmdlZFBhcmFtc1t0b2tlblszXV0gJiYgbWVyZ2VkUGFyYW1zW3Rva2VuWzNdXS50b1N0cmluZygpICE9PSBkZWZhdWx0c1t0b2tlblszXV0udG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoJ14nICsgdG9rZW5bMl0gKyAnJCcsICEhdG9rZW5bNF0gPyAndScgOiAnJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIHJlZ2V4LnRlc3QobWVyZ2VkUGFyYW1zW3Rva2VuWzNdXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBJbnZhbGlkUGFyYW1ldGVyRXhjZXB0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fanltZm9ueS5zdHJ0cihtZXNzYWdlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd7cGFyYW1ldGVyfSc6IHRva2VuWzNdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAne3JvdXRlfSc6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd7ZXhwZWN0ZWR9JzogdG9rZW5bMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd7Z2l2ZW59JzogbWVyZ2VkUGFyYW1zW3Rva2VuWzNdXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdXJsID0gdG9rZW5bMV0gKyBtZXJnZWRQYXJhbXNbdG9rZW5bM11dICsgdXJsO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25hbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdXJsID0gdG9rZW5bMV0gKyB1cmw7XG4gICAgICAgICAgICAgICAgb3B0aW9uYWwgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1cmwgPT09ICcnKSB7XG4gICAgICAgICAgICB1cmwgPSAnLyc7XG4gICAgICAgIH1cblxuICAgICAgICB1cmwgPSBfX2p5bWZvbnkuc3RydHIoXG4gICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQodXJsKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csICclMjcnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXCgvZywgJyUyOCcpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcKS9nLCAnJTI5JyksXG4gICAgICAgICAgICBkZWNvZGVkQ2hhcnNcbiAgICAgICAgKTtcblxuICAgICAgICAvLyB0aGUgcGF0aCBzZWdtZW50cyBcIi5cIiBhbmQgXCIuLlwiIGFyZSBpbnRlcnByZXRlZCBhcyByZWxhdGl2ZSByZWZlcmVuY2Ugd2hlbiByZXNvbHZpbmcgYSBVUkk7IHNlZSBodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tMy4zXG4gICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gZW5jb2RlIHRoZW0gYXMgdGhleSBhcmUgbm90IHVzZWQgZm9yIHRoaXMgcHVycG9zZSBoZXJlXG4gICAgICAgIC8vIG90aGVyd2lzZSB3ZSB3b3VsZCBnZW5lcmF0ZSBhIFVSSSB0aGF0LCB3aGVuIGZvbGxvd2VkIGJ5IGEgdXNlciBhZ2VudCAoZS5nLiBicm93c2VyKSwgZG9lcyBub3QgbWF0Y2ggdGhpcyByb3V0ZVxuICAgICAgICB1cmwgPSBfX2p5bWZvbnkuc3RydHIodXJsLCB7Jy8uLi8nOiAnLyUyRSUyRS8nLCAnLy4vJzogJy8lMkUvJ30pO1xuICAgICAgICBpZiAoJy8uLicgPT09IHVybC5zdWJzdHIoLTMpKSB7XG4gICAgICAgICAgICB1cmwgPSB1cmwuc3Vic3RyKDAsIC0yKSArICclMkUlMkUnO1xuICAgICAgICB9IGVsc2UgaWYgKCcvLicgPT09IHVybC5zdWJzdHIoLTIpKSB7XG4gICAgICAgICAgICB1cmwgPSB1cmwuc3Vic3RyKDAsIC0xKSArICclMkUnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNjaGVtZUF1dGhvcml0eSA9ICcnO1xuICAgICAgICBsZXQgaG9zdCA9IHRoaXMuX2NvbnRleHQuaG9zdDtcbiAgICAgICAgaWYgKCEhIGhvc3QpIHtcbiAgICAgICAgICAgIGxldCBzY2hlbWUgPSB0aGlzLl9jb250ZXh0LnNjaGVtZTtcbiAgICAgICAgICAgIGlmIChyZXF1aXJlZFNjaGVtZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkU2NoZW1lcy5pbmRleE9mKHNjaGVtZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZVR5cGUgPSBVcmxHZW5lcmF0b3IuQUJTT0xVVEVfVVJMO1xuICAgICAgICAgICAgICAgICAgICBzY2hlbWUgPSByZXF1aXJlZFNjaGVtZXNbMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaG9zdFRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsZXQgcm91dGVIb3N0ID0gJyc7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCB0b2tlbiBvZiBob3N0VG9rZW5zKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgndmFyaWFibGUnID09PSB0b2tlblswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCdeJyArIHRva2VuWzJdICsgJyQnLCAhIXRva2VuWzRdID8gJ3UnIDogJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEgcmVnZXgudGVzdChtZXJnZWRQYXJhbXNbdG9rZW5bM11dKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBJbnZhbGlkUGFyYW1ldGVyRXhjZXB0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX2p5bWZvbnkuc3RydHIobWVzc2FnZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3twYXJhbWV0ZXJ9JzogdG9rZW5bM10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAne3JvdXRlfSc6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAne2V4cGVjdGVkfSc6IHRva2VuWzJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3tnaXZlbn0nOiBtZXJnZWRQYXJhbXNbdG9rZW5bM11dXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVIb3N0ID0gdG9rZW5bMV0gKyBtZXJnZWRQYXJhbXNbdG9rZW5bM11dICsgcm91dGVIb3N0O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVIb3N0ID0gdG9rZW5bMV0gKyByb3V0ZUhvc3Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocm91dGVIb3N0ICE9PSBob3N0KSB7XG4gICAgICAgICAgICAgICAgICAgIGhvc3QgPSByb3V0ZUhvc3Q7XG4gICAgICAgICAgICAgICAgICAgIGlmIChVcmxHZW5lcmF0b3IuQUJTT0xVVEVfVVJMICE9PSByZWZlcmVuY2VUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2VUeXBlID0gVXJsR2VuZXJhdG9yLk5FVFdPUktfUEFUSDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFVybEdlbmVyYXRvci5BQlNPTFVURV9VUkwgPT09IHJlZmVyZW5jZVR5cGUgfHwgVXJsR2VuZXJhdG9yLk5FVFdPUktfUEFUSCA9PT0gcmVmZXJlbmNlVHlwZSkge1xuICAgICAgICAgICAgICAgIGxldCBwb3J0ID0gJyc7XG4gICAgICAgICAgICAgICAgaWYgKCdodHRwJyA9PT0gc2NoZW1lICYmIDgwICE9PSB0aGlzLl9jb250ZXh0Lmh0dHBQb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcnQgKz0gJzonICsgdGhpcy5fY29udGV4dC5odHRwUG9ydDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCdodHRwcycgPT09IHNjaGVtZSAmJiA0NDMgIT09IHRoaXMuX2NvbnRleHQuaHR0cHNQb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcnQgKz0gJzonICsgdGhpcy5fY29udGV4dC5odHRwc1BvcnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2NoZW1lQXV0aG9yaXR5ID0gVXJsR2VuZXJhdG9yLk5FVFdPUktfUEFUSCA9PT0gcmVmZXJlbmNlVHlwZSA/ICcvLycgOiBgJHtzY2hlbWV9Oi8vYDtcbiAgICAgICAgICAgICAgICBzY2hlbWVBdXRob3JpdHkgKz0gaG9zdCArIHBvcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVXJsR2VuZXJhdG9yLlJFTEFUSVZFX1BBVEggPT09IHJlZmVyZW5jZVR5cGUpIHtcbiAgICAgICAgICAgIHVybCA9IFVybEdlbmVyYXRvci5nZXRSZWxhdGl2ZVBhdGgodGhpcy5fY29udGV4dC5wYXRoaW5mbywgdXJsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVybCA9IHNjaGVtZUF1dGhvcml0eSArIHVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCBhIHF1ZXJ5IHN0cmluZyBpZiBuZWVkZWRcbiAgICAgICAgY29uc3QgZXh0cmFzID0gT2JqZWN0LmtleXMocGFyYW1ldGVycylcbiAgICAgICAgICAgIC5maWx0ZXIobmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhcmlhYmxlcy5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGRlZmF1bHRzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWZhdWx0c1tuYW1lXSA9PSBwYXJhbWV0ZXJzW25hbWVdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gZXh0cmFjdCBmcmFnbWVudFxuICAgICAgICBsZXQgZnJhZ21lbnQgPSAnJztcbiAgICAgICAgaWYgKGRlZmF1bHRzLl9mcmFnbWVudCkge1xuICAgICAgICAgICAgZnJhZ21lbnQgPSBkZWZhdWx0cy5fZnJhZ21lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaWR4O1xuICAgICAgICBpZiAoKGlkeCA9IGV4dHJhcy5pbmRleE9mKCdfZnJhZ21lbnQnKSkgIT09IC0xKSB7XG4gICAgICAgICAgICBmcmFnbWVudCA9IHBhcmFtZXRlcnMuX2ZyYWdtZW50O1xuICAgICAgICAgICAgZGVsZXRlIGV4dHJhc1tpZHhdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV4dHJhcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gT2JqZWN0LmtleXMocGFyYW1ldGVycylcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGsgPT4gZXh0cmFzLmluZGV4T2YoaykgIT09IC0xKVxuICAgICAgICAgICAgICAgIC5tYXAoayA9PiBlbmNvZGVVUklDb21wb25lbnQoaykgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1ldGVyc1trXSkpXG4gICAgICAgICAgICAgICAgLmpvaW4oJyYnKTtcblxuICAgICAgICAgICAgdXJsICs9ICc/JyArIF9fanltZm9ueS5zdHJ0cihxdWVyeSwgeyclMkYnOiAnLyd9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgnJyAhPT0gZnJhZ21lbnQpIHtcbiAgICAgICAgICAgIGZyYWdtZW50ID0gZW5jb2RlVVJJQ29tcG9uZW50KGZyYWdtZW50KVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8hL2csICclMjEnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csICclMjcnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXCgvZywgJyUyOCcpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcKS9nLCAnJTI5JylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwqL2csICclMkEnKTtcblxuICAgICAgICAgICAgdXJsICs9ICcjJyArIF9fanltZm9ueS5zdHJ0cihmcmFnbWVudCwgeyclMkYnOiAnLycsICclM0YnOiAnPyd9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdGFyZ2V0IHBhdGggYXMgcmVsYXRpdmUgcmVmZXJlbmNlIGZyb20gdGhlIGJhc2UgcGF0aC5cbiAgICAgKlxuICAgICAqIE9ubHkgdGhlIFVSSXMgcGF0aCBjb21wb25lbnQgKG5vIHNjaGVtYSwgaG9zdCBldGMuKSBpcyByZWxldmFudCBhbmQgbXVzdCBiZSBnaXZlbiwgc3RhcnRpbmcgd2l0aCBhIHNsYXNoLlxuICAgICAqIEJvdGggcGF0aHMgbXVzdCBiZSBhYnNvbHV0ZSBhbmQgbm90IGNvbnRhaW4gcmVsYXRpdmUgcGFydHMuXG4gICAgICogUmVsYXRpdmUgVVJMcyBmcm9tIG9uZSByZXNvdXJjZSB0byBhbm90aGVyIGFyZSB1c2VmdWwgd2hlbiBnZW5lcmF0aW5nIHNlbGYtY29udGFpbmVkIGRvd25sb2FkYWJsZSBkb2N1bWVudCBhcmNoaXZlcy5cbiAgICAgKiBGdXJ0aGVybW9yZSwgdGhleSBjYW4gYmUgdXNlZCB0byByZWR1Y2UgdGhlIGxpbmsgc2l6ZSBpbiBkb2N1bWVudHMuXG4gICAgICpcbiAgICAgKiBFeGFtcGxlIHRhcmdldCBwYXRocywgZ2l2ZW4gYSBiYXNlIHBhdGggb2YgXCIvYS9iL2MvZFwiOlxuICAgICAqIC0gXCIvYS9iL2MvZFwiICAgICAtPiBcIlwiXG4gICAgICogLSBcIi9hL2IvYy9cIiAgICAgIC0+IFwiLi9cIlxuICAgICAqIC0gXCIvYS9iL1wiICAgICAgICAtPiBcIi4uL1wiXG4gICAgICogLSBcIi9hL2IvYy9vdGhlclwiIC0+IFwib3RoZXJcIlxuICAgICAqIC0gXCIvYS94L3lcIiAgICAgICAtPiBcIi4uLy4uL3gveVwiXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYmFzZVBhdGggICBUaGUgYmFzZSBwYXRoXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRhcmdldFBhdGggVGhlIHRhcmdldCBwYXRoXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcmVsYXRpdmUgdGFyZ2V0IHBhdGhcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UmVsYXRpdmVQYXRoKGJhc2VQYXRoLCB0YXJnZXRQYXRoKSB7XG4gICAgICAgIGlmIChiYXNlUGF0aCA9PT0gdGFyZ2V0UGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc291cmNlRGlycyA9ICgnLycgPT09IGJhc2VQYXRoLmNoYXJBdCgwKSA/IGJhc2VQYXRoLnN1YnN0cigxKSA6IGJhc2VQYXRoKS5zcGxpdCgnLycpO1xuICAgICAgICBjb25zdCB0YXJnZXREaXJzID0gKCcvJyA9PT0gdGFyZ2V0UGF0aC5jaGFyQXQoMCkgPyB0YXJnZXRQYXRoLnN1YnN0cigxKSA6IHRhcmdldFBhdGgpLnNwbGl0KCcvJyk7XG5cbiAgICAgICAgc291cmNlRGlycy5wb3AoKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0RmlsZSA9IHRhcmdldERpcnMucG9wKCk7XG5cbiAgICAgICAgZm9yIChjb25zdCBbIGksIGRpciBdIG9mIF9fanltZm9ueS5nZXRFbnRyaWVzKHNvdXJjZURpcnMpKSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0RGlyc1tpXSAmJiBkaXIgPT09IHRhcmdldERpcnNbaV0pIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgc291cmNlRGlyc1tpXTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGFyZ2V0RGlyc1tpXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXREaXJzLnB1c2godGFyZ2V0RmlsZSk7XG4gICAgICAgIGNvbnN0IHBhdGggPSAnLi4vJy5yZXBlYXQoc291cmNlRGlycy5sZW5ndGgpICsgdGFyZ2V0RGlycy5qb2luKCcvJyk7XG5cbiAgICAgICAgLy8gQSByZWZlcmVuY2UgdG8gdGhlIHNhbWUgYmFzZSBkaXJlY3Rvcnkgb3IgYW4gZW1wdHkgc3ViZGlyZWN0b3J5IG11c3QgYmUgcHJlZml4ZWQgd2l0aCBcIi4vXCIuXG4gICAgICAgIC8vIFRoaXMgYWxzbyBhcHBsaWVzIHRvIGEgc2VnbWVudCB3aXRoIGEgY29sb24gY2hhcmFjdGVyIChlLmcuLCBcImZpbGU6Y29sb25cIikgdGhhdCBjYW5ub3QgYmUgdXNlZFxuICAgICAgICAvLyBhcyB0aGUgZmlyc3Qgc2VnbWVudCBvZiBhIHJlbGF0aXZlLXBhdGggcmVmZXJlbmNlLCBhcyBpdCB3b3VsZCBiZSBtaXN0YWtlbiBmb3IgYSBzY2hlbWUgbmFtZVxuICAgICAgICAvLyAoc2VlIGh0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi00LjIpLlxuICAgICAgICBsZXQgY29sb25Qb3MsIHNsYXNoUG9zO1xuICAgICAgICByZXR1cm4gJycgPT09IHBhdGggfHwgJy8nID09PSBwYXRoLmNoYXJBdCgwKVxuICAgICAgICAgICAgfHwgLTEgIT09IChjb2xvblBvcyA9IHBhdGguaW5kZXhPZignOicpKSAmJiAoY29sb25Qb3MgPCAoc2xhc2hQb3MgPSBwYXRoLmluZGV4T2YoJy8nKSkgfHwgLTEgPT09IHNsYXNoUG9zKVxuICAgICAgICAgICAgPyBgLi8ke3BhdGh9YCA6IHBhdGg7XG4gICAgfVxufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhbiBhYnNvbHV0ZSBVUkwsIGUuZy4gXCJodHRwOi8vZXhhbXBsZS5jb20vZGlyL2ZpbGVcIi5cbiAqL1xuVXJsR2VuZXJhdG9yLkFCU09MVVRFX1VSTCA9IDA7XG5cbi8qKlxuICogR2VuZXJhdGVzIGFuIGFic29sdXRlIHBhdGgsIGUuZy4gXCIvZGlyL2ZpbGVcIi5cbiAqL1xuVXJsR2VuZXJhdG9yLkFCU09MVVRFX1BBVEggPSAxO1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHJlbGF0aXZlIHBhdGggYmFzZWQgb24gdGhlIGN1cnJlbnQgcmVxdWVzdCBwYXRoLCBlLmcuIFwiLi4vcGFyZW50LWZpbGVcIi5cbiAqXG4gKiBAc2VlIFVybEdlbmVyYXRvci5nZXRSZWxhdGl2ZVBhdGgoKVxuICovXG5VcmxHZW5lcmF0b3IuUkVMQVRJVkVfUEFUSCA9IDI7XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgbmV0d29yayBwYXRoLCBlLmcuIFwiLy9leGFtcGxlLmNvbS9kaXIvZmlsZVwiLlxuICogU3VjaCByZWZlcmVuY2UgcmV1c2VzIHRoZSBjdXJyZW50IHNjaGVtZSBidXQgc3BlY2lmaWVzIHRoZSBob3N0LlxuICovXG5VcmxHZW5lcmF0b3IuTkVUV09SS19QQVRIID0gMztcblxuZXhwb3J0IGRlZmF1bHQgVXJsR2VuZXJhdG9yO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvVXJsR2VuZXJhdG9yLmpzIiwiZ2xvYmFsLmlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuY29uc3QgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5yZXF1aXJlKCcuL0lzL2Z1bmN0aW9ucycpO1xuXG5pZiAoISBpc0Z1bmN0aW9uKGdsb2JhbC5pc09iamVjdCkpIHtcbiAgICBnbG9iYWwuaXNPYmplY3QgPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgIHJldHVybiAhISBhcmcgJiYgJ29iamVjdCcgPT09IHR5cGVvZiBhcmc7XG4gICAgfTtcbn1cblxuZm9yKGNvbnN0IG5hbWUgb2YgWyAnQXJndW1lbnRzJywgJ0Jvb2xlYW4nLCAnU3RyaW5nJywgJ051bWJlcicsICdEYXRlJywgJ1JlZ0V4cCcsICdFcnJvcicsICdTeW1ib2wnLCAnTWFwJywgJ1dlYWtNYXAnLCAnU2V0JywgJ1dlYWtTZXQnIF0pIHtcbiAgICBpZiAoaXNGdW5jdGlvbihnbG9iYWxbJ2lzJyArIG5hbWVdKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBnbG9iYWxbJ2lzJyArIG5hbWVdID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCAnICsgbmFtZSArICddJztcbiAgICB9O1xufVxuXG5jb25zdCBwcmltaXRpdmVzID0gWyBOdW1iZXIsIFN0cmluZywgQm9vbGVhbiBdO1xuZ2xvYmFsLmlzU2NhbGFyID0gZnVuY3Rpb24gaXNTY2FsYXIodmFsdWUpIHtcbiAgICBpZiAodW5kZWZpbmVkID09PSB2YWx1ZSB8fCBudWxsID09PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xuICAgIGZvciAoY29uc3QgdHlwZSBvZiBwcmltaXRpdmVzKSB7XG4gICAgICAgIGlmIChwcm90byA9PT0gdHlwZS5wcm90b3R5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuZ2xvYmFsLmlzT2JqZWN0TGl0ZXJhbCA9IGZ1bmN0aW9uIGlzT2JqZWN0TGl0ZXJhbCh2YWx1ZSkge1xuICAgIGlmIChudWxsID09PSB2YWx1ZSB8fCB1bmRlZmluZWQgPT09IHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKSA9PT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHt9KTtcbn07XG5cbmdsb2JhbC5pc1Byb21pc2UgPSBmdW5jdGlvbiBpc1Byb21pc2UodmFsdWUpIHtcbiAgICByZXR1cm4gaXNGdW5jdGlvbih2YWx1ZS50aGVuKTtcbn07XG5cbmdsb2JhbC5pc1N0cmVhbSA9IGZ1bmN0aW9uIGlzU3RyZWFtKHN0cmVhbSkge1xuICAgIHJldHVybiAnb2JqZWN0JyA9PT0gdHlwZW9mIHN0cmVhbSAmJiBpc0Z1bmN0aW9uKHN0cmVhbS5waXBlKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvQGp5bWZvbnkvdXRpbC9saWIvaXMuanMiLCJnbG9iYWwuaXNHZW5lcmF0b3IgPSBmdW5jdGlvbiBpc0dlbmVyYXRvcih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiAnZnVuY3Rpb24nID09PSB0eXBlb2YgdmFsdWUubmV4dCAmJiAnZnVuY3Rpb24nID09PSB0eXBlb2YgdmFsdWUudGhyb3c7XG59O1xuXG5nbG9iYWwuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzR2VuZXJhdG9yRnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAoISB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGlzR2VuZXJhdG9yKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgY29uc3RydWN0b3IgPSB2YWx1ZS5jb25zdHJ1Y3RvcjtcblxuICAgIGlmICghIGNvbnN0cnVjdG9yKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoJ0dlbmVyYXRvckZ1bmN0aW9uJyA9PT0gY29uc3RydWN0b3IubmFtZSB8fCAnR2VuZXJhdG9yRnVuY3Rpb24nID09PSBjb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNHZW5lcmF0b3IoY29uc3RydWN0b3IucHJvdG90eXBlKTtcbn07XG5cbmlmIChfX2p5bWZvbnkuUGxhdGZvcm0uaGFzQXN5bmNGdW5jdGlvblN1cHBvcnQoKSkge1xuICAgIGdsb2JhbC5pc0FzeW5jRnVuY3Rpb24gPSBmdW5jdGlvbiBpc0FzeW5jRnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29uc3RydWN0b3IgPSB2YWx1ZS5jb25zdHJ1Y3RvcjtcbiAgICAgICAgaWYgKCFjb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICdBc3luY0Z1bmN0aW9uJyA9PT0gKGNvbnN0cnVjdG9yLm5hbWUgfHwgY29uc3RydWN0b3IuZGlzcGxheU5hbWUpO1xuICAgIH07XG59IGVsc2Uge1xuICAgIGdsb2JhbC5pc0FzeW5jRnVuY3Rpb24gPSBmdW5jdGlvbiBpc0FzeW5jRnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xufVxuXG5nbG9iYWwuaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mIEJvdW5kRnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGlzR2VuZXJhdG9yRnVuY3Rpb24ob2JqKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoaXNBc3luY0Z1bmN0aW9uKG9iaikpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuICdbb2JqZWN0IEZ1bmN0aW9uXScgPT09IHRvU3RyaW5nLmNhbGwob2JqKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvQGp5bWZvbnkvdXRpbC9saWIvSXMvZnVuY3Rpb25zLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5nbG9iYWwuX19qeW1mb255ID0gZ2xvYmFsLl9fanltZm9ueSB8fCB7fTtcblxuLyoqXG4gKiBHZXQgW0tleSwgVmFsdWVdIHBhaXJzIGZvciBhbiBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0XG4gKlxuICogQHJldHVybnMge0dlbmVyYXRvcn1cbiAqL1xuY29uc3QgZW50cmllcyA9IGZ1bmN0aW9uICogb2JqZW50cmllcyhvYmplY3QpIHtcbiAgICBpZiAoaXNBcnJheShvYmplY3QpKSB7XG4gICAgICAgIGZvciAoY29uc3QgayBvZiBvYmplY3Qua2V5cygpKSB7XG4gICAgICAgICAgICB5aWVsZCBbIGssIG9iamVjdFtrXSBdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBNYXApIHtcbiAgICAgICAgcmV0dXJuIG9iamVjdC5lbnRyaWVzKCk7XG4gICAgfVxuXG4gICAgaWYgKCEgaXNPYmplY3Qob2JqZWN0KSkge1xuICAgICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uKCdBcmd1bWVudCAxIGlzIG5vdCBhbiBvYmplY3QnKTtcbiAgICB9XG5cbiAgICBpZiAoT2JqZWN0LmVudHJpZXMpIHtcbiAgICAgICAgeWllbGQgKiBPYmplY3QuZW50cmllcyhvYmplY3QpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgIGlmICghIG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHlpZWxkIFsga2V5LCBvYmplY3Rba2V5XSBdO1xuICAgIH1cbn07XG5cbmdsb2JhbC5fX2p5bWZvbnkuZ2V0RW50cmllcyA9IGVudHJpZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvQGp5bWZvbnkvdXRpbC9saWIvT2JqZWN0L2VudHJpZXMuanMiLCIndXNlIHN0cmljdCc7XG5cbmdsb2JhbC5fX2p5bWZvbnkgPSBnbG9iYWwuX19qeW1mb255IHx8IHt9O1xuXG5nbG9iYWwuX19qeW1mb255LnN0cnRyID0gZnVuY3Rpb24gc3RydHIoc3RyaW5nLCByZXBsYWNlUGFpcnMpIHtcbiAgICBsZXQgc3RyID0gc3RyaW5nLnRvU3RyaW5nKCksIHJlO1xuXG4gICAgZm9yIChsZXQgWyBrZXksIHZhbHVlIF0gb2YgX19qeW1mb255LmdldEVudHJpZXMocmVwbGFjZVBhaXJzKSkge1xuICAgICAgICBrZXkgPSBrZXkucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy5dL2csICdcXFxcJCYnKTtcbiAgICAgICAgcmUgPSBuZXcgUmVnRXhwKGtleSwgJ2cnKTtcbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UocmUsIHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9AanltZm9ueS91dGlsL2xpYi9TdHJpbmcvc3RydHIuanMiLCJjb25zdCBJbnZhbGlkQXJndW1lbnRFeGNlcHRpb24gPSByZXF1aXJlKCcuL0ludmFsaWRBcmd1bWVudEV4Y2VwdGlvbicpO1xuXG4vKipcbiAqIEV4Y2VwdGlvbiB0aHJvd24gd2hlbiBhIHBhcmFtZXRlciBpcyBub3QgdmFsaWQuXG4gKi9cbmNsYXNzIEludmFsaWRQYXJhbWV0ZXJFeGNlcHRpb24gZXh0ZW5kcyBJbnZhbGlkQXJndW1lbnRFeGNlcHRpb24ge1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEludmFsaWRQYXJhbWV0ZXJFeGNlcHRpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9FeGNlcHRpb24vSW52YWxpZFBhcmFtZXRlckV4Y2VwdGlvbi5qcyIsImNvbnN0IEludmFsaWRBcmd1bWVudEV4Y2VwdGlvbiA9IHJlcXVpcmUoJy4vSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uJyk7XG5cbi8qKlxuICogRXhjZXB0aW9uIHRocm93biB3aGVuIGEgcm91dGUgY2Fubm90IGJlIGdlbmVyYXRlZCBiZWNhdXNlIG9mIG1pc3NpbmdcbiAqIG1hbmRhdG9yeSBwYXJhbWV0ZXJzLlxuICovXG5jbGFzcyBNaXNzaW5nTWFuZGF0b3J5UGFyYW1ldGVyc0V4Y2VwdGlvbiBleHRlbmRzIEludmFsaWRBcmd1bWVudEV4Y2VwdGlvbiB7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWlzc2luZ01hbmRhdG9yeVBhcmFtZXRlcnNFeGNlcHRpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9FeGNlcHRpb24vTWlzc2luZ01hbmRhdG9yeVBhcmFtZXRlcnNFeGNlcHRpb24uanMiLCJjb25zdCBJbnZhbGlkQXJndW1lbnRFeGNlcHRpb24gPSByZXF1aXJlKCcuL0ludmFsaWRBcmd1bWVudEV4Y2VwdGlvbicpO1xuXG4vKipcbiAqIEV4Y2VwdGlvbiB0aHJvd24gd2hlbiBhIHJvdXRlIGRvZXMgbm90IGV4aXN0LlxuICovXG5jbGFzcyBSb3V0ZU5vdEZvdW5kRXhjZXB0aW9uIGV4dGVuZHMgSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uIHtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSb3V0ZU5vdEZvdW5kRXhjZXB0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvRXhjZXB0aW9uL1JvdXRlTm90Rm91bmRFeGNlcHRpb24uanMiXSwic291cmNlUm9vdCI6IiJ9