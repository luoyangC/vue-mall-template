const carts = [
  {
    'id': 1,
    'title': '冇心手机自拍器音响',
    'modle': '精灵鹿 + 自拍音响',
    'origin': 86,
    'present': 60.5,
    'nums': 1,
    'image': '/static/images/cart-1.png'
  },
  {
    'id': 2,
    'title': '冇心可爱蓝牙低音炮手机自拍器音响',
    'modle': '墨樱 + 自拍音响',
    'origin': 92,
    'present': 68,
    'nums': 1,
    'image': '/static/images/cart-2.png'
  },
  {
    'id': 3,
    'title': '冇心USB手持小风扇',
    'modle': '冇心USB手持小风扇',
    'origin': 82,
    'present': 58.8,
    'nums': 2,
    'image': '/static/images/cart-3.png'
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
      carts.push(cart)
      return {
        code: 20000,
        message: '添加成功',
        data: cart
      }
    }
  }
]
