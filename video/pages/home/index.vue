<template>
	<view class="content">
		<image src="/static/home/indexLogo.png" class="logo"></image>

		<view class="input" @tap="goUrl">
			<image src="/static/home/icons.png" class="img"></image>想搜什么就搜吧~
		</view>

		<view class="bottom">
			<image src="/static/my/people/bg.png"></image>
		</view>

		<u-modal :show="show" title="提示" @confirm="show = false">
			<view class="box">
				<view>请截图保存地址，以防丢失</view>
				<image src="/static/logoM.png" mode=""></image>
				<view>微信收藏哦！</view>
			</view>
		</u-modal>
	</view>
</template>

<script>
	import {
		getVideoList
	} from '../../common/config'
	export default {
		onHide() {
			uni.hideLoading()
		},
		data() {
			return {
				searchValue: '',
				bannerList: [],
				show: true,
			}
		},
		onLoad() {

		},
		methods: {
			goUrl() {
				uni.navigateTo({
					url: '/pages/home/search'
				})
			},
		},
	}
</script>

<style>
	page {
		background-image: url('/static/home/indexBg.png');
		background-repeat: no-repeat;
		width: 100vw;
		background-size: 100%;
		background-color: #f9f9f9;
	}
</style>

<style scoped lang="scss">
	.content {
		padding-top: 120rpx;

		.box {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;

			image {
				width: 440rpx;
				height: 440rpx;
			}
		}

		.logo {
			width: 208rpx;
			height: 314rpx;
			display: block;
			margin: 0 auto;
		}

		.input {
			width: 694rpx;
			height: 92rpx;
			background: #FFFFFF;
			box-shadow: 0px 24rpx 40rpx 2rpx rgba(130, 245, 156, 0.18);
			border-radius: 16rpx;
			opacity: 1;
			margin: 54rpx auto;
			border: 2rpx solid #3ABC56;
			font-size: 28rpx;
			color: #B1B1B1;
			line-height: 92rpx;
			box-sizing: border-box;
			padding-left: 24rpx;
			display: flex;
			align-items: center;
			margin-top: 50rpx;

			.img {
				margin-right: 22rpx;
				width: 30rpx;
				height: 30rpx;
			}
		}

		.bottom {
			position: fixed;
			bottom: 150rpx;
			width: 100vw;

			image {
				width: 518rpx;
				height: 158rpx;
				margin: 24rpx auto;
				display: block;
			}
		}
	}
</style>
