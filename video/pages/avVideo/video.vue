<template>
	<view class="content">
		<u-navbar :title="videoItem.vod_name" ref="navBar" bgColor="#d8f2d0" @leftClick="leftClick"
			placeholder></u-navbar>

		<view class="main">
			<view class="avMain">
				<view class="tools">
					<image v-if="sc" src="/static/video/icon1s.png" @tap="remSc"></image>
					<image v-else src="/static/video/icon1.png" @tap="addSc"></image>
					<view :style="{color:sc?'#2dc96f':''}">{{sc?"已收藏":'收藏'}}</view>
				</view>
				<image class="img" :src="videoItem.vod_pic"></image>
				<view class="avtitle">{{videoItem.vod_name}}</view>
				<view class="ziyuan">
					<view>{{videoItem.typeName}}资源</view>
					<view class="fg">|</view>
					<view>{{videoItem.type_name}}</view>
				</view>
			</view>

			<view class="titleBox">
				<view class="textZ">选集</view>
				<view class="text" @tap="show2 = true">
					<view>更多</view>
					<u-icon name="arrow-right" color="#D4D4D4" size="16" style="margin-left: 8rpx;"></u-icon>
				</view>
			</view>

			<scroll-view class="scrollX" scroll-x v-if="videoItem.vod_name">
				<!-- 电视剧 -->
				<view class="actives actives2" v-if="videoType == 1">
					<view class="item" :class="jiIndex == index ?'active':''"
						v-for="(item,index) in videoList[current].videoList" :key="index"
						@tap="getVideoItem(item,index)">
						{{index + 1}}
					</view>
				</view>
				<!-- 正常 -->
				<view class="actives" v-else>
					<view class="item" :class="jiIndex == index ?'active':''"
						v-for="(item,index) in videoList[current].videoList" :key="index"
						@tap="getVideoItem(item,index)">
						{{item.title}}
					</view>
				</view>
			</scroll-view>

			<!-- 猜你喜欢 -->
			<view class="titleBox">
				<view class="textZ">猜你喜欢</view>
			</view>

			<!-- 更多 -->
			<view class="mainBox2">
				<view v-for="(item,index) in tuijianList" class="item" :key="index" @tap="setVideoItem(item)">
					<image :src="item.vod_pic" type="image/webp" webp class="image" mode="aspectFill"></image>
					<view class="tag">{{item.type_name}}</view>
					<view class="mainBox_title">{{item.vod_name}}</view>
					<rich-text class="msg" style="margin-top: 8rpx;" :nodes="item.vod_remarks"></rich-text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { cnxhVideo, getVideoItem } from './config.js'
	export default {
		data() {
			return {
				videoType: 0,
				videoList: [],
				tuijianList: [],
				current: 0,
				src: '',
				jiIndex: 0,
				backType: "search",
				videoItem: {},
				sc: false,
				item: {},
				fullscreen: false,
				show2: false,
				delta: 0,
				shadowStyle: {
					backgroundImage: "none",
					paddingTop: "0",
					marginTop: "20rpx"
				}
			}
		},
		onReady() {
			this.getVideoInit()
		},
		onLoad(option) {
			this.backType = option.type
		},
		watch: {
			src() {
				this.delta++
				if (this.src) {
					this.$nextTick(() => {
						this.sc = false
						// 初始化收藏
						const scList = uni.getStorageSync('scList') || [];
						for (let item of scList) {
							if (item.vod_id == this.videoItem.vod_id) {
								this.sc = true
							}
						}
					})
				}
			}
		},
		methods: {
			reloadVideo() {
				setTimeout(() => {
					this.getVideoItem(this.item, this.jiIndex)
				}, 500)
			},
			// 初始化页面
			getVideoInit() {
				this.tuijianList = []
				// 获取缓存
				const videoItem = uni.getStorageSync('videoItemAv');
				// 设置标题
				uni.setNavigationBarTitle({
					title: videoItem.vod_name
				});
				this.videoItem = videoItem
				console.log({ ...videoItem });
				this.videoList = videoItem.vod_play_url_video
				// 缓存
				const bfItem = uni.getStorageSync('bfItem' + this.videoItem.vod_id);
				if (bfItem) {
					this.jiIndex = bfItem.index
					this.changePicker(bfItem.current)
				}
				// 猜你喜欢
				if (videoItem.typeName == '精品推荐') {
					this.tuijianList = videoItem.tuijianList
				} else {
					const url = `${videoItem.typeUrl}?&ac=videolist&t=${videoItem.type_id}`
					cnxhVideo(url, videoItem.typeName, videoItem.typeUrl).then(res => {
						this.tuijianList = res
					})
				}
			},
			changePicker(index) {
				this.current = index
			},
			addSc() {
				const scList = uni.getStorageSync('scList') || [];
				uni.setStorageSync('scList', [...new Set([...scList, this.videoItem])]);
				uni.showToast({
					title: '收藏成功',
					icon: 'none'
				})
				this.sc = true
			},
			remSc() {
				const scList = uni.getStorageSync('scList') || [];
				for (var i = 0; i < scList.length; i++) {
					const item = scList[i]
					if (item.vod_id == this.videoItem.vod_id && item.typeName == this.videoItem.typeName) {
						this.sc = false
						scList.splice(i, 1)
						// 历史数据缓存
						uni.showToast({
							title: '取消收藏',
							icon: 'none'
						})
						uni.setStorageSync('scList', [...new Set([...scList])]);
					}
				}
			},
			setVideoItem(item) {
				console.log(item);
				this.current = 0
				if (item.typeName == '精品推荐') {
					getVideoItem(item.vod_id).then(res => {
						console.log(res);
						uni.setStorage({
							key: 'videoItemAv',
							data: res,
							success: () => {
								this.getVideoInit()
							}
						});
					})
				} else {
					uni.setStorage({
						key: 'videoItemAv',
						data: item,
						success: () => {
							this.getVideoInit()
						}
					});
				}
			},
			leftClick() {
				uni.navigateBack({
					delta: this.delta
				})
			},
			getVideoItem(item, index) {
				this.show2 = false
				this.jiIndex = index
				this.item = item
				// 缓存
				uni.setStorageSync('bfItem' + this.videoItem.vod_id, {
					index: this.jiIndex,
					current: this.current
				});
				const videoList = {
					url: this.item.url,
					title: this.videoItem.vod_name + item.title,
					poster: this.videoItem.vod_pic
				}
				uni.setStorage({
					key: 'videoList',
					data: videoList,
					success() {
						uni.navigateTo({
							url: '/pages/video/videoItem'
						})
					}
				});
			}
		}
	}
</script>


<style scoped lang="scss">
	.content {
		width: 100vw;
		height: 100vh;

		.main {

			.avMain {
				padding: 40rpx;
				position: relative;

				.tools {
					position: absolute;
					right: 24rpx;
					top: 58rpx;
					color: #C1C1C1;
					font-size: 24rpx;
					display: flex;
					align-items: center;

					image {
						margin-right: 16rpx;
						width: 40rpx;
						height: 42rpx;
					}
				}

				.img {
					width: 416rpx;
					height: 278rpx;
					background: #FFFFFF;
					border-radius: 24rpx;
					border: 2rpx solid #707070;
					margin: 0 auto;
					display: block;
				}

				.avtitle {
					margin-top: 24rpx;
					line-height: 1.5;
					font-size: 36rpx;
					font-weight: bold;
					text-align: center;
				}

				.ziyuan {
					padding: 10rpx 0;
					display: flex;
					color: #A4A4A4;
					font-size: 26rpx;
					line-height: 1.7;
					align-items: center;
					justify-content: center;

					.fg {
						padding: 0 12rpx;
					}
				}
			}

			.top {
				display: grid;
				grid-template-columns: 278rpx auto;
				padding: 40rpx;
				grid-gap: 40rpx;
				position: relative;

				.tools {
					position: absolute;
					right: 24rpx;
					top: 48rpx;
					color: #C1C1C1;
					font-size: 24rpx;
					display: flex;
					align-items: center;

					image {
						margin-right: 16rpx;
						width: 40rpx;
						height: 42rpx;
					}
				}


				.img {
					width: 278rpx;
					height: 416rpx;
					background: #FFFFFF;
					border-radius: 24rpx;
					border: 2rpx solid #707070;
				}

				.right {
					.title {
						line-height: 2;
						font-size: 36rpx;
						font-weight: bold;
					}

					.ziyuan {
						padding: 10rpx 0;
						display: flex;
						color: #A4A4A4;
						font-size: 26rpx;
						line-height: 1.7;

						.fg {
							padding: 0 12rpx;
						}
					}

					>.grid {
						padding: 10rpx 0;
						display: grid;
						font-size: 26rpx;
						grid-template-columns: 70rpx auto;
						line-height: 1.7;

						.text {
							color: #A4A4A4;
						}

						.con {
							width: 100%;
							display: -webkit-box;
							word-break: break-all;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 3; //需要显示的行数
							overflow: hidden;
							text-overflow: ellipsis;
						}
					}
				}
			}

			.read-more {
				padding: 0 40rpx;
				font-size: 24rpx;
			}

			.titleBox {
				display: flex;
				justify-content: space-between;
				padding: 24rpx;

				.textZ {
					position: relative;
					font-size: 30rpx;
					color: #333;
					font-weight: bold;

					&::after {
						position: absolute;
						content: '';
						left: 0;
						bottom: 0;
						width: 42rpx;
						height: 10rpx;
						background: linear-gradient(224deg, #07F2A9 0%, #0EC587 100%);
						border-radius: 6rpx;
						opacity: 0.27;
						border: 2rpx solid rgba(0, 0, 0, 0);
					}
				}

				.text {
					padding: 0 24rpx;
					display: flex;
					color: #A4A4A4;
					font-size: 28rpx;
					align-items: center;
				}
			}


			.mainBox {
				position: relative;
				overflow: hidden;
				display: grid;
				grid-template-columns: 1fr 1fr 1fr;
				grid-gap: 24rpx;
				padding: 0 24rpx;
				width: 100%;
				box-sizing: border-box;

				.item {
					width: 100%;
					border-radius: 16rpx;
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
						background-image: url('/static/bgImage.png');
						background-size: 100% 100%;
					}

					.mainBox_title {
						font-size: 28rpx;
						width: 218rpx;
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

				.item2 {
					width: 333rpx;

					.image {
						height: 190rpx;
					}
				}
			}

			.mainBox2 {
				position: relative;
				overflow: hidden;
				display: grid;
				grid-template-columns: 1fr 1fr;
				grid-gap: 24rpx;
				padding: 0 24rpx;
				width: 100%;
				box-sizing: border-box;

				.item {
					width: 100%;
					border-radius: 16rpx;
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
						height: 220rpx;
						border-radius: 8rpx;
						background-image: url('/static/bgImage.png');
						background-size: 100% 100%;
					}

					.mainBox_title {
						font-size: 28rpx;
						width: 340rpx;
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

				.item2 {
					width: 333rpx;

					.image {
						height: 190rpx;
					}
				}
			}

			.navss {
				padding-top: 20rpx;
				padding-left: 20rpx;

				.scroll {
					white-space: nowrap;
					width: 100%;

					.item {
						width: 148rpx;
						height: 76rpx;
						background: rgba(248, 248, 248, 1);
						color: rgba(164, 164, 164, 1);
						border-radius: 12rpx;
						line-height: 76rpx;
						text-align: center;
						font-size: 26rpx;
						display: inline-block;
						margin-right: 20rpx;
					}

					.active {
						background: rgba(41, 201, 120, 0.09);
						border: 2rpx solid #29C978;
						color: #29C978;
					}
				}
			}


			.navs {
				display: grid;
				grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
				grid-gap: 26rpx;
				padding: 24rpx;
				box-sizing: border-box;
			}

			.scrollX {
				white-space: nowrap;
				width: 100%;
				padding: 0 24rpx;
				box-sizing: border-box;

				.actives {
					.item {
						width: 180rpx;
						height: 80rpx;
						background-color: rgba(239, 239, 239, 1);
						border-radius: 8rpx;
						font-size: 28rpx;
						text-align: center;
						line-height: 80rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						padding: 0 12rpx;
						display: inline-block;
						margin-right: 20rpx;
					}

					.active {
						background-color: rgba(41, 201, 120, 0.09);
						color: rgba(41, 201, 120, 1);
						border: 2rpx solid rgba(41, 201, 120, 1);
					}
				}

				.actives2 {
					.item {
						width: 80rpx;
					}
				}

			}
		}

		.video {
			/* #ifdef H5 */
			position: fixed;
			top: 88rpx;
			padding-top: var(--status-bar-height);
			width: 100vw;
			height: 390rpx;
			/* #endif */
		}


		.box {
			padding-bottom: 120rpx;
			padding: 24rpx;
			font-size: 28rpx;
			margin-bottom: 100rpx;

			.info {
				display: flex;

				.img {
					width: 260rpx;
					height: 360rpx;
					margin-right: 30rpx;
					background: #FFFFFF;
					border-radius: 12rpx;
				}
			}

			.starName {
				display: grid;
				grid-template-columns: 100rpx auto;
				font-size: 30rpx;
				color: #333;
				margin: 8rpx 0;
				color: #999;

				.scroll {
					width: 600rpx;
					white-space: nowrap;
				}

				.text {
					padding-left: 10rpx;
					font-size: 30rpx;
					display: inline-block;
					color: #333;
				}
			}

		}


		.scrollY {
			padding-bottom: 100rpx;
			height: 400rpx;

			.actives {
				display: grid;
				grid-template-columns: 1fr 1fr 1fr 1fr;
				grid-gap: 26rpx;
				padding: 24rpx;
				box-sizing: border-box;

				.item {
					width: 100%;
					height: 100%;
					background-color: rgba(239, 239, 239, 1);
					border-radius: 8rpx;
					font-size: 28rpx;
					text-align: center;
					line-height: 80rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					padding: 0 12rpx;
					box-sizing: border-box;
				}

				.active {
					background-color: rgba(41, 201, 120, 0.09);
					color: rgba(41, 201, 120, 1);
					border: 2rpx solid rgba(41, 201, 120, 1);
				}
			}

			.actives2 {
				grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
			}

		}

	}
</style>