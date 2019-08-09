/*
 * @Descripttion: 首页请求api
 * @version: 1.0
 * @Author: userzero
 * @Date: 2019-07-30 14:35:53
 * @LastEditors: userzero
 * @LastEditTime: 2019-08-01 17:11:03
 */
import request from '@/utils/request'

// 点赞
export const clickLike = params =>
  request({
    url: '/api/social/like/sign',
    method: 'post',
    data: params,
    headers: { uuid: '123544' }
  })

// 获取点赞列表
export const getLikeList = params =>
  request({
    url: '/api/social/like/targetListCount',
    method: 'post',
    data: params,
    headers: { uuid: '123544' }
  })

// 获取新闻信息
export const getNewList = params =>
  request({
    url: '/api/front/news/channel/previewarticle',
    method: 'get',
    params: params
  })
