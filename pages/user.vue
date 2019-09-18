<template>
  <div class="user">
    <user-navbar />
    <user-info />
    <user-order />
    <user-product />
  </div>
</template>

<script>
import restoreScroll from '@/mixins/restoreScroll'
import UserNavbar from '@/components/user/UserNavbar'
import UserInfo from '@/components/user/UserInfo'
import UserOrder from '@/components/user/UserOrder'
import UserProduct from '@/components/user/UserProduct'
export default {
  name: 'User',
  middleware: 'auth',
  components: {
    UserNavbar,
    UserInfo,
    UserOrder,
    UserProduct
  },
  mixins: [restoreScroll]
}
</script>
