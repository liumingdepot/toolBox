<template>
	<view class="content">
		<button type="primary" v-for="(item,index) in state.navList" :key="index" @click="openMP(item)">
			启动小程序
		</button>
	</view>
</template>

<script setup>
	import { onMounted, reactive } from 'vue';

	const mp = uni.requireNativePlugin('uniMP');

	const bUrl = 'https://liumingdepot.github.io/toolBox'

	const state = reactive({
		navList: []
	})

	onMounted(() => {
		uni.request({
			url:`${bUrl}/navs.json`,
			dataType:'json'
		}).then(res=>{
			console.log(res.data);
			console.log();
			state.navList = JSON.parse(res.data).navs
		})	
	})


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