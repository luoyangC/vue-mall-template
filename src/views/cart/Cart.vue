<template>
  <div>
    <cart-list></cart-list>
    <van-submit-bar :price="totalAmount" button-text="提交订单">
      <van-checkbox :value="checkAll" @click.prevent="handleCheckAll">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import { SubmitBar, Checkbox } from 'vant';
import CartList from "./components/CartList"
export default {
  components: {
    [SubmitBar.name]: SubmitBar,
    [Checkbox.name] : Checkbox,
    CartList
  },
  computed: {
    ...mapGetters([
      'checked',
      'checkAll',
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
    handleCheckAll() {
      this.$store.dispatch('cart/setCheckAll')
    }
  },
  beforeCreate() {
    this.$store.dispatch('cart/setCarts')
  }
}
</script>

<style lang="less" scoped>
.van-submit-bar {
  bottom: 50px;
  .van-checkbox {
    padding-left: 10px;
  }
  .van-button{
    border-radius: 32px;
    height: 32px;
    line-height: 32px;
    margin: 0 10px;
  }
}
</style>
