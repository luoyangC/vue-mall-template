import { getCarts } from '@/api'

const state = {
  carts: [],
  checked: [],
  checkAll: false
}

const mutations = {
  SET_CARTS: (state, carts) => {
    state.carts = carts
  },
  SET_CHECKED: (state, checked) => {
    state.checked = checked
  },
  SET_CHECKALL: (state, checkAll) => {
    state.checkAll = checkAll
  }
}

const actions = {
  // 获取购物车列表
  async setCarts({ commit }) {
    const { data } = await getCarts()
    commit('SET_CARTS', data)
  },
  // 购物车选中
  setChecked({ state, commit }, checked) {
    commit('SET_CHECKED', checked)
    let checkAll = false
    if (state.carts.length === checked.length) {
      checkAll = true
    }
    if (state.checkAll !== checkAll) {
      commit('SET_CHECKALL', checkAll)
    }
  },
  // 购物车全选
  setCheckAll({ state, commit }) {
    if (state.carts.length === state.checked.length) {
      commit('SET_CHECKED', [])
      commit('SET_CHECKALL', false)
    } else {
      commit('SET_CHECKED', state.carts)
      commit('SET_CHECKALL', true)
    }
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
