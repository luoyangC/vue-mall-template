
const Mock = require('mockjs')
const Router = require('koa-router')
const router = new Router()
const baseUrl = 'https://vue-mall-template.oss-cn-hangzhou.aliyuncs.com/static/images'

const List = []
const details = []
const count = 200
const randomNum = (lower, upper) => {
  return Math.floor(Math.random() * (upper - lower)) + lower
}

const sku = [
  {
    attributes: '颜色:白色,尺寸:m',
    currentPrice: 18.88,
    id: '22',
    inventory: 220,
    name: 'test',
    originalPrice: 220,
    picture: 'https://images.zhihuimingxing.com/Fmd9K7pUMycwut4kZbny70vrge5d',
    sales: 0,
    settlementPrice: 220,
    updateDate: '2019-08-13T05:42:56.000+0000'
  },
  {
    attributes: '颜色:黑色,尺寸:s',
    currentPrice: 9.99,
    id: '33',
    inventory: 10,
    name: 'test',
    originalPrice: 9,
    picture: 'https://images.zhihuimingxing.com/FgD6j9fbLclWZ1ih5eFKFCvsrFsz',
    sales: 0,
    settlementPrice: 101,
    updateDate: '2019-08-13T05:55:30.000+0000'
  }
]

for (let i = 0; i < 10; i++) {
  details.push({
    id: i + 1,
    image: `${baseUrl}/detail-${i + 1}.webp`
  })
}

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    name: '@title(2, 4)',
    brand: '@title(1, 2)',
    'originalPrice|1000-10000': 1,
    'currentPrice|100-1000': 1,
    merchandisePictures: [
      {
        id: i + 1,
        image: `${baseUrl}/product-${randomNum(1, 40)}.png`
      },
      {
        id: i + 2,
        image: `${baseUrl}/product-${randomNum(1, 40)}.png`
      }
    ]
  }))
}

router.get('/dev-api/products', (ctx) => {
  const { page = 1, size = 10 } = ctx.request.query
  const start = page * size - size
  const end = start + size
  ctx.body = {
    code: 20000,
    data: List.slice(start, end),
    count: List.length
  }
})

router.get('/dev-api/product/:id', (ctx) => {
  let product = ''
  const { id } = ctx.params
  for (const item of List) {
    if (item.id === parseInt(id)) {
      product = item
      product.detailedDescription = details
    }
  }
  if (product) {
    ctx.body = {
      code: 20000,
      data: product
    }
  } else {
    ctx.body = {
      code: 40004,
      msg: '没有找到'
    }
  }
})

router.get('/dev-api/product/sku/:id', (ctx) => {
  ctx.body = {
    code: 20000,
    data: sku
  }
})

module.exports = router
