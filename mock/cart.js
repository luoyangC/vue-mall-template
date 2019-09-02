const baseUrl = 'https://vue-mall-template.oss-cn-hangzhou.aliyuncs.com/static/images'

const carts = [
  {
    'id': 1,
    'title': '冇心手机自拍器音响',
    'modle': '精灵鹿 + 自拍音响',
    'origin': 86.00,
    'present': 60.50,
    'nums': 1,
    'image': `${baseUrl}/cart-1.png`
  },
  {
    'id': 2,
    'title': '冇心可爱蓝牙低音炮手机自拍器音响',
    'modle': '墨樱 + 自拍音响',
    'origin': 92.00,
    'present': 68.00,
    'nums': 1,
    'image': `${baseUrl}/cart-2.png`
  },
  {
    'id': 3,
    'title': '冇心USB手持小风扇',
    'modle': '墨樱 + 带USB',
    'origin': 82.99,
    'present': 58.88,
    'nums': 2,
    'image': `${baseUrl}/cart-3.png`
  }
]

export default [
  // 购物车数据
  {
    url: '/carts',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: carts
      }
    }
  },
  // 添加购物车
  {
    url: '/cart',
    type: 'post',
    response: config => {
      const cart = config.body
      if (cart) {
        carts.push(cart)
        return {
          code: 20000,
          data: cart
        }
      } else {
        return {
          code: 40005,
          msg: '添加失败'
        }
      }
    }
  }
]
