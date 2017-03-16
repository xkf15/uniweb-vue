<template lang="pug">
#new-room
  .steps
    .step(v-for="(item, index) in steps") {{ index }}-{{ item }}>>
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
    display flex
    justify-content space-around
  .white-wrap
    background white
</style>
