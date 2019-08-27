export default [
  // 分类数据
  {
    url: '/categories',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: [
          {
            'id': 1,
            'title': '新品首发',
            'image': '/static/images/category-1.png'
          },
          {
            'id': 2,
            'title': '居家生活',
            'image': '/static/images/category-2.png'
          },
          {
            'id': 3,
            'title': '服装鞋包',
            'image': '/static/images/category-3.png'
          },
          {
            'id': 4,
            'title': '美食酒水',
            'image': '/static/images/category-4.png'
          },
          {
            'id': 5,
            'title': '个护清洁',
            'image': '/static/images/category-5.png'
          },
          {
            'id': 6,
            'title': '母婴亲子',
            'image': '/static/images/category-6.png'
          },
          {
            'id': 7,
            'title': '运动旅行',
            'image': '/static/images/category-7.png'
          },
          {
            'id': 8,
            'title': '数码家电',
            'image': '/static/images/category-8.png'
          },
          {
            'id': 9,
            'title': '全球特色',
            'image': '/static/images/category-9.png'
          },
          {
            'id': 10,
            'title': '超级会员',
            'image': '/static/images/category-10.gif'
          }
        ]
      }
    }
  }
]