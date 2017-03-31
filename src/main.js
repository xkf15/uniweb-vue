// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// import iView from 'iview'
import 'iview/dist/styles/iview.css'

import 'font-awesome/css/font-awesome.css'

/* eslint-disable no-unused-vars */
// import mock from './api/mock'

Vue.use(ElementUI)
// Vue.use(iView)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  ...App
}).$mount('#app')
