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
import { getCategorys } from '@/api'
import SortContent from './SortContent'
export default {
  name: 'SortSidebar',
  components: {
    [TreeSelect.name]: TreeSelect,
    SortContent
  },
  data: () => ({
    mainActiveIndex: 0,
    items: []
  }),
  computed: {
    mainActiveId() {
      if (this.items.length) return this.items[this.mainActiveIndex].id
      return 1
    }
  },
  created() {
    this.getCategorys()
  },
  methods: {
    // 获取分类数据
    async getCategorys() {
      const { data } = await getCategorys()
      this.items = data.map(item => ({ text: item.title, id: item.id }))
      console.log(this.items)
    }
  }
}
</script>

<style lang="less" scoped>
/deep/.van-tree-select__nav-item {
  height: 58px;
  line-height: 58px;
}
/deep/.van-tree-select__content {
  flex: 3;
}
</style>
