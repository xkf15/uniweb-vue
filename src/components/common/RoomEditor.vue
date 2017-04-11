<template lang="pug">
.roomEditor
  el-form.ruleForm(:model="ruleForm", :rules="rules", ref="ruleForm", label-width="100px")
    el-form-item(label="填写名称", prop="name")
      el-input(v-model="ruleForm.name", placeholder="活动标题（不少于5个字）")
    el-form-item(label="选择地点", prop="place")
      el-input(v-model="ruleForm.place", placeholder="例如：北京市海淀区中关村南大街")
    el-form-item(label="活动时间", prop="timeRange")
      date-picker(type="datetimerange", v-model="ruleForm.timeRange", placeholder="选择日期和时间")
    el-form-item(label="上传图片", prop="upload")
      //- image-upload(text="点击选择图片",crop-ratio="1:1", :cropBtn="{ok: '确定', cancel: '取消'}", :crop="true", :maxFileSize="1048576", :isXhr="false", extensions="png,jpg,jpeg,gif,bmp", @imageuploading="imageuploading", inputOfFile="cover")
      el-upload.upload(drag, :action="action", :headers="headers", name="cover", :before-upload="beforeUpload")
        .upload_box(:style="{background: `url(${cover}) no-repeat center center`}")
          i.el-icon-upload
          .el-upload__text 将文件P拖到此处，或<em>点击上传</em>
          .el-upload__tip(slot="tip") 注：图片小于2M（jpg, gif, png, bmp），尺寸不可小于1080*640
    el-form-item(label="活动人数", prop="people")
      el-input(v-model.number="ruleForm.people")
    el-form-item(label="详细内容", prop="desc")
      el-input(type="textarea", v-model="ruleForm.desc")
    el-form-item(label="房间标签")
      el-select(v-model="ruleForm.tags", multiple, filterable, placeholder="请选择房间标签")
        el-option(v-for="(item, index) in initialData.labels", :key="index", :label="item.name_ch", :value="item.id")
    el-form-item(label="在广场上显示")
      el-switch(v-model="ruleForm.show", on-text="是", off-text="否", on-color="#13ce66", off-color="#ff4949")
    el-form-item(label="需要申请加入")
      el-switch(v-model="ruleForm.apply", on-text="是", off-text="否", on-color="#13ce66", off-color="#ff4949")
    el-form-item
      .subtitle 准入学校（可多选）
      .colleges
        span(v-for="(item, index) of myColleges")
          input(:id="item.id", type="checkbox", v-model="item.toggle")
          label(:for="item.id") {{ item.name_ch }}
    el-form-item
      option-menu(:options="initialRuleForm.options")
    el-form-item
      el-button.submitButton(type="danger", size="large", @click="submitForm('ruleForm')") {{ submitString }}
</template>

<script>
import OptionMenu from '@/components/common/OptionMenu'
import DatePicker from 'iview/src/components/date-picker'
// import ImageUpload from 'vue-core-image-upload'

export default {
  components: {
    DatePicker,
    OptionMenu
    // ImageUpload
  },
  props: {
    token: {
      type: String,
      default: null
    },
    roomInfo: {
      type: Object,
      default: null
    },
    initialData: {
      type: Object,
      required: true
    },
    initialRuleForm: {
      type: Object,
      default: function () {
        return {
          name: '',       // 活动名称 // title
          place: '',      // 活动地点 // location_string
          people: '',     // 参与人数 (需转化为数字) (非必须) // participants
          desc: '',       // 详细内容 // discription
          wechat: '',     // 微信推送链接 (非必须)
          condition: '',  // 准入条件 (非必须) // welcome
          timeRange: '',
          cover: '',
          options: [
            {
              name: '微信链接',
              content: ''
            },
            {
              name: '准入条件',
              content: ''
            }
          ],
          tags: [],
          show: true,
          apply: true
        }
      }
    },
    dispatch: {
      type: String,
      default: 'ModifyRoomInfo'
    },
    submitString: {
      type: String,
      default: '修改房间信息'
    }
  },
  methods: {
    // imageuploading (res) {
    //   let data = new FormData()
    //   data.append('cover', res)
    //   console.log(data.get('cover'))
    //   this.$store.dispatch('UploadCover', {
    //     id: this.roomInfo.id,
    //     file: data
    //   })
    // },
    beforeUpload (file) {
      let data = new FormData()
      data.append('cover', file)
      this.newCover = data
      // console.log(data.get('cover'))
      // this.$store.dispatch('UploadCover', {
      //   id: this.roomInfo.id,
      //   file: data
      // })
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (Number(this.ruleForm.people) < 2) {
            alert('参与人数必须大于2')
            return false
          }
          let allData = this.ruleForm
          const collegesId = []
          for (let item of this.myColleges) {
            if (item.toggle) collegesId.push(Number(item.id))
          }
          if (!collegesId.length) {
            alert('准入学校至少填写1所')
            return false
          }
          allData = JSON.parse(JSON.stringify(allData))
          allData = {
            id: this.$route.params.id,
            title: allData.name,
            location_string: allData.place,
            date_time_start: allData.timeRange[0].split('.')[0],
            date_time_end: allData.timeRange[1].split('.')[0],
            max_participants: allData.people,
            description: allData.desc,
            options: allData.options,
            advertising: collegesId,
            questionnaires: allData.questionnaires,
            labels: allData.tags,
            apply: allData.apply,
            show: allData.show
          }
          this.$store.dispatch(this.dispatch, {...allData, cover: this.newCover})
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  },
  computed: {
    ruleForm () {
      return this.initialRuleForm
    },
    myColleges () {
      return this.initialData.colleges
    },
    // action () {
    //   // return this.roomInfo ? `/uniadmin/room/${this.roomInfo.id}/upload_cover` : ''
    //   return 'https://jsonplaceholder.typicode.com/posts/'
    // },
    cover () {
      return this.roomInfo ? this.roomInfo.cover : ''
    },
    headers () {
      return this.token ? {'Authorization': `Token ${this.token}`} : {}
    },
    uploadFile () {
      console.log(this.$refs['file'])
      return this.$refs['file']
    }
  },
  data () {
    return {
      action: '//jsonplaceholder.typicode.com/posts/',
      fileList: [],
      newCover: {},
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 5, message: '活动标题不少于5个字符', trigger: 'blur' }
        ],
        place: [
          { required: true, message: '请选择活动地点', trigger: 'blur' }
        ],
        people: [
          { required: true, type: 'number', message: '人数必须是数字', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ],
        timeRange: [
          { required: true, message: '请填写活动时间' }
        ]
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.roomEditor
  margin 20px
  border 1px solid #ddd
  border-radius 10px
  padding 40px 40px 20px 20px
  .submitButton
    padding 10px 100px
  .upload
    text-align left
  .subtitle
    text-align left
    margin-top 15px
  .ruleForm
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
