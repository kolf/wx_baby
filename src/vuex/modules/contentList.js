import {REQUEST_CONTENT_LIST, GET_CONTENT_LIST, GET_CONTENT_LIST_FAILURE, ADD_CONTENT_LIST} from '../mutation-types'

const state = {
  isFetching: true,
  dataList: [],
  token: ''
}

const mutations = {
  [REQUEST_CONTENT_LIST] (state) {
    state.isFetching = true
  },
  [GET_CONTENT_LIST] (state, data) {
    state.isFetching = false
    state.token = data.token
    state.dataList = data.dataList
  },
  [ADD_CONTENT_LIST] (state, data) {
    state.isFetching = false
    state.token = data.token
    state.dataList = state.dataList.concat(data.dataList)
  },
  [GET_CONTENT_LIST_FAILURE] (state) {
    state.isFetching = false
  }
}

export default {
  state,
  mutations
}