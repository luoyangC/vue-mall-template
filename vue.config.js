const path = require('path');
const autoprefixer = require('autoprefixer');
const pxtoviewport = require('postcss-px-to-viewport');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function resolve(dir) {
  return path.join(__dirname, dir)
}

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, 'src/styles/index.less'),
      ],
    })
}

module.exports = {

  // build的输出目录
  outputDir: 'dist',

  // 静态文件目录
  publicPath: process.env.NODE_ENV === 'production' ? '/rulian/mall/' : '/',

  // 使用运行时编译器的 Vue 构建版本
  runtimeCompiler: true,

  // 开启生产环境SourceMap
  productionSourceMap: false,

  // 关闭ESLint
  lintOnSave: false,

  chainWebpack: config => {
    // 自定义别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'));
    // 全局引入less变量、方法等
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
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
      less: {
        // 自定义UI框架主题
        modifyVars: {
          red: '#f44',
          white: '#fff',
          black: '#000',
          blue: '#1989fa',
          gray: '#c9c9c9',
          green: '#07c160',
          orange: '#ff976a',
        },
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
};
