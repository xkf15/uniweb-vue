'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateRoom = exports.GetApplications = exports.GetMembers = exports.GetRoomInfo = exports.GetRooms = exports.DeleteMessage = exports.CreateMessage = exports.GetMessages = exports.UserLogout = exports.UserLogin = exports.MemberInfo = exports.BasicInfo = undefined;

var _api = require('../api');

var _api2 = _interopRequireDefault(_api);

var _types = require('./types');

var types = _interopRequireWildcard(_types);

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _router = require('../router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BasicInfo = exports.BasicInfo = function BasicInfo(_ref, data) {
  var commit = _ref.commit;

  commit(types.SET_BASIC_INFO, data);
  _router2.default.push('member');
};

var MemberInfo = exports.MemberInfo = function MemberInfo(_ref2, data) {
  var commit = _ref2.commit;

  commit(types.SET_MEMBER_INFO, data);
};

var UserLogin = exports.UserLogin = function UserLogin(_ref3, data) {
  var commit = _ref3.commit;

  _api2.default.localLogin(data).then(function (res) {
    if (res.status === 200) {
      commit(types.USER_SIGNIN, res.data.token);
      _vue2.default.prototype.$message({
        type: 'success',
        message: '登录成功！'
      });
      _router2.default.push('./user/room');
    } else {
      _vue2.default.prototype.$message.error(res.data.info);
      commit(types.USER_SIGNOUT);
    }
  }, function () {
    _vue2.default.prototype.$message.error('请求错误！');
    commit(types.USER_SIGNOUT);
  });
};

var UserLogout = exports.UserLogout = function UserLogout(_ref4) {
  var commit = _ref4.commit;

  commit(types.USER_SIGNOUT);
  _router2.default.push('/');
};

var GetMessages = exports.GetMessages = function GetMessages(_ref5, data) {
  var commit = _ref5.commit;

  _api2.default.getMessages(data).then(function (res) {
    console.log(res.data);
    commit(types.GET_MESSAGES, res.data);
  }, function (err) {
    console.log(err);
    _vue2.default.prototype.$message.error('请求错误！');
  });
};

var CreateMessage = exports.CreateMessage = function CreateMessage(_ref6, data) {
  var commit = _ref6.commit;

  _api2.default.createMessage(data).then(function (res) {
    data.data.id = res.data;
    commit(types.CREATE_MESSAGE, data.data);
    _vue2.default.prototype.$message('添加消息成功！');
  }, function (err) {
    console.log(err);
    _vue2.default.prototype.$message.error('请求错误！');
  });
};

var DeleteMessage = exports.DeleteMessage = function DeleteMessage(_ref7, data) {
  var commit = _ref7.commit;

  _api2.default.deleteMessage(data).then(function (res) {
    if (res.status === 200) {
      commit(types.DELETE_MESSAGE, data);
      _vue2.default.prototype.$message({
        type: 'success',
        message: '删除成功!'
      });
    }
  }, function (err) {
    console.log(err);
    _vue2.default.prototype.$message.error('请求错误！');
  });
};

var GetRooms = exports.GetRooms = function GetRooms(_ref8) {
  var commit = _ref8.commit;

  commit(types.CHANGE_LOADING);
  _api2.default.getRooms().then(function (res) {
    console.log(res.data);
    commit(types.GET_ROOMS, res.data);
    commit(types.CHANGE_LOADING);
  }, function (err) {
    console.log(err);
    _vue2.default.prototype.$message.error('请求错误！');
    commit(types.CHANGE_LOADING);
  });
};

var GetRoomInfo = exports.GetRoomInfo = function GetRoomInfo(_ref9, roomId) {
  var commit = _ref9.commit;

  _api2.default.getRoomInfo(roomId).then(function (res) {
    if (res.status === 200) {
      commit(types.GET_ROOM_INFO, res.data);
    } else {
      _vue2.default.prototype.$message.error('状态码错误');
    }
  }, function (err) {
    console.log(err);
    _vue2.default.prototype.$message.error('请求错误！');
  });
};

var GetMembers = exports.GetMembers = function GetMembers(_ref10, roomId) {
  var commit = _ref10.commit;

  _api2.default.getMembers(roomId).then(function (res) {
    if (res.status === 200) {
      commit(types.GET_MEMBERS, res.data);
    } else {
      _vue2.default.prototype.$message.error('状态码错误');
    }
  }, function (err) {
    console.log(err);
    _vue2.default.prototype.$message.error('请求错误！');
  });
};

var GetApplications = exports.GetApplications = function GetApplications(_ref11, roomId) {
  var commit = _ref11.commit;

  _api2.default.getApplications(roomId).then(function (res) {
    if (res.status === 200) {
      commit(types.GET_APPLICATIONS, res.data);
    } else {
      _vue2.default.prototype.$message.error('状态码错误');
    }
  }, function (err) {
    console.log(err);
    _vue2.default.prototype.$message.error('请求错误！');
  });
};

var CreateRoom = exports.CreateRoom = function CreateRoom(_ref12, data) {
  var commit = _ref12.commit;

  _api2.default.createRoom(data).then(function (res) {
    if (res.status === 201) {
      commit(types.CLEAR_NEW_ROOM);
      _vue2.default.prototype.$message('创建房间成功');
    } else {
      _vue2.default.prototype.$message.error('Status code is not matched');
    }
  }, function () {
    _vue2.default.prototype.$message.error('请求错误！');
  });
};
//# sourceMappingURL=actions.js.map