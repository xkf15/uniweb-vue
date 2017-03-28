import * as types from '../types'

const state = {
  roomList: [],
  loading: false,
  searchRoomList: []
}

const mutations = {
  [types.GET_ROOMS] (state, data) {
    state.roomList = data
    // console.log(state.roomList[0])
    console.log('mutations: GetRooms')
  },
  [types.SET_LOADING_FALSE] (state) {
    state.loading = false
  },
  [types.SET_LOADING_TRUE] (state) {
    state.loading = true
  },
  [types.SEARCH_ROOMS_BY_NAME] (state, data) {
    state.searchRoomList = []
  },
  [types.SEARCH_ROOMS_BY_LABELS] (state, data) {
    state.searchRoomList = []
  }
}

export default {
  state,
  mutations
}
