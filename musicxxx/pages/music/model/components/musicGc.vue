<template>
  <wd-action-sheet v-model="visible">
    <view class="play-view">
      <cover-img-background img='/static/music/musicBg.png'></cover-img-background>
      <view :is-back="false" :border-bottom="false" background="backgroundColor:transparent" :z-index="999">
        <view class="slot-wrap view-header">
          <view class="header-left">
            <image src="/static/music/icon.png" @click="hide" style="width: 40rpx;height: 40rpx;"></image>
          </view>
          <view class="header-content">
            <view class="view-item" :class="state.currentSwiper == 0 ? 'view-active' : ''">歌曲</view>
            <view class="view-item" :class="state.currentSwiper == 1 ? 'view-active' : ''">歌词</view>
          </view>
        </view>
      </view>
      <view class="view-body" :style="{height:state.bodyHeight+'px'}">
        <view class="play-view-content">
          <swiper class="swiper" :current="state.currentSwiper" @change="bindOnPlayViewSwiperChange">
            <swiper-item class="music-info-view">
              <view class="music-cover">
                <image :src="playItem.web_albumpic_short" style="width: 100%;height: 100%"></image>
              </view>
              <view class="music-info flex-v-center">
                <view class="music-name text-line-1">{{ playItem.NAME }}</view>
                <view class="music-singer text-line-1">{{ playItem.ARTIST }}</view>
              </view>
              <view class="play-progress flex-v-center" style="margin-top: 250rpx">
                <Progress active-color="#fff" inactive-color="#f40"
                          :percent="progress" :show-percent="false" :round="true" :height="6"></Progress>
                <view class="progress-time">
                  <text>{{ playDuration }}</text>
                  <text>{{ totalDuration }}</text>
                </view>
              </view>
              <view class="music-bars flex-v-center">
                <image src="/static/music/i2.png" class="i1"></image>
                <image src="/static/music/ii.png" class="ii" v-if="!state.playState"></image>
                <image src="/static/music/iis.png" class="ii" v-else></image>
                <image src="/static/music/i2.png" class="i2"></image>
              </view>
            </swiper-item>
            <swiper-item class="music-lrc-view">
              <lrc-view
                  :lyric-style='lyricStyle'
                  :lyrics='state.lrcStrs'
                  :cur-time='playSeconds'
                  @centerBtnClick="centerBtnClick"
              ></lrc-view>
            </swiper-item>
          </swiper>
        </view>
      </view>
    </view>
  </wd-action-sheet>
</template>

<script setup>
import {computed, defineModel, reactive, watch} from 'vue'

const lyricStyle = {
  color: "#ffffff",
  activeColor: '#4cd964',
  fontSize: '14px',
  activeFontSize: '14px',
  lineHeight: '40px',
  activeLineHeight: '32px',
  selectedBGColor: 'inherit'
}
let systemInfo = uni.getSystemInfoSync();
import CoverImgBackground from './cover-img-background.vue'
import Progress from './progress.vue'
import LrcView from './bing-lyric/bing-lyric.vue'
import {getlyric} from "@/pages/music/utils/server";
import {convertToLRC, parseFromLRC} from "@/pages/music/utils/convertToLRC";

const visible = defineModel()
const props = defineProps(['playItem','progress','totalDuration','playSeconds']);
console.log(props.playItem);

const state = reactive({
  bodyHeight: systemInfo.windowHeight - systemInfo.statusBarHeight - 44,
  currentSwiper: 0,
  isLoop: false,
  lrcStrs: '',
})


watch(() => props.playItem, (val) => {
  getgetlyric()
})

function getgetlyric() {
  getlyric({
    rid: props.playItem.DC_TARGETID
  }).then(res => {
    state.lrcStrs = parseFromLRC(convertToLRC(res.data.lrclist)).map(e => `[${e.time}]${e.lineLyric}`)
  })
}

function show() {
  // if (this.playList && this.playIndex != -1) {
  //   this.setStatusBarStyle('light');
  //   this.visible = true;
  // }
}

function centerBtnClick(e){
  console.log(e);
}

function hide() {
  setStatusBarStyle('dark');
  visible.value = false;
}

function bindOnPlayViewSwiperChange(e) {
  state.currentSwiper = e.detail.current;
}

function bindOnFavoritesMusic() {
  this.$refs.songListSelector.show();
}

function bindOnShowPlayList() {
  this.$refs.playListPopup.show();
}

function bindOnControllerPlay(type) {
  this.controllerPlay(type);
}

function setStatusBarStyle(color) {
  /* #ifndef H5 */
  plus.navigator.setStatusBarStyle(color)
  /* #endif */
}

function bindOnSelectSongList(data) {
  let songList = data.data;
  this.songListService.addMusic(songList, this.music);
}

function bindOnAddSongList(data) {
  const name = data.data;
  this.songListService.add(name, [this.music]);
}
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

.play-view {
  width: 100vw;
  height: 100%;
  z-index: 1001;

  .view-header {
    display: flex;
    flex: 1;
    padding: 0 60rpx;
    position: relative;
    margin-top: var(--status-bar-height);
    padding-top: 50rpx;
    box-sizing: border-box;

    .header-left {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      left: 40rpx;
      top: 40rpx;
      text-align: center;
    }

    .header-content {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #c0c0c0;

      view {
        text-align: center;
        font-size: 28rpx;
        padding: 0 10rpx;
      }

      .view-active {
        color: #fff;
      }

    }
  }

  .view-body {
    position: relative;
    z-index: 999;

    .play-view-content {
      width: 100%;
      height: calc(100% - 66px);
      position: absolute;
      left: 0;
      top: 0;

      swiper {
        height: 100%;
      }

      .music-info-view {
        width: 100%;
        height: 100%;
        padding-top: 40rpx;

        .music-cover {
          width: 400rpx;
          height: 400rpx;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto;
          animation: rotate 10s linear infinite;
        }

        .music-info {
          padding: 20rpx 40rpx;
          padding-top: 40rpx;
          color: #fff;
          flex: 1;
          flex-flow: column;

          .music-name {
            font-size: 32rpx;
            font-weight: bold;
            text-align: center;
          }

          .music-singer {
            font-size: 24rpx;
            padding: 10rpx 0;
            color: #c0c0c0;
          }
        }

        .music-lrc {
          flex: 1;
          padding: 20rpx 40rpx;
          font-size: 24rpx;
          color: #c0c0c0;
          height: 34rpx;
        }

        .music-bars {
          flex: 1;
          padding: 20rpx 40rpx;
          display: flex;
          align-items: center;
          justify-content: space-around;

          .i1 {
            width: 60rpx;
            height: 60rpx;
            transform: rotate(180deg);
          }

          .i2 {
            width: 60rpx;
            height: 60rpx;
          }

          .ii {
            width: 120rpx;
            height: 120rpx;
            padding: 0 24rpx;
          }

        }

        .play-progress {
          flex: 1;
          padding: 20rpx 40rpx;
          display: flex;
          align-items: center;
          flex-flow: column;

          .progress-time {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 10rpx 0;
            color: #c0c0c0;
          }
        }
      }

      .music-lrc-view {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    .play-view-footer {
      width: 100%;
      height: 66px;
      position: absolute;
      left: 0;
      bottom: 0;

      display: flex;
      justify-items: center;
      align-items: center;
      padding: 0rpx 40rpx;

      .view-item {
        flex: 1;
        text-align: center;
      }
    }
  }

}

:deep {
  .wd-action-sheet__popup {
    border-radius: 0;
  }
}
</style>


<style>
.page-fixed {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.btn-active {
  &:active {
    opacity: 0.8;
  }
}

.flex-v-center {
  display: flex;
  align-items: center;
}

.flex-h-center {
  display: flex;
  justify-items: center;
  justify-content: center;
}

.flex-v-h-center {
  display: flex;
  justify-items: center;
  align-items: center;
  justify-content: center;
}

.flex-v {
  flex-direction: column;
}

.flex {
  display: flex;
}

.flex-space-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.flex-flex-end {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
}

[class*="text-line-"] {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.text-line-1 {
  -webkit-line-clamp: 1;
}

.text-line-2 {
  -webkit-line-clamp: 2;
}

.text-line-3 {
  -webkit-line-clamp: 3;
}

.text-line-4 {
  -webkit-line-clamp: 4;
}

.text-line-5 {
  -webkit-line-clamp: 5;
}

@keyframes textScrollRun {
  0% {
    left: 0;
    transform: translate(0, 0);
  }
  100% {
    left: 100%;
    transform: translate(-100%, 0);
  }
}

.text-scroll-content {
  white-space: nowrap;

  display: inline-block;
}

.text-scroll-run {

  animation: textScrollRun 15s infinite alternate linear;
}

.text-scroll {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
}

</style>
