<template>
  <van-search
    v-model="search"
    placeholder="请输入搜索关键词"
    show-action
    shape="round"
    @search="onSearch"
  >
    <div slot="action" @click="onSearch">搜索</div>
  </van-search>
</template>

<script>
import { Search } from 'vant'
export default {
  components: {
    [Search.name]: Search
  },
  data: () => ({
    search: ''
  }),
  methods: {
    onSearch() {
      this.$toast(this.search)
    }
  }
}
</script>
