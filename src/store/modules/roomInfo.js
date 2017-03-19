import * as types from '../types'

const state = {
  messages: [],
  members: []
}

const mutations = {
  [types.GET_MESSAGES] (state, data) {
    state.messages = data
  },
  [types.DELETE_MESSAGE] (state, data) {
    for (var i = 0; i < state.messages.length; i++) {
      if (state.messages[i].id === data.announcementId) {
        state.messages.splice(i, i)
        break
      }
    }
  },
  [types.CREATE_MESSAGE] (state, data) {
    // state.messages.push('')
  }
}

export default {
  state,
  mutations
}
