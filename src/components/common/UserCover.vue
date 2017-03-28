<template lang="pug">
.cover
  .avatar.flex_box
    img(:src="userInfo.avatar")
  .intro.flex_box
    .title.item
      span {{ userInfo.title }}
      span
        img(src="../../assets/title.png")
    .subtitle.item
      span {{ userInfo.subtitle }}
    .college.item
      span
        img(src="../../assets/thu.png")
      span {{ userInfo.college }} ({{ userInfo.student_id }})
    .info.item
      span 好友 {{ userInfo.friends }}
      span 参与活动 {{ userInfo.activities }}
      span 赞 {{ userInfo.zan }}
</template>

<script>
export default {
  props: {
    userInfo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
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
</style>
