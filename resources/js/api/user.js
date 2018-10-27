import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/get_user_list.php',
    method: 'get',
    params
  })
}
