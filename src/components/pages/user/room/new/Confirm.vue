<template lang="pug">
  #confirm
    .title 确认活动信息
      .subtitle 我们会根据您的需求生成群问卷，让加入成员填写。
    .room_wrap
      .room_box(v-for="(item, index) in rooms")
        .room_item
          .room_avatar
            .tag {{ item.tag }}
          .room_content
            .content
              span.tag {{ item.official }}
              span {{ item.title }}
        .room_attach
          .room_time {{ item.time }}
      .members_info(v-for="(item, index) in info")
        div 选项：{{ item.content }}
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
        }
      ],
      info: [
        {
          content: '获得证书或者相应奖品'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
#confirm
  text-align left
  .title
    background white
    font-size 28px
    padding 10px 5%
    .subtitle
      font-size 18px
      opacity 0.3
  .members_info
    background white
    opacity 1
    padding 10px
    font-size 18px
  .room_wrap
    padding 0 5%
    background white
    .room_box
      margin-bottom 20px
      padding 15px
      background #D8D8D8
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
          background url(../../../../../assets/logo.png) no-repeat center center
          .tag
            margin 15px
        .room_content
          width 80%
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
