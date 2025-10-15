<template>
	<view class="contentIndex">
		<z-paging ref="paging" v-model="activeVideos" @query="initVideo" auto-show-back-to-top>
			<!-- 头部分类 -->
			<view slot="top">
				<u-navbar title="欢迎进入" ref="navBar" bgColor="#d8f2d0" @leftClick="leftClick" placeholder></u-navbar>
				<view class="topImages">
					<image src="/static/phb/tuijian.png" class="topImg"></image>
					<image src="/static/home/icons.png" class="img" @tap="goSearch">
				</view>
				<view class="scrollView">
					<view class="scroll">
						<view class="item" v-for="(item,index) in navs" :key="index" @tap="changeType(item)"
							:class="from.type == item.type_id  ? 'active':''">
							{{item.type_name}}
						</view>
					</view>
				</view>
			</view>
			<!-- 视频详情 -->
			<view class="mainBox">
				<view v-for="(item,index) in activeVideos" class="item" @tap="goVideo(item)">
					<image :src="item.vod_pic" type="image/webp" webp class="image" mode="aspectFill"></image>
					<view class="title">{{item.vod_name}}</view>
					<rich-text class="msg" style="margin-top: 8rpx;" :nodes="item.type_name"></rich-text>
				</view>
			</view>
		</z-paging>
	</view>
</template>

<script>
	import {
		getTuijianVideo,
		navs,
		getVideoItem
	} from './config.js'
	import zPaging from '@/uni_modules/z-paging/components/z-paging/z-paging.vue'

	export default {
		components: {
			zPaging
		},
		data() {
			return {
				from: {
					pagenum: 0,
					type: 41,
					type_id: 41,
				},
				navs,
				activeVideos: []
			}
		},
		onHide() {
			uni.hideLoading()
		},
		methods: {
			changeType(item) {
				uni.showLoading({
					mask: true,
					title: '加载中'
				})
				this.from.type = item.type_id
				this.from.type_id = item.type_id
				this.$refs.paging.reload();
			},
			changepxType(type) {
				uni.showLoading({
					mask: true,
					title: '加载中'
				})
				this.from.pxType = type
				this.$refs.paging.reload();
			},
			leftClick(){
				uni.navigateBack()
			},
			initVideo(pagenum) {
				this.from.pagenum = pagenum
				getTuijianVideo(this.from).then(activeVideos => {
					console.log(activeVideos);
					this.$refs.paging.complete(activeVideos);
					setTimeout(() => {
						uni.hideLoading()
					}, 500)
				}).catch(res => {
					this.$refs.paging.complete(false);
				})
			},
			goSearch() {
				uni.navigateTo({
					url: '/pages/avVideo/search'
				})
			},
			goVideo(item) {
				getVideoItem(item.vod_id).then(res=>{
					uni.setStorage({
						key: 'videoItemAv',
						data: res,
						success() {
							uni.navigateTo({
								url: '/pages/avVideo/video'
							})
						}
					});
				})
			}
		}
	}
</script>


<style scoped lang="scss">
	.contentIndex {
		padding-bottom: 50rpx;

		.topImages {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin: 20rpx 40rpx;

			.topImg {
				width: 98rpx;
				height: 52rpx;
				padding-top: var(--status-bar-height);
			}

			.img {
				width: 40rpx;
				height: 40rpx;
			}
		}


		.scrollView {
			padding: 10rpx 18rpx;

			.scroll {
				display: grid;
				grid-template-columns: 1fr 1fr 1fr 1fr;

				.item {
					color: #82849A;
					padding: 8rpx 18rpx;
					margin-right: 8rpx;
					line-height: 1;
					text-align: center;
					border: 2rpx solid transparent;
				}

				.active {
					color: #3ABC56;
					border: 2rpx solid #3ABC56;
					border-radius: 40rpx;
				}
			}

		}


		.mainBox {
			position: relative;
			overflow: hidden;
			display: grid;
			grid-template-columns: 1fr 1fr;
			padding: 0 24rpx;
			grid-gap: 24rpx;

			.item {
				width: 100%;
				border-radius: 16rpx;
				position: relative;

				.image {
					width: 100%;
					height: 206rpx;
					border-radius: 8rpx;
					background-image: url('/static/bgImage.gif');
					background-size: 100% 100%;
				}

				.title {
					font-size: 28rpx;
					line-height: 2;
					font-size: 22rpx;
					display: -webkit-box;
					word-break: break-all;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 3; //需要显示的行数
					overflow: hidden;
					text-overflow: ellipsis;
				}

				.msg {
					font-size: 22rpx;
					color: #82849A;
					width: 100%;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
		}

	}
</style>
