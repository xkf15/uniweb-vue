<template lang="pug">
  #roomInfo
    .bigTitle 活动信息
      .subtitle 这里包含了详细的活动信息
      .excel(style="margin: 30px;")
        el-button(type="danger", @click="excel") 测试Excel
      //- form.excel(:action="'/uniadmin/room/' + roomInfo.id + '/user_xls'", method="get" style="margin: 30px;")
        button(type="submit") Submit
    .room_wrap
      .room_box
        .room_item
          .room_avatar(:style="{background: 'url(' + roomInfo.cover + ')'}")
            .tag 桌游
          .room_content
            .room_name
              span.tag 官方
              span {{ roomInfo.title }}
            .room_details
              .room_desc
                span.title 活动内容：
                span {{ roomInfo.description }}
              .room_place
                span.title 活动地点：
                span {{ roomInfo.location_string }}
              .room_start
                span.title 开始时间：
                span {{ roomInfo.date_time_start }}
              .room_end
                span.title 结束时间：
                span {{ roomInfo.date_time_end }}
              //- .room_people
              //-   span.title 活动人数：
              //-   span(v-if="roomInfo.people") {{ roomInfo.people }}
              //-   span(v-else) [未设置]
              //- .room_wechat
              //-   span.title 微信推送链接：
              //-   span(v-if="roomInfo.wechat") {{ roomInfo.wechat }}
              //-   span(v-else) [未设置]
              //- .room_colleges
              //-   span.title 准入学校：
              //-   span(v-if="roomInfo.colleges.length")
              //-     span.college(v-for="item of roomInfo.colleges") {{ item }}；
              //-   span(v-else) [未设置]
              //- .room_condition
              //-   span.title 准入条件：
              //-   span(v-if="roomInfo.condition") {{ roomInfo.condition }}
              //-   span(v-else) [未设置]
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      roomInfo: state => state.roomInfo.info
    })
  },
  created () {
    this.$store.dispatch('GetRoomInfo', this.$route.params.id)
    console.log(this.info)
  },
  methods: {
    excel () {
      this.$store.dispatch('Excel', this.roomInfo.id)
    }
  }
}
</script>

<style lang="stylus">
#roomInfo
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
