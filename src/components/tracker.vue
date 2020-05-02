<template>
  <div>
    <section>
      <div class="uk-container uk-margin-top">
        <div>
          <div class="uk-background-secondary uk-margin-bottom uk-padding uk-panel">
            <div class="uk-margin">
              <input v-model="search" class="uk-input" type="text" placeholder="Filter By Country"/>
            </div>
          </div>
        </div>

        <div v-if="loading" class="uk-align-center">
          <span uk-spinner="ratio: 4.5"></span>
        </div>

        <div v-else class="uk-child-width-1-4@s uk-grid-match" uk-grid>
          <div v-for="(data,key) in filteredCountries" :key="key">
            <div class="uk-card uk-card-default uk-card-hover uk-card-body">
              <div class="uk-card-badge uk-label">{{data.parentId}}</div>
              <h3 class="uk-card-title uk-margin-top">{{data.country}}</h3>
              <ul class="uk-list uk-list-divider">
                <li>Total Cases: {{data.cases || 0}}</li>
                <li>Active Cases: {{data.active || 0}}</li>
                <li>Total Deaths: {{data.deaths ||0}}</li>
                <li>Total Recovered: {{data.recovered || 0 }}</li>
                <li>Today Cases: {{data.todayCases || 0 }}</li>
                <li>Today Deaths: {{data.todayDeaths || 0 }}</li>
                <li>Critical Cases: {{data.critical || 0 }}</li>
                <li>Cases per 1 million: {{data.casesPerOneMillion || 0 }}</li>
                <li>Deaths per 1 million: {{data.deathsPerOneMillion || 0 }}</li>
              </ul>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      search: "",
      loading: false
    };
  },
  methods: {
    async getResultFromVuex() {
      this.loading = true;
      await this.$store.dispatch("getAllCases");
      this.loading = false;
    }
  },
  created() {
    this.getResultFromVuex();
  },
  computed: {
    ...mapState(["cases"]),
    filteredCountries() {
      return this.cases.filter(country => {
        return country.country
          .toLowerCase()
          .match(this.search.toLowerCase());
      });
    }
  }
};
</script>
<style scoped></style>