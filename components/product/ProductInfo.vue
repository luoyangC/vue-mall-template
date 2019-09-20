<template>
  <div class="product-info">
    <div class="product-info__price">
      <span class="product-info__present">￥{{ info.currentPrice }}</span>
      <s class="product-info__origin">￥{{ info.originalPrice }}</s>
    </div>
    <div class="product-info__title">{{ info.name }}</div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="stylus" scoped>
.product-info
  background: white
  padding: 16px
  &__price
    display: flex
    align-items: flex-end
    margin-bottom: 8px
  &__present
    color: orangered
    font-size: 24px
    font-weight: 800
  &__origin
    margin-left: 8px
    color: #999
    font-size: 16px
</style>
