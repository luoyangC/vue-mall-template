<template>
  <van-pull-refresh v-model="isLoading" class="home" @refresh="onRefresh">
    <!-- 搜索组件 -->
    <search-bar />
    <!-- 轮播图组件 -->
    <banner-swipe :banners="banners" />
    <!-- 热门分类 -->
    <hot-category :categories="categories" />
    <!-- 商品列表 -->
    <product-list :products="products" :count="count" />
  </van-pull-refresh>
</template>

<script>
import { getBanners, getCategories, getProducts } from '@/api'
import { PullRefresh } from 'vant'
import SearchBar from './components/SearchBar'
import BannerSwipe from './components/BannerSwipe'
import HotCategory from './components/HotCategory'
import ProductList from './components/ProductList'
export default {
  name: 'Home',
  components: {
    [PullRefresh.name]: PullRefresh,
    SearchBar,
    BannerSwipe,
    HotCategory,
    ProductList
  },
  data: () => ({
    banners: [],
    categories: [],
    products: [],
    count: 0,
    isLoading: false
  }),
  created() {
    this.initData()
  },
  methods: {
    async onRefresh() { // 下拉刷新
      const { data, count } = await getProducts()
      this.products.splice(0, this.products.length, ...data)
      this.count = count
      this.$toast.success('刷新成功')
      this.isLoading = false
    },
    async initData() {
      const { data: banners } = await getBanners()
      const { data: categories } = await getCategories()
      const { data: products, count } = await getProducts()
      this.banners = banners
      this.categories = categories
      this.products = products
      this.count = count
    }
  }
}
</script>
