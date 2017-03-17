<template lang="pug">
#message
  .new_msg
    el-button(type="danger", @click="dialogFormVisible=true") 发布新消息>>
  el-dialog(title="发布新消息", v-model="dialogFormVisible")
    el-form(:model="newMsg")
      el-form-item(label="名称")
        el-input(v-model="newMsg.title", type="textarea")
    .dialog-footer(slot="footer")
      el-button(@click="dialogFormVisible=false") 取消
      el-button(type="primary", @click="dialogFormVisible=false") 确定

  .room_msg_box
    .room_msg 房间消息
    el-select(v-model="value", placeholder="全部")
      el-option(v-for="(item, index) in options", :label="item", :value="index")
  .content
    .notification(v-for="(item, index) in messages")
      .left
        .run_title.display_flex <i class="fa fa-bullhorn" aria-hidden="true" id="icon-notification"></i>群公告
        .run_text {{ item.status }}
      .middle
        div {{ item.content }}
        .time_domain 开始于{{ item.startTime }}，结束于{{ item.endTime }}，剩余 {{ item.endTime - item.startTime}}
      .right
        div
          el-button(type="text") 截止
          span |
          el-button(type="text") 删除
          .people_num 人数10/30
          el-button.check_data(type="primary") 查看数据
</template>

<script>
export default {
  created () {
    this.$store.dispatch('GetMessages')
  },
  data () {
    return {
      value: '',
      options: ['全部', '最近10条'],
      messages: [
        {
          status: '进行中！',
          content: '谁怀孕了？谁怀孕了？谁怀孕了？谁怀孕了？谁怀孕了？谁怀孕了？谁怀孕了？谁怀孕了？',
          startTime: new Date(Date.now()),
          endTime: new Date(Date.now() + 3600000)
        }
      ],
      dialogFormVisible: false,
      newMsg: {
        title: ''
      }
    }
  }
}
</script>

<style lang="stylus">
#message
  margin 10px
  .new_msg
    margin 10px 0
    text-align right
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
