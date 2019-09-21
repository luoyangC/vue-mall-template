<template>
  <div class="example">
    <van-field v-model="first" type="number" placeholder="输入一" />
    <van-field v-model="second" type="number" placeholder="输入二" />
    <van-button type="primary" style="width:90%;margin:10px 0">两个输入之和 {{ sumNum }}</van-button>
  </div>
</template>

<script>
import { Field } from 'vant'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Sum',
  components: {
    [Field.name]: Field
  },
  data: () => ({
    first: 0,
    second: 0
  }),
  computed: {
    ...mapGetters([
      'sumNum'
    ])
  },
  watch: {
    first(val) {
      this.setFirst(val)
    },
    second(val) {
      this.setSecond(val)
    }
  },
  methods: {
    ...mapActions('sum', [
      'setFirst',
      'setSecond'
    ])
  }
}
</script>

<style lang="stylus" scoped>
.example
  text-align: center
  background: #fff
</style>
