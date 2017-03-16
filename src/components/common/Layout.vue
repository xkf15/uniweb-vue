<template lang="pug">
  .layout
    .cover
    .wrap
      .sidebar
        .drop-menu
          input(type="checkbox", id="room")
          label.drop-title(for="room") {{ menuTitle }}
          .drop-content
            .drop-item(v-for="(item, index) in menu")
              router-link(:to="item.path") {{item.title}}
      .content
        .decorator {{ tag }}
        router-view
</template>

<script>
export default {
  props: ['menu', 'menuTitle', 'tag']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
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
