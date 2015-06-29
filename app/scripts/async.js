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