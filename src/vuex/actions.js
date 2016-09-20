import * as types from './mutation-types'
import {getLocalStorage, setLocalStorage} from '../utils/localStorage'

// const API_ROOT = 'http://localhost:3000/'
const API_ROOT = 'http://115.28.188.91/sserver/resourceMain'

// 获取token
export const getToken = function ({ dispatch }, clientId, projectColumnCode, callback) {
  let STATE = getLocalStorage('urlPamrs').state
  this.$http.post('http://115.28.188.91/sserver/getOpenIdAndToken', {
    clientId: clientId,
    state: STATE,
    code: getLocalStorage('user').code
  }).then(response => {
    let data = response.json()
    if (data.isSuccess === true) {
      setLocalStorage('tokenPamrs', {
        state: STATE,
        clientId: clientId,
        token: data.token,
        userCode: data.userCode
      })
      setLocalStorage('user', {
        projectColumnCode: projectColumnCode,
      })
      setLocalStorage('wxUser', data.wxUserInfo)
      callback()
    }
  })
}

// 获取首页banner
export const getProjectColumnList = function ({ dispatch }, params) {
  dispatch(types.REQUEST_PROJECT_COLUMN_LIST)
  let tokenPamrs = Object.assign(getLocalStorage('tokenPamrs'), {group: params.group})
  this.$http.post(API_ROOT, {
    url: 'getProjectColumnList',
    tokenPamrs: JSON.stringify(tokenPamrs),
    urlPamrs: '{"projectColumnCode":"' + params.projectColumnCode + '","pageIndex":"1","pageSize":"10"}'
  }).then(response => {
    let data = response.json()
    if (data.isSuccess === true) {
      dispatch(types.GET_PROJECT_COLUMN_LIST, data.data)
      setLocalStorage('tokenPamrs', {
        token: data.data.token
      })
    } else {
      dispatch(types.GET_PROJECT_COLUMN_LIST_FAILURE, data.retmsg)
    }
  })
}

// 获取首页活动列表
export const getHomeProjectList = function ({ dispatch }, params) {
  dispatch(types.REQUEST_HOME_PROJECT_LIST)
  let tokenPamrs = Object.assign(getLocalStorage('tokenPamrs'), {group: params.group})
  this.$http.post(API_ROOT, {
    url: params.url,
    tokenPamrs: JSON.stringify(tokenPamrs),
    urlPamrs: '{"projectColumnCode":"' + params.projectColumnCode + '","pageIndex":"' + params.pageIndex + '","pageSize":"' + params.pageSize + '", "activePlace":"' + params.activePlace.value + '"}'
  }).then(response => {
    let data = response.json()
    if (data.isSuccess === true) {
      if (params.pageIndex > 1) {
        dispatch(types.ADD_HOME_PROJECT_LIST, data.data)
      } else {
        dispatch(types.GET_HOME_PROJECT_LIST, data.data)
      }
      if (data.data.total === 0) {
        dispatch(types.LOADING, {
          show: true,
          text: '暂无数据...',
          loading: false
        })
      } else {
        dispatch(types.LOADING, {
          show: false
        })
      }
      setLocalStorage('tokenPamrs', {
        token: data.data.token
      })
      setLocalStorage('user', {
        activePlace: params.activePlace
      })
    } else {
      dispatch(types.LOADING, {
        text: data.retmsg,
        loading: false,
        show: true
      })
    }
  })
}

// 获取活动列表
export const getProjectList = function ({ dispatch }, params) {
  dispatch(types.REQUEST_PROJECT_LIST)
  let tokenPamrs = Object.assign(getLocalStorage('tokenPamrs'), {group: params.group})
  this.$http.post(API_ROOT, {
    url: params.url,
    tokenPamrs: JSON.stringify(tokenPamrs),
    urlPamrs: '{"projectColumnCode":"' + params.projectColumnCode + '","pageIndex":"' + params.pageIndex + '","pageSize":"' + params.pageSize + '", "activePlace":"' + params.activePlace.value + '"}'
  }).then(response => {
    let data = response.json()
    if (data.isSuccess === true) {
      console.log(data.data.dataList.length)
      if (params.pageIndex > 1) {
        dispatch(types.ADD_PROJECT_LIST, data.data)
      } else {
        dispatch(types.GET_PROJECT_LIST, data.data)
      }
      if (data.data.total === 0) {
        dispatch(types.LOADING, {
          show: true,
          text: '暂无数据...',
          loading: false
        })
      } else if (data.data.dataList.length === 0) {
        dispatch(types.LOADING, {
          show: true,
          loading: false,
          text: '没有更多了...'
        })
      } else {
        dispatch(types.LOADING, {
          show: false
        })
      }
      setLocalStorage('tokenPamrs', {
        token: data.data.token
      })
      setLocalStorage('user', {
        activePlace: params.activePlace
      })
    } else {
      dispatch(types.LOADING, {
        text: data.retmsg,
        loading: false,
        show: true
      })
    }
  })
}

// 获取活动详情
export const getProjectInfoDetail = function ({ dispatch }, params) {
  dispatch(types.REQUEST_PROJECT_DETAILS)
  let tokenPamrs = Object.assign(getLocalStorage('tokenPamrs'), {group: params.group})
  this.$http.post(API_ROOT, {
    url: 'getProjectInfoDetail',
    tokenPamrs: JSON.stringify(tokenPamrs),
    urlPamrs: '{"projectId": "' + params.projectId + '","playStartTime": "' + params.playStartTime + '"}'
  }).then(response => {
    let data = response.json()
    if (data.isSuccess === true) {
      dispatch(types.GET_PROJECT_DETAILS, data.data)
      setLocalStorage('tokenPamrs', {
        token: data.data.token
      })
    } else {
      dispatch(types.GET_PROJECT_DETAILS_FAILURE, data.retmsg)
    }
  })
}

// 获取评论列表
export const getCommentList = function ({ dispatch }, params) {
  dispatch(types.REQUEST_COMMENT_LIST)
  let tokenPamrs = Object.assign(getLocalStorage('tokenPamrs'), {group: params.group})
  this.$http.post(API_ROOT, {
    url: 'getDiscussionList',
    tokenPamrs: JSON.stringify(tokenPamrs),
    urlPamrs: `{"projectId": "${params.projectId}","pageIndex": "${params.pageIndex}","rows": 10}`
  }).then(response => {
    let data = response.json()
    if (data.isSuccess === true) {
      if (params.pageIndex > 1) {
        dispatch(types.ADD_COMMENT_LIST, data.data)
      } else {
        dispatch(types.GET_COMMENT_LIST, data.data)
      }
      if (data.data.total === 0) {
        dispatch(types.LOADING, {
          text: '暂无评论...',
          loading: false,
          show: true
        })
      }
      setLocalStorage('tokenPamrs', {
        token: data.data.token
      })
    } else {
      dispatch(types.GET_COMMENT_LIST_FAILURE, data.retmsg)
    }
  })
}

// 添加评论
export const setDiscussion = function ({ dispatch }, params) {
  dispatch(types.REQUEST_COMMENT)
  let tokenPamrs = Object.assign(getLocalStorage('tokenPamrs'), {group: params.group})
  this.$http.post(API_ROOT, {
    url: 'saveDiscussion',
    tokenPamrs: JSON.stringify(tokenPamrs),
    urlPamrs: `{"projectId": "${params.projectId}","userId": "${params.userId}","point": "${params.point}","comment": "${params.comment}","imagePaths": "${params.imagePaths}"}`
  }).then(response => {
    let data = response.json()
    if (data.isSuccess === true) {
      dispatch(types.ADD_COMMENT, data.data)
      setLocalStorage('tokenPamrs', {
        token: data.data.token
      })
    } else {
      dispatch(types.ADD_COMMENT_FAILURE, data.retmsg)
    }
  })
}

// 删除评论
export const delDiscussion = function ({ dispatch }, params) {
  dispatch(types.REQUEST_COMMENT)
  let tokenPamrs = Object.assign(getLocalStorage('tokenPamrs'), {group: params.group})
  this.$http.get(API_ROOT, {
    url: 'delDiscussion',
    tokenPamrs: JSON.stringify(tokenPamrs),
    urlPamrs: `{"udId": "${params.udId}"}`
  }).then(response => {
    let data = response.data
    if (data.isSuccess === true) {
      dispatch(types.REMOVE_COMMENT, data.data)
      setLocalStorage('tokenPamrs', {
        token: data.data.token
      })
    } else {
      dispatch(types.REMOVE_COMMENT_FAILURE, data.retmsg)
    }
  })
}

// 更新赞
export const setAgreement = function ({ dispatch }, params) {
  dispatch(types.REQUEST_LIKE)
  let tokenPamrs = Object.assign(getLocalStorage('tokenPamrs'), {group: params.group})
  this.$http.get(API_ROOT + 'saveAgreement', {
    url: 'saveAgreement',
    tokenPamrs: JSON.stringify(tokenPamrs),
    urlPamrs: `{"udId": "${params.udId}","userId": "${params.userId}","statusId": "${params.statusId}"}`
  }).then(response => {
    let data = response.json()
    if (data.isSuccess === true) {
      dispatch(types.ADD_LIKE, data.data)
      setLocalStorage('tokenPamrs', {
        token: data.data.token
      })
    } else {
      dispatch(types.GET_LIKE_FAILURE, data.retmsg)
    }
  })
}

// 注册用户/更新
export const userRegister = function ({ dispatch }, params) {
  dispatch(types.REQUEST_SET_USERINFO)
  let tokenPamrs = Object.assign(getLocalStorage('tokenPamrs'), {group: params.group})
  this.$http.post(API_ROOT, {
    url: 'userRegister',
    tokenPamrs: JSON.stringify(tokenPamrs),
    urlPamrs: params.urlPamrs
  }).then(response => {
    let data = response.json()
    if (data.isSuccess === true) {
      dispatch(types.SET_USERINFO, data.data)
      setLocalStorage('tokenPamrs', {
        token: data.data.token
      })
    } else {
      dispatch(types.SET_USERINFO_FAILURE, data.retmsg)
    }
  })
}

// 获取用户信息
export const queryUserInfos = function ({ dispatch }, params) {
  dispatch(types.REQUEST_GET_USERINFO)
  let tokenPamrs = Object.assign(getLocalStorage('tokenPamrs'), {group: params.group})
  this.$http.post(API_ROOT, {
    url: 'getUserInfo',
    tokenPamrs: JSON.stringify(tokenPamrs),
    urlPamrs: `{"userWeChat": "${getLocalStorage('wxUser').openId}"}`
  }).then(response => {
    let data = response.json()
    if (data.isSuccess === true) {
      dispatch(types.GET_USERINFO, data.data)
    } else {
      dispatch(types.GET_USERINFO_FAILURE, data.retmsg)
    }
  })
}

// 获取验证码
export const getMsgCode = function ({ dispatch }, params) {
  dispatch(types.REQUEST_CAPTCHA)
  let tokenPamrs = Object.assign(getLocalStorage('tokenPamrs'), {group: params.group})
  this.$http.post(API_ROOT, {
    url: 'getMsgCode',
    tokenPamrs: JSON.stringify(tokenPamrs),
    urlPamrs: '{"userMobile":"' + params.userMobile + '"}'
  }).then(response => {
    let data = response.json()
    if (data.isSuccess === true) {
      dispatch(types.GET_CAPTCHA, data.data)
      setLocalStorage('tokenPamrs', {
        token: data.data.token
      })
    } else {
      dispatch(types.GET_CAPTCHA_FAILURE, data.retmsg)
    }
  })
}

// 校验验证码
export const checkMsgCode = function ({ dispatch }, params) {
  dispatch(types.REQUEST_CHECCAPTCHA)
  let tokenPamrs = Object.assign(getLocalStorage('tokenPamrs'), {group: params.group})
  this.$http.post(API_ROOT, {
    url: 'checkMsgCode',
    tokenPamrs: JSON.stringify(tokenPamrs),
    urlPamrs: '{"userMobile":"' + params.userMobile + '", "msgCode":"' + params.msgCode + '"}'
  }).then(response => {
    let data = response.json()
    if (data.isSuccess === true) {
      if (data.retcode === 'P0') {
        this.$router.go({name: 'information', params: {userMobile: params.userMobile}})
      }
      setLocalStorage('tokenPamrs', {
        token: data.data.token
      })
    } else {
      dispatch(types.CHECK_CAPTCHA_FAILURE, data.retmsg)
    }
  })
}

// 订单退款/取消
export const orderRefund = function ({ dispatch }, params) {
  dispatch(types.REQUEST_CANCEL_ORDER)
  let tokenPamrs = Object.assign(getLocalStorage('tokenPamrs'), {group: params.group})
  this.$http.get(API_ROOT, {
    url: 'orderRefund',
    tokenPamrs: JSON.stringify(tokenPamrs),
    urlPamrs: `{"orderNo": ${params.orderNo},"orderRemark": ${params.orderRemark}}`
  }).then(response => {
    let data = response.json()
    if (data.isSuccess === true) {
      dispatch(types.CANCEL_ORDER, data.data)
      setLocalStorage('tokenPamrs', {
        token: data.data.token
      })
    } else {
      dispatch(types.CANCEL_ORDER_FAILURE, data.retmsg)
    }
  })
}

// 查询订单
export const queryOrder = function ({ dispatch }, params) {
  dispatch(types.REQUEST_GET_ORDER_LIST)
  let tokenPamrs = Object.assign(getLocalStorage('tokenPamrs'), {group: params.group})
  let orderStatus = ''
  if (params.orderType === 'wait') {
    orderStatus = 1
  } else if (params.orderType === 'complete') {
    orderStatus = 2
  }
  this.$http.post(API_ROOT, {
    url: 'queryOrder',
    tokenPamrs: JSON.stringify(tokenPamrs),
    urlPamrs: `{"orderUserId": "${params.orderUserId}","orderQueryStartTime": "${params.orderQueryStartTime}","orderQueryEndTime": "${params.orderQueryEndTime}","orderStatus": "${orderStatus}","queryType": 1}`
  }).then(response => {
    let data = response.json()
    if (data.isSuccess === true) {
      if (params.pageIndex > 1) {
        dispatch(types.ADD_ORDER_LIST, data.data)
      } else {
        dispatch(types.GET_ORDER_LIST, data.data)
      }
      setLocalStorage('tokenPamrs', {
        token: data.data.token
      })
    } else {
      dispatch(types.GET_ORDER_LIST_FAILURE, data.retmsg)
      dispatch(types.LOADING, {
        text: data.retmsg,
        loading: false,
        show: true
      })
    }
  })
}

// 创建订单
export const createorder = function ({ dispatch }, params) {
  dispatch(types.REQUEST_ADD_ORDER)
  let tokenPamrs = Object.assign(getLocalStorage('tokenPamrs'), {group: params.group})
  this.$http.get(API_ROOT, {
    url: 'createorder',
    tokenPamrs: JSON.stringify(tokenPamrs),
    urlPamrs: `{"orderAmount": ${params.orderAmount},"orderCount": ${params.orderCount},"orderIntegral": ${params.orderIntegral},"orderTallyAmount": ${params.orderTallyAmount},"orderIsIntegral": ${params.orderIsIntegral},"orderFuncCode": ${params.orderFuncCode},"orderPayChannel": ${params.orderPayChannel},"orderUserId": ${params.orderUserId},"orderStakeholderUserId": ${params.orderIsIntegral},"orderProjectId": ${params.orderProjectId},"eorders": ${params.eorders},"orderFee": ${params.orderFee}}`
  }).then(response => {
    let data = response.json()
    if (data.isSuccess === true) {
      dispatch(types.ADD_ORDER, data.data)
    } else {
      dispatch(types.ADD_ORDER_FAILURE, data.retmsg)
    }
  })
}

// 更新订单
export const uporderStatus = function ({ dispatch }, params) {
  dispatch(types.REQUEST_UPDATE_ORDER)
  let tokenPamrs = Object.assign(getLocalStorage('tokenPamrs'), {group: params.group})
  this.$http.get(API_ROOT, {
    url: 'uporderStatus',
    tokenPamrs: JSON.stringify(tokenPamrs),
    urlPamrs: {
      orderNo: '',
      orderStatus: '',
      orderRemark: ''
    }
  }).then(response => {
    let data = response.json()
    if (data.isSuccess === true) {
      dispatch(types.UPDATE_ORDER, data.data)
    } else {
      dispatch(types.UPDATE_ORDER_FAILURE, data.retmsg)
    }
  })
}

// 订单支付
export const payorder = function ({ dispatch }, params) {
  dispatch(types.REQUEST_PAY_ORDER)
  let tokenPamrs = Object.assign(getLocalStorage('tokenPamrs'), {group: params.group})
  this.$http.get(API_ROOT, {
    url: 'payorder',
    tokenPamrs: JSON.stringify(tokenPamrs),
    urlPamrs: {
      orderNo: '',
      orderRemark: ''
    }
  }).then(response => {
    let data = response.json()
    if (data.isSuccess === true) {
      dispatch(types.PAY_ORDER, data.data)
    } else {
      dispatch(types.PAY_ORDER_FAILURE, data.retmsg)
    }
  })
}
