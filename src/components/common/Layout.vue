<template lang="pug">
  .layout
    nav#navbar
      .nav-logo
        a(href="") UNIWORLD
      .nav-menu
        .user-menu
          .user
            input(type="checkbox", id="avatar")
            label(for="avatar")
              img(src="../../assets/logo.png")
            .drop-menu
              .drop-item 设置
              .drop-item 测试
          .username huangwx
          .line |
          .logout(@click='logout') 退出
          .add
            router-link(to="/user/room/new") +
    .white
      .cover
        .avatar.flex_box
          img(src="../../assets/avatar.png")
        .intro.flex_box
          .title.item
           span {{ title }}
           span
            img(src="../../assets/title.png")
          .subtitle.item
            span {{ subtitle }}
          .college.item
            span
              img(src="../../assets/thu.png")
            span {{ college }} ({{ student_id }})
          .info.item
            span 好友 {{ friends }}
            span 参与活动 {{ activities }}
            span 赞 {{ zan }}
    .wrap
      .sidebar
        .drop-menu
          input(type="checkbox", id="room")
          label(for="room")
            .drop-title {{ menuTitle }}
          .drop-content
            .drop-item(v-for="(item, index) of menu")
              router-link(:to="item.path", :class="{active: activeIndex === index}") {{item.title}}
      .content
        .decorator
          el-breadcrumb(separator="/")
            el-breadcrumb-item(v-if="breadcrumb", v-for="(item, index) of breadcrumb", :to="{ path: item.path }", :key="item.id") {{ item.title }}
            el-breadcrumb-item {{ tag }}
        router-view
</template>

<script>
export default {
  created () {
    this.$store.dispatch('GetUserInfo')
  },
  data () {
    return {
      title: '我是你失散多年的爸爸',
      subtitle: '一句话介绍你自己',
      college: '清华大学',
      friends: 233,
      activities: 233,
      zan: 233,
      student_id: 2015233233
    }
  },
  computed: {
    activeIndex () {
      for (let i = 0; i < this.menu.length; ++i) {
        if (RegExp('^' + this.menu[i].path + '[\\w/]*').test(this.$route.path)) return i
      }
    }
  },
  props: ['menu', 'menuTitle', 'tag', 'breadcrumb']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
$menu-hover-color = #1d9f42
$menu-active-color = #1ca243
$transition-time = 0.3s
$gap = 120px

$nav-height = 50px
$border-radius = 50px
$asset-size = 0.8 * $nav-height
$line-gap = 10px
$navbar-color = #FF586D

.layout
  #navbar
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
        color $navbar-color
      &:hover
        margin-top -18px

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
    .logout
      cursor pointer

  .white
    background white
    margin 20px $gap
  .cover
    background url(../../assets/jumb.png) no-repeat top right
    height 200px
    display flex
    align-items center
    color #6c64bd
    .item
      padding 3px
    span
      padding 5px
    .title
      font-size 22px
    .subtitle, .college
      font-size 14px
    .info
      font-size 18px
      padding-top 20px
    .flex_box
      padding 0 50px
      text-align left
    .subtitle, .college
      color #a3a3a3
  .wrap
    margin 20px $gap
    display flex
  .sidebar
    background white
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

$tag-color = blue
.content
  margin 0 10px
  .decorator
    text-align left
    background white
    padding 15px 20px


</style>
