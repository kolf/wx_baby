import {
  SHOW_MSG,
  HIDE_MSG
} from '../mutation-types'

const state = {
  message: {
    type: 'text',
    content: '',
    time: 3000,
    width: '20em',
    show: false
  }
}

const mutations = {
  [SHOW_MSG] (state, action) {
    Object.assign(state.message, action)
  },
  [HIDE_MSG] (state, action) {
    state.message = {
      show: false
    }
  }
}

export default {
  state,
  mutations
}
