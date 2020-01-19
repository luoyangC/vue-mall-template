<template>
  <div class="product">
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
  components: {
    ProductBanners,
    ProductInfo,
    ProductDetails,
    ProductAction,
    ProductSku
  },
  asyncData: async({ app, params }) => {
    const id = parseInt(params.id)
    const { data: product } = await app.$api.getProductInfo(id)
    return {
      product: product
    }
  },
  data: () => ({
    mode: ''
  }),
  methods: {
    // 开启sku选择
    handleOpenSku(mode) {
      this.mode = mode
    }
  }
}
</script>
