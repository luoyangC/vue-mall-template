<template>
  <div style="background: #fafafa;">
    <user-navbar />
    <user-info />
    <user-order />
    <user-product />
  </div>
</template>

<script>
import UserNavbar from './components/UserNavbar'
import UserInfo from './components/UserInfo'
import UserOrder from './components/UserOrder'
import UserProduct from './components/UserProduct'
export default {
  name: 'User',
  middleware: 'auth',
  components: {
    UserNavbar,
    UserInfo,
    UserOrder,
    UserProduct
  }
}
</script>
