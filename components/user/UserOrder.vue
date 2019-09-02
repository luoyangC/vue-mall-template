<template>
  <div class="user-order">
    <div class="order-title">我的订单</div>
    <van-grid :column-num="5">
      <van-grid-item icon="card" text="待付款" />
      <van-grid-item icon="shop" text="待发货" />
      <van-grid-item icon="point-gift" text="待收货" />
      <van-grid-item icon="comment" text="评价" />
      <van-grid-item icon="service" text="售后" />
    </van-grid>
  </div>
</template>

<script>
import { Grid, GridItem } from 'vant'
export default {
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem
  }
}
</script>

<style lang="stylus" scoped>
.user-order
  margin: -10px 30px 0 20px
  background: white
  padding: 8px
  border-radius: 10px
  color orange
  .order-title
    padding-bottom 4px
  >>>.van-grid-item__content
    padding 8px
  >>>.van-grid-item__content::after
    border-width 0
</style>
