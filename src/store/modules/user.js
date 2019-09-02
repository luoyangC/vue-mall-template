import { userLogin, getUserInfo } from '@/api'
import { getToken, setToken, removeToken } from '@/utils/auth'

const state = {
  name: '未登录',
  avatar: '',
  token: getToken()
}

const mutations = {
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

const actions = {
  // 用户登录
  async login({ commit, dispatch }, form) {
    const { data } = await userLogin(form)
    if (data) {
      dispatch('setInfo')
      commit('SET_TOKEN', data.token)
      setToken(data.token)
      return data
    }
  },
  // 设置用户信息
  async setInfo({ commit }) {
    const { data } = await getUserInfo()
    if (data) {
      commit('SET_NAME', data.name)
      commit('SET_AVATAR', data.avatar)
    }
  },
  async logout({ commit, dispatch }) {
    removeToken()
    commit('SET_TOKEN', '')
    dispatch('setInfo')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
