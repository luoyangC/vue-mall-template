const state = {
  name: 'amor'
}

const mutations = {
  SET_NAME: (state, name) => {
    state.name = name
  }
}

const actions = {
  // 设置用户名
  setUserName: ({ commit }, name) => {
    commit('SET_NAME', name)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
