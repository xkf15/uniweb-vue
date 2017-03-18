<template lang="pug">
#member
  el-tabs.tabs_style(v-model="activeName2", type="card", @tab-click="handleClick")
    el-tab-pane(label="成员申请", name="first")
      .signup_wrap
        .member_signup(v-for="(item, index) in signupmembers")
          .memberavatar
            .memberavatar_outer
              img.avatar_style(:src="item.avatar")
          .member_info
            .basic_info
              .member_name
                strong {{item.name}}
                i.fa.fa-mars.male(v-if="item.gender === 1", aria-hidden="true")
                i.fa.fa-venus.female(v-else, aria-hidden="true")
              .department {{item.department}}
              .buttons
                el-button.refuse_button(type="danger") 拒绝
                el-button.agree_button(type="success")
                  strong +通过！

    el-tab-pane(label="成员管理", name="second")
      .title 全部成员
        span ({{allmembers.length}})
      .members
        .member_style(v-for="(item, index) in allmembers", v-if="(index<currentPage_second*maxmembernum && index>=(currentPage_second-1)*maxmembernum)")
          .img_outer
            img.img_style(:src="item.avatar")
          .username {{item.name}}
      el-pagination(layout="prev, pager, next, jumper", @current-change="handleCurrentChange", :page-count="Math.ceil(allmembers.length/maxmembernum)")
</template>
<script>
export default {
  data () {
    return {
      activeName2: 'second',
      currentPage_second: 1,
      maxmembernum: 10,
      signupmembers: [
        {
          name: '宋阿三',
          gender: 1,
          avatar: '../../../../assets/logo.png',
          department: '青花大学段子系'
        },
        {
          name: '宋阿三',
          gender: 1,
          avatar: '../../../../assets/logo.png'
        }
      ],
      allmembers: [
        {
          name: '111',
          gender: '1',
          avatar: '../../../../assets/logo.png'
        },
        {
          name: '2222',
          gender: '1',
          avatar: '../../../../assets/logo.png'
        },
        {
          name: '333',
          gender: '1',
          avatar: '../../../../assets/logo.png'
        },
        {
          name: '4',
          gender: '1',
          avatar: '../../../../assets/logo.png'
        },
        {
          name: '55',
          gender: '1',
          avatar: '../../../../assets/logo.png'
        },
        {
          name: '66',
          gender: '1',
          avatar: '../../../../assets/logo.png'
        },
        {
          name: '77',
          gender: '1',
          avatar: '../../../../assets/logo.png'
        },
        {
          name: '88',
          gender: '1',
          avatar: '../../../../assets/logo.png'
        },
        {
          name: '99',
          gender: '1',
          avatar: '../../../../assets/logo.png'
        },
        {
          name: '10',
          gender: '0',
          avatar: '../../../../assets/logo.png'
        }
      ]
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    handleCurrentChange (val) {
      this.currentPage_second = val
    }
  }
}
</script>
<style lang="stylus" scoped>
#member
  text-align center
  .tabs_style
    margin 15px 0
    background rgba(255,255,255,0.5)
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
  .signup_wrap
    padding 0 3%
  .member_signup
    display flex
    width 100%
    background white
    margin 15px 0 20px 0
  .memberavatar
    flex 1
    display flex
    justify-content center
  .memberavatar_outer
    width 120px
    height 120px
    border-radius 60px
    overflow hidden
  .avatar_style
    width 120px
    height 120px
    position 100%
  .member_info
    flex 3
    margin-left 5px
    display flex
  .basic_info
    flex 1
    text-align left
    font-size 18px
    display flex
    justify-content space-between
  .member_name
    flex 1
  .male
    color blue
    padding-left 10px
  .female
    color pink
    padding-left 10px
  .department
    flex 2
    opacity 0.5
  .buttons
    flex 2
  .agree_button
    width 40%
  .refuse_button
    width 40%
    opacity 0.7
</style>
