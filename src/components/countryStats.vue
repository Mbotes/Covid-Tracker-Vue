<template>
    <div class="uk-container uk-margin-top">
        <div v-if="loading" class="uk-align-center">
          <span uk-spinner="ratio: 4.5"></span>
        </div>
        <div v-else >
            <h1 class="uk-heading-small">{{COUNTRYDATA.country}}</h1>
            <dl class="uk-description-list uk-description-list-divider uk-description-list-default">
                <dt>Total Cases:</dt>
                <dd>{{COUNTRYDATA.cases || 0}}</dd>
                <dt>Active Cases:</dt>
                <dd>{{COUNTRYDATA.active || 0}}</dd>
                <dt>Total Deaths: </dt>
                <dd>{{COUNTRYDATA.deaths ||0}}</dd>
                <dt>Total Recovered:</dt>
                <dd>{{COUNTRYDATA.recovered || 0 }}</dd>
                <dt>Today Cases:</dt>
                <dd>{{COUNTRYDATA.todayCases || 0 }}</dd>
                <dt>Today Deaths:</dt>
                <dd>{{COUNTRYDATA.todayDeaths || 0 }}</dd>
                <dt>Critical Cases: </dt>
                <dd>{{COUNTRYDATA.critical || 0 }}</dd>
                <dt>Cases per 1 million:</dt>
                <dd>{{COUNTRYDATA.casesPerOneMillion || 0 }}</dd>
                <dt>Deaths per 1 million:</dt>
                <dd>{{COUNTRYDATA.deathsPerOneMillion || 0 }}</dd>
            </dl>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      loading: false
    };
  },
  methods: {
    async getCountryResultFromVuex() {
      this.loading = true;
      await this.$store.dispatch("getCountry", this.$route.params.name);
      this.loading = false;
    }
  },
  created() {
    this.getCountryResultFromVuex();
  },
  computed: {
    ...mapGetters(["COUNTRYDATA"])
  }
};
</script>
<style scoped></style>