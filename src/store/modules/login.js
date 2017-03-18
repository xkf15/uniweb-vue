import * as types from '../types'

const isLoggedIn = () => {
  return sessionStorage.getItem('uni-token')
}

const state = {
  token: isLoggedIn() || null
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
  }
}

export default {
  state,
  mutations
}
