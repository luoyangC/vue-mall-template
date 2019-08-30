<template>
  <div class="product-detail">
    <van-image v-for="detail in details" :key="detail.id" lazy-load :src="detail.image" />
  </div>
</template>

<script>
export default {
  props: {
    details: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="stylus" scoped>
.product-detail {
  .van-image {
    margin-bottom: -3px;
  }
}
</style>
