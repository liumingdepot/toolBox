/**
 * 解析视频
 */
export const getVideoList = (item, TYPENAME) => {
	const types = item.vod_play_url.split('$$$')
	const vidoes = types.map((val, index) => {
		if (val.includes('.m3u8') || val.includes('.mp4')) {
			// 视频列表
			const videoList = val.split('#')
			return videoList.map(val2 => {
				// 名称 和 播放地址
				const temp = val2.split('$')
				return {
					title: temp[0],
					url: temp[1],
				}
			})
		} else {
			return false
		}
	}).filter(Boolean)
	return vidoes
}
