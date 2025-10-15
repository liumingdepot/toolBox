<template>
	<view class="content">
		<u-navbar title="搜索" bgColor="#d8f2d0" @leftClick="leftClick" placeholder ref="navBar"></u-navbar>
		<view class="search">
			<u-input color="#333" v-model="searchValue" @clear="clear" clearable placeholder="想搜什么就搜吧~" border="none">
				<image slot="prefix" src="/static/home/icons.png" class="icon"></image>
				<view slot="suffix" class="btn" @tap="searchVideo">搜索</view>
			</u-input>
		</view>

		<view v-if="showVideo" class="box">
			<view class="leftBox" :style="{height:height+'px'}">
				<scroll-view class="scrollY" :scroll-y="true" :style="{height:height+'px'}">
					<view class="left_tilte">搜索选择</view>
					<view class="item" v-for="(item, index) in videoTypeList" :key="index"
						@click="checkboxChange(item)">
						<image v-if="videoType.includes(item.name)" src="/static/home/active.png" mode="" class="icon">
						</image>
						<image v-else src="/static/home/no.png" mode="" class="icon"></image>
						<view>{{item.name}}</view>
					</view>
				</scroll-view>
			</view>
			<!-- 结果 -->
			<scroll-view class="scrollY" :scroll-y="true" :style="{height:height+'px'}">
				<!-- 视频详情 -->
				<view class="mainBox">
					<view v-for="(item,index) in videoList" class="item" @tap="goVideo(item)">
						<image :src="item.vod_pic" type="image/webp" webp class="image" mode="aspectFill"></image>
						<view class="tag">{{item.type_name}}</view>
						<view class="title">{{item.vod_name}}</view>
						<rich-text class="msg" style="margin-top: 8rpx;" :nodes="item.vod_remarks"></rich-text>
					</view>
				</view>
			</scroll-view>
			<view class="fy">
				<u-icon name="arrow-left" v-if="num>1" @tap="changeNum(num - 1)" class="pg"></u-icon>
				<u-icon name="arrow-right" @tap="changeNum(num + 1)" class="pg"></u-icon>
			</view>
		</view>

		<!-- 历史 -->
		<view v-else>
			<view @tap="showClose = !showClose" class="bianji">
				<view style="font-size: 30rpx;font-weight: bold;color: #333;">历史搜索</view>
				<view>{{showClose?'确定':'编辑'}}</view>
			</view>
			<view class="lishi">
				<u-tag v-for="item in lishiList" :key="item" :closable="showClose" :show="!!item"
					@tap="lishiVideo(item)" @close="closeItem(item)" borderColor="#2bc976" bgColor="#2bc976"
					color="#fff" icon="tags-fill" :text="item" style="margin-right: 16rpx;margin-top: 16rpx;"></u-tag>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		videoTypeList,
		searchVideo,
		getVideoList
	} from '@/common/config.js'

	export default {
		data() {
			return {
				searchValue: '',
				videoList: [],
				num: 1,
				videoType: [],
				videoTypeList,
				showVideo: false,
				showClose: false,
				lishiList: [],
				height: 800,
			}
		},
		onLoad(option) {
			this.getLishi()
			this.getVideoTpye()
			if (option.title) {
				this.searchValue = option.title
				this.searchVideo()
			}
		},
		onReady() {
			const info = uni.getWindowInfo()
			const top = parseInt(this.$refs.navBar.height)
			this.height = info.windowHeight - info.statusBarHeight - top - uni.upx2px(220)
		},
		onHide() {
			uni.hideLoading()
		},
		methods: {
			getVideoTpye() {
				const videoType = uni.getStorageSync('videoType');
				if (videoType && videoType.length) {
					this.videoType = videoType
				} else {
					const videoType = ['量子', '新浪']
					uni.setStorageSync('videoType', videoType);
					this.videoType = videoType
				}
			},
			checkboxChange(e) {
				const videoType = uni.getStorageSync('videoType') || [];
				const index = videoType.indexOf(e.name)
				if (index == -1) {
					videoType.push(e.name)
				} else {
					videoType.splice(index, 1)
				}
				uni.setStorageSync('videoType', videoType);
				this.videoType = videoType
			},
			getLishi() {
				this.videoList = []
				this.lishiList = uni.getStorageSync('lishiList') || [];
			},
			closeItem(item) {
				const index = this.lishiList.indexOf(item)
				if (index != -1) {
					this.lishiList.splice(index, 1)
					// 历史数据缓存
					uni.setStorageSync('lishiList', [...new Set([...this.lishiList])]);
				}
			},
			clear() {
				this.showVideo = false
			},
			lishiVideo(value) {
				this.searchValue = value
				this.searchVideo()
			},
			addLishi() {
				this.lishiList.push(this.searchValue)
				uni.setStorageSync('lishiList', [...new Set([...this.lishiList])]);
				this.getLishi()
			},
			leftClick() {
				uni.switchTab({
					url: '/pages/home/index'
				})
			},
			changeNum(num) {
				this.num = num
				this.showVideo = true
				this.videoList = []
				this.getVideo()
			},
			searchVideo() {
				this.showVideo = true
				this.videoList = []
				this.num = 1
				this.getVideo()
			},
			async getVideo() {
				if (this.searchValue) {
					this.addLishi()
					const list = this.videoType.map(e => videoTypeList.find(v => v.name == e)).filter(Boolean)
					for (let i = 0; i < list.length; i++) {
						const videoType = list[i]
						uni.showLoading({
							mask: true,
							title: '正在爬虫' + videoType.name,
						})
						videoType.src = videoType.url + `?ac=videolist&wd=${this.searchValue}&pg=${this.num}`
						try {
							const res = await searchVideo(videoType)
							for (let item of res.list) {
								const temp = this.videoList.find(e => e.vod_en == item.vod_en && e.vod_name == item
									.vod_name)
								if (temp) {
									temp.vod_play_url_video = [
										...temp.vod_play_url_video,
										...getVideoList(item, videoType.name)
									]
									temp.typeUrl = [
										...temp.typeUrl,
										{
											url:videoType.url,
											type_id:item.type_id
										}
									]
								} else {
									item.vod_play_url_video = getVideoList(item, videoType.name)
									item.typeUrl = [{
										url:videoType.url,
										type_id:item.type_id,
										name:videoType.name
									}]
									this.videoList.push(item)
								}
								this.videoList.sort((a, b) => {
									if (a.vod_name == this.searchValue) {
										return -1
									}
									if (b.vod_name == this.searchValue) {
										return 1
									}
								})
							}
						} catch (err) {
							console.log(err);
						}
					}
					uni.hideLoading()
				} else {
					uni.hideLoading()
				}
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



<style scoped lang="scss">
	.content {
		.fy {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 750rpx;
			padding: 0 24rpx;
			box-sizing: border-box;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			background: #1CC88E;

			.pg {
				padding: 24rpx;
				padding-left: 48rpx;
			}
		}

		.search {
			position: sticky;
			z-index: 999;
			/* #ifndef H5 */
			padding-top: var(--window-top);
			/* #endif */
			top: 0;
			width: 694rpx;
			height: 80rpx;
			border-radius: 40rpx;
			margin: 24rpx auto;
			display: flex;
			align-items: center;
			padding: 0 24rpx;
			box-sizing: border-box;
			box-shadow: 0px 24rpx 40rpx 2rpx rgba(130, 245, 156, 0.18);
			border: 2rpx solid #3ABC56;
			background-color: rgba(255, 255, 255, 0.5);

			.icon {
				width: 30rpx;
				height: 30rpx;
			}

			.input {
				font-size: 28rpx;
				color: #000;
			}

			.btn {
				width: 140rpx;
				height: 64rpx;
				background: linear-gradient(180deg, #41CB53 0%, #1CC88E 100%);
				border-radius: 40rpx;
				color: #fff;
				line-height: 64rpx;
				text-align: center;
				font-size: 26rpx;
			}
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

		.lishi {
			width: 100vw;
			box-sizing: border-box;
			padding: 0 24rpx;
			display: flex;
			align-items: center;
			flex-wrap: wrap;
		}

		.box {
			margin-top: 20rpx;
			display: grid;
			grid-template-columns: 214rpx auto;
			padding: 0 26rpx;
			grid-gap: 28rpx;

			.leftBox {
				width: 214rpx;
				height: 100%;
				background: #FFFFFF;
				border-radius: 16rpx;

				.scrollY {

					.left_tilte {
						width: 214rpx;
						height: 84rpx;
						font-size: 26rpx;
						line-height: 84rpx;
						text-align: center;
						color: #999999;
					}

					.item {
						width: 214rpx;
						height: 84rpx;
						font-size: 26rpx;
						color: #333333;
						display: grid;
						grid-template-columns: 60rpx auto;
						align-items: center;
						padding: 0 30rpx;
						box-sizing: border-box;

						.icon {
							width: 32rpx;
							height: 32rpx;
						}
					}
				}
			}

			.scrollY {
				.mainBox {
					overflow: hidden;
					display: grid;
					grid-template-columns: 214rpx 214rpx;
					grid-gap: 26rpx;
					overflow: hidden;
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

						.image {
							width: 214rpx;
							height: 306rpx;
							border-radius: 16rpx;
							background-image: url('/static/bgImage.gif');
							background-repeat: no-repeat;
							background-size: 100%;
							background-position: center;
							background-color: #000;
						}

						.title {
							font-size: 26rpx;
							width: 240rpx;
							display: -webkit-box;
							word-break: break-all;
							-webkit-box-orient: vertical;
							-webkit-line-clamp: 2; //需要显示的行数
							overflow: hidden;
							text-overflow: ellipsis;
							line-height: 1.5;
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
		}
	}
</style>
