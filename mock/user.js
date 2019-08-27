const tokens = {
  admin: {
    token: 'admin-token'
  },
  super: {
    token: 'super-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am an super administrator',
    avatar: '/static/images/avatar/default.gif',
    name: 'Merchant Admin'
  },
  'super-token': {
    roles: ['super'],
    introduction: 'I am an super',
    avatar: '/static/images/avatar/default.gif',
    name: 'Super Admin'
  }
}

export default [
  // user login
  {
    url: '/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        }
      }

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
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
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
