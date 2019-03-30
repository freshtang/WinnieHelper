import $wx from 'minapp-api-promise'
export default {
  namespaced: true,
  state: {
    avatarUrl: '',
    nickName: '',
    gender: 1
  },
  mutations: {
    SET_USER_INFO (state, payload) {
      Object.assign(state, payload)
    }
  },
  actions: {
    async getUserInfo ({ commit }) {
      // async写法
      const res = await $wx.getSetting()
      if (res.authSetting['scope.userInfo']) {
        const { userInfo } = await $wx.getUserInfo()
        commit('SET_USER_INFO', userInfo)
      }
    }
  }
}
