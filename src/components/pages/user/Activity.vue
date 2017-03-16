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
      menu: ['房间信息', '消息管理', '成员管理'],
      menuTitle: '活动管理',
      menuTag: '最新消息'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
