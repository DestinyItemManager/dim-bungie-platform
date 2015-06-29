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