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
__webpack_require__(10);
__webpack_require__(11);

var InvalidParameterException = __webpack_require__(12);
var MissingMandatoryParametersException = __webpack_require__(13);
var RouteNotFoundException = __webpack_require__(14);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(7)))

/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

global.isArray = Array.isArray;
var toString = Object.prototype.toString;

__webpack_require__(9);

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
/* 9 */
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
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
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
/* 14 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDRjODBjMzczM2VlODMyN2VlMzYiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9FeGNlcHRpb24vSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9VcmxHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqeW1mb255L3V0aWwvbGliL1BsYXRmb3JtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqeW1mb255L3V0aWwvbGliL2lzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanltZm9ueS91dGlsL2xpYi9Jcy9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqeW1mb255L3V0aWwvbGliL09iamVjdC9lbnRyaWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanltZm9ueS91dGlsL2xpYi9TdHJpbmcvc3RydHIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvRXhjZXB0aW9uL0ludmFsaWRQYXJhbWV0ZXJFeGNlcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vanMvRXhjZXB0aW9uL01pc3NpbmdNYW5kYXRvcnlQYXJhbWV0ZXJzRXhjZXB0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL0V4Y2VwdGlvbi9Sb3V0ZU5vdEZvdW5kRXhjZXB0aW9uLmpzIl0sIm5hbWVzIjpbImciLCJGdW5jdGlvbiIsImV2YWwiLCJlIiwid2luZG93IiwibW9kdWxlIiwiZXhwb3J0cyIsIkludmFsaWRBcmd1bWVudEV4Y2VwdGlvbiIsIkVycm9yIiwiVXJsR2VuZXJhdG9yIiwiZ2xvYmFsIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsInVuZGVmaW5lZCIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiaW5Nb2R1bGUiLCJydW50aW1lIiwicmVnZW5lcmF0b3JSdW50aW1lIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIl9pbnZva2UiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsIm9iaiIsImFyZyIsInR5cGUiLCJjYWxsIiwiZXJyIiwiR2VuU3RhdGVTdXNwZW5kZWRTdGFydCIsIkdlblN0YXRlU3VzcGVuZGVkWWllbGQiLCJHZW5TdGF0ZUV4ZWN1dGluZyIsIkdlblN0YXRlQ29tcGxldGVkIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiY29uc3RydWN0b3IiLCJkaXNwbGF5TmFtZSIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsIl9fYXdhaXQiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsInZhbHVlIiwiUHJvbWlzZSIsInRoZW4iLCJ1bndyYXBwZWQiLCJwcmV2aW91c1Byb21pc2UiLCJlbnF1ZXVlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJhc3luYyIsIml0ZXIiLCJuZXh0IiwiZG9uZSIsInN0YXRlIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJyZXR1cm4iLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHRMb2MiLCJ0b1N0cmluZyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0Iiwia2V5cyIsIm9iamVjdCIsImtleSIsInJldmVyc2UiLCJsZW5ndGgiLCJwb3AiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJpIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290RW50cnkiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsIndlYnBhY2tQb2x5ZmlsbCIsImRlcHJlY2F0ZSIsInBhdGhzIiwiY2hpbGRyZW4iLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJsIiwicmVxdWlyZSIsIkludmFsaWRQYXJhbWV0ZXJFeGNlcHRpb24iLCJNaXNzaW5nTWFuZGF0b3J5UGFyYW1ldGVyc0V4Y2VwdGlvbiIsIlJvdXRlTm90Rm91bmRFeGNlcHRpb24iLCJkZWNvZGVkQ2hhcnMiLCJyb3V0ZUNvbGxlY3Rpb24iLCJfcm91dGVDb2xsZWN0aW9uIiwiYXNzaWduIiwic2NoZW1lIiwibG9jYXRpb24iLCJwcm90b2NvbCIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsImlzU2VjdXJlIiwiX2NvbnRleHQiLCJwYXRoaW5mbyIsInBhdGhuYW1lIiwiaG9zdCIsImhvc3RuYW1lIiwiaHR0cFBvcnQiLCJwb3J0IiwiaHR0cHNQb3J0IiwicXVlcnlTdHJpbmciLCJzZWFyY2giLCJlbnRyaWVzIiwicm91dGUiLCJwYXJhbWV0ZXJzIiwicmVmZXJlbmNlVHlwZSIsIkFCU09MVVRFX1BBVEgiLCJfZG9HZW5lcmF0ZSIsInZhcmlhYmxlcyIsImRlZmF1bHRzIiwidG9rZW5zIiwiaG9zdFRva2VucyIsInNjaGVtZXMiLCJyZXF1aXJlZFNjaGVtZXMiLCJtZXJnZWRQYXJhbXMiLCJkaWZmIiwiZmlsdGVyIiwiam9pbiIsInVybCIsIm9wdGlvbmFsIiwibWVzc2FnZSIsInRva2VuIiwicmVnZXgiLCJSZWdFeHAiLCJ0ZXN0IiwiX19qeW1mb255Iiwic3RydHIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzdWJzdHIiLCJzY2hlbWVBdXRob3JpdHkiLCJpbmRleE9mIiwiQUJTT0xVVEVfVVJMIiwicm91dGVIb3N0IiwiTkVUV09SS19QQVRIIiwiUkVMQVRJVkVfUEFUSCIsImdldFJlbGF0aXZlUGF0aCIsImV4dHJhcyIsImZyYWdtZW50IiwiX2ZyYWdtZW50IiwiaWR4IiwicXVlcnkiLCJrIiwibWFwIiwiYmFzZVBhdGgiLCJ0YXJnZXRQYXRoIiwic291cmNlRGlycyIsInNwbGl0IiwidGFyZ2V0RGlycyIsInRhcmdldEZpbGUiLCJnZXRFbnRyaWVzIiwiZGlyIiwicGF0aCIsInJlcGVhdCIsImNvbG9uUG9zIiwic2xhc2hQb3MiLCJQbGF0Zm9ybSIsIl9hc3luY1N1cHBvcnQiLCJTeW50YXhFcnJvciIsInByb2Nlc3MiLCJwbGF0Zm9ybSIsImNhY2hlZFNldFRpbWVvdXQiLCJjYWNoZWRDbGVhclRpbWVvdXQiLCJkZWZhdWx0U2V0VGltb3V0IiwiZGVmYXVsdENsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJydW5UaW1lb3V0IiwiZnVuIiwicnVuQ2xlYXJUaW1lb3V0IiwibWFya2VyIiwicXVldWUiLCJkcmFpbmluZyIsImN1cnJlbnRRdWV1ZSIsInF1ZXVlSW5kZXgiLCJjbGVhblVwTmV4dFRpY2siLCJjb25jYXQiLCJkcmFpblF1ZXVlIiwidGltZW91dCIsImxlbiIsInJ1biIsIm5leHRUaWNrIiwiYXJncyIsIkFycmF5IiwiYXJndW1lbnRzIiwiSXRlbSIsImFycmF5IiwiYXBwbHkiLCJ0aXRsZSIsImJyb3dzZXIiLCJlbnYiLCJhcmd2IiwidmVyc2lvbiIsInZlcnNpb25zIiwibm9vcCIsIm9uIiwiYWRkTGlzdGVuZXIiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImxpc3RlbmVycyIsImJpbmRpbmciLCJjd2QiLCJjaGRpciIsInVtYXNrIiwiaXNBcnJheSIsImlzRnVuY3Rpb24iLCJpc09iamVjdCIsInByaW1pdGl2ZXMiLCJOdW1iZXIiLCJTdHJpbmciLCJCb29sZWFuIiwiaXNTY2FsYXIiLCJwcm90byIsImlzT2JqZWN0TGl0ZXJhbCIsImlzUHJvbWlzZSIsImlzU3RyZWFtIiwic3RyZWFtIiwicGlwZSIsImlzR2VuZXJhdG9yIiwidGhyb3ciLCJoYXNBc3luY0Z1bmN0aW9uU3VwcG9ydCIsImlzQXN5bmNGdW5jdGlvbiIsIkJvdW5kRnVuY3Rpb24iLCJvYmplbnRyaWVzIiwiTWFwIiwic3RyaW5nIiwicmVwbGFjZVBhaXJzIiwic3RyIiwicmUiXSwibWFw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QixtQkFBQXFKLENBQVEsQ0FBUixDQUFqQzs7QUFFQTs7Ozs7SUFJTUUsbUM7Ozs7Ozs7Ozs7RUFBNEN2Six3Qjs7QUFHbERGLE9BQU9DLE9BQVAsR0FBaUJ3SixtQ0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7O0FDVEEsSUFBTXZKLDJCQUEyQixtQkFBQXFKLENBQVEsQ0FBUixDQUFqQzs7QUFFQTs7OztJQUdNRyxzQjs7Ozs7Ozs7OztFQUErQnhKLHdCOztBQUdyQ0YsT0FBT0MsT0FBUCxHQUFpQnlKLHNCQUFqQixDIiwiZmlsZSI6InVybC1nZW5lcmF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwNGM4MGMzNzMzZWU4MzI3ZWUzNiIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCIvKipcbiAqIEJhc2UgRXJyb3IgY2xhc3MuXG4gKi9cbmNsYXNzIEludmFsaWRBcmd1bWVudEV4Y2VwdGlvbiBleHRlbmRzIEVycm9yIHtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbnZhbGlkQXJndW1lbnRFeGNlcHRpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9FeGNlcHRpb24vSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uLmpzIiwiaW1wb3J0IFwicmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lXCI7XG5pbXBvcnQgVXJsR2VuZXJhdG9yIGZyb20gJy4vVXJsR2VuZXJhdG9yJztcblxud2luZG93LlVybEdlbmVyYXRvciA9IFVybEdlbmVyYXRvcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2luZGV4LmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9tYXN0ZXIvTElDRU5TRSBmaWxlLiBBblxuICogYWRkaXRpb25hbCBncmFudCBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluXG4gKiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgcnVudGltZS5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBJbiBzbG9wcHkgbW9kZSwgdW5ib3VuZCBgdGhpc2AgcmVmZXJzIHRvIHRoZSBnbG9iYWwgb2JqZWN0LCBmYWxsYmFjayB0b1xuICAvLyBGdW5jdGlvbiBjb25zdHJ1Y3RvciBpZiB3ZSdyZSBpbiBnbG9iYWwgc3RyaWN0IG1vZGUuIFRoYXQgaXMgc2FkbHkgYSBmb3JtXG4gIC8vIG9mIGluZGlyZWN0IGV2YWwgd2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kuXG4gIChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMgfSkoKSB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKClcbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsInJlcXVpcmUoJ0BqeW1mb255L3V0aWwvbGliL1BsYXRmb3JtJyk7XG5yZXF1aXJlKCdAanltZm9ueS91dGlsL2xpYi9pcycpO1xucmVxdWlyZSgnQGp5bWZvbnkvdXRpbC9saWIvT2JqZWN0L2VudHJpZXMnKTtcbnJlcXVpcmUoJ0BqeW1mb255L3V0aWwvbGliL1N0cmluZy9zdHJ0cicpO1xuXG5jb25zdCBJbnZhbGlkUGFyYW1ldGVyRXhjZXB0aW9uID0gcmVxdWlyZSgnLi9FeGNlcHRpb24vSW52YWxpZFBhcmFtZXRlckV4Y2VwdGlvbicpO1xuY29uc3QgTWlzc2luZ01hbmRhdG9yeVBhcmFtZXRlcnNFeGNlcHRpb24gPSByZXF1aXJlKCcuL0V4Y2VwdGlvbi9NaXNzaW5nTWFuZGF0b3J5UGFyYW1ldGVyc0V4Y2VwdGlvbicpO1xuY29uc3QgUm91dGVOb3RGb3VuZEV4Y2VwdGlvbiA9IHJlcXVpcmUoJy4vRXhjZXB0aW9uL1JvdXRlTm90Rm91bmRFeGNlcHRpb24nKTtcblxuY29uc3QgZGVjb2RlZENoYXJzID0ge1xuICAgICclMkYnOiAnLycsXG4gICAgJyU0MCc6ICdAJyxcbiAgICAnJTNBJzogJzonLFxuICAgICclM0InOiAnOycsXG4gICAgJyUyQyc6ICcsJyxcbiAgICAnJTNEJzogJz0nLFxuICAgICclMkInOiAnKycsXG4gICAgJyUyMSc6ICchJyxcbiAgICAnJTJBJzogJyonLFxuICAgICclN0MnOiAnfCcsXG59O1xuXG5jbGFzcyBVcmxHZW5lcmF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHJvdXRlQ29sbGVjdGlvbikge1xuICAgICAgICB0aGlzLl9yb3V0ZUNvbGxlY3Rpb24gPSBPYmplY3QuYXNzaWduKHt9LCByb3V0ZUNvbGxlY3Rpb24pO1xuXG4gICAgICAgIGNvbnN0IHNjaGVtZSA9IGxvY2F0aW9uLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGlzU2VjdXJlID0gc2NoZW1lID09PSAnaHR0cHMnO1xuXG4gICAgICAgIHRoaXMuX2NvbnRleHQgPSB7XG4gICAgICAgICAgICBwYXRoaW5mbzogbG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICAgICAgICBob3N0OiBsb2NhdGlvbi5ob3N0bmFtZSxcbiAgICAgICAgICAgIHNjaGVtZSxcbiAgICAgICAgICAgIGh0dHBQb3J0OiBpc1NlY3VyZSA/IDgwIDogfn4obG9jYXRpb24ucG9ydCB8fCA4MCksXG4gICAgICAgICAgICBodHRwc1BvcnQ6IGlzU2VjdXJlID8gfn4obG9jYXRpb24ucG9ydCB8fCA0NDMpIDogNDQzLFxuICAgICAgICAgICAgcXVlcnlTdHJpbmc6IGxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCByb3V0ZXMgdG8gcm91dGVyIGNvbGxlY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsIE9iamVjdD59IHJvdXRlQ29sbGVjdGlvblxuICAgICAqL1xuICAgIGFkZFJvdXRlcyhyb3V0ZUNvbGxlY3Rpb24pIHtcbiAgICAgICAgZm9yIChjb25zdCBbIG5hbWUsIHJvdXRlIF0gb2YgT2JqZWN0LmVudHJpZXMocm91dGVDb2xsZWN0aW9uKSkge1xuICAgICAgICAgICAgdGhpcy5fcm91dGVDb2xsZWN0aW9uW25hbWVdID0gcm91dGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSBVUkwgb3IgcGF0aCBmb3IgYSBzcGVjaWZpYyByb3V0ZSBiYXNlZCBvbiB0aGUgZ2l2ZW4gcGFyYW1ldGVycy5cbiAgICAgKlxuICAgICAqIFBhcmFtZXRlcnMgdGhhdCByZWZlcmVuY2UgcGxhY2Vob2xkZXJzIGluIHRoZSByb3V0ZSBwYXR0ZXJuIHdpbGwgc3Vic3RpdHV0ZSB0aGVtIGluIHRoZVxuICAgICAqIHBhdGggb3IgaG9zdC4gRXh0cmEgcGFyYW1zIGFyZSBhZGRlZCBhcyBxdWVyeSBzdHJpbmcgdG8gdGhlIFVSTC5cbiAgICAgKlxuICAgICAqIFdoZW4gdGhlIHBhc3NlZCByZWZlcmVuY2UgdHlwZSBjYW5ub3QgYmUgZ2VuZXJhdGVkIGZvciB0aGUgcm91dGUgYmVjYXVzZSBpdCByZXF1aXJlcyBhIGRpZmZlcmVudFxuICAgICAqIGhvc3Qgb3Igc2NoZW1lIHRoYW4gdGhlIGN1cnJlbnQgb25lLCB0aGUgbWV0aG9kIHdpbGwgcmV0dXJuIGEgbW9yZSBjb21wcmVoZW5zaXZlIHJlZmVyZW5jZVxuICAgICAqIHRoYXQgaW5jbHVkZXMgdGhlIHJlcXVpcmVkIHBhcmFtcy4gRm9yIGV4YW1wbGUsIHdoZW4geW91IGNhbGwgdGhpcyBtZXRob2Qgd2l0aCByZWZlcmVuY2VUeXBlID0gQUJTT0xVVEVfUEFUSFxuICAgICAqIGJ1dCB0aGUgcm91dGUgcmVxdWlyZXMgdGhlIGh0dHBzIHNjaGVtZSB3aGVyZWFzIHRoZSBjdXJyZW50IHNjaGVtZSBpcyBodHRwLCBpdCB3aWxsIGluc3RlYWQgcmV0dXJuIGFuXG4gICAgICogQUJTT0xVVEVfVVJMIHdpdGggdGhlIGh0dHBzIHNjaGVtZSBhbmQgdGhlIGN1cnJlbnQgaG9zdC4gVGhpcyBtYWtlcyBzdXJlIHRoZSBnZW5lcmF0ZWQgVVJMIG1hdGNoZXNcbiAgICAgKiB0aGUgcm91dGUgaW4gYW55IGNhc2UuXG4gICAgICpcbiAgICAgKiBXaWxsIHRocm93IGFuIGVycm9yIGlmIHRoZXJlIGlzIG5vIHJvdXRlIHdpdGggdGhlIGdpdmVuIG5hbWVcbiAgICAgKlxuICAgICAqIFRoZSBzcGVjaWFsIHBhcmFtZXRlciBfZnJhZ21lbnQgd2lsbCBiZSB1c2VkIGFzIHRoZSBkb2N1bWVudCBmcmFnbWVudCBzdWZmaXhlZCB0byB0aGUgZmluYWwgVVJMLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge09iamVjdDxzdHJpbmcsICo+fSBwYXJhbWV0ZXJzXG4gICAgICogQHBhcmFtIHtpbnR9IHJlZmVyZW5jZVR5cGVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2VuZXJhdGUobmFtZSwgcGFyYW1ldGVycyA9IHt9LCByZWZlcmVuY2VUeXBlID0gVXJsR2VuZXJhdG9yLkFCU09MVVRFX1BBVEgpIHtcbiAgICAgICAgY29uc3Qgcm91dGUgPSB0aGlzLl9yb3V0ZUNvbGxlY3Rpb25bbmFtZV07XG4gICAgICAgIGlmICh2b2lkIDAgPT09IHJvdXRlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUm91dGVOb3RGb3VuZEV4Y2VwdGlvbihgVW5hYmxlIHRvIGdlbmVyYXRlIGEgVVJMIGZvciB0aGUgbmFtZWQgcm91dGUgXCIke25hbWV9XCIgYXMgc3VjaCByb3V0ZSBkb2VzIG5vdCBleGlzdC5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9kb0dlbmVyYXRlKFxuICAgICAgICAgICAgcm91dGUudmFyaWFibGVzLFxuICAgICAgICAgICAgcm91dGUuZGVmYXVsdHMsXG4gICAgICAgICAgICByb3V0ZS50b2tlbnMsXG4gICAgICAgICAgICBwYXJhbWV0ZXJzLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHJlZmVyZW5jZVR5cGUsXG4gICAgICAgICAgICByb3V0ZS5ob3N0VG9rZW5zLFxuICAgICAgICAgICAgcm91dGUuc2NoZW1lc1xuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERvIGdlbmVyYXRlIGFuIGFkZHJlc3MgZnJvbSByb3V0ZSBjb21wb25lbnRzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmdbXX0gdmFyaWFibGVzXG4gICAgICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCBzdHJpbmc+fSBkZWZhdWx0c1xuICAgICAqIEBwYXJhbSB7W1tzdHJpbmddXX0gdG9rZW5zXG4gICAgICogQHBhcmFtIHtPYmplY3Q8c3RyaW5nLCAqPn0gcGFyYW1ldGVyc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtpbnR9IHJlZmVyZW5jZVR5cGVcbiAgICAgKiBAcGFyYW0ge1tbc3RyaW5nXV19IGhvc3RUb2tlbnNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcmVxdWlyZWRTY2hlbWVzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfZG9HZW5lcmF0ZSh2YXJpYWJsZXMsIGRlZmF1bHRzLCB0b2tlbnMsIHBhcmFtZXRlcnMsIG5hbWUsIHJlZmVyZW5jZVR5cGUsIGhvc3RUb2tlbnMsIHJlcXVpcmVkU2NoZW1lcyA9IFtdKSB7XG4gICAgICAgIGNvbnN0IG1lcmdlZFBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRzLCBwYXJhbWV0ZXJzKTtcblxuICAgICAgICBjb25zdCBkaWZmID0gdmFyaWFibGVzLmZpbHRlcihuYW1lID0+ICFtZXJnZWRQYXJhbXMuaGFzT3duUHJvcGVydHkobmFtZSkpO1xuICAgICAgICBpZiAoZGlmZi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBNaXNzaW5nTWFuZGF0b3J5UGFyYW1ldGVyc0V4Y2VwdGlvbihgU29tZSBtYW5kYXRvcnkgcGFyYW1ldGVycyBhcmUgbWlzc2luZyAoXCIke2RpZmYuam9pbignXCIsIFwiJyl9XCIpIHRvIGdlbmVyYXRlIGEgVVJMIGZvciByb3V0ZSBcIiR7bmFtZX1cIi5gKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHVybCA9ICcnO1xuICAgICAgICBsZXQgb3B0aW9uYWwgPSB0cnVlO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ1BhcmFtZXRlciBcIntwYXJhbWV0ZXJ9XCIgZm9yIHJvdXRlIFwie3JvdXRlfVwiIG11c3QgbWF0Y2ggXCJ7ZXhwZWN0ZWR9XCIgKFwie2dpdmVufVwiIGdpdmVuKSB0byBnZW5lcmF0ZSBhIGNvcnJlc3BvbmRpbmcgVVJMLic7XG5cbiAgICAgICAgZm9yIChjb25zdCB0b2tlbiBvZiB0b2tlbnMpIHtcbiAgICAgICAgICAgIGlmICgndmFyaWFibGUnID09PSB0b2tlblswXSkge1xuICAgICAgICAgICAgICAgIGlmICghb3B0aW9uYWwgfHwgIWRlZmF1bHRzLmhhc093blByb3BlcnR5KHRva2VuWzNdKSB8fCB2b2lkIDAgIT09IG1lcmdlZFBhcmFtc1t0b2tlblszXV0gJiYgbWVyZ2VkUGFyYW1zW3Rva2VuWzNdXS50b1N0cmluZygpICE9PSBkZWZhdWx0c1t0b2tlblszXV0udG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoJ14nICsgdG9rZW5bMl0gKyAnJCcsICEhdG9rZW5bNF0gPyAndScgOiAnJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIHJlZ2V4LnRlc3QobWVyZ2VkUGFyYW1zW3Rva2VuWzNdXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBJbnZhbGlkUGFyYW1ldGVyRXhjZXB0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fanltZm9ueS5zdHJ0cihtZXNzYWdlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd7cGFyYW1ldGVyfSc6IHRva2VuWzNdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAne3JvdXRlfSc6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd7ZXhwZWN0ZWR9JzogdG9rZW5bMl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd7Z2l2ZW59JzogbWVyZ2VkUGFyYW1zW3Rva2VuWzNdXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdXJsID0gdG9rZW5bMV0gKyBtZXJnZWRQYXJhbXNbdG9rZW5bM11dICsgdXJsO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25hbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdXJsID0gdG9rZW5bMV0gKyB1cmw7XG4gICAgICAgICAgICAgICAgb3B0aW9uYWwgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1cmwgPT09ICcnKSB7XG4gICAgICAgICAgICB1cmwgPSAnLyc7XG4gICAgICAgIH1cblxuICAgICAgICB1cmwgPSBfX2p5bWZvbnkuc3RydHIoXG4gICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQodXJsKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csICclMjcnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXCgvZywgJyUyOCcpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcKS9nLCAnJTI5JyksXG4gICAgICAgICAgICBkZWNvZGVkQ2hhcnNcbiAgICAgICAgKTtcblxuICAgICAgICAvLyB0aGUgcGF0aCBzZWdtZW50cyBcIi5cIiBhbmQgXCIuLlwiIGFyZSBpbnRlcnByZXRlZCBhcyByZWxhdGl2ZSByZWZlcmVuY2Ugd2hlbiByZXNvbHZpbmcgYSBVUkk7IHNlZSBodHRwOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tMy4zXG4gICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gZW5jb2RlIHRoZW0gYXMgdGhleSBhcmUgbm90IHVzZWQgZm9yIHRoaXMgcHVycG9zZSBoZXJlXG4gICAgICAgIC8vIG90aGVyd2lzZSB3ZSB3b3VsZCBnZW5lcmF0ZSBhIFVSSSB0aGF0LCB3aGVuIGZvbGxvd2VkIGJ5IGEgdXNlciBhZ2VudCAoZS5nLiBicm93c2VyKSwgZG9lcyBub3QgbWF0Y2ggdGhpcyByb3V0ZVxuICAgICAgICB1cmwgPSBfX2p5bWZvbnkuc3RydHIodXJsLCB7Jy8uLi8nOiAnLyUyRSUyRS8nLCAnLy4vJzogJy8lMkUvJ30pO1xuICAgICAgICBpZiAoJy8uLicgPT09IHVybC5zdWJzdHIoLTMpKSB7XG4gICAgICAgICAgICB1cmwgPSB1cmwuc3Vic3RyKDAsIC0yKSArICclMkUlMkUnO1xuICAgICAgICB9IGVsc2UgaWYgKCcvLicgPT09IHVybC5zdWJzdHIoLTIpKSB7XG4gICAgICAgICAgICB1cmwgPSB1cmwuc3Vic3RyKDAsIC0xKSArICclMkUnO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNjaGVtZUF1dGhvcml0eSA9ICcnO1xuICAgICAgICBsZXQgaG9zdCA9IHRoaXMuX2NvbnRleHQuaG9zdDtcbiAgICAgICAgaWYgKCEhIGhvc3QpIHtcbiAgICAgICAgICAgIGxldCBzY2hlbWUgPSB0aGlzLl9jb250ZXh0LnNjaGVtZTtcbiAgICAgICAgICAgIGlmIChyZXF1aXJlZFNjaGVtZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkU2NoZW1lcy5pbmRleE9mKHNjaGVtZSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZVR5cGUgPSBVcmxHZW5lcmF0b3IuQUJTT0xVVEVfVVJMO1xuICAgICAgICAgICAgICAgICAgICBzY2hlbWUgPSByZXF1aXJlZFNjaGVtZXNbMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaG9zdFRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsZXQgcm91dGVIb3N0ID0gJyc7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCB0b2tlbiBvZiBob3N0VG9rZW5zKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgndmFyaWFibGUnID09PSB0b2tlblswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKCdeJyArIHRva2VuWzJdICsgJyQnLCAhIXRva2VuWzRdID8gJ3UnIDogJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEgcmVnZXgudGVzdChtZXJnZWRQYXJhbXNbdG9rZW5bM11dKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBJbnZhbGlkUGFyYW1ldGVyRXhjZXB0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX2p5bWZvbnkuc3RydHIobWVzc2FnZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3twYXJhbWV0ZXJ9JzogdG9rZW5bM10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAne3JvdXRlfSc6IG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAne2V4cGVjdGVkfSc6IHRva2VuWzJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3tnaXZlbn0nOiBtZXJnZWRQYXJhbXNbdG9rZW5bM11dXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVIb3N0ID0gdG9rZW5bMV0gKyBtZXJnZWRQYXJhbXNbdG9rZW5bM11dICsgcm91dGVIb3N0O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVIb3N0ID0gdG9rZW5bMV0gKyByb3V0ZUhvc3Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocm91dGVIb3N0ICE9PSBob3N0KSB7XG4gICAgICAgICAgICAgICAgICAgIGhvc3QgPSByb3V0ZUhvc3Q7XG4gICAgICAgICAgICAgICAgICAgIGlmIChVcmxHZW5lcmF0b3IuQUJTT0xVVEVfVVJMICE9PSByZWZlcmVuY2VUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2VUeXBlID0gVXJsR2VuZXJhdG9yLk5FVFdPUktfUEFUSDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFVybEdlbmVyYXRvci5BQlNPTFVURV9VUkwgPT09IHJlZmVyZW5jZVR5cGUgfHwgVXJsR2VuZXJhdG9yLk5FVFdPUktfUEFUSCA9PT0gcmVmZXJlbmNlVHlwZSkge1xuICAgICAgICAgICAgICAgIGxldCBwb3J0ID0gJyc7XG4gICAgICAgICAgICAgICAgaWYgKCdodHRwJyA9PT0gc2NoZW1lICYmIDgwICE9PSB0aGlzLl9jb250ZXh0Lmh0dHBQb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcnQgKz0gJzonICsgdGhpcy5fY29udGV4dC5odHRwUG9ydDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCdodHRwcycgPT09IHNjaGVtZSAmJiA0NDMgIT09IHRoaXMuX2NvbnRleHQuaHR0cHNQb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcnQgKz0gJzonICsgdGhpcy5fY29udGV4dC5odHRwc1BvcnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2NoZW1lQXV0aG9yaXR5ID0gVXJsR2VuZXJhdG9yLk5FVFdPUktfUEFUSCA9PT0gcmVmZXJlbmNlVHlwZSA/ICcvLycgOiBgJHtzY2hlbWV9Oi8vYDtcbiAgICAgICAgICAgICAgICBzY2hlbWVBdXRob3JpdHkgKz0gaG9zdCArIHBvcnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVXJsR2VuZXJhdG9yLlJFTEFUSVZFX1BBVEggPT09IHJlZmVyZW5jZVR5cGUpIHtcbiAgICAgICAgICAgIHVybCA9IFVybEdlbmVyYXRvci5nZXRSZWxhdGl2ZVBhdGgodGhpcy5fY29udGV4dC5wYXRoaW5mbywgdXJsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVybCA9IHNjaGVtZUF1dGhvcml0eSArIHVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCBhIHF1ZXJ5IHN0cmluZyBpZiBuZWVkZWRcbiAgICAgICAgY29uc3QgZXh0cmFzID0gT2JqZWN0LmtleXMocGFyYW1ldGVycylcbiAgICAgICAgICAgIC5maWx0ZXIobmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHZhcmlhYmxlcy5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGRlZmF1bHRzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWZhdWx0c1tuYW1lXSA9PSBwYXJhbWV0ZXJzW25hbWVdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gZXh0cmFjdCBmcmFnbWVudFxuICAgICAgICBsZXQgZnJhZ21lbnQgPSAnJztcbiAgICAgICAgaWYgKGRlZmF1bHRzLl9mcmFnbWVudCkge1xuICAgICAgICAgICAgZnJhZ21lbnQgPSBkZWZhdWx0cy5fZnJhZ21lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaWR4O1xuICAgICAgICBpZiAoKGlkeCA9IGV4dHJhcy5pbmRleE9mKCdfZnJhZ21lbnQnKSkgIT09IC0xKSB7XG4gICAgICAgICAgICBmcmFnbWVudCA9IHBhcmFtZXRlcnMuX2ZyYWdtZW50O1xuICAgICAgICAgICAgZGVsZXRlIGV4dHJhc1tpZHhdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV4dHJhcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gT2JqZWN0LmtleXMocGFyYW1ldGVycylcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGsgPT4gZXh0cmFzLmluZGV4T2YoaykgIT09IC0xKVxuICAgICAgICAgICAgICAgIC5tYXAoayA9PiBlbmNvZGVVUklDb21wb25lbnQoaykgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1ldGVyc1trXSkpXG4gICAgICAgICAgICAgICAgLmpvaW4oJyYnKTtcblxuICAgICAgICAgICAgdXJsICs9ICc/JyArIF9fanltZm9ueS5zdHJ0cihxdWVyeSwgeyclMkYnOiAnLyd9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgnJyAhPT0gZnJhZ21lbnQpIHtcbiAgICAgICAgICAgIGZyYWdtZW50ID0gZW5jb2RlVVJJQ29tcG9uZW50KGZyYWdtZW50KVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8hL2csICclMjEnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2csICclMjcnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXCgvZywgJyUyOCcpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcKS9nLCAnJTI5JylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwqL2csICclMkEnKTtcblxuICAgICAgICAgICAgdXJsICs9ICcjJyArIF9fanltZm9ueS5zdHJ0cihmcmFnbWVudCwgeyclMkYnOiAnLycsICclM0YnOiAnPyd9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdGFyZ2V0IHBhdGggYXMgcmVsYXRpdmUgcmVmZXJlbmNlIGZyb20gdGhlIGJhc2UgcGF0aC5cbiAgICAgKlxuICAgICAqIE9ubHkgdGhlIFVSSXMgcGF0aCBjb21wb25lbnQgKG5vIHNjaGVtYSwgaG9zdCBldGMuKSBpcyByZWxldmFudCBhbmQgbXVzdCBiZSBnaXZlbiwgc3RhcnRpbmcgd2l0aCBhIHNsYXNoLlxuICAgICAqIEJvdGggcGF0aHMgbXVzdCBiZSBhYnNvbHV0ZSBhbmQgbm90IGNvbnRhaW4gcmVsYXRpdmUgcGFydHMuXG4gICAgICogUmVsYXRpdmUgVVJMcyBmcm9tIG9uZSByZXNvdXJjZSB0byBhbm90aGVyIGFyZSB1c2VmdWwgd2hlbiBnZW5lcmF0aW5nIHNlbGYtY29udGFpbmVkIGRvd25sb2FkYWJsZSBkb2N1bWVudCBhcmNoaXZlcy5cbiAgICAgKiBGdXJ0aGVybW9yZSwgdGhleSBjYW4gYmUgdXNlZCB0byByZWR1Y2UgdGhlIGxpbmsgc2l6ZSBpbiBkb2N1bWVudHMuXG4gICAgICpcbiAgICAgKiBFeGFtcGxlIHRhcmdldCBwYXRocywgZ2l2ZW4gYSBiYXNlIHBhdGggb2YgXCIvYS9iL2MvZFwiOlxuICAgICAqIC0gXCIvYS9iL2MvZFwiICAgICAtPiBcIlwiXG4gICAgICogLSBcIi9hL2IvYy9cIiAgICAgIC0+IFwiLi9cIlxuICAgICAqIC0gXCIvYS9iL1wiICAgICAgICAtPiBcIi4uL1wiXG4gICAgICogLSBcIi9hL2IvYy9vdGhlclwiIC0+IFwib3RoZXJcIlxuICAgICAqIC0gXCIvYS94L3lcIiAgICAgICAtPiBcIi4uLy4uL3gveVwiXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYmFzZVBhdGggICBUaGUgYmFzZSBwYXRoXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRhcmdldFBhdGggVGhlIHRhcmdldCBwYXRoXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcmVsYXRpdmUgdGFyZ2V0IHBhdGhcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UmVsYXRpdmVQYXRoKGJhc2VQYXRoLCB0YXJnZXRQYXRoKSB7XG4gICAgICAgIGlmIChiYXNlUGF0aCA9PT0gdGFyZ2V0UGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc291cmNlRGlycyA9ICgnLycgPT09IGJhc2VQYXRoLmNoYXJBdCgwKSA/IGJhc2VQYXRoLnN1YnN0cigxKSA6IGJhc2VQYXRoKS5zcGxpdCgnLycpO1xuICAgICAgICBjb25zdCB0YXJnZXREaXJzID0gKCcvJyA9PT0gdGFyZ2V0UGF0aC5jaGFyQXQoMCkgPyB0YXJnZXRQYXRoLnN1YnN0cigxKSA6IHRhcmdldFBhdGgpLnNwbGl0KCcvJyk7XG5cbiAgICAgICAgc291cmNlRGlycy5wb3AoKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0RmlsZSA9IHRhcmdldERpcnMucG9wKCk7XG5cbiAgICAgICAgZm9yIChjb25zdCBbIGksIGRpciBdIG9mIF9fanltZm9ueS5nZXRFbnRyaWVzKHNvdXJjZURpcnMpKSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0RGlyc1tpXSAmJiBkaXIgPT09IHRhcmdldERpcnNbaV0pIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgc291cmNlRGlyc1tpXTtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGFyZ2V0RGlyc1tpXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXREaXJzLnB1c2godGFyZ2V0RmlsZSk7XG4gICAgICAgIGNvbnN0IHBhdGggPSAnLi4vJy5yZXBlYXQoc291cmNlRGlycy5sZW5ndGgpICsgdGFyZ2V0RGlycy5qb2luKCcvJyk7XG5cbiAgICAgICAgLy8gQSByZWZlcmVuY2UgdG8gdGhlIHNhbWUgYmFzZSBkaXJlY3Rvcnkgb3IgYW4gZW1wdHkgc3ViZGlyZWN0b3J5IG11c3QgYmUgcHJlZml4ZWQgd2l0aCBcIi4vXCIuXG4gICAgICAgIC8vIFRoaXMgYWxzbyBhcHBsaWVzIHRvIGEgc2VnbWVudCB3aXRoIGEgY29sb24gY2hhcmFjdGVyIChlLmcuLCBcImZpbGU6Y29sb25cIikgdGhhdCBjYW5ub3QgYmUgdXNlZFxuICAgICAgICAvLyBhcyB0aGUgZmlyc3Qgc2VnbWVudCBvZiBhIHJlbGF0aXZlLXBhdGggcmVmZXJlbmNlLCBhcyBpdCB3b3VsZCBiZSBtaXN0YWtlbiBmb3IgYSBzY2hlbWUgbmFtZVxuICAgICAgICAvLyAoc2VlIGh0dHA6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi00LjIpLlxuICAgICAgICBsZXQgY29sb25Qb3MsIHNsYXNoUG9zO1xuICAgICAgICByZXR1cm4gJycgPT09IHBhdGggfHwgJy8nID09PSBwYXRoLmNoYXJBdCgwKVxuICAgICAgICAgICAgfHwgLTEgIT09IChjb2xvblBvcyA9IHBhdGguaW5kZXhPZignOicpKSAmJiAoY29sb25Qb3MgPCAoc2xhc2hQb3MgPSBwYXRoLmluZGV4T2YoJy8nKSkgfHwgLTEgPT09IHNsYXNoUG9zKVxuICAgICAgICAgICAgPyBgLi8ke3BhdGh9YCA6IHBhdGg7XG4gICAgfVxufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhbiBhYnNvbHV0ZSBVUkwsIGUuZy4gXCJodHRwOi8vZXhhbXBsZS5jb20vZGlyL2ZpbGVcIi5cbiAqL1xuVXJsR2VuZXJhdG9yLkFCU09MVVRFX1VSTCA9IDA7XG5cbi8qKlxuICogR2VuZXJhdGVzIGFuIGFic29sdXRlIHBhdGgsIGUuZy4gXCIvZGlyL2ZpbGVcIi5cbiAqL1xuVXJsR2VuZXJhdG9yLkFCU09MVVRFX1BBVEggPSAxO1xuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHJlbGF0aXZlIHBhdGggYmFzZWQgb24gdGhlIGN1cnJlbnQgcmVxdWVzdCBwYXRoLCBlLmcuIFwiLi4vcGFyZW50LWZpbGVcIi5cbiAqXG4gKiBAc2VlIFVybEdlbmVyYXRvci5nZXRSZWxhdGl2ZVBhdGgoKVxuICovXG5VcmxHZW5lcmF0b3IuUkVMQVRJVkVfUEFUSCA9IDI7XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgbmV0d29yayBwYXRoLCBlLmcuIFwiLy9leGFtcGxlLmNvbS9kaXIvZmlsZVwiLlxuICogU3VjaCByZWZlcmVuY2UgcmV1c2VzIHRoZSBjdXJyZW50IHNjaGVtZSBidXQgc3BlY2lmaWVzIHRoZSBob3N0LlxuICovXG5VcmxHZW5lcmF0b3IuTkVUV09SS19QQVRIID0gMztcblxuZXhwb3J0IGRlZmF1bHQgVXJsR2VuZXJhdG9yO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvVXJsR2VuZXJhdG9yLmpzIiwiZ2xvYmFsLl9fanltZm9ueSA9IGdsb2JhbC5fX2p5bWZvbnkgfHwge307XG5cbi8qKlxuICogQG1lbWJlck9mIF9fanltZm9ueVxuICovXG5jbGFzcyBQbGF0Zm9ybSB7XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoaXMgbm9kZSB2ZXJzaW9uIGhhcyBhc3luYyBmdW5jdGlvbiBzdXBwb3J0LlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGhhc0FzeW5jRnVuY3Rpb25TdXBwb3J0KCkge1xuICAgICAgICBpZiAodW5kZWZpbmVkID09PSB0aGlzLl9hc3luY1N1cHBvcnQpIHtcbiAgICAgICAgICAgIHRoaXMuX2FzeW5jU3VwcG9ydCA9IGZhbHNlO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBmbjtcbiAgICAgICAgICAgICAgICBldmFsKCdmbiA9IGFzeW5jIGZ1bmN0aW9uICgpIHsgfScpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2FzeW5jU3VwcG9ydCA9ICdBc3luY0Z1bmN0aW9uJyA9PT0gKGZuLmNvbnN0cnVjdG9yLm5hbWUgfHwgZm4uY29uc3RydWN0b3IuZGlzcGxheU5hbWUpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBTeW50YXhFcnJvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fYXN5bmNTdXBwb3J0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFyZSB3ZSBydW5uaW5nIG9uIHdpbmRvd3M/XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNXaW5kb3dzKCkge1xuICAgICAgICByZXR1cm4gJ3dpbjMyJyA9PT0gcHJvY2Vzcy5wbGF0Zm9ybTtcbiAgICB9XG59XG5cbmdsb2JhbC5fX2p5bWZvbnkuUGxhdGZvcm0gPSBQbGF0Zm9ybTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9AanltZm9ueS91dGlsL2xpYi9QbGF0Zm9ybS5qcyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwiZ2xvYmFsLmlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuY29uc3QgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5yZXF1aXJlKCcuL0lzL2Z1bmN0aW9ucycpO1xuXG5pZiAoISBpc0Z1bmN0aW9uKGdsb2JhbC5pc09iamVjdCkpIHtcbiAgICBnbG9iYWwuaXNPYmplY3QgPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgIHJldHVybiAhISBhcmcgJiYgJ29iamVjdCcgPT09IHR5cGVvZiBhcmc7XG4gICAgfTtcbn1cblxuZm9yKGNvbnN0IG5hbWUgb2YgWyAnQXJndW1lbnRzJywgJ0Jvb2xlYW4nLCAnU3RyaW5nJywgJ051bWJlcicsICdEYXRlJywgJ1JlZ0V4cCcsICdFcnJvcicsICdTeW1ib2wnLCAnTWFwJywgJ1dlYWtNYXAnLCAnU2V0JywgJ1dlYWtTZXQnIF0pIHtcbiAgICBpZiAoaXNGdW5jdGlvbihnbG9iYWxbJ2lzJyArIG5hbWVdKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBnbG9iYWxbJ2lzJyArIG5hbWVdID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCAnICsgbmFtZSArICddJztcbiAgICB9O1xufVxuXG5jb25zdCBwcmltaXRpdmVzID0gWyBOdW1iZXIsIFN0cmluZywgQm9vbGVhbiBdO1xuZ2xvYmFsLmlzU2NhbGFyID0gZnVuY3Rpb24gaXNTY2FsYXIodmFsdWUpIHtcbiAgICBpZiAodW5kZWZpbmVkID09PSB2YWx1ZSB8fCBudWxsID09PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xuICAgIGZvciAoY29uc3QgdHlwZSBvZiBwcmltaXRpdmVzKSB7XG4gICAgICAgIGlmIChwcm90byA9PT0gdHlwZS5wcm90b3R5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuZ2xvYmFsLmlzT2JqZWN0TGl0ZXJhbCA9IGZ1bmN0aW9uIGlzT2JqZWN0TGl0ZXJhbCh2YWx1ZSkge1xuICAgIGlmIChudWxsID09PSB2YWx1ZSB8fCB1bmRlZmluZWQgPT09IHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKSA9PT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHt9KTtcbn07XG5cbmdsb2JhbC5pc1Byb21pc2UgPSBmdW5jdGlvbiBpc1Byb21pc2UodmFsdWUpIHtcbiAgICByZXR1cm4gaXNGdW5jdGlvbih2YWx1ZS50aGVuKTtcbn07XG5cbmdsb2JhbC5pc1N0cmVhbSA9IGZ1bmN0aW9uIGlzU3RyZWFtKHN0cmVhbSkge1xuICAgIHJldHVybiAnb2JqZWN0JyA9PT0gdHlwZW9mIHN0cmVhbSAmJiBpc0Z1bmN0aW9uKHN0cmVhbS5waXBlKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvQGp5bWZvbnkvdXRpbC9saWIvaXMuanMiLCJnbG9iYWwuaXNHZW5lcmF0b3IgPSBmdW5jdGlvbiBpc0dlbmVyYXRvcih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiAnZnVuY3Rpb24nID09PSB0eXBlb2YgdmFsdWUubmV4dCAmJiAnZnVuY3Rpb24nID09PSB0eXBlb2YgdmFsdWUudGhyb3c7XG59O1xuXG5nbG9iYWwuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzR2VuZXJhdG9yRnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAoISB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGlzR2VuZXJhdG9yKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgY29uc3RydWN0b3IgPSB2YWx1ZS5jb25zdHJ1Y3RvcjtcblxuICAgIGlmICghIGNvbnN0cnVjdG9yKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoJ0dlbmVyYXRvckZ1bmN0aW9uJyA9PT0gY29uc3RydWN0b3IubmFtZSB8fCAnR2VuZXJhdG9yRnVuY3Rpb24nID09PSBjb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNHZW5lcmF0b3IoY29uc3RydWN0b3IucHJvdG90eXBlKTtcbn07XG5cbmlmIChfX2p5bWZvbnkuUGxhdGZvcm0uaGFzQXN5bmNGdW5jdGlvblN1cHBvcnQoKSkge1xuICAgIGdsb2JhbC5pc0FzeW5jRnVuY3Rpb24gPSBmdW5jdGlvbiBpc0FzeW5jRnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29uc3RydWN0b3IgPSB2YWx1ZS5jb25zdHJ1Y3RvcjtcbiAgICAgICAgaWYgKCFjb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICdBc3luY0Z1bmN0aW9uJyA9PT0gKGNvbnN0cnVjdG9yLm5hbWUgfHwgY29uc3RydWN0b3IuZGlzcGxheU5hbWUpO1xuICAgIH07XG59IGVsc2Uge1xuICAgIGdsb2JhbC5pc0FzeW5jRnVuY3Rpb24gPSBmdW5jdGlvbiBpc0FzeW5jRnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xufVxuXG5nbG9iYWwuaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mIEJvdW5kRnVuY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGlzR2VuZXJhdG9yRnVuY3Rpb24ob2JqKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoaXNBc3luY0Z1bmN0aW9uKG9iaikpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuICdbb2JqZWN0IEZ1bmN0aW9uXScgPT09IHRvU3RyaW5nLmNhbGwob2JqKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvQGp5bWZvbnkvdXRpbC9saWIvSXMvZnVuY3Rpb25zLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5nbG9iYWwuX19qeW1mb255ID0gZ2xvYmFsLl9fanltZm9ueSB8fCB7fTtcblxuLyoqXG4gKiBHZXQgW0tleSwgVmFsdWVdIHBhaXJzIGZvciBhbiBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0XG4gKlxuICogQHJldHVybnMge0dlbmVyYXRvcn1cbiAqL1xuY29uc3QgZW50cmllcyA9IGZ1bmN0aW9uICogb2JqZW50cmllcyhvYmplY3QpIHtcbiAgICBpZiAoaXNBcnJheShvYmplY3QpKSB7XG4gICAgICAgIGZvciAoY29uc3QgayBvZiBvYmplY3Qua2V5cygpKSB7XG4gICAgICAgICAgICB5aWVsZCBbIGssIG9iamVjdFtrXSBdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChvYmplY3QgaW5zdGFuY2VvZiBNYXApIHtcbiAgICAgICAgcmV0dXJuIG9iamVjdC5lbnRyaWVzKCk7XG4gICAgfVxuXG4gICAgaWYgKCEgaXNPYmplY3Qob2JqZWN0KSkge1xuICAgICAgICB0aHJvdyBuZXcgSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uKCdBcmd1bWVudCAxIGlzIG5vdCBhbiBvYmplY3QnKTtcbiAgICB9XG5cbiAgICBpZiAoT2JqZWN0LmVudHJpZXMpIHtcbiAgICAgICAgeWllbGQgKiBPYmplY3QuZW50cmllcyhvYmplY3QpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgIGlmICghIG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHlpZWxkIFsga2V5LCBvYmplY3Rba2V5XSBdO1xuICAgIH1cbn07XG5cbmdsb2JhbC5fX2p5bWZvbnkuZ2V0RW50cmllcyA9IGVudHJpZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvQGp5bWZvbnkvdXRpbC9saWIvT2JqZWN0L2VudHJpZXMuanMiLCIndXNlIHN0cmljdCc7XG5cbmdsb2JhbC5fX2p5bWZvbnkgPSBnbG9iYWwuX19qeW1mb255IHx8IHt9O1xuXG5nbG9iYWwuX19qeW1mb255LnN0cnRyID0gZnVuY3Rpb24gc3RydHIoc3RyaW5nLCByZXBsYWNlUGFpcnMpIHtcbiAgICBsZXQgc3RyID0gc3RyaW5nLnRvU3RyaW5nKCksIHJlO1xuXG4gICAgZm9yIChsZXQgWyBrZXksIHZhbHVlIF0gb2YgX19qeW1mb255LmdldEVudHJpZXMocmVwbGFjZVBhaXJzKSkge1xuICAgICAgICBrZXkgPSBrZXkucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy5dL2csICdcXFxcJCYnKTtcbiAgICAgICAgcmUgPSBuZXcgUmVnRXhwKGtleSwgJ2cnKTtcbiAgICAgICAgc3RyID0gc3RyLnJlcGxhY2UocmUsIHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9AanltZm9ueS91dGlsL2xpYi9TdHJpbmcvc3RydHIuanMiLCJjb25zdCBJbnZhbGlkQXJndW1lbnRFeGNlcHRpb24gPSByZXF1aXJlKCcuL0ludmFsaWRBcmd1bWVudEV4Y2VwdGlvbicpO1xuXG4vKipcbiAqIEV4Y2VwdGlvbiB0aHJvd24gd2hlbiBhIHBhcmFtZXRlciBpcyBub3QgdmFsaWQuXG4gKi9cbmNsYXNzIEludmFsaWRQYXJhbWV0ZXJFeGNlcHRpb24gZXh0ZW5kcyBJbnZhbGlkQXJndW1lbnRFeGNlcHRpb24ge1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEludmFsaWRQYXJhbWV0ZXJFeGNlcHRpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9FeGNlcHRpb24vSW52YWxpZFBhcmFtZXRlckV4Y2VwdGlvbi5qcyIsImNvbnN0IEludmFsaWRBcmd1bWVudEV4Y2VwdGlvbiA9IHJlcXVpcmUoJy4vSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uJyk7XG5cbi8qKlxuICogRXhjZXB0aW9uIHRocm93biB3aGVuIGEgcm91dGUgY2Fubm90IGJlIGdlbmVyYXRlZCBiZWNhdXNlIG9mIG1pc3NpbmdcbiAqIG1hbmRhdG9yeSBwYXJhbWV0ZXJzLlxuICovXG5jbGFzcyBNaXNzaW5nTWFuZGF0b3J5UGFyYW1ldGVyc0V4Y2VwdGlvbiBleHRlbmRzIEludmFsaWRBcmd1bWVudEV4Y2VwdGlvbiB7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWlzc2luZ01hbmRhdG9yeVBhcmFtZXRlcnNFeGNlcHRpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9FeGNlcHRpb24vTWlzc2luZ01hbmRhdG9yeVBhcmFtZXRlcnNFeGNlcHRpb24uanMiLCJjb25zdCBJbnZhbGlkQXJndW1lbnRFeGNlcHRpb24gPSByZXF1aXJlKCcuL0ludmFsaWRBcmd1bWVudEV4Y2VwdGlvbicpO1xuXG4vKipcbiAqIEV4Y2VwdGlvbiB0aHJvd24gd2hlbiBhIHJvdXRlIGRvZXMgbm90IGV4aXN0LlxuICovXG5jbGFzcyBSb3V0ZU5vdEZvdW5kRXhjZXB0aW9uIGV4dGVuZHMgSW52YWxpZEFyZ3VtZW50RXhjZXB0aW9uIHtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSb3V0ZU5vdEZvdW5kRXhjZXB0aW9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vanMvRXhjZXB0aW9uL1JvdXRlTm90Rm91bmRFeGNlcHRpb24uanMiXSwic291cmNlUm9vdCI6IiJ9