<template>
  <div class="example">
    <p @click="setUserName(2233)">vuex示例：{{userName}}</p>
    <p>浮点数运算：0.1+0.2={{number | formatFloat(2)}}</p>
    <p @click="handleToast">Toast插件</p>
    <router-link tag="p" to="/page/about">跳转到关于</router-link>
    <transition name="van-slide-left">
      <div v-if="show">
        <p @click="handleLang">i18n国际化：{{$t('user.name', {name: 'Jelly'})}}</p>
        <p>
          vue过滤器：
          <br />
          时间戳：{{1544179366 | timeFilter}}
          <br />
          手机格式化：{{15311959057 | formatPhone}}
          <br />
          银行卡格式化：{{123123123123132 | formatBank}}
          <br />
          千分位分隔符：{{5000039 | toThousands}}
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex"
export default {
  name: "User",
  data: () => ({
    show: false,
  }),
  computed: {
    ...mapGetters([
      'userName'
    ]),
    number() {
      return (0.1 * 100 + 0.2 * 100) / 100
    }
  },
  methods: {
    ...mapActions("user", ["setUserName"]),
    // 切换语言，国际化效果测试
    handleLang() {
      this.$i18n.locale = this.$i18n.locale === 'zh-CN' ? 'en-US' : 'zh-CN';
    },
    // toast功能测试
    handleToast() {
      this.$toast.success('提示')
    },
  },
  mounted() {
    // 延迟显示，测试动画效果
    setTimeout(() => {
      this.show = true;
    }, 1000)
  }
};
</script>

<style lang="less" scoped>
.example {
  text-align: center;
  background: #fff;
}
</style>
