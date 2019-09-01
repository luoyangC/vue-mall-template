export default (axios) => ({

  // 用户登录
  login: (data) => { return axios.post('/dev-api/user/login', data) },

  // 获取用户信息
  getUserInfo: () => { return axios.get('/dev-api/user/info') },

  // 获取用户购物车数据
  getCarts: () => { return axios.get('/dev-api/carts') },

  // 用户添加商品到购物车
  addToCart: (data) => { return axios.post('/dev-api/cart', data) },

  // 获取首页banner列表
  getBanners: () => { return axios.get('/dev-api/banners') },

  // 获取首页分类类表
  getCategories: () => { return axios.get('/dev-api/categories') },

  // 获取二级分类
  getSorts: (id) => { return axios.get('/dev-api/sorts', { params: { id }}) },

  // 获取首页推荐商品列表
  getProducts: (params) => { return axios.get('/dev-api/products', { params }) },

  // 根据商品Id获取商品详情
  getProductInfo: (id) => { return axios.get(`/dev-api/product/${id}`) },

  // 根据商品Id获取商品sku
  getProductSku: (id) => { return axios.get(`/dev-api/product/sku/${id}`) }
})
