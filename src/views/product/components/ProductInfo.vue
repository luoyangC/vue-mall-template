<template>
  <div class="info">
    <div class="price">
      <span class="present">￥{{info.present}}</span>
      <s class="origin">￥{{info.origin}}</s>
    </div>
    <div>{{info.title}}</div>
  </div>
</template>

<script>
export default {
  props: {
    info: Object
  }
}
</script>

<style lang="less" scoped>
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
