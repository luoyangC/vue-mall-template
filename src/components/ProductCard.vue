<template>
  <div class="product-card">
    <van-image lazy-load :src="item.image"/>
    <div class="product-title">{{item.title}}</div>
    <div class="product-price">
      <s class="product-original">{{item.original}}</s>
      <span class="product-present">{{item.present}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  }
}
</script>

<style lang="less" scoped>
.product-title{
  font-size: 10px;
}
.product-price {
  font-size: 8px;
  text-align: center;
  .product-present {
    color: @orange;
  }
}
</style>
