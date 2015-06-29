// import { asyncTest } from "./async.js";

// asyncTest().then((c) => {
//   console.log(c);
// });
function asyncTest() {
  return new Promise((resolve, reject) => {
      window.setTimeout(() => {
        reject("a");
      }, 1000);
  });
}




async function a() {
  try {
    // var b = await asyncTest();
    var b = await asyncTest();
    console.log("E: " + b);
    // console.log(b);
  } catch (err) {
    console.log('err ' + err);
  }
}

a();


asyncTest().then(function(d) {
  console.log("D: " + d);
}, function(err) {
  console.log('err ' + err);
})
.catch(function(err) {
  console.log('err ' + err);
});
