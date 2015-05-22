var proxy = require("./proxy");

proxy.api.add(1, 2).then(function(result) {
  console.log(result); // => 3
});
