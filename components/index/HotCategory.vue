<template>
  <van-grid class="category-list" :column-num="5" :border="false">
    <van-grid-item
      v-for="category in categorys"
      :key="category.id"
      class="category-item"
      :icon="category.image"
      :text="category.title"
    />
  </van-grid>
</template>

<script>
import { Grid, GridItem } from 'vant'
export default {
  name: 'HotCategory',
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem
  },
  data: () => ({
    categorys: []
  }),
  created() {
    this.getCategorys()
  },
  methods: {
    // 获取分类数据
    async getCategorys() {
      const { data } = await this.$axios.get('/dev-api/categories')
      this.categorys = data
    }
  }
}
</script>

<style lang="stylus" scoped>
.category-list
  padding-bottom: 8px

.category-item
  >>>.van-grid-item__content
    padding: 8px
  >>>.van-grid-item__icon
    font-size: 52px
</style>
