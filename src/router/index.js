import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import Room from '@/components/pages/user/Room'
import RoomAdmin from '@/components/pages/user/room/Admin'
import NewRoom from '@/components/pages/user/room/NewRoom'
import BasicInfo from '@/components/pages/user/room/new/BasicInfo'
import MemberInfo from '@/components/pages/user/room/new/MemberInfo'
import Confirm from '@/components/pages/user/room/new/Confirm'
import Publish from '@/components/pages/user/room/new/Publish'

import Activity from '@/components/pages/user/Activity'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Hello },
    // { path: 'login', component: Login },
    {
      path: '/user/room',
      component: Room,
      children: [
        { path: '', component: RoomAdmin },
        {
          path: 'new',
          component: NewRoom,
          children: [
            { path: 'basic', component: BasicInfo },
            { path: 'member', component: MemberInfo },
            { path: 'confirm', component: Confirm },
            { path: 'publish', component: Publish }
          ]
        }
      ]
    },
    { path: '/user/activity', component: Activity }
  ]
})

export default router
