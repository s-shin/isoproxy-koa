# koa-isoproxy

[Koa](https://github.com/koajs/koa) middleware for [IsoProxy](https://github.com/s-shin/isoproxy).

## Usage

```js
var koa = require("koa");
var koaIsoProxy = require("koa-isoproxy");

var app = koa();
app.use(koaIsoProxy(proxy));
```

## Run Example

```
npm run build_example
npm run start_example
```

## License

The MIT License.
