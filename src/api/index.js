import Vue from 'vue'

const axios = Vue.axios

// 测试接口
export const getCityList = () => { return axios.get('/mock/city.json') }

// 获取热门分类
export const getCategorys = () => { return axios.get('/mock/category.json') }

// 获取商品列表
export const getProducts = () => { return axios.get('/mock/product.json') }