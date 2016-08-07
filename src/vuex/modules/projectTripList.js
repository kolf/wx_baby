import {REQUEST_PROJECT_TRIP_LIST, GET_PROJECT_TRIP_LIST, GET_PROJECT_TRIP_LIST_FAILURE} from '../mutation-types'

const state = {
  isFetching: true,
  dataList: [],
  token: ''
}

const mutations = {
  [REQUEST_PROJECT_TRIP_LIST] (state) {
    state.isFetching = true
  },
  [GET_PROJECT_TRIP_LIST] (state, data) {
    state.isFetching = false
    state.dataList = data.dataList
    state.token = data.token
  },
  [GET_PROJECT_TRIP_LIST_FAILURE] (state) {
    state.isFetching = false
  }
}

export default {
  state,
  mutations
}
