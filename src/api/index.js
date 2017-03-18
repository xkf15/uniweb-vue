import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
  localLogin: data => {
    return Vue.axios.post('http://101.6.161.95:8000/login/', data)
  },
  newRoomBasicInfo: data => {
    return Vue.axios.post('http://101.6.161.95:8000/uniadmin/create', data)
  },
  newRoomMemberInfo: data => {
    return Vue.axios.post('http://101.6.161.95:8000/uniadmin/create', data)
  },
  getMessages: () => {
    return Vue.axios.get('')
  },
  getRoomInfo: () => {
    return Vue.axios.get('')
  },
  getRooms: () => {
    return Vue.axios.get('http://101.6.161.231:8000/uniadmin/')
  }
}
