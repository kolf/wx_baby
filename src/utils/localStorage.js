export default {
  get (key) {
    return JSON.parse(window.localStorage.getItem(key) || '[]')
  },
  set (key, data) {
    window.localStorage.setItem(key, JSON.stringify(data))
  },
  has (key) {
    return !!window.localStorage.getItem(key)
  },
  remove (key) {
    window.localStorage.removeItem(key)
  }
}
