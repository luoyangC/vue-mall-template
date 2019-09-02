<template>
  <div>
    <!-- 顶栏 -->
    <van-nav-bar :title="this.$route.meta.title" left-text="返回" left-arrow style="background: pink" @click-left="onClickLeft" @click-right="onClickRight">
      <van-icon slot="right" name="search" />
    </van-nav-bar>
    <!-- 页面 -->
    <div>
      <transition>
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
import { NavBar } from 'vant'
export default {
  name: 'Navbar',
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

<style lang="less" scoped>
/deep/.van-nav-bar__title{
  color: white;
}
</style>
