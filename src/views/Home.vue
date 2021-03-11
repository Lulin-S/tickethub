<template>
  <div class="home">
    <div class="pic">
      <p style="position: absolute; top: 210px; left: 60px; color: white">
        <strong>The Stranglers - European Tour</strong><br />
        Det legendariska punkbandet The Stranglers återupptar deras 2020-<br />turné
        till minne av Dave Greenfield som tragiskt avled av Covid-19. <br />Det
        blir tre hyllningsspelningar i Sverige under ”European Tour 2021”:<br />
        Göteborg, Stockholm och Malmö.
      </p>
      <img class="Img" src="../assets/img/nasa.jpg" height="380px" alt="" />
    </div>
    <hr />
    <div id="search">
      <Search @city-click="citySearched"></Search>
      <div class="events">
        <HelloWorld :eventsName="result" v-if="!isSearched()"></HelloWorld>
        <HelloWorld
          :eventsName="searchedResult"
          v-if="isSearched()"
        ></HelloWorld>
      </div>
    </div>
    <FooterPage></FooterPage>
  </div>
</template>

<script>
import HelloWorld from 'components/Content.vue'
import Search from 'components/Search.vue'
import axios from 'axios'
import FooterPage from 'components/footer.vue'

export default {
  created() {
    this.fetchInformation()
  },
  data() {
    return {
      result: this.result,
      searchedResult: []
    }
  },
  name: 'App',
  components: {
    HelloWorld,
    Search,
    FooterPage
  },

  methods: {
    //new results based on new search condition
    citySearched(city) {
      const searchedResult = []
      let i = 0
      for (i; i < this.result.length; i++) {
        if (city.name === this.result[i]._embedded.venues[0].city.name) {
          searchedResult.push(this.result[i])
        }
      }
      this.searchedResult = searchedResult
    },
    // method to check whether searched or not
    isSearched() {
      if (this.searchedResult.length == 0) {
        return false
      } else return true
    },

    // axios
    fetchInformation() {
      axios({
        url:
          'https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=*&countryCode=SE'
      }).then((res) => {
        this.result = res.data._embedded.events
      })
    }
  }
}
</script>

<style lang="scss">
$white: rgb(252, 250, 250);
body {
  background-color: $white;
}
.home {
  display: flex;
  flex-direction: column;
}
.pic {
  margin-bottom: 30px;
}
.events {
  display: flex;
  justify-content: space-around;
}
hr {
  width: 80%;
  margin: 10 auto;
  border: 0;
  height: 2px;
  background: rgb(214, 213, 213);
  //background-image: linear-gradient(to right, rgb(118, 170, 196), rgb(123, 131, 240), rgb(147, 212, 243));
}
.carousel {
  height: 427px;
  width: 640px;
}
.Img {
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.5);
}
#search {
  padding: 24px;
  padding-top: 2px;
}
strong {
  font-size: 2rem;
}

@media only screen and (min-width: 1620px) {
  .Img {
    width: 100%;
    height: 400px;
  }
}
</style>
