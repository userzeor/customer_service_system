/*
 * @Descripttion: 页面路由配置
 * @version: 1.0
 * @Author: userzero
 * @Date: 2019-07-29 15:17:41
 * @LastEditors: userzero
 * @LastEditTime: 2019-07-31 10:25:45
 */
/**
 * meta 可配置参数
 * @param {boolean} icon 页面icon
 * @param {boolean} keepAlive 是否缓存页面
 * @param {string} title 页面标题
 */
export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/home.vue'),
    meta: {
      icon: '',
      keepAlive: true,
      title: 'home'
    }
  }
]
