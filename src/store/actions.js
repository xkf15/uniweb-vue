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
export const GetMessages = ({commit}) => {
  api.getMessages().then(res => {

  }, (err) => {
    console.log(err)
    Vue.prototype.$message.error('请求错误！')
  })
}

export const GetRooms = ({commit}) => {
  api.getRooms().then(res => {
    console.log(res.data)
    commit(types.GET_ROOMS, res.data)
  }, (err) => {
    console.log(err)
    Vue.prototype.$message.error('请求错误！')
  })
}

export const CreateRoom = ({commit}, data) => {
  api.createRoom(data).then(res => {
    console.log(res)
    if (res.status === 200) { // 如果成功
      commit(types.CLEAR_NEW_ROOM)
      Vue.prototype.$message({ // 登录成功，显示提示语
        type: 'success',
        message: '成功发送房间信息！'
      })
    } else {
      Vue.prototype.$message.error(res.data.info) // 登录失败，显示提示语
    }
  }, () => {
    Vue.prototype.$message.error('请求错误！')
  })
  // api.newRoomMemberInfo(data.memberInfo).then(res => {
  //   if (res.status === 200) { // 如果成功
  //     commit(types.CLEAR_MEMBER_INFO)
  //     Vue.prototype.$message({ // 登录成功，显示提示语
  //       type: 'success',
  //       message: '成功发送问卷信息！'
  //     })
  //   } else {
  //     Vue.prototype.$message.error(res.data.info) // 登录失败，显示提示语
  //   }
  // }, () => {
  //   Vue.prototype.$message.error('请求错误！')
  // })
}
