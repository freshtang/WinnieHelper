<script>
import 'mp-weui/lib/style.css'

export default {
  created () {
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

/*
main color $primary-color
font color #888
*/

.page, body {
  height: 100%;
  background-color: #f8f8f8;
}
.weui-btn {
  color: $primary-color;
  border:1px solid $primary-color;
}

/* icon */
@font-face {font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_1092427_k7xjzijkva.eot?t=1552823376797'); /* IE9 */
  src: url('//at.alicdn.com/t/font_1092427_k7xjzijkva.eot?t=1552823376797#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('//at.alicdn.com/t/font_1092427_k7xjzijkva.woff?t=1552823376797') format('woff'),
  url('//at.alicdn.com/t/font_1092427_k7xjzijkva.ttf?t=1552823376797') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_1092427_k7xjzijkva.svg?t=1552823376797#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-allright:before {
  content: "\e630";
}

.icon-eat:before {
  content: "\e649";
}

.icon-winnie:before {
  content: "\e60f";
}

.icon-sun:before {
  content: "\e624";
}

.icon-right:before {
  content: "\e73b";
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
