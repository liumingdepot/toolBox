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
					<view class="item" v-for="(item, index) in avList" :key="index" @click="checkboxChange(item)">
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
						<view class="tag">{{item.typeName}}资源</view>
						<view class="title">{{item.vod_name}}</view>
						<rich-text class="msg" style="margin-top: 8rpx;" :nodes="`${item.vod_remarks}`"></rich-text>
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
				<u-tag v-for="item in avLishiList" :key="item" :closable="showClose" :show="!!item"
					@tap="lishiVideo(item)" @close="closeItem(item)" borderColor="#2bc976" bgColor="#2bc976"
					color="#fff" icon="tags-fill" :text="item" style="margin-right: 16rpx;margin-top: 16rpx;"></u-tag>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		avList,
		searchVideo,
		getTuijianVideo,
		getVideoItem
	} from './config.js'

	export default {
		data() {
			return {
				searchValue: '',
				videoList: [],
				num: 1,
				videoType: [],
				avList,
				showVideo: false,
				showClose: false,
				height: 800,
				avLishiList: []
			}
		},
		onLoad(option) {
			if (option.title) {
				this.lishiVideo(option.title)
			}
			this.getVideoTpye()
		},
		onReady() {
			this.getLishi()

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
					const videoType = ['推荐']
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
				this.avLishiList = uni.getStorageSync('avLishiList') || [];
			},
			closeItem(item) {
				const index = this.avLishiList.indexOf(item)
				if (index != -1) {
					this.avLishiList.splice(index, 1)
					// 历史数据缓存
					uni.setStorageSync('avLishiList', [...new Set([...this.avLishiList])]);
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
				this.avLishiList.push(this.searchValue)
				uni.setStorageSync('avLishiList', [...new Set([...this.avLishiList])]);
				this.getLishi()
			},
			leftClick() {
				uni.navigateBack()
			},
			changeNum(num) {
				uni.showLoading({
					mask: true,
					title: '正在爬虫中...',
				})
				this.num = num
				this.showVideo = true
				this.videoList = []
				this.getVideo()
			},
			searchVideo() {
				uni.showLoading({
					mask: true,
					title: '正在爬虫中...',
				})
				this.showVideo = true
				this.videoList = []
				this.num = 1
				this.getVideo()
			},
			getVideo() {
				if (this.searchValue) {
					this.addLishi()
					setTimeout(() => {
						uni.hideLoading()
					}, 2000)
					const list = this.videoType.map(e => avList.find(v => v.name == e)).filter(Boolean)
					for (var i = 0; i < list.length; i++) {
						const src = list[i].url
						const name = list[i].name
						if (name == '推荐') {
							getTuijianVideo({
								pagenum: this.num,
								type: this.searchValue,
								type_id: this.searchValue,
							}).then(res => {
								console.log(res);
								this.videoList.push(...res)
							})
						} else {
							const url = `${src}?ac=videolist&wd=${this.searchValue}&pg=${this.num}`
							searchVideo(url, name, src).then(res => {
								this.videoList.push(...res)
								uni.hideLoading()
							})
						}
					}
				} else {
					uni.hideLoading()
				}
			},
			goVideo(item) {
				console.log(item);
				if (item.typeName == "推荐") {
					getVideoItem(item.vod_id).then(res => {
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
				} else {
					uni.setStorage({
						key: 'videoItemAv',
						data: item,
						success() {
							uni.navigateTo({
								url: '/pages/avVideo/video'
							})
						}
					});
				}
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
					grid-template-columns: 460rpx;
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
							width: 460rpx;
							height: 260rpx;
							border-radius: 16rpx;
							background-image: url('/static/bgImage.gif');
							background-repeat: no-repeat;
							background-size: 100%;
							background-position: center;
							background-color: #000;
						}

						.title {
							font-size: 26rpx;
							width: 460rpx;
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
		}
	}
</style>