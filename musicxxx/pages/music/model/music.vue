<template>
  <view>
    <!-- 播放列表 -->
    <MusicList
        v-model="state.show"
        :playIndex="state.playIndex"
        :playListData="state.playListData"
        @playItem="playItemFunc"
    />
    <!-- 播放控件 -->
    <MusicGc
        :progress="state.progress"
        :playDuration="state.playDuration"
        :totalDuration="state.totalDuration"
        :playItem="state.playItem"
        v-model="state.show2"
    />
    <!-- 底部播放栏 -->
    <view class="play-bar" v-show="!state.show && !state.show2" @tap="changeShow2">
      <image :src="state.playItem.web_albumpic_short" class="image" :class="{rotate:state.playState}"/>
      <view class="music-info">
        <view class="music-name">{{ state.playItem.NAME }}</view>
        <view class="music-singer">{{ state.playItem.ARTIST }}</view>
      </view>
      <view class="bars">
        <image src="/static/music/i2.png" class="i1" @tap.stop="changeIndex(1)"></image>
        <image src="/static/music/ii.png" class="ii" v-if="!state.playState" @tap.stop="changePlayState"></image>
        <image src="/static/music/iis.png" class="ii" v-else @tap.stop="changePlayState"></image>
        <image src="/static/music/i2.png" class="i2" @tap.stop="changeIndex(2)"></image>
        <image src="/static/music/i1.png" class="i3" @tap.stop="changeShow"></image>
      </view>
    </view>
  </view>
</template>

<script setup>
import {reactive} from 'vue'
import {musicItem} from "@/pages/music/utils/server";
import MusicGc  from "./components/musicGc.vue";
import MusicList  from "./components/musicList.vue";

let innerAudioContext = null;
/* #ifdef H5  */
innerAudioContext = uni.createInnerAudioContext();
/* #endif */
/* #ifdef APP-PLUS */
innerAudioContext = uni.getBackgroundAudioManager();
/* #endif */
innerAudioContext.autoplay = false;

const props = defineProps(['playList']);

const state = reactive({
  show: false,
  playState: false,
  playIndex: 0,
  playListData: [],
  playItem: {},
  progress:0,
  playDuration:0,
  totalDuration:0
});

function initPlayList(e, op) {
  state.show = op.show;
  state.playListData = e.list
  if (op.play) {
    playItem(e.list[e.index], e.index)
  }
}

function changePlayState() {
  state.playState = !state.playState
  if (state.playState) {
    innerAudioContext.play();
  } else {
    innerAudioContext.pause();
  }
}

function playItemFunc({item, index}) {
  playItem(item, index)
}

function playItem(item, index) {
  innerAudioContext.pause();
  state.playItem = item
  state.playIndex = index
  musicItem({rid: item.DC_TARGETID}).then(res => {
    innerAudioContext.src = res.url;
    state.playState = true
    innerAudioContext.play();

    setTimeout(()=>{
      innerAudioContext.onTimeUpdate((e) => {
        let progress = (innerAudioContext.currentTime / innerAudioContext.duration) * 100;
        if (progress) {
          state.progress = progress
        }
        state.playDuration = innerAudioContext.currentTime
        state.totalDuration = innerAudioContext.duration
        // this.updateLrc(false);
      });
    },1000)
  })
}

function changeShow() {
  state.show = true
}

function changeShow2() {
  state.show2 = true
}

function changeIndex(type) {
  if (type == 1) {
    if (state.playIndex > 0) {
      playItem(state.playListData[state.playIndex - 1], state.playIndex - 1)
    } else {
      playItem(state.playListData[state.playListData.length - 1], state.playListData.length - 1)
    }
  } else {
    if (state.playIndex < state.playListData.length - 1) {
      playItem(state.playListData[state.playIndex + 1], state.playIndex + 1)
    } else {
      playItem(state.playListData[0], 0)
    }
  }
}

function closeFunc() {
  innerAudioContext.stop();
}

//暴露函数父组件 ref
defineExpose({
  initPlayList,
  closeFunc
})
</script>

<style lang="scss" scoped>
// 旋转动画
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}


.play-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 120rpx;
  background-color: #fff;
  padding: 0 30rpx;
  z-index: 1000;
  display: grid;
  align-items: center;
  grid-template-columns: 110rpx 270rpx auto;

  .image {
    border-radius: 50%;
    width: 100rpx;
    height: 100rpx;
  }

  .rotate {
    animation: rotate 10s linear infinite;
  }

  .music-info {
    padding: 0 20rpx;

    .music-name {
      // 一行显示
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 24rpx;
    }

    .music-singer {
      color: #999;
      font-size: 24rpx;
    }
  }

  .bars {
    display: flex;
    align-items: center;

    .i1 {
      width: 50rpx;
      height: 50rpx;
      transform: rotate(180deg);
    }

    .i2 {
      width: 50rpx;
      height: 50rpx;
    }

    .ii {
      width: 80rpx;
      height: 80rpx;
      padding: 0 24rpx;
    }

    .i3 {
      width: 50rpx;
      height: 50rpx;
      padding-left: 20rpx;
    }
  }
}
</style>
