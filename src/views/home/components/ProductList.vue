<template>
  <van-list v-model="loading" :finished="finished" finished-text="到底了" class="product-list" @load="onLoad">
    <van-grid :gutter="6" :column-num="2" :border="false">
      <van-grid-item v-for="product in products" :key="product.id" :to="`/product/${product.id}`">
        <product-card :item="product" />
      </van-grid-item>
    </van-grid>
  </van-list>
</template>

<script>
import { List, Grid, GridItem } from 'vant'
import ProductCard from '@/components/ProductCard'
import { getProducts } from '@/api'
export default {
  components: {
    [List.name]: List,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    ProductCard
  },
  props: {
    products: {
      type: Array,
      default: () => []
    },
    count: {
      type: Number,
      default: 0
    }
  },
  data: () => ({
    loading: false
  }),
  computed: {
    finished() { // 判断是否到底
      return this.count <= this.products.length
    }
  },
  methods: {
    async onLoad() { // 加载更多内容
      const page = parseInt(this.products.length / 10)
      await this.getProducts(page + 1)
      this.loading = false
    },
    async getProducts(page) { // 获取推荐商品
      const { data } = await getProducts({ page })
      for (const item of data) {
        this.products.push(item)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.product-list
  margin-bottom: 58px
  background: #fff
</style>

