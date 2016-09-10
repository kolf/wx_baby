import {REQUEST_PROJECT_LIST, GET_PROJECT_LIST, GET_PROJECT_LIST_FAILURE, ADD_PROJECT_LIST} from '../mutation-types'

const state = {
  isFetching: true,
  dataList: []
}

const mutations = {
  [REQUEST_PROJECT_LIST] (state) {
    state.isFetching = true
  },
  [GET_PROJECT_LIST] (state, data) {
    state.isFetching = false
    state.dataList = data.dataList
  },
  [ADD_PROJECT_LIST] (state, data) {
    state.isFetching = false
    state.dataList = state.dataList.concat(data.dataList)
  },
  [GET_PROJECT_LIST_FAILURE] (state) {
    state.isFetching = false
  }
}

export default {
  state,
  mutations
}
