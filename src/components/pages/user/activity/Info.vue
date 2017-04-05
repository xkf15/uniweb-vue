<template lang="pug">
#info
  room-info(:room-info="info")
  el-button.button(type="danger", @click="update") 修改房间信息
  el-button.btn_room(type="danger", @click="excel") 导出房间数据到Exel
</template>


<script>
import RoomInfo from '@/components/common/RoomInfo'
import store from '@/store'
import { mapState } from 'vuex'

export default {
  components: {
    RoomInfo
  },
  beforeRouteEnter: async (to, from, next) => {
    await store.dispatch('GetRoomInfo', to.params.id)
    next()
  },
  computed: {
    ...mapState({
      info: state => state.roomInfo.info
    })
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
