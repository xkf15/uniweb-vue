<template lang="pug">
#admin
  .loading(v-loading.body="loading", element-loading-text="拼命加载中")
    .status
      span 进行中
      span |
      span 已结束
    .room_box(v-for="(item, index) of roomList")
      .room_item
        router-link.room_avatar(:to="'/user/activity/' + item.id", :style="{background: 'url(' + item.cover + ')'}")
          .tag 桌游
        .room_content
          .title
            span.tag 官方
            span {{ item.title }}
          //- .content
            span {{ item.description }}
          .room_attach
            .room_time {{ item.date_time_start }}
            .room_time {{ item.date_time_end }}
            .room_icons
              .msg_icon
                span
                  i.fa.fa-comment-o(aria-hidden="true")
                  span 3
                span
                  i.fa.fa-user-o(aria-hidden="true")
                  span 3
              .member_icon
          .msg-text
            .new_msg 有新结束的群消息！
            .new_member 有新的成员申请！
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    created () {
      this.$store.dispatch('GetRooms')
    },
    computed: {
      ...mapState({
        roomList: state => state.rooms.roomList[0],
        loading: state => state.rooms.loading
      })
    }
  }
</script>

<style lang="stylus" scoped>
$tag-color = #ff586d

#admin
  .loading
    min-height 100px
  .hidden
    display none
  .status
    text-align right
    span
      padding 0 5px
  .room_box
    margin-bottom 20px
    padding 0 40px
    background white
    .room_attach
      display flex
      justify-content space-between
      .msg_icon span
        margin 0 10px
    .room_item
      margin-bottom 40px
      display flex
      .tag
        background $tag-color
        color white
        border-radius 5px
        padding 5px 10px
      .room_avatar
        display flex
        flex-direction column-reverse
        align-items flex-start
        border 1px solid #ccc
        width 385px
        height 160px
        background no-repeat center center
        .tag
          margin -5px
      .room_content
        width 100%
        display flex
        flex-direction column
        margin 0 20px
        .content, .title
          text-align left
        .title
          margin-bottom 20px
        .msg-text
          text-align right
        .tag
          margin-right 10px
</style>
