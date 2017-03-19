'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateRoom = exports.GetRooms = exports.GetMessages = exports.UserLogout = exports.UserLogin = exports.MemberInfo = exports.BasicInfo = undefined;

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
var GetMessages = exports.GetMessages = function GetMessages(_ref5) {
  var commit = _ref5.commit;

  _api2.default.getMessages().then(function (res) {}, function (err) {
    console.log(err);
    _vue2.default.prototype.$message.error('请求错误！');
  });
};

var GetRooms = exports.GetRooms = function GetRooms(_ref6) {
  var commit = _ref6.commit;

  _api2.default.getRooms().then(function (res) {
    console.log(res.data);
  }, function (err) {
    console.log(err);
    _vue2.default.prototype.$message.error('请求错误！');
  });
};

var CreateRoom = exports.CreateRoom = function CreateRoom(_ref7, data) {
  var commit = _ref7.commit;

  _api2.default.createRoom(data).then(function (res) {
    console.log(res);
    if (res.status === 200) {
      commit(types.CLEAR_NEW_ROOM);
      _vue2.default.prototype.$message({
        type: 'success',
        message: '成功发送房间信息！'
      });
    } else {
      _vue2.default.prototype.$message.error(res.data.info);
    }
  }, function () {
    _vue2.default.prototype.$message.error('请求错误！');
  });
};
//# sourceMappingURL=actions.js.map