export default [
  // user login
  {
    url: '/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = `${username}-token`
      return {
        code: 20000,
        data: token
      }
    }
  },

  // get user info
  {
    url: '/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.headers
      // mock error
      if (!token) {
        return {
          code: 50008,
          message: '未登录'
        }
      } else {
        const username = token.split('-')[0]
        return {
          code: 20000,
          data: {
            name: username,
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
