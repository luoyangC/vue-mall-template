<template>
  <van-pull-refresh v-model="isLoading" class="home" @refresh="onRefresh">
    <!-- 搜索组件 -->
    <search-bar />
    <!-- 轮播图组件 -->
    <banner-swipe />
    <!-- 热门分类 -->
    <hot-category />
    <!-- 商品列表 -->
    <product-list />
  </van-pull-refresh>
</template>

<script>
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
    isLoading: false
  }),
  methods: {
    // 下拉刷新功能测试
    onRefresh() {
      setTimeout(() => {
        this.$toast.success('刷新成功')
        this.isLoading = false
      }, 500)
    }
  }
}
</script>
