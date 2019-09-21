<template>
  <div class="user-info">
    <van-row>
      <van-col span="4">
        <van-image round :src="userAvatar" class="user-info__avatar" />
      </van-col>
      <van-col span="10" offset="1">
        <div class="user-info__title">{{ userName }}</div>
      </van-col>
    </van-row>
    <van-row type="flex" justify="center" class="user-info__count">
      <van-col span="6">收藏夹</van-col>
      <van-col span="6">关注店铺</van-col>
      <van-col span="6">足迹</van-col>
      <van-col span="6">红包卡卷</van-col>
    </van-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Row, Col } from 'vant'
export default {
  name: 'UserInfo',
  components: {
    [Row.name]: Row,
    [Col.name]: Col
  },
  computed: {
    ...mapGetters([
      'userName',
      'userAvatar'
    ])
  }
}
</script>

<style lang="stylus" scoped>
.user-info
  padding 26px
  &__avatar
    width 56px
    height 56px
    background: white
  &__title
    height: 56px
    line-height: 56px
    font-size: 26px
    color white
  &__count
    margin-top 20px
    color white
    font-size 12px
    >>>.van-col
      text-align center
</style>
