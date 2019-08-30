import { Notify } from 'vant'

export default ({ app }) => {
  const axios = app.$axios
  const { HOST, PORT } = app.context.env

  axios.defaults.timeout = 5000
  axios.defaults.baseURL = `http://${HOST}:${PORT}`

  // 请求拦截
  axios.onRequest(config => {
    const token = app.$cookies.get('token')
    if (token) config.headers['token'] = app.$cookies.get('token')
    return config
  })

  // 响应拦截
  axios.onResponse(response => {
    const code = response.data.code
    if (code === 20000) {
      return Promise.resolve(response.data)
    } else {
      Notify(response.data.msg)
      console.log(response.data.msg)
    }
  })

  // 异常拦截
  axios.onError(error => {
    switch (error.response.status) {
      case 400:
        console.log('请求错误，请检查请求参数')
        break
      case 401:
        console.log('未登录或者登录过期')
        break
      case 403:
        console.log('您没有该操作权限')
        break
      case 500:
        console.log('抱歉，服务器出错了')
        break
    }
    return Promise.reject(error.response)
  })
}
