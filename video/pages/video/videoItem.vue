<template>
	<view class="box">
		<web-view :src="src" class="video" @message="fullscreenchange"></web-view>
	</view>
</template>

<script>
	var wv;
	const lyzmlDLNA = uni.requireNativePlugin('lyzml-DLNA');
	export default {
		data() {
			return {
				src: '',
			}
		},
		onUnload() {
			// #ifdef APP-PLUS
			plus.screen.lockOrientation('portrait-primary')
			// #endif
		},
		onLoad() {
			const videoItem = uni.getStorageSync('videoList');
			this.src = `/hybrid/html/index.html?url=${videoItem.url}&title=${videoItem.title}&poster=${videoItem.poster}`
			console.log(this.src);
			uni.setNavigationBarTitle({
				title: videoItem.title
			});
		},
		methods: {
			fullscreenchange(e) {
				const fullScreen = e.detail.data[0].isFullscreen
				if (fullScreen == 1) {
					plus.screen.lockOrientation('landscape-primary')
				} else {
					plus.screen.lockOrientation('portrait-primary')
				}
			},
			touPin(){
				lyzmlDLNA.startSearch(resp => {
					console.log(resp);
					if (resp.code == 0) {
						this.searchingText = "搜索中...";
					} else if (resp.code == 1) {
						console.log(resp.result);
						lyzmlDLNA.playVideo({
							udn: resp.result[0].udn,
							mediaURL: this.item.url
						}, (resp) => {
							if (resp && 0 != resp.code) {
								uni.showToast({
									icon: "none",
									title: "若投屏失败，请尝试重新扫描"
								});
							}
						});
				
					} else if (resp.code == 2) {
						this.searchingText = "搜索完成";
					}
				});
			}
		}
	}
</script>

<style>
	.box {
		height: 100vh;
		background-color: #000;
	}
</style>