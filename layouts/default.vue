<template>
  <div id="app" class="app" :class="getThemeName">
    <!-- 顶栏 -->
    <van-nav-bar
      v-if="isTableNav"
      left-arrow
      class="app-nav-bar"
      :title="this.$route.meta.title"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon slot="right" name="search" />
    </van-nav-bar>
    <!-- 页面 -->
    <nuxt keep-alive :keep-alive-props="{ include: cache }" />
    <!-- 底栏 -->
    <van-tabbar v-if="!isTableNav" route class="app-tab-bar">
      <van-tabbar-item to="/" icon="wap-home">主页</van-tabbar-item>
      <van-tabbar-item to="/sort" icon="bars">分类</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="shopping-cart">购物车</van-tabbar-item>
      <van-tabbar-item to="/user" icon="manager">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { NavBar, Tabbar, TabbarItem } from 'vant'
export default {
  components: {
    [NavBar.name]: NavBar,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  computed: {
    ...mapGetters('app', [
      'theme',
      'cache'
    ]),
    isTableNav() {
      const currentPath = this.$route.name
      const tablePaths = this.cache.map(item => item.toLowerCase())
      return tablePaths.indexOf(currentPath) === -1
    },
    getThemeName() {
      return `theme--${this.theme}`
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      this.$toast('搜索')
    }
  }
}
</script>
