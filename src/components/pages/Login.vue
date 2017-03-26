<template lang="pug">
#login
  el-input(v-model="account", placeholder="账号", type="text")
  el-input(v-model="password", placeholder="密码", type="password", @keyup.enter.native="loginToDo")
  el-col#signup(:xs="12", :sm="12")
    el-button(type="text", @click="signup") 注册
  el-col#forgot(:xs="12", :sm="12")
    el-button(type="text", @click="forgot") 忘记密码
  el-button.login(type="primary", @click="loginToDo") 登录
</template>

<script>
export default {
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    signup () {
      this.$router.push('/signup')
    },
    forgot () {
    //   this.$router.push('/forgot')
    },
    loginToDo () {
      if (this.account === '' || this.password === '') {
        this.$message.error('用户名和密码不能为空')
      } else {
        this.$store.dispatch('UserLogin', {
          username: this.account,
          password: this.password
        })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
#login
  #forgot
    text-align right
  #signup
    text-align left
  .el-input
    margin 12px 0
  .el-button
    margin-top 12px
    // color #ff586d
    color white
  .login
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
