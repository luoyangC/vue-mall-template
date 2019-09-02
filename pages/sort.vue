<template>
  <van-tree-select
    height="92.5vh"
    :items="items"
    :main-active-index.sync="mainActiveIndex"
  >
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
    mainActiveIndex: 0
  }),
  computed: {
    mainActiveId() {
      if (this.items.length) return this.items[this.mainActiveIndex].id
      return 1
    }
  },
  asyncData: async({ app }) => {
    const { data } = await app.$api.getCategories()
    const items = data.map(item => ({ text: item.title, id: item.id }))
    return { items }
  }
}
</script>

<style lang="stylus" scoped>
>>>.van-tree-select__nav-item
  height: 58px
  line-height: 58px

>>>.van-tree-select__content
  flex: 3
</style>
