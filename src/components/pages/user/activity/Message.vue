<template lang="pug">
#message
  .new_msg
    el-button(type="danger", @click="dialogFormVisible=true") 发布新消息>>
  el-dialog(title="发布新消息", v-model="dialogFormVisible")
    el-button(type="primary", @click="toNewMessage('notice')") 群公告
    el-button(type="primary", @click="toNewMessage('questionnaire')") 群问卷
  .room_msg_box
    .room_msg 房间消息
    el-select(v-model="value", placeholder="全部")
      el-option(v-for="(item, index) of options", :label="item", :value="index", :key="item.id")
  .content
    .notification(v-for="(item, index) of messages")
      .left
        .run_title.display_flex(v-if="item.is_announcement") <i class="fa fa-bullhorn" aria-hidden="true" id="icon-notification-announcement"></i>群公告
        .run_title.display_flex(v-else) <i class="fa fa-bar-chart" aria-hidden="true" id="icon-notification-questionnaire"></i>群问卷
        //- .run_text {{ item.choices }}
      .middle
        div {{ item.title }}
        //- .description 开始于{{ item.description }}，结束于{{ item.description }}
        .description(v-if="item.is_announcement") 内容：{{ item.description }}
        .description(v-else)
          .choices(v-for="(choice, index_choice) in item.choices", v-if="index_choice > 0")
            .choice {{index_choice}}、{{choice}}
      .right
        div
          //- el-button(type="text") 截止
          //- span |
          el-button(type="text", @click="delete_message(index, item.id)") 删除
          .people_num(v-if="!item.is_announcement") 填写人数
            br
            div {{item.replies.length}}/{{memberNum}}
          el-button.check_data(v-if="!item.is_announcement", type="primary", @click="checkResult") 查看数据
</template>

<script>
import { mapState } from 'vuex'
export default {
  created () {
    this.$store.dispatch('GetMessages', this.room_id)
    // this.$store.dispatch('GetAnnouncement', this.room_id)
    // this.$store.dispatch('GetQuestion', this.room_id)
  },
  data () {
    return {
      room_id: this.$route.params.id,
      value: '',
      options: ['全部', '最近10条'],
      // messages: [
      //   {
      //     status: '进行中！',
      //     content: '谁怀孕了？谁怀孕了？谁怀孕了？谁怀孕了？谁怀孕了？谁怀孕了？谁怀孕了？谁怀孕了？',
      //     startTime: new Date(Date.now()),
      //     endTime: new Date(Date.now() + 3600000)
      //   }
      // ],
      dialogFormVisible: false,
      newMsg: {
        checked: false,
        question: '',
        tips: ''
      }
    }
  },
  methods: {
    toNewMessage (type) {
      this.$router.push('./message/' + type)
    },
    delete_message (index, messageId) {
      this.$confirm('此操作将永久删除该消息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('DeleteMessage', {roomId: this.room_id, announcementId: messageId, number: index})
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    checkResult () {
      this.$router.push('message/result')
    }
  },
  computed: {
    ...mapState({
      messages: state => state.roomInfo.messages,
      memberNum: state => state.roomInfo.memberNum
    })
  }
}
</script>

<style lang="stylus" scoped>
#message
  margin 10px
  .new_msg
    margin 10px 0
    text-align right
    .rl_new_msg
      color white
      background red
      padding 3px 15px
      border-radius 5px
  .room_msg_box
    background white
    border 1px solid #ccc
    padding 10px
    display flex
    justify-content space-between
    align-items center
    .room_msg
      font-size 20px
  .content
    .notification
      width 100%
      margin-top 15px
      padding 15px
      background white
      display flex
    .left
      width 17%
    .display_flex
      display flex
    .run_title
      font-size 18px
      margin-left 10%
    .run_text
      margin-top 8px
      color red
      margin-left 10%
    .middle
      width 60%
      margin-left 3%
      margin-right 3%
      text-align left
      font-size 20px
    .description
      opacity 0.7
      margin-top 20px
      font-size 15px
    .right
      text-align center
      width 17%
    .people_num
      margin-top 30px
      color darkblue

    #icon-notification-announcement
      color darkblue
      padding-right 5px
      font-size 1em
    #icon-notification-questionnaire
      color #ec5367
      padding-right 5px
      font-size 1em
</style>
