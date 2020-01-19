const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

const app = new Koa()

// 导入nuxt配置文件
const config = require('../nuxt.config.js')
config.dev = app.env !== 'production'

async function start() {
  // 初始化nuxt实例
  const nuxt = new Nuxt(config)

  // 读取配置文件中的地址
  const HOST = '127.0.0.1'
  const PORT = 3000

  // 判断是否为开发环境
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(PORT)
  consola.ready({
    message: `Server listening on http://${HOST}:${PORT}`,
    badge: true
  })
}

start()
