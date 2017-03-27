import * as types from '../types'

const state = {
  messages: [],
  announcement: [],
  question: [],
  members: [],
  info: [],
  applications: []
}

const mutations = {
  [types.GET_MESSAGES] (state, data) {
    state.messages = data
  },
  [types.GET_ANNOUNCEMENT] (state, data) {
    state.announcement = data
  },
  [types.GET_QUESTION] (state, data) {
    state.question = data
    for (var i = 0; i < state.question.length; i++) {
      state.question[i].choices = JSON.parse(state.question[i].choices)
    }
  },
  [types.MODIFY_ROOM_INFO] (state, data) {
    state.info = data
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
    state.messages.push(data)
  },
  [types.GET_ROOM_INFO] (state, data) {
    console.log(data)
    state.info = data
    state.info.options = JSON.parse(data.options)
  },
  [types.GET_MEMBERS] (state, data) {
    state.members = data
  },
  [types.DELETE_MEMBER] (state, data) {
  },
  [types.GET_APPLICATIONS] (state, data) {
    state.applications = data
  }
}

export default {
  state,
  mutations
}
