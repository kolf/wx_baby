import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import Faker from 'vue-faker'

import Details from './components/Details'
import Home from './components/Home'
import List from './components/List'
import CommentList from './components/CommentList'
import CommentDateils from './components/CommentDateils'
import CommentAdd from './components/CommentAdd'
import Paying from './components/Paying'
import Join from './components/Join'
import Information from './components/Information'
import Me from './components/Me'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(Faker, {locale: 'zh_CN'})
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
  },
  '/commentDateils': {
    component: CommentDateils
  },
  '/commentAdd': {
    component: CommentAdd
  },
  '/paying': {
    component: Paying
  },
  '/join': {
    component: Join
  },
  '/information': {
    component: Information
  },
  '/me': {
    component: Me
  }
})

router.start(App, 'app')
