<template>
  <van-pull-refresh class="home" v-model="isLoading" @refresh="onRefresh">
    <van-button class="home-btn" type="info" @click="handleBtn">{{$t('home.bottom', {name: 'Jelly'})}}</van-button>
    <div>{{15261829198 | formatPhone}}</div>
    <router-link to="/page/about">关于</router-link>
  </van-pull-refresh>
</template>

<script>
import { PullRefresh } from "vant";
export default {
  name: "home",
  components: {
    [PullRefresh.name]: PullRefresh,
  },
  data: () => ({
    isLoading: false
  }),
  methods: {
    handleBtn() {
      this.$toast.success('提示')
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast.success('刷新成功')
        this.isLoading = false
      }, 500);
    }
  },
  mounted() {
    this.$store.dispatch('user/changeUserInfo', 'amor')
    this.$axios.get('sentence')
  }
};
</script>

<style lang="less">
</style>
