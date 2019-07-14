<template>
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="banner in banners" :key="banner.id">
      <van-image height="200" fit="contain" :src="banner.image"/>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';
export default {
  props: {
    banners: Array
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  }
}
</script>

<style lang="less" scoped>
.van-swipe-item{
  text-align: center;
  background: white;
}
</style>
