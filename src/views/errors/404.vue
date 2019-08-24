<template>
  <div class="error">
    <p>页面被噬元兽吞噬了</p>
    <van-button icon="arrow-left" type="info" @click="onBack">返回</van-button>
    <van-button icon="home-o" type="info" to="/home">首页</van-button>
  </div>
</template>

<script>
export default {
  methods: {
    onBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.error {
  background: #fff;
  text-align: center;
  margin-top: 26px;
  .van-button {
    margin: 16px;
  }
}
</style>

