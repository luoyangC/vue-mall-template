<template>
  <div>
    <van-index-bar :index-list="indexList">
      <div v-for="index in indexList" :key="index">
        <van-index-anchor :index="index"/>
        <van-cell v-for="city in cities[`${index}`]" :key="city.id" :title="city.name"/>
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import { getCityList } from "@/api";
import { IndexBar, IndexAnchor, Cell } from 'vant';
export default {
  name: "Sort",
  components: {
    [Cell.name]: Cell,
    [IndexBar.name]: IndexBar,
    [IndexAnchor.name]: IndexAnchor,
  },
  data: () => ({
    cities: [],
    indexList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z']
  }),
  methods: {
    async getCities() {
      let data = await getCityList()
      this.cities = data.cities
    }
  },
  created() {
    this.getCities()
    console.log(this.cities)
  }
}
</script>
