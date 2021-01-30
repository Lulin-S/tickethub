<template>
<!--   <div class="hello"> -->
  <div id = "bcard">
     <div v-for="(item, index) in eventsName" :key="index"> 
       <b-card
          :img-src="item.images[9].url"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
       >
       <b-card-text id='text'>
        {{item.name}}
        {{item._embedded.venues[0].city.name}}
       </b-card-text>
       <span v-b-toggle.collapse-1 variant="info" :class='{ isTrue: currentIndex === index}' @click = "textClick(index)">more </span>
    <div v-if="currentIndex === index">
       <b-collapse id="collapse-1" class="mt-2">
    <b-card>
      <span class="card-text">
        {{item._embedded.venues[0].name}}<br>
        {{item.dates.start.localDate}}
      </span>
    </b-card>
       </b-collapse>
    </div>
    </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: -1,
      venues:'',
    }
  },
  methods:{
     textClick(index){ 
  this.currentIndex=index 
  }
},
/* computed:{
getName(){
  return this.item._embedded.venues[0].name;
}
}, */
  name: 'HelloWorld',
  props:['eventsName']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$color:rgb(59, 56, 56);
.hello {
    color:$color;
    }

#bcard{
  display:flex;
  flex-wrap: wrap;
justify-content: space-between;
}
#text:hover{
  color: #414caf;
} 
.isTrue{
  color:red;
}
</style>
