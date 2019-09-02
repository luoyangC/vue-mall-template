<template>
  <div>
    <vant-cell-group>
      <van-cell title="关于" is-link to="/about" />
    </vant-cell-group>
    <van-button type="default" style="width: 100%" @click="handleLogout">退出登录</van-button>
  </div>
</template>

<script>
import { Cell, CellGroup } from 'vant'
export default {
  name: 'Setting',
  layout: 'general',
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
