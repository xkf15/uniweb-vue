<template lang="pug">
  #publish
    .content_publish
        img(src='../../../../../assets/logo.png')
        .text_publish
            span 你可以到
            router-link(to="/user/room") 房间管理
            span 界面查看现有活动，或直接
            router-link(to="/user/activity") 进入房间
</template>

<script>
export default {
  data () {
    return {
      link: [
        {
          management: '',
          room: ''
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
 #publish
  text-align center
</style>
