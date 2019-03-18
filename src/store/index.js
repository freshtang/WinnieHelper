import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from './modules/userInfo'
import targets from './modules/targets'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    userInfo,
    targets
  }
})

export default store
