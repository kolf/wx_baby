import {setLocalStorage, getLocalStorage} from '../utils/localStorage'
import randomN from '../utils/randomN'
import getUrlParam from '../utils/getUrlParam'

export function login () {
  const APPID = 'wx33979a347c26221f'
  const href = window.location.href
  if (!getLocalStorage('tokenPamrs').state) { // 跳微信登陆
    const STATE = randomN('stare_')
    setLocalStorage('tokenPamrs', {
      state: STATE
    })
    window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${APPID}&redirect_uri=${href}&response_type=code&scope=snsapi_base&state=${STATE}&connect_redirect=1#wechat_redirect`
  } else if (getUrlParam('code')) {
    let code = getUrlParam('code')
    setLocalStorage('user', {
      code: code
    })
  }
}
