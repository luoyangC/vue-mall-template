import Vue from 'vue';
import Vuex from 'vuex';

import user from './user';

Vue.use(Vuex);

let modules = {
    ...user,
};

export default new Vuex.Store({
    modules,
})
