<template>
  <div class="login-page">
    <password-login />
  </div>
</template>

<script>
import PasswordLogin from './components/PasswordLogin'
export default {
  name: 'Login',
  components: {
    PasswordLogin
  }
}
</script>

<style lang="less" scoped>
.login-page {
  background: white;
  padding: 50px 0;
}
</style>
