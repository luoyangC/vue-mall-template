<template>
  <div class="example">
    <p style="margin-top:0">vuex示例：{{ userName }}</p>
    <p>浮点数运算：0.1+0.2={{ number | formatFloat(2) }}</p>
    <p @click="handleToast">Toast插件</p>
    <transition name="van-slide-left">
      <div v-if="show">
        <p>
          vue过滤器：
          <br>
          手机格式化：{{ 15311959057 | formatPhone }}
          <br>
          银行卡格式化：{{ 123123123123132 | formatBank }}
          <br>
          千分位分隔符：{{ 5000039 | toThousands }}
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'About',
  layout: 'general',
  data: () => ({
    show: false
  }),
  computed: {
    ...mapGetters([
      'userName'
    ]),
    number() {
      return (0.1 * 100 + 0.2 * 100) / 100
    }
  },
  mounted() {
    // 延迟显示，测试动画效果
    setTimeout(() => {
      this.show = true
    }, 1000)
  },
  methods: {
    // toast功能测试
    handleToast() {
      this.$toast.success('提示')
    }
  }
}
</script>

<style lang="less" scoped>
.example{
  text-align: center;
  background: #fff;
}
</style>
