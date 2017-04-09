<template lang="pug">
#info
  room-editor(:initialData="initialData", dispatch="BasicInfo", submitString="下一步", :initialRuleForm="roomInfo")
</template>

<script>
import RoomEditor from '@/components/common/RoomEditor'
import store from '@/store'
// import _ from 'lodash'

export default {
  components: {
    RoomEditor
  },
  beforeRouteEnter: (to, from, next) => {
    store.dispatch('GetInitialData').then(() => {
      const initialData = store.state.login.initialData
      let basicInfo = store.state.newroom.basicInfo
      const advertising = basicInfo ? JSON.parse(JSON.stringify(basicInfo.advertising)) : []
      const colleges = initialData[1]
      for (let college of colleges) {
        college.toggle = false
        for (let ad of advertising) {
          if (college.id === ad) {
            college.toggle = true
            break
          }
        }
      }
      if (basicInfo) {
        basicInfo = {
          name: basicInfo.title,
          place: basicInfo.location_string,
          people: basicInfo.max_participants,
          desc: basicInfo.description,       // 详细内容 // discription
          timeRange: [ basicInfo.date_time_start, basicInfo.date_time_end ],
          options: JSON.parse(JSON.stringify(basicInfo.options)),
          advertising: JSON.parse(JSON.stringify(basicInfo.advertising)),
          tags: JSON.parse(JSON.stringify(basicInfo.labels)),
          show: basicInfo.show,
          apply: basicInfo.apply
        }
      } else {
        basicInfo = {
          name: '',       // 活动名称 // title
          place: '',      // 活动地点 // location_string
          people: '',     // 参与人数 (需转化为数字) (非必须) // participants
          desc: '',       // 详细内容 // discription
          timeRange: [],
          cover: '',
          options: [
            {
              name: '微信链接',
              content: ''
            },
            {
              name: '准入条件',
              content: ''
            }
          ],
          tags: [],
          show: true,
          apply: true
        }
      }
      next(vm => {
        vm.initialData = {
          colleges: colleges,
          labels: initialData[0]
        }
        vm.roomInfo = basicInfo
      })
    })
  },
  data () {
    return {
      initialData: {},
      roomInfo: {}
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
