<template>
  <wd-action-sheet v-model="model">
    <view class="title">播放列表</view>
    <view class="list">
      <view
          class="item"
          :class="{active:playIndex == index}"
          v-for="(item,index) in playListData"
          :key="index"
          @tap="emit('playItem',{item,index})">
        <view>
          <view>{{ item.NAME }}</view>
          <view class="ARTIST">{{ item.ARTIST }}</view>
        </view>
        <image src="/static/music/play.png" class="play"></image>
      </view>
    </view>
  </wd-action-sheet>
</template>

<script setup>
defineProps(['playListData','playIndex'])
const model = defineModel()

const emit = defineEmits(['playItem'])
</script>

<style scoped lang="scss">
.title{
  font-size: 36rpx;
  text-align: center;
  margin-bottom: 20rpx;
  color: #333;
  font-weight: bolder;
  margin-top: 30rpx;
}
.list {
  padding: 30rpx;
  overflow: auto;
  height: 75vh;

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

  .active {
    color: #13eaa3;
  }
}
</style>