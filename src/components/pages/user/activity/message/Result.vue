<template lang="pug">
#result
  strong.title 问卷统计
  .questions(v-for="(question, index) in questions")
    strong.questionTitle {{question.title}}
    div(v-if="question.choices.length === 0")
      .choices(v-for="(choice, index_choice) in question.choices")
        .originQuestion {{choice}}
        .result
          el-progress.progress(:text-inside="true", :stroke-width="18", :percentage="50", status="exception")
        .percentage 50%
    div(v-else)
      .answers(v-for="(answer, index_answer) in question.choices", v-if="index_answer < 2")
        .answer {{answer}}
      el-button.checkAll(type="text", @click="showDialog = true") 查看全部
      el-dialog(v-model="showDialog", :title="question.title")
        .answers(v-for="(answer, index_answer) in question.choices")
          .answer {{answer}}
    //- el-pagination(small, layout="prev, pager, next", :total="50")
    //- el-pagination(small, layout="prev, pager, next", :total="50", @current-change="handleCurrentChange", :current-page="currentPage[index]")
    //- Page(size="small", :total="50", @on-change="handleCurrentChange", :current="currentPage.index")
</template>
<script>
import { mapState } from 'vuex'
export default {
  created () {
    this.$store.dispatch('GetQuestion', this.roomId)
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
      questions: state => state.roomInfo.question
      // currentPage: new Array(state => state.roomInfo.question.length)
    })
    // currentPage () {
    //   let cp = []
    //   for (let id in this.questions) {
    //     cp.push(1)
    //     id - 1
    //   }
    //   return cp
    // }
  },
  methods: {
    handleCurrentChange (val) {
      // this.currentPage = val
      this.current = val
      console.log(this.current, val)
    }
  }
}
</script>
<style lang="stylus" scoped>
#result
  .title
    text-align center
    font-size 22px
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
    width 20%
</style>
