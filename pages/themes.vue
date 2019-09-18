<template>
  <div class="themes">
    <van-radio-group :value="theme">
      <van-cell-group class="themes-group">
        <van-cell v-for="item in themes" :key="item.name" :title="item.title" clickable class="themes-item">
          <van-radio slot="icon" :name="item.name" class="themes-item__radio" @click="setTheme(item.name)" />
          <van-button v-if="item.name === theme" plain hairline disabled class="themes-item__button">已使用</van-button>
          <van-button v-else plain hairline class="themes-item__button" @click="setTheme(item.name)">使用</van-button>
        </van-cell>
      </van-cell-group>
    </van-radio-group>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { Cell, CellGroup, RadioGroup, Radio } from 'vant'
export default {
  name: 'Themes',
  components: {
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio
  },
  data: () => ({
    themes: [
      {
        name: 'bili',
        title: '默认'
      },
      {
        name: 'sakura',
        title: '樱花'
      },
      {
        name: 'aotake',
        title: '青竹'
      },
      {
        name: 'asagi',
        title: '露草'
      },
      {
        name: 'kikyo',
        title: '桔梗'
      },
      {
        name: 'kanzo',
        title: '萱草'
      },
      {
        name: 'kuro',
        title: '墨黑'
      }
    ]
  }),
  computed: {
    ...mapGetters('app', ['theme'])
  },
  methods: {
    ...mapActions('app', ['setTheme'])
  }
}
</script>

<style lang="stylus" scoped>
themes = (1 bili) (2 sakura) (3 aotake) (4 asagi) (5 kikyo) (6 kanzo) (7 kuro)
for theme in themes
  .themes-item:nth-child({theme[0]})
    >>>.van-icon
      border-color theme[1]
      background-color theme[1]

.themes-item
  &__radio
    margin-right 8px
  &__button
    width 80px
    height 28px
    line-height 2px
  >>>.van-cell__title
    height 28px
    line-height 28px
</style>
