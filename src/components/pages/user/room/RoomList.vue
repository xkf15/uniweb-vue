<template lang="pug">
#admin
  .loading(v-loading.body="loading", element-loading-text="拼命加载中")
    .status
      span(v-if="searchRoom.showType === 'search'") 搜索
        span |
      a(@click="setShowList('all')") 全部
      span |
      a(@click="setShowList('on')") 进行中
      span |
      a(@click="setShowList('end')") 已结束
    div(v-if="searchRoom.showType === 'search'")
      .room_box(v-for="(item, index) of searchRoom.roomList")
        room-item(:room-info="item")
    div(v-else)
      .room_box(v-for="(item, index) of roomList", v-if="whetherShow(item.expired)")
        room-item(:room-info="item", :host="item.host_id !== userInfo.id")
</template>

<script>
  import { mapState } from 'vuex'
  import RoomItem from '@/components/common/RoomItem'

  export default {
    components: {
      RoomItem
    },
    created () {
      this.$store.dispatch('GetRoomList')
      this.$store.dispatch('GetInitialData')
    },
    computed: {
      ...mapState({
        userInfo: state => state.login.userInfo,
        roomList: state => state.rooms.rooms,
        loading: state => state.rooms.loading,
        searchRoom: state => state.rooms.searchRoomList
      })
    },
    data () {
      return {
        showList: 'on'
      }
    },
    methods: {
      show () {
        this.$message.success(this.showList)
      },
      setShowList (type) {
        const data = {
          showType: type
        }
        this.$store.dispatch('ChangeDisplayedRooms', data)
      },
      whetherShow (expired) {
        if (this.searchRoom.showType === 'all') {
          return true
        } else {
          if (this.searchRoom.showType === 'on') {
            return !expired
          } else {
            return expired
          }
        }
      }
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
