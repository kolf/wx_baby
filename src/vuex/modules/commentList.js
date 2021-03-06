import {REQUEST_COMMENT_LIST, GET_COMMENT_LIST, GET_COMMENT_LIST_FAILURE, ADD_COMMENT_LIST} from '../mutation-types'

const state = {
  isFetching: true,
  dataList: []
}

const mutations = {
  [REQUEST_COMMENT_LIST] (state) {
    state.isFetching = true
  },
  [GET_COMMENT_LIST] (state, data) {
    state.isFetching = false
    state.dataList = data.dataList
  },
  [ADD_COMMENT_LIST] (state, data) {
    state.isFetching = false
    state.dataList = state.dataList.concat(data.dataList)
  },
  [GET_COMMENT_LIST_FAILURE] (state) {
    state.isFetching = false
  }
}

export default {
  state,
  mutations
}
