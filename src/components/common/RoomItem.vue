<template lang="pug">
.room_item
  router-link.room_avatar(:to="'/user/activity/' + roomInfo.id", :style="{background: 'url(' + roomInfo.cover + ')'}")
    .tag 桌游
  .room_content
    .title
      span.tag 官方
      span {{ roomInfo.title }}
    //- .content
      span {{ roomInfo.description }}
    .room_attach
      .room_time {{ roomInfo.date_time_start }}
      .room_time {{ roomInfo.date_time_end }}
      .room_icons
        .msg_icon
          span
            i.fa.fa-comment-o(aria-hidden="true")
            span 3
          span
            i.fa.fa-user-o(aria-hidden="true")
            span 3
        .member_icon
    .msg-text
      .new_msg 有新结束的群消息！
      .new_member 有新的成员申请！
</template>

<script>
export default {
  props: {
    roomInfo: {
      type: Object,
      default: []
    }
  }
}
</script>

<style lang="stylus" scoped>
.room_item
  margin-bottom 40px
  display flex
  .room_attach
    display flex
    justify-content space-between
  .msg_icon span
    margin 0 10px

  .tag
    background $tag-color
    color white
    border-radius 5px
    padding 5px 10px
  .room_avatar
    display flex
    flex-direction column-reverse
    align-items flex-start
    border 1px solid #ccc
    width 385px
    height 160px
    background no-repeat center center
    .tag
      margin -5px
  .room_content
    width 100%
    display flex
    flex-direction column
    margin 0 20px
    .content, .title
      text-align left
    .title
      margin-bottom 20px
    .msg-text
      text-align right
    .tag
      margin-right 10px
</style>
