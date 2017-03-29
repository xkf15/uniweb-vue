<template lang="pug">
#notice
  //- .title 发布公告
  el-form.form(:model="notice", ref="notice", label-width="10%", class="demo-ruleForm")
    el-form-item(label="标题", prop="title", :rules="[{ required: true, message: '标题不能为空'}]")
      el-input(v-model="notice.title", :maxlength="100")
    //- el-form-item(label="内容", prop="info", :rules="[{ required: true, message: '标题不能为空'}]")
    //-   el-input(type="info", v-model="notice.info", :maxlength="100")
    el-form-item(label="内容", prop="description", :rules="[{ required: true, message: '内容不能为空'}]")
      el-input(type="textarea", v-model="notice.description", auto-complete="off", :maxlength="1000", :rows="8")
    .flex
      el-button.submit_btn(type="primary", @click="submitForm()") 发布
</template>
<script>
export default {
  data () {
    return {
      notice: {
        title: '',
        is_announcement: true,
        description: '',
        choices: null
      }
    }
  },
  methods: {
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
    .flex
      display flex
      text-align right
      flex-direction row-reverse
      padding 10px 0 20px 0
</style>
