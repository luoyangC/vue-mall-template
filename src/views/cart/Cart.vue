<template>
  <div>
    <!-- 跳转支付 -->
    <div ref="to-pay" class="to-pay">
      <form name="punchout_form" method="post" action="https://openapi.alipaydev.com/gateway.do?charset=utf-8&method=alipay.trade.wap.pay&sign=fBDBQJ1Yje1Gh6dnStesi%2FXB%2FEUD0EQ52Fc5k7%2FznO5XFyHKhKsBtjPBU2ZgKr5%2FEVkiEFO0mR%2B3PMUIhRh8SnjDsjzc1eZlFof%2FnPv8pceWn15ThmHXFPCENIJUqI7afeyLKtTFs8oMSxGp3NHb%2F06aOzLfBXx5NK2JRvsyTKaOJ8OFpMv7OE%2BvRsz3gsxgCnnYMcT1NLo7XTJgTGZGMJAoXSUIYKNMXXKjPM67CAo%2F1Q%2Fw2h%2B6YHqysDax7Q%2BjXeYQX5FrITGwYHZHInlaftkJGTLnZRh%2F%2BxTzj90BnXzKwtl1iS2lbuZFr8L91pvgovLhE1YN0AO7BZGBIkV4Nw%3D%3D&return_url=http%3A%2F%2F127.0.0.1%3A8008%2Ftest&notify_url=http%3A%2F%2F127.0.0.1%3A8008%2Ftest&version=1.0&app_id=2016100200644011&sign_type=RSA2&timestamp=2019-08-27+09%3A09%3A29&alipay_sdk=alipay-sdk-java-3.7.110.ALL&format=JSON">
        <input type="hidden" name="biz_content" value="{&quot;out_trade_no&quot;:&quot;74535335-7bc7-4569-ada4-beb621a5f6e5&quot;,&quot;total_amount&quot;:&quot;32.50&quot;,&quot;subject&quot;:&quot;空气&quot;,&quot;body&quot;:&quot;尊敬的会员欢迎购买新鲜空气&quot;,&quot;product_code&quot;:&quot;FAST_INSTANT_TRADE_PAY&quot;}">
        <input type="submit" value="立即支付" style="display:none">
      </form>
    </div>
    <cart-list />
    <van-submit-bar :price="totalAmount" button-text="提交订单" @submit="handleSubmit">
      <van-checkbox :value="checkAll" @click.prevent="handleCheckAll">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { SubmitBar, Checkbox } from 'vant'
import CartList from './components/CartList'
export default {
  components: {
    [SubmitBar.name]: SubmitBar,
    [Checkbox.name]: Checkbox,
    CartList
  },
  data: () => ({
    toPay: ''
  }),
  computed: {
    ...mapGetters([
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
  beforeCreate() {
    this.$store.dispatch('cart/setCarts')
  },
  methods: {
    async payForAliPay() {
      // const { data } = await this.$axios.request({
      //   method: 'get',
      //   dataType: 'html',
      //   responseType: 'html',
      //   url: 'http://192.168.104:8008/aplipay'
      // })
      // this.toPay = data
      setTimeout(() => {
        console.log(window.document.forms[0])
        window.document.forms[0].submit()
      }, 500)
    },
    handleSubmit() {
      this.payForAliPay()
    },
    handleCheckAll() {
      this.$store.dispatch('cart/setCheckAll')
    }
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
