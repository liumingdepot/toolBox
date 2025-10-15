<template>
  <view class="contentIndex">
    <!-- 头部分类 -->
    <view>
      <view class="scrollView">
        <scroll-view scroll-x class="scroll" :show-scrollbar="false">
          <view class="item" v-for="(item,index) in navs" :key="index" @tap="changeType(item)"
                :class="state.from.type == item.type_id  ? 'active':''">
            {{ item.type_name }}
          </view>
        </scroll-view>
      </view>
      <view class="scrollView">
        <scroll-view scroll-x class="scroll" :show-scrollbar="false">
          <view class="item" v-for="(item,index) in state.navs1" :key="index" @tap="changeType1(item)"
                :class="state.from.type1 == item.type_id  ? 'active':''">
            {{ item.type_name }}
          </view>
        </scroll-view>
      </view>
    </view>
    <z-paging ref="paging" v-model="state.activeVideos" @query="initVideo" auto-show-back-to-top :fixed="false">
      <!-- 视频详情 -->
      <view class="mainBox">
        <view v-for="(item,index) in state.activeVideos" class="item" @tap="goVideo(item)">
          <image :src="item.vod_pic" type="image/webp" webp class="image" mode="aspectFill"></image>
          <view class="title">{{ item.vod_name }}</view>
          <view class="msg" style="margin-top: 8rpx;">{{ item.vod_remarks }}</view>
        </view>
      </view>
    </z-paging>
  </view>
</template>

<script setup>
import {navs} from '../utils/navs.js'
import {getTuijianVideo} from '../utils/server'
import {reactive, ref} from 'vue'

const emit = defineEmits(['playList'])
const paging = ref(null)
const state = reactive({
  from: {
    pagenum: 0,
    type: 2,
    type1: 13,
    type_id: 13
  },
  navs1: navs[0].children,
  activeVideos: []
})

function changeType(item) {
  state.from.type = item.type_id
  state.from.type_id = item.children[0].type_id
  state.from.type1 = item.children[0].type_id
  state.navs1 = item.children
  paging.value.reload();
}

function changeType1(item) {
  state.from.type1 = item.type_id
  state.from.type_id = item.type_id
  paging.value.reload();
}

function changepxType(type) {
  state.from.pxType = type
  paging.value.reload();
}

function initVideo(pagenum) {
  state.from.pagenum = pagenum
  getTuijianVideo(state.from).then(activeVideos => {
    paging.value.complete(activeVideos);
    setTimeout(() => {
      uni.hideLoading()
    }, 500)
  }).catch(res => {
    paging.value.complete(false);
  })
}

function goVideo(item) {
  emit('playList',item)
}
</script>


<style scoped lang="scss">
.contentIndex {
  padding-bottom: 50rpx;
  height: calc(100vh - var(--status-bar-height) - var(--window-bottom) - 250rpx);

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
