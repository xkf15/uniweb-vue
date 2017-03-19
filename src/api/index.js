import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
  localLogin: data => {
    return Vue.axios.post('/login/', data)
  },
  createRoom: data => {
    return Vue.axios.post('/uniadmin/create', data)
  },
  getMessages: data => {
    return Vue.axios.get('/uniadmin/room/' + data + '/notice')
  },
  createMessage: data => {
    return Vue.axios.post('/uniadmin/room/' + data.roomId + '/notice/create', data.data)
  },
  deleteMessage: data => {
    return Vue.axios.delete('/uniadmin/room/' + data.roomId + '/notice/' + data.announcementId + '/delete')
  },
  getRoomInfo: roomId => {
    return Vue.axios.get('/uniadmin/room/' + roomId + '/detail')
  },
  getMembers: roomId => {
    return Vue.axios.get('/uniadmin/room/' + roomId + '/users')
  },
  getRooms: () => {
    return Vue.axios.get('/uniadmin/')
  },
  getApplications: roomId => {
    return Vue.axios.get('/uniadmin/room/' + roomId + '/application')
  }
}
