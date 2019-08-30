<template>
  <div>
    <product-banners :banners="product.merchandisePictures" />
    <product-info :info="product" />
    <product-details :details="product.detailedDescription" />
    <product-action @open-sku="handleOpenSku" />
    <product-sku :mode.sync="mode" :product="product" />
  </div>
</template>

<script>
import ProductBanners from '@/components/product/ProductBanners'
import ProductInfo from '@/components/product/ProductInfo'
import ProductDetails from '@/components/product/ProductDetails'
import ProductAction from '@/components/product/ProductAction'
import ProductSku from '@/components/product/ProductSku'
export default {
  name: 'Product',
  layout: 'general',
  components: {
    ProductBanners,
    ProductInfo,
    ProductDetails,
    ProductAction,
    ProductSku
  },
  data: () => ({
    mode: '',
    product: {}
  }),
  created() {
    const id = parseInt(this.$route.params.id)
    this.getProductInfo(id)
  },
  methods: {
    // 根据ID获取商品信息
    async getProductInfo(id) {
      const { data } = await this.$axios.get(`/dev-api/product/${id}`)
      this.product = data
    },
    // 开启sku选择
    handleOpenSku(mode) {
      this.mode = mode
    }
  }
}
</script>
