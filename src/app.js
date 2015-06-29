import {
  asyncTest as promiseTest
}
from "./async.js";

function promiseFn() {
  promiseTest().then(function(d) {
      console.log("Promise: " + d);
    }, function(err) {
      console.log("Promise Err: " + err);
    })
    .catch(function(err) {
      console.log("Promise Err: " + err);
    });
}

async function asyncFn() {
  try {
    var b = await promiseTest();
    console.log("Async: " + b);
  } catch (err) {
    console.log("Async Err: " + err);
  }
}

promiseFn();
asyncFn();
