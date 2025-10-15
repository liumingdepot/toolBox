<template>
	<view class="contentIndex">
		<u-navbar title="我的收藏" bgColor="rgb(218 249 227)" @leftClick="leftClick" placeholder></u-navbar>

		<!-- 历史 -->
		<view @tap="showClose = !showClose" class="bianji">
			<view style="font-size: 30rpx;font-weight: bold;color: #333;">我的收藏</view>
			<view>{{showClose?'确定':'编辑'}}</view>
		</view>


		<!-- 结果 -->
		<scroll-view class="scrollY" :scroll-y="true">
			<!-- 视频详情 -->
			<view class="mainBox">
				<view v-for="(item,index) in scList" class="item" @tap="goVideo(item)" :class="showClose ? 'active':''">
					<image :src="item.vod_pic" type="image/webp" webp class="image" mode="aspectFill"></image>
					<view class="tag">{{item.type_name}}</view>
					<view class="title">{{item.vod_name}}</view>
					<rich-text class="msg" style="margin-top: 8rpx;" :nodes="item.vod_remarks"></rich-text>

					<view class="mask">
						<u-button type="error" text="删除" size="small" class="btn"></u-button>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scList: [],
				showClose: false
			}
		},
		onShow() {
			this.scList = uni.getStorageSync('scList') || [];
			console.log(this.scList);
		},
		methods: {
			leftClick() {
				uni.switchTab({
					url: '/pages/my/index'
				})
			},
			closeItem(item) {
				const index = this.scList.indexOf(item)
				if (index != -1) {
					this.scList.splice(index, 1)
					// 历史数据缓存
					uni.setStorageSync('scList', [...new Set([...this.scList])]);
				}
			},
			goVideo(item) {
				if (this.showClose) {
					this.closeItem(item)
					return
				}
				uni.setStorage({
					key: 'videoItem',
					data: item,
					success() {
						uni.navigateTo({
							url: '/pages/video/index'
						})
					}
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.contentIndex {
		padding-bottom: 50rpx;

		.topImg {
			height: 52rpx;
			width: 141rpx;
			margin: 20rpx 40rpx;
			padding-top: var(--status-bar-height);
		}

		.bianji {
			padding: 0 24rpx;
			padding-right: 30rpx;
			font-size: 28rpx;
			color: #2bc976;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.scrollY {
			height: calc(100vh - 350rpx);
			padding-top: 20rpx;
		}

		.mainBox {
			position: relative;
			overflow: hidden;

			.item {
				width: 214rpx;
				border-radius: 16rpx;
				margin-left: 28rpx;
				margin-bottom: 28rpx;
				float: left;
				position: relative;

				.tag {
					position: absolute;
					right: 0;
					top: 0;
					color: #fff;
					font-size: 26rpx;
					padding: 8rpx;
					background-color: rgba(49, 201, 108, 0.8);
					border-radius: 8rpx;
				}

				.tag2 {
					position: absolute;
					left: 0;
					top: 460rpx;
					color: #fff;
					font-size: 26rpx;
					padding: 8rpx;
					background-color: rgba(49, 201, 108, 0.8);
					border-radius: 8rpx;
				}

				.image {
					width: 100%;
					height: 306rpx;
					border-radius: 8rpx;
					background-image: url('/static/bgImage.gif');
					background-repeat: no-repeat;
					background-size: 100%;
					background-position: center;
					background-color: #000;
				}

				.title {
					font-size: 28rpx;
					width: 100%;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					line-height: 2;
				}

				.msg {
					font-size: 22rpx;
					color: #82849A;
					width: 100%;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					display: flex;
					align-items: center;

					.icon {
						width: 30rpx;
						height: 30rpx;
						margin-right: 8rpx;
						transform: translateY(1rpx);
					}
				}


				.mask {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					display: none;
					align-items: center;
					justify-content: center;
					border-radius: 8rpx;
					background-color: rgba(0,0,0,0.3);
					
					.btn{
						width: 140rpx;
					}
				}
			}

			.active {
				position: relative;

				.mask {
					display: flex;
				}
			}
		}
	}
</style>