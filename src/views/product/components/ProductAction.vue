<template>
  <van-goods-action>
    <van-goods-action-icon icon="chat-o" text="客服" />
    <van-goods-action-icon :info="carts.length" to="/cart" icon="cart-o" text="购物车" />
    <van-goods-action-icon icon="shop-o" text="店铺" />
    <van-goods-action-button type="warning" text="加入购物车" @click="handleToCart" />
    <van-goods-action-button type="danger" text="立即购买" @click="handleToBuy" />
  </van-goods-action>
</template>

<script>
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant'
import { mapGetters } from 'vuex'
export default {
  components: {
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton
  },
  computed: {
    ...mapGetters([
      'carts'
    ])
  },
  methods: {
    async handleToCart() {
      this.$emit('open-sku', 'cart')
    },
    async handleToBuy() {
      this.$emit('open-sku', 'buy')
    }
  }
}
</script>
