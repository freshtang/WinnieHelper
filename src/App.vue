<script>
import { mapActions } from 'vuex'

import 'mpvue-weui/src/style/weui.css'

export default {
  methods: {
    ...mapActions({
      getUserInfo: 'userInfo/getUserInfo'
    })
  },
  created () {
    this.getUserInfo()
    console.log('getUserInfo')
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true
      })
    }
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */

    let logs
    if (mpvuePlatform === 'my') {
      logs = mpvue.getStorageSync({key: 'logs'}).data || []
      logs.unshift(Date.now())
      mpvue.setStorageSync({
        key: 'logs',
        data: logs
      })
    } else {
      logs = mpvue.getStorageSync('logs') || []
      logs.unshift(Date.now())
      mpvue.setStorageSync('logs', logs)
    }
  },
  log () {
    console.log(`log at:${Date.now()}`)
  }
}
</script>

<style lang=scss>

@import './utils/styles/vars.sass';
@import './utils/styles/icon.css';

/*
main color $primary-color
font color #888
*/

.page, body, .main-warp{
  height: 100%;
  background-color: white;
  position: relative;
}

.weui-btn {
  color: $primary-color;
  border:1px solid $primary-color;
}

button[type=primary] {
  background-color: $primary-color;
}
.button-hover[type=primary] {
  color:rgba(255, 255, 255, 0.6);
  background-color: $primary-color;
}
.circle-button {
  width: 70px;
  height: 70px;
  border: 3px solid white;
  background-color: transparent;
  text-align: center;
  line-height: 70px;
  color:white;
  padding-left: -20px;
  padding-right: -20px;
  border-radius: 50%;
}


.normal-text {
  font-size: 14px;
}

.small-text {
  font-size: 12px;
}

.big-text {
  font-size: 18px;
}

.grey-text {
  color: grey;
}

.grey-line {
  border-bottom: 1px solid #e1e4e8!important;
  height: 1px;
  width: 100%;
  margin: 8px 0;
  box-sizing: border-box;
}

.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
