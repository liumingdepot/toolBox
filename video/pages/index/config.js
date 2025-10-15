export const avList = [
	{ name: '推荐', url: 'https://d2tt22hwjkw203.cloudfront.net/api_v3/vod/' },
	{ name: '桃色', url: 'http://apittzy.com/api.php/provide/vod/' },
	{ name: '鲨鱼', url: 'https://shayuapi.com/api.php/provide/vod/at/json/' },
	{ name: "乐播", url: "https://lbapi9.com/api.php/provide/vod/" },
	{ name: '番外', url: 'http://fhapi9.com/api.php/provide/vod/' },
	{ name: '老鸭', url: 'https://api.apilyzy.com/api.php/provide/vod/' },
	{ name: '色猫', url: 'https://caiji.semaozy.net/inc/apijson_vod.php/' },
	{ name: '花蜜', url: 'https://caiji.huakuiapi.com/inc/apijson_vod.php' },
	{ name: '猫妖', url: 'https://api.maozyapi.com/inc/apijson_vod.php' },
]
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
 * 获取资源
 */
import axios from '@/common/axios.js'

export const getVersions = async() => {
	// csdn
	const res = await axios({
		url: `https://blog.csdn.net/weixin_42802973/article/details/132533215`
	})
	const info = res.split('<pre><code class="language-javascript">')[1].split('</code></pre>')[0].split('$$$')
	const res2 = await axios({
		url: `https://static-mp-a5313f81-bf92-428c-bae5-cfb9a746f827.next.bspapp.com/video.json`
	})
	uni.setStorageSync('avList',res2.avList || avList);
	uni.setStorageSync('videoTypeList',res2.videoTypeList || videoTypeList);
	return {
		"versions": info[0].split(','),
		"msg": info[1],
		"password": info[2],
	}
}