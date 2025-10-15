/**
 * 接口封装
 */
const axios = (option) => {
	return uni.request({
		url:option.url,
		header:{
			...option.header
		},
	}).then(([err,res])=>{
		return res.data
	})
}

export default axios
