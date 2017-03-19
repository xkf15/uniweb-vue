import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import newroom from './modules/newroom'
import login from './modules/login'
import rooms from './modules/rooms'
import roomInfo from './modules/roomInfo'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    newroom,
    login,
    rooms,
    roomInfo
  },
  strict: debug
})
