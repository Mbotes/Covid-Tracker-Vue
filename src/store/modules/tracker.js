import axios from 'axios'

const state = {
    cases: []
};

const getters = {
    CASES : state => {
        return state.cases;
    },
};

const mutations = {
    SET_CASES(state, payload) {
        state.cases = payload;
    }
  
};

const actions = {
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
};

export default {
  state,getters,mutations,actions
}