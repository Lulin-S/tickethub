<template>
  <div id="search">
<!--     <input v-model="citiesName" type="text" placeholder="search cities...">
    <input  value="search" @click="onClick" type="button"> -->
  <button v-for="city in cities" :key="city.name" @click="btnClick(city)"> 
        {{city.name}}   
  </button>  
  </div>
</template>

<script>
export default {
    data() {
      return {
        cities:[
          {name: 'Göteborg'},
          {name: 'Johanneshov'},
          {name: 'Stockholm'},
          {name: 'Linköping'},
        ]
      }
    },
    /* methods: {
      onClick() {
        this.citiesName = this.citiesName + 'rr'

        this.$emit('cityevents-search', this.citiesName)
      }
    }, */
   name: 'Search',
   methods:{
     btnClick(city){
       this.$emit('city-click', city)
     }
   }
}
</script>

<style scoped lang="scss">
button {
  transition-duration: 0.4s;
  margin-bottom: 30px;
}

button:hover {
  background-color: #676967;
  color: rgb(255, 255, 255);
  
}

#search {
display: flex;
}

</style>