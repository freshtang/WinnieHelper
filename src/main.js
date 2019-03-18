import Vue from 'vue'
import App from './App'
import store from './store'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.use({
  install (Vue, options) {
    Vue.prototype.$store = store
    // 不建议在组件内使用，推荐写在src/services目录下
    // Vue.prototype.$wx = $wx
  }
})

const app = new Vue(App)
app.$mount()
