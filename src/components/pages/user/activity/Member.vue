<template lang="pug">
#member
  el-tabs.tabs_style(v-model="activeName2", type="card", @tab-click="handleClick")
    el-tab-pane(label="成员申请", name="first")
      span 成员申请
      el-button 12
    el-tab-pane(label="成员管理", name="second")
      .title 全部成员
        span ({{allmembers.length}})
      .members
        .member_style(v-for="(item,index) in allmembers")
          .img_outer
            img.img_style(:src="item.avatar")
          .username {{item.name}}
    el-pagination(layout="prev, pager, next", :total="1000")
</template>
<script>
export default {
  data () {
    return {
      activeName2: 'second',
      allmembers: [
        {
          name: '111',
          gender: '1',
          avatar: '../../../../assets/logo.png'
        },
        {
          name: '111',
          gender: '1',
          avatar: '../../../../assets/logo.png'
        },
        {
          name: '111',
          gender: '1',
          avatar: '../../../../assets/logo.png'
        },
        {
          name: '111',
          gender: '1',
          avatar: '../../../../assets/logo.png'
        },
        {
          name: '111',
          gender: '1',
          avatar: '../../../../assets/logo.png'
        },
        {
          name: '111',
          gender: '1',
          avatar: '../../../../assets/logo.png'
        },
        {
          name: '111',
          gender: '1',
          avatar: '../../../../assets/logo.png'
        },
        {
          name: '111',
          gender: '1',
          avatar: '../../../../assets/logo.png'
        },
        {
          name: '111',
          gender: '1',
          avatar: '../../../../assets/logo.png'
        },
        {
          name: '222',
          gender: '0',
          avatar: '../../../../assets/logo.png'
        }
      ]
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style lang="stylus" scoped>
#member
  text-align center
  .tabs_style
    margin 15px 0
    background white
  .title
    text-align left
    margin 10px 30px
    font-size 20px
  .members
    display flex
    flex-wrap wrap
    justify-content flex-start
    width 100%
    padding 0 5%
  .member_style
    padding 20px
  .img_outer
    overflow hidden
    width 100px
    height 100px
    border-radius 50px
  .img_style
    width 100px
    height 100px
    position 100%
  .username
    font-size 18px
</style>
