<template lang="pug">
  #confirm
    .bigTitle 确认活动信息
      .subtitle 我们会根据您的需求生成群问卷，让加入成员填写。
    .room_wrap
      .room_box
        room-info(:room-info="roomInfo")
      .members_info
        .member_info(v-for="(item, index) of memberInfo")
          span.item
            span.title 问题{{ index + 1 }}：
            span {{ item.question }}；
          span.item
            span.title 提示信息：
            span {{ item.tips }}；
          span.item
            span.title 是否必须回答：
            span {{ item.checked ? '是' : '否' }}
      .buttons
        el-button.button_style(@click="prev") 上一步
        el-button.button_style(type="primary", @click="next") 下一步
</template>

<script>
import { mapState } from 'vuex'
import RoomInfo from '@/components/common/RoomInfo'
import store from '@/store'
import _ from 'lodash'

const readImg = (file) => new Promise((resolve, reject) => {
  var reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = resolve
  reader.onerror = reject
})

export default {
  components: {
    RoomInfo
  },
  beforeRouteEnter: async (to, from, next) => {
    const cover = store.state.newroom.cover
    let labels = []
    let advertising = []
    // let userInfo = JSON.parse(JSON.stringify(state.newroom.basicInfo))
    let roomInfo = _.clone(store.state.newroom.basicInfo, true)
    const initialData = store.state.login.initialData
    for (let i of roomInfo.labels) {
      for (let item of initialData[0]) {
        if (i === item.id) {
          labels.push(item)
        }
      }
    }
    for (let i of roomInfo.advertising) {
      advertising.push(initialData[1][i - 1])
    }
    roomInfo.labels = labels
    roomInfo.advertising = advertising
    roomInfo.cover = ''

    if (!(cover && ('get' in cover) && (cover.get('cover')))) {
      next(vm => {
        vm.roomInfo = roomInfo
      })
    } else {
      const e = await readImg(cover.get('cover'))
      roomInfo.cover = e.target.result
      next(vm => {
        vm.roomInfo = roomInfo
      })
    }
  },
  data () {
    return {
      roomInfo: {}
    }
  },
  computed: {
    ...mapState({
      basicInfo: state => state.newroom.basicInfo,
      memberInfo: state => state.newroom.memberInfo,
      labels: state => state.login.initialData[0],
      colleges: state => state.login.initialData[1],
      cover: state => state.newroom.cover
    })
  },
  methods: {
    prev () {
      this.$router.push('member')
    },
    next () {
      let questionaires = []
      for (let item of this.memberInfo) {
        questionaires.push({
          title: item.tips,
          description: item.question,
          required: true
        })
      }
      const all = _.clone(this.basicInfo, true)
      all.questionnaires = questionaires
      console.log(this.cover)
      all.cover = this.cover
      console.log(all)
      // console.log(all.cover.get('cover'))
      this.$store.dispatch('CreateRoom', all)
      this.$router.push('publish')
    }
  }
}
</script>

<style lang="stylus" scoped>
#confirm
  text-align left
  .bigTitle
    background white
    font-size 28px
    padding 10px 5%
    .subtitle
      font-size 18px
      opacity 0.3
  .members_info
    background white
    opacity 1
    padding 10px
    font-size 18px
    .member_info
      margin 10px 0
      .item
        margin-right 10px
      .title
        font-weight bold
  .room_wrap
    padding 0 20px
    background white
    .buttons
      text-align center
      margin 20px
      .button_style
        padding 10px 50px
        margin 0 30px
</style>
