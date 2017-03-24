<template lang="pug">
  #notice
    .title 发布公告
    el-form.demo-dynamic(:model="formData", ref="formData")
      el-form-item(:label="公告", :prop="formData.title", :rules="{required: true, message: '问题不能为空', trigger: 'blur'}")
        el-input(v-model="formData.title")
        el-input(v-model="formData.info")
        el-button(type="primary", @click="submitForm('formData')") 提交
</template>
<script>
export default {
  data () {
    return {
      formData: {
        title: '',
        info: ''
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.formData)
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
      height 100px
</style>
