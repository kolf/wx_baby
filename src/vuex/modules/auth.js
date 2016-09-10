import { SET_TOKEN, SET_USER } from '../mutation-types'
import { setLocalStorage, getLocalStorage } from '../../utils/localStorage'

const state = {
  tokenPamrs: getLocalStorage('tokenPamrs'),
  user: getLocalStorage('user')
}

const mutations = {
  [SET_TOKEN] (state, data) {
    console.log(state.tokenPamrs)
    Object.assign(state.tokenPamrs, data)
    console.log(JSON.stringify(state.tokenPamrs))
    setLocalStorage('tokenPamrs', state.tokenPamrs)
  },
  [SET_USER] (state, data) {
    Object.assign(state.user, data)
    setLocalStorage('user', state.user)
  }
}

export default {
  state,
  mutations
}

// import createPersist from 'vuex-localstorage'
// import {SET_TOKEN} from '../mutation-types'
//
// const token = createPersist('TOKEN', {
//   tokenPamrs: {
//     clientId: 'eqy123456'
//   },
//   users: {
//     activePlace: {
//       name: '北京',
//       value: '110100'
//     }
//   }
// })
//
// const state = {
//   tokenPamrs: token.get().tokenPamrs,
//   users: token.get().users
// }
//
// const mutations = {
//   [SET_TOKEN] (state, tokenObj, userObj) {
//     Object.assign(state.tokenPamrs, tokenObj)
//     token.set(state.tokenPamrs)
//   }
// }
//
// export default {
//   state,
//   mutations
// }
