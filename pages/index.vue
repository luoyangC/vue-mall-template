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
import { PullRefresh } from 'vant'
import SearchBar from '@/components/index/SearchBar'
import BannerSwipe from '@/components/index/BannerSwipe'
import HotCategory from '@/components/index/HotCategory'
import ProductList from '@/components/index/ProductList'
export default {
  name: 'Index',
  components: {
    [PullRefresh.name]: PullRefresh,
    SearchBar,
    BannerSwipe,
    HotCategory,
    ProductList
  },
  data: () => ({
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
    }
  }
}
</script>
