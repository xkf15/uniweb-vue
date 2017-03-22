'use strict';

var path = require('path');

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,

    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/uniadmin': {
        target: 'http://101.6.161.105:8000',
        changeOrigin: true,
        pathRewrite: {
          '^/uniadmin': '/uniadmin'
        }
      },
      '/login': {
        target: 'http://101.6.161.105:8000',
        changeOrigin: true,
        pathRewrite: {
          '^/login': '/login'
        }
      }
    },

    cssSourceMap: false
  }
};
//# sourceMappingURL=index.js.map