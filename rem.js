/*
 * @Descripttion:
 * @version: 1.0
 * @Author: userzero
 * @Date: 2019.08.08 15:28:11
 * @LastEditors: userzero
 * @LastEditTime: 2019.08.14 10:50:56
 */
;(function flexible(window, document) {
  var docEl = document.documentElement
  var dpr = window.devicePixelRatio || 1

  var hElmPx = docEl.clientWidth / 10
  var oldSize = hElmPx + 'px'
  if (screenOrientation()) {
    hElmPx = docEl.clientHeight / 10
    oldSize = hElmPx + 'px'
  }

  // adjust body font size
  function setBodyFontSize() {
    if (document.body) {
      document.body.style.fontSize = 12 * dpr + 'px'
    } else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  setBodyFontSize()

  // set 1rem = viewWidth / 10
  function setRemUnit() {
    if (screenOrientation()) {
      var rem = docEl.clientHeight / 10
      if (oldSize == docEl.style.fontSize) {
        return
      }
      docEl.style.fontSize = rem + 'px'
      return
    }
    var rem = docEl.clientWidth / 10
    docEl.style.fontSize = rem + 'px'
  }

  setRemUnit()

  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function(e) {
    if (e.persisted) {
      setRemUnit()
    }
  })

  // detect 0.5px supports
  if (dpr >= 2) {
    var fakeBody = document.createElement('body')
    var testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }

  function screenOrientation() {
    // //判断手机横竖屏状态：
    var supportOrientation =
      typeof window.orientation === 'number' &&
      typeof window.onorientationchange === 'object'

    var htmlNode = document.body.parentNode,
      orientation

    var updateOrientation = function() {
      if (supportOrientation) {
        orientation = window.orientation

        switch (orientation) {
          case 0:
            // 竖屏状态
            orientation = 'portrait'
            break
          case 180:
            // 竖屏状态
            orientation = 'portrait'
            break
          case 90:
            // 横屏状态
            orientation = 'landscape'
            break
          case -90:
            // 横屏状态
            orientation = 'landscape'
            break
          default:
            // 默认竖屏状态
            orientation = 'portrait'
            break
        }
      } else {
        orientation =
          window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
      }

      htmlNode.setAttribute('class', orientation)
    }

    if (supportOrientation) {
      window.addEventListener('orientationchange', updateOrientation, false)
    }

    updateOrientation()

    if (orientation == 'landscape') {
      return true
    } else if (orientation == 'portrait') {
      return false
    }
  }
})(window, document)
