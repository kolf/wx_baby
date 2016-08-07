import Vue from 'vue'
import Vuex from 'vuex'
import contentList from './modules/contentList'
import projectColumnList from './modules/projectColumnList'
import projectInteractList from './modules/projectInteractList'
import projectTripList from './modules/projectTripList'
import commentList from './modules/commentList'
import commentAdd from './modules/commentAdd'
import like from './modules/like'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  modules: {
    contentList,
    projectColumnList,
    projectInteractList,
    projectTripList,
    commentList,
    commentAdd,
    like
  }
})
