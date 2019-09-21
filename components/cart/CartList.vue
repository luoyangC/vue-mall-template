<template>
  <div class="cart-list">
    <van-checkbox-group v-model="result">
      <van-cell-group>
        <van-cell v-for="(item, index) in carts" :key="item.id" clickable @click="toggle(index)">
          <van-checkbox ref="checkboxes" slot="icon" :name="item" />
          <van-card
            :num="item.nums"
            :price="item.present"
            :origin-price="item.origin"
            :desc="item.modle"
            :title="item.title"
            :thumb="item.image"
          />
        </van-cell>
      </van-cell-group>
    </van-checkbox-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Checkbox, CheckboxGroup, Cell, CellGroup, Card } from 'vant'
export default {
  components: {
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Card.name]: Card
  },
  data: () => ({
    result: []
  }),
  computed: {
    ...mapGetters('cart', [
      'carts',
      'checked',
      'checkAll'
    ])
  },
  watch: {
    result(val) {
      this.$store.dispatch('cart/setChecked', val)
    },
    checkAll(val) {
      if (val) {
        this.result = this.carts
      } else {
        this.result = this.checked
      }
    }
  },
  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle()
    }
  }
}
</script>

<style lang="stylus" scoped>
.cart-list
  margin-top 46px
  margin-bottom 100px
  padding-bottom 12px
  .van-card
    background-color transparent
</style>
