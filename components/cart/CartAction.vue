<template>
  <van-submit-bar :price="totalAmount" button-text="提交订单" @submit="handleSubmit">
    <van-checkbox :value="checkAll" @click.prevent="handleCheckAll">全选</van-checkbox>
  </van-submit-bar>
</template>

<script>
import { SubmitBar, Checkbox } from 'vant'
import { mapGetters } from 'vuex'
export default {
  components: {
    [SubmitBar.name]: SubmitBar,
    [Checkbox.name]: Checkbox
  },
  data: () => ({
    toPay: ''
  }),
  computed: {
    ...mapGetters('cart', [
      'checked',
      'checkAll'
    ]),
    totalAmount() {
      let total = 0
      for (const item of this.checked) {
        total += item.nums * item.present * 100
      }
      return total
    }
  },
  methods: {
    handleSubmit() {
      this.$toast(`合计：${this.totalAmount / 100}￥`)
    },
    handleCheckAll() {
      this.$store.dispatch('cart/setCheckAll')
    }
  }
}
</script>

<style lang="stylus" scoped>
.van-submit-bar
  bottom: 50px;
  .van-checkbox
    padding-left: 10px;
  .van-button
    border-radius: 32px;
    height: 32px;
    line-height: 32px;
    margin: 0 10px;
</style>
