<template lang="pug">
  #app
    nav#navbar
      .nav-logo
        a(href="#") UNIWORLD
      .nav-menu
        .user-menu
          .user
            input(type="checkbox", id="avatar")
            label(for="avatar")
              img(src="./assets/logo.png")
            .drop-menu
              .drop-item 设置
              .drop-item 测试
          .username huangwx
          .line |
          router-link(to="/") 退出
    .container
      router-view
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
a, a:link, a:visited, a:hover, a:active
  text-decoration none

$nav-height = 50px
$border-radius = 50px
$asset-size = 0.8 * $nav-height
$line-gap = 10px

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

.container
  margin 20px 50px

#navbar
  background #ccc
  height $nav-height
  display flex
  justify-content space-between
  align-items center
  color: white

  .line
    margin 0 $line-gap
    font-size 30px

  .nav-logo
    font-size 30px
    margin 0 100px

  .user-menu
    display flex
    align-items center
    margin 0 30px
    .user
      height $asset-size
      margin 0 5px
      input
        display none
      label
        cursor pointer

      .drop-menu
        position absolute
        background #ccc
        display none
        .drop-item
          padding 3px 10px
          cursor pointer
          border-bottom 1px solid white
          &:hover
            background #aaa

      input:checked ~ .drop-menu
        display: block

      img
        background white
        height 100%
        border-radius $border-radius
  a
    color white

</style>
