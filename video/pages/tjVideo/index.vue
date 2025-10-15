<template>
	<view class="contentIndex">
		<z-paging ref="paging" v-model="activeVideos" @query="initVideo" auto-show-back-to-top>
			<!-- 头部分类 -->
			<view slot="top">
				<image src="/static/phb/tuijian.png" class="topImg"></image>
				<view class="scrollView">
					<scroll-view scroll-x class="scroll" :show-scrollbar="false">
						<view class="item" v-for="(item,index) in navs" :key="index" @tap="changeType(item)"
							:class="from.type == item.type_id  ? 'active':''">
							{{item.type_name}}
						</view>
					</scroll-view>
				</view>
				<view class="scrollView">
					<scroll-view scroll-x class="scroll" :show-scrollbar="false">
						<view class="item" v-for="(item,index) in navs1" :key="index" @tap="changeType1(item)"
							:class="from.type1 == item.type_id  ? 'active':''">
							{{item.type_name}}
						</view>
					</scroll-view>
				</view>
			</view>
			<!-- 视频详情 -->
			<view class="mainBox">
				<view v-for="(item,index) in activeVideos" class="item" @tap="goVideo(item)">
					<image :src="item.vod_pic" type="image/webp" webp class="image" mode="aspectFill"></image>
					<view class="title">{{item.vod_name}}</view>
					<rich-text class="msg" style="margin-top: 8rpx;" :nodes="item.vod_remarks"></rich-text>
				</view>
			</view>
		</z-paging>
	</view>
</template>

<script>
	import { getTuijianVideo, navs } from './config.js'
	import zPaging from '@/uni_modules/z-paging/components/z-paging/z-paging.vue'

	export default {
		components: {
			zPaging
		},
		data() {
			return {
				from: {
					pagenum: 0,
					type: 2,
					type1: 13,
					type_id:13
				},
				navs,
				navs1:navs[0].children,
				activeVideos: []
			}
		},
		onHide() {
			uni.hideLoading()
		},
		methods: {
			changeType(item) {
				uni.showLoading({
					mask:true,
					title: '加载中'
				})
				this.from.type = item.type_id
				this.from.type_id = item.children[0].type_id
				this.from.type1 = item.children[0].type_id
				this.navs1 = item.children
				this.$refs.paging.reload();
			},
			changeType1(item){
				uni.showLoading({
					mask:true,
					title: '加载中'
				})
				this.from.type1 = item.type_id
				this.from.type_id = item.type_id
				this.$refs.paging.reload();
			},
			changepxType(type){
				uni.showLoading({
					mask:true,
					title: '加载中'
				})
				this.from.pxType = type
				this.$refs.paging.reload();
			},
			initVideo(pagenum) {
				this.from.pagenum = pagenum
				getTuijianVideo(this.from).then(activeVideos => {
					this.$refs.paging.complete(activeVideos);
					setTimeout(() => {
						uni.hideLoading()
					}, 500)
				}).catch(res => {
					this.$refs.paging.complete(false);
				})
			},
			goVideo(item) {
				uni.navigateTo({
					url:'/pages/home/search?title=' + item.vod_name
				})
			}
		}
	}
</script>


<style scoped lang="scss">
	.contentIndex {
		padding-bottom: 50rpx;
		
		.topImg {
			width: 98rpx;
			height: 52rpx;
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
			position: relative;
			overflow: hidden;

			.item {
				width: 214rpx;
				border-radius: 16rpx;
				margin-left: 28rpx;
				margin-bottom: 28rpx;
				float: left;
				position: relative;

				.image {
					width: 100%;
					height: 306rpx;
					border-radius: 8rpx;
					background-image: url('/static/bgImage.png');
					background-size: 100% 100%;
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
				}
			}
		}

	}
</style>
