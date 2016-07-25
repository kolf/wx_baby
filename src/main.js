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
import Order from './components/Order'
import Orderdetail from './components/Orderdetail'
import PaySuccess from './components/PaySuccess'
import PayError from './components/PayError'
import Locations from './components/Locations'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(Faker, {locale: 'zh_CN'})
Vue.use(Router)
Vue.config.devtools = true

const router = new Router({
  history: true,
  saveScrollPosition: true
})

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
  },
  '/order': {
    component: Order
  },
  '/orderdetail': {
    component: Orderdetail
  },
  '/paySuccess': {
    component: PaySuccess
  },
  '/payError': {
    component: PayError
  },
  '/locations': {
    component: Locations
  }
})

router.start(App, 'app')
