/**
 * 格式化时间戳
 * 1461658688000 | formatTime "yyyy-MM-dd hh:mm:ss"
 */

exports.formatTime = (timeStamp, fmt) => {
  if (!timeStamp) {
    return ''
  }
  var _timeStamp = parseInt(timeStamp)
  if (_timeStamp.toString().length === 10) {
    _timeStamp *= 1000
  }
  !fmt && (fmt = 'yyyy-MM-dd')

  var t = new Date(_timeStamp)

  var o = {
    'M+': t.getMonth() + 1, // 月份
    'd+': t.getDate(),      // 日
    'h+': t.getHours(),     // 小时
    'm+': t.getMinutes(),   // 分
    's+': t.getSeconds(),   // 秒
    'q+': Math.floor((t.getMonth() + 3) / 3), // 季度
    'S': t.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (t.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  }
  return fmt
}

/**
 *  格式化评论发布时间
 */
exports.customTime = item => {
  let nowTime = new Date().getTime()
  let minuteTime = 60 * 1000
  let hourTime = 60 * minuteTime
  let dayTime = 24 * hourTime
  let monthTime = dayTime * 30
  let yearTime = monthTime * 12

  let publishTime = new Date(item).getTime()
  let historyTime = parseInt(nowTime) - parseInt(publishTime)
  let descTime
  if (historyTime >= yearTime) {
    descTime = parseInt(historyTime / yearTime) + '年前'
  } else if (historyTime < yearTime && historyTime >= monthTime) {
    descTime = parseInt(historyTime / monthTime) + '月前'
  } else if (historyTime < monthTime && historyTime >= dayTime) {
    descTime = parseInt(historyTime / dayTime) + '天前'
  } else if (historyTime < dayTime && historyTime >= hourTime) {
    descTime = parseInt(historyTime / hourTime) + '小时前'
  } else if (historyTime < hourTime && historyTime >= minuteTime) {
    descTime = parseInt(historyTime / minuteTime) + '分钟前'
  } else {
    descTime = '刚刚'
  }
  return descTime
}
