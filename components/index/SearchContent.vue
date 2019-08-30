<template>
  <div class="search-content">
    <van-panel title="搜索历史">
      <div class="search-history">
        <van-tag
          v-for="item in tags"
          :key="item"
          round
          class="history-tag"
          @click.stop="$toast(item)"
        >{{ item }}</van-tag>
      </div>
    </van-panel>
  </div>
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
.search-history
  padding 8px 16px
  .history-tag
    color #686868
    background  #f0f2f5
    margin 2px 8px 2px 0
</style>
