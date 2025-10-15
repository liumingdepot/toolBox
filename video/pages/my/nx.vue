<template>
	<view class="content">
		<u-navbar title="特别鸣谢" bgColor="rgb(218 249 227)" autoBack placeholder></u-navbar>

		<view class="box">
			<view class="logo"></view>
			<view class="title">感谢梭影TV APP做出杰出贡献的大佬</view>
			<view class="text">开发不易，请我喝杯茶呗！</view>
		</view>

		<!-- 贡献榜 -->
		<view class="gxb">
			<view class="title">贡献榜</view>
			<view class="item">
				<image src="/static/my/mx/lm.jpg" class="tx"></image>
				<view>
					<view>Mr. Liu</view>
					<view class="text">负责开发与整合</view>
				</view>
				<image src="/static/my/mx/dza.png" class="dzIcon" @tap="clickShow(1)"
					:class="show1?'wobble-ver-left':''"></image>
			</view>
			<view class="item">
				<image src="/static/my/mx/lbw.png" class="tx"></image>
				<view>
					<view>AlexJepsen</view>
					<view class="text">负责UI界面设计</view>
				</view>
				<image src="/static/my/mx/dza.png" class="dzIcon" @tap="clickShow(2)"
					:class="show2?'wobble-ver-left':''"></image>
			</view>
		</view>


		<u-popup :show="show" mode="center" closeOnClickOverlay @close="show = false">
			<image src="/static/my/mx/lmck.jpg" v-if="index == 1" style="width: 552rpx;height: 750rpx;"></image>
			<image src="/static/my/mx/lbwck.jpg" v-if="index == 2" style="width: 552rpx;height: 750rpx;"></image>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show1: false,
				show2: false,
				index: 0,
				show: false
			}
		},
		onHide() {
			uni.hideLoading()
		},
		methods: {
			clickShow(index) {
				this['show' + index] = true
				this.index = index
				setTimeout(() => {
					this['show' + index] = false
				}, 1000)
				setTimeout(() => {
					this.show = true
				}, 50)
			}
		}
	}
</script>

<style scoped lang="scss">
	@keyframes wobble-ver-left {

		0%,
		100% {
			transform: translateY(0) rotate(0);
			transform-origin: 50% 50%;
		}

		15% {
			transform: translateY(-30rpx) rotate(-6deg);
		}

		30% {
			transform: translateY(15rpx) rotate(6deg);
		}

		45% {
			transform: translateY(-15rpx) rotate(-3.6deg);
		}

		60% {
			transform: translateY(9rpx) rotate(2.4deg);
		}

		75% {
			transform: translateY(-6rpx) rotate(-1.2deg);
		}
	}

	.wobble-ver-left {
		animation: wobble-ver-left 1s both;
	}

	.content {
		.box {
			margin: 24rpx auto;
			width: 694rpx;
			background: #ffffff;
			border-radius: 16rpx;
			text-align: center;
			padding: 44rpx;
			padding-bottom: 60rpx;
			box-sizing: border-box;

			.logo {
				width: 116rpx;
				height: 116rpx;
				background: #FFFFFF;
				border-radius: 20rpx;
				margin: 10rpx auto;
				background-image: url('../../static/logo.png');
				background-size: 100% 100%;
			}

			.title {
				padding-top: 30rpx;
				font-size: 30rpx;
			}

			.text {
				margin-top: 15rpx;
				font-size: 26rpx;
				color: #82849A;
				line-height: 1.5;
			}
		}

		.gxb {
			width: 694rpx;
			background: #ffffff;
			border-radius: 16rpx;
			margin: 0 auto;
			padding: 0 30rpx;
			box-sizing: border-box;

			.title {
				font-size: 30rpx;
				font-weight: bold;
				line-height: 80rpx;
				padding-top: 20rpx;
			}

			.item {
				display: grid;
				grid-template-columns: 122rpx auto 98rpx;
				align-items: center;
				font-size: 28rpx;
				height: 158rpx;
				border-top: 2rpx solid rgba(255, 255, 255, 0.15);

				&:nth-child(1) {
					border-top: 2rpx solid transparent;
				}

				.text {
					color: #82849A;
					font-size: 24rpx;
				}

				.tx {
					width: 94rpx;
					height: 94rpx;
					border-radius: 50%;
				}

				.dzIcon {
					width: 94rpx;
					height: 94rpx;
				}
			}
		}

	}
</style>