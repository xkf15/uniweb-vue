import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

import HomeLayout from '@/components/common/HomeLayout'
import Login from '@/components/pages/Login'
import Signup from '@/components/pages/Signup'

import Room from '@/components/pages/user/Room'
import RoomAdmin from '@/components/pages/user/room/Admin'

import NewRoom from '@/components/pages/user/room/NewRoom'
import BasicInfo from '@/components/pages/user/room/new/BasicInfo'
import MemberInfo from '@/components/pages/user/room/new/MemberInfo'
import Confirm from '@/components/pages/user/room/new/Confirm'
import Publish from '@/components/pages/user/room/new/Publish'

import Activity from '@/components/pages/user/Activity'
import Info from '@/components/pages/user/activity/Info'
import Member from '@/components/pages/user/activity/Member'
import Message from '@/components/pages/user/activity/Message'
import Settings from '@/components/pages/user/activity/Settings'
import Result from '@/components/pages/user/activity/message/Result'
import Notice from '@/components/pages/user/activity/message/Notice'
import Questionnaire from '@/components/pages/user/activity/message/Questionnaire'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: HomeLayout,
      children: [
        { path: '', redirect: 'login' },
        { path: 'login', component: Login },
        { path: 'signup', component: Signup }
      ]
    },
    { path: '/user', redirect: '/user/room' },
    {
      path: '/user/room',
      component: Room,
      children: [
        { path: '', redirect: 'admin' },
        { path: 'admin', component: RoomAdmin },
        {
          path: 'new',
          component: NewRoom,
          children: [
            { path: '', redirect: 'basic' },
            { path: 'basic', component: BasicInfo },
            { path: 'member', component: MemberInfo },
            { path: 'confirm', component: Confirm },
            { path: 'publish', component: Publish }
          ]
        }
      ]
    },
    { path: '/user/activity', redirect: '/user' },
    { path: '/user/activity/:id',
      component: Activity,
      children: [
        { path: '', redirect: 'info' },
        { path: 'info', component: Info },
        { path: 'member', component: Member },
        { path: 'message', component: Message },
        { path: 'message/result', component: Result },
        { path: 'settings', component: Settings },
        { path: 'message/notice', component: Notice },
        { path: 'message/questionnaire', component: Questionnaire }
      ]
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   const token = sessionStorage.getItem('uni-token')
//   if (to.path === '/' || to.path === '/login' || to.path === '/signup') { // 如果是跳转到登录页的
//     if (token !== 'null' && token !== null) {
//       next('/user/room') // 如果有token就转向todolist不返回登录页
//     }
//     next() // 否则跳转回登录页
//   } else {
//     if (token !== 'null' && token !== null) {
//       Vue.axios.create().defaults.headers.common['Authorization'] = 'Token ' + token // 此为Django项目的token
//       // Vue.axios.create().defaults.headers.common['Authorization'] = 'Bearer ' + token // 此为jwt的token
//       next() // 如果有token就正常转向
//     } else next('/') // 否则跳转回登录页
//   }
// })

export default router
