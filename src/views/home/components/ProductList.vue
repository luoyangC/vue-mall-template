<template>
  <van-grid class="product-list" :gutter="6" :column-num="3" :border="false">
    <van-grid-item v-for="product in products" :key="product.id">
      <product-card :item="product"></product-card>
    </van-grid-item>
  </van-grid>
</template>

<script>
import { Grid, GridItem } from 'vant';
import { getProducts } from "@/api";
import ProductCard from "@/components/ProductCard"
export default {
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    ProductCard
  },
  data: () => ({
    products: []
  }),
  methods: {
    async getProducts() {
      let data = await getProducts()
      this.products = data.products
    }
  },
  mounted() {
    this.getProducts()
  }
}
</script>

<style lang="less" scoped>
.product-list{
  margin-bottom: 58px;
  background: #fff;
}
</style>

