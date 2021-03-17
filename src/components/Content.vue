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
        style="width: 26rem; height: 28rem"
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
  border: none;
  //box-shadow: 0 0 0 1px #cfd2d4;
  background: #f7f3ff;
  margin: 30px 20px 0 0;
  transition: 0.2s all;
}
#cardbox:hover {
  z-index: 1;
  box-shadow: 0 8px 50px rgba(0, 0, 0, 0.2);
  transform: scale(1.08);
}
#text:hover {
  color: #050007;
}

#venuesrender {
  position: absolute;
  right: 30px;
  bottom: 20px;
  font-size: 1.2rem;
  color: rgb(78, 77, 77);
}
#text {
  color: rgb(3, 3, 3);
}
#card-text {
  font-size: 1rem;
  position: absolute;
  left: 20px;
  bottom: 20px;
  color: rgb(78, 77, 77);
}
.card-img-top {
  width: 100%;
  height: 280px;
  object-fit: cover;
}
</style>
