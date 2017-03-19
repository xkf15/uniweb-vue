import * as types from '../types'

const state = {
  roomList: [],
  loading: true
}

const mutations = {
  [types.GET_ROOMS] (state, data) {
    state.roomList = data
  },
  [types.CHANGE_LOADING] (state) {
    state.loading = !state.loading
  }
}

export default {
  state,
  mutations
}
