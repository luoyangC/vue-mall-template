<template>
  <van-pull-refresh class="home" v-model="isLoading" @refresh="onRefresh">
    <!-- 搜索组件 -->
    <search-bar></search-bar>
    <!-- 轮播图组件 -->
    <banner-swipe></banner-swipe>
    <!-- 热门分类 -->
    <hot-category></hot-category>
  </van-pull-refresh>
</template>

<script>
import { PullRefresh } from "vant";
import SearchBar from "./components/SearchBar"
import BannerSwipe from "./components/BannerSwipe"
import HotCategory from "./components/HotCategory"
export default {
  name: "home",
  components: {
    [PullRefresh.name]: PullRefresh,
    SearchBar,
    BannerSwipe,
    HotCategory
  },
  data: () => ({
    isLoading: false,
  }),
  methods: {
    // toast功能测试
    handleBtn() {
      this.$toast.success('提示')
    },
    // 下拉刷新功能测试
    onRefresh() {
      setTimeout(() => {
        this.$toast.success('刷新成功')
        this.isLoading = false
      }, 500);
    },
  },
  mounted() {
    this.$store.dispatch('user/changeUserInfo', 'amor')
  }
};
</script>

<style lang="less">
</style>
