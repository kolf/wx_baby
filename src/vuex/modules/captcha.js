import {REQUEST_CAPTCHA, GET_CAPTCHA, GET_CAPTCHA_FAILURE, REQUEST_CHECK_CAPTCHA, CHECK_CAPTCHA, CHECK_CAPTCHA_FAILURE} from '../mutation-types'

const state = {
  isFetching: true,
  get: {
    msg: '',
    result: false
  },
  check: {
    checked: false,
    msg: ''
  }
}

const mutations = {
  [REQUEST_CAPTCHA] (state) {
    state.isFetching = true
  },
  [GET_CAPTCHA] (state, data) {
    state.isFetching = false
  },
  [GET_CAPTCHA_FAILURE] (state) {
    state.isFetching = false
  },
  [REQUEST_CHECK_CAPTCHA] (state) {
    state.isFetching = true
  },
  [CHECK_CAPTCHA] (state, data) {
    state.isFetching = false
    console.log(data)
    if (data.retcode === 'P0') {
      state.check.checked = true
    } else {
      state.check.checked = false
      state.check.msg = data.retmsg
    }
  },
  [CHECK_CAPTCHA_FAILURE] (state) {
    state.isFetching = false
  }
}

export default {
  state,
  mutations
}
