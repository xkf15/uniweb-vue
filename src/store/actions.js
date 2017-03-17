import api from '../api'
import * as types from './types'
import Vue from 'vue'

export const BasicInfo = ({commit}, data) => {
  commit(types.SET_BASIC_INFO, data)
}

export const GetMessages = ({commit}) => {
  api.getMessages().then(res => {

  }, (err) => {
    console.log(err)
    Vue.prototype.$message.error('请求错误！')
  })
}

export const GetRooms = ({commit}) => {
  api.getRooms().then(res => {
    console.log(res.data)
  }, (err) => {
    console.log(err)
    Vue.prototype.$message.error('请求错误！')
  })
}
