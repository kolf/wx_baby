import * as types from './mutation-types'

const API_ROOT = 'http://localhost:3000/'

// 获取活动列表
export const getContentList = function ({ dispatch }, data) {
  dispatch(types.REQUEST_CONTENT_LIST)
  this.$http.get(API_ROOT + 'getProjectInfoForTrips', {
    url: 'getProjectInfoForTrips',
    tokenPamrs: {
      clientId: 'S000001',
      group: 'G0001',
      state: 'S00001',
      tonken: 'EI211HJ3H1O32131O23HO14H1',
      userCode: 'U00000001'
    },
    urlPamrs: {
      projectColumnCode: 'PCC1000000001',
      pageIndex: data.pageIndex,
      pageSize: 5
    }
  }).then(response => {
    let data = response.data
    if (data.isSuccess) {
      dispatch(types.GET_CONTENT_LIST, data.data)
    } else {
      dispatch(types.GET_CONTENT_LIST_FAILURE, data.retmsg)
    }
  })
}

// 获取首页banner
export const getProjectColumnList = function ({ dispatch }, data) {
  dispatch(types.REQUEST_PROJECT_COLUMN_LIST)
  this.$http.get(API_ROOT + 'getProjectColumnList', {
    url: 'getProjectColumnList',
    tokenPamrs: {
      clientId: 'S000001',
      group: 'G0001',
      state: 'S00001',
      tonken: 'EI211HJ3H1O32131O23HO14H1',
      userCode: 'U00000001'
    },
    urlPamrs: {
      projectColumnCode: 'PCC1000000001',
      pageIndex: 0,
      pageSize: 5
    }
  }).then(response => {
    let data = response.data
    if (data.isSuccess) {
      dispatch(types.GET_PROJECT_COLUMN_LIST, data.data)
    } else {
      dispatch(types.GET_PROJECT_COLUMN_LIST_FAILURE, data.retmsg)
    }
  })
}

// 获取首页出游列表
export const getProjectTripList = function ({ dispatch }, data) {
  dispatch(types.REQUEST_PROJECT_TRIP_LIST)
  this.$http.get(API_ROOT + 'getProjectInfoForTrips', {
    url: 'getProjectInfoForTrips',
    tokenPamrs: {
      clientId: 'S000001',
      group: 'G0001',
      state: 'S00001',
      tonken: 'EI211HJ3H1O32131O23HO14H1',
      userCode: 'U00000001'
    },
    urlPamrs: {
      projectColumnCode: 'PCC1000000001',
      pageIndex: 0,
      pageSize: 5
    }
  }).then(response => {
    let data = response.data
    if (data.isSuccess) {
      dispatch(types.GET_PROJECT_TRIP_LIST, data.data)
    } else {
      dispatch(types.GET_PROJECT_TRIP_LIST_FAILURE, data.retmsg)
    }
  })
}

// 获取首页交流列表
export const getProjectInfoForInteract = function ({ dispatch }, data) {
  dispatch(types.REQUEST_PROJECT_INTERACT_LIST)
  this.$http.get(API_ROOT + 'getProjectInfoForInteract', {
    url: 'getProjectInfoForInteract',
    tokenPamrs: {
      clientId: 'S000001',
      group: 'G0001',
      state: 'S00001',
      tonken: 'EI211HJ3H1O32131O23HO14H1',
      userCode: 'U00000001'
    },
    urlPamrs: {
      projectColumnCode: 'PCC1000000001',
      pageIndex: 0,
      pageSize: 5
    }
  }).then(response => {
    let data = response.data
    if (data.isSuccess) {
      dispatch(types.GET_PROJECT_INTERACT_LIST, data.data)
    } else {
      dispatch(types.GET_PROJECT_INTERACT_LIST_FAILURE, data.retmsg)
    }
  })
}
