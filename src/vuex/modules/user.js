import {REQUEST_GET_USERINFO, GET_USERINFO, GET_USERINFO_FAILURE, REQUEST_SET_USERINFO, SET_USERINFO, SET_USERINFO_FAILURE} from '../mutation-types'

const state = {
  isFetching: true,
  userInfo: {
    userHeadImg: 'null',
    address: ['110000', '110100']
  }
}

const mutations = {
  [REQUEST_GET_USERINFO] (state) {
    state.isFetching = true
  },
  [GET_USERINFO] (state, data) {
    state.isFetching = false
    state.userInfo = Object.assign({}, state.userInfo, data.jsonData)
  },
  [GET_USERINFO_FAILURE] (state) {
    state.isFetching = false
  },
  [REQUEST_SET_USERINFO] (state) {
    state.isFetching = true
  },
  [SET_USERINFO] (state, data) {
    state.isFetching = false
  },
  [SET_USERINFO_FAILURE] (state) {
    state.isFetching = false
  }
}

export default {
  state,
  mutations
}
