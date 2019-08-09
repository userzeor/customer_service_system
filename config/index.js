/*
 * @Descripttion: 地址环境配置
 * @version: 1.0
 * @Author: userzero
 * @Date: 2019-07-30 10:50:46
 * @LastEditors: userzero
 * @LastEditTime: 2019-08-01 16:16:21
 */
/**
 * 线上环境
 */
let BASEURL = ''
switch (process.env.NODE_ENV) {
  case 'development':
    BASEURL = 'http://192.168.10.159:10086' //这里是本地的请求url
    break
  case 'test':
    BASEURL = 'http://test.eva-game.com' //测试环境url
    break
  case 'production':
    BASEURL = 'http://pro.eva-game.com' //生产环境url
    break
}

export default BASEURL
