<template>
  <div id="app" class="app">
    <layout />
  </div>
</template>

<script>
import layout from '@/layouts/default'
export default {
  name: 'App',
  components: {
    layout
  },
  beforeCreate() {
    this.$store.dispatch('user/setInfo')
    this.$store.dispatch('cart/setCarts')
  }
}
</script>
