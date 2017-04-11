<template lang="pug">
#roomInfo
  el-row.box(v-for="(value, key, index) of infos", :key="index")
    el-col(:span="leftSpan").box-item.title {{ key }}
    el-col(:span="contentSpan").box-item.content {{ value }}
      //- el-button(type="text", @click="modify(index)") 修改
  el-row.box
    el-col(:span="leftSpan").box-item.title 房间海报
    el-col(:span="24-leftSpan").box-item.cover
      img(v-if="roomInfo.cover", :src="roomInfo.cover")
      el-button(v-else, type="text", @click="$router.push('basic')") 没有上传照片，点此回到初始页面重新上传
  el-row.box
    el-col(:span="leftSpan").box-item.title 房间标签
    el-col(:span="24-leftSpan").box-item.content.colleges
      span(v-for="(item, index) of roomInfo.labels")
        span.college-item {{ item.name_ch }}
  el-row.box
    el-col(:span="leftSpan").box-item.title 准入学校
    el-col(:span="24-leftSpan").box-item.content.colleges
      span(v-for="(item, index) of roomInfo.advertising")
        span.college-item {{ item.name_ch }}
  el-row.box.no-border
    el-col(:span="leftSpan").box-item.title 房间选项
    el-col(:span="24-leftSpan").box-item.content.options
      el-card
        .option(v-for="(item, index) of roomInfo.options", :class="{'option-top': index === 0}")
          .option-name {{ item.name }}:
          .option-content {{ item.content }}
</template>

<script>
export default {
  props: {
    roomInfo: {
      type: Object,
      default: function () {
        return {
          title: '',
          location_string: '',
          date_time_start: '',
          date_time_end: '',
          description: '',
          labels: [],
          show: true,
          apply: false
        }
      }
    }
  },
  data () {
    return {
      leftSpan: 5,
      contentSpan: 15
    }
  },
  computed: {
    infos () {
      return {
        '房间名称': this.roomInfo.title,
        '活动地点': this.roomInfo.location_string,
        '活动时间': this.roomInfo.date_time_start + ' — ' + this.roomInfo.date_time_end,
        '活动人数': this.roomInfo.max_participants,
        '详细内容': this.roomInfo.description,
        '是否在广场上显示': this.roomInfo.show ? '是' : '否',
        '是否需要申请加入': this.roomInfo.apply ? '是' : '否'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
#roomInfo
  margin 20px
  border 1px solid #ddd
  border-radius 10px
  .box
    margin 10px
    border-bottom 1px solid #ddd
    .cover
      width 50%
      img
        width 100%
    .title, .content
      padding 10px 0
      font-size 14px
    .content
      text-align left
      .college-item
        padding-right 20px
      .option
        border-bottom 1px solid #ddd
        padding 10px 0
        .option-name
          font-weight bold
      .option-top
        margin-top -10px
  .no-border
    border-bottom none
</style>
