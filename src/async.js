function asyncTest() {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve("Success");
    }, 1000);
  });
}

export {
  asyncTest
};
