import Mock from 'mockjs'

const List = []
const count = 30

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    name: '@title(2, 3)',
    brand: '@title(1， 2)',
    'originalPrice|1000-10000': 1,
    'currentPrice|100-1000': 1,
    'merchandisePictures|1-5': [
      {
        'id|+1': 1,
        image: 'https://luoyangc.oss-cn-shanghai.aliyuncs.com/media/image/icons/xigua.png'
      }
    ],
    detailedDescription: [
      {
        'id': 1,
        'image': '/static/images/detail-1.webp'
      },
      {
        'id': 2,
        'image': '/static/images/detail-2.webp'
      },
      {
        'id': 3,
        'image': '/static/images/detail-3.webp'
      },
      {
        'id': 4,
        'image': '/static/images/detail-4.webp'
      },
      {
        'id': 5,
        'image': '/static/images/detail-5.webp'
      },
      {
        'id': 6,
        'image': '/static/images/detail-6.webp'
      },
      {
        'id': 7,
        'image': '/static/images/detail-7.webp'
      },
      {
        'id': 8,
        'image': '/static/images/detail-8.webp'
      },
      {
        'id': 9,
        'image': '/static/images/detail-9.webp'
      },
      {
        'id': 10,
        'image': '/static/images/detail-10.webp'
      }
    ]
  }))
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
  },
  {
    url: '/product/sku',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: sku
      }
    }
  }
]
