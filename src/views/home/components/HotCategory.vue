<template>
  <van-grid class="hot-category-list" :column-num="5" :border="false">
    <van-grid-item
      v-for="category in categories"
      :key="category.id"
      :icon="category.image"
      :text="category.title"
      class="hot-category-item"
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
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="stylus" scoped>
.hot-category
  &-list
    padding-bottom: 8px
  &-item
    >>>.van-grid-item__content
      padding: 8px
      background-color transparent
    >>>.van-grid-item__icon
      font-size: 52px
</style>
