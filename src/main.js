'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _elementUi = require('element-ui');

var _elementUi2 = _interopRequireDefault(_elementUi);

require('element-ui/lib/theme-default/index.css');

var _iview = require('iview');

var _iview2 = _interopRequireDefault(_iview);

require('iview/dist/styles/iview.css');

require('font-awesome/css/font-awesome.css');

var _mock = require('./api/mock');

var _mock2 = _interopRequireDefault(_mock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_elementUi2.default);
_vue2.default.use(_iview2.default);

_vue2.default.config.productionTip = false;

new _vue2.default((0, _extends3.default)({
  router: _router2.default,
  store: _store2.default
}, _App2.default)).$mount('#app');
//# sourceMappingURL=main.js.map