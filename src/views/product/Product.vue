<template>
  <div>
    <product-banners :banners="banners" />
    <product-info :info="info" />
    <product-details :details="details" />
    <product-action />
  </div>
</template>

<script>
import ProductBanners from './components/ProductBanners'
import ProductInfo from './components/ProductInfo'
import ProductDetails from './components/ProductDetails'
import ProductAction from './components/ProductAction'
import { getProducts, getDetail } from '@/api'
export default {
  components: {
    ProductBanners,
    ProductInfo,
    ProductDetails,
    ProductAction
  },
  data: () => ({
    banners: [],
    info: {},
    details: []
  }),
  created() {
    const id = parseInt(this.$route.params.id)
    this.getProductInfo(id)
    this.getDetail()
  },
  methods: {
    // 根据ID获取商品信息
    async getProductInfo(id) {
      const data = await getProducts()
      for (const item of data.products) {
        if (item.id === id) {
          this.info = item
          break
        }
      }
    },
    // 获取商品详情
    async getDetail() {
      const data = await getDetail()
      this.banners = data.product.banners
      this.details = data.product.details
    }
  }
}
</script>
