<template>
  <van-swipe :autoplay="5000" class="banner-swipe">
    <van-swipe-item v-for="banner in banners" :key="banner.id">
      <van-image fit="contain" :src="banner.image">
        <template v-slot:loading>
          <van-loading type="spinner" size="20" />
        </template>
      </van-image>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import { Swipe, SwipeItem, Loading } from 'vant'
export default {
  name: 'BannerSwipe',
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Loading.name]: Loading
  },
  props: {
    banners: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner-swipe
  height 30vw
  margin-top 54px
  >>>.van-image__loading
    width 100vw
    margin-top 12vw
</style>

