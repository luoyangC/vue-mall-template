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
