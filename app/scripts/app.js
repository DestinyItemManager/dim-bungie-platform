"use strict";

var _asyncToGenerator = function (fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { var callNext = step.bind(null, "next"); var callThrow = step.bind(null, "throw"); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(callNext, callThrow); } } callNext(); }); }; };

var a = _asyncToGenerator(function* () {
  try {
    // var b = await asyncTest();
    var b = yield asyncTest();
    console.log("E: " + b);
    // console.log(b);
  } catch (err) {
    console.log("err " + err);
  }
});

// import { asyncTest } from "./async.js";

// asyncTest().then((c) => {
//   console.log(c);
// });
function asyncTest() {
  return new Promise(function (resolve, reject) {
    window.setTimeout(function () {
      reject("a");
    }, 1000);
  });
}




a();


asyncTest().then(function (d) {
  console.log("D: " + d);
}, function (err) {
  console.log("err " + err);
})["catch"](function (err) {
  console.log("err " + err);
});