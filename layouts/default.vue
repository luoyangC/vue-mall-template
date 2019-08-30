<template>
  <div class="default-container">
    <!-- 页面 -->
    <keep-alive>
      <nuxt />
    </keep-alive>
    <!-- 底栏 -->
    <van-tabbar route style="background: pink">
      <van-tabbar-item to="/" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item to="/sort" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
}
</script>

<style lang="stylus" scoped>
>>>.van-tabbar-item
  color white
>>>.van-tabbar-item--active
  color #1989fa
</style>
