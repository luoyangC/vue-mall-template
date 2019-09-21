<template>
  <div class="cart">
    <cart-topbar />
    <cart-list />
    <cart-action />
  </div>
</template>

<script>
import CartTopbar from './components/CartTopbar'
import CartList from './components/CartList'
import CartAction from './components/CartAction'
export default {
  name: 'Cart',
  middleware: 'auth',
  components: {
    CartTopbar,
    CartList,
    CartAction
  }
}
</script>
