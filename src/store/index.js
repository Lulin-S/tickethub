import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: "",
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
  },
});

/* axios({
  url:
    "https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=*&countryCode=SE",
}).then((res) => {
  this.eventsInfo = res;
});
 */
