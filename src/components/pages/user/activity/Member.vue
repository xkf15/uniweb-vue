<template lang="pug">
#member
  el-tabs.tabs_style(v-model="activeName2", type="card", @tab-click="handleClick")
    el-tab-pane(label="成员申请", name="first")
      .signup_wrap
        .member_signup(v-for="(item, index) in applications")
          .memberavatar
            .memberavatar_outer
              img.avatar_style(:src="item.user.avatar")
          .member_info
            .info_top
              .info_top_left
                .basic_info
                  .member_name
                    strong {{item.user.name}}
                    i.fa.fa-mars.male(v-if="item.user.gender === 1", aria-hidden="true")
                    i.fa.fa-venus.female(v-if="item.user.gender === 0", aria-hidden="true")
                  .department {{item.user.department}}
                .extra_info
                  span.extra_info_detail 信誉值 {{item.user.like}}
                  span.extra_info_detail 粉丝
                  span.extra_info_detail 参与活动
              .buttons
                el-button.refuse_button(type="danger", @click="refuseApplication(index)") 拒绝
                el-button.agree_button(type="success", @click="acceptApplication(index)")
                  strong +通过！
            .signup_info
              strong 申请理由：
              .reasons {{item.text}}
    el-tab-pane(label="成员管理", name="second")
      .title 全部成员
        span ({{members.length}})
      .members
        .member_style(v-for="(item, index) in members", v-if="(index < currentPage_second * maxmembernum && index >= (currentPage_second - 1) * maxmembernum)")
          member-info(:memberInfo="item", :poptipPlace="poptipPlace(index)", v-on:del="deleteMember(index)", roomId="roomId", :memberId="item.id")
      el-pagination(layout="prev, pager, next, jumper", @current-change="handleCurrentChange", :page-count="Math.ceil(members.length/maxmembernum)")
</template>
<script>
import { mapState } from 'vuex'
import MemberInfo from '@/components/common/MemberInfo'

export default {
  components: {
    MemberInfo
  },
  computed: {
    ...mapState({
      members: state => state.roomInfo.members,
      applications: state => state.roomInfo.applications
    })
  },
  created () {
    this.$store.dispatch('GetMembers', this.$route.params.id)
    this.$store.dispatch('GetApplications', this.$route.params.id)
  },
  data () {
    return {
      activeName2: 'second',
      currentPage_second: 1,
      maxmembernum: 20,
      roomId: this.$route.params.id,
      signupmembers: [
        {
          name: '宋阿三',
          gender: 1,
          avatar: '../../../../assets/logo.png',
          department: '青花大学段子系',
          like: 3,
          reason: '我很屌'
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
      // console.log(tab, event)
      if (tab.name === 'first') {
        this.$store.dispatch('GetApplications', this.$route.params.id)
      } else {
        this.$store.dispatch('GetMembers', this.$route.params.id)
      }
    },
    handleCurrentChange (val) {
      this.currentPage_second = val
    },
    poptipPlace (index) {
      if (index % 4 < 2) {
        return 'right'
      } else {
        return 'left'
      }
    },
    getMemberInfo (index) {
      let data = {
        roomId: this.$route.params.id,
        memberId: this.members[index].id
      }
      this.$store.dispatch('GetMemberInfo', data)
    },
    deleteMember (index) {
      this.$confirm('此操作将剔除该成员, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let data = {
          roomId: this.roomId,
          memberId: this.members[index].id,
          number: index
        }
        this.$store.dispatch('DeleteMember', data)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    acceptApplication (index) {
      let data = {
        roomId: this.$route.params.id,
        applicationId: this.applications[index].id,
        judge: 1,
        number: index
      }
      this.$store.dispatch('AcceptApplication', data)
    },
    refuseApplication (index) {
      let data = {
        roomId: this.$route.params.id,
        applicationId: this.applications[index].id,
        judge: 0,
        number: index
      }
      this.$store.dispatch('AcceptApplication', data)
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
    width 25%
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
    padding 10px 0 20px 0
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
    flex-direction column
  .basic_info
    flex 1
    text-align left
    font-size 18px
    display flex
    justify-content space-between
  .info_top
    flex 3
    display flex
  .info_top_left
    flex 3
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
    margin 10px 10px
    width 40%
  .refuse_button
    width 40%
    opacity 0.7
  .extra_info
    text-align left
    font-size 15px
    display flex
    .extra_info_detail
      flex 1
  .signup_info
    display flex
    text-align left
    font-size 18px
    margin-top 30px
    .reasons
      font-size 15px
      margin-bottom 10px
  .poptipContent
    display flex
    .userinfo
      display flex
</style>
