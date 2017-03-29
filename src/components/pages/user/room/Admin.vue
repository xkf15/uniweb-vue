<template lang="pug">
#admin
  .loading(v-loading.body="loading", element-loading-text="拼命加载中")
    .status
      span 进行中
      span |
      span 已结束
    .room_box(v-for="(item, index) of roomList")
      room-item(:room-info="item")
</template>

<script>
  import { mapState } from 'vuex'
  import RoomItem from '@/components/common/RoomItem'

  export default {
    components: {
      RoomItem
    },
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
</style>
