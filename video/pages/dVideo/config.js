/**
 * 获取资源
 */
import axios from '@/common/axios.js'
import { getVideoList } from '@/common/config.js'

export const videoList = (num = 1) => {
	return axios({
		url: `http://cj.lziapi.com/api.php/provide/vod/?t=46&ac=videolist&pg=${num}`
	}).then((res) => {
		const arr = []
		for (let item of res.list) {
			item.vod_play_url_video = getVideoList(item, '量子资源')
			item.typeUrl = [{
				"url": "http://cj.lziapi.com/api.php/provide/vod/",
				"type_id": 13,
				"name": "量子"
			}]
			arr.push(item)
		}
		return arr
	})
}