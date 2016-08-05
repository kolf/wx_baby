import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import configRouter from './routers'
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)

import filters from './filters'
Object.keys(filters).forEach((k) => Vue.filter(k, filters[k]))

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(VueResource)
Vue.http.options.emulateJSON = true

Vue.use(Router)
Vue.config.devtools = true

const router = new Router({
  history: true,
  hashbang: false
})
configRouter(router)

router.start(App, '#app')
