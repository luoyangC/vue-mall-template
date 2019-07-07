# vue项目基本模板，适配手机端



### 目的

本项目使用了vue-cli3集成vue框架及其主流插件



### 特色

本项目集成的插件包括：

1. [vue-router](https://router.vuejs.org/zh/)：官方推荐的前端路由库
2. [vuex](https://vuex.vuejs.org/zh/)：官方推荐的前端状态管理库
3. [axios](https://www.jianshu.com/p/27a5626973e4)：最流行的前端ajax库
4. [vue-i18n](http://kazupon.github.io/vue-i18n/zh/)：前端国际化插件
5. [vant](https://youzan.github.io/vant/#/zh-CN/intro)：有赞开源的前端移动端UI库（个人感觉非常适合商城类H5开发）

本项目一些自定义内容包括：

1. 自定义全局filter：包括对时间、手机号、千分位、小数等内容的格式化
2. 自定义全局样式mixins
3. 自定义全局util包



## 安装项目依赖

```
npm install
建议国内用户使用cnpm install
```

### 开发模式运行
```
npm run serve
```

### 生产环境打包
```
npm run build
```

