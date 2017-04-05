<template lang="pug">
  #activities
    layout(:tag="menuTag", :breadcrumb="breadcrumb", :user-info="userInfo", :colleges="colleges")
      dropdown-menu(slot="sidebar", :menu="menu", :menu-title="menuTitle")
</template>


<script>
import Layout from '@/components/common/Layout'
import DropdownMenu from '@/components/common/DropdownMenu'
import { mapState } from 'vuex'
import store from '@/store'

export default {
  components: {
    Layout,
    DropdownMenu
  },
  beforeRouteEnter: async (to, from, next) => {
    await store.dispatch('GetUserInfo')
    await store.dispatch('GetInitialData')
    next()
  },
  computed: {
    ...mapState({
      userInfo: state => state.login.userInfo,
      colleges: state => state.login.initialData[1]
    })
  },
  data () {
    return {
      menu: [
        {
          title: '房间信息',
          path: '/user/activity/' + this.$route.params.id + '/info'
        },
        {
          title: '消息管理',
          path: '/user/activity/' + this.$route.params.id + '/message'
        },
        {
          title: '成员管理',
          path: '/user/activity/' + this.$route.params.id + '/member'
        },
        {
          title: '房间设置',
          path: '/user/activity/' + this.$route.params.id + '/settings'
        }
      ],
      menuTitle: '活动管理',
      menuTag: '最新消息',
      breadcrumb: [
        {
          title: '房间',
          path: '/user/room'
        }
      ]
    }
  }
}
</script>
