'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _HomeLayout = require('@/components/common/HomeLayout');

var _HomeLayout2 = _interopRequireDefault(_HomeLayout);

var _Login = require('@/components/pages/Login');

var _Login2 = _interopRequireDefault(_Login);

var _Signup = require('@/components/pages/Signup');

var _Signup2 = _interopRequireDefault(_Signup);

var _Room = require('@/components/pages/user/Room');

var _Room2 = _interopRequireDefault(_Room);

var _Admin = require('@/components/pages/user/room/Admin');

var _Admin2 = _interopRequireDefault(_Admin);

var _NewRoom = require('@/components/pages/user/room/NewRoom');

var _NewRoom2 = _interopRequireDefault(_NewRoom);

var _BasicInfo = require('@/components/pages/user/room/new/BasicInfo');

var _BasicInfo2 = _interopRequireDefault(_BasicInfo);

var _MemberInfo = require('@/components/pages/user/room/new/MemberInfo');

var _MemberInfo2 = _interopRequireDefault(_MemberInfo);

var _Confirm = require('@/components/pages/user/room/new/Confirm');

var _Confirm2 = _interopRequireDefault(_Confirm);

var _Publish = require('@/components/pages/user/room/new/Publish');

var _Publish2 = _interopRequireDefault(_Publish);

var _Activity = require('@/components/pages/user/Activity');

var _Activity2 = _interopRequireDefault(_Activity);

var _Info = require('@/components/pages/user/activity/Info');

var _Info2 = _interopRequireDefault(_Info);

var _Member = require('@/components/pages/user/activity/Member');

var _Member2 = _interopRequireDefault(_Member);

var _Message = require('@/components/pages/user/activity/Message');

var _Message2 = _interopRequireDefault(_Message);

var _Settings = require('@/components/pages/user/activity/Settings');

var _Settings2 = _interopRequireDefault(_Settings);

var _Notice = require('@/components/pages/user/activity/newMessage/Notice');

var _Notice2 = _interopRequireDefault(_Notice);

var _Questionnaire = require('@/components/pages/user/activity/newMessage/Questionnaire');

var _Questionnaire2 = _interopRequireDefault(_Questionnaire);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

var router = new _vueRouter2.default({
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/',
    component: _HomeLayout2.default,
    children: [{ path: '', redirect: 'login' }, { path: 'login', component: _Login2.default }, { path: 'signup', component: _Signup2.default }]
  }, { path: '/user', redirect: '/user/room' }, {
    path: '/user/room',
    component: _Room2.default,
    children: [{ path: '', redirect: 'admin' }, { path: 'admin', component: _Admin2.default }, {
      path: 'new',
      component: _NewRoom2.default,
      children: [{ path: '', redirect: 'basic' }, { path: 'basic', component: _BasicInfo2.default }, { path: 'member', component: _MemberInfo2.default }, { path: 'confirm', component: _Confirm2.default }, { path: 'publish', component: _Publish2.default }]
    }]
  }, { path: '/user/activity', redirect: '/user' }, { path: '/user/activity/:id',
    component: _Activity2.default,
    children: [{ path: '', redirect: 'info' }, { path: 'info', component: _Info2.default }, { path: 'member', component: _Member2.default }, { path: 'message', component: _Message2.default }, { path: 'settings', component: _Settings2.default }, { path: 'newMessage', redirect: 'message' }, { path: 'newMessage/notice', component: _Notice2.default }, { path: 'newMessage/questionnaire', component: _Questionnaire2.default }]
  }]
});

router.beforeEach(function (to, from, next) {
  var token = sessionStorage.getItem('uni-token');
  if (to.path === '/' || to.path === '/login' || to.path === '/signup') {
    if (token !== 'null' && token !== null) {
      next('/user/room');
    }
    next();
  } else {
    if (token !== 'null' && token !== null) {
      _vue2.default.axios.create().defaults.headers.common['Authorization'] = 'Token ' + token;
      next();
    } else next('/');
  }
});

exports.default = router;
//# sourceMappingURL=index.js.map