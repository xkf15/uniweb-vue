<template lang="pug">
div(@click="getMemberInfo(memberId)")
  Poptip(:placement="poptipPlace", width="350")
    .img_outer
      img.img_style(:src="memberInfo.avatar")
    .poptipContent(slot="content")
      i.fa.fa-trash.deleteIcon(aria-hidden="true", v-on:click="del")
      .img_outer.img_inner
        img.img_style(:src="member.avatar_thumbnail")
      .userInfo
        .username_inner {{ member.name }}
          i.fa.fa-mars.male(v-if="member.gender === 1", aria-hidden="true")
          i.fa.fa-venus.female(v-if="member.gender === 0", aria-hidden="true")
        .signature {{ member.signature}}
        .department {{ member.department }}
    .extrainfo(slot="content")
      span 好友 {{ member.friends }}
      span 参与活动 {{ member.activities }}
      span 赞 {{ member.zan }}
  .username {{ memberInfo.name }}
</template>
<script>
import { mapState } from 'vuex'

export default {
  // created () {
  //   this.$store.dispatch('GetMemberInfo', this.memberId)
  // },
  computed: {
    ...mapState({
      member: state => state.roomInfo.member
    })
  },
  props: {
    memberInfo: {
      type: Object,
      default: []
    },
    roomId: {
      type: String,
      default: ''
    },
    memberId: {
      type: Number,
      default: -1
    },
    poptipPlace: {
      type: String,
      default: 'bottom'
    // },
    // deleteMember: {
    //   type: Function,
    //   default: function () {
    //     this.$message({
    //       type: 'warning',
    //       message: 'nofunction'
    //     })
    //   }
    }
  },
  methods: {
    del () {
      this.$emit('del')
    },
    getMemberInfo () {
      this.$store.dispatch('GetMemberInfo', this.memberId)
    }
  }
}
</script>
<style lang="stylus" scoped>
  .img_outer
    overflow hidden
    width 100px
    height 100px
    border-radius 50px
    cursor pointer
  .img_inner
    margin-right 20px
  .img_style
    width 100px
    height 100px
    position 100%
  .username
    font-size 20px
  .poptipContent
    padding 5px
    display flex
    display -webkit-flex
  .userinfo
    display flex
    display -webkit-flex
    flex-direction column
  .username_inner
    font-size 22px
  .department
    font-size 15px
  .signature
    opacity 0.7
    font-size 15px
  .male
    color blue
    padding-left 10px
  .female
    color pink
    padding-left 10px
  .extrainfo
    font-size 12px
    padding 10px 0
    display flex
    justify-content space-around
  .deleteIcon
    position absolute
    right 20px
    font-size 15px
    color red
    cursor pointer
</style>
