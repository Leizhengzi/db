import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/login.php',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/get_admin_info.php',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/logout.php',
    method: 'post'
  })
}
