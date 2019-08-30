<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: userzero
 * @Date: 2019.08.14 10:53:51
 * @LastEditors: userzero
 * @LastEditTime: 2019.08.14 14:26:16
 -->
<template>
  <div class="wrapper">
    <page-header
      title="问题历史列表"
      :isDisPlayLeftBtn="true"
      :leftBtnOptions="{
        iconClass: 'cubeic-back',
        onClick: backHandle
      }"
    ></page-header>
    <div class="m-list" v-for="i in 10" :key="i">
      <div class="m-header border-bottom-1px">
        <div class="m-info">
          <div class="m-id">问题ID: <span></span></div>
          <div class="m-type">问题类型: <span></span></div>
        </div>
        <div class="m-state m-state-2">已回复</div>
      </div>
      <div class="m-body">
        你打算打打打打打算的奥术大师大所大所多打算打算大所多多多多多多多多多多多多多多多多大声道
      </div>
      <div class="m-footer border-top-1px">
        <div class="m-time">2019-08-16 23:44:23</div>
        <!-- <button class=""></button> -->
        <cube-button @click="goToSee" class="m-seebtn">查看</cube-button>
      </div>
    </div>
  </div>
</template>

<script src="./historylist.js"></script>
<style lang="stylus" scoped>
@import './historylist.styl'
</style>
