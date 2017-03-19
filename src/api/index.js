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
  getMessages: () => {
    return Vue.axios.get('')
  },
  getRoomInfo: () => {
    return Vue.axios.get('')
  },
  getRooms: () => {
    return Vue.axios.get('http://101.6.161.105:8000/uniadmin/')
  }
}
