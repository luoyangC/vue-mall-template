<template>
  <div class="login-page">
    <password-login />
  </div>
</template>

<script>
import PasswordLogin from '@/components/login/PasswordLogin'
export default {
  name: 'Login',
  layout: 'general',
  components: {
    PasswordLogin
  }
}
</script>

<style lang="stylus" scoped>
.login-page {
  background: white;
  padding: 50px 0;
}
</style>
