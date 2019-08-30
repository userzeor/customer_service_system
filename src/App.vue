<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: userzero
 * @Date: 2019-07-30 10:31:58
 * @LastEditors: userzero
 * @LastEditTime: 2019.08.14 15:04:48
 -->
<template>
  <div id="app">
    <!-- <transition name="page-move">
      <router-view />
    </transition> -->
    <transition :name="transitionName">
      <keep-alive :include="keepAlive">
        <router-view class="Router"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keepAlive: 'main-keep-alive', //需要缓存的页面 例如首页
      transitionName: 'slide-right' //初始过渡动画方向
    }
  }
}
</script>
<style lang="stylus">
html, body, #app
  height 100%
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  background #efeff4
.Router
  position absolute
  width 100%
  height 100%
  transition all 0.377s ease
  will-change transform
  top 0
  backface-visibility hidden
  perspective 1000
.slide-left-enter, .slide-right-leave-active
  opacity 0
  transform translate3d(-100%, 0, 0)
.slide-left-leave-active, .slide-right-enter
  opacity 0
  transform translate3d(100%, 0, 0)
</style>
