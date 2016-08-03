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

export default (router) => router.map({
  '/': {
    name: 'index',
    component: Home
  },
  '/details': {
    name: 'details',
    component: Details
  },
  '/list': {
    name: 'list',
    component: List
  },
  '/commentList': {
    name: 'commentList',
    component: CommentList
  },
  '/commentDateils': {
    name: 'commentDateils',
    component: CommentDateils
  },
  '/commentAdd': {
    name: 'commentAdd',
    component: CommentAdd
  },
  '/paying': {
    name: 'paying',
    component: Paying
  },
  '/join': {
    name: 'paying',
    component: Join
  },
  '/information': {
    name: 'information',
    component: Information
  },
  '/me': {
    name: 'me',
    component: Me
  },
  '/order': {
    name: 'order',
    component: Order
  },
  '/orderdetail': {
    name: 'orderdetail',
    component: Orderdetail
  },
  '/paySuccess': {
    name: 'paySuccess',
    component: PaySuccess
  },
  '/payError': {
    name: 'payError',
    component: PayError
  },
  '/locations': {
    name: 'locations',
    component: Locations
  }
})
