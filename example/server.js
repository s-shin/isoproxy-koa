var path = require("path");
var koa = require("koa");
var koaStatic = require("koa-static");
var koaLogger = require("koa-logger");
var koaBodyParser = require("koa-bodyparser");
var koaIsoProxy = require("../index");
var proxy = require("./proxy");

var app = koa();
app.use(koaLogger());
app.use(koaStatic(path.join(__dirname, "public")));
app.use(koaBodyParser());
app.use(koaIsoProxy(proxy));

app.listen(process.env.PORT || 3000);
