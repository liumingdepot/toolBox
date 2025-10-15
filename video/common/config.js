import axios from './axios.js'


/**
 * 视频解析资源1
 */
export const videoTypeList = [
	{ name: '量子', url: 'http://cj.lziapi.com/api.php/provide/vod/' },
	{ name: '新浪', url: 'http://api.xinlangapi.com/xinlangapi.php/provide/vod/' },
	{ name: '影图', url: 'http://cj.vodimg.top/api.php/provide/vod/' },
	{ name: "火狐", "url": "http://hhzyapi.com/api.php/provide/vod" },
	{ name: "光速", "url": "http://api.guangsuapi.com/api.php/provide/vod/" },
	{ name: '555', url: 'http://ks.wandouzy.cc/api.php/provide/vod/' },
	{ name: '专TVB', url: 'http://www.tvyb03.com/api.php/provide/vod/' },
	{ name: '非凡s', url: 'http://api.1080zyku.com/inc/apijson.php' },
	{ name: '非凡', url: 'http://ffzy4.tv/api.php/provide/vod/' },
	{ name: '鱼乐', url: 'http://api.ylzy.me/api.php/provide/vod/' },
	{ name: 'ikun', url: 'http://ikunzyapi.com/api.php/provide/vod/from/ikm3u8/at/json' },
	{ name: '快车', url: 'http://caiji.kczyapi.com/api.php/provide/vod/' },
	{ name: '废物', url: 'http://playersll.gaoxin155.com.cn/api.php/provide/vod/' },
	{ name: '卧龙', url: 'http://collect.wolongzyw.com/api.php/provide/vod/' },
	{ name: '金鹰', url: 'http://jinyingzy.com/provide/vod' },
	{ name: '人人', url: 'http://www.rrvipw.com/api.php/provide/vod/' },
	{ name: '闪电', url: 'http://sdzyapi.com/api.php/provide/vod/' },
	{ name: '飘花', url: 'http://www.zzrhgg.com/api.php/provide/vod/' },
	{ name: "CK", url: "http://ckzy.me/api.php/provide/vod/" },
	{ name: "飞速", url: "http://m3u8.feisuzyapi.com/api.php/provide/vod/" },
	{ name: "无尽", url: "http://api.wujinapi.com/api.php/provide/vod/" },
	{ name: "U酷", url: "http://api.ukuapi.com/api.php/provide/vod/" },
	{ name: "樱花1", url: "http://m3u8.apiyhzy.com/api.php/provide/vod/" },
	{ name: "樱花2", url: "http://yhzy.cc/api.php/provide/vod/" },
	{ name: '飞飞', url: 'http://www.feifei67.com/api.php/provide/vod/' },
]

/**
 * 解析视频
 */
export const getVideoList = (item, TYPENAME) => {
	const types = item.vod_play_url.split('$$$')
	const vidoes = types.map((val, index) => {
		const title = TYPENAME + (index + 1)
		if (val.includes('.m3u8') || val.includes('.mp4')) {
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
	return vidoes
}

export const searchVideo = async (videoType) => {
	return new Promise((resolve) => {
		uni.request({
			url: videoType.src,
			timeout: 3000,
			success(res) {
				resolve(res.data)
			},
			fail() {
				resolve(null)
			}
		})
	})
}

export const cnxhVideo = async (src) => {
	return new Promise((resolve) => {
		uni.request({
			url: src,
			timeout: 3000,
			success(res) {
				resolve(res.data)
			},
			fail() {
				resolve(null)
			}
		})
	})
}