<template lang="pug">
#login
  el-row.content
    el-col(:xs="24", :sm="{span: 6,offset: 9}")

      span.title 欢迎登录
      el-row
        el-input(v-model="account", placeholder="账号", type="text")
        el-input(v-model="password", placeholder="密码", type="password", @keyup.enter.native="loginToDo")
        el-col(:xs="12", :sm="12")
          el-button#reg(type="text", @click="signup") 注册
        el-col(:xs="12", :sm="12")
          el-button#forgot(type="text", @click="forgot") 忘记密码
        el-button(type="primary", @click="loginToDo") 登录
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
    //   this.$router.push('/signup')
    },
    forgot () {
    //   this.$router.push('/forgot')
    },
    loginToDo () {
      if (this.account === '' || this.password === '') {
        this.$message.error('用户名和密码不能为空')
      } else {
        this.$router.push('/user')
        // this.$store.dispatch('UserLogin', {
        //   name: this.account,
        //   password: this.password
        // })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  #forgot
    text-align right
  #reg
    text-align left
  .el-row.content
    padding 16px
  .title
    font-size 28px
  .el-input
    margin 12px 0
  .el-button
    width 100%
    margin-top 12px
</style>
