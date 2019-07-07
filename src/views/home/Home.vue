<template>
  <van-pull-refresh class="home" v-model="isLoading" @refresh="onRefresh">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <van-image height="200" fit="contain" :src="image"/>
      </van-swipe-item>
    </van-swipe>
  </van-pull-refresh>
</template>

<script>
import { getCitys } from "@/api";
import { PullRefresh, Swipe, SwipeItem  } from "vant";
export default {
  name: "home",
  components: {
    [PullRefresh.name]: PullRefresh,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  data: () => ({
    isLoading: false,
    images: [
      'https://img.yzcdn.cn/vant/apple-2.jpg',
      'https://img.yzcdn.cn/vant/apple-3.jpg',
      'https://img.yzcdn.cn/vant/apple-4.jpg',
    ]
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
    async getCitys() {
      let data = await getCitys()
      console.log(data)
    }
  },
  mounted() {
    this.$store.dispatch('user/changeUserInfo', 'amor')
    this.getCitys()
  }
};
</script>

<style lang="less">
</style>
