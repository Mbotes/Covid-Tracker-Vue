import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import uk from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import moment from 'moment'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(Chartkick.use(Chart))
Chartkick.configure({mapsApiKey: "AIzaSyA4gHckN5WlUWWHZaZLQBv1xQCwSPsZqYE"})

Vue.prototype.moment = moment
uk.use(Icons);
Vue.config.productionTip = false;
Vue.prototype.moment = moment;

new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  }
}).$mount("#app");