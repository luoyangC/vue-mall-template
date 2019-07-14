import { getAxios } from "@/plugins/axios"

const axios = getAxios()

// 测试接口
export const getCityList = () => { return axios.get('/mock/city.json') }

// 获取热门分类
export const getCategorys = () => { return axios.get('/mock/category.json') }

// 获取商品列表
export const getProducts = () => { return axios.get('/mock/product.json') }

// 获取购物车列表
export const getCarts = () => { return axios.get('/mock/cart.json') }

// 获取商品详情
export const getDetail = () => { return axios.get('/mock/detail.json') }
