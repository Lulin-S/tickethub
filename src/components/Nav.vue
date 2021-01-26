<template>
  <div id="nav">
     <slot></slot>
  </div>
  
</template>

<script>
export default {
  data() {
      return {
        value: ''
      }
    },
  name: 'Nav',
}
</script>

<style lang="scss">
#nav {
  padding: 40px;
  text-align: left;
  font-size: 2em;
  a {
    color: #dddada;
     text-decoration: none;
  

    &.router-link-exact-active {
      color: #f8faf9;
    }
  }
}

</style>