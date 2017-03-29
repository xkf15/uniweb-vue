import * as types from '../types'

const getInfo = str => {
  const info = sessionStorage.getItem(str)
  if (info) return JSON.parse(info)
  else return null
}

const state = {
  basicInfo: getInfo('basic_info'),
  memberInfo: getInfo('member_info')
}

const mutations = {
  [types.SET_BASIC_INFO] (state, data) {
    sessionStorage.setItem('basic_info', JSON.stringify(data))
    state.basicInfo = JSON.parse(JSON.stringify(data))
  },
  [types.SET_MEMBER_INFO] (state, data) {
    sessionStorage.setItem('member_info', JSON.stringify(data))
    state.memberInfo = data
  },
  [types.CLEAR_NEW_ROOM] (state) {
    sessionStorage.setItem('basic_info', null)
    sessionStorage.setItem('member_info', null)
    state.basicInfo = null
    state.memberInfo = null
  }
}

export default {
  state,
  mutations
}
