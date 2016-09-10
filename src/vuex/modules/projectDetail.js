import {REQUEST_PROJECT_DETAILS, GET_PROJECT_DETAILS, GET_PROJECT_DETAILS_FAILURE} from '../mutation-types'

const state = {
  isFetching: true,
  data: {},
  slide: []
}

const mutations = {
  [REQUEST_PROJECT_DETAILS] (state) {
    state.isFetching = true
  },
  [GET_PROJECT_DETAILS] (state, data) {
    let slide = []
    state.isFetching = false
    state.data = data.dataList[0]
    state.data.projectImgsInfoList.forEach((item) => {
      slide.push({
        img: item.picUrl,
        url: '',
        title: item.remark
      })
    })
    state.slide = slide
  },
  [GET_PROJECT_DETAILS_FAILURE] (state) {
    state.isFetching = false
  }
}

export default {
  state,
  mutations
}
