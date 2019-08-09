/*
 * @Descripttion: axios封装
 * @version: 1.0
 * @Author: userzero
 * @Date: 2019-07-29 11:44:07
 * @LastEditors: userzero
 * @LastEditTime: 2019-08-01 18:09:06
 */
import axios from 'axios'
import { Toast } from 'cube-ui'
import BASE_URL from '../../config'

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
}

// 创建axios实例
const service = axios.create({
  // api的base_url
  baseURL: BASE_URL,
  // 请求超时时间
  timeout: 10000
})

// request拦截器
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    // config.headers['content-type'] = 'application/json'
    // console.log(process.env.BASE_API)
    // console.log(config)
    // if (sessionStorage.getItem('token')) {
    //   // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
    // //   config.headers['X-Token'] = sessionStorage.getItem('token')
    // }
    return config
  },
  error => {
    // Do something with request error
    Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    const resp = response.data
    if (response.status === 200) {
      if (resp.result == 0) {
        // 请求成功，返回成功数据
        return resp
      } else {
        // 请求失败，弹出错误信息
        Toast.$create({
          type: 'error',
          time: 1500,
          txt: resp.errorMsg
        }).show()
        return resp
      }
    } else {
      // 请求失败，弹出错误信息
      Toast.$create({
        type: 'error',
        time: 1500,
        txt: codeMessage[status]
      }).show()
      return resp
    }
  },
  error => {
    Toast.$create({
      type: 'error',
      time: 1500,
      txt: codeMessage[error.response.status]
    }).show()
    return Promise.reject(error)
  }
)

export default service
