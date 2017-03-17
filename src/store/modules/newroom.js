import * as types from '../types'

const state = {
  basicInfo: [],
  member: []
}

const mutations = {
  [types.SET_BASIC_INFO] (state, data) {
    sessionStorage.setItem('new_room_info', JSON.stringify(data))
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
