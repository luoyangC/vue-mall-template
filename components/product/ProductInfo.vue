<template>
  <div class="info">
    <div class="price">
      <span class="present">￥{{ info.currentPrice }}</span>
      <s class="origin">￥{{ info.originalPrice }}</s>
    </div>
    <div>{{ info.name }}</div>
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
.info {
  background: white;
  padding: 16px;
  .price {
    display: flex;
    align-items: flex-end;
    margin-bottom: 8px;
    .present {
      color: orangered;
      font-size: 24px;
      font-weight: 800;
    }
    .origin {
      margin-left: 8px;
      color: #999;
      font-size: 16px;
    }
  }
}
</style>
