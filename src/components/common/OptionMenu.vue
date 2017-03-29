<template lang="pug">
el-card.optionMenu
  template(slot="header") 房间选项
  .option-item(v-for="(item, index) of options")
    .header
      .title {{ item.name }}
      .editor
        a(@click="editItem(index)")
          i.el-icon-edit
        a(@click="deleteItem(index)")
          i.el-icon-delete
    el-input(v-model="item.content")
  .add
    el-button(type="primary", @click="addItem") 添加选项
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: function () {
        return [
          {
            name: '微信链接',
            content: ''
          },
          {
            name: '准入条件',
            content: ''
          }
        ]
      }
    }
  },
  methods: {
    deleteItem (index) {
      this.$confirm('确认删除该选项?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.options.splice(index, 1)
      }).catch(() => {})
    },
    editItem (index) {
      this.$prompt('请输入新选项名', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /.+/,
        inputErrorMessage: '选项名不能为空'
      }).then(({ value }) => {
        this.options[index].name = value
      }).catch(() => {})
    },
    addItem () {
      this.$prompt('请输入选项名', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /.+/,
        inputErrorMessage: '选项名不能为空'
      }).then(({ value }) => {
        this.options.push({
          name: value,
          content: ''
        })
      }).catch(() => {})
    }
  }
}
</script>

<style lang="stylus" scoped>
.optionMenu
  font-size 16px
  .option-item
    margin-bottom 10px
    .header
      display flex
      justify-content space-between
      .editor a
        margin-left 10px
  .add
    padding-top 10px
    text-align right
</style>
