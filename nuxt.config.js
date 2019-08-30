const autoprefixer = require('autoprefixer')
const pxtoviewport = require('postcss-px-to-viewport')
const getIPAddress = require('./utils/getIpAddress')

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  env: {
    PORT: 2233,
    HOST: getIPAddress()
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'vant/lib/index.css',
    '~assets/transition.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/axios', ssr: true },
    { src: '~plugins/vant', ssr: true },
    { src: '~plugins/filter', ssr: true }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'cookie-universal-nuxt'
  ],
  /**
   * 加载全局css变量
   */
  styleResources: {
    stylus: './assets/index.styl'
  },
  /*
  ** Build configuration
  */
  build: {
    devtools: true,
    extend(config, ctx) { },
    babel: {
      plugins: [['import', { libraryName: 'vant' }, 'vant']]
    },
    postcss: {
      plugins: [
        autoprefixer(),
        pxtoviewport({
          viewportWidth: 375,
          selectorBlackList: ['van-circle__layer']
        })
      ]
    }
  }
}
