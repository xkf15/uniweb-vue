import api from '../api'
import router from '../router'
import * as types from './types'
import Vue from 'vue'

export const BasicInfo = ({commit}, data) => {
  commit(types.SET_BASIC_INFO, data)
  router.push('member')
}

export const MemberInfo = ({commit}, data) => {
  commit(types.SET_MEMBER_INFO, data)
}

export const UserLogin = ({commit}, data) => {
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
