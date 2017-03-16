<template lang="pug">
  #activities
    layout(:menu="menu", :menu-title="menuTitle", :tag="menuTag")
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
          path: 'info'
        },
        {
          title: '消息管理',
          path: 'message'
        },
        {
          title: '成员管理',
          path: 'member'
        }
      ],
      menuTitle: '活动管理',
      menuTag: '最新消息'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
