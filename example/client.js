var proxy = require("./proxy");

proxy.api.math.add(1, 2).then(function(result) {
  console.log(result); // => 3
});
