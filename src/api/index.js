'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _vueAxios = require('vue-axios');

var _vueAxios2 = _interopRequireDefault(_vueAxios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueAxios2.default, _axios2.default);

exports.default = {
  localLogin: function localLogin(data) {
    return _vue2.default.axios.post('http://101.6.161.95:8000/login/', data);
  },
  createRoom: function createRoom(data) {
    return _vue2.default.axios.post('http://101.6.161.95:8000/uniadmin/create', data);
  },
  getMessages: function getMessages() {
    return _vue2.default.axios.get('');
  },
  getRoomInfo: function getRoomInfo() {
    return _vue2.default.axios.get('');
  },
  getRooms: function getRooms() {
    return _vue2.default.axios.get('http://101.6.161.231:8000/uniadmin/');
  }
};
//# sourceMappingURL=index.js.map