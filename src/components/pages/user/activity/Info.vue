<template lang="pug">
#info
  room-info(:room-info="info")
  el-button.button(type="danger", @click="update") 修改房间信息
  el-button.btn_room(type="danger", @click="excel") 导出房间数据到Exel
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
    },
    update () {
      this.$router.push('settings')
    }
  }
}
</script>

<style lang="stylus" scoped>
#info
  margin 20px
  border 1px solid #ddd
  border-radius 10px
  .btn_room
    margin-bottom 10px
  .button
    margin 20px 0
</style>
