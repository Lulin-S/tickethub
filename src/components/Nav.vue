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
  name: 'Nav'
}
</script>
