import localStorage from '../utils/localStorage'
import randomN from '../utils/randomN'

export default {
  authentication: localStorage.has('code'),
  login (query) {
    const APPID = 'wx33979a347c26221f'
    const href = window.escape(`http://115.28.188.91?projectIndex=${query.projectIndex}`)
    const STATE = randomN('stare_')
    localStorage.set('tokenPamrs', {
      state: STATE
    })
    window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${APPID}&redirect_uri=${href}&response_type=code&scope=snsapi_base&state=${STATE}&connect_redirect=1#wechat_redirect`
  },
  logout () {
    localStorage.remove('code')
  }
}
