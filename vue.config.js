const path = require('path')
const autoprefixer = require('autoprefixer')
const pxtoviewport = require('postcss-px-to-viewport')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

function resolve(dir) {
  return path.join(__dirname, dir)
}

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, 'src/assets/style/index.styl')
      ]
    })
}

module.exports = {

  // build的输出目录
  outputDir: 'dist',

  // 静态文件目录
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',

  // 使用运行时编译器的 Vue 构建版本
  runtimeCompiler: true,

  // 开启生产环境SourceMap
  productionSourceMap: false,

  // 关闭ESLint
  lintOnSave: false,

  devServer: {
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      // 配置代理服务器
      [process.env.VUE_APP_BASE_API]: {
        target: `http://localhost:8080/mock`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    },
    // 加载mock服务器
    after: require('./mock/mock-server.js')
  },

  chainWebpack: config => {
    // 自定义别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
    // 全局引入stylus变量、方法等
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
  },

  configureWebpack: config => {
    // 生产环境打包分析体积
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new BundleAnalyzerPlugin()
        ]
      }
    }
  },

  css: {
    loaderOptions: {
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
}
