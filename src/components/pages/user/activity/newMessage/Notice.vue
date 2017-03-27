<template lang="pug">
#notice asd
//- <<<<<<< HEAD
//-     .title 发布公告
//-     //- el-form.demo-dynamic(:model="dynamicValidateForm", ref="dynamicValidateForm", label-width="300px")
//-     //-   el-form-item(label="公告", :prop="dynamicValidateForm.title", :rules="{required: true, message: '问题不能为空', trigger: 'blur'}")
//-     //-     el-input(v-model="dynamicValidateForm.title", placeholder="请输入标题")
//-     //-     el-input(v-model="dynamicValidateForm.info", placeholder="具体信息写在这里")
//-     //-   el-form-item
//-     //-     el-button(type="primary", @click="submitForm('dynamicValidateForm')") 提交
//-     el-form(:model="dynamicValidateForm", ref="dynamicValidateForm", label-width="100px", class="demo-ruleForm")
//-       el-form-item(label="年龄", prop="age", :rules="[{ required: true, message: '年龄不能为空'}]")
//-         el-input(type="age", v-model="dynamicValidateForm.age")
//-         el-button(type="primary" @click="submitForm('dynamicValidateForm')") 提交
//- =======
//-     //- .title 发布公告
//-     el-form.form(:model="notice", ref="notice", label-width="10%", class="demo-ruleForm")
//-       el-form-item(label="标题", prop="title", :rules="[{ required: true, message: '标题不能为空'}]")
//-         el-input(v-model="notice.title", :maxlength="100")
//-       //- el-form-item(label="内容", prop="info", :rules="[{ required: true, message: '标题不能为空'}]")
//-       //-   el-input(type="info", v-model="notice.info", :maxlength="100")
//-       el-form-item(label="内容", prop="info", :rules="[{ required: true, message: '内容不能为空'}]")
//-         el-input(type="textarea", v-model="notice.info", auto-complete="off", :maxlength="1000", :rows="8")
//-       .flex
//-         el-button.submit_btn(type="primary", @click="submitForm()") 发布
//- >>>>>>> 2633afd80ba9d907366e0b2255d49ec4d328277e
</template>
<script>
export default {
  data () {
    return {
      dynamicValidateForm: {
        title: '',
        description: '',
        is_announcement: true,
        choices: []
      }
    }
  },
  methods: {
// <<<<<<< HEAD
//     submitForm (formName) {
//       this.$refs[formName].validate((valid) => {
//         if (valid) {
//           console.log(this.dynamicValidateForm)
//         } else {
//           console.log('error submit!!')
//           return false
//         }
//       })
// =======
//     submitForm () {
//       let data = {
//         roomId: this.$route.params.id,
//         questionnaire: [this.notice]
//       }
//       this.$store.dispatch('CreateQuestionnaire', data)
// >>>>>>> 2633afd80ba9d907366e0b2255d49ec4d328277e
//     }
  }
}
</script>
<style lang="stylus" scoped>
  #notice
    .title
      height 100px
</style>
