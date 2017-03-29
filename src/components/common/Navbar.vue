<template lang="pug">
nav.navbar
  .nav-logo
    router-link(to="/user/room")
      img(src="../../assets/logo_text.png")
  .nav-menu(v-if="login")
    .user-menu
      .user
        input(type="checkbox", id="avatar")
        label(for="avatar")
          img(:src="avatar")
        .drop-menu
          .drop-item 设置
          .drop-item 测试
      //- .home.item
        router-link(to="/user/room") 首页
      .message.item 消息
      .line.item |
      .logout.item(@click='logout') 退出
      .add
        router-link(to="/user/room/new") +
</template>


<script>
export default {
  props: {
    login: {
      type: Boolean,
      default: false
    },
    avatar: {
      type: String,
      default: ''
    }
  },
  methods: {
    logout () {
      console.log('logout')
      this.$store.dispatch('UserLogout')
    }
  }
}
</script>


<style lang="stylus" scoped>
$nav-height = 50px
$border-radius = 50px
$asset-size = 0.8 * $nav-height
$line-gap = 10px
$navbar-color = #FF586D
  .navbar
    background $navbar-color
    height $nav-height
    display flex
    justify-content space-between
    align-items center
    color: white
    .add
      transition 0.3s margin-top
      margin-left 20px
      float right
      font-size 50px
      background white
      margin-right 100px
      margin-top -30px
      height 100px
      display flex
      flex-direction column-reverse
      border-radius 15px
      a
        padding 0 13px
        margin-bottom -5px
        color $navbar-color
      &:hover
        margin-top -18px
    .item
      margin 0 5px
      transition 0.3s
      font-size 15px
      padding 20px 0
    .item:not(.line):hover
      background #ffcddf
    .line
      margin 0 $line-gap
      font-size 26px
    .home a
      padding 20px 10px
    .logout, .message
      padding 20px 10px
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
    .logout
      cursor pointer
</style>
