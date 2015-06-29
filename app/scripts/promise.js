"use strict";

exports.promiseTest = promiseTest;
function promiseTest() {
  return new Promise(function (resolve) {
    window.setTimeout(resolve, 1000);
  });
}
Object.defineProperty(exports, "__esModule", {
  value: true
});