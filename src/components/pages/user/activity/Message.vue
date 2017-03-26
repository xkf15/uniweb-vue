<template lang="pug">
#message
  .new_msg
    el-button(type="danger", @click="dialogFormVisible=true") 发布新消息>>
  el-dialog(title="发布新消息", v-model="dialogFormVisible")
    //- el-form(:model="newMsg", ref="newMsg")
    //-   el-form-item(label="名称", :prop="newMsg.question", :rules="{required: true, message: '问题不能为空', trigger: 'blur'}")
    //-     el-input(v-model="newMsg.question", placeholder="请输入问题", :maxlength="100", type="textarea", autosize)
    //-   el-input(v-model="newMsg.tips", placeholder="提示信息写在这里", type="textarea", autosize)
    //-   el-checkbox(v-model="newMsg.checked") 必填
    //- .dialog-footer(slot="footer")
    el-button(type="primary", @click="toNewMessage('notice')") 群公告
    el-button(type="primary", @click="toNewMessage('questionnaire')") 群问卷
  .room_msg_box
    .room_msg 房间消息
    el-select(v-model="value", placeholder="全部")
      el-option(v-for="(item, index) of options", :label="item", :value="index", :key="item.id")
  .content
    .notification(v-for="(item, index) of messages")
      .left
        .run_title.display_flex <i class="fa fa-bullhorn" aria-hidden="true" id="icon-notification"></i>群公告
        .run_text {{ item.choices }}
      .middle
        div {{ item.title }}
        .time_domain 开始于{{ item.description }}，结束于{{ item.description }}
      .right
        div
          el-button(type="text") 截止
          span |
          el-button(type="text", @click="delete_message (item.id)") 删除
          .people_num 人数10/30
          el-button.check_data(type="primary") 查看数据
</template>

<script>
import { mapState } from 'vuex'
export default {
  created () {
    this.$store.dispatch('GetMessages', this.room_id)
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
    delete_message (messageId) {
      this.$confirm('此操作将永久删除该消息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('DeleteMessage', {roomId: this.room_id, announcementId: messageId})
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    create_message () {
      const data = {
        data: {
          title: this.newMsg.question,
          description: this.newMsg.tips,
          is_announcement: true,
          choices: [1, 2, 3]
        },
        roomId: this.room_id
      }
      console.log(data.data.title)
      this.$store.dispatch('CreateMessage', data)
      this.dialogFormVisible = false
    }
  },
  computed: {
    ...mapState({
      messages: state => state.roomInfo.messages
    })
  }
}
</script>

<style lang="stylus">
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
    .time_domain
      opacity 0.3
      margin-top 20px
    .right
      text-align center
      width 17%
    .people_num
      margin-top 30px
      color darkblue

    #icon-notification
      color darkblue
      padding-right 5px
      font-size 1em
</style>
