/*
 * @Descripttion: 合并api到此模块中
 * @version: 1.0
 * @Author: userzero
 * @Date: 2019-07-30 14:35:29
 * @LastEditors: userzero
 * @LastEditTime: 2019-08-01 16:17:25
 */
const moduleApi = require.context('./module', true, /\.js/)

const api = {}
moduleApi.keys().forEach(key => {
  // 如果是index则跳过
  if (key === './index') {
    return
  }
  // 获取module文件名
  let mk = key.replace(/(\.\/|\.js)/g, '')
  // 获取module文件夹里的各个模块
  let m = moduleApi(key)

  api[mk] = Object.keys(m).reduce((s, e) => {
    if (e !== 'default') {
      s[e] = m[e]
    }
    return s
  }, m.default || {})
})

export default api
