<template lang="pug">
#settings
  room-editor(:token="token", :roomInfo="roomInfo", :initialData="initialData", :initialRuleForm="ruleForm")
</template>

<script>
import { mapState } from 'vuex'
import store from '@/store'
import RoomEditor from '@/components/common/RoomEditor'

export default {
  components: {
    RoomEditor
  },
  beforeRouteEnter: (to, from, next) => {
    store.dispatch('GetRoomInfo', to.params.id)
      .then(() => {
        store.dispatch('GetInitialData').then(() => {
          const roomInfo = store.state.roomInfo.info
          const initialData = store.state.login.initialData
          const ruleForm = {
            name: roomInfo.title,       // 活动名称 // title
            place: roomInfo.location_string,      // 活动地点 // location_string
            people: roomInfo.max_participants,     // 参与人数 (需转化为数字) (非必须) // participants
            desc: roomInfo.description,       // 详细内容 // discription
            wechat: roomInfo.options[0],     // 微信推送链接 (非必须)
            condition: roomInfo.options[1],  // 准入条件 (非必须) // welcome
            colleges: [],    // 准入学校 // advertising
            timeRange: [roomInfo.date_time_start, roomInfo.date_time_end],
            cover: {},
            tags: roomInfo.labels.map(item => Number(item.id))
          }
          const colleges = initialData[1]
          for (let college of colleges) {
            college.toggle = false
            for (let adv of roomInfo.advertising) {
              if (college.id === adv.id) {
                college.toggle = true
                break
              }
            }
          }
          next(vm => {
            vm.ruleForm = ruleForm
            vm.initialData = {
              colleges: colleges,
              labels: initialData[0]
            }
          })
        })
      })
  },
  computed: {
    ...mapState({
      roomInfo: state => state.roomInfo.info,
      token: state => state.login.token
      // options: state => state.login.initialData[0]
      // colleges: state => state.login.initialData[1]
    })
  },
  data () {
    return {
      ruleForm: {},
      initialData: {}
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
