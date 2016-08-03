import {REQUEST_PROJECT_COLUMN_LIST, GET_PROJECT_COLUMN_LIST, GET_PROJECT_COLUMN_LIST_FAILURE} from '../mutation-types'

const state = {
  isFetching: true,
  dataList: [],
  token: ''
}

const mutations = {
  [REQUEST_PROJECT_COLUMN_LIST] (state) {
    state.isFetching = true
  },
  [GET_PROJECT_COLUMN_LIST] (state, data) {
    state.isFetching = false
    state.dataList = data.dataList
    state.dataList.map((item) => {
      item.img = item.picUrl
      item.title = item.picRemark
      item.url = item.picUri
      return item
    })

    state.token = data.token
  },
  [GET_PROJECT_COLUMN_LIST_FAILURE] (state) {
    state.isFetching = false
  }
}

export default {
  state,
  mutations
}
