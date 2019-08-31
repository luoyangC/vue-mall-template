<template>
  <van-swipe :autoplay="5000">
    <van-swipe-item v-for="banner in banners" :key="banner.id">
      <van-image fit="contain" :src="banner.image" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import { Swipe, SwipeItem } from 'vant'
export default {
  name: 'BannerSwipe',
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  data: () => ({
    banners: []
  }),
  created() {
    this.getBanners()
  },
  methods: {
    async getBanners() { // 获取首页banner列表
      const { data } = await this.$api.getBanners()
      this.banners = data
    }
  }
}
</script>
