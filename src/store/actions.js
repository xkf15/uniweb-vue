import api from '../api'
import * as types from './types'
import Vue from 'vue'
import router from '../router'

export const BasicInfo = ({commit}, data) => {
  commit(types.SET_BASIC_INFO, data)
  router.push('member')
}

export const MemberInfo = ({commit}, data) => {
  commit(types.SET_MEMBER_INFO, data)
}

export const UserLogin = ({ commit }, data) => {
  api.localLogin(data).then(res => {
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
  router.push('/')
}

export const GetMessages = ({commit}, data) => {
  api.getMessages(data).then(res => {
    console.log(res.data)
    commit(types.GET_MESSAGES, res.data)
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

export const DeleteMessage = ({commit}, data) => {
  api.deleteMessage(data).then(res => {
    if (res.status === 200) {
      commit(types.DELETE_MESSAGE, data)
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
  commit(types.CHANGE_LOADING)
  api.getRooms().then(res => {
    console.log(res.data)
    commit(types.GET_ROOMS, res.data)
    commit(types.CHANGE_LOADING)
  }, (err) => {
    console.log(err)
    Vue.prototype.$message.error('请求错误！')
    commit(types.CHANGE_LOADING)
  })
}

export const GetRoomInfo = ({commit}, roomId) => {
  api.getRoomInfo(roomId).then(res => {
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

export const CreateRoom = ({commit}, data) => {
  api.createRoom(data).then(res => {
    if (res.status === 201) { // 如果成功
      commit(types.CLEAR_NEW_ROOM)
      Vue.prototype.$message('创建房间成功')
    } else {
      Vue.prototype.$message.error('Status code is not matched')
    }
  }, () => {
    Vue.prototype.$message.error('请求错误！')
  })
}
