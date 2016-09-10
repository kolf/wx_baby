export function getLocalStorage (name, type) {
  let storage = window.localStorage.getItem(name)
  storage = storage ? JSON.parse(window.localStorage.getItem(name)) : {}
  return storage
}

export function setLocalStorage (name, data) {
  let storage = window.localStorage.getItem(name)
  storage = storage ? JSON.parse(window.localStorage.getItem(name)) : {}
  storage = JSON.stringify(Object.assign(storage, data))
  window.localStorage.setItem(name, storage)
}

export function removeLocalStorage (name) {
  window.localStorage.removeItem(name)
}

// export default {
//   setToken,
//   getToken
// }

// import { SET_ENV } from '../mutation-types'
//
// const state = {
//   tokenPamrs: {
//     clientId: 'eqy123456'
//   },
//   users: {
//     activePlace: {
//       name: '北京',
//       value: '110100'
//     }
//   }
// }
//
// const mutations = {
//   [SET_ENV] (state, data) {
//     Object.assign(state, data)
//   }
// }
//
// export default {
//   state,
//   mutations
// }

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
