<template lang="pug">
.drop-menu
  input(type="checkbox", id="room")
  label(for="room")
    .drop-title {{ menuTitle }}
  .drop-content
    .drop-item(v-for="(item, index) of menu")
      router-link(:to="item.path", :class="{active: activeIndex === index}") {{item.title}}
</template>


<script>
export default {
  props: ['menu', 'menuTitle'],
  computed: {
    activeIndex () {
      for (let i = 0; i < this.menu.length; ++i) {
        if (RegExp('^' + this.menu[i].path + '[\\w/]*').test(this.$route.path)) return i
      }
    }
  }
}
</script>


<style lang="stylus" scoped>
$menu-hover-color = #1d9f42
$menu-active-color = #1ca243
$transition-time = 0.3s
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
  .drop-content .drop-item
    transition $transition-time
    max-height 0
    overflow hidden
  input:checked ~ .drop-content .drop-item
    max-height 100px
</style>
