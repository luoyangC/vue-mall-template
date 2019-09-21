const frameIn = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    meta: { auth: 0, title: '首页' },
    component: () => import('@/views//home/Home')
  },
  {
    path: '/sort',
    name: 'sort',
    meta: { auth: 0, title: '分类' },
    component: () => import('@/views/sort/Sort')
  },
  {
    path: '/cart',
    name: 'cart',
    meta: { auth: 1, title: '购物车' },
    component: () => import('@/views/cart/Cart')
  },
  {
    path: '/user',
    name: 'user',
    meta: { auth: 1, title: '我的' },
    component: () => import('@/views/user/User')
  }
]

const frameOut = [
  {
    path: '/login',
    name: 'Login',
    meta: { auth: 0, title: '用户登录' },
    component: () => import('@/views/login/Login')
  },
  {
    path: '/product/:id',
    name: 'product',
    meta: { auth: 0, title: '商品详情' },
    component: () => import('@/views/product/Product')
  },
  {
    path: '/example',
    name: 'example',
    meta: { auth: 0, title: '示例' },
    component: () => import('@/views/example/Example')
  },
  {
    path: '/setting',
    name: 'setting',
    meta: { auth: 1, title: '设置' },
    component: () => import('@/views/setting/Setting')
  },
  {
    path: '/sum',
    name: 'sum',
    meta: { auth: 0, title: '求和' },
    component: () => import('@/views/example/Sum')
  },
  {
    path: '/themes',
    name: 'themes',
    meta: { auth: 0, title: '主题' },
    component: () => import('@/views/theme/Themes')
  }
]

const errorPage = [
  {
    path: '*',
    name: '404',
    component: () => import('@/views/errors/404')
  }
]

export default [
  ...frameIn,
  ...frameOut,
  ...errorPage
]
