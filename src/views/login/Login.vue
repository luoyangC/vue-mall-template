<template>
  <div class="login">
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

<style lang="stylus" scoped>
.login
  background: white
  padding: 50px 0
</style>
