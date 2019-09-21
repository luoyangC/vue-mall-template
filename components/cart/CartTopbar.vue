<template>
  <van-nav-bar
    left-text="购物车"
    fixed
    class="cart-top-bar"
    right-text="管理"
  />
</template>

<script>
import { NavBar } from 'vant'
export default {
  namne: 'CartTopbar',
  components: {
    [NavBar.name]: NavBar
  }
}
</script>
