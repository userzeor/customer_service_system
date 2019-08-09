/*
 * @Descripttion:
 * @version: 1.0
 * @Author: userzero
 * @Date: 2019-07-30 17:07:51
 * @LastEditors: userzero
 * @LastEditTime: 2019-08-09 18:47:02
 */
import api from '@/api'
import { getDateDiff, screenOrientation } from '@/utils/common'
import pageHeader from '@/components/header'
export default {
  components: {
    pageHeader
  },
  props: {},
  data() {
    return {
      matterType: '',
      matterText: '',
      matterList: [
        {
          value: 0,
          text: '游戏问题'
        },
        {
          value: 1,
          text: '充值问题'
        },
        {
          value: 2,
          text: '兑换问题'
        },
        {
          value: 3,
          text: '账号问题'
        }
      ],
      scrollOptions: {
        scrollbar: true,
        startY: 0,
        click: true
      },
      textList: [],
      dynamicBottom: 50
    }
  },
  methods: {
    sendMsg() {
      if (this.matterText.length == 0) {
        console.log(this)
        this.$createDialog({
          type: 'alert',
          title: '温馨提示',
          content: '请选择问题类型、请描述你遇到的问题',
          icon: 'cubeic-alert',
          showClose: true
        }).show()
      }
      this.textList.push({
        uName: '我',
        uText: this.matterText
      })
    }
  },
  created() {},
  mounted() {
    screenOrientation()
  },
  watch: {},
  computed: {
    formatDate() {
      return function(date) {
        return getDateDiff(date)
      }
    }
  }
}
