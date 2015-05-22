/**
 * Koa middleware for IsoProxy.
 * https://github.com/s-shin/isoproxy
 */

/**
 * @param {IsoProxy} proxy IsoProxy instance.
 */
module.exports = function(proxy) {
  return function *routeForIsoProxy(next) {
    var self = this;
    var resPromise = null;
    proxy.traverse(function(path, processJsonrpc) {
      // Oops, cannot stop traversing naturally.
      if (resPromise) {
        return;
      }
      if (self.method == "POST" && self.path == path) {
        resPromise = processJsonrpc(toObject(self.body));
      }
    });
    if (resPromise) {
      this.body = yield resPromise;
      return;
    }
    yield* next;
  };
};

function toObject(body) {
  var type = typeof body;
  if (type == "object") {
    return body;
  }
  if (type == "string") {
    return JSON.parse(body);
  }
}
