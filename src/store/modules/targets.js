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
    targetsLists: []
  },
  mutations: {
    SET_TARGET_INFO (state, payload) {
      Object.assign(state, payload)
    }
  },
  actions: {
    async addTarget ({ commit, state }, params) {
      const { result } = await apis.targets.addTarget(params)
      if (result.code === 200) {
        commit('SET_TARGET_INFO', {...state, targetsLists: result.data})
        return true
      } else {
        return false
      }
    },
    async delTarget ({ commit, state }, params) {
      console.log(params)
      const { result } = await apis.targets.delTarget(params)
      console.log(result)
      if (result.code === 200) {
        commit('SET_TARGET_INFO', {...state, targetsLists: result.data})
        return true
      } else {
        return false
      }
    },
    async loadTargets ({ commit, state }, params) {
      const { result } = await apis.targets.queryTargets()
      console.log(result)
      if (result.code === 200) {
        commit('SET_TARGET_INFO', {...state, targetsLists: result.data})
        return true
      } else {
        return false
      }
    }
  }
}
