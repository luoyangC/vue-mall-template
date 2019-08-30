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
