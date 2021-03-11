<template>
  <div id="app">
    <div id="status"></div>
    <div id="log"></div>

    <Nav>
      <NavItem />
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
    NavItem
  }
}
/* self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (res) {
      if (res != null) {
        return res
      }
      return fetch(e.request.url)
    })
  )
})
window.addEventListener('load', function () {
  var status = document.getElementById('status')
  var log = document.getElementById('log')

  function updateOnlineStatus(event) {
    var condition = navigator.onLine ? 'online' : 'offline'
    status.className = condition
    status.innerHTML = condition.toUpperCase()

    log.insertAdjacentHTML(
      'beforeend',
      'Event: ' + (event ? event.type : '-') + '; Status: ' + condition + ' | '
    )
  }

  window.addEventListener('online', updateOnlineStatus)
  window.addEventListener('offline', updateOnlineStatus)

  updateOnlineStatus()
}) */
</script>
<style lang="scss">
@import './assets/css/base.css';
/* #status {
  position: fixed;
  width: 100%;
  font: bold 1em sans-serif;
  color: #fff;
  padding: 0.5em;
}

#log {
  padding: 2.5em 0.5em 0.5em;
  font: 1em sans-serif;
}

.online {
  background: green;
}

.offline {
  background: red;
} */
</style>
