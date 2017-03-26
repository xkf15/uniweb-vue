<template lang="pug">
#info
  .container
    el-button(type="danger", @click="excel") 测试Excel
    el-row.box(v-for="(item, index) of titles", :key="index")
      el-col(:span="leftSpan").box-item.title {{ item }}
      el-col(:span="contentSpan").box-item.content {{ info[index] }}
      //- el-col(:span="24-leftSpan-contentSpan").box-item.modify
        el-button(type="text", @click="modify(index)") 修改
    el-row.box
      el-col(:span="leftSpan").box-item.title 房间海报
      el-col(:span="24-leftSpan").box-item.content
        el-upload.upload(drag, action="//jsonplaceholder.typicode.com/posts/")
          i.el-icon-upload
          .el-upload__text 将文件拖到此处，或<em>点击上传</em>
          .el-upload__tip(slot="tip") 注：图片小于2M（jpg, gif, png, bmp），尺寸不可小于1080*640
    el-row.box.no-border
      el-col(:span="leftSpan").box-item.title 准入学校
      el-col(:span="contentSpan").box-item.content.colleges
        span(v-for="(item, index) of roomInfo.advertising")
          span.college-item {{ item.name_ch }}
      //- el-col(:span="24-leftSpan-contentSpan").box-item.modify
        el-button(type="text", @click="modify(titles.length)") 修改
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  created () {
    this.$store.dispatch('GetRoomInfo', this.$route.params.id)
  },
  data () {
    return {
      leftSpan: 4,
      contentSpan: 16,
      titles: [
        '房间名称',
        '活动地点',
        '活动时间',
        '活动人数',
        '详细内容'
      ],
      colleges: [
        {
          title: '清华大学',
          u_id: 1,
          id: 'tsinghua',
          toggle: false
        },
        {
          title: '北方交大',
          u_id: 2,
          id: 'bfjd',
          toggle: false
        },
        {
          title: '隔壁',
          u_id: 3,
          id: 'gebi',
          toggle: false
        }
      ]
    }
  },
  computed: {
    ...mapState({
      roomInfo: state => state.roomInfo.info
    }),
    ...mapGetters([
      'roomDateFormat'
    ]),
    info () {
      return [
        this.roomInfo.title,
        this.roomInfo.location_string,
        this.roomDateFormat.date_time_start + ' — ' + this.roomDateFormat.date_time_end,
        this.roomInfo.max_participants,
        this.roomInfo.description
      ]
    }
  },
  methods: {
    excel () {
      this.$store.dispatch('Excel', this.roomInfo.id)
    },
    modify (index) {
    }
  }
}
</script>

<style lang="stylus" scoped>
#info
  .container
    margin 20px
    border 1px solid #ddd
    border-radius 10px
    .box
      margin 10px
      border-bottom 1px solid #ddd
      .title, .content
        padding 10px 0
        font-size 14px
      .content
        text-align left
        .college-item
          padding-right 20px
    .no-border
      border-bottom none
</style>
