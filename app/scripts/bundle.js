(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var promiseTest = require("./async.js").asyncTest;


function promiseFn() {
  promiseTest().then(function (d) {
    console.log("Promise: " + d);
  }, function (err) {
    console.log("Promise Err: " + err);
  })["catch"](function (err) {
    console.log("Promise Err: " + err);
  });
}

function asyncFn() {
  var b;
  return regeneratorRuntime.async(function asyncFn$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.prev = 0;
        context$1$0.next = 3;
        return promiseTest();
      case 3:
        b = context$1$0.sent;
        console.log("Async: " + b);
        context$1$0.next = 10;
        break;
      case 7:
        context$1$0.prev = 7;
        context$1$0.t0 = context$1$0["catch"](0);
        console.log("Async Err: " + context$1$0.t0);
      case 10:
      case "end":
        return context$1$0.stop();
    }
  }, null, this, [[0, 7]]);
}

promiseFn();
asyncFn();
},{"./async.js":2}],2:[function(require,module,exports){
"use strict";

function asyncTest() {
  return new Promise(function (resolve, reject) {
    window.setTimeout(function () {
      resolve("Success");
    }, 1000);
  });
}

exports.asyncTest = asyncTest;
Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}]},{},[1]);
