import { SET_TOKEN, SET_USER } from '../mutation-types'
import localStorage from '../../utils/localStorage'

const state = {
  tokenPamrs: localStorage.get('tokenPamrs'),
  user: localStorage.get('user')
}

const mutations = {
  [SET_TOKEN] (state, data) {
    Object.assign(state.tokenPamrs, data)
    localStorage.set('tokenPamrs', state.tokenPamrs)
  },
  [SET_USER] (state, data) {
    Object.assign(state.user, data)
    localStorage.set('user', state.user)
  }
}

export default {
  state,
  mutations
}
