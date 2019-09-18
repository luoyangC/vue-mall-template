<template>
  <div class="cart">
    <cart-list />
    <cart-action />
  </div>
</template>

<script>
import CartList from '@/components/cart/CartList'
import CartAction from '@/components/cart/CartAction'
export default {
  name: 'Cart',
  middleware: 'auth',
  components: {
    CartList,
    CartAction
  }
}
</script>
