import * as types from '../types'

const getBasicInfo = () => {
  const basicInfo = sessionStorage.getItem('basic_info')
  if (basicInfo) return JSON.parse(basicInfo)
  else return null
}
const getMemberInfo = () => {
  const memberInfo = sessionStorage.getItem('member_info')
  console.log(memberInfo)
  if (memberInfo) return JSON.parse(memberInfo)
  else return null
}

const state = {
  basicInfo: getBasicInfo(),
  memberInfo: getMemberInfo()
}

const mutations = {
  [types.SET_BASIC_INFO] (state, data) {
    console.log(JSON.stringify(data))
    sessionStorage.setItem('basic_info', JSON.stringify(data))
    state.basicInfo = data
  },
  [types.SET_MEMBER_INFO] (state, data) {
    sessionStorage.setItem('member_info', data)
    state.memberInfo = data
  }
}

export default {
  state,
  mutations
}
