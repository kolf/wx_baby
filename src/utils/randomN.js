export default function (type) {
  type = type || ''
  return type + (Math.random() + '').replace('.', '') + Date.now()
}
