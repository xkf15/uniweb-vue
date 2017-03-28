<template lang="pug">
.homeLayout
  navbar
  canvas#canvas.canvas
  .container
    el-row.content
      .title
        img(src="../../assets/logo_white.png")
      .view-box
        el-col(:span="16")
          router-view
</template>

<script>
import Navbar from '@/components/common/Navbar'

export default {
  components: {
    Navbar
  },
  mounted () {
    require('@/js/main.js')
  }
}
</script>

<style lang="stylus" scoped>
$nav-height = 50px

flexDisplay()
  display flex
  display -webkit-flex
  display -ms-flexbox


.homeLayout
  .container
    height 'calc(100vh - %s)' % $nav-height
    width 100vw
    flexDisplay()
    justify-content center
    align-items center
  .el-row.content
    padding 16px
  .title
    font-size 28px
  .view-box
    flexDisplay()
    justify-content center
  .canvas
    position absolute
    z-index -1
    top 0
    left 0
</style>
