import { LOADING } from '../mutation-types'

const state = {
  loading: true,
  text: '加载中...',
  show: true
}

const mutations = {
  [LOADING] (state, data) {
    state.show = data.show
    state.text = data.text
    state.loading = data.loading
  }
}

export default {
  state,
  mutations
}
