<template>
  <view class="box">
    <web-view :src="src" class="video" @message="fullscreenchange"></web-view>
  </view>
</template>

<script setup>
import {ref} from 'vue'
import {onLoad,onUnload} from "@dcloudio/uni-app";

const src = ref('')

onUnload(()=>{
  // #ifdef APP-PLUS
  plus.screen.lockOrientation('portrait-primary')
  // #endif
})

onLoad(() => {
  const videoItem = uni.getStorageSync('videoList');
  src.value = `/hybrid/html/index.html?url=${videoItem.url}&title=${videoItem.title}&poster=${videoItem.poster}`
  console.log(src.value);
  uni.setNavigationBarTitle({
    title: videoItem.title
  });
})

function fullscreenchange(e) {
  const fullScreen = e.detail.data[0].isFullscreen
  if (fullScreen == 1) {
    plus.screen.lockOrientation('landscape-primary')
  } else {
    plus.screen.lockOrientation('portrait-primary')
  }
}
</script>

<style>
.box {
  height: 100vh;
  background-color: #000;
}
</style>
