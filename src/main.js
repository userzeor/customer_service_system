/*
 * @Descripttion:
 * @version: 1.0
 * @Author: userzero
 * @Date: 2019-07-30 10:31:58
 * @LastEditors: userzero
 * @LastEditTime: 2019.08.14 15:04:18
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './cube-ui' // 按需引入
// import cube from 'cube-ui' // 全部引入
import 'amfe-flexible'
import FastClick from 'fastclick'
// import './style/variable.styl'

FastClick.attach(document.body)

// Vue.use(cube)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
