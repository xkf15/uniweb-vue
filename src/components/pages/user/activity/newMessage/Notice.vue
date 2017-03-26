<template lang="pug">
  #notice
    .title 发布公告
    //- el-form.demo-dynamic(:model="dynamicValidateForm", ref="dynamicValidateForm", label-width="300px")
    //-   el-form-item(label="公告", :prop="dynamicValidateForm.title", :rules="{required: true, message: '问题不能为空', trigger: 'blur'}")
    //-     el-input(v-model="dynamicValidateForm.title", placeholder="请输入标题")
    //-     el-input(v-model="dynamicValidateForm.info", placeholder="具体信息写在这里")
    //-   el-form-item
    //-     el-button(type="primary", @click="submitForm('dynamicValidateForm')") 提交
    el-form(:model="dynamicValidateForm", ref="dynamicValidateForm", label-width="100px", class="demo-ruleForm")
      el-form-item(label="年龄", prop="age", :rules="[{ required: true, message: '年龄不能为空'}]")
        el-input(type="age", v-model="dynamicValidateForm.age")
        el-button(type="primary" @click="submitForm('dynamicValidateForm')") 提交
</template>
<script>
export default {
  data () {
    return {
      dynamicValidateForm: {
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
          console.log(this.dynamicValidateForm)
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
