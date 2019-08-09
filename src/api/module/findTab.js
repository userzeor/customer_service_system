/*
 * @Descripttion: 发现tab页请求api
 * @version: 1.0
 * @Author: userzero
 * @Date: 2019-07-30 15:02:36
 * @LastEditors: userzero
 * @LastEditTime: 2019-07-30 15:05:01
 */
import request from '@/utils/request'

// 注册
export const getFindTab = params =>
  request({
    url: '/index/getFindTab',
    method: 'get',
    params: params
  })
