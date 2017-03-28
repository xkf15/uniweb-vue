<template lang="pug">
#notice asd
  .title 发布公告
  el-form.form(:model="notice", ref="notice", label-width="10%", class="demo-ruleForm")
    el-form-item(label="标题", prop="title", :rules="[{ required: true, message: '标题不能为空'}]")
      el-input(v-model="notice.title", :maxlength="100")
    //- el-form-item(label="内容", prop="info", :rules="[{ required: true, message: '标题不能为空'}]")
    //-   el-input(type="info", v-model="notice.info", :maxlength="100")
    el-form-item(label="内容", prop="info", :rules="[{ required: true, message: '内容不能为空'}]")
      el-input(type="textarea", v-model="notice.info", auto-complete="off", :maxlength="1000", :rows="8")
    .flex
      el-button.submit_btn(type="primary", @click="submitForm()") 发布
</template>
<script>
export default {
  data () {
    return {
      dynamicValidateForm: {
        title: '',
        description: '',
        is_announcement: true,
        choices: null
      }
    }
  },
  methods: {
    // submitForm (formName) {
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       console.log(this.dynamicValidateForm)
    //     } else {
    //       console.log('error submit!!')
    //       return false
    //     }
    //   })
    submitForm () {
      let data = {
        roomId: this.$route.params.id,
        questionnaire: [this.notice]
      }
      this.$store.dispatch('CreateQuestionnaire', data)
    }
  }
}
</script>
<style lang="stylus" scoped>
  #notice
    .title
      height 100px
</style>
