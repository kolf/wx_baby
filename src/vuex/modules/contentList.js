import {REQUEST_CONTENT_LIST, GET_CONTENT_LIST, GET_CONTENT_LIST_FAILURE} from '../mutation-types'

const state = {
  isFetching: true,
  dataList: [],
  token: '',
  pageIndex: 0,
  total: 0
}

const mutations = {
  [REQUEST_CONTENT_LIST] (state) {
    state.isFetching = true
  },
  [GET_CONTENT_LIST] (state, data) {
    state.isFetching = false
    state.dataList = state.dataList.concat(data.dataList)
    state.token = data.token
    state.total = data.total
    state.pageIndex += 1
  },
  [GET_CONTENT_LIST_FAILURE] (state) {
    state.isFetching = false
  }
}

export default {
  state,
  mutations
}
