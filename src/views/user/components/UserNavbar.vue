<template>
  <van-nav-bar fixed :border="false" style="background-color:transparent" @click-right="onClickRight">
    <van-icon slot="right" size="20px" color="white" name="setting-o" />
  </van-nav-bar>
</template>

<script>
import { NavBar } from 'vant'
export default {
  name: 'UserNavbar',
  components: {
    [NavBar.name]: NavBar
  },
  methods: {
    onClickRight() {
      this.$router.push({ name: 'setting' })
    }
  }
}
</script>
