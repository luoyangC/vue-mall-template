<template>
  <van-panel title="搜索历史" class="search-content">
    <div class="search-content-history">
      <van-tag
        v-for="item in tags"
        :key="item"
        round
        class="search-content-history__tag"
        @click.stop="$toast(item)"
      >{{ item }}</van-tag>
    </div>
  </van-panel>
</template>

<script>
import { Panel, Tag } from 'vant'
export default {
  components: {
    [Panel.name]: Panel,
    [Tag.name]: Tag
  },
  props: {
    tags: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="stylus" scoped>
.search-content
  &-history
    padding 8px 16px
    &__tag
      color #686868
      background  #f0f2f5
      margin 2px 8px 2px 0
</style>
