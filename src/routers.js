export default (router) => router.map({
  '/projectIndex/:projectColumnCode': {
    name: 'index',
    component: require('./components/Home')
  },
  '/details/:projectId/:playStartTime': {
    name: 'details',
    component: require('./components/Details')
  },
  '/list/:projectColumnCode': {
    name: 'list',
    component: require('./components/List')
  },
  '/comment/:projectId': {
    name: 'comment',
    component: require('./components/CommentList')
  },
  '/commentDateils': {
    name: 'commentDateils',
    component: require('./components/CommentDateils')
  },
  '/commentAdd/:projectId': {
    name: 'commentAdd',
    component: require('./components/CommentAdd')
  },
  '/paying': {
    name: 'paying',
    component: require('./components/Paying')
  },
  '/join': {
    name: 'join',
    component: require('./components/Join')
  },
  '/agreement': {
    name: 'agreement',
    component: require('./components/Agreement')
  },
  '/information/:userMobile': {
    name: 'information',
    component: require('./components/Information')
  },
  '/user/:userWeChat': {
    name: 'user',
    component: require('./components/Me')
  },
  '/order/:userId/:orderType': {
    name: 'order',
    component: require('./components/Order')
  },
  '/orderdetail': {
    name: 'orderdetail',
    component: require('./components/Orderdetail')
  },
  '/paySuccess': {
    name: 'paySuccess',
    component: require('./components/PaySuccess')
  },
  '/payError': {
    name: 'payError',
    component: require('./components/PayError')
  },
  '/locations': {
    name: 'locations',
    component: require('./components/Locations')
  }
})
