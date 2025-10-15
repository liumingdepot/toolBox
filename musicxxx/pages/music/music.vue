<template>
  <view class="music">
    <Header v-model="state.navIndex"/>
    <Model1 v-if="state.navIndex == 0" @playList="playList2"/>
    <Model2 v-if="state.navIndex == 1" @playList="playList3"/>
    <Model3 v-if="state.navIndex == 2" @playList="playList3"/>
    <Model4 v-if="state.navIndex == 3" @playList="playList3"/>
    <Music ref="musicRef"/>
  </view>
</template>

<script setup>
import {reactive,ref,onMounted,onUnmounted } from 'vue'
import {onHide} from "@dcloudio/uni-app";
import Header from './model/header.vue'
import Music from './model/music.vue'
import Model1 from './model/model1.vue'
import Model2 from './model/model2.vue'
import Model3 from './model/model3.vue'
import Model4 from './model/model4.vue'

const musicRef = ref(null)
const state = reactive({
  navIndex: 0,
})

onMounted(()=>{
  const musicPlayList = uni.getStorageSync('musicPlayList')
  if(musicPlayList){
    playList(musicPlayList,2)
  }
})

function playList2(e){
  playList(e,2)
}

function playList3(e){
  playList(e,3)
}


function playList(e,type){
  if(type==1){
    uni.setStorageSync('musicPlayList', e);
    musicRef.value.initPlayList(e, {
      show:false,
      play:false
    })
  }
  if(type==2){
    uni.setStorageSync('musicPlayList', e);
    musicRef.value.initPlayList(e, {
      show:false,
      play:true
    })
  }
  if(type==3){
    uni.setStorageSync('musicPlayList', e);
    musicRef.value.initPlayList(e, {
      show:true,
      play:true
    })
  }
}

onHide(()=>{
  musicRef.value.closeFunc()
})
</script>

<style>
page {
  background-image: url("/static/music/music.png");
  background-size: 100% 100%;
}
</style>
