import api from '../api'
import * as types from './types'
import Vue from 'vue'
import router from '../router'

export const BasicInfo = ({commit}, data) => {
  commit(types.SET_BASIC_INFO, data)
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
  }, (err) => {
    console.log(err)
    Vue.prototype.$message.error('请求错误！')
  })
}
