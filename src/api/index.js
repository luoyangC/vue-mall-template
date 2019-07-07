import Vue from 'vue'

const axios = Vue.axios

// 测试接口
export const getCitys = () => { return axios.get('/mock/city.json') }