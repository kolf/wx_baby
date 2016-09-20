export default {
  init (Vue) {
    Vue.http.post('http://115.28.188.91/sserver/getWxConfig', {pageUrl: window.location.href.split('#')[0]}).then(res => {
      let data = res.json()
      window.wx.config({
        appId: data.appId,
        timestamp: data.timestamp,
        nonceStr: data.nonceStr,
        signature: data.signature,
        jsApiList: [
          'chooseImage',
          'uploadImage',
          'downloadImage',
          'openLocation',
          'getLocation',
          'chooseWXPay',
          'addCard',
          'chooseCard',
          'openCard',
          'closeWindow'
        ]
      })
    })
  }
}
