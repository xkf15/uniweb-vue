<template lang="pug">
#memberInfo
  .title 准入申请
  .subtitle 在加入房间的申请中，申请者需要填写的信息
  .input_box
    el-form.demo-dynamic(:model="dynamicValidateForm", ref="dynamicValidateForm", label-width="10%")
      el-form-item(v-for="(domain, index) in dynamicValidateForm.domains", :label="'问题' + (index+1)", :key="domain.key", :prop="'domains.' + index + '.question'", :rules="{required: true, message: '问题不能为空', trigger: 'blur'}")
        .display_flex
          //- el-checkbox.checkbox_style(v-model="domain.checked") 必填
          el-input.input_style1(v-model="domain.question", placeholder="请输入问题", :maxlength="100", type="textarea", autosize)
          el-input.input_style2(v-model="domain.tips", placeholder="提示信息写在这里", type="textarea", autosize)
          i.el-icon-delete.icon_style(@click.prevent="removeDomain(domain)")
      el-form-item.submit
        el-button.new_button(type="text", @click="addDomain") + 新增问题
        .buttons
          el-button.submit_button(@click="prev") 上一步
          el-button.submit_button(type="primary", @click="submitForm('dynamicValidateForm')") 提交
</template>

<script>
import store from '@/store'

export default {
  beforeRouteEnter: (to, from, next) => {
    let memberInfo = JSON.parse(JSON.stringify(store.state.newroom.memberInfo))
    if (memberInfo) {
      memberInfo = { domains: memberInfo }
    } else {
      memberInfo = {
        domains: [{
          question: '',
          tips: '',
          checked: true,
          key: Date.now()
        }]
      }
    }
    next(vm => {
      vm.dynamicValidateForm = memberInfo
    })
  },
  data () {
    return {
      dynamicValidateForm: {}
    }
  },
  methods: {
    prev () {
      this.$router.push('basic')
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store.dispatch('MemberInfo', this.dynamicValidateForm.domains)
          this.$router.push('confirm')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    removeDomain (item) {
      var index = this.dynamicValidateForm.domains.indexOf(item)
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1)
      }
    },
    addDomain () {
      this.dynamicValidateForm.domains.push({
        question: '',
        tips: '',
        checked: false,
        key: Date.now()
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
#memberInfo
  text-align left
  background white
  .title
    padding 20px 10% 0
    font-size 20px
    font-weight bold
  .subtitle
    padding 20px 10%
  .input_style1
    flex 1
    padding 0 20px
  .input_style2
    flex 2
  .icon_style
    font-size 16px
    cursor pointer
    padding 6px 10px 0
  .checkbox_style
    padding-left 10px
  .submit
    padding-bottom 20px
    margin-top -10px
    text-align center
    .new_button
      margin-bottom 10px
      text-align left
    .submit_button
      margin 0 20px
      margin-top 20px
      width 30%
      text-align center
  .display_flex
    display flex
    justify-content space-around
</style>
