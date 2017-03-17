<template lang="pug">
  #roomAdmin
    layout(:menu="menu", :menu-title="menuTitle", :tag="menuTitle")
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
          title: '房间管理',
          path: '/user/room/admin'
        },
        {
          title: '发布新房间',
          path: '/user/room/new'
        }
      ],
      menuTitle: '房间'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
