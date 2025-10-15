<template>
	<z-paging ref="paging" v-model="dataList" @query="changeSearch" auto-show-back-to-top>
		<view slot="top">
			<input type="text" class="search" placeholder="请输入歌曲名" v-model="text" @input="changeSearch">
		</view>
		<view class="music">
			<!-- 视频详情 -->
			<view class="list">
				<view class="item" v-for="(item,index) in dataList" :key="index" @click="gotoPlay(item)">
					<view>
						<view>{{ item.SONGNAME }}</view>
						<view class="ARTIST">{{ item.ARTIST }} · {{ item.ALBUM }}</view>
					</view>
					<image src="/static/play.png" class="play"></image>
				</view>
			</view>
		</view>
	</z-paging>
</template>

<script>
	import { videoList } from "@/pages/music/server";
	import zPaging from '@/uni_modules/z-paging/components/z-paging/z-paging.vue'
	export default {
		components: {
			zPaging
		},
		data() {
			return {
				text: '周杰伦',
				dataList: []
			}
		},
		methods: {
			changeSearch(num) {
				videoList({
					key: this.text,
					num: num - 1
				}).then(res => {
					this.$refs.paging.complete(res.abslist);
				}).catch(res => {
					this.$refs.paging.complete([]);
				})
			},
			gotoPlay(item) {
				uni.setStorageSync('music', item)
				uni.navigateTo({
				  url: '/pages/music/play'
				})
			}
		}
	}
</script>


<style>
	page{
		background-image: url('/static/music.png');
	}
</style>

<style lang="scss">
	.search {
		margin: 0 auto;
		margin-top: 30px;
		padding-top: var(--status-bar-height);
		width: 680rpx;
		box-sizing: border-box;
		height: 64rpx;
		border-radius: 40rpx;
		padding: 0 20rpx;
		background: rgba(255, 255, 255, 0.5);
	}

	.music {
		padding: 40rpx;

		.list {

			.item {
				width: 100%;
				box-sizing: border-box;
				height: 116rpx;
				border-radius: 16rpx;
				background: rgba(255, 255, 255, 0);
				backdrop-filter: blur(40rpx);
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 32rpx;

				.ARTIST {
					font-size: 24rpx;
					color: rgba(118, 119, 122, 1);
				}

				.play {
					width: 36rpx;
					height: 36rpx;
				}
			}
		}
	}
</style>