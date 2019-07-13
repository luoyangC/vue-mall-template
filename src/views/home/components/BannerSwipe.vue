<template>
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <van-image height="200" fit="contain" :src="image"/>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import { Swipe, SwipeItem  } from "vant";
export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  data: () => ({
    images: [
      'https://img.yzcdn.cn/vant/apple-2.jpg',
      'https://img.yzcdn.cn/vant/apple-3.jpg',
      'https://img.yzcdn.cn/vant/apple-4.jpg',
    ]
  })
}
</script>

<style lang="less" scoped>
.van-swipe-item{
  background: #fff;
}
</style>

