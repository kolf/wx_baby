import Vue from 'vue'
import Router from 'vue-router'
import App from './App'

import Details from './components/Details'
import Home from './components/Home'
import List from './components/List'
import CommentList from './components/CommentList'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(Router)
Vue.config.devtools = true

const router = new Router()

router.map({
  '/': {
    component: Home
  },
  '/details': {
    component: Details
  },
  '/list': {
    component: List
  },
  '/commentList': {
    component: CommentList
  }
})

router.start(App, 'app')
