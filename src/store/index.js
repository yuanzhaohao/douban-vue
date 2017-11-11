import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const state = {
  moduleMovieList: null
};

export default new Vuex.store({
  state,
  actions,
  mutations,
});
