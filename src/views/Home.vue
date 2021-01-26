<template>
<div class="home">
  <div class='pic'>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
      caption="First slide"
      img-src="https://picsum.photos/1024/480/?image=10"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Second Slide"
      img-src="https://picsum.photos/1024/480/?image=12"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Third Slide"
      img-src="https://picsum.photos/1024/480/?image=22"
    ></b-carousel-slide>
  </b-carousel>
</div>
<div class='events'>
   <HelloWorld :venus="result"></HelloWorld> 
   <HelloWorld></HelloWorld> 
   <HelloWorld></HelloWorld> 
   </div>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from 'components/HelloWorld.vue'
import axios from "axios";

export default {
  created(){
  axios({
  url:
    "https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=*&countryCode=SE",
}).then((res) => {
  this.result = res.data._embedded.events[0].name;
  console.log(this.result);
});
}, 
/*   methods: {
     getVenus(){
      const venusArr =[];
         for(let i = 0; i < this.result.length; i++){
     venusArr.push(this.result[i]._embedded.events[0].name)
     return venusArr;
    } 
   }
  }, */
  data(){
    return{
      result:this.result,
      //venusArr: '',
    }
  },
  name: 'App',
  components: {
    HelloWorld
  }
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
