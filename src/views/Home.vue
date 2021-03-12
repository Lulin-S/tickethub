<template>
  <div class="home">
    <div class="pic">
      <div class="cover">
        <img src="@/assets/img/concertsbanner1.jpg" alt="" />
      </div>
      <div>
        <p>
          <strong>The Stranglers - European Tour</strong><br />
          Det legendariska punkbandet The Stranglers återupptar deras 2020-<br />turné
          till minne av Dave Greenfield som tragiskt avled av Covid-19.
          <br />Det blir tre hyllningsspelningar i Sverige under ”European Tour
          2021”:<br />
          Göteborg, Stockholm och Malmö.
        </p>
      </div>
    </div>
    <div class="line"></div>
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
  background: linear-gradient(315deg, #ff0058, #03a9f4);
}
.home {
  display: flex;
  flex-direction: column;
}
.pic {
  height: 320px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
}
.pic p {
  color: $white;
  padding-top: 100px;
}
.pic img {
  width: 800px;
  height: 300px;
  display: block;
  margin-bottom: 20px;
}
/* .cover {
  width: 800px;
  height: 300px;
  position: relative;
}
.cover:after {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  box-shadow: 0 0 50px 0 #03a9f4 inset;
} */
.events {
  display: flex;
  justify-content: space-between;
}
.line {
  height: 1px;
  width: 80%;
  margin: 0 auto;
  background: rgb(252, 250, 250);
  background-image: linear-gradient(
    to right,
    rgb(207, 77, 186),
    rgb(97, 104, 209),
    rgb(55, 54, 168)
  );
}
.carousel {
  height: 427px;
  width: 640px;
}
.Img {
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.5);
}
#search {
  padding-top: 20px;
  color: $white;
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
