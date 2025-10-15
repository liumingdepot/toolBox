<template>
	<view class="content">
		<button type="primary" v-for="(item,index) in navList" :key="index" @click="openMP()">
			启动小程序
		</button>
		<button type="primary" @click="openMP2Path()">启动水页面</button>
	</view>
</template>

<script setup>
	const mp = uni.requireNativePlugin('uniMP');

	const bUrl = 'https://liumingdepot.github.io/toolBox'

	function installMP(cb) {
		// 获取应用
		
	}

	function openMP(item) {
		mp.getUniMPVersion(item.appid, (ret) => {
			if (ret.code != 0) {
				//获取失败时安装应用
				mp.installUniMP({
					appid: item.appid,
					wgtFile: item.wgt
				}, () => {
					mp.openUniMP({
						appid: item.appid,
						icon: '/static/logo.png'
					})
				});
			} else {
				mp.openUniMP({
					appid: item.appid,
					icon: '/static/logo.png'
				})
			}
		});
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	button {
		margin-top: 30rpx;
		margin-bottom: 30rpx;
	}
</style>