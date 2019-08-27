import { getAxios } from '@/plugins/axios'

const axios = getAxios()

// 获取热门分类
export const getCategorys = () => { return axios.get('/dev-api/categories') }

// 获取商品列表
export const getProducts = () => { return axios.get('/dev-api/product/list') }

// 获取购物车列表
export const getCarts = () => { return axios.get('/dev-api/carts') }
