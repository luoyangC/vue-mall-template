// 缓存路由离开时的屏幕滚动位置，当路由重新进入时，回复原来的位置
export default {
  data: () => ({
    scrollTop: 0
  }),
  activated() {
    if (!this.scrollTop) return
    else this.$scrollTo(this.scrollTop + 50, 50)
  },
  deactivated() {
    this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0
  }
}
