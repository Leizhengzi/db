import request from '@/utils/request'

export function setting_update(params) {
  return request({
    url: '/setting_update.php',
    method: 'post',
    data: params
  })
}

export function setting_get(params) {
  return request({
    url: '/setting_get.php',
    method: 'get',
    params
  })
}
