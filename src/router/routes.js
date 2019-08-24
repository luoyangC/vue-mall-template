import Tabber from '@/layouts/Tabber'
import Navbar from '@/layouts/Navbar'

const frameIn = [
  {
    path: '/',
    redirect: { name: 'home' },
    component: Tabber,
    children: [
      {
        path: 'home',
        name: 'home',
        meta: { auth: 0, title: '首页' },
        component: () => import('@/views//home/Home')
      },
      {
        path: 'sort',
        name: 'sort',
        meta: { auth: 0, title: '分类' },
        component: () => import('@/views/sort/Sort')
      },
      {
        path: 'cart',
        name: 'cart',
        meta: { auth: 0, title: '购物车' },
        component: () => import('@/views/cart/Cart')
      },
      {
        path: 'user',
        name: 'user',
        meta: { auth: 1, title: '我的' },
        component: () => import('@/views/user/User')
      }
    ]
  }
]

const frameOut = [
  {
    path: '/page',
    component: Navbar,
    children: [
      {
        path: 'product/:id',
        name: 'product',
        meta: { auth: 0, title: '商品详情' },
        component: () => import('@/views/product/Product')
      },
      {
        path: 'about',
        name: 'about',
        meta: { auth: 0, title: '关于' },
        component: () => import('@/views/about/About')
      }
    ]
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
