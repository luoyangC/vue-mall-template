import router from '@/router'
import { getToken } from '@/utils/auth'

/**
 * 通过VueRouter的路由守卫实现鉴权
 */

router.beforeEach((to, from, next) => {
  if (getToken()) {
    next()
  } else {
    if (to.meta.auth) {
      next({ name: 'Login' })
    } else {
      next()
    }
  }
})
