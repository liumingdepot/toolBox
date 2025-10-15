<template>
	<view class="main">
		<z-paging ref="paging" v-model="activeVideos" @query="initVideo" auto-show-back-to-top>
			<view slot="top">
				<image src="/static/phb/dj.png" class="topImg"></image>
			</view>
			<!-- 视频详情 -->
			<view class="mainBox">
				<view v-for="(item,index) in activeVideos" class="item" @tap="goVideo(item)">
					<image :src="item.vod_pic" type="image/webp" webp class="image" mode="aspectFill"></image>
					<view class="tag">{{item.type_name}}</view>
					<view class="title">{{item.vod_name}}</view>
					<rich-text class="msg" style="margin-top: 8rpx;" :nodes="item.vod_remarks"></rich-text>
				</view>
			</view>
		</z-paging>
	</view>
</template>

<script>
	import { videoList } from './config.js'
	import zPaging from '@/uni_modules/z-paging/components/z-paging/z-paging.vue'

	export default {
		components: {
			zPaging
		},
		data() {
			return {
				from: {
					title: '',
					videoTypeId: ''
				},
				list: [],
				activeVideos: []
			}
		},
		methods: {
			initVideo(pagenum) {
				uni.showLoading({
					mask: true,
					title: '加载中'
				})
				videoList(pagenum).then(res => {
					this.$refs.paging.complete(res);
					setTimeout(() => {
						uni.hideLoading()
					}, 500)
				}).catch(res => {
					this.$refs.paging.complete(false);
				})
			},
			goVideo(item) {
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

<style lang="scss" scoped>
	.main {
		.topImg {
			height: 52rpx;
			width: 93rpx;
			margin: 20rpx 40rpx;
			padding-top: var(--status-bar-height);
		}

		.scrollView {
			padding: 10rpx 18rpx;

			.scroll {
				white-space: nowrap;
				width: 100%;

				.item {
					display: inline-block;
					color: #82849A;
					padding: 8rpx 18rpx;
					margin-right: 8rpx;
					line-height: 1;
				}

				.active {
					color: #3ABC56;
					border: 2rpx solid #3ABC56;
					border-radius: 40rpx;
				}
			}

		}

		.mainBox {
			margin-top: 20rpx;
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
			}
		}

	}
</style>