<template lang="pug">
#memberInfo
  .title 收集成员信息
  .subtitle 我们会根据您的需求生成群问卷，让加入成员填写
  .input_box
    .input_item(v-for="(item, index) in input")
      input(type="checkbox")
      span {{ item.title }}
      span |
      input(type="text", :placeholder="item.danhang")
      input(type="text", :placeholder="item.note")
    .add-one + 增加一项
    .confirm
      a(href="#") 确认信息
</template>

<script>
export default {
  data () {
    return {
      input: [
        {
          title: '必填',
          danhang: '单行文本框',
          note: '提示信息写在这里'
        },
        {
          title: '必填',
          danhang: '单行文本框',
          note: '提示信息写在这里'
        },
        {
          title: '必填',
          danhang: '单行文本框',
          note: '提示信息写在这里'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
#memberInfo
  text-align left
  .title
    font-size 20px
    font-weight bold
  .add-one, .confirm
    text-align center
  .confirm
    background red
    color white
</style>
