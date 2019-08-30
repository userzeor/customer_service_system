<!--
 * @Descripttion: header组件
 * @version: 1.0
 * @Author: userzero
 * @Date: 2019-08-09 16:08:59
 * @LastEditors: userzero
 * @LastEditTime: 2019.08.12 17:42:51
 -->
<template>
  <header class="p-header">
    <button v-if="isDisPlayLeftBtn" class="p-header-left-btn">
      <i
        v-if="leftBtnOptions && leftBtnOptions.iconClass"
        :class="leftBtnOptions.iconClass"
        @click="leftBtnOptions.onClick"
      ></i>
      <span class="p-header-btn-text">{{ leftBtnOptions.btnText }}</span>
    </button>
    <h1 class="p-header-title">{{ title }}</h1>
    <button v-if="isDisPlayRightBtn" class="p-header-right-btn">
      <i
        v-if="rightBtnOptions && rightBtnOptions.iconClass"
        :class="rightBtnOptions.iconClass"
        @click="rightBtnOptions.onClick"
      ></i>
      <span class="p-header-btn-text">{{ rightBtnOptions.btnText }}</span>
    </button>
  </header>
</template>

<script>
export default {
  name: 'pageHeader',
  components: {},
  props: {
    title: {
      type: String,
      default: '',
      required: false
    },
    isDisPlayLeftBtn: {
      type: Boolean,
      default: false,
      required: false
    },
    leftBtnOptions: {
      type: Object,
      default: function() {
        return {
          iconClass: '',
          btnText: '',
          onClick: function() {}
        }
      },
      required: false
    },
    isDisPlayRightBtn: {
      type: Boolean,
      default: false,
      required: false
    },
    rightBtnOptions: {
      type: Object,
      default: function() {
        return {
          iconClass: '',
          btnText: '',
          onClick: function() {}
        }
      },
      required: false
    }
  },
  data() {
    return {}
  },
  methods: {},
  created() {},
  mounted() {},
  watch: {},
  computed: {}
}
</script>
<style lang="stylus" scoped>
.p-header
  position fixed
  top 0
  left 0
  right 0
  display flex
  padding 11px 15px
  font-size 16px
  color #ffffff
  align-items center
  justify-content center
  background rgb(0, 122, 244)
  z-index 99
  .p-header-left-btn
    position absolute
    top 50%
    left 15px
    padding-left 0
    font-size 14px
    color #ffffff
    border none
    outline none
    background rgba(0, 0, 0, 0)
    transform translateY(-50%)
  .p-header-title
    flex-grow 1
  .p-header-right-btn
    position absolute
    top 50%
    right 15px
    padding-right 0
    font-size 14px
    color #ffffff
    border none
    outline none
    background rgba(0, 0, 0, 0)
    transform translateY(-50%)
</style>
