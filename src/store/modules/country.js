import axios from 'axios'

const state = {
    countryData: []
};

const getters = {
    COUNTRYDATA : state => {
        return state.countryData;
    },
};

const mutations = {
    SET_COUNTRY(state, payload) {
        state.countryData = payload;
    }
  
};

const actions = {
    async getCountry({commit}, name) {
        try {
            console.log("route", name);
            let response = await axios.get(`https://coronavirus-19-api.herokuapp.com/countries/${name}`);
            console.log(response.data);
            commit("SET_COUNTRY", response.data);
        } catch (err) {
          console.log(err);
        }
      }
};

export default {
  state,getters,mutations,actions
}