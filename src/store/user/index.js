import * as types from '@/store/mutation-types.js';

const user = {
  namespaced: true,
  state: {
    userInfo: '123',
  },
  getters: {
    getUserInfo: (state) => {
      return state.userInfo
    },
  },
  actions: {
    changeUserInfo({ commit }, info) {
      let userInfo = `this is ${info}`;
      commit(types.SET_USER_INFO, userInfo);
    },
  },
  mutations: {
    [types.SET_USER_INFO](state, userInfo) {
      state.userInfo = userInfo;
    }
  },
};


export default {
  user,
};
