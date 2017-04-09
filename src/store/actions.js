import api from '../api'
import * as types from './types'
import Vue from 'vue'
import router from '../router'

export const Excel = ({commit}, roomId) => {
  api.getExcel(roomId).then(res => {
    if (res.status === 200) { // 如果成功
      console.log(res.data)
      // commit(types.USER_SIGNIN, res.data.token)
      window.location.href = res.data
      Vue.prototype.$message({ // 登录成功，显示提示语
        type: 'success',
        message: '请求成功！'
      })
    } else {
      Vue.prototype.$message.error(res.data.info) // 登录失败，显示提示语
    }
  }, () => {
    Vue.prototype.$message.error('请求错误！')
  })
}

export const QuestionExcel = ({commit}, roomId) => {
  return api.getQuestionExcel(roomId).then(res => {
    if (res.status === 200) {
      window.location.href = res.data
      Vue.prototype.$message({
        type: 'success',
        message: '请求成功！'
      })
    } else {
      Vue.prototype.$message.error(res.data.info) // 登录失败，显示提示语
    }
  }, () => {
    Vue.prototype.$message.error('请求错误！')
  })
}

export const UserExcel = ({commit}, roomId) => {
  return api.getUserExcel(roomId).then(res => {
    if (res.status === 200) {
      Vue.prototype.$message({
        type: 'success',
        message: '请求成功！'
      })
    } else {
      Vue.prototype.$message.error(res.data.info) // 登录失败，显示提示语
    }
  }, () => {
    Vue.prototype.$message.error('请求错误！')
  })
}

export const UploadCover = ({commit}, data) => {
  return api.uploadCover(data).then(res => {
    console.log(res)
    Vue.prototype.$message({
      type: 'success',
      message: '请求成功！'
    })
  }, () => {
    Vue.prototype.$message.error('请求错误！')
  })
}

export const BasicInfo = ({commit}, data) => {
  commit(types.SET_BASIC_INFO, data)
  commit(types.SAVE_ROOM_COVER, data.cover)
  router.push('member')
}

export const GetInitialData = ({commit}) => {
  return api.getInitialData().then(res => {
    if (res.status === 200) {
      commit(types.GET_INITIAL_DATA, res.data)
    } else {
      Vue.prototype.$message.error('状态码错误')
    }
  }, () => {
    Vue.prototype.$message.error('请求错误')
  })
}

export const ModifyRoomInfo = async ({commit}, data) => {
  try {
    const res = await api.modifyRoomInfo(data)
    if (res.status === 200) {
      console.log('get' in data.cover)
      if ('get' in data.cover) {
        const res = await api.uploadCover({ id: data.id, file: data.cover })
        if (res.status === 200) {
          commit(types.MODIFY_ROOM_INFO, data)
          Vue.prototype.$message('修改房间信息成功')
          router.push('info')
        } else {
          Vue.prototype.$message.error('上传文件状态吗错误！')
        }
      } else {
        commit(types.MODIFY_ROOM_INFO, data)
        Vue.prototype.$message('修改房间信息成功')
        router.push('info')
      }
    } else {
      Vue.prototype.$message.error('房间数据状态吗错误！')
    }
  } catch (err) {
    console.log(err)
    Vue.prototype.$message.error('请求错误！')
  }
}

export const MemberInfo = ({commit}, data) => {
  commit(types.SET_MEMBER_INFO, data)
}

export const UserSignup = ({ commit }, data) => {
  return api.localSignup(data).then(res => {
    if (res.status === 200) { // 如果成功
      commit(types.USER_SIGNIN, res.data.token)
      Vue.prototype.$message({ // 登录成功，显示提示语
        type: 'success',
        message: '成功注册！'
      })
      router.push('/user/room')
    } else {
      Vue.prototype.$message.error(res.data.info) // 登录失败，显示提示语
      commit(types.USER_SIGNOUT)
    }
  }, () => {
    Vue.prototype.$message.error('请求错误！')
    commit(types.USER_SIGNOUT)
  })
}

export const UserLogin = ({ commit }, data) => {
  return api.localLogin(data).then(res => {
    if (res.status === 200) { // 如果成功
      commit(types.USER_SIGNIN, res.data.token)
      Vue.prototype.$message({ // 登录成功，显示提示语
        type: 'success',
        message: '登录成功！'
      })
      router.push('./user/room')
    } else {
      Vue.prototype.$message.error(res.data.info) // 登录失败，显示提示语
      commit(types.USER_SIGNOUT)
    }
  }, () => {
    Vue.prototype.$message.error('请求错误！')
    commit(types.USER_SIGNOUT)
  })
}

export const UserLogout = ({commit}) => {
  commit(types.USER_SIGNOUT)
  // router.push('/')
  window.location = '/'
}

export const GetMessages = ({commit}, data) => {
  return api.getMessages(data).then(res => {
    console.log(res.data)
    commit(types.GET_MESSAGES, res.data)
  }, (err) => {
    console.log(err)
    Vue.prototype.$message.error('请求错误！')
  })
}

export const GetAnnouncement = ({commit}, data) => {
  return api.getAnnouncement(data).then(res => {
    commit(types.GET_ANNOUNCEMENT, res.data)
  }, (err) => {
    console.log(err)
    Vue.prototype.$message.error('请求错误！')
  })
}

export const GetQuestion = ({commit}, data) => {
  return api.getQuestion(data).then(res => {
    commit(types.GET_QUESTION, res.data)
  }, (err) => {
    console.log(err)
    Vue.prototype.$message.error('请求错误！')
  })
}

export const CreateMessage = ({commit}, data) => {
  api.createMessage(data).then(res => {
    data.data.id = res.data
    commit(types.CREATE_MESSAGE, data.data)
    Vue.prototype.$message('添加消息成功！')
  }, (err) => {
    console.log(err)
    Vue.prototype.$message.error('请求错误！')
  })
}

export const CreateQuestionnaire = ({commit}, data) => {
  api.createQuestionnaire(data).then(res => {
    Vue.prototype.$message.success('添加成功！')
    router.push('../message')
  }, (err) => {
    console.log(err)
    Vue.prototype.$message.error('请求错误！')
  })
}

export const DeleteMessage = ({commit}, data) => {
  api.deleteMessage(data).then(res => {
    if (res.status === 200) {
      commit(types.DELETE_MESSAGE, data.number)
      Vue.prototype.$message({
        type: 'success',
        message: '删除成功!'
      })
    }
  }, (err) => {
    console.log(err)
    Vue.prototype.$message.error('请求错误！')
  })
}

export const GetRooms = ({commit}) => {
  commit(types.SET_LOADING_TRUE)
  api.getRooms().then(res => {
    commit(types.GET_ROOMS, res.data)
    commit(types.SET_LOADING_FALSE)
  }, (err) => {
    console.log(err)
    Vue.prototype.$message.error('请求错误！')
    commit(types.SET_LOADING_FALSE)
  })
}

export const GetRoomList = ({commit}) => {
  commit(types.SET_LOADING_TRUE)
  return api.getRoomList().then(res => {
    if (res.status === 200) {
      commit(types.GET_ROOM_LIST, res.data)
      commit(types.SET_LOADING_FALSE)
    } else {
      Vue.prototype.$message.error('')
    }
  }, err => {
    console.log(err)
    Vue.prototype.$message.error('请求错误！')
    commit(types.SET_LOADING_FALSE)
  })
}

export const ChangeDisplayedRooms = ({commit}, data) => {
  commit(types.CHANGE_DISPLAYED_ROOMS, data)
}

export const GetRoomInfo = ({commit}, roomId) => {
  return api.getRoomInfo(roomId).then(res => {
    if (res.status === 200) {
      commit(types.GET_ROOM_INFO, res.data)
    } else {
      Vue.prototype.$message.error('状态码错误')
    }
  }, (err) => {
    console.log(err)
    Vue.prototype.$message.error('请求错误！')
  })
}

export const GetMembers = ({commit}, roomId) => {
  api.getMembers(roomId).then(res => {
    if (res.status === 200) {
      commit(types.GET_MEMBERS, res.data)
    } else {
      Vue.prototype.$message.error('状态码错误')
    }
  }, (err) => {
    console.log(err)
    Vue.prototype.$message.error('请求错误！')
  })
}

export const GetApplications = ({commit}, roomId) => {
  api.getApplications(roomId).then(res => {
    if (res.status === 200) {
      commit(types.GET_APPLICATIONS, res.data)
    } else {
      Vue.prototype.$message.error('状态码错误')
    }
  }, (err) => {
    console.log(err)
    Vue.prototype.$message.error('请求错误！')
  })
}

export const CreateRoom = async ({commit}, data) => {
  try {
    const res = await api.createRoom(data)
    if (res.status === 201) {
      if (data.cover && ('get' in data.cover)) {
        const res2 = await api.uploadCover({ id: res.data.id, file: data.cover })
        if (res2.status === 200) {
          // commit(types.CLEAR_NEW_ROOM)
          commit(types.ADD_ROOM_COUNT)
          Vue.prototype.$message('创建房间成功')
        } else {
          Vue.prototype.$message.error('上传图片状态码错误')
        }
      } else {
        // commit(types.CLEAR_NEW_ROOM)
        commit(types.ADD_ROOM_COUNT)
        Vue.prototype.$message('创建房间成功')
      }
    } else {
      Vue.prototype.$message.error('创建房间返回数据状态码错误')
    }
  } catch (err) {
    console.log(err)
    Vue.prototype.$message.error('请求错误')
  }
}

export const GetUserInfo = ({commit}) => { // 得到我的信息
  return api.getUserInfo().then(res => {
    console.log(res.data)
    if (res.status === 200) {
      commit(types.GET_USER_INFO, res.data)
    } else {
      Vue.prototype.$message.error('状态码错误')
    }
  }, (err) => {
    console.log(err)
    Vue.prototype.$message.error('请求错误！')
  })
}

export const SearchRoomsByName = ({commit}, data) => {
  api.searchRoomsByName(data).then(res => {
    if (res.status) { // 如果成功，暂时不完全
      commit(types.SEARCH_ROOMS_BY_NAME, res.data)
    } else {
      Vue.prototype.$message.error('状态码错误')
    }
  }, (err) => {
    console.log(err)
    Vue.prototype.$message.error('请求错误！')
  })
}

export const SearchRoomsByLabel = ({commit}, data) => {
  api.searchRoomsByLabel(data).then(res => {
    if (res.status) {
      commit(types.SEARCH_ROOMS_BY_LABELS, res.data)
    } else {
      Vue.prototype.$message.error('状态码错误')
    }
  }, (err) => {
    console.log(err)
    Vue.prototype.$message.error('请求错误！')
  })
}

export const ChangeUserInfo = ({commit}, data) => {
  api.changeUserInfo(data).then(res => {
    if (res.status) { // 如果成功，暂时目前没写完
      commit(types.CHANGE_USER_INFO, res.data)
    } else {
      Vue.prototype.$message.error('状态码错误')
    }
  }, (err) => {
    console.log(err)
    Vue.prototype.$message.error('请求错误！')
  })
}

export const DeleteMember = ({commit}, data) => {
  api.deleteMember(data).then(res => {
    if (res.status) {
      Vue.prototype.$message.success('请求成功')
      commit(types.DELETE_MEMBER, data.number)
    } else {
      Vue.prototype.$message.error('状态码错误')
    }
  }, (err) => {
    console.log(err)
    Vue.prototype.$message.error('请求错误！')
  })
}

export const GetMemberInfo = ({commit}, data) => { // 得到房间内某个用户信息
  return api.getMemberInfo(data).then(res => {
    if (res.status) {
      commit(types.GET_MEMBER_INFO, res.data)
    } else {
      Vue.prototype.$message.error('状态码错误')
    }
  }, (err) => {
    console.log(err)
    Vue.prototype.$message.error('请求错误！')
  })
}

export const AcceptApplication = ({commit}, data) => {
  api.acceptApplication(data).then(res => {
    if (res.status) {
      Vue.prototype.$message.success('成功')
      commit(types.ACCEPT_APPLICATION, data.number)
    } else {
      Vue.prototype.$message.error('状态码错误')
    }
  }, (err) => {
    console.log(err)
    Vue.prototype.$message.error('请求错误！')
  })
}
