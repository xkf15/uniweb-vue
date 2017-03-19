'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _mutations;

var _types = require('../types');

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getBasicInfo = function getBasicInfo() {
  var basicInfo = sessionStorage.getItem('basic_info');
  console.log(basicInfo);
  if (basicInfo) return JSON.parse(basicInfo);else return null;
};
var getMemberInfo = function getMemberInfo() {
  var memberInfo = sessionStorage.getItem('member_info');
  console.log(memberInfo);
  if (memberInfo) return JSON.parse(memberInfo);else return null;
};

var state = {
  basicInfo: getBasicInfo(),
  memberInfo: getMemberInfo()
};

var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, types.SET_BASIC_INFO, function (state, data) {
  console.log((0, _stringify2.default)(data));
  sessionStorage.setItem('basic_info', (0, _stringify2.default)(data));
  state.basicInfo = data;
}), (0, _defineProperty3.default)(_mutations, types.SET_MEMBER_INFO, function (state, data) {
  sessionStorage.setItem('member_info', data);
  state.memberInfo = data;
}), (0, _defineProperty3.default)(_mutations, types.CLEAR_NEW_ROOM, function (state) {
  sessionStorage.setItem('basic_info', null);
  sessionStorage.setItem('member_info', null);
  state.basicInfo = null;
  state.memberInfo = null;
}), _mutations);

exports.default = {
  state: state,
  mutations: mutations
};
//# sourceMappingURL=newroom.js.map