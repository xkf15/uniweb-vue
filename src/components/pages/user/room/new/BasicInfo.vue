<template lang="pug">
#info
  room-editor(:initialData="initialData", dispatch="BasicInfo", submitString="下一步")
</template>

<script>
import RoomEditor from '@/components/common/RoomEditor'
import store from '@/store'

export default {
  components: {
    RoomEditor
  },
  beforeRouteEnter: (to, from, next) => {
    store.dispatch('GetInitialData').then(() => {
      const initialData = store.state.login.initialData
      const colleges = initialData[1]
      for (let college of colleges) {
        college.toggle = false
      }
      next(vm => {
        vm.initialData = {
          colleges: colleges,
          labels: initialData[0]
        }
      })
    })
  },
  data () {
    return {
      initialData: {}
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
