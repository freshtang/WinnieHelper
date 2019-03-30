export default {
  namespaced: true,
  state: {
    dayLists: [{
      name: '专四',
      time: new Date().toString(),
      tag: '学习',
      repeat: 'none',
      repeatFrequency: 'none'
    }, {
      name: '生日',
      time: new Date().toString(),
      tag: '生活',
      repeat: 'none',
      repeatFrequency: 'none'
    }]
  },
  mutations: {
    SET_DAYS_INFO (state, payload) {
      Object.assign(state, payload)
    }
  },
  actions: {
  }
}
