'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vuex = require('vuex');

var _vuex2 = _interopRequireDefault(_vuex);

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

var _getters = require('./getters');

var getters = _interopRequireWildcard(_getters);

var _newroom = require('./modules/newroom');

var _newroom2 = _interopRequireDefault(_newroom);

var _login = require('./modules/login');

var _login2 = _interopRequireDefault(_login);

var _rooms = require('./modules/rooms');

var _rooms2 = _interopRequireDefault(_rooms);

var _roomInfo = require('./modules/roomInfo');

var _roomInfo2 = _interopRequireDefault(_roomInfo);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

var debug = process.env.NODE_ENV !== 'production';

exports.default = new _vuex2.default.Store({
  actions: actions,
  getters: getters,
  modules: {
    newroom: _newroom2.default,
    login: _login2.default,
    rooms: _rooms2.default,
    roomInfo: _roomInfo2.default
  },
  strict: debug
});
//# sourceMappingURL=index.js.map