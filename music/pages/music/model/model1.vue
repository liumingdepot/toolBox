<template>
  <view class="model1">
    <view class="search">
      <wd-input color="#333" v-model="state.searchValue" placeholder="请输入歌曲名~" no-border>
        <template #prefix>
          <image slot="prefix" src="/static/video/icons.png" class="icon"></image>
        </template>
        <template #suffix>
          <view slot="suffix" class="btn" @tap="queryLists">搜索</view>
        </template>
      </wd-input>
    </view>
    <view class="list">
      <z-paging ref="paging" v-model="state.dataList" @query="queryList" :fixed="false">
        <view class="item" v-for="(item,index) in state.dataList" :key="index" @tap="gotoPlay(item)">
          <view>
            <view>{{ item.SONGNAME }}</view>
            <view class="ARTIST">{{ item.ARTIST }} · {{ item.ALBUM }}</view>
          </view>
          <image src="/static/music/play.png" class="play"></image>
        </view>
      </z-paging>
    </view>
  </view>
</template>

<script setup>
import {reactive, ref} from 'vue'
import {musicList} from "../utils/server";

const emit = defineEmits(['playList'])
const paging = ref(null)

const state = reactive({
  searchValue: '周杰伦',
  dataList: []
})

function queryLists(){
  paging.value.reload()
}

function queryList(num) {
  musicList({
    key: state.searchValue,
    num: num - 1
  }).then(res => {
    paging.value.complete(res.abslist);
  })
}

function gotoPlay(item) {
  const index = state.dataList.findIndex(e=>e.DC_TARGETID==item.DC_TARGETID)
  emit('playList', {
    index,
    list: state.dataList.map(e=>{
      return{
        ...e,
        web_albumpic_short:'https://img2.kuwo.cn/star/albumcover/' + e.web_albumpic_short
      }
    })
  })
}
</script>

<style lang="scss">
.model1 {
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
    background: rgba(255, 255, 255, 0.5);

    :deep(.wd-input){
      background:transparent;
      .wd-input__value{
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

  .list {
    padding: 30rpx;
    height: calc(100vh - var(--status-bar-height) - var(--window-bottom) - 350rpx);
    // 隐藏滚动条
    ::-webkit-scrollbar {
      display: none;
    }

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
