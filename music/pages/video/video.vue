<template>
  <view class="video">
    <Header v-model="state.navIndex"/>
    <Model1 v-if="state.navIndex == 0" @playList="playList"/>
    <Model2 v-if="state.navIndex == 1" @playList="playList"/>
    <Model3 v-if="state.navIndex == 2" @playList="playList"/>

    <VideoList :videoItem="state.videoItem"/>
  </view>
</template>

<script setup>
import {reactive} from 'vue'
import Model1 from "./model/model1.vue";
import Model2 from "./model/model2.vue";
import Model3 from "./model/model3.vue";
import Header from "./model/header.vue";
import VideoList from "./model/videoList.vue";

const state = reactive({
  navIndex: 0,
  videoItem:[]
})

const playList = (e) => {
  state.videoItem = e
}
</script>

<style>
page {
  background-image: url("/static/video/bg.png");
  background-size: 100% 100%;
}
</style>

