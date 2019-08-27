<template>
  <div>
    <product-banners :banners="info.merchandisePictures" />
    <product-info :info="info" />
    <product-details :details="info.detailedDescription" />
    <product-action />
  </div>
</template>

<script>
import ProductBanners from './components/ProductBanners'
import ProductInfo from './components/ProductInfo'
import ProductDetails from './components/ProductDetails'
import ProductAction from './components/ProductAction'
import { getProductById } from '@/api'
export default {
  components: {
    ProductBanners,
    ProductInfo,
    ProductDetails,
    ProductAction
  },
  data: () => ({
    info: {}
  }),
  created() {
    const id = parseInt(this.$route.params.id)
    this.getProductInfo(id)
  },
  methods: {
    // 根据ID获取商品信息
    async getProductInfo(id) {
      const { data } = await getProductById(id)
      this.info = data
    }
  }
}
</script>
