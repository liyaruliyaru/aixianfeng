// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 导入路由模块
import router from './router'

// 导入axios模块
import axios from 'axios'
Vue.prototype.axios = axios
// 导入resource模块
import resourse from 'vue-resource'
Vue.use(resourse)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
