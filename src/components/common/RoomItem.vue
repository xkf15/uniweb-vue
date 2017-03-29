<template lang="pug">
.room_item
  router-link.avatar(:to="`/user/activity/${roomInfo.id}`", :style="{background: `url(${roomInfo.cover}) no-repeat center center`}")
  .container
    .wrap
      .header
        span.guanfang 官方!
        span.room_time 于{{ getTime(roomInfo.date_time_start) }}建立，还有<span class="remaining">{{ getRemainingTime }}</span>结束
      .content
        .title {{roomInfo.title}}
    .footer
      .tags
        .tag(v-for="(tag, item) in roomInfo.labels") {{ tag.name_ch }}
      .icons
        span.icon-item
          i.fa.fa-comment-o(aria-hidden="true")
          span 233
        span.icon-item
          i.fa.fa-user-o(aria-hidden="true")
          span 233
</template>

<script>
export default {
  props: {
    roomInfo: {
      type: Object,
      default: []
    }
  },
  data () {
    return {
      tags: ['桌游', '约饭', '火锅']
    }
  },
  methods: {
    getTime (t) {
      const date = new Date(Date.parse(t))
      return date.toLocaleString()
    }
  },
  computed: {
    getRemainingTime () {
      // const start = Date.parse(this.roomInfo.date_time_start)
      const start = Date.now()
      const end = Date.parse(this.roomInfo.date_time_end)
      const remaining = end - start
      const w = 86400000
      const h = 3600000
      const m = 60000
      const days = Math.floor(remaining / w)
      const hours = Math.floor(remaining % w / h)
      const minutes = Math.floor(remaining % h / m)
      return days + '天' + hours + '时' + minutes + '分'
    }
  }
}
</script>

<style lang="stylus" scoped>
$tag-color = #ff586d
.room_item
  display flex
  color #847bbe
  .avatar
    flex 2
    border 1px solid #ccc
    border-radius 10px
    width 245px
    height 160px
  .container
    flex 3
    margin 0 20px
    text-align left
    display flex
    flex-direction column
    justify-content space-between
    .wrap
      .header
        margin-bottom 10px
        .room_time
          color #aea8cc
          .remaining
            color $tag-color
            font-size 14px
      .content
        .title
          font-size 18px
    .footer
      .tags .tag
        font-size 12px
        display inline-block
        background #ffebf4
        padding 2px 6px 2px 10px
        margin-right 10px
        border-radius 50px 10px 10px 50px
        color $tag-color
        border 1px solid $tag-color
      .icons
        text-align right
        color $tag-color
        font-size 16px
        .icon-item
          margin-left 20px
          span
           margin-left 5px
  .guanfang
    background $tag-color
    color white
    border-radius 5px
    padding 5px 10px
    margin-right 10px
</style>
