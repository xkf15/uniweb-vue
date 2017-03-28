<template lang="pug">
  #roomAdmin
    layout(:tag="menuTitle")
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
