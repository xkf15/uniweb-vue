import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
  newRoom: data => {
    return Vue.axios.post('', data)
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
