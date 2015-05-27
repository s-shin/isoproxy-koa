var IsoProxy = require("isoproxy");

var proxy = new IsoProxy({root: "/api", isServer: typeof window === "undefined"});

proxy.setInterfaces({
  math: ["add"]
});

proxy.setImplementations({
  math: {
    add: function(x, y) {
      return new Promise(function(resolve) {
        resolve(x + y);
      });
    }
  }
});

module.exports = proxy;
