import axios from 'axios'

const state = {
    countryStatData: []
};

const getters = {
    COUNTRYSTATDATA: state => {
        return state.countryStatData;
    },
};

const mutations = {
    SET_COUNTRY_STATS(state, payload) {
        state.countryStatData = payload;
    }

};

const actions = {
    async getCountryStats({ commit }) {
        try {
            let response = await axios.get(`https://coronavirus-19-api.herokuapp.com/countries`);
            const result = response.data.map(({ country, cases, active }) => ({ country, cases, active }));
            const valu = result.map((maps) => {
                return [maps.country, maps.cases, maps.active];
            });
            console.log("valu", valu);
            commit("SET_COUNTRY_STATS", valu);
        } catch (err) {
            console.log(err);
        }
    }
};

export default {
    state, getters, mutations, actions
}