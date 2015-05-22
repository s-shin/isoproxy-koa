var path = require("path");
var koa = require("koa");
var koaStatic = require("koa-static");
var koaIsoProxy = require("../index");
var proxy = require("./proxy");

var app = koa();
app.use(koaStatic(path.join(__dirname, "public")));
app.use(koaIsoProxy(proxy));

app.listen(process.env.PORT || 3000);
