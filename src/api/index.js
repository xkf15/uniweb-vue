import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

// axios.defaults.maxContentLength = 2000000
Vue.use(VueAxios, axios)

export default {
  getExcel: id => {
    return Vue.axios.get(`/uniadmin/room/${id}/room_xls`)
  },
  getQuestionExcel: id => {
    return Vue.axios.get(`/uniadmin/room/${id}/question_xls`)
  },
  getUserExcel: id => {
    return Vue.axios.get(`/uniadmin/room/${id}/user_xls`)
  },
  uploadCover: data => {
    return Vue.axios.post(`/uniadmin/room/${data.id}/upload_cover`, data.file)
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
  getInitialData: () => {
    return Vue.axios.get(`/uniadmin/labels`)
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
    return Vue.axios.delete(`/uniadmin/room/${data.roomId}/user/${data.memberId}/delete`)
  },
  getMemberInfo: data => {
    return Vue.axios.get(`/uniadmin/user/${data}/detail`)
  },
  getRooms: () => {
    return Vue.axios.get(`/uniadmin/`)
  },
  getRoomList: () => {
    return Vue.axios.get(`/uniadmin/roomList`)
  },
  getApplications: roomId => {
    return Vue.axios.get(`/uniadmin/room/${roomId}/application`)
  },
  acceptApplication: data => {
    return Vue.axios.post(`/uniadmin/room/${data.roomId}/application/${data.applicationId}/judge`, {judge: data.judge})
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
