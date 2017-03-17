<template lang="pug">
#new-room
  el-steps.steps(:active="3", :align-center="true", :center="true")
    el-step(v-for="(item, index) in steps", :title="item", discription="")
  router-view
</template>

<script>
  export default {
    data () {
      return {
        steps: ['填写基本信息', '成员信息', '确认', '发布']
      }
    }
  }
</script>

<style lang="stylus" scoped>
#new-room
  .steps
    width 100%
    margin-top 10px
    padding 15px 7%
    background white
    text-align center
  .white-wrap
    background white
</style>
