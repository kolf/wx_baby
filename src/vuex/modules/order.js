import {REQUEST_ORDER_LIST, GET_ORDER_LIST, GET_ORDER_LIST_FAILURE, ADD_ORDER_LIST} from '../mutation-types'

const state = {
  isFetching: true,
  list: []
}

const mutations = {
  [REQUEST_ORDER_LIST] (state) {
    state.isFetching = true
  },
  [GET_ORDER_LIST] (state, data) {
    state.isFetching = false
    state.list = data.orderList
  },
  [ADD_ORDER_LIST] (state, data) {
    state.isFetching = false
    state.list = state.list.concat(data.orderList)
  },
  [GET_ORDER_LIST_FAILURE] (state) {
    state.isFetching = false
  }
}

export default {
  state,
  mutations
}

