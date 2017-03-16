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
      menu: ['房间管理', '发布新房间'],
      menuTitle: '房间'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
