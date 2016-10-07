export default function (name) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  let r = window.location.search.substr(1).match(reg)
  // let r = window.location.href.split('?')[1].match(reg)
  if (r != null) {
    return window.unescape(r[2])
  }
  return null
}
