<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  beforeCreate() {
    this.$store.dispatch('user/setInfo')
    this.$store.dispatch('cart/setCarts')
  }
}
</script>
