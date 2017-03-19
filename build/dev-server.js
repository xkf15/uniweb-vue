'use strict';

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./check-versions')();

var browserSync = require('browser-sync');
var historyApiFallback = require('connect-history-api-fallback');

var config = require('../config');
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV);
}

var opn = require('opn');
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var proxyMiddleware = require('http-proxy-middleware');
var webpackConfig = process.env.NODE_ENV === 'testing' ? require('./webpack.prod.conf') : require('./webpack.dev.conf');

var port = process.env.PORT || config.dev.port;

var autoOpenBrowser = !!config.dev.autoOpenBrowser;

var proxyTable = config.dev.proxyTable;

var app = express();
var compiler = webpack(webpackConfig);

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
});

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: function log() {}
});

compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' });
    cb();
  });
});

(0, _keys2.default)(proxyTable).forEach(function (context) {
  var options = proxyTable[context];
  if (typeof options === 'string') {
    options = { target: options };
  }
  app.use(proxyMiddleware(options.filter || context, options));
});

app.use(historyApiFallback());

app.use(devMiddleware);

app.use(hotMiddleware);

var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
app.use(staticPath, express.static('./static'));

var uri = 'http://localhost:' + port;

devMiddleware.waitUntilValid(function () {
  console.log('> Listening at ' + uri + '\n');
});

browserSync({
  port: 8888,
  ui: {
    port: 8889
  },
  server: {
    baseDir: '../src',

    middleware: [historyApiFallback(), devMiddleware, hotMiddleware]
  },

  files: ['../src/*.html']
});
//# sourceMappingURL=dev-server.js.map