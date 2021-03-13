<template>
  <div id="bcard">
    <!-- v-for -->
    <div v-for="(item, index) in eventsName" :key="index">
      <b-card
        id="cardbox"
        :img-src="item.images[9].url"
        img-alt="Image"
        img-top
        tag="article"
        style="width: 30rem; height: 28rem"
        class="mb-2"
      >
        <b-card-text id="text">
          {{ item.name }}
        </b-card-text>
        <div id="venuesrender">{{ item._embedded.venues[0].city.name }}</div>
        <span id="card-text">
          Venues: {{ item._embedded.venues[0].name }}<br />{{
            item.dates.start.localDate
          }}
        </span>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: -1,
      venues: ''
    }
  },
  name: 'HelloWorld',
  props: { eventsName: Array }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$color: rgb(242, 245, 247);

#bcard {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 1.5rem;
  padding: 60px;
}
#cardbox {
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.3);
  background: #f2ecfd;
  margin: 30px 20px 0 0;
}
#text:hover {
  color: #050007;
}

#venuesrender {
  position: absolute;
  right: 30px;
  bottom: 20px;
  font-size: 1.2rem;
  color: black;
}
#text {
  color: black;
}
#card-text {
  font-size: 1rem;
  position: absolute;
  left: 20px;
  bottom: 20px;
  color: black;
}
.card-img-top {
  width: 100%;
  height: 15vw;
  object-fit: cover;
}
@media only screen and (min-width: 1490px) {
  .card-img-top {
    height: 220px;
  }
}
@media only screen and (max-width: 1070px) {
  .card-img-top {
    height: 220px;
  }
}
</style>
