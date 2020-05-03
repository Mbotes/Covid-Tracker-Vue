<template>
    <div class="uk-container uk-text-center">
        <h3 class="uk-heading uk-margin">Total Cases Per Country</h3>
        <div v-if="loading" class="uk-align-center">
          <span uk-spinner="ratio: 4.5"></span>
        </div>
        <div v-else>
            <geo-chart :data="COUNTRYSTATDATA" :library="options" height="600px"></geo-chart>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      loading: false,
      options: {
        datalessRegionColor: '#FFFFFF',
        defaultColor: '#f5f5f5',
        displayMode: 'regions'
      }
    };
  },
  methods: {
    async getCountryResultFromVuex() {
      this.loading = true;
      await this.$store.dispatch("getCountryStats");
      this.loading = false;
    }
  },
  created() {
    this.getCountryResultFromVuex();
  },
  computed: {
    ...mapGetters(["COUNTRYSTATDATA"])
  }
};
</script>
<style scoped></style>