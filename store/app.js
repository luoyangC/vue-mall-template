export const state = () => ({
  theme: 'bili',
  cache: ['Index', 'Sort', 'Cart', 'User']
})

export const getters = {
  theme: state => state.theme, // 自定义主题
  cache: state => state.cache // 开启缓存的页面
}

export const mutations = {
  SET_THEME(state, theme) {
    state.theme = theme
  }
}

export const actions = {
  // 设置主题
  setTheme({ commit }, theme) {
    commit('SET_THEME', theme)
    this.$cookies.set('theme', theme)
  }
}
