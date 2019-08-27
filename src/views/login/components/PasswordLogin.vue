<template>
  <van-cell-group>
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
        class="register-btn"
        @click="$toast('占无注册')"
      >注册新账号</van-button>
      <van-button
        :disabled="!loginForm.password || !loginForm.username"
        type="danger"
        class="login-btn"
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
      username: '',
      password: ''
    }
  }),
  methods: {
    async handleLogin() {
      const res = await this.$store.dispatch('user/login', this.loginForm)
      if (res) {
        this.loginForm = { username: '', password: '' }
        setTimeout(() => {
          this.$router.go(-1)
          this.$toast.success('登录成功')
        }, 200)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-btn {
  width: 40%;
  margin: 10px 0;
}
.register-btn {
  width: 40%;
  margin: 10px 0;
}
</style>
