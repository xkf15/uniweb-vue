<template lang="pug">
#settings
  room-editor(:token="token", :roomInfo="roomInfo", :initialData="initialData", :initialRuleForm="ruleForm")
</template>


<script>
import RoomEditor from '@/components/common/RoomEditor'
import { mapState } from 'vuex'
import store from '@/store'

export default {
  components: {
    RoomEditor
  },
  beforeRouteEnter: async (to, from, next) => {
    await store.dispatch('GetRoomInfo', to.params.id)
    const roomInfo = store.state.roomInfo.info
    const initialData = store.state.login.initialData
    const ruleForm = {
      name: roomInfo.title,       // 活动名称 // title
      place: roomInfo.location_string,      // 活动地点 // location_string
      people: roomInfo.max_participants,     // 参与人数 (需转化为数字) (非必须) // participants
      desc: roomInfo.description,       // 详细内容 // discription
      options: JSON.parse(JSON.stringify(roomInfo.options ? roomInfo.options : '')),     // 微信推送链接 (非必须)
      colleges: [],    // 准入学校 // advertising
      timeRange: [roomInfo.date_time_start, roomInfo.date_time_end],
      cover: {},
      show: roomInfo.show,
      apply: roomInfo.apply,
      tags: roomInfo.labels.map(item => Number(item.id))
    }
    let colleges = [...initialData[1]]
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
  },
  computed: {
    ...mapState({
      roomInfo: state => state.roomInfo.info,
      token: state => state.login.token
      // labels: state => state.login.initialData[0]
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
