<template>
	<view class="content">
		<view class="wrap">
			<button type="primary" @click="openMP()">启动小程序</button>
			<button type="primary" @click="openMP2Path()">启动水页面</button>
		</view>
	</view>
</template>

<script>
	const mp = uni.requireNativePlugin('uniMP');
	export default {
		data() {
			return {
				appid: '__UNI__C814DC9',
				wgt: 'https://liumingdepot.github.io/toolBox/__UNI__C814DC9'
			}
		},
		methods: {
			installMP(cb) {
				// 获取应用
				mp.getUniMPVersion(this.appid, (ret) => {
					if (ret.code != 0) {
						//获取失败时安装应用
						mp.installUniMP({
							appid: this.appid,
							wgtFile: this.wgt
						}, () => {
							cb()
						});
					} else {
						cb()
					}
				});
			},
			openMP() {
				this.installMP(() => {
					mp.openUniMP({
						appid: this.appid,
						icon: '/static/logo.png'
					})
				})
			},
			openMP2Path() {
				this.installMP(() => {
					mp.openUniMP({
						appid: this.appid,
						path: 'pages/YA-ydjc/page1',
					});
				})
			},
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #cf0000;
	}

	.wrap {
		width: 690rpx;
		margin-top: 30rpx;
		padding: 0 30rpx;
	}

	button {
		margin-top: 30rpx;
		margin-bottom: 30rpx;
	}
</style>
