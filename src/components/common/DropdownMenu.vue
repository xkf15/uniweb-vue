<template lang="pug">
.drop-menu
  input(type="checkbox", id="room", checked)
  label(for="room")
    .drop-title
      .title
        strong {{ menuTitle }}
      i.fa.fa-chevron-circle-down.icon(aria-hidden="true")
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
// $menu-hover-color = #1d9f42
// $menu-active-color = #1ca243
$menu-hover-color = #ffc2d5
$menu-active-color = #ffc2d5
$transition-time = 0.3s
$border-style = #ddd solid 2px
.drop-menu
  background white
  color #6c64db
  font-size 15px
  border-bottom $border-style
  input
    display none
    padding 10px
  .drop-title
    padding 15px 10px 15px 10px
    cursor pointer
    border-bottom $border-style
    display flex
    justify-content center
    line-height 100%
    &:hover
      color white
      background #ffc2d5
    .title
      flex 4
    .icon
      flex 1
  .drop-item a
    display block
    padding 10px
    color #6c64db
    font-size 12px
    border-bottom #ddd solid 1px
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
  label i
    transition $transition-time
  input:checked ~ label i
    transform rotate(180deg)
    transform-origin 50% 50%
</style>
