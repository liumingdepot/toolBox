<template>
	<view class="content">
		<view class="warp" v-if="show">
			<image src="/static/gx.png" class="img"></image>
			<view class="title">检测到新版本</view>
			<view class="text">{{msg}}</view>
			<view @tap="download" class="gx">立即更新</view>
		</view>
	</view>
</template>

<script>
	import { getVersions } from './config.js'
	export default {
		data() {
			return {
				show: false,
				msg: ''
			}
		},
		onLoad() {
			// this.getversions()
			uni.switchTab({
				url: '/pages/music/index'
			});
		},
		methods: {
			getversions() {
				uni.showToast({
					title: '获取版本中，请稍后',
					icon: 'none'
				})
				const info = uni.getSystemInfoSync()
				getVersions().then(res => {
					uni.setStorage({
						key: 'password',
						data: res.password,
					});
					if('dome' + info.appVersion == res.password || 'dome' + info.appWgtVersion == res.password){
						uni.navigateTo({
							url:'/pages/iosSh/iosSh'
						})
					}else{
						if (res.versions.includes(info.appVersion)) {
							// 版本相同
							uni.switchTab({
								url: '/pages/home/index'
							});
							uni.hideLoading()
						} else {
							uni.hideLoading()
							this.show = true
							this.msg = res.msg
						}
					}
				}).catch(() => {
					uni.hideLoading()
					uni.switchTab({
						url: '/pages/home/index'
					});
				})
			},
			download() {
				// #ifdef APP-PLUS
				plus.runtime.openURL('http://video_4.gitee.io/video/')
				// #endif
				
				// #ifdef H5
				uni.switchTab({
					url: '/pages/home/index'
				});
				// #endif
			}
		}
	}
</script>


<style>
	page {
		background: #292B3C;
	}
</style>

<style scoped lang="scss">
	.content {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		height: 100vh;

		.warp {
			width: 512rpx;
			padding: 50rpx;
			box-sizing: border-box;
			background: #FFFFFF;
			border-radius: 20rpx;
			background-color: #fff;
			text-align: center;

			.img {
				width: 88rpx;
				height: 88rpx;
			}

			.title {
				padding-top: 18rpx;
				font-size: 30rpx;
			}

			.text {
				padding: 28rpx 0;
				color: #666666;
				font-size: 26rpx;
			}

			.gx {
				width: 302rpx;
				height: 72rpx;
				background: #3BBEAE;
				border-radius: 38rpx;
				color: #fff;
				line-height: 72rpx;
				font-size: 28rpx;
				margin: 0 auto;
			}
		}
	}
</style>
