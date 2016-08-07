import {REQUEST_LIKE, REMOVE_LIKE, REMOVE_LIKE_FAILURE, ADD_LIKE} from '../mutation-types'

const state = {
  isFetching: true,
  token: '',
  isLike: false
}

const mutations = {
  [REQUEST_LIKE] (state) {
    state.isFetching = true
  },
  [REMOVE_LIKE] (state, data) {
    state.isFetching = false
    state.isLike = false
    state.token = data.token
  },
  [ADD_LIKE] (state, data) {
    state.isFetching = false
    state.isLike = true
    state.token = data.token
  },
  [REMOVE_LIKE_FAILURE] (state) {
    state.isFetching = false
  }
}

export default {
  state,
  mutations
}
