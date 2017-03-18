import * as types from '../types'

const state = {
  roomList: []
}

const mutations = {
  [types.GET_ROOMS] (state, data) {
    state.roomList = data
  }
}

export default {
  state,
  mutations
}
