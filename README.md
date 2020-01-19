# vue商城项目基本模板，基于手机端（nuxt分支）


### 目的

本项目使用了vue-cli3集成vue框架及其主流第三方库，构建了一个商城模板项目。主分支是使用vue构建的单页面应用，另有nuxt分支，使用nuxt框架重写整个项目，构建了一个服务端渲染的项目。两个分支页面效果和功能基本一致，并且会保持同步更新。通过该项目，一是可以了解vue的一些最佳实践，二是可以找到这些最佳实践在nuxt中的用法。如果该项目对你的前端学习有一点点帮助，那就拜托点个Star了~\(≧▽≦)/~


### 特色（nuxt分支）

本项目集成的插件包括：

1. [nuxt](https://zh.nuxtjs.org/guide)：主要集成了vue、vue-router、vuex的一个服务端渲染框架
3. [@nuxtjs/axios](https://www.jianshu.com/p/27a5626973e4)：axios的nuxt版本，使用上和axios完全兼容
4. [koa](https://koa.bootcss.com)：一个node.js的服务器框架（本项目中一是用它作页面渲染的服务，二是模拟更真实的后端接口）
5. [stylus](https://www.zhangxinxu.com/jq/stylus/): css预处理库（比起less个人更喜欢stylus）
6. [vant](https://youzan.github.io/vant/#/zh-CN/intro)：有赞开源的前端移动端UI库（非常适合商城类H5开发）
7. [mockjs](https://github.com/nuysoft/Mock/wiki)：前端构建mock数据的库（本项目在本地启动了一个mock server）

本项目一些自定义内容包括：

1. 自定义全局filter：包括对时间、手机号、千分位、小数等内容的格式化
2. 自定义全局样式mixins
3. 自定义全局util包

### 展示

点击查看[线上demo](http://luoyangc.cn:2233)

以下是该项目的一些页面展示

![index](https://github.com/luoyangC/vue-mall-template/blob/nuxt/static/demo.jpg)


## 相关命令

```
安装依赖
npm install 或 cnpm install

开发模式
npm run serve

项目打包
npm run build

生产环境
npm run start
```

## 项目结构

```
- src
    - api               // 接口管理目录
    - assets            // 资源文件
    - components        // 组件目录
    - layouts           // 外层布局
    - middleware        // 中间件
    - pages             // 页面目录
    - plugins           // 自定义插件目录
    - server            // 服务端文件
    - static            // 静态文件
    - store             // Vuex管理目录
    - utils             // 全局工具目录
```

## Mock数据

[mock数据项目](https://github.com/luoyangC/mall-mock-server)
