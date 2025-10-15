import axios from '@/common/axios.js'
import {getVideoList} from './getVideoList'


/**
 * 搜索
 */
export const searchVideo =  (key,num = 1,burl) => {
  const url = `?ac=videolist&wd=${key}&pg=${num}`
  return axios({
    url:burl +  url
  }).then(res=>{
    const arr = []
    for (let item of res.list) {
      item.vod_play_url_video = getVideoList(item)
      arr.push(item)
    }
    return arr
  })
}

/**
 * 推荐
 */
export const getTuijianVideo = (params) => {
  const url = 'http://cj.lziapi.com/api.php/provide/vod/'
  let type_id = params.type_id;
  return axios({
    url: url + `?t=${type_id}&ac=videolist&pg=${params.pagenum}`
  }).then((res) => {
    const arr = []
    for (let item of res.list) {
      item.vod_play_url_video = getVideoList(item, '量子资源')
      arr.push(item)
    }
    return arr
  })
}


/**
 * 短剧
 */
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
