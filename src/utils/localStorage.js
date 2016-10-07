export default {
  get (key) {
    return JSON.parse(window.localStorage.getItem(key) || '[]')
  },
  set (key, data) {
    window.localStorage.setItem(key, JSON.stringify(data))
  },
  has (key) {
    var d = this.get(key)
    if (window.typeof(d) === 'undefined' || d == null) {
      return false
    } else {
      return true
    }
  }
}
