'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _mutations;

var _types = require('../types');

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isLoggedIn = function isLoggedIn() {
  return sessionStorage.getItem('uni-token');
};

var state = {
  token: isLoggedIn() || null
};

var setUser = function setUser(state, token) {
  sessionStorage.setItem('uni-token', token);
  state.token = token;
};

var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, types.USER_SIGNIN, function (state, token) {
  setUser(state, token);
}), (0, _defineProperty3.default)(_mutations, types.USER_SIGNOUT, function (state) {
  sessionStorage.setItem('uni-token', null);
  state.token = null;
}), _mutations);

exports.default = {
  state: state,
  mutations: mutations
};
//# sourceMappingURL=login.js.map