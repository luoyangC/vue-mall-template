<template>
  <div class="sort-content">
    <van-image height="100" :src="banner" class="sort-banner" />
    <van-grid :column-num="3" :gutter="10">
      <van-grid-item
        v-for="item in items"
        :key="item.id"
        :icon="item.image"
        :text="item.title"
        class="sort-item"
      />
    </van-grid>
  </div>
</template>

<script>
import { Grid, GridItem } from 'vant'
export default {
  name: 'SortContent',
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem
  },
  props: {
    activeId: { // 一级分类id
      type: Number,
      default: 1
    }
  },
  data: () => ({
    banner: '',
    items: []
  }),
  watch: {
    activeId(val) { // 监听一级分类id，一旦改变重新获取分类详情
      this.getDetail(val)
    }
  },
  created() {
    this.getDetail(this.activeId)
  },
  methods: {
    async getDetail(id) { // 获取一级分类详情
      const { data } = await this.$api.getSorts(id)
      this.banner = data.banner.image
      this.items = data.sorts
    }
  }
}
</script>

<style lang="stylus" scoped>
.sort-banner
  margin: 10px
  height: 125px
  overflow: hidden

.sort-item
  >>>.van-grid-item
    &__content
      padding: 8px
    &__icon
      font-size: 52px
    &__text
     font-size: 8px
</style>
