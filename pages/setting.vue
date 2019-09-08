<template>
  <div>
    <van-cell-group>
      <van-cell title="示例（一些小demo）" is-link clickable to="/about" />
      <van-cell title="文档（还在写/(ㄒoㄒ)/~~）" is-link clickable @click="$toast('尽请期待')" />
      <van-cell title="源码（就是github地址啦~\(≧▽≦)/~）" is-link clickable url="https://github.com/luoyangC/vue-mall-template" />
      <van-cell title="关于（作者的个人博客(*^__^*)）" is-link clickable url="https://www.luoyangc.cn" />
    </van-cell-group>
    <van-button type="default" class="logout-btn" @click="handleLogout">退出登录</van-button>
  </div>
</template>

<script>
import { Cell, CellGroup } from 'vant'
export default {
  name: 'Setting',
  middleware: 'auth',
  components: {
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell
  },
  methods: {
    handleLogout() {
      this.$store.dispatch('user/logout')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus" scoped>
.logout-btn
  position: absolute
  bottom: 0
  width: 100%
</style>
