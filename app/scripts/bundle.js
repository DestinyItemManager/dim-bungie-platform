(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var asyncTest = require("./async.js").asyncTest;


// asyncTest().then((c) => {
//   console.log(c);
// });

function a() {
  return regeneratorRuntime.async(function a$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.prev = 0;
        context$1$0.next = 3;
        return asyncTest();
      case 3:
        context$1$0.t0 = context$1$0.sent;
        console.log(context$1$0.t0);

        context$1$0.next = 10;
        break;
      case 7:
        context$1$0.prev = 7;
        context$1$0.t1 = context$1$0["catch"](0);
        console.log(context$1$0.t1);
      case 10:
      case "end":
        return context$1$0.stop();
    }
  }, null, this, [[0, 7]]);
}

a();
// var b = await asyncTest();
// console.log(b);
},{"./async.js":2}],2:[function(require,module,exports){
"use strict";

exports.asyncTest = asyncTest;
function asyncTest() {
  return new Promise(function (resolve) {
    window.setTimeout(function () {
      resolve("a");
    }, 1000);
  });
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}]},{},[1]);
