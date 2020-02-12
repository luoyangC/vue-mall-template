<template>
  <van-tree-select :items="categories" :main-active-index.sync="mainActiveIndex" class="sort">
    <template v-slot:content>
      <sort-content :active-id="mainActiveId" />
    </template>
  </van-tree-select>
</template>

<script>
import { TreeSelect } from 'vant'
import SortContent from '@/components/sort/SortContent'
export default {
  name: 'Sort',
  components: {
    [TreeSelect.name]: TreeSelect,
    SortContent
  },
  data: () => ({
    mainActiveIndex: 0 // 选中的一级分类索引
  }),
  computed: {
    mainActiveId() { // 选中的一级分类对应的id
      if (this.categories.length) return this.categories[this.mainActiveIndex].id
      return 1
    }
  },
  asyncData: async({ app }) => {
    const { data } = await app.$api.getCategories() // 获取一级分类
    const categories = data.map(item => ({ text: item.title, id: item.id }))
    return { categories }
  }
}
</script>

<style lang="stylus" scoped>
.sort
  height 92.5vh !important
  >>>.van-tree-select
    &__nav-item
      height: 58px
      line-height: 58px
    &__content
      flex: 3
</style>
