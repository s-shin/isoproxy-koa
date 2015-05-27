/**
 * Koa middleware for IsoProxy.
 * https://github.com/s-shin/isoproxy
 */

/**
 * @param {IsoProxy} proxy IsoProxy instance.
 */
module.exports = function(proxy) {
  return function *routeForIsoProxy(next) {
    var resPromise = null;
    var processJsonrpcRequest = proxy.routes[this.path];
    if (this.method === "POST" && processJsonrpcRequest) {
      this.body = yield processJsonrpcRequest(this.request.body);
      return;
    }
    yield* next;
  };
};
