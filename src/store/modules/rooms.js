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
  roomList: [],
  loading: false,
  searchRoomList: []
};

var mutations = (_mutations = {}, (0, _defineProperty3.default)(_mutations, types.GET_ROOMS, function (state, data) {
  state.roomList = data;
}), (0, _defineProperty3.default)(_mutations, types.SET_LOADING_FALSE, function (state) {
  state.loading = false;
}), (0, _defineProperty3.default)(_mutations, types.SET_LOADING_TRUE, function (state) {
  state.loading = true;
}), (0, _defineProperty3.default)(_mutations, types.SEARCH_ROOMS_BY_NAME, function (state, data) {
  state.searchRoomList = [];
}), (0, _defineProperty3.default)(_mutations, types.SEARCH_ROOMS_BY_LABELS, function (state, data) {
  state.searchRoomList = [];
}), _mutations);

exports.default = {
  state: state,
  mutations: mutations
};
//# sourceMappingURL=rooms.js.map