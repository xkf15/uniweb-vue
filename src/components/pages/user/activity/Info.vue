<template lang="pug">
#info
  .container
    el-button(type="danger", @click="excel") 测试Excel
    room-info(:room-info="info")
  </template>

<script>
import RoomInfo from '@/components/common/RoomInfo'
import store from '@/store'

export default {
  components: {
    RoomInfo
  },
  beforeRouteEnter: (to, from, next) => {
    store.dispatch('GetRoomInfo', to.params.id).then(() => {
      console.log(store.state.roomInfo.info)
      next(vm => {
        vm.info = JSON.parse(JSON.stringify(store.state.roomInfo.info))
      })
    })
  },
  data () {
    return {
      info: {}
    }
  },
  methods: {
    excel () {
      this.$store.dispatch('Excel', this.info.id)
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
