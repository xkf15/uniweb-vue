import * as types from '../types'

const state = {
  messages: [],
  announcement: [],
  question: [],
  results: [],
  members: [],
  member: [],
  memberNum: -1,
  info: [],
  applications: [],
  memberInfoLoading: false
}

const mutations = {
  [types.GET_MESSAGES] (state, data) {
    state.messages = data[1]
    state.memberNum = data[0]
    // state.messages = data
    for (let message of state.messages) {
      if (message.choices !== null && message.choices !== '') {
        message.choices = JSON.parse(message.choices)
      }
    }
  },
  [types.GET_ANNOUNCEMENT] (state, data) {
    state.announcement = data[1]
    state.memberNum = data[0]
  },
  [types.GET_QUESTION] (state, data) {
    state.question = data[1]
    state.memberNum = data[0]
    // state.question = data
    let results = []
    for (let i = 0; i < state.question.length; i++) {
      state.question[i].choices = JSON.parse(state.question[i].choices)
      results[i] = []
      if (state.question[i].choices.length > 0) {
        for (var j = 0; j < state.question[i].choices.length; j++) {
          results[i][j] = 0
        }
        for (var k = 0; k < state.question[i].replies.length; k++) {
          // state.question[i].replies[k].text = '"[\"1\", \"\2\"]"'
          // state.question[i].replies[k].text = JSON.parse(state.question[i].replies[k].text)
          state.question[i].replies[k].text = [1, 2]
          for (var l = 0; l < state.question[i].replies[k].text.length; l++) {
            results[i][state.question[i].replies[k].text[l]]++
          }
        }
      }
    }
    state.results = results
  },
  [types.MODIFY_ROOM_INFO] (state, data) {
    state.info = data
  },
  [types.DELETE_MESSAGE] (state, data) {
    state.messages.splice(data, 1)
  },
  [types.CREATE_MESSAGE] (state, data) {
    state.messages.push(data)
  },
  [types.GET_ROOM_INFO] (state, data) {
    state.info = data
    state.info.options = JSON.parse(data.options)
  },
  [types.GET_MEMBERS] (state, data) {
    state.members = data
  },
  [types.GET_MEMBER_INFO] (state, data) {
    state.member = data
    state.memberInfoLoading = false
  },
  [types.DELETE_MEMBER] (state, data) {
    state.members.splice(data, 1)
  },
  [types.GET_APPLICATIONS] (state, data) {
    state.applications = data
  },
  [types.ACCEPT_APPLICATION] (state, data) {
    state.applications.splice(data, 1)
  }
}

export default {
  state,
  mutations
}
