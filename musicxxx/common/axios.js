/**
 *  封装axios请求
 */

const axios = (option) => {
  return uni.request({
    url: option.url,
    data: option.data,
    header: option.header,
    method: option.method || 'GET',
    dataType: 'json',
  }).then(res => {
	  return res.data
  })
}

export default axios