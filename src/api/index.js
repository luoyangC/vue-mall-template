import Vue from 'vue'

const axios = Vue.axios

// 测试接口
export const getCityList = () => { return axios.get('/mock/city.json') }