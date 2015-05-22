var IsoProxy = require("isoproxy");

var proxy = new IsoProxy({root: "/api", isServer: true});

proxy.methods.add = function(x, y) {
  return new Promise(function(resolve) {
    resolve(x + y);
  });
};

module.exports = proxy;
