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
import { getCategorys } from '@/api'
export default {
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem
  },
  data: () => ({
    categorys: []
  }),
  mounted() {
    this.getCategorys()
  },
  methods: {
    // 获取分类数据
    async getCategorys() {
      const { data } = await getCategorys()
      this.categorys = data
    }
  }
}
</script>

<style lang="less" scoped>
.category-list{
  padding-bottom: 8px;
}

.category-item {
  /deep/ .van-grid-item__content {
    padding: 8px
  }
  /deep/ .van-grid-item__icon {
    font-size: 52px
  }
}
</style>
