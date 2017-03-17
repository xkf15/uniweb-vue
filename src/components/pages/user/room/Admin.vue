<template lang="pug">
#admin
  .status
    span 进行中
    span |
    span 已结束
  .room_box(v-for="(item, index) in rooms")
    .room_item
      router-link.room_avatar(to='/user/activity')
        .tag {{ item.tag }}
      .room_content
        .content
          span.tag {{ item.official }}
          span {{ item.title }}
        .msg-text
          .new_msg 有新结束的群消息！
          .new_member 有新的成员申请！
    .room_attach
      .room_time {{ item.time }}
      .room_icons
        .msg_icon
          span 3
          span 3
        .member_icon
</template>

<script>
  export default {
    data () {
      return {
        rooms: [
          {
            tag: '桌游',
            official: '官方!',
            title: 'Uniworld请你吃麻辣香锅Uniworld请你吃麻辣香锅Uniworld请你吃麻辣香锅Uniworld请你吃麻辣香锅Uniworld请你吃麻辣香锅Uniworld请你吃麻辣香锅Uniworld请你吃麻辣香锅',
            time: '于2016-1-17 21:30建立，还有2天12时结束'
          },
          {
            tag: '桌游',
            official: '官方!',
            title: 'Uniworld请你吃麻辣香锅',
            time: '于2016-1-17 21:30建立，还有2天12时结束'
          }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
$tag-color = blue
#admin
  .status
    text-align right
    span
      padding 0 5px
  .room_box
    margin-bottom 20px
    padding 15px
    background white
    .room_attach
      display flex
      justify-content space-between
      .msg_icon span
        margin 0 10px
    .room_item
      display flex
      .tag
        background $tag-color
        color white
        border-radius 5px
        padding 3px 10px
      .room_avatar
        display flex
        flex-direction column-reverse
        align-items flex-start
        border 1px solid #ccc
        width 255px
        height 150px
        background url(../../../../assets/logo.png) no-repeat center center
        .tag
          margin 15px
      .room_content
        width 100%
        display flex
        flex-direction column
        margin 0 20px
        .content
          text-align left
        .msg-text
          text-align right
        .tag
          margin-right 10px
</style>
