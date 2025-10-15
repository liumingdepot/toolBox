/**
 * 获取资源
 */
import axios from '@/common/axios.js'


/**
 * 视频解析资源2
 */
// export const avList = [
// 	{ name: '推荐', url: 'https://apitestss.bihee.net/api_v3/vod' },
// 	{ name: '桃色', url: 'http://apittzy.com/api.php/provide/vod/' },
// 	{ name: '鲨鱼', url: 'https://shayuapi.com/api.php/provide/vod/at/json/' },
// 	{ name: "乐播", url: "https://lbapi9.com/api.php/provide/vod/" },
// 	{ name: '番外', url: 'http://fhapi9.com/api.php/provide/vod/' },
// 	{ name: '老鸭', url: 'https://api.apilyzy.com/api.php/provide/vod/' },
// 	{ name: '色猫', url: 'https://caiji.semaozy.net/inc/apijson_vod.php/' },
// 	{ name: '花蜜', url: 'https://caiji.huakuiapi.com/inc/apijson_vod.php' },
// 	{ name: '猫妖', url: 'https://api.maozyapi.com/inc/apijson_vod.php' },
// ]
export const avList = uni.getStorageSync('avList')

export const getVideoList = (list, typeName, src) => {
	const arr = []
	for (let item of list) {
		// 播放源
		item.typeName = typeName
		item.typeUrl = src
		const types = item.vod_play_url.split('$$$')
		item.vod_play_url_video = types.map((val, index) => {
			const title = '播放源' + (index + 1)
			if (val.includes('.m3u8')) {
				// 视频列表
				const videoList = val.split('#')
				return {
					title,
					videoList: videoList.map(val2 => {
						// 名称 和 播放地址
						const temp = val2.split('$')
						return {
							title: temp[0],
							url: temp[1],
						}
					})
				}
			} else {
				return false
			}
		}).filter(Boolean)
		if (item.vod_play_url_video.length > 0) {
			arr.push(item)
		}
	}
	return arr
}

export const getTuijianVideo = (option) => {
	let type_id = option.type_id;
	let url = avList[0].url
	if (Number(type_id) == type_id) {
		url += `/list?type_id=${type_id}&pageSize=24&page=${option.pagenum}`
	} else {
		url += `/tag?keyword=${type_id}&page=${option.pagenum}&pageSize=24`
	}
	return axios({
		url
	}).then((res) => {
		return res.data.list.map(e => {
			e.typeName = '推荐'
			e.vod_remarks = "精品推荐"
			return e
		})
	})
}



export const getVideoItem = (id) => {
	const url = avList[0].url + `/api_v3/vod/detail/${id}`
	return axios({
		url
	}).then((res) => {
		return {
			"vod_name": res.data.vod_name,
			"vod_class": "精品推荐",
			"vod_pic": res.data.vod_pic,
			"type_name": "精品推荐",
			"typeName": "精品推荐",
			"vod_id": res.data.vod_id,
			"vod_remarks": res.data.vod_remarks || "精品推荐",
			"tuijianList": res.data.recommend.map(e => {
				e.typeName = '精品推荐'
				return e
			}),
			"vod_play_url_video": [{
				"title": "播放源",
				"videoList": res.data.vod_play_urls[0].episode.map(e => ({
					title: e.name,
					url: e.url
				}))
			}],
		}
	})
}

export const searchVideo = async (url, typeName, src) => {
	return axios({
		url
	}).then(res => {
		return getVideoList(res.list, typeName, src)
	})
}


export const cnxhVideo = async (url, typeName, src) => {
	return axios({
		url
	}).then(res => {
		return getVideoList(res.list, typeName, src)
	})
}



export const navs = [
	//
	{
		"type_id": 41,
		"type_name": "日韩AV"
	},
	{
		"type_id": 66,
		"type_name": "精品无码"
	},
	{
		"type_id": 43,
		"type_name": "欧美视频"
	},
	{
		"type_id": 44,
		"type_name": "成人动漫"
	},
	{
		"type_id": 63,
		"type_name": "三级精品"
	},
	{
		"type_id": "麻豆传媒",
		"type": "search",
		"type_name": "麻豆传媒"
	},
	{
		"type_id": "天美传媒",
		"type": "search",
		"type_name": "天美传媒"
	},
	{
		"type_id": "蜜桃传媒",
		"type": "search",
		"type_name": "蜜桃传媒"
	},
	{
		"type_id": "星空传媒",
		"type": "search",
		"type_name": "星空传媒"
	},
	{
		"type_id": "乐播传媒",
		"type": "search",
		"type_name": "乐播传媒"
	},
	{
		"type_id": "精东影业",
		"type": "search",
		"type_name": "精东影业"
	},
	{
		"type_id": "果冻传媒",
		"type": "search",
		"type_name": "果冻传媒"
	},
	{
		"type_id": "爱豆传媒",
		"type": "search",
		"type_name": "爱豆传媒"
	},
]