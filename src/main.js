import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
//import axios from "axios";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "./main.scss";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

/* axios({
  url:
    "https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=*&countryCode=SE",
}).then((res) => {
  console.log(res);
}); */
