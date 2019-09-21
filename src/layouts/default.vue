<template>
  <div class="layout" :class="getThemeName">
    <!-- 顶栏 -->
    <van-nav-bar
      v-if="isTableNav"
      left-arrow
      left-text="返回"
      class="app-nav-bar"
      :title="this.$route.meta.title"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <van-icon slot="right" name="search" />
    </van-nav-bar>
    <!-- 页面 -->
    <keep-alive :include="cache">
      <router-view />
    </keep-alive>
    <!-- 底栏 -->
    <van-tabbar v-if="!isTableNav" route class="app-tab-bar">
      <van-tabbar-item to="/home" icon="home-o">{{ $t('layout.home') }}</van-tabbar-item>
      <van-tabbar-item to="/sort" icon="apps-o">{{ $t('layout.sort') }}</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="shopping-cart-o">{{ $t('layout.cart') }}</van-tabbar-item>
      <van-tabbar-item to="/user" icon="user-o">{{ $t('layout.user') }}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Tabbar, TabbarItem, NavBar } from 'vant'
export default {
  name: 'Layout',
  components: {
    [NavBar.name]: NavBar,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  computed: {
    ...mapGetters([
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
    onClickLeft() { // 返回上级路由
      this.$router.go(-1)
    },
    onClickRight() {
      this.$toast('搜索')
    }
  }
}
</script>

<style lang="stylus" scoped>
.layout
  background-color background-color
</style>
