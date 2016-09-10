import Vue from 'vue'
import Vuex from 'vuex'
import projectList from './modules/projectList'
import homeProjectList from './modules/homeProjectList'
import projectColumnList from './modules/projectColumnList'
import commentList from './modules/commentList'
import commentAdd from './modules/commentAdd'
import like from './modules/like'
import user from './modules/user'
import projectDetail from './modules/projectDetail'
import order from './modules/order'
import captcha from './modules/captcha'
import loading from './modules/loading'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  modules: {
    homeProjectList,
    projectList,
    projectColumnList,
    commentList,
    commentAdd,
    like,
    user,
    projectDetail,
    order,
    captcha,
    loading
  }
})
