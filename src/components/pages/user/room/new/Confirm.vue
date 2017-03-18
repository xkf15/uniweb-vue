<template lang="pug">
  #confirm
    .title 确认活动信息
      .subtitle 我们会根据您的需求生成群问卷，让加入成员填写。
    .room_wrap
      .room_box(v-for="(item, index) of rooms")
        .room_item
          .room_avatar
            .tag {{ item.tag }}
          .room_content
            .content
              span.tag {{ item.official }}
              span {{ item.title }}
        .room_attach
          .room_time {{ item.time }}
      .members_info(v-for="(item, index) of info")
        div 选项：{{ item.content }}
      .buttons
        el-button.button_style(@click="prev") 上一步
        el-button.button_style(type="primary", @click="next") 下一步
</template>

<script>
export default {
  methods: {
    prev () {
      this.$router.push('member')
    },
    next () {
      this.$router.push('publish')
    }
  },
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
    padding 10px 8%
    background white
    .room_box
      margin-bottom 20px
      padding 15px
      background #D0D0D0
      border-radius 10px
      .room_attach
        display flex
        justify-content space-between
        .msg_icon span
          margin 0 10px
      .room_item
        display flex
        .tag
          background blue
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
    .buttons
      text-align center
      margin 20px
      .button_style
        padding 10px 50px
        margin 0 30px
</style>
