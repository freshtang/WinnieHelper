import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from './modules/userInfo'
import targets from './modules/targets'
import days from './modules/days'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    userInfo,
    targets,
    days
  }
})

export default store
