<template>
  <view class="model3">
    <z-paging ref="paging" v-model="state.dataList" @query="queryList" :fixed="false">
      <view class="item" v-for="(item,index) in state.dataList" :key="index">
        <view class="disname">{{ item.disname }}</view>
        <view class="itemList">
          <view class="item2" v-for="(item2,index2) in item.child" :key="index2" @tap="gotoItem(item2)">
            <image :src="item2.pic5" class="pic"></image>
          </view>
        </view>
      </view>
    </z-paging>
  </view>
</template>

<script setup>
import {reactive, ref} from 'vue'
import {musicPhbListAll, musicPhbListItem} from "../utils/server";

const emit = defineEmits(['playList'])
const paging = ref(null)

const state = reactive({
  dataList: []
})

function queryList() {
  if (uni.getStorageSync('musicPhbListAllStorage')) {
    paging.value.complete(uni.getStorageSync('musicPhbListAllStorage'));
  }
  musicPhbListAll().then(res => {
    uni.setStorageSync('musicPhbListAllStorage', res.child);
    paging.value.complete(res.child);
  })
}

function gotoItem(item) {
  musicPhbListItem({
    id: item.sourceid
  }).then(res => {
    console.log(res);
    emit('playList', {
      index: 0,
      list: res.musiclist.map(e=>{
        return{
          NAME:e.name,
          ARTIST:e.artist,
          DC_TARGETID:e.id
        }
      })
    })
  })
}
</script>

<style lang="scss">
.model3 {
  padding: 0 30rpx;
  height: calc(100vh - var(--status-bar-height) - var(--window-bottom) - 110rpx);
  // 隐藏滚动条
  ::-webkit-scrollbar {
    display: none;
  }

  .item {
    margin-top: 10rpx;

    .disname {
      font-size: 46rpx;
      margin-bottom: 20rpx;
      color: #333;
      font-weight: bolder;
    }

    .itemList {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10rpx;
    }

    .item2 {
      width: 100%;
      height: 220rpx;
      margin-right: 10rpx;

      .pic {
        width: 100%;
        height: 100%;
        border-radius: 10rpx;
      }
    }
  }
}
</style>