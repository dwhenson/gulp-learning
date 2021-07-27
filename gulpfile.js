function helloWorld(callback) {
  console.log("hello world");
  callback()
}

exports.default = helloWorld;