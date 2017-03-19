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
    return Vue.axios.post('', data)
  },
  deleteMessage: data => {
    return Vue.axios.delete('http://101.6.161.105:8000/uniadmin/room/' + data.roomId + '/notice/' + data.announcementId + '/delete')
  },
  getRoomInfo: () => {
    return Vue.axios.get('')
  },
  getRooms: () => {
    return Vue.axios.get('http://101.6.161.105:8000/uniadmin')
  }
}
