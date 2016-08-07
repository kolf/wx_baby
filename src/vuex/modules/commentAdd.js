import {REQUEST_COMMENT, ADD_COMMENT, ADD_COMMENT_FAILURE} from '../mutation-types'

const state = {
  isFetching: true,
  token: ''
}

const mutations = {
  [REQUEST_COMMENT] (state) {
    state.isFetching = true
  },
  [ADD_COMMENT] (state, data) {
    state.isFetching = false
  },
  [ADD_COMMENT_FAILURE] (state) {
    state.isFetching = false
  }
}

export default {
  state,
  mutations
}
