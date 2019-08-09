/*
 * @Descripttion: 公共函数
 * @version: 1.0
 * @Author: userzero
 * @Date: 2019-07-29 11:43:59
 * @LastEditors: userzero
 * @LastEditTime: 2019-08-09 18:45:58
 */

export const findIndex = function(ary, fn) {
  if (ary.findIndex) {
    return ary.findIndex(fn)
  }
  /* istanbul ignore next */
  let index = -1
  /* istanbul ignore next */
  ary.some(function(item, i, ary) {
    const ret = fn.call(this, item, i, ary)
    if (ret) {
      index = i
      return ret
    }
  })
  /* istanbul ignore next */
  return index
}

export const deepAssign = function(to, from) {
  for (let key in from) {
    if (!to[key] || typeof to[key] !== 'object') {
      to[key] = from[key]
    } else {
      deepAssign(to[key], from[key])
    }
  }
}
export const getDateDiff = function(dateStr) {
  let ftime = formatDateTime('yyyy-MM-dd hh:mm:ss', dateStr)
  let publishTime = Date.parse(ftime) / 1000,
    d_seconds,
    d_minutes,
    d_hours,
    d_days,
    timeNow = parseInt(new Date().getTime() / 1000),
    d,
    date = new Date(publishTime * 1000),
    Y = date.getFullYear(),
    M = date.getMonth() + 1,
    D = date.getDate(),
    H = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds()
  //小于10的在前面补0
  if (M < 10) {
    M = '0' + M
  }
  if (D < 10) {
    D = '0' + D
  }
  if (H < 10) {
    H = '0' + H
  }
  if (m < 10) {
    m = '0' + m
  }
  if (s < 10) {
    s = '0' + s
  }

  d = timeNow - publishTime
  d_days = parseInt(d / 86400)
  d_hours = parseInt(d / 3600)
  d_minutes = parseInt(d / 60)
  d_seconds = parseInt(d)

  if (d_days > 0 && d_days < 3) {
    return d_days + '天前'
  } else if (d_days <= 0 && d_hours > 0) {
    return d_hours + '小时前'
  } else if (d_hours <= 0 && d_minutes > 0) {
    return d_minutes + '分钟前'
  } else if (d_seconds < 60) {
    if (d_seconds <= 0) {
      return '刚刚发表'
    } else {
      return d_seconds + '秒前'
    }
  } else if (d_days >= 3 && d_days < 30) {
    return M + '-' + D + ' ' + H + ':' + m
  } else if (d_days >= 30) {
    return Y + '-' + M + '-' + D + ' ' + H + ':' + m
  }
}
/**
 * @name: 格式化时间函数
 * @test: test font
 * @msg:
 * @param {type}
 * @return: 格式为yyyy-MM-dd hh:mm:ss的时间
 */
export const formatDateTime = function(fmt, dateTime) {
  let date = new Date(dateTime)
  let Y = date.getFullYear(),
    M = date.getMonth() + 1,
    D = date.getDate(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds()
  //小于10的在前面补0
  if (date.getMonth() + 1 < 10) {
    M = '0' + M
  }
  if (D < 10) {
    D = '0' + D
  }
  if (h < 10) {
    h = '0' + h
  }
  if (m < 10) {
    m = '0' + m
  }
  if (s < 10) {
    s = '0' + s
  }
  switch (fmt) {
    case fmt:
      'yyyy-MM-dd hh:mm:ss'
      return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s
    default:
      break
  }
}
export const screenOrientation = function(h, v) {
  //判断手机横竖屏状态：
  if (window.orientation == 180 || window.orientation == 0) {
    // 竖屏状态
    v()
  }
  if (window.orientation == 90 || window.orientation == -90) {
    // 横屏状态
    h()
  }
  window.addEventListener(
    'onorientationchange' in window ? 'orientationchange' : 'resize',
    screenOrientation,
    false
  )
}
