import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import VueValidator from 'vue-validator'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'
import VueResource from 'vue-resource'
import configRouter from './routers'
import infiniteScroll from 'vue-infinite-scroll'
import wxApi from './wx-api'
import Auth from './utils/auth'
import getUrlParam from './utils/getUrlParam'
import localStorage from './utils/localStorage'

Vue.use(infiniteScroll)

Vue.config.devtools = true

import filters from './utils/filters'
Object.keys(filters).forEach((k) => Vue.filter(k, filters[k]))

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(VueResource)
Vue.http.options.emulateJSON = true
Vue.http.options.crossOrigin = true
Vue.http.options.headers = {
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
}
Vue.http.interceptors.push({
  request (request) {
    // 这里对请求体进行处理
    return request
  },
  response (response) {
    // 这里可以对响应的结果进行处理
    return response
  }
})

Vue.use(Router)
Vue.use(VueValidator)
export const router = new Router({
  hashbang: true,
  history: false,
  saveScrollPosition: true,
  transitionOnLoad: true
})

router.beforeEach((transition) => {
  const code = getUrlParam('code')
  if (code) {
    localStorage.set('code', code)
  }
  if (transition.to.auth && !Auth.authentication) {
    Auth.login(transition.to.query)
  } else {
    transition.next()
  }
})

configRouter(router)
sync(store, router)

wxApi.init(Vue)

router.start(App, '#app')
window.router = router
