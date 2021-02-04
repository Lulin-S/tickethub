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

getOnlineStatus().then((isOnline) => {
  alert(isOnline ? "Online" : "Offline");
});

function getOnlineStatus() {
  if (navigator.onLine) {
    return fetch(location.origin, { method: "HEAD" })
      .then(() => true)
      .catch(() => false);
  }

  return new Promise((resolve) => resolve(false));
}

</script>
<style lang="scss">
@import "./assets/css/base.css";

</style>
