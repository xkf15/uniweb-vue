import * as types from '../types'

const state = {
  roomList: [],
  loading: false,
  searchRoomList: {
    showType: 'on',
    roomList: []
  },
  rooms: []
}

const mutations = {
  [types.GET_ROOMS] (state, data) {
    state.roomList = data
  },
  [types.GET_ROOM_LIST] (state, data) {
    state.rooms = data
  },
  [types.CHANGE_DISPLAYED_ROOMS] (state, data) {
    state.searchRoomList = data
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
