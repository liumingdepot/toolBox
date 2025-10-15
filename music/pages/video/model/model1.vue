<template>
  <view class="content">
    <view class="search">
      <wd-input color="#333" v-model="state.searchValue" placeholder="想搜什么就搜吧~" no-border>
        <template #prefix>
          <image slot="prefix" src="/static/video/icons.png" class="icon"></image>
        </template>
        <template #suffix>
          <view slot="suffix" class="btn" @tap="searchVideos">搜索</view>
        </template>
      </wd-input>
    </view>
    <z-paging ref="paging" v-model="state.videoList" @query="initVideoList" auto-show-back-to-top :fixed="false">
      <!-- 视频详情 -->
      <view class="mainBox">
        <view v-for="(item,index) in state.videoList" class="item" @tap="goVideo(item)">
          <image :src="item.vod_pic" type="image/webp" webp class="image" mode="aspectFill"></image>
          <view class="tag">{{ item.type_name }}</view>
          <view class="title">{{ item.vod_name }}</view>
          <view class="msg" style="margin-top: 8rpx;">{{ item.vod_remarks }}</view>
        </view>
      </view>
    </z-paging>
  </view>
</template>

<script setup>
import {reactive, ref, onMounted} from 'vue'
import {searchVideo} from "@/pages/video/utils/server";

const emit = defineEmits(['playList'])
const paging = ref(null)
const state = reactive({
  searchValue: '花千骨',
  videoList: [],
})

function searchVideos() {
  paging.value.reload();
}

function initVideoList(num) {
  const videoTypeList = [
    {name: '量子', url: 'http://cj.lziapi.com/api.php/provide/vod/'},
    {name: '新浪', url: 'http://api.xinlangapi.com/xinlangapi.php/provide/vod/'},
    {name: '成人', url: 'http://api.11bat.com/api.php/provide/vod/'},
    {name: '成人', url: 'https://lbapi9.com/api.php/provide/vod/'},
    {name: '成人', url: 'http://fhapi9.com/api.php/provide/vod/'},
  ]
  for (const item of videoTypeList) {
    searchVideo(state.searchValue, num, item.url).then(activeVideos => {
      if(activeVideos.length > 0){
        paging.value.complete([...state.videoList, ...activeVideos]);
      }else{
        paging.value.complete(state.videoList);
      }
    })
  }
}

function goVideo(item) {
  emit('playList', item)
}
</script>


<style scoped lang="scss">
.content {
  height: calc(100vh - var(--status-bar-height) - var(--window-bottom) - 250rpx);

  .search {
    position: sticky;
    z-index: 999;
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

    :deep(.wd-input) {
      background: transparent;

      .wd-input__value {
        display: grid;
        width: 654rpx;
        grid-template-columns: 60rpx auto 140rpx;
      }
    }

    .icon {
      width: 30rpx;
      height: 30rpx;
    }

    .input {
      width: 100%;
      font-size: 28rpx;
      color: #000;
    }

    .btn {
      width: 100%;
      height: 64rpx;
      background: linear-gradient(180deg, #41CB53 0%, #1CC88E 100%);
      border-radius: 40rpx;
      color: #fff;
      line-height: 64rpx;
      text-align: center;
      font-size: 26rpx;
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
