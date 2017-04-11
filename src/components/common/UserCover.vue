<template lang="pug">
.cover
  .avatar.flex_box
    img(:src="userInfo.avatar_thumbnail")
  .intro.flex_box
    .title.item
      span {{ userInfo.name }}
      span
        img(src="../../assets/title.png")
    .subtitle.item
      span {{ userInfo.signature }}
    .college.item
      span
        img(src="../../assets/thu.png")
      //- span {{ userInfo.advertising.name_ch }} ({{ userInfo.department.name_ch }})
      span {{ userInfo.university.name_ch }} ({{ userInfo.department }})
    .info.item
      span 房间总数 {{ userInfo.room_count }}
      span 点赞 {{ userInfo.thumb_ups }}
      span 差评 {{ userInfo.thumb_downs }}
</template>

<script>
export default {
  props: {
    userInfo: {
      type: Object,
      required: true
    },
    colleges: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
  .cover
    .avatar
      width 250px
      img
        width 100%
        height 100%
        border-radius 200px
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
