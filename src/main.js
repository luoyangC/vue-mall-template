import Vue from 'vue'
import App from './App.vue'
import store from './store'
import i18n from './locale'
import router from './router'

Vue.config.productionTip = false

import '@/plugins/vant'
import '@/plugins/axios'
import '@/plugins/filters'

import { mockXHR } from '../mock' // mock 数据
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}

new Vue({
  store,
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
