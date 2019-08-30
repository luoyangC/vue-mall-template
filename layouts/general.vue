<template>
  <div class="general-container">
    <!-- 顶栏 -->
    <van-nav-bar :title="this.$route.meta.title" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <van-icon slot="right" name="search" />
    </van-nav-bar>
    <!-- 页面 -->
    <transition>
      <keep-alive>
        <nuxt />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import { NavBar } from 'vant'
export default {
  components: {
    [NavBar.name]: NavBar
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      this.$toast('搜索')
    }
  }
}
</script>
