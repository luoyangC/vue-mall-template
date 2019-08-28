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
import { getSorts } from '@/api'
import { Grid, GridItem } from 'vant'
export default {
  name: 'SortContent',
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem
  },
  props: {
    activeId: {
      type: Number,
      default: 1
    }
  },
  data: () => ({
    banner: '',
    items: []
  }),
  watch: {
    activeId(val) {
      this.getDetail(val)
    }
  },
  created() {
    this.getDetail(this.activeId)
  },
  methods: {
    async getDetail(id) {
      const { data } = await getSorts(id)
      this.banner = data.banner.image
      this.items = data.sorts
    }
  }
}
</script>

<style lang="less" scoped>
.sort-banner {
  margin: 10px;
  height: 125px;
  overflow: hidden;
}
.sort-item {
  /deep/.van-grid-item__content {
    padding: 8px;
  }
  /deep/.van-grid-item__icon {
    font-size: 52px;
  }
  /deep/.van-grid-item__text {
    font-size: 8px;
  }
}
</style>
