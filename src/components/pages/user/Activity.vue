<template lang="pug">
  #activities
    layout(:menu="menu", :menu-title="menuTitle", :tag="menuTag", :breadcrumb="breadcrumb")
</template>

<script>
import Layout from '@/components/common/Layout'

export default {
  components: {
    Layout
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
