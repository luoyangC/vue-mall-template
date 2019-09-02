<template>
  <div class="layout-container">
    <!-- 页面 -->
    <div>
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
    <!-- 底栏 -->
    <van-tabbar route style="background: pink">
      <van-tabbar-item to="/home" icon="home-o">{{ $t('layout.home') }}</van-tabbar-item>
      <van-tabbar-item to="/sort" icon="apps-o">{{ $t('layout.sort') }}</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="shopping-cart-o">{{ $t('layout.cart') }}</van-tabbar-item>
      <van-tabbar-item to="/user" icon="user-o">{{ $t('layout.user') }}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
export default {
  name: 'Layout',
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
}
</script>

<style lang="less" scoped>
/deep/.van-tabbar-item{
  color: white;
}
/deep/.van-tabbar-item--active{
  color: #1989fa;
}
</style>
