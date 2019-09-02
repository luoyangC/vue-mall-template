<template>
  <div>
    <div class="product-title">专属推荐</div>
    <van-grid class="product-list" :gutter="6" :column-num="3" :border="false">
      <van-grid-item v-for="product in products" :key="product.id" :to="`/page/product/${product.id}`">
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

<style lang="less" scoped>
.product-list{
  margin-bottom: 58px;
  background: #fff;
}
.product-title{
  text-align: center;
  font-size: 14px;
  color: pink;
  margin-top: 10px;
}
</style>
