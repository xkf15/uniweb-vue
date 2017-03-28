<template lang="pug">
  #activities
    layout(:tag="menuTag", :breadcrumb="breadcrumb")
      dropdown-menu(slot="sidebar", :menu="menu", :menu-title="menuTitle")
</template>

<script>
import Layout from '@/components/common/Layout'
import DropdownMenu from '@/components/common/DropdownMenu'

export default {
  components: {
    Layout,
    DropdownMenu
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
