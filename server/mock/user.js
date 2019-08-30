const Router = require('koa-router')
const router = new Router()

router.get('/dev-api/user/info', (ctx) => {
  const { token } = ctx.request.header
  if (token) {
    const username = token.split('-')[0]
    ctx.body = {
      code: 20000,
      data: {
        name: username,
        avatar: 'https://luoyangc.oss-cn-shanghai.aliyuncs.com/media/image/icons/xigua.png'
      }
    }
  } else {
    ctx.body = {
      code: 20000,
      data: {
        name: '未登录',
        avatar: 'https://luoyangc.oss-cn-shanghai.aliyuncs.com/media/image/icons/xigua.png'
      }
    }
  }
})

router.post('/dev-api/user/login', (ctx) => {
  const { username } = ctx.request.body
  if (username) {
    ctx.body = {
      code: 20000,
      data: {
        token: username + '-' + 'token'
      }
    }
  } else {
    ctx.body = {
      code: 40000,
      msg: '参数错误'
    }
  }
})

router.post('/dev-api/user/logout', (ctx) => {
  ctx.body = {
    code: 20000,
    data: 'success'
  }
})

module.exports = router
