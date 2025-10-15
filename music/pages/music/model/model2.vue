<template>
  <view class="model2">
    <view class="disname">推荐</view>
    <z-paging ref="paging" v-model="state.dataList" @query="queryList" :fixed="false">
      <view class="box">
        <view class="item" v-for="(item,index) in state.dataList" :key="index" @tap="gotoItem(item)">
          <image :src="item.img" class="img"></image>
          <view class="name">{{ item.name }}</view>
        </view>
      </view>
    </z-paging>
  </view>
</template>

<script setup>
import {reactive, ref} from 'vue'
import {musicTjListItem, musicTjList} from "../utils/server";

const emit = defineEmits(['playList'])
const paging = ref(null)

const state = reactive({
  dataList: []
})

function queryList() {
  if (uni.getStorageSync('musicTjListStorage')) {
    paging.value.complete(uni.getStorageSync('musicTjListStorage'));
  }
  musicTjList().then(res => {
    uni.setStorageSync('musicTjListStorage', res.data.data);
    paging.value.complete(res.data.data);
  })
}

function gotoItem(item) {
  musicTjListItem({
    id: item.id
  }).then(res => {
    emit('playList', {
      index: 0,
      list: res.data.musiclist.map(e=>{
        return{
          NAME:e.name,
          ARTIST:e.artist,
          DC_TARGETID:e.rid,
          web_albumpic_short:e.img
        }
      })
    })
  })
}
</script>

<style lang="scss">
.model2 {
  padding: 0 30rpx;
  height: calc(100vh - var(--status-bar-height) - var(--window-bottom) - 110rpx);
  // 隐藏滚动条
  ::-webkit-scrollbar {
    display: none;
  }
  .disname {
    font-size: 46rpx;
    margin-bottom: 20rpx;
    color: #333;
    font-weight: bolder;
  }

  .box {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10rpx;

    .item {
      width: 100%;
      border-radius: 20rpx;
      overflow: hidden;
      font-size: 28rpx;
      background: rgba(255, 255, 255, 0.5);

      .img {
        width: 100%;
        height: 220rpx;
      }

      .name{
        // 两行
        width: 100%;
        padding: 4rpx 14rpx;
        font-size: 26rpx;
        box-sizing: border-box;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>