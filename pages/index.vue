<template>
  <van-pull-refresh v-model="isLoading" class="index" @refresh="onRefresh">
    <!-- 搜索组件 -->
    <search-bar />
    <!-- 轮播图组件 -->
    <banner-swipe :banners="banners" />
    <!-- 热门分类 -->
    <hot-category :categories="categories" />
    <van-tabs v-model="active" swipeable :sticky="true" :offset-top="54" background="pink">
      <van-tab title="推荐">
        <!-- 商品列表 -->
        <product-list :products="products" :count="count" />
      </van-tab>
      <van-tab title="数码">
        <!-- 商品列表 -->
        <product-list :products="products" :count="count" />
      </van-tab>
      <van-tab title="办公">
        <!-- 商品列表 -->
        <product-list :products="products" :count="count" />
      </van-tab>
      <van-tab title="美食">
        <!-- 商品列表 -->
        <product-list :products="products" :count="count" />
      </van-tab>
      <van-tab title="游戏">
        <!-- 商品列表 -->
        <product-list :products="products" :count="count" />
      </van-tab>
    </van-tabs>
  </van-pull-refresh>
</template>

<script>
import restoreScroll from '@/mixins/restoreScroll'
import { PullRefresh, Tab, Tabs } from 'vant'
import SearchBar from '@/components/index/SearchBar'
import BannerSwipe from '@/components/index/BannerSwipe'
import HotCategory from '@/components/index/HotCategory'
import ProductList from '@/components/index/ProductList'
export default {
  name: 'Index',
  components: {
    [PullRefresh.name]: PullRefresh,
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    SearchBar,
    BannerSwipe,
    HotCategory,
    ProductList
  },
  mixins: [restoreScroll],
  data: () => ({
    active: 0,
    isLoading: false
  }),
  asyncData: async({ app }) => { // 初始化数据
    const { data: banners } = await app.$api.getBanners()
    const { data: categories } = await app.$api.getCategories()
    const { data: products, count } = await app.$api.getProducts()
    return { banners, categories, products, count }
  },
  methods: {
    async onRefresh() { // 下拉刷新
      const { data, count } = await this.$api.getProducts()
      this.products.splice(0, this.products.length, ...data)
      this.count = count
      this.$toast.success('刷新成功')
      this.isLoading = false
    },
    async getProductsByCate() { // 获取指定分类商品列表

    }
  }
}
</script>

<style lang="stylus">
.van-tab
  color white
.van-tab--active
  color #f44 !important
</style>
