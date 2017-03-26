<template lang="pug">
#questionnaire
  //- .title 发布问卷
  el-form.form(:model="dynamicValidateForm", ref="dynamicValidateForm", label-width="10%", class="demo-ruleForm")
    el-form-item(v-for="(question, index) in dynamicValidateForm.questions", :label="'问题' + (index+1)", :prop="'questions.' + index + '.title'", :rules="{required: true, message: '域名不能为空', trigger: 'blur'}")
      .question_top
        .question_title
          span(v-if="question.key === 'blank'") （填空）
          span(v-else)
            span(v-if="question.key === 'single'") （单选）
            span(v-else) （多选）
          span {{ question.title }}
        el-button.question_delete(@click.prevent="removeQuestion(question)", type="danger") 删除
      input.question_answer(v-if="question.key === 'blank'", placeholder="用户可在此输入回答", disable)
      el-checkbox-group.checkbox(v-if="question.key === 'multiple'")
        .show_checkbox(v-for="(choice, index_choice) in question.choices")
          el-checkbox(:label="choice")
      el-radio-group.radiogroup(v-if="question.key === 'single'")
        .show_radiogroup(v-for="(choice, index_choice) in question.choices")
          el-radio(:label="index_choice") {{choice}}
          br
      el-collapse
        el-collapse-item.collapse-item(title="修改", :name="index")
          span.question_tip 问题{{index+1}}
          el-input.input_question(v-model="question.title", :maxlength="100")
          el-checkbox-group.inner_checkbox(v-model="question.choices", v-if="!(question.key === 'blank')")
            .inner_choices(v-for="(choice, index_choice) in question.choices")
              //- el-checkbox(disabled)
              el-input.inner_input(v-model="question.choices[index_choice]")
              i.fa.fa-minus-circle.icon_minus(aria-hidden="true", @click="deleteChoices(index, index_choice)")
            i.fa.fa-plus-circle.icon_plus(aria-hidden="true", @click="addChoices(index)")
    el-form-item.flex
      el-button(@click="dialogFormVisible=true") 新增问题
    el-form-item.flex.flex-row-reverse
      el-button.submit_btn(type="primary", @click="submitQuestionnaire()") 提交
  el-dialog(title="请选择问题类型", v-model="dialogFormVisible")
    el-button(type="primary", @click="addQuestion('blank')") 填空
    el-button(type="primary", @click="addQuestion('single')") 单选
    el-button(type="primary", @click="addQuestion('multiple')") 多选
</template>
<script>
export default {
  data () {
    return {
      dialogFormVisible: false,
      dynamicValidateForm: {
        // title: '',
        // description: '',
        questions: [{
          is_announcement: false,
          title: '请输入问题',
          description: '',
          choices: ['选项1', '选项2', '选项3'],
          key: 'single'
        }]
      }
    }
  },
  methods: {
    removeQuestion (item) {
      this.$confirm('该问题将被删除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var index = this.dynamicValidateForm.questions.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.questions.splice(index, 1)
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    addQuestion (type) {
      if (type !== 'blank') {
        this.dynamicValidateForm.questions.push({
          is_announcement: false,
          title: '请输入问题',
          description: '',
          choices: ['选项1', '选项2', '选项3'],
          key: type
        })
      } else {
        this.dynamicValidateForm.questions.push({
          is_announcement: false,
          title: '请输入问题',
          description: '',
          choices: [],
          key: type
        })
      }
      this.dialogFormVisible = false
    },
    addChoices (index) {
      this.dynamicValidateForm.questions[index].choices.push('选项')
    },
    deleteChoices (index, choice) {
      this.dynamicValidateForm.questions[index].choices.splice(choice, 1)
    },
    submitQuestionnaire () {
      let data = {
        roomId: this.$route.params.id,
        questionnaire: this.dynamicValidateForm.questions
      }
      console.log(data)
      this.$store.dispatch('CreateQuestionnaire', data)
    }
  }
}
</script>
<style lang="stylus" scoped>
#questionnaire
  .flex
    display flex
  .flex-row-reverse
    flex-direction row-reverse
  .title
    padding 20px
    font-size 22px
  .form
    padding 10px 10% 25px 5px
  .question_top
    display flex
    justify-content space-between
  .question_title
    text-align left
    font-size 20px
    flex 9
  .question_delete
    flex 1
  .question_answer
    margin-right 50%
    width 50%
    height 28px
  .checkbox
    display flex
    flex-direction column
    text-align left
    .show_checkbox
      padding-top 2px
  .radiogroup
    display flex
    text-align left
    flex-direction column
    .show_radiogroup
      text-align left
      padding-top 10px
  .question_tip
    width 20%
  .input_question
    width 80%
  .inner_checkbox
    text-align left
  .inner_radiogroup
    text-align left
  .inner_choices
    display flex
    align-items center
    padding 10px 0 0 5%
  .inner_input
    width 50%
  .icon_plus
    font-size 24px
    cursor pointer
    color #ec5367
    padding 10px 0 0 6%
  .icon_minus
    font-size 24px
    cursor pointer
    color #ec5367
    padding 0 0 0 5%
  .submit_btn
    width 100px
</style>
