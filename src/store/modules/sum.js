const state = {
  first: 0,
  second: 0
}

const mutations = {
  SET_FIRST(state, val) {
    state.first = val
  },
  SET_SECOND(state, val) {
    state.second = val
  }
}

const actions = {
  setFirst({ commit }, number) {
    commit('SET_FIRST', parseInt(number) || 0)
  },
  setSecond({ commit }, number) {
    commit('SET_SECOND', parseInt(number) || 0)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
