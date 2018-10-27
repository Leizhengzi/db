import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/activity_get_list.php',
    method: 'get',
    params
  })
}

export function getItem(params) {
  return request({
    url: '/activity_get_item.php',
    method: 'get',
    params
  })
}

export function updateItemStatus(params) {
  return request({
    url: '/activity_update_status.php',
    method: 'post',
    params
  })
}

export function addItem(params) {
  return request({
    url: '/activity_add.php',
    method: 'post',
    params
  })
}

export function getAuthUrl(params) {
  return request({
    url: '/activity_get_auth_url.php',
    method: 'post',
    params
  })
}

export function getAlipayAppAuthToken(params) {
  return request({
    url: '/activity_get_alipay_appauthtoken.php',
    method: 'post',
    params
  })
}
