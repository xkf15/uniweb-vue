<template lang="pug">
  .layout
    .cover
    .wrap
      .sidebar
        .drop-menu
          input(type="checkbox", id="room")
          label(for="room")
            .drop-title {{ menuTitle }}
          .drop-content
            .drop-item(v-for="(item, index) in menu")
              router-link(:to="item.path", tag="div") {{item.title}}
      .content
        .decorator
          el-breadcrumb(separator="/")
            el-breadcrumb-item(v-if="breadcrumb", v-for="(item, index) in breadcrumb", :to="{ path: item.path }") {{ item.title }}
            el-breadcrumb-item {{ tag }}
        router-view
</template>

<script>
export default {
  props: ['menu', 'menuTitle', 'tag', 'breadcrumb']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
$menu-hover-color = green // #76e395
$transition-time = 0.3s
.layout
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
      padding 10px
    .drop-title
      padding 10px
    .drop-title, .drop-item
      &:hover, a:hover
        background $menu-hover-color
        color white
      width 100%
      cursor pointer
    .drop-content .drop-item
      transition $transition-time
      max-height 0
      overflow hidden
    input:checked ~ .drop-content .drop-item
      max-height 100px
      padding 10px
    // input:checked ~ label .drop-title::after
    //   content '>'
    //   padding-left 50px

$tag-color = blue
.content
  margin 0 10px
  .decorator
    text-align left
    background white
    padding 15px 20px

</style>
