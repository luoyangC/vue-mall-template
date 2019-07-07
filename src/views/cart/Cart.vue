<template>
  <div>
    <van-submit-bar :price="3050" button-text="提交订单">
      <van-checkbox v-model="checkAll">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import { SubmitBar, Checkbox } from 'vant';
export default {
  data: () => ({
    checkAll: false
  }),
  components: {
    [SubmitBar.name]: SubmitBar,
    [Checkbox.name] : Checkbox
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
