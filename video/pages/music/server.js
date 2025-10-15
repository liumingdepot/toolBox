import axios from '@/common/axios.js'
import kwDES from '@/pages/music/kwDES.js'

// #ifdef H5
const bUrl = '/kuwo/'
// #endif

// #ifndef H5
const bUrl = 'https://www.kuwo.cn/'
// #endif

export const videoList = (params) => {
  return axios({
    url: `${bUrl}/search/searchMusicBykeyWord?vipver=1&client=kt&ft=music&cluster=0&strategy=2012&encoding=utf8&rformat=json&mobi=1&issubtitle=1&show_copyright_off=1&pn=${params.num}&rn=20&all=${params.key}`,
  })
}

export const videoItem = (params) => {
  const q = kwDES.encryptQuery(`user=0&android_id=0&prod=kwplayerhd_ar_4.3.0.8&corp=kuwo&vipver=4.3.0.8&source=kwplayerhd_ar_4.3.0.8_tianbao_T1A_qirui.apk&notrace=0&type=convert_url2&br=2000&format=flac&sig=0&rid=${params.rid}&priority=bitrate&loginUid=0&network=WIFI&loginSid=0&mode=down`)
  return axios({
    url: `https://nmobi.kuwo.cn/mobi.s?f=kuwo&q=${q}`,
  }).then(res=>{
    return kwDES.parseParamsToJson(res)
  })
}

export const getlyric = (params) => {
  return axios({
    url: `${bUrl}/openapi/v1/www/lyric/getlyric?musicId=${params.rid}&httpsStatus=1&reqId=d21938f0-9cd9-11f0-9861-2369cae1e1cc&plat=web_www&from=`,
  })
}