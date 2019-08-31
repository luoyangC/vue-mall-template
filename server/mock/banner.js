const Router = require('koa-router')
const router = new Router()
const baseUrl = 'https://vue-mall-template.oss-cn-hangzhou.aliyuncs.com/static/images'

const banners = []

for (let i = 0; i < 5; i++) {
  banners.push({
    id: i + 1,
    image: `${baseUrl}/banner-${i + 1}.png`
  })
}

router.get('/dev-api/banners', (ctx) => {
  ctx.body = {
    code: 20000,
    data: banners
  }
})

module.exports = router
