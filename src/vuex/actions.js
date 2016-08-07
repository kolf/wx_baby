import * as types from './mutation-types'

const API_ROOT = 'http://192.168.2.102:3000/'

// 获取活动列表
export const getCOMMENTList = function ({ dispatch }, data) {
  dispatch(types.REQUEST_COMMENT_LIST)
  let url = data.url === 'interact' ? 'getProjectInfoForInteract' : 'getProjectInfoForTrips'
  let pageIndex = data.pageIndex
  this.$http.get(API_ROOT + url, {
    url: url,
    tokenPamrs: {
      clientId: 'S000001',
      group: 'G0001',
      state: 'S00001',
      tonken: 'EI211HJ3H1O32131O23HO14H1',
      userCode: 'U00000001'
    },
    urlPamrs: {
      projectColumnCode: 'PCC1000000001',
      pageIndex: pageIndex,
      pageSize: 8
    }
  }).then(response => {
    let data = response.data
    if (data.isSuccess) {
      if (pageIndex) {
        dispatch(types.ADD_COMMENT_LIST, data.data)
      } else {
        dispatch(types.GET_COMMENT_LIST, data.data)
      }
    } else {
      dispatch(types.GET_COMMENT_LIST_FAILURE, data.retmsg)
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
export const getProjectInteractList = function ({ dispatch }, data) {
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

// 获取评论列表
export const getCommentList = function ({ dispatch }, data) {
  dispatch(types.REQUEST_COMMENT_LIST)
  let pageIndex = data.pageIndex
  this.$http.get(API_ROOT + 'getDiscussionList', {
    url: 'getDiscussionList',
    tokenPamrs: {
      clientId: 'S000001',
      group: 'G0001',
      state: 'S00001',
      tonken: 'EI211HJ3H1O32131O23HO14H1',
      userCode: 'U00000001'
    },
    urlPamrs: {
      projectId: data.projectId,
      pageIndex: pageIndex,
      rows: 5
    }
  }).then(response => {
    let data = response.data
    if (data.isSuccess) {
      if (pageIndex) {
        dispatch(types.ADD_COMMENT_LIST, data.data)
      } else {
        dispatch(types.GET_COMMENT_LIST, data.data)
      }
    } else {
      dispatch(types.GET_COMMENT_LIST_FAILURE, data.retmsg)
    }
  })
}

// 更新赞
export const setAgreement = function ({ dispatch }, data) {
  dispatch(types.REQUEST_LIKE)
  this.$http.get(API_ROOT + 'saveAgreement', {
    url: 'saveAgreement',
    tokenPamrs: {
      clientId: 'S000001',
      group: 'G0001',
      state: 'S00001',
      tonken: 'EI211HJ3H1O32131O23HO14H1',
      userCode: 'U00000001'
    },
    urlPamrs: {
      udId: data.udId,
      userId: data.userId,
      statusId: data.statusId
    }
  }).then(response => {
    let data = response.data
    if (data.isSuccess) {
      dispatch(types.ADD_LIKE, data.data)
    } else {
      dispatch(types.GET_LIKE_FAILURE, data.retmsg)
    }
  })
}

// 添加评论
export const setDiscussion = function ({ dispatch }, data) {
  dispatch(types.REQUEST_COMMENT)
  this.$http.get(API_ROOT + 'saveDiscussion', {
    url: 'saveDiscussion',
    tokenPamrs: {
      clientId: 'S000001',
      group: 'G0001',
      state: 'S00001',
      tonken: 'EI211HJ3H1O32131O23HO14H1',
      userCode: 'U00000001'
    },
    urlPamrs: {
      projectId: data.projectId,
      userId: data.userId,
      point: data.point,
      comment: data.comment,
      imagePaths: data.imagePaths
    }
  }).then(response => {
    let data = response.data
    if (data.isSuccess) {
      dispatch(types.ADD_COMMENT, data.data)
    } else {
      dispatch(types.ADD_COMMENT_FAILURE, data.retmsg)
    }
  })
}
