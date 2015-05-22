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
        resPromise = processJsonrpc(self.request.body);
      }
    });
    if (resPromise) {
      this.body = yield resPromise;
      return;
    }
    yield* next;
  };
};
