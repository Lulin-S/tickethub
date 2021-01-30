import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import mutations from "./mutation";

Vue.use(Vuex);

Vue.use(Vuex);
const store = new Vuex.Store({
  state,
  mutations,
});
export default store;

/* axios({
  url:
    "https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=*&countryCode=SE",
}).then((res) => {
  this.eventsInfo = res;
});
 */
