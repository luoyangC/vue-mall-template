import Cookies from 'js-cookie'

const state = {
  theme: Cookies.get('theme') || 'bili',
  cache: ['Home', 'Sort', 'Cart', 'User']
}

const mutations = {
  SET_THEME(state, theme) {
    state.theme = theme
  }
}

const actions = {
  // 设置主题
  setTheme({ commit }, theme) {
    commit('SET_THEME', theme)
    Cookies.set('theme', theme)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

