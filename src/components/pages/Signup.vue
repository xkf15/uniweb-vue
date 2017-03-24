<template lang="pug">
#signup
  home-layout
    el-input(v-model="account", placeholder="账号", type="text")
    el-input(v-model="password", placeholder="密码", type="password")
    el-input(v-model="password_r", placeholder="请再次输入密码", type="password", @keyup.enter.native="signup")
    el-col#login(:xs="24", :sm="24")
      el-button(type="text", @click="login") 已有账号登录
    el-button.signup(type="primary", @click="signup") 注册
</template>

<script>
import HomeLayout from '@/components/common/HomeLayout'

export default {
  components: {
    HomeLayout
  },
  mounted () {
    require('@/js/main.js')
  },
  data () {
    return {
      account: '',
      password: '',
      password_r: ''
    }
  },
  methods: {
    signup () {
      if (this.account === '' || this.password === '') {
        this.$message.error('请输入用户名和密码')
      } else if (this.password !== this.password_r) {
        this.$message.error('输入密码不一致')
      } else {
        this.$store.dispatch('UserSignup', {
          username: this.account,
          password: this.password
        })
      }
    },
    login () {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="stylus" scoped>
#signup
  #login
    text-align right
  .el-input
    margin 12px 0
  .el-button
    margin-top 12px
    // color #ff586d
    color white
  .signup
    width 100%
    transition 0.3s
    background #ff586d
    border none
    color white
    height 40px
    border-radius 10px
    &:hover
      background #fb93a0
</style>
