export default [
  // user login
  {
    url: '/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      if (username) {
        return {
          code: 20000,
          data: {
            token: username + '-' + 'token'
          }
        }
      } else {
        return {
          code: 40000,
          msg: '参数错误'
        }
      }
    }
  },

  // get user info
  {
    url: '/user/info',
    type: 'get',
    response: config => {
      const { token } = config.headers
      if (token) {
        const username = token.split('-')[0]
        return {
          code: 20000,
          data: {
            name: username,
            avatar: 'https://luoyangc.oss-cn-shanghai.aliyuncs.com/media/image/icons/xigua.png'
          }
        }
      } else {
        return {
          code: 20000,
          data: {
            name: '未登录',
            avatar: 'https://luoyangc.oss-cn-shanghai.aliyuncs.com/media/image/icons/xigua.png'
          }
        }
      }
    }
  },

  // user logout
  {
    url: '/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
