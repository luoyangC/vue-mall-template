<template>
  <van-sku
    v-model="show"
    :sku="sku"
    :goods="goods"
    price-tag="￥"
    @buy-clicked="onBuyClicked"
    @add-cart="onAddCartClicked"
    @sku-close="cancel"
  />
</template>

<script>
import { Sku } from 'vant'
import { getProductSku } from '@/api'
export default {
  name: 'ProductSku',
  components: {
    [Sku.name]: Sku
  },
  props: {
    mode: {
      type: String,
      default: ''
    },
    product: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    show: false,
    sku: {},
    goods: {}
  }),
  watch: {
    mode(val) { // 监听mode变化，控制sku组件的显示和隐藏
      if (val) this.show = true
      else this.show = false
    },
    product(val) { // 监听product，设置goods属性
      this.goods = {
        title: val.name,
        picture: val.merchandisePictures[0].image
      }
    }
  },
  mounted() {
    this.getProductSku()
  },
  methods: {
    onBuyClicked(skuData) { // 点击立即购买
      console.log('buy', skuData)
    },
    async onAddCartClicked(skuData) { // 点击加入购物车
      const res = await this.$store.dispatch('cart/addCarts', {
        'id': skuData.selectedSkuComb.id,
        'title': this.goods.title,
        'modle': this.product.attributes,
        'origin': this.product.originalPrice,
        'present': this.product.currentPrice,
        'nums': skuData.selectedNum,
        'image': this.goods.picture
      })
      if (res) this.$toast.success('添加成功')
      this.cancel()
    },
    cancel() { // 关闭sku回调
      this.$emit('update:mode', '')
    },
    async getProductSku() { // 获取商品Sku
      const { data } = await getProductSku()
      const k = []
      const v = []
      const attributes = data.map(item => item.attributes.split(',')).flat()
      const tree = this.makeTree(k, v, attributes)
      const list = this.makeList(k, v, tree, data)
      const nums = this.makeNums(data)
      this.sku = {
        price: this.product.currentPrice, // 默认价格（单位元）
        none_sku: false, // 是否无规格商品
        hide_stock: false, // 是否隐藏剩余库存,
        stock_num: nums, // 默认库存数量
        tree: tree,
        list: list
      }
    },
    makeTree(k, v, attributes) { // 生成规格Tree
      const tree = []
      for (const attr of attributes) {
        const [key, val] = attr.split(':')
        const index = k.indexOf(key)
        if (index === -1) {
          k.push(key)
          v.push(val)
          tree.push({
            k: key,
            v: [{ id: v.length, name: val }],
            k_s: 's' + k.length
          })
        } else {
          v.push(val)
          tree[index].v.push({ id: v.length, name: val })
        }
      }
      return tree
    },
    makeList(k, v, tree, products) { // 生成规格列表
      const list = []
      for (const item of products) {
        const _attributes = {}
        item.attributes.split(',').forEach(_attr => {
          const k_i = k.indexOf(_attr.split(':')[0])
          const v_i = v.indexOf(_attr.split(':')[1])
          if (k_i === 0) this.makePicture(item, v_i, tree)
          _attributes['s' + (k_i + 1)] = v_i + 1
        })
        list.push({
          id: item.id,
          price: item.currentPrice,
          stock_num: item.inventory,
          ..._attributes
        })
      }
      return list
    },
    makePicture(item, v_i, tree) { // 生成主规格图片
      for (const i of tree[0].v) {
        if (i.id === v_i + 1) i.imgUrl = item.picture
      }
    },
    makeNums(products) { // 计算总库存
      let nums = 0
      for (const item of products) {
        nums += item.inventory
      }
      return nums
    }
  }
}
</script>
