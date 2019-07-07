import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 路由数据
import routes from './routes'

// 导出路由 在 main.js 里使用
const router = new Router({
  routes
})

export default router