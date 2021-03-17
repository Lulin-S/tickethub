<template>
  <div id="search">
    <span v-for="city in cities" :key="city.name" @click="btnClick(city)">
      {{ city.name }}
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cities: [
        { name: 'All concerts' },
        { name: 'Stockholm' },
        { name: 'Göteborg' },
        { name: 'Johanneshov' }
      ]
    }
  },
  name: 'Search',
  //custom events to pass data to parent component
  methods: {
    btnClick(city) {
      this.$emit('city-click', city)
    }
  }
}
</script>

<style scoped lang="scss">
#search {
  display: flex;
  justify-content: space-around;
}

span {
  font-size: 2rem;
  font-weight: light;
}

span:hover {
  z-index: 1;
  //box-shadow: 0 8px 30px #afc2ec;
  transform: scale(1.25);
}

@media (max-width: 800px) {
  span {
    font-size: 1rem;
  }
}
</style>
