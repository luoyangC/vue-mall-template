<template>
  <div class="product-detail">
    <van-image v-for="detail in details" :key="detail.id" lazy-load :src="detail.image"/>
  </div>
</template>

<script>
export default {
  props: {
    details: Array
  }
}
</script>

<style lang="less" scoped>
.product-detail {
  .van-image {
    margin-bottom: -3px;
  }
}
</style>
