// 初始化nuxt服务
export const actions = {
  async nuxtServerInit({ dispatch, commit }, { store }) {
    const token = store.$cookies.get('token') || ''
    commit('user/SET_TOKEN', token) // 初始化token
    await dispatch('user/setInfo') // 初始化用户信息
    await dispatch('cart/setCarts') // 初始化购物车
  }
}
