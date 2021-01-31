<template>
  <div class="main">
    <h1>Hi! {{this.$store.state.username}} <br>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name:'Profile',
    data () {
      return {
        msg: 'Welcome to the your page!',
      }
    }
  }
</script>