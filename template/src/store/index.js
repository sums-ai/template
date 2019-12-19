import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  keepAliveComponents: []
};

const mutations = {
  pushKeepAlive(state, { name = '' }) {
    state.keepAliveComponents.push(name);
  },
  popKeepAlive(state, { name = '' }) {
    state.keepAliveComponents = state.keepAliveComponents.filter(
      component => component !== name
    );
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions: {},
  modules: {}
});
