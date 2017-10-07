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
__webpack_require__(7);

var InvalidParameterException = __webpack_require__(8);
var MissingMandatoryParametersException = __webpack_require__(9);
var RouteNotFoundException = __webpack_require__(10);

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
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzc5MTNkZmQ4MWY3ODRkYTM3ZDkiLCJ3ZWJwYWNrOi8vLy4vanMvRXhjZXB0aW9uL0ludmFsaWRBcmd1bWVudEV4Y2VwdGlvbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9VcmxHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqeW1mb255L3V0aWwvbGliL09iamVjdC9lbnRyaWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanltZm9ueS91dGlsL2xpYi9TdHJpbmcvc3RydHIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvRXhjZXB0aW9uL0ludmFsaWRQYXJhbWV0ZXJFeGNlcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vanMvRXhjZXB0aW9uL01pc3NpbmdNYW5kYXRvcnlQYXJhbWV0ZXJzRXhjZXB0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL0V4Y2VwdGlvbi9Sb3V0ZU5vdEZvdW5kRXhjZXB0aW9uLmpzIl0sIm5hbWVzIjpbIkludmFsaWRBcmd1bWVudEV4Y2VwdGlvbiIsIkVycm9yIiwibW9kdWxlIiwiZXhwb3J0cyIsImciLCJGdW5jdGlvbiIsImV2YWwiLCJlIiwid2luZG93IiwiVXJsR2VuZXJhdG9yIiwiZ2xvYmFsIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsInVuZGVmaW5lZCIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiaW5Nb2R1bGUiLCJydW50aW1lIiwicmVnZW5lcmF0b3JSdW50aW1lIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIl9pbnZva2UiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsIm9iaiIsImFyZyIsInR5cGUiLCJjYWxsIiwiZXJyIiwiR2VuU3RhdGVTdXNwZW5kZWRTdGFydCIsIkdlblN0YXRlU3VzcGVuZGVkWWllbGQiLCJHZW5TdGF0ZUV4ZWN1dGluZyIsIkdlblN0YXRlQ29tcGxldGVkIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiY29uc3RydWN0b3IiLCJkaXNwbGF5TmFtZSIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsIl9fYXdhaXQiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsInZhbHVlIiwiUHJvbWlzZSIsInRoZW4iLCJ1bndyYXBwZWQiLCJwcmV2aW91c1Byb21pc2UiLCJlbnF1ZXVlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJhc3luYyIsIml0ZXIiLCJuZXh0IiwiZG9uZSIsInN0YXRlIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJyZXR1cm4iLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHRMb2MiLCJ0b1N0cmluZyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0Iiwia2V5cyIsIm9iamVjdCIsImtleSIsInJldmVyc2UiLCJsZW5ndGgiLCJwb3AiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJpIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290RW50cnkiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsIndlYnBhY2tQb2x5ZmlsbCIsImRlcHJlY2F0ZSIsInBhdGhzIiwiY2hpbGRyZW4iLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJsIiwicmVxdWlyZSIsIkludmFsaWRQYXJhbWV0ZXJFeGNlcHRpb24iLCJNaXNzaW5nTWFuZGF0b3J5UGFyYW1ldGVyc0V4Y2VwdGlvbiIsIlJvdXRlTm90Rm91bmRFeGNlcHRpb24iLCJkZWNvZGVkQ2hhcnMiLCJyb3V0ZUNvbGxlY3Rpb24iLCJfcm91dGVDb2xsZWN0aW9uIiwiYXNzaWduIiwic2NoZW1lIiwibG9jYXRpb24iLCJwcm90b2NvbCIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsImlzU2VjdXJlIiwiX2NvbnRleHQiLCJwYXRoaW5mbyIsInBhdGhuYW1lIiwiaG9zdCIsImhvc3RuYW1lIiwiaHR0cFBvcnQiLCJwb3J0IiwiaHR0cHNQb3J0IiwicXVlcnlTdHJpbmciLCJzZWFyY2giLCJlbnRyaWVzIiwicm91dGUiLCJwYXJhbWV0ZXJzIiwicmVmZXJlbmNlVHlwZSIsIkFCU09MVVRFX1BBVEgiLCJfZG9HZW5lcmF0ZSIsInZhcmlhYmxlcyIsImRlZmF1bHRzIiwidG9rZW5zIiwiaG9zdFRva2VucyIsInNjaGVtZXMiLCJyZXF1aXJlZFNjaGVtZXMiLCJtZXJnZWRQYXJhbXMiLCJkaWZmIiwiZmlsdGVyIiwiam9pbiIsInVybCIsIm9wdGlvbmFsIiwibWVzc2FnZSIsInRva2VuIiwicmVnZXgiLCJSZWdFeHAiLCJ0ZXN0IiwiX19qeW1mb255Iiwic3RydHIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzdWJzdHIiLCJzY2hlbWVBdXRob3JpdHkiLCJpbmRleE9mIiwiQUJTT0xVVEVfVVJMIiwicm91dGVIb3N0IiwiTkVUV09SS19QQVRIIiwiUkVMQVRJVkVfUEFUSCIsImdldFJlbGF0aXZlUGF0aCIsImV4dHJhcyIsImZyYWdtZW50IiwiX2ZyYWdtZW50IiwiaWR4IiwicXVlcnkiLCJrIiwibWFwIiwiYmFzZVBhdGgiLCJ0YXJnZXRQYXRoIiwic291cmNlRGlycyIsInNwbGl0IiwidGFyZ2V0RGlycyIsInRhcmdldEZpbGUiLCJnZXRFbnRyaWVzIiwiZGlyIiwicGF0aCIsInJlcGVhdCIsImNvbG9uUG9zIiwic2xhc2hQb3MiLCJvYmplbnRyaWVzIiwiaXNBcnJheSIsIk1hcCIsImlzT2JqZWN0Iiwic3RyaW5nIiwicmVwbGFjZVBhaXJzIiwic3RyIiwicmUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtB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QUE3Qjs7QUFEMEQ7QUFBQTtBQUFBOztBQUFBO0FBRzFELDZCQUEyQnJDLFVBQVV3QixVQUFWLENBQXFCVyxZQUFyQixDQUEzQiw4SEFBK0Q7QUFBQTs7QUFBQTs7QUFBQSxnQkFBcERySCxHQUFvRDtBQUFBLGdCQUEvQ3hDLEtBQStDOztBQUMzRHdDLGtCQUFNQSxJQUFJOEMsT0FBSixDQUFZLHFCQUFaLEVBQW1DLE1BQW5DLENBQU47QUFDQXlFLGlCQUFLLElBQUl2QyxNQUFKLENBQVdoRixHQUFYLEVBQWdCLEdBQWhCLENBQUw7QUFDQXNILGtCQUFNQSxJQUFJeEUsT0FBSixDQUFZeUUsRUFBWixFQUFnQi9KLEtBQWhCLENBQU47QUFDSDtBQVB5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVMxRCxXQUFPOEosR0FBUDtBQUNILENBVkQsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBLElBQU0vTywyQkFBMkIsbUJBQUE0SixDQUFRLENBQVIsQ0FBakM7O0FBRUE7Ozs7SUFHTUMseUI7Ozs7Ozs7Ozs7RUFBa0M3Six3Qjs7QUFHeENFLE9BQU9DLE9BQVAsR0FBaUIwSix5QkFBakIsQzs7Ozs7Ozs7Ozs7Ozs7O0FDUkEsSUFBTTdKLDJCQUEyQixtQkFBQTRKLENBQVEsQ0FBUixDQUFqQzs7QUFFQTs7Ozs7SUFJTUUsbUM7Ozs7Ozs7Ozs7RUFBNEM5Six3Qjs7QUFHbERFLE9BQU9DLE9BQVAsR0FBaUIySixtQ0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7O0FDVEEsSUFBTTlKLDJCQUEyQixtQkFBQTRKLENBQVEsQ0FBUixDQUFqQzs7QUFFQTs7OztJQUdNRyxzQjs7Ozs7Ozs7OztFQUErQi9KLHdCOztBQUdyQ0UsT0FBT0MsT0FBUCxHQUFpQjRKLHNCQUFqQixDIiwiZmlsZSI6InVybC1nZW5lcmF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjNzkxM2RmZDgxZjc4NGRhMzdkOSIsIi8qKlxuICogQmFzZSBFcnJvciBjbGFzcy5cbiAqL1xuY2xhc3MgSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uIGV4dGVuZHMgRXJyb3Ige1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEludmFsaWRBcmd1bWVudEV4Y2VwdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL0V4Y2VwdGlvbi9JbnZhbGlkQXJndW1lbnRFeGNlcHRpb24uanMiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwiaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCI7XG5pbXBvcnQgVXJsR2VuZXJhdG9yIGZyb20gJy4vVXJsR2VuZXJhdG9yJztcblxud2luZG93LlVybEdlbmVyYXRvciA9IFVybEdlbmVyYXRvcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2luZGV4LmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9tYXN0ZXIvTElDRU5TRSBmaWxlLiBBblxuICogYWRkaXRpb25hbCBncmFudCBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluXG4gKiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsInJlcXVpcmUoJ0BqeW1mb255L3V0aWwvbGliL09iamVjdC9lbnRyaWVzJyk7XG5yZXF1aXJlKCdAanltZm9ueS91dGlsL2xpYi9TdHJpbmcvc3RydHInKTtcblxuY29uc3QgSW52YWxpZFBhcmFtZXRlckV4Y2VwdGlvbiA9IHJlcXVpcmUoJy4vRXhjZXB0aW9uL0ludmFsaWRQYXJhbWV0ZXJFeGNlcHRpb24nKTtcbmNvbnN0IE1pc3NpbmdNYW5kYXRvcnlQYXJhbWV0ZXJzRXhjZXB0aW9uID0gcmVxdWlyZSgnLi9FeGNlcHRpb24vTWlzc2luZ01hbmRhdG9yeVBhcmFtZXRlcnNFeGNlcHRpb24nKTtcbmNvbnN0IFJvdXRlTm90Rm91bmRFeGNlcHRpb24gPSByZXF1aXJlKCcuL0V4Y2VwdGlvbi9Sb3V0ZU5vdEZvdW5kRXhjZXB0aW9uJyk7XG5cbmNvbnN0IGRlY29kZWRDaGFycyA9IHtcbiAgICAnJTJGJzogJy8nLFxuICAgICclNDAnOiAnQCcsXG4gICAgJyUzQSc6ICc6JyxcbiAgICAnJTNCJzogJzsnLFxuICAgICclMkMnOiAnLCcsXG4gICAgJyUzRCc6ICc9JyxcbiAgICAnJTJCJzogJysnLFxuICAgICclMjEnOiAnIScsXG4gICAgJyUyQSc6ICcqJyxcbiAgICAnJTdDJzogJ3wnLFxufTtcblxuY2xhc3MgVXJsR2VuZXJhdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcihyb3V0ZUNvbGxlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5fcm91dGVDb2xsZWN0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgcm91dGVDb2xsZWN0aW9uKTtcblxuICAgICAgICBjb25zdCBzY2hlbWUgPSBsb2NhdGlvbi5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBpc1NlY3VyZSA9IHNjaGVtZSA9PT0gJ2h0dHBzJztcblxuICAgICAgICB0aGlzLl9jb250ZXh0ID0ge1xuICAgICAgICAgICAgcGF0aGluZm86IGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgICAgICAgaG9zdDogbG9jYXRpb24uaG9zdG5hbWUsXG4gICAgICAgICAgICBzY2hlbWUsXG4gICAgICAgICAgICBodHRwUG9ydDogaXNTZWN1cmUgPyA4MCA6IH5+KGxvY2F0aW9uLnBvcnQgfHwgODApLFxuICAgICAgICAgICAgaHR0cHNQb3J0OiBpc1NlY3VyZSA/IH5+KGxvY2F0aW9uLnBvcnQgfHwgNDQzKSA6IDQ0MyxcbiAgICAgICAgICAgIHF1ZXJ5U3RyaW5nOiBsb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgcm91dGVzIHRvIHJvdXRlciBjb2xsZWN0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBPYmplY3Q+fSByb3V0ZUNvbGxlY3Rpb25cbiAgICAgKi9cbiAgICBhZGRSb3V0ZXMocm91dGVDb2xsZWN0aW9uKSB7XG4gICAgICAgIGZvciAoY29uc3QgWyBuYW1lLCByb3V0ZSBdIG9mIE9iamVjdC5lbnRyaWVzKHJvdXRlQ29sbGVjdGlvbikpIHtcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlQ29sbGVjdGlvbltuYW1lXSA9IHJvdXRlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgVVJMIG9yIHBhdGggZm9yIGEgc3BlY2lmaWMgcm91dGUgYmFzZWQgb24gdGhlIGdpdmVuIHBhcmFtZXRlcnMuXG4gICAgICpcbiAgICAgKiBQYXJhbWV0ZXJzIHRoYXQgcmVmZXJlbmNlIHBsYWNlaG9sZGVycyBpbiB0aGUgcm91dGUgcGF0dGVybiB3aWxsIHN1YnN0aXR1dGUgdGhlbSBpbiB0aGVcbiAgICAgKiBwYXRoIG9yIGhvc3QuIEV4dHJhIHBhcmFtcyBhcmUgYWRkZWQgYXMgcXVlcnkgc3RyaW5nIHRvIHRoZSBVUkwuXG4gICAgICpcbiAgICAgKiBXaGVuIHRoZSBwYXNzZWQgcmVmZXJlbmNlIHR5cGUgY2Fubm90IGJlIGdlbmVyYXRlZCBmb3IgdGhlIHJvdXRlIGJlY2F1c2UgaXQgcmVxdWlyZXMgYSBkaWZmZXJlbnRcbiAgICAgKiBob3N0IG9yIHNjaGVtZSB0aGFuIHRoZSBjdXJyZW50IG9uZSwgdGhlIG1ldGhvZCB3aWxsIHJldHVybiBhIG1vcmUgY29tcHJlaGVuc2l2ZSByZWZlcmVuY2VcbiAgICAgKiB0aGF0IGluY2x1ZGVzIHRoZSByZXF1aXJlZCBwYXJhbXMuIEZvciBleGFtcGxlLCB3aGVuIHlvdSBjYWxsIHRoaXMgbWV0aG9kIHdpdGggcmVmZXJlbmNlVHlwZSA9IEFCU09MVVRFX1BBVEhcbiAgICAgKiBidXQgdGhlIHJvdXRlIHJlcXVpcmVzIHRoZSBodHRwcyBzY2hlbWUgd2hlcmVhcyB0aGUgY3VycmVudCBzY2hlbWUgaXMgaHR0cCwgaXQgd2lsbCBpbnN0ZWFkIHJldHVybiBhblxuICAgICAqIEFCU09MVVRFX1VSTCB3aXRoIHRoZSBodHRwcyBzY2hlbWUgYW5kIHRoZSBjdXJyZW50IGhvc3QuIFRoaXMgbWFrZXMgc3VyZSB0aGUgZ2VuZXJhdGVkIFVSTCBtYXRjaGVzXG4gICAgICogdGhlIHJvdXRlIGluIGFueSBjYXNlLlxuICAgICAqXG4gICAgICogV2lsbCB0aHJvdyBhbiBlcnJvciBpZiB0aGVyZSBpcyBubyByb3V0ZSB3aXRoIHRoZSBnaXZlbiBuYW1lXG4gICAgICpcbiAgICAgKiBUaGUgc3BlY2lhbCBwYXJhbWV0ZXIgX2ZyYWdtZW50IHdpbGwgYmUgdXNlZCBhcyB0aGUgZG9jdW1lbnQgZnJhZ21lbnQgc3VmZml4ZWQgdG8gdGhlIGZpbmFsIFVSTC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCAqPn0gcGFyYW1ldGVyc1xuICAgICAqIEBwYXJhbSB7aW50fSByZWZlcmVuY2VUeXBlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdlbmVyYXRlKG5hbWUsIHBhcmFtZXRlcnMgPSB7fSwgcmVmZXJlbmNlVHlwZSA9IFVybEdlbmVyYXRvci5BQlNPTFVURV9QQVRIKSB7XG4gICAgICAgIGNvbnN0IHJvdXRlID0gdGhpcy5fcm91dGVDb2xsZWN0aW9uW25hbWVdO1xuICAgICAgICBpZiAodm9pZCAwID09PSByb3V0ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFJvdXRlTm90Rm91bmRFeGNlcHRpb24oYFVuYWJsZSB0byBnZW5lcmF0ZSBhIFVSTCBmb3IgdGhlIG5hbWVkIHJvdXRlIFwiJHtuYW1lfVwiIGFzIHN1Y2ggcm91dGUgZG9lcyBub3QgZXhpc3QuYCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fZG9HZW5lcmF0ZShcbiAgICAgICAgICAgIHJvdXRlLnZhcmlhYmxlcyxcbiAgICAgICAgICAgIHJvdXRlLmRlZmF1bHRzLFxuICAgICAgICAgICAgcm91dGUudG9rZW5zLFxuICAgICAgICAgICAgcGFyYW1ldGVycyxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICByZWZlcmVuY2VUeXBlLFxuICAgICAgICAgICAgcm91dGUuaG9zdFRva2VucyxcbiAgICAgICAgICAgIHJvdXRlLnNjaGVtZXNcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEbyBnZW5lcmF0ZSBhbiBhZGRyZXNzIGZyb20gcm91dGUgY29tcG9uZW50cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nW119IHZhcmlhYmxlc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgc3RyaW5nPn0gZGVmYXVsdHNcbiAgICAgKiBAcGFyYW0ge1tbc3RyaW5nXV19IHRva2Vuc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0PHN0cmluZywgKj59IHBhcmFtZXRlcnNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7aW50fSByZWZlcmVuY2VUeXBlXG4gICAgICogQHBhcmFtIHtbW3N0cmluZ11dfSBob3N0VG9rZW5zXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHJlcXVpcmVkU2NoZW1lc1xuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2RvR2VuZXJhdGUodmFyaWFibGVzLCBkZWZhdWx0cywgdG9rZW5zLCBwYXJhbWV0ZXJzLCBuYW1lLCByZWZlcmVuY2VUeXBlLCBob3N0VG9rZW5zLCByZXF1aXJlZFNjaGVtZXMgPSBbXSkge1xuICAgICAgICBjb25zdCBtZXJnZWRQYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0cywgcGFyYW1ldGVycyk7XG5cbiAgICAgICAgY29uc3QgZGlmZiA9IHZhcmlhYmxlcy5maWx0ZXIobmFtZSA9PiAhbWVyZ2VkUGFyYW1zLmhhc093blByb3BlcnR5KG5hbWUpKTtcbiAgICAgICAgaWYgKGRpZmYubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgTWlzc2luZ01hbmRhdG9yeVBhcmFtZXRlcnNFeGNlcHRpb24oYFNvbWUgbWFuZGF0b3J5IHBhcmFtZXRlcnMgYXJlIG1pc3NpbmcgKFwiJHtkaWZmLmpvaW4oJ1wiLCBcIicpfVwiKSB0byBnZW5lcmF0ZSBhIFVSTCBmb3Igcm91dGUgXCIke25hbWV9XCIuYClcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB1cmwgPSAnJztcbiAgICAgICAgbGV0IG9wdGlvbmFsID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdQYXJhbWV0ZXIgXCJ7cGFyYW1ldGVyfVwiIGZvciByb3V0ZSBcIntyb3V0ZX1cIiBtdXN0IG1hdGNoIFwie2V4cGVjdGVkfVwiIChcIntnaXZlbn1cIiBnaXZlbikgdG8gZ2VuZXJhdGUgYSBjb3JyZXNwb25kaW5nIFVSTC4nO1xuXG4gICAgICAgIGZvciAoY29uc3QgdG9rZW4gb2YgdG9rZW5zKSB7XG4gICAgICAgICAgICBpZiAoJ3ZhcmlhYmxlJyA9PT0gdG9rZW5bMF0pIHtcbiAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbmFsIHx8ICFkZWZhdWx0cy5oYXNPd25Qcm9wZXJ0eSh0b2tlblszXSkgfHwgdm9pZCAwICE9PSBtZXJnZWRQYXJhbXNbdG9rZW5bM11dICYmIG1lcmdlZFBhcmFtc1t0b2tlblszXV0udG9TdHJpbmcoKSAhPT0gZGVmYXVsdHNbdG9rZW5bM11dLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCdeJyArIHRva2VuWzJdICsgJyQnLCAhIXRva2VuWzRdID8gJ3UnIDogJycpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoISByZWdleC50ZXN0KG1lcmdlZFBhcmFtc1t0b2tlblszXV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgSW52YWxpZFBhcmFtZXRlckV4Y2VwdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX2p5bWZvbnkuc3RydHIobWVzc2FnZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAne3BhcmFtZXRlcn0nOiB0b2tlblszXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3tyb3V0ZX0nOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAne2V4cGVjdGVkfSc6IHRva2VuWzJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAne2dpdmVufSc6IG1lcmdlZFBhcmFtc1t0b2tlblszXV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHVybCA9IHRva2VuWzFdICsgbWVyZ2VkUGFyYW1zW3Rva2VuWzNdXSArIHVybDtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uYWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVybCA9IHRva2VuWzFdICsgdXJsO1xuICAgICAgICAgICAgICAgIG9wdGlvbmFsID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXJsID09PSAnJykge1xuICAgICAgICAgICAgdXJsID0gJy8nO1xuICAgICAgICB9XG5cbiAgICAgICAgdXJsID0gX19qeW1mb255LnN0cnRyKFxuICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHVybClcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvJy9nLCAnJTI3JylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwoL2csICclMjgnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXCkvZywgJyUyOScpLFxuICAgICAgICAgICAgZGVjb2RlZENoYXJzXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gdGhlIHBhdGggc2VnbWVudHMgXCIuXCIgYW5kIFwiLi5cIiBhcmUgaW50ZXJwcmV0ZWQgYXMgcmVsYXRpdmUgcmVmZXJlbmNlIHdoZW4gcmVzb2x2aW5nIGEgVVJJOyBzZWUgaHR0cDovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzk4NiNzZWN0aW9uLTMuM1xuICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIGVuY29kZSB0aGVtIGFzIHRoZXkgYXJlIG5vdCB1c2VkIGZvciB0aGlzIHB1cnBvc2UgaGVyZVxuICAgICAgICAvLyBvdGhlcndpc2Ugd2Ugd291bGQgZ2VuZXJhdGUgYSBVUkkgdGhhdCwgd2hlbiBmb2xsb3dlZCBieSBhIHVzZXIgYWdlbnQgKGUuZy4gYnJvd3NlciksIGRvZXMgbm90IG1hdGNoIHRoaXMgcm91dGVcbiAgICAgICAgdXJsID0gX19qeW1mb255LnN0cnRyKHVybCwgeycvLi4vJzogJy8lMkUlMkUvJywgJy8uLyc6ICcvJTJFLyd9KTtcbiAgICAgICAgaWYgKCcvLi4nID09PSB1cmwuc3Vic3RyKC0zKSkge1xuICAgICAgICAgICAgdXJsID0gdXJsLnN1YnN0cigwLCAtMikgKyAnJTJFJTJFJztcbiAgICAgICAgfSBlbHNlIGlmICgnLy4nID09PSB1cmwuc3Vic3RyKC0yKSkge1xuICAgICAgICAgICAgdXJsID0gdXJsLnN1YnN0cigwLCAtMSkgKyAnJTJFJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzY2hlbWVBdXRob3JpdHkgPSAnJztcbiAgICAgICAgbGV0IGhvc3QgPSB0aGlzLl9jb250ZXh0Lmhvc3Q7XG4gICAgICAgIGlmICghISBob3N0KSB7XG4gICAgICAgICAgICBsZXQgc2NoZW1lID0gdGhpcy5fY29udGV4dC5zY2hlbWU7XG4gICAgICAgICAgICBpZiAocmVxdWlyZWRTY2hlbWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZFNjaGVtZXMuaW5kZXhPZihzY2hlbWUpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2VUeXBlID0gVXJsR2VuZXJhdG9yLkFCU09MVVRFX1VSTDtcbiAgICAgICAgICAgICAgICAgICAgc2NoZW1lID0gcmVxdWlyZWRTY2hlbWVzWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhvc3RUb2tlbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJvdXRlSG9zdCA9ICcnO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdG9rZW4gb2YgaG9zdFRva2Vucykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJ3ZhcmlhYmxlJyA9PT0gdG9rZW5bMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXicgKyB0b2tlblsyXSArICckJywgISF0b2tlbls0XSA/ICd1JyA6ICcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIHJlZ2V4LnRlc3QobWVyZ2VkUGFyYW1zW3Rva2VuWzNdXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgSW52YWxpZFBhcmFtZXRlckV4Y2VwdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19qeW1mb255LnN0cnRyKG1lc3NhZ2UsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd7cGFyYW1ldGVyfSc6IHRva2VuWzNdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3tyb3V0ZX0nOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3tleHBlY3RlZH0nOiB0b2tlblsyXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd7Z2l2ZW59JzogbWVyZ2VkUGFyYW1zW3Rva2VuWzNdXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSG9zdCA9IHRva2VuWzFdICsgbWVyZ2VkUGFyYW1zW3Rva2VuWzNdXSArIHJvdXRlSG9zdDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSG9zdCA9IHRva2VuWzFdICsgcm91dGVIb3N0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJvdXRlSG9zdCAhPT0gaG9zdCkge1xuICAgICAgICAgICAgICAgICAgICBob3N0ID0gcm91dGVIb3N0O1xuICAgICAgICAgICAgICAgICAgICBpZiAoVXJsR2VuZXJhdG9yLkFCU09MVVRFX1VSTCAhPT0gcmVmZXJlbmNlVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlVHlwZSA9IFVybEdlbmVyYXRvci5ORVRXT1JLX1BBVEg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChVcmxHZW5lcmF0b3IuQUJTT0xVVEVfVVJMID09PSByZWZlcmVuY2VUeXBlIHx8IFVybEdlbmVyYXRvci5ORVRXT1JLX1BBVEggPT09IHJlZmVyZW5jZVR5cGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgcG9ydCA9ICcnO1xuICAgICAgICAgICAgICAgIGlmICgnaHR0cCcgPT09IHNjaGVtZSAmJiA4MCAhPT0gdGhpcy5fY29udGV4dC5odHRwUG9ydCkge1xuICAgICAgICAgICAgICAgICAgICBwb3J0ICs9ICc6JyArIHRoaXMuX2NvbnRleHQuaHR0cFBvcnQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgnaHR0cHMnID09PSBzY2hlbWUgJiYgNDQzICE9PSB0aGlzLl9jb250ZXh0Lmh0dHBzUG9ydCkge1xuICAgICAgICAgICAgICAgICAgICBwb3J0ICs9ICc6JyArIHRoaXMuX2NvbnRleHQuaHR0cHNQb3J0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNjaGVtZUF1dGhvcml0eSA9IFVybEdlbmVyYXRvci5ORVRXT1JLX1BBVEggPT09IHJlZmVyZW5jZVR5cGUgPyAnLy8nIDogYCR7c2NoZW1lfTovL2A7XG4gICAgICAgICAgICAgICAgc2NoZW1lQXV0aG9yaXR5ICs9IGhvc3QgKyBwb3J0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFVybEdlbmVyYXRvci5SRUxBVElWRV9QQVRIID09PSByZWZlcmVuY2VUeXBlKSB7XG4gICAgICAgICAgICB1cmwgPSBVcmxHZW5lcmF0b3IuZ2V0UmVsYXRpdmVQYXRoKHRoaXMuX2NvbnRleHQucGF0aGluZm8sIHVybCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1cmwgPSBzY2hlbWVBdXRob3JpdHkgKyB1cmw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgYSBxdWVyeSBzdHJpbmcgaWYgbmVlZGVkXG4gICAgICAgIGNvbnN0IGV4dHJhcyA9IE9iamVjdC5rZXlzKHBhcmFtZXRlcnMpXG4gICAgICAgICAgICAuZmlsdGVyKG5hbWUgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2YXJpYWJsZXMuaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChkZWZhdWx0cy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmYXVsdHNbbmFtZV0gPT0gcGFyYW1ldGVyc1tuYW1lXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGV4dHJhY3QgZnJhZ21lbnRcbiAgICAgICAgbGV0IGZyYWdtZW50ID0gJyc7XG4gICAgICAgIGlmIChkZWZhdWx0cy5fZnJhZ21lbnQpIHtcbiAgICAgICAgICAgIGZyYWdtZW50ID0gZGVmYXVsdHMuX2ZyYWdtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlkeDtcbiAgICAgICAgaWYgKChpZHggPSBleHRyYXMuaW5kZXhPZignX2ZyYWdtZW50JykpICE9PSAtMSkge1xuICAgICAgICAgICAgZnJhZ21lbnQgPSBwYXJhbWV0ZXJzLl9mcmFnbWVudDtcbiAgICAgICAgICAgIGRlbGV0ZSBleHRyYXNbaWR4XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChleHRyYXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9IE9iamVjdC5rZXlzKHBhcmFtZXRlcnMpXG4gICAgICAgICAgICAgICAgLmZpbHRlcihrID0+IGV4dHJhcy5pbmRleE9mKGspICE9PSAtMSlcbiAgICAgICAgICAgICAgICAubWFwKGsgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGspICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtZXRlcnNba10pKVxuICAgICAgICAgICAgICAgIC5qb2luKCcmJyk7XG5cbiAgICAgICAgICAgIHVybCArPSAnPycgKyBfX2p5bWZvbnkuc3RydHIocXVlcnksIHsnJTJGJzogJy8nfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJycgIT09IGZyYWdtZW50KSB7XG4gICAgICAgICAgICBmcmFnbWVudCA9IGVuY29kZVVSSUNvbXBvbmVudChmcmFnbWVudClcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvIS9nLCAnJTIxJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvJy9nLCAnJTI3JylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwoL2csICclMjgnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXCkvZywgJyUyOScpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcKi9nLCAnJTJBJyk7XG5cbiAgICAgICAgICAgIHVybCArPSAnIycgKyBfX2p5bWZvbnkuc3RydHIoZnJhZ21lbnQsIHsnJTJGJzogJy8nLCAnJTNGJzogJz8nfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHRhcmdldCBwYXRoIGFzIHJlbGF0aXZlIHJlZmVyZW5jZSBmcm9tIHRoZSBiYXNlIHBhdGguXG4gICAgICpcbiAgICAgKiBPbmx5IHRoZSBVUklzIHBhdGggY29tcG9uZW50IChubyBzY2hlbWEsIGhvc3QgZXRjLikgaXMgcmVsZXZhbnQgYW5kIG11c3QgYmUgZ2l2ZW4sIHN0YXJ0aW5nIHdpdGggYSBzbGFzaC5cbiAgICAgKiBCb3RoIHBhdGhzIG11c3QgYmUgYWJzb2x1dGUgYW5kIG5vdCBjb250YWluIHJlbGF0aXZlIHBhcnRzLlxuICAgICAqIFJlbGF0aXZlIFVSTHMgZnJvbSBvbmUgcmVzb3VyY2UgdG8gYW5vdGhlciBhcmUgdXNlZnVsIHdoZW4gZ2VuZXJhdGluZyBzZWxmLWNvbnRhaW5lZCBkb3dubG9hZGFibGUgZG9jdW1lbnQgYXJjaGl2ZXMuXG4gICAgICogRnVydGhlcm1vcmUsIHRoZXkgY2FuIGJlIHVzZWQgdG8gcmVkdWNlIHRoZSBsaW5rIHNpemUgaW4gZG9jdW1lbnRzLlxuICAgICAqXG4gICAgICogRXhhbXBsZSB0YXJnZXQgcGF0aHMsIGdpdmVuIGEgYmFzZSBwYXRoIG9mIFwiL2EvYi9jL2RcIjpcbiAgICAgKiAtIFwiL2EvYi9jL2RcIiAgICAgLT4gXCJcIlxuICAgICAqIC0gXCIvYS9iL2MvXCIgICAgICAtPiBcIi4vXCJcbiAgICAgKiAtIFwiL2EvYi9cIiAgICAgICAgLT4gXCIuLi9cIlxuICAgICAqIC0gXCIvYS9iL2Mvb3RoZXJcIiAtPiBcIm90aGVyXCJcbiAgICAgKiAtIFwiL2EveC95XCIgICAgICAgLT4gXCIuLi8uLi94L3lcIlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGJhc2VQYXRoICAgVGhlIGJhc2UgcGF0aFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0YXJnZXRQYXRoIFRoZSB0YXJnZXQgcGF0aFxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ30gVGhlIHJlbGF0aXZlIHRhcmdldCBwYXRoXG4gICAgICovXG4gICAgc3RhdGljIGdldFJlbGF0aXZlUGF0aChiYXNlUGF0aCwgdGFyZ2V0UGF0aCkge1xuICAgICAgICBpZiAoYmFzZVBhdGggPT09IHRhcmdldFBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNvdXJjZURpcnMgPSAoJy8nID09PSBiYXNlUGF0aC5jaGFyQXQoMCkgPyBiYXNlUGF0aC5zdWJzdHIoMSkgOiBiYXNlUGF0aCkuc3BsaXQoJy8nKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0RGlycyA9ICgnLycgPT09IHRhcmdldFBhdGguY2hhckF0KDApID8gdGFyZ2V0UGF0aC5zdWJzdHIoMSkgOiB0YXJnZXRQYXRoKS5zcGxpdCgnLycpO1xuXG4gICAgICAgIHNvdXJjZURpcnMucG9wKCk7XG4gICAgICAgIGNvbnN0IHRhcmdldEZpbGUgPSB0YXJnZXREaXJzLnBvcCgpO1xuXG4gICAgICAgIGZvciAoY29uc3QgWyBpLCBkaXIgXSBvZiBfX2p5bWZvbnkuZ2V0RW50cmllcyhzb3VyY2VEaXJzKSkge1xuICAgICAgICAgICAgaWYgKHRhcmdldERpcnNbaV0gJiYgZGlyID09PSB0YXJnZXREaXJzW2ldKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHNvdXJjZURpcnNbaV07XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRhcmdldERpcnNbaV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0RGlycy5wdXNoKHRhcmdldEZpbGUpO1xuICAgICAgICBjb25zdCBwYXRoID0gJy4uLycucmVwZWF0KHNvdXJjZURpcnMubGVuZ3RoKSArIHRhcmdldERpcnMuam9pbignLycpO1xuXG4gICAgICAgIC8vIEEgcmVmZXJlbmNlIHRvIHRoZSBzYW1lIGJhc2UgZGlyZWN0b3J5IG9yIGFuIGVtcHR5IHN1YmRpcmVjdG9yeSBtdXN0IGJlIHByZWZpeGVkIHdpdGggXCIuL1wiLlxuICAgICAgICAvLyBUaGlzIGFsc28gYXBwbGllcyB0byBhIHNlZ21lbnQgd2l0aCBhIGNvbG9uIGNoYXJhY3RlciAoZS5nLiwgXCJmaWxlOmNvbG9uXCIpIHRoYXQgY2Fubm90IGJlIHVzZWRcbiAgICAgICAgLy8gYXMgdGhlIGZpcnN0IHNlZ21lbnQgb2YgYSByZWxhdGl2ZS1wYXRoIHJlZmVyZW5jZSwgYXMgaXQgd291bGQgYmUgbWlzdGFrZW4gZm9yIGEgc2NoZW1lIG5hbWVcbiAgICAgICAgLy8gKHNlZSBodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tNC4yKS5cbiAgICAgICAgbGV0IGNvbG9uUG9zLCBzbGFzaFBvcztcbiAgICAgICAgcmV0dXJuICcnID09PSBwYXRoIHx8ICcvJyA9PT0gcGF0aC5jaGFyQXQoMClcbiAgICAgICAgICAgIHx8IC0xICE9PSAoY29sb25Qb3MgPSBwYXRoLmluZGV4T2YoJzonKSkgJiYgKGNvbG9uUG9zIDwgKHNsYXNoUG9zID0gcGF0aC5pbmRleE9mKCcvJykpIHx8IC0xID09PSBzbGFzaFBvcylcbiAgICAgICAgICAgID8gYC4vJHtwYXRofWAgOiBwYXRoO1xuICAgIH1cbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYW4gYWJzb2x1dGUgVVJMLCBlLmcuIFwiaHR0cDovL2V4YW1wbGUuY29tL2Rpci9maWxlXCIuXG4gKi9cblVybEdlbmVyYXRvci5BQlNPTFVURV9VUkwgPSAwO1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhbiBhYnNvbHV0ZSBwYXRoLCBlLmcuIFwiL2Rpci9maWxlXCIuXG4gKi9cblVybEdlbmVyYXRvci5BQlNPTFVURV9QQVRIID0gMTtcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSByZWxhdGl2ZSBwYXRoIGJhc2VkIG9uIHRoZSBjdXJyZW50IHJlcXVlc3QgcGF0aCwgZS5nLiBcIi4uL3BhcmVudC1maWxlXCIuXG4gKlxuICogQHNlZSBVcmxHZW5lcmF0b3IuZ2V0UmVsYXRpdmVQYXRoKClcbiAqL1xuVXJsR2VuZXJhdG9yLlJFTEFUSVZFX1BBVEggPSAyO1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIG5ldHdvcmsgcGF0aCwgZS5nLiBcIi8vZXhhbXBsZS5jb20vZGlyL2ZpbGVcIi5cbiAqIFN1Y2ggcmVmZXJlbmNlIHJldXNlcyB0aGUgY3VycmVudCBzY2hlbWUgYnV0IHNwZWNpZmllcyB0aGUgaG9zdC5cbiAqL1xuVXJsR2VuZXJhdG9yLk5FVFdPUktfUEFUSCA9IDM7XG5cbmV4cG9ydCBkZWZhdWx0IFVybEdlbmVyYXRvcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL1VybEdlbmVyYXRvci5qcyIsIid1c2Ugc3RyaWN0JztcblxuZ2xvYmFsLl9fanltZm9ueSA9IGdsb2JhbC5fX2p5bWZvbnkgfHwge307XG5cbi8qKlxuICogR2V0IFtLZXksIFZhbHVlXSBwYWlycyBmb3IgYW4gb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICpcbiAqIEByZXR1cm5zIHtHZW5lcmF0b3J9XG4gKi9cbmNvbnN0IGVudHJpZXMgPSBmdW5jdGlvbiAqIG9iamVudHJpZXMob2JqZWN0KSB7XG4gICAgaWYgKGlzQXJyYXkob2JqZWN0KSkge1xuICAgICAgICBmb3IgKGNvbnN0IGsgb2Ygb2JqZWN0LmtleXMoKSkge1xuICAgICAgICAgICAgeWllbGQgWyBrLCBvYmplY3Rba10gXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgTWFwKSB7XG4gICAgICAgIHJldHVybiBvYmplY3QuZW50cmllcygpO1xuICAgIH1cblxuICAgIGlmICghIGlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEludmFsaWRBcmd1bWVudEV4Y2VwdGlvbignQXJndW1lbnQgMSBpcyBub3QgYW4gb2JqZWN0Jyk7XG4gICAgfVxuXG4gICAgaWYgKE9iamVjdC5lbnRyaWVzKSB7XG4gICAgICAgIHlpZWxkICogT2JqZWN0LmVudHJpZXMob2JqZWN0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgICAgICBpZiAoISBvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB5aWVsZCBbIGtleSwgb2JqZWN0W2tleV0gXTtcbiAgICB9XG59O1xuXG5nbG9iYWwuX19qeW1mb255LmdldEVudHJpZXMgPSBlbnRyaWVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL0BqeW1mb255L3V0aWwvbGliL09iamVjdC9lbnRyaWVzLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5nbG9iYWwuX19qeW1mb255ID0gZ2xvYmFsLl9fanltZm9ueSB8fCB7fTtcblxuZ2xvYmFsLl9fanltZm9ueS5zdHJ0ciA9IGZ1bmN0aW9uIHN0cnRyKHN0cmluZywgcmVwbGFjZVBhaXJzKSB7XG4gICAgbGV0IHN0ciA9IHN0cmluZy50b1N0cmluZygpLCByZTtcblxuICAgIGZvciAobGV0IFsga2V5LCB2YWx1ZSBdIG9mIF9fanltZm9ueS5nZXRFbnRyaWVzKHJlcGxhY2VQYWlycykpIHtcbiAgICAgICAga2V5ID0ga2V5LnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uXS9nLCAnXFxcXCQmJyk7XG4gICAgICAgIHJlID0gbmV3IFJlZ0V4cChrZXksICdnJyk7XG4gICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKHJlLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cjtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvQGp5bWZvbnkvdXRpbC9saWIvU3RyaW5nL3N0cnRyLmpzIiwiY29uc3QgSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uID0gcmVxdWlyZSgnLi9JbnZhbGlkQXJndW1lbnRFeGNlcHRpb24nKTtcblxuLyoqXG4gKiBFeGNlcHRpb24gdGhyb3duIHdoZW4gYSBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkLlxuICovXG5jbGFzcyBJbnZhbGlkUGFyYW1ldGVyRXhjZXB0aW9uIGV4dGVuZHMgSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uIHtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbnZhbGlkUGFyYW1ldGVyRXhjZXB0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvRXhjZXB0aW9uL0ludmFsaWRQYXJhbWV0ZXJFeGNlcHRpb24uanMiLCJjb25zdCBJbnZhbGlkQXJndW1lbnRFeGNlcHRpb24gPSByZXF1aXJlKCcuL0ludmFsaWRBcmd1bWVudEV4Y2VwdGlvbicpO1xuXG4vKipcbiAqIEV4Y2VwdGlvbiB0aHJvd24gd2hlbiBhIHJvdXRlIGNhbm5vdCBiZSBnZW5lcmF0ZWQgYmVjYXVzZSBvZiBtaXNzaW5nXG4gKiBtYW5kYXRvcnkgcGFyYW1ldGVycy5cbiAqL1xuY2xhc3MgTWlzc2luZ01hbmRhdG9yeVBhcmFtZXRlcnNFeGNlcHRpb24gZXh0ZW5kcyBJbnZhbGlkQXJndW1lbnRFeGNlcHRpb24ge1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1pc3NpbmdNYW5kYXRvcnlQYXJhbWV0ZXJzRXhjZXB0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvRXhjZXB0aW9uL01pc3NpbmdNYW5kYXRvcnlQYXJhbWV0ZXJzRXhjZXB0aW9uLmpzIiwiY29uc3QgSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uID0gcmVxdWlyZSgnLi9JbnZhbGlkQXJndW1lbnRFeGNlcHRpb24nKTtcblxuLyoqXG4gKiBFeGNlcHRpb24gdGhyb3duIHdoZW4gYSByb3V0ZSBkb2VzIG5vdCBleGlzdC5cbiAqL1xuY2xhc3MgUm91dGVOb3RGb3VuZEV4Y2VwdGlvbiBleHRlbmRzIEludmFsaWRBcmd1bWVudEV4Y2VwdGlvbiB7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUm91dGVOb3RGb3VuZEV4Y2VwdGlvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL0V4Y2VwdGlvbi9Sb3V0ZU5vdEZvdW5kRXhjZXB0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==