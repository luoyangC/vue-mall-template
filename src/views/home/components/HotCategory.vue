<template>
  <van-grid class="category-list" :column-num="5" :border="false">
    <van-grid-item
      class="category-item"
      v-for="category in categorys"
      :key="category.id"
      :icon="category.image"
      :text="category.title"
    />
  </van-grid>
</template>

<script>
import { Grid, GridItem } from 'vant';
import { getCategorys } from '@/api';
export default {
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
  },
  data: () => ({
    categorys: []
  }),
  methods: {
    // 获取分类数据
    async getCategorys() {
      let data = await getCategorys()
      this.categorys = data.categorys
    }
  },
  mounted() {
    this.getCategorys()
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
