import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
  localLogin: data => {
    return Vue.axios.post('http://101.6.161.105:8000/login/', data)
  },
  createRoom: data => {
    return Vue.axios.post('http://101.6.161.105:8000/uniadmin/create', data)
  },
  getMessages: data => {
    return Vue.axios.get('http://101.6.161.105:8000/uniadmin/room/' + data + '/notice')
  },
  createMessage: data => {
    return Vue.axios.post('http://101.6.161.105:8000/uniadmin/room/' + data.roomId + '/notice/create', data.data)
  },
  deleteMessage: data => {
    return Vue.axios.delete('http://101.6.161.105:8000/uniadmin/room/' + data.roomId + '/notice/' + data.announcementId + '/delete')
  },
  getRoomInfo: roomId => {
    return Vue.axios.get('http://101.6.161.105:8000/uniadmin/room/' + roomId + '/detail')
  },
  getMembers: roomId => {
    return Vue.axios.get('http://101.6.161.105:8000/uniadmin/room/' + roomId + '/users')
  },
  getRooms: () => {
    return Vue.axios.get('http://101.6.161.105:8000/uniadmin/')
  },
  getApplications: roomId => {
    return Vue.axios.get('http://101.6.161.105:8000/uniadmin/room/' + roomId + '/application')
  }
}
