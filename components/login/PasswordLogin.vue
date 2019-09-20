<template>
  <van-cell-group class="login-form">
    <van-field
      v-model="loginForm.username"
      clickable
      label="账号"
      left-icon="manager"
      placeholder="请输入用户名"
    />
    <van-field
      v-model="loginForm.password"
      type="password"
      label="密码"
      clickable
      left-icon="lock"
      placeholder="请输入密码"
    />
    <van-row type="flex" justify="space-around">
      <van-button
        plain
        hairline
        type="info"
        class="login-form__register"
        @click="$toast('暂无注册，输入任意内容登录')"
      >注册新账号</van-button>
      <van-button
        :disabled="!loginForm.password || !loginForm.username"
        type="danger"
        class="login-form__login"
        @click="handleLogin"
      >登录</van-button>
    </van-row>
  </van-cell-group>
</template>

<script>
import { CellGroup, Field, Row } from 'vant'
export default {
  name: 'PasswordLogin',
  components: {
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Row.name]: Row
  },
  data: () => ({
    loginForm: {
      username: 'luoyangC',
      password: 'luoyangC'
    }
  }),
  methods: {
    async handleLogin() {
      const res = await this.$store.dispatch('user/login', this.loginForm)
      if (res) {
        this.loginForm = { username: '', password: '' }
        setTimeout(() => {
          this.$router.push({ name: this.$route.query.redirect })
          this.$toast.success('登录成功')
        }, 200)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.login-form
  &__login
    width: 40%
    margin: 10px 0
  &__register
    width: 40%
    margin: 10px 0
</style>
