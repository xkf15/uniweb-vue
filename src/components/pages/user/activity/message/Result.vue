<template lang="pug">
#result
  div
    strong.title 问卷统计
  .outer
    el-button.downloadQuestionnaire(type="danger", @click="getQuestionExel") 导出问卷
  .questions(v-for="(question, index) in questions")
    strong.questionTitle {{question.title}}
    div(v-if="question.choices.length !== 0")
      .choices(v-for="(choice, index_choice) in question.choices", v-if="index_choice > 0")
        .originQuestion {{index_choice}}、{{choice}}
        .result
          el-progress.progress(:text-inside="true", :stroke-width="18", :percentage="results[index][index_choice] * 100.0 / memberNum", status="exception")
        .percentage {{results[index][index_choice] * 100.0 / memberNum}}%
    div(v-else)
      .answers(v-for="(answer, index_answer) in question.replies", v-if="index_answer < 2")
        .answer {{answer.user}} : {{answer.text}}
      el-button.checkAll(type="text", @click="showDialog = true") 查看全部回答
      el-dialog(v-model="showDialog", :title="question.title")
        .answers(v-for="(answer, index_answer) in question.replies")
          .answer {{answer}}
  el-button(type="primary", @click="back") 返回
</template>
<script>
import { mapState } from 'vuex'
export default {
  created () {
    this.$store.dispatch('GetQuestion', this.roomId)
    this.$message.error('没调完')
  },
  data () {
    return {
      roomId: this.$route.params.id,
      showDialog: false
      // currentPage: {
      //   '1': 1,
      //   '2': 1,
      //   '3': 1,
      //   '4': 1
      // }
    }
  },
  computed: {
    ...mapState({
      questions: state => state.roomInfo.question,
      results: state => state.roomInfo.results,
      memberNum: state => state.roomInfo.memberNum
    })
  },
  methods: {
    handleCurrentChange (val) {
      this.current = val
      console.log(this.current, val)
    },
    back () {
      this.$router.push('./')
    },
    getQuestionExel () {
      this.$store.dispatch('QuestionExcel', this.$route.params.id)
    }
  }
}
</script>
<style lang="stylus" scoped>
#result
  .title
    text-align center
    font-size 22px
  .outer
    width 100%
    display flex
    flex-direction row-reverse
  .downloadQuestionnaire
    margin-right 20px
  .questions
    display flex
    flex-direction column
    margin-top 10px
    .questionTitle
      text-align left
      padding-left 10px
      font-size 18px
    .choices
      display flex
      padding 6px
      .originQuestion
        flex 3
        text-align left
        padding-left 15px
        font-size 15px
      .result
        flex 4
        text-align left
        .progress
          height 15px
      .percentage
        flex 1
    .answers
      display flex
      flex-direction column
      .answer
        text-align left
        font-size 15px
        padding 10px 0 0 15px
  .checkAll
    margin-right 70%
</style>
