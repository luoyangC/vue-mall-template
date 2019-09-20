<template>
  <div class="product-card">
    <van-image lazy-load :src="item.merchandisePictures[0].image" />
    <div class="product-card__title">{{ item.name }}</div>
    <div class="product-card__price">
      <span class="product-card__present">￥{{ item.currentPrice }}</span>
      <s class="product-card__original">￥{{ item.originalPrice }}</s>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => []
    }
  }
}
</script>

<style lang="stylus" scoped>
.product-card
  &__title
    height: 32px
    font-size: 12px
    font-weight: 500
    color: #666
    overflow: hidden
    text-overflow: ellipsis
  &__price
    font-size: 10px
    font-weight: 600
    color: #999
  &__present
    color: orange
    font-size: 14px
    font-weight: 800
    margin-right: 6px
</style>
