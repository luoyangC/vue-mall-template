<template>
  <van-grid class="product-list" :gutter="6" :column-num="3" :border="false">
    <van-grid-item v-for="product in products" :key="product.id" :to="`/product/${product.id}`">
      <product-card :item="product" />
    </van-grid-item>
  </van-grid>
</template>

<script>
import { Grid, GridItem } from 'vant'
import ProductCard from '@/components/ProductCard'
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
      const { data } = await this.$axios.get('/dev-api/products')
      this.products = data
    }
  }
}
</script>

<style lang="stylus" scoped>
.product-list
  margin-bottom: 58px
  background: #fff
</style>

