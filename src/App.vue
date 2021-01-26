<template>
  <div id="app">
   <Nav>
    <NavItem/>  
   </Nav>
  </div>
  
</template>

<script>
// @ is an alias to /src
import Nav from 'components/Nav.vue'
import NavItem from 'components/NavItem.vue'

export default {
  components: {
    Nav,
    NavItem,
  }
}
</script>
<style lang="scss">
@import "./assets/css/base.css";
/* #app {
} */
</style>
