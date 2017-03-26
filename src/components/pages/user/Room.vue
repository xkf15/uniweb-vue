<template lang="pug">
  #roomAdmin
    layout(:menu="menu", :menu-title="menuTitle", :tag="menuTitle")
      .drop-menu
        input(type="checkbox", id="room")
        label(for="room")
          .drop-title {{ menuTitle }}
        .drop-content
          .drop-item(v-for="(item, index) of menu")
            router-link(:to="item.path", :class="{active: activeIndex === index}") {{item.title}}
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
$menu-hover-color = #1d9f42
$menu-active-color = #1ca243
#roomAdmin
  .drop-menu
    background #ddd
    input
      display none
      padding 10px
    .drop-title
      padding 10px
      cursor pointer
      &:hover
        color white
        background #ccc
    .drop-item a
      display block
      padding 10px
      color black
      &.active
        background $menu-active-color
        color white
      &:hover
        background $menu-hover-color
        color white
    // .drop-title, .drop-item
    //   &:hover, a:hover
    //     background $menu-hover-color
    //     color white
    //   a
    //     width 100%
    //   width 100%
    //   cursor pointer
    .drop-content .drop-item
      transition $transition-time
      max-height 0
      overflow hidden
    input:checked ~ .drop-content .drop-item
      max-height 100px
      // padding 10px
    // input:checked ~ label .drop-title::after
    //   content '>'
    //   padding-left 50px
</style>
