<template>
  <view class="model4">
    <!-- 头部分类 -->
    <view class="top">
      <view class="scrollView">
        <scroll-view scroll-x class="scroll" :show-scrollbar="false">
          <view class="item" v-for="(item,index) in state.navs" :key="index" @tap="changeType(item)"
                :class="state.from.id == item.id  ? 'active':''">
            {{item.name}}
          </view>
        </scroll-view>
      </view>
      <view class="scrollView">
        <scroll-view scroll-x class="scroll" :show-scrollbar="false">
          <view class="item" v-for="(item,index) in state.navs1" :key="index" @tap="changeType1(item)"
                :class="state.from.ids == item.id  ? 'active':''">
            {{item.name}}
          </view>
        </scroll-view>
      </view>
    </view>
    <z-paging ref="paging" v-model="state.dataList" @query="queryList" :fixed="false">
      <view class="mainBox">
        <view v-for="(item,index) in state.dataList" :key="index" class="item" @tap="gotoItem(item)">
          <image :src="item.img" type="image/webp" webp class="image" mode="aspectFill"></image>
          <view class="title">{{item.name}}</view>
          <view  class="title">热度：{{item.listencnt}}</view>
        </view>
      </view>
    </z-paging>
  </view>
</template>

<script setup>
import {reactive, ref,onMounted} from 'vue'
import {musictagListItem, musictagList, musictagListDetail} from "../utils/server";

const emit = defineEmits(['playList'])
const paging = ref(null)

const state = reactive({
  current:0,
  navs:[],
  navs1:[],
  from:{
    id:5,
    ids:2189
  },
  dataList: []
})

onMounted(()=>{
  musictagList().then(res => {
    console.log(res.data);
    state.navs = res.data.filter(e=> ['主题','心情','场景','年代'].includes(e.name))
    state.navs1 = state.navs[0].data
  })
})

function queryList() {
  musictagListDetail({
    id:state.from.ids
  }).then(res=>{
    console.log(res.data.data);
    paging.value.complete(res.data.data);
  })
}

function gotoItem(item) {
  musictagListItem({
    id: item.id
  }).then(res => {
    console.log(res);
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

function changeType(item){
  state.from.id = item.id
  state.from.ids = item.data[0].id
  state.navs1 = item.data
  paging.value.reload();
}

function changeType1(item){
  state.from.ids = item.id
  paging.value.reload();
}
</script>

<style lang="scss">
.model4 {
  height: calc(100vh - var(--status-bar-height) - var(--window-bottom) - 110rpx);
  // 隐藏滚动条
  ::-webkit-scrollbar {
    display: none;
  }

  .top{
    position: sticky;
    top: 0;
  }

  .scrollView {
    padding: 10rpx 18rpx;

    .scroll {
      white-space: nowrap;
      width: 100%;

      .item {
        display: inline-block;
        padding: 0 40rpx;
        margin-right: 8rpx;
        line-height: 60rpx;
      }

      .active {
        background-color:#d1e4ff;
        border-radius: 30rpx;
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
      border-radius: 16rpx;
      overflow: hidden;
      background: rgba(255, 255, 255, 0.5);
      float: left;
      position: relative;

      .image {
        width: 100%;
        height: 214rpx;
        border-radius: 8rpx;
        background-image: url('/static/bgImage.png');
        background-size: 100% 100%;
      }

      .title {
        width: 100%;
        padding: 4rpx 14rpx;
        font-size: 24rpx;
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