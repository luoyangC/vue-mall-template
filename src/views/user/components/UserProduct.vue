<template>
  <div class="user-product">
    <div class="user-product__title">专属推荐</div>
    <van-grid class="user-product__list" :gutter="6" :column-num="3" :border="false">
      <van-grid-item v-for="product in products" :key="product.id" :to="`/product/${product.id}`">
        <product-card :item="product" />
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { Grid, GridItem } from 'vant'
import ProductCard from '@/components/ProductCard'
import { getProducts } from '@/api'
export default {
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    ProductCard
  },
  data: () => ({
    products: []
  }),
  created() {
    this.getProducts()
  },
  methods: {
    async getProducts() {
      const { data } = await getProducts()
      this.products = data
    }
  }
}
</script>

<style lang="stylus" scoped>
.user-product
  &__list
    margin-bottom: 58px
    background: #fff
  &__title
    text-align: center
    font-size: 14px
    margin-top: 10px
</style>
