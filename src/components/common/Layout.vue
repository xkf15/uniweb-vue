<template lang="pug">
  .layout
    nav#navbar
      .nav-logo
        router-link(to="/user/room")
          img(src="../../assets/logo_text.png")
      .nav-menu
        .user-menu
          .user
            input(type="checkbox", id="avatar")
            label(for="avatar")
              img(:src="avatar")
            .drop-menu
              .drop-item 设置
              .drop-item 测试
          .home.item
            router-link(to="/user/room") 首页
          .message.item 消息
          .line.item |
          .logout.item(@click='logout') 退出
          .add
            router-link(to="/user/room/new") +
    .white
      .cover
        .avatar.flex_box
          img(:src="avatar")
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
        dropdown-menu(:menu="menu", :menuTitle="menuTitle")
      .content
        .decorator
          el-breadcrumb(separator="/")
            el-breadcrumb-item(v-if="breadcrumb", v-for="(item, index) of breadcrumb", :to="{ path: item.path }", :key="item.id")
              span.br {{ item.title }}
            el-breadcrumb-item
              span.last {{ tag }}
          hr
        router-view
</template>

<script>
import { mapState } from 'vuex'
import DropdownMenu from '@/components/common/DropdownMenu'

export default {
  components: { DropdownMenu },
  created () {
    this.$store.dispatch('GetUserInfo')
  },
  methods: {
    logout () {
      this.$store.dispatch('UserLogout')
    }
  },
  data () {
    return {
      title: '我是你失散多年的爸爸',
      subtitle: '一句话介绍你自己',
      college: '清华大学',
      friends: 233,
      activities: 233,
      zan: 233,
      student_id: 2015233233,
      avatar: require('../../assets/avatar.png')
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.login.userInfo
    })
  },
  props: ['menu', 'menuTitle', 'tag', 'breadcrumb']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
$gap = 120px
$background-color = #f2f0f4

$nav-height = 50px
$border-radius = 50px
$asset-size = 0.8 * $nav-height
$line-gap = 10px
$navbar-color = #FF586D
$margin-bottom = 30px

.layout
  background-color $background-color
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
    margin 20px $gap 0 $gap
    display flex
  .sidebar
    margin-bottom $margin-bottom
    background white
    flex 1
  .content
    flex 4.5
    padding-right 20px

$tag-color = blue
.content
  margin-left 20px
  margin-bottom $margin-bottom
  background white
  .decorator
    background url(../../assets/jumb.png) no-repeat bottom right
    background-size 180px
    text-align left
    padding 15px 20px 0 20px
    .br, .last
      font-size 15px
    .br:hover
      transition 0.3s
      color #ff586d
    .br
      color #6c64bd
    hr
      margin 13px 0
      border 1px solid #e2dfdf


</style>
