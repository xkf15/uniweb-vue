<template lang="pug">
  #roomAdmin
    Layout(:menu="menu", :menu-title="menuTitle", :tag="menuTitle")
    //- .cover
    //- .wrap
    //-   .sidebar
    //-     .drop-menu
    //-       input(type="checkbox", id="room")
    //-       label.drop-title(for="room") 房间
    //-       .drop-content
    //-         .drop-item(v-for="(item, index) in menu") {{item}}
    //-   .content
    //-     .decorator 房间
    //-     router-view
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
      menuTitle: '房间',
      active: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
#roomAdmin
  .cover
    background #ccc
    height 200px

  .wrap
    margin 20px 0
    padding 10px
    background #eee
    display flex
  .sidebar
    flex 1
  .content
    flex 3
  .drop-menu
    background #ddd
    input
      display none
    .drop-title, .drop-item
      width 100%
      cursor pointer
    .drop-content .drop-item
      transition 0.5s
      max-height 0
      overflow hidden
    input:checked ~ .drop-content .drop-item
      max-height 100px

$tag-color = blue
.content
  margin 0 10px
  .decorator
    text-align left
    background white

</style>
