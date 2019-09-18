// 初始化nuxt服务
export const actions = {
  async nuxtServerInit({ dispatch, commit }, { store }) {
    const token = store.$cookies.get('token') || ''
    const theme = store.$cookies.get('theme') || 'bili'
    commit('user/SET_TOKEN', token) // 初始化token
    commit('app/SET_THEME', theme) // 初始化主题
    await dispatch('user/setInfo') // 初始化用户信息
    await dispatch('cart/setCarts') // 初始化购物车
  }
}
