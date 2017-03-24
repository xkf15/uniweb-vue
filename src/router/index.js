import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

import Login from '@/components/pages/Login'

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
import NewMessage from '@/components/pages/user/activity/NewMessage'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
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
        { path: 'newMessage', component: NewMessage }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('uni-token')
  if (to.path === '/' || to.path === '/login') { // 如果是跳转到登录页的
    if (token !== 'null' && token !== null) {
      next('/user/room') // 如果有token就转向todolist不返回登录页
    }
    next() // 否则跳转回登录页
  } else {
    if (token !== 'null' && token !== null) {
      Vue.axios.create().defaults.headers.common['Authorization'] = 'Token ' + token // 注意Token后有个空格
      next() // 如果有token就正常转向
    } else next('/') // 否则跳转回登录页
  }
})

export default router
