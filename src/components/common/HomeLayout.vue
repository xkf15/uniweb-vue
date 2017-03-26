<template lang="pug">
.homeLayout
  nav
    .nav-logo UNIWORLD
  canvas#canvas.canvas
  .container
    el-row.content
      span.title
        img(src="../../assets/logo_white.png")
      el-row
        router-view
</template>

<script>

export default {
  mounted () {
    require('@/js/main.js')
  }
}
</script>

<style lang="stylus" scoped>
$navbar-color = #FF586D
$nav-height = 50px

flexbox(num)
  per = num * 100 + '%'
  -webkit-box-flex num      /* OLD - iOS 6-, Safari 3.1-6 */
  -moz-box-flex num         /* OLD - Firefox 19- */
  width per               /* For old syntax, otherwise collapses. */
  -webkit-flex num          /* Chrome */
  -ms-flex num              /* IE 10 */
  flex num

.homeLayout
  nav
    z-index 10
    background $navbar-color
    height $nav-height
    display flex
    align-items center
    color: white
    .nav-logo
      font-size 30px
      margin-left 100px
  .container
    height 'calc(100vh - %s)' % $nav-height
    width 100vw
    display flex
    display -webkit-flex
    display -ms-flexbox
    justify-content center
    align-items center
    .content
      flexbox(0.3)
  .el-row.content
    padding 16px
  .title
    font-size 28px
  .canvas
    position absolute
    z-index -1
    top 0
    left 0
@media screen and (max-width: 768px)
  #login .container .content
    flexbox(0.7)
</style>
