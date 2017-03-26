<template lang="pug">
  #notice
    //- .title 发布公告
    el-form.form(:model="notice", ref="notice", label-width="10%", class="demo-ruleForm")
      el-form-item(label="标题", prop="title", :rules="[{ required: true, message: '标题不能为空'}]")
        el-input(v-model="notice.title", :maxlength="100")
      //- el-form-item(label="内容", prop="info", :rules="[{ required: true, message: '标题不能为空'}]")
      //-   el-input(type="info", v-model="notice.info", :maxlength="100")
      el-form-item(label="内容", prop="info", :rules="[{ required: true, message: '内容不能为空'}]")
        el-input(type="textarea", v-model="notice.info", auto-complete="off", :maxlength="1000", :rows="8")
      .flex
        el-button.submit_btn(type="primary", @click="submitForm('notice')") 发布
</template>
<script>
export default {
  data () {
    return {
      notice: {
        title: '',
        info: '',
        age: ''
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.notice)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
  #notice
    .title
      padding 20px
      font-size 24px
    .form
      padding 10px 10% 25px
    .flex
      display -webkit-flex
      display flex
      flex-direction row-reverse
      .submit_btn
        width 100px
        background-color #ec5367
        border-color #ec5367
      .submit_btn:hover
        background-color rgba(236,83,103,0.7)
        border-color rgba(236,83,103,0.7)
</style>
