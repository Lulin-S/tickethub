<template>
  <div class="hello">
  <!--  <div>
      <select>
  <option v-for="option in venus" :key="option">{{option}}</option>
 
</select>
  </div>
   <div>
    <label for="example-datepicker">Choose a date</label>
    <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
  </div>
  <input type="text" placeholder="events"> -->

  <b-card
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      {{content}}
    </b-card-text>

    <b-button v-b-toggle.collapse-1 variant="info">more</b-button>
  <b-collapse id="collapse-1" class="mt-2">
    <b-card>
      <p class="card-text">contents Here</p>
    </b-card>
  </b-collapse>
  </b-card>
  </div> 
</template>

<script>
export default {
  data() {
      return {
        //card: this.venus,
        content: this.venus,
      }
    },
  name: 'HelloWorld',
props:['venus', 'lala'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$color:rgb(59, 56, 56);
.hello {
    color:$color;
    }



/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.hello{
display: flex;
}
select{
  width: 150px;
  height: 30px;
}
input{
  height: 30px;
  width:300px;
} */

</style>
