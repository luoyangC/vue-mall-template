<template>
  <van-tabs v-model="active" swipeable :sticky="true" :offset-top="54" class="product-tabs">
    <van-tab title="推荐" class="product-tab">
      <!-- 商品列表 -->
      <product-list :products="products" :count="count" />
    </van-tab>
    <van-tab title="数码" class="product-tab">
      <!-- 商品列表 -->
      <product-list :products="products" :count="count" />
    </van-tab>
    <van-tab title="办公" class="product-tab">
      <!-- 商品列表 -->
      <product-list :products="products" :count="count" />
    </van-tab>
    <van-tab title="美食" class="product-tab">
      <!-- 商品列表 -->
      <product-list :products="products" :count="count" />
    </van-tab>
    <van-tab title="游戏" class="product-tab">
      <!-- 商品列表 -->
      <product-list :products="products" :count="count" />
    </van-tab>
  </van-tabs>
</template>

<script>
import { Tab, Tabs } from 'vant'
import ProductList from '@/components/index/ProductList'
export default {
  name: 'ProductTabs',
  components: {
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    ProductList
  },
  props: {
    products: {
      type: Array,
      default: () => []
    },
    count: {
      type: Number,
      default: 0
    }
  },
  data: () => ({
    active: 0
  })
}
</script>

<style lang="stylus" scoped>
.product-tabs
  >>>.van-tabs__nav
    background-color transparent
    .van-tab
      color white
</style>
