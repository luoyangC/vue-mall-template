const baseUrl = 'https://vue-mall-template.oss-cn-hangzhou.aliyuncs.com/static/images'

const categories = []
const titles = ['新品首发', '居家生活', '服装鞋包', '美食酒水', '个护清洁', '母婴亲子', '运动旅行', '数码家电', '全球特色', '超级会员']

const sorts = []
const texts = ['全球特色新品', '数码家电新品', '母婴亲子新品', '居家生活新品', '服饰鞋包新品', '美食酒水新品', '个护清洁新品', '运动旅行新品']

for (let i = 0; i < 10; i++) {
  categories.push({
    id: i + 1,
    title: titles[i],
    image: `${baseUrl}/category-${i + 1}.${i === 9 ? 'gif' : 'png'}`
  })
}

for (let i = 0; i < 8; i++) {
  sorts.push({
    id: i + 100,
    title: texts[i],
    image: `${baseUrl}/sort-${i + 1}.png`
  })
}

export default [
  // 分类数据
  {
    url: '/categories',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: categories
      }
    }
  },
  {
    url: '/sorts',
    type: 'get',
    response: config => {
      const { id } = config.query || 1
      const index = parseInt(id) - 1
      return {
        code: 20000,
        data: {
          banner: {
            image: `${baseUrl}/sort-banner.png`
          },
          sorts: [
            ...sorts,
            categories[index]
          ]
        }
      }
    }
  }
]
