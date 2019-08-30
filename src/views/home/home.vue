<!--
 * @Descripttion: 列表界面
 * @version: 1.0
 * @Author: userzero
 * @Date: 2019-07-30 14:08:31
 * @LastEditors: userzero
 * @LastEditTime: 2019.08.14 14:26:02
 -->
<template>
  <div class="wrapper">
    <page-header
      title="客服"
      :isDisPlayRightBtn="true"
      :rightBtnOptions="{
        iconClass: 'cubeic-more',
        onClick: moreHandle
      }"
    ></page-header>
    <div class="chat-wrapper">
      <div
        class="chat-box clear-fix"
        :style="{ bottom: dynamicBottom / 37.5 + 'rem' }"
        @click="manualBlur"
      >
        <cube-scroll ref="chatScroll" :data="textList" :options="scrollOptions">
          <div class="chat-text-box clear-fix">
            <div class="customer-box">
              <img
                src="http://img5.duitang.com/uploads/item/201512/17/20151217010111_wfdM2.thumb.700_0.jpeg"
                class="c-adv-img"
              />
              <div class="c-box">
                <div class="c-name">客服</div>
                <div class="c-text">
                  你好，请问有什么要问的？
                  <div class="matter-type-div">
                    <cube-select
                      v-model="matterType"
                      :options="matterList"
                      placeholder="请选择问题类型"
                    >
                    </cube-select>
                  </div>
                </div>
              </div>
            </div>
            <div class="mine-box" v-for="i in 20" :key="i">
              <div class="m-box">
                <div class="m-name">我</div>
                <div class="m-text">充多少算土豪？</div>
              </div>
              <img
                src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=167159340,1177551358&fm=26&gp=0.jpg"
                class="m-adv-img"
              />
            </div>
          </div>
        </cube-scroll>
      </div>
      <div class="chat-footer" ref="chatFooterBox">
        <cube-textarea
          v-model="matterText"
          placeholder="请输入你的问题"
          :maxlength="500"
          @focus="chatTextAreaFocus"
          ref="chatTextarea"
        ></cube-textarea>
        <cube-button @click="sendMsg">发送</cube-button>
      </div>
    </div>
  </div>
</template>
<script src="./home.js"></script>
<style lang="stylus" scoped>
@import './home.styl'
</style>
