import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
  getExcel: id => {
    return Vue.axios.get(`/uniadmin/room/${id}/user_xls`)
  },
  localLogin: data => {
    return Vue.axios.post(`/auth/`, data)
  },
  localSignup: data => {
    return Vue.axios.post(`/auth/signup`, data)
  },
  getUserInfo: () => {
    return Vue.axios.get(`/uniadmin/host`)
  },
  createRoom: data => {
    return Vue.axios.post(`/uniadmin/create`, data)
  },
  getMessages: data => {
    return Vue.axios.get(`/uniadmin/room/${data}/notice`)
  },
  getAnnouncement: data => {
    return Vue.axios.get(`/uniadmin/room/${data}/announcement`)
  },
  getQuestion: data => {
    return Vue.axios.get(`/uniadmin/room/${data}/question`)
  },
  createMessage: data => { // 已弃用
    return Vue.axios.post(`/uniadmin/room/${data.roomId}/notice/create`, data.data)
  },
  createQuestionnaire: data => {
    return Vue.axios.post(`/uniadmin/room/${data.roomId}/notice/create`, data.questionnaire)
  },
  deleteMessage: data => {
    return Vue.axios.delete(`/uniadmin/room/${data.roomId}/notice/${data.announcementId}/delete`)
  },
  getRoomInfo: roomId => {
    return Vue.axios.get(`/uniadmin/room/${roomId}/detail`)
  },
  modifyRoomInfo: data => {
    return Vue.axios.put(`/uniadmin/room/${data.id}/edit`, data)
  },
  getMembers: roomId => {
    return Vue.axios.get(`/uniadmin/room/${roomId}/users`)
  },
  deleteMember: data => {
    return Vue.axios.delete('', data)
  },
  getMemberInfo: data => {
    return Vue.axios.get('', data)
  },
  getRooms: () => {
    return Vue.axios.get(`/uniadmin/`)
  },
  getApplications: roomId => {
    return Vue.axios.get(`/uniadmin/room/${roomId}/application`)
  },
  acceptApplication: data => {
    return Vue.axios.post('', data)
  },
  searchRoomsByName: data => {
    return Vue.axios.post('', data)
  },
  searchRoomsByLabel: data => {
    return Vue.axios.post('', data)
  },
  changeUserInfo: data => {
    return Vue.axios.post('', data)
  }
}
