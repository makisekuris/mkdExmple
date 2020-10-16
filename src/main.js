/*
 * @Descripttion: 
 * @version: 
 * @Author: liujy
 * @Date: 2020-10-14 11:12:39
 * @LastEditors: liujy
 * @LastEditTime: 2020-10-15 15:25:46
 */
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import Vuex from 'vuex'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
