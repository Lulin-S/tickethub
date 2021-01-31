<template>
<div class="home">
   <Search @city-click="citySearched"></Search>
   <div class='events'>
     <HelloWorld :eventsName='result' v-if="!isSearched()" ></HelloWorld>
    <HelloWorld :eventsName='searchedResult' v-if="isSearched()" ></HelloWorld>

   </div>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from 'components/HelloWorld.vue'
import Search from 'components/Search.vue'
import axios from "axios";

export default {
  created(){
  this.fetchInformation()
}, 
  data(){
    return{
      result:this.result,
      searchedResult:[]
    }
  },
  name: 'App',
  components: {
    HelloWorld,
    Search,
},

  methods:{
    citySearched(city){
      const searchedResult = []
      let i = 0;
        for (i; i< this.result.length; i++){
      if (city.name === this.result[i]._embedded.venues[0].city.name){
            searchedResult.push(this.result[i]) 
          }
      }
          //console.log(searchedResult)
          this.searchedResult = searchedResult
},
    isSearched(){
    if(this.searchedResult.length == 0){
      return false
    }
    else 
    return true
    },
  fetchInformation(){
    axios({
      url:
        "https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=*&countryCode=SE",
    }).then((res) => {
      this.result = res.data._embedded.events;
      //console.log(this.result);
    });
  }
},
}  
</script>

<style lang="scss">
.home{
  display:flex;
  flex-direction: column;
}
.pic{
  margin-bottom: 50px;
}
.events{
  display: flex;
  justify-content: space-around;
}
</style>
