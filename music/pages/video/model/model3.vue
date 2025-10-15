<template>
  <view class="main">
    <z-paging ref="paging" v-model="state.activeVideos" @query="initVideo" auto-show-back-to-top :fixed="false">
      <!-- 视频详情 -->
      <view class="mainBox">
        <view v-for="(item,index) in state.activeVideos" class="item" @tap="goVideo(item)">
          <image :src="item.vod_pic" type="image/webp" webp class="image" mode="aspectFill"></image>
          <view class="tag">{{item.type_name}}</view>
          <view class="title">{{item.vod_name}}</view>
          <view class="msg" style="margin-top: 8rpx;">{{ item.vod_remarks }}</view>
        </view>
      </view>
    </z-paging>
  </view>
</template>

<script setup>
import { videoList } from '../utils/server'
import {reactive, ref} from 'vue'

const emit = defineEmits(['playList'])
const paging = ref(null)

const state = reactive({
  from: {
    title: '',
    videoTypeId: ''
  },
  list: [],
  activeVideos: []
})

function initVideo(pagenum) {
  videoList(pagenum).then(res => {
    console.log(res);
    paging.value.complete(res);
  }).catch(res => {
    paging.value.complete(false);
  })
}

function goVideo(item) {
  emit('playList',item)
}
</script>

<style lang="scss" scoped>
.main {
  height: calc(100vh - var(--status-bar-height) - var(--window-bottom) - 110rpx);

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
