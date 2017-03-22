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
    return _vue2.default.axios.post('/login/', data);
  },
  createRoom: function createRoom(data) {
    return _vue2.default.axios.post('/uniadmin/create', data);
  },
  getMessages: function getMessages(data) {
    return _vue2.default.axios.get('/uniadmin/room/' + data + '/notice');
  },
  createMessage: function createMessage(data) {
    return _vue2.default.axios.post('/uniadmin/room/' + data.roomId + '/notice/create', data.data);
  },
  deleteMessage: function deleteMessage(data) {
    return _vue2.default.axios.delete('/uniadmin/room/' + data.roomId + '/notice/' + data.announcementId + '/delete');
  },
  getRoomInfo: function getRoomInfo(roomId) {
    return _vue2.default.axios.get('/uniadmin/room/' + roomId + '/detail');
  },
  getMembers: function getMembers(roomId) {
    return _vue2.default.axios.get('/uniadmin/room/' + roomId + '/users');
  },
  getRooms: function getRooms() {
    return _vue2.default.axios.get('/uniadmin/');
  },
  getApplications: function getApplications(roomId) {
    return _vue2.default.axios.get('/uniadmin/room/' + roomId + '/application');
  }
};
//# sourceMappingURL=index.js.map