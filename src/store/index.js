import Vue from "vue";
import Vuex from "vuex";
import tracker from './modules/tracker'
import country from './modules/country'
import map from './modules/map'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters:{
  },
  modules: {
    tracker,
    country,
    map
  }
});