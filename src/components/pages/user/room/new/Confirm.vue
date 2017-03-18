<template lang="pug">
  #confirm
    .bigTitle 确认活动信息
      .subtitle 我们会根据您的需求生成群问卷，让加入成员填写。
    .room_wrap
      .room_box
        .room_item
          .room_avatar
            .tag 桌游
          .room_content
            .room_name
              span.tag 官方
              span {{ basicInfo.name }}
            .room_details
              .room_desc
                span.title 活动内容：
                span {{ basicInfo.desc }}
              .room_place
                span.title 活动地点：
                span {{ basicInfo.place }}
              .room_start
                span.title 开始时间：
                span {{ String(basicInfo.timeRange[0]) }}
              .room_end
                span.title 结束时间：
                span {{ String(basicInfo.timeRange[1]) }}
              .room_people
                span.title 活动人数：
                span(v-if="basicInfo.people") {{ basicInfo.people }}
                span(v-else) [未设置]
              .room_wechat
                span.title 微信推送链接：
                span(v-if="basicInfo.wechat") {{ basicInfo.wechat }}
                span(v-else) [未设置]
              .room_colleges
                span.title 准入学校：
                span(v-if="basicInfo.colleges.length")
                  span.college(v-for="item of basicInfo.colleges") {{ item }}；
                span(v-else) [未设置]
              .room_condition
                span.title 准入条件：
                span(v-if="basicInfo.condition") {{ basicInfo.condition }}
                span(v-else) [未设置]
      .members_info
        .member_info(v-for="(item, index) of memberInfo")
          span.item
            span.title 问题{{ index + 1 }}：
            span {{ item.question }}；
          span.item
            span.title 提示信息：
            span {{ item.tips }}；
          span.item
            span.title 是否必须回答：
            span {{ item.checked ? '是' : '否' }}
      .buttons
        el-button.button_style(@click="prev") 上一步
        el-button.button_style(type="primary", @click="next") 下一步
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      basicInfo: state => state.newroom.basicInfo,
      memberInfo: state => state.newroom.memberInfo
    })
  },
  methods: {
    prev () {
      this.$router.push('member')
    },
    next () {
      this.$store.dispatch('CreateRoom', {
        basicInfo: this.basicInfo,
        memberInfo: this.memberInfo
      })
      this.$router.push('publish')
    }
  }
}
</script>

<style lang="stylus" scoped>
#confirm
  text-align left
  .bigTitle
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
    .member_info
      margin 10px 0
      .item
        margin-right 10px
      .title
        font-weight bold
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
          .room_name, .room_details
            text-align left
          .room_details
            padding 10px
            .title
              font-weight bold
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
