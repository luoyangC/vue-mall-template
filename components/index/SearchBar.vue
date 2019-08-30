<template>
  <div class="search-bar">
    <van-search
      v-model="search"
      placeholder="请输入搜索关键词"
      show-action
      shape="round"
      background="pink"
      @focus="show = true"
      @search="onSearch"
    >
      <div slot="action" style="color:white" @click="onSearch">搜索</div>
    </van-search>
    <van-popup
      v-model="show"
      position="bottom"
      @click="show = false"
    >
      <search-content :tags="histories" />
    </van-popup>
  </div>
</template>

<script>
import { getStore, setStore } from '~/utils'
import { Search, Popup } from 'vant'
import SearchContent from './SearchContent'
export default {
  name: 'SearchBar',
  components: {
    [Search.name]: Search,
    [Popup.name]: Popup,
    SearchContent
  },
  data: () => ({
    show: false,
    search: '',
    histories: []
  }),
  mounted() {
    this.initTags()
  },
  methods: {
    onSearch() {
      if (!this.search) return
      this.$toast(this.search)
      const index = this.histories.indexOf(this.search)
      if (index !== -1) this.histories.splice(index, 1)
      this.histories.push(this.search)
      setStore('history-tags', this.histories)
      this.search = ''
    },
    initTags() {
      const tags = getStore('history-tags')
      if (!tags) this.histories = []
      else this.histories = JSON.parse(tags)
    }
  }
}
</script>

<style lang="stylus" scoped>
.search-bar
  height 54px
  >>>.van-search
    position fixed
    z-index 100
    width 100%
  >>>.van-overlay
    top: 54px
  >>>.van-popup
    height: 100%
    top: 54px
</style>
