import Vue from 'vue'
import Vuex from 'vuex'
import contentList from './modules/contentList'
import projectColumnList from './modules/projectColumnList'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  modules: {
    contentList,
    projectColumnList
  }
})
