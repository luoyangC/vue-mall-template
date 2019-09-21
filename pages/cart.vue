<template>
  <div class="cart">
    <cart-topbar />
    <cart-list />
    <cart-action />
  </div>
</template>

<script>
import CartTopbar from '@/components/cart/CartTopbar'
import CartList from '@/components/cart/CartList'
import CartAction from '@/components/cart/CartAction'
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
