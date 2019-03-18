import apis from '@/apis'

export default {
  namespaced: true,
  state: {
    _id: '',
    name: '',
    punchDay: 0,
    lastCheck: '',
    className: '',
    color: '',
    desc: '',
    _openid: '',
    targetsList: []
  },
  mutations: {
    SET_TARGET_INFO (state, payload) {
      Object.assign(state, payload)
    }
  },
  actions: {
    async addTarget ({ commit, state }, params) {
      // 添加target
      const { result } = await apis.targets.addTarget(params)

      console.log(result)
      if (result.errMsg === 'collection.add:ok') {
        const { result } = await apis.targets.queryTargets()
        console.log(result)
        if (result.errMsg === 'collection.get:ok') {
          commit('SET_USER_INFO', {...state, targetsList: result.data})
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    }
  }
}
