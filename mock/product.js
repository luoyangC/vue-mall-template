import Mock from 'mockjs'

const List = []
const count = 100

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    name: '@title(2, 3)',
    'freight|0-20': 1,
    pickUp: 1,
    invoice: 1,
    returns: 1,
    'brand|1-6': 1,
    'isShelf|0-1': 1,
    province: '@province',
    city: '@city',
    area: '@county',
    'originalPrice|1-100': 1,
    'currentPrice|1-100': 1,
    'settlementPrice|1-100': 1,
    'sales|100-10000': 100,
    secondCategory: 1,
    primaryCategory: 1,
    label: '标签一,标签二',
    detailedDescription: '商品详情',
    'merchandisePictures|1-5': [
      {
        'id|+1': 1,
        image: 'https://luoyangc.oss-cn-shanghai.aliyuncs.com/media/image/icons/xigua.png'
      }
    ],
    'merchandiseSon|1-10': [
      {
        'id|+1': 1,
        'attributes': '颜色:白色,尺寸:xs',
        'isShelf|0-1': 1,
        'inventory|10-1000': 100,
        'originalPrice|1-100': 1,
        'currentPrice|1-100': 1,
        'settlementPrice|1-100': 1,
        'sales|100-10000': 100,
        shelfDate: '@datetime',
        picture: 'https://luoyangc.oss-cn-shanghai.aliyuncs.com/media/image/icons/xigua.png'
      }
    ],
    shelfDate: '@datetime'
  }))
}

export default [
  {
    url: '/product/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: List
      }
    }
  },
  {
    url: '/product/detail',
    type: 'get',
    response: config => {
      const { id } = config.query
      for (const item of List) {
        if (item.id === +id) {
          return {
            code: 20000,
            data: item
          }
        }
      }
    }
  }
]
