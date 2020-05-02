import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cases: [],
  },
  mutations: {
    SET_CASES(state, payload) {
      state.cases = payload;
    }
  },
  actions: {
    async getAllCases({
      commit
    }) {
      try {
        let response = await axios.get("https://coronavirus-19-api.herokuapp.com/countries");
        console.log(response.data);
        commit("SET_CASES", response.data);
      } catch (err) {
        console.log(err);
      }
    }
  },

  modules: {}
});