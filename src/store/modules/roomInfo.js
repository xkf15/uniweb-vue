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

var state = {
  messages: [],
  members: [],
  info: [],
  applications: []
};

var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, types.GET_MESSAGES, function (state, data) {
  state.messages = data;
}), (0, _defineProperty3.default)(_mutations, types.DELETE_MESSAGE, function (state, data) {
  for (var i = 0; i < state.messages.length; i++) {
    if (state.messages[i].id === data.announcementId) {
      state.messages.splice(i, i);
      break;
    }
  }
}), (0, _defineProperty3.default)(_mutations, types.CREATE_MESSAGE, function (state, data) {
  state.messages.push(data);
}), (0, _defineProperty3.default)(_mutations, types.GET_ROOM_INFO, function (state, data) {
  state.info = data;
}), (0, _defineProperty3.default)(_mutations, types.GET_MEMBERS, function (state, data) {
  state.members = data;
}), (0, _defineProperty3.default)(_mutations, types.GET_APPLICATIONS, function (state, data) {
  state.applications = data;
}), _mutations);

exports.default = {
  state: state,
  mutations: mutations
};
//# sourceMappingURL=roomInfo.js.map