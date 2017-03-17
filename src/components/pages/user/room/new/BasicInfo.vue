<template lang="pug">
#info
  .tag 填写基本信息
  el-form.ruleForm(:model="ruleForm", :rules="rules", ref="ruleForm", label-width="100px")
    el-form-item(label="填写名称", prop="name")
      el-input(v-model="ruleForm.name", placeholder="活动标题（不少于5个字）")
    el-form-item(label="选择地点", prop="place")
      el-input(v-model="ruleForm.place", placeholder="例如：北京市海淀区中关村南大街")
    el-form-item(label="开始时间", required)
      el-col(:span="11")
        el-form-item(prop="startDate")
          el-date-picker(type="date", placeholder="选择日期", v-model="ruleForm.startDate", style="width: 100%;")
      el-col.line(:span="2") -
      el-col(:span="11")
        el-form-item(prop="startTime")
          el-time-picker(type="fixed-time", placeholder="选择时间", v-model="ruleForm.startTime", style="width: 100%;")
    el-form-item(label="结束时间", required)
      el-col(:span="11")
        el-form-item(prop="endDate")
          el-date-picker(type="date", placeholder="选择日期", v-model="ruleForm.endDate", style="width: 100%;")
      el-col.line(:span="2") -
      el-col(:span="11")
        el-form-item(prop="endTime")
          el-time-picker(type="fixed-time", placeholder="选择时间", v-model="ruleForm.endTime", style="width: 100%;")
    el-form-item(label="上传图片", prop="upload")
      el-upload.upload(drag, action="//jsonplaceholder.typicode.com/posts/")
        i.el-icon-upload
        .el-upload__text 将文件拖到此处，或<em>点击上传</em>
        .el-upload__tip(slot="tip") 注：图片小于2M（jpg, gif, png, bmp），尺寸不可小于1080*640
    el-form-item(label="活动人数", prop="people")
      el-input(v-model="ruleForm.people")
    el-form-item(label="详细内容", prop="desc")
      el-input(type="textarea", v-model="ruleForm.desc")
      .subtitle 若已有微信推送，请直接粘贴链接
      el-input(type="text", v-model="ruleForm.wechat")
      .subtitle 准入学校(可多选)
      .colleges
        span(v-for="(item, index) in colleges")
          input(:id="item.id", type="checkbox", v-model="item.toggle")
          label(:for="item.id") {{ item.title }}
      .subtitle 准入条件（将在用户选择加入时提醒）
      el-input(type="text", v-model="ruleForm.condition")
    el-form-item
      el-button.submitButton(type="danger", size="large", @click="submitForm('ruleForm')") 下一步
</template>

<script>
export default {
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  },
  data () {
    return {
      colleges: [
        {
          title: '清华大学',
          id: 'tsinghua',
          toggle: false
        },
        {
          title: '北方交大',
          id: 'bfjd',
          toggle: false
        },
        {
          title: '隔壁',
          id: 'gebi',
          toggle: false
        }
      ],
      ruleForm: {
        name: '',
        place: '',
        startDate: '',
        startTime: '',
        endDate: '',
        endTime: '',
        people: '',
        desc: '',
        wechat: '',
        condition: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 5, message: '活动标题不少于5个字符', trigger: 'blur' }
        ],
        place: [
          { required: true, message: '请选择活动地点', trigger: 'blue' }
        ],
        startDate: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        startTime: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        endDate: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        endTime: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        // people: [
        //   { type: 'number', message: '人数必须是数字', trigger: 'change' }
        // ]
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
#info
  .submitButton
    padding 10px 100px
  .upload
    text-align left
  .subtitle
    text-align left
    margin-top 15px
  .ruleForm
    .colleges
      text-align left
    .colleges input
      display none

    .colleges label
      cursor pointer
      background #eee
      border 1px solid #ccc
      padding 5px 20px
      margin-right 20px

    .colleges input:checked ~ label
      background red
      color white
</style>
