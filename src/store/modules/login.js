import * as types from '../types'

const isLoggedIn = () => {
  return sessionStorage.getItem('uni-token')
}

const state = {
  token: isLoggedIn() || null,
  userInfo: {},
  initialData: {}
}

const setUser = (state, token) => {
  sessionStorage.setItem('uni-token', token)
  state.token = token
}

const mutations = {
  [types.USER_SIGNIN] (state, token) {
    setUser(state, token) // 用sessionStorage把token存下来
  },
  [types.USER_SIGNOUT] (state) {
    sessionStorage.setItem('uni-token', null) // 将token清空
    state.token = null
  },
  [types.GET_INITIAL_DATA] (state, data) {
    state.initialData = data
  },
  [types.ADD_ROOM_COUNT] (state) {
    state.userInfo.room_count++
  },
  [types.CHANGE_USER_INFO] (state, data) {
    // state.userInfo = []
  },
  [types.GET_USER_INFO] (state, data) {
    state.userInfo = data
  }
  // [types.USER_SIGNUP] (state, token) {
  //   setUser(state, token)
  // }
}

export default {
  state,
  mutations
}
