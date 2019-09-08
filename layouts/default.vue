<template>
  <div id="container">
    <!-- 顶栏 -->
    <van-nav-bar v-if="isTableNav" :title="this.$route.meta.title" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <van-icon slot="right" name="search" />
    </van-nav-bar>
    <!-- 页面 -->
    <nuxt keep-alive :keep-alive-props="{ include: ['Index', 'Sort', 'Cart', 'User'] }" />
    <!-- 底栏 -->
    <van-tabbar v-if="!isTableNav" route style="background: pink">
      <van-tabbar-item to="/" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item to="/sort" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { NavBar, Tabbar, TabbarItem } from 'vant'
export default {
  components: {
    [NavBar.name]: NavBar,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  computed: {
    isTableNav() {
      const currentPath = this.$route.name
      const tablePaths = ['index', 'sort', 'cart', 'user']
      return tablePaths.indexOf(currentPath) === -1
    }
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

<style lang="stylus" scoped>
>>>.van-tabbar-item
  color white
>>>.van-tabbar-item--active
  color #1989fa
</style>
