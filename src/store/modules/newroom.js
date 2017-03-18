import * as types from '../types'

const getBasicInfo = () => JSON.parse(sessionStorage.getItem('basic_info'))
const getMember = () => JSON.parse(sessionStorage.getItem('member_info'))

const state = {
  basicInfo: getBasicInfo() || null,
  member: getMember() || null
}

const mutations = {
  [types.SET_BASIC_INFO] (state, data) {
    console.log(JSON.stringify(data))
    sessionStorage.setItem('basic_info', JSON.stringify(data))
    state.basicInfo = data
  },
  [types.SET_MEMBER_INFO] (state, data) {
    sessionStorage.setItem('member_info', data)
    state.member = data
  }
}

export default {
  state,
  mutations
}
