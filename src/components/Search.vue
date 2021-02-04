<template>

  <div id="search">

<!--     <input v-model="citiesName" type="text" placeholder="search cities...">
    <input  value="search" @click="onClick" type="button"> -->
  <span v-for="city in cities" :key="city.name" @click="btnClick(city)"> 
        {{city.name}}   
  </span>  
  </div>
</template>

<script>
export default {
    data() {
      return {
        cities:[
          {name: 'Stockholm'},
          {name: 'Göteborg'},
          {name: 'Johanneshov'},
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
   },

}
</script>

<style scoped lang="scss">
#search {
display: flex;
justify-content: space-around;

}

span{
  font-size: 2rem;
  font-weight: light;
}

span:hover{
  color: #77c6e6;
}

</style>