import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import http from '@/http'
import header from 'components/header/header.vue'
import "@/util/validate.js"

Vue.config.productionTip = false
Vue.component('headerTo',header)
Vue.prototype.$http = http

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
