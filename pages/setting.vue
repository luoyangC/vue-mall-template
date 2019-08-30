<template>
  <div>
    <van-button type="default" style="width: 100%" @click="handleLogout">退出登录</van-button>
  </div>
</template>

<script>

export default {
  name: 'Setting',
  layout: 'general',
  middleware: 'auth',
  methods: {
    handleLogout() {
      this.$store.dispatch('user/logout')
      this.$router.push('/')
    }
  }
}
</script>
