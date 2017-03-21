<template lang="pug">
#login
  nav
    .nav-logo UNIWORLD
  canvas#canvas.canvas
  .container
    el-row.content
      span.title
        img(src="../../assets/logo_white.png")
      el-row
        el-input(v-model="account", placeholder="账号", type="text")
        el-input(v-model="password", placeholder="密码", type="password", @keyup.enter.native="loginToDo")
        el-col(:xs="12", :sm="12")
          el-button#reg(type="text", @click="signup") 注册
        el-col(:xs="12", :sm="12")
          el-button#forgot(type="text", @click="forgot") 忘记密码
        el-button.login(type="primary", @click="loginToDo") 登录
</template>

<script>

export default {
  mounted () {
    require('@/js/main.js')
  },
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
$navbar-color = #FF586D
$nav-height = 50px
#login
  nav
    z-index 10
    background $navbar-color
    height $nav-height
    display flex
    align-items center
    color: white
    .nav-logo
      font-size 30px
      margin-left 100px
  .container
    height 'calc(100vh - %s)' % $nav-height
    width 100vw
    display flex
    display -webkit-flex
    display -ms-flexbox
    justify-content center
    align-items center
    .content
      -webkit-flex 0.3		  /* Chrome */
    	-ms-flex 0.3			  /* IE 10 */
    	flex 0.3
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
    // color #ff586d
    color white
  .login
    transition 0.3s
    background #ff586d
    border none
    color white
    height 40px
    border-radius 10px
    &:hover
      background #fb93a0
  .canvas
    position absolute
    z-index -1
    top 0
    left 0
@media screen and (max-width: 768px)
  #login .container .content
    flex 0.7
</style>
