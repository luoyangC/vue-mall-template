export const state = () => ({
  name: '未登录',
  avatar: '',
  token: ''
})

export const getters = {
  userName: state => state.name,
  userAvatar: state => state.avatar
}

export const mutations = {
  SET_NAME(state, name) {
    state.name = name
  },
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_AVATAR(state, avatar) {
    state.avatar = avatar
  }
}

export const actions = {
  // 用户登录
  async login({ commit, dispatch }, form) {
    const { data } = await this.$axios.post('/dev-api/user/login', form)
    if (data) {
      dispatch('setInfo')
      commit('SET_TOKEN', data.token)
      this.$cookies.set('token', data.token)
      return data
    }
  },
  // 设置用户信息
  async setInfo({ commit }) {
    const { data } = await this.$axios.get('/dev-api/user/info')
    if (data) {
      commit('SET_NAME', data.name)
      commit('SET_AVATAR', data.avatar)
    }
  },
  async logout({ commit, dispatch }) {
    this.$cookies.remove('token')
    commit('SET_TOKEN', '')
    dispatch('setInfo')
  }
}
