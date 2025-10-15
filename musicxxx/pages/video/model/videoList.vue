<template>
  <view>
    <wd-action-sheet v-model="state.show">
      <view style="padding: 24rpx;line-height: 1.5;">选集</view>
      <scroll-view class="scrollY" scroll-y="true">
        <!-- 电视剧 -->
        <view class="actives actives2" v-if="state.videoType == 1">
          <view class="item" :class="state.jiIndex == index ?'active':''"
                v-for="(item,index) in videoList" :key="index"
                @tap="getVideoItem(item,index)">
            {{index + 1}}
          </view>
        </view>
        <!-- 正常 -->
        <view class="actives" v-else>
          <view class="item" :class="state.jiIndex == index ?'active':''"
                v-for="(item,index) in videoList" :key="index"
                @tap="getVideoItem(item,index)">
            {{item.title}}
          </view>
        </view>
      </scroll-view>
    </wd-action-sheet>
  </view>
</template>


<script setup>
import {watch,reactive,computed} from 'vue'

const state  = reactive({
  show:false,
  videoType:2,
  current:0,
  jiIndex:0
})
const props = defineProps(['videoItem']);

const videoList = computed(() => {
  return props.videoItem.vod_play_url_video[state.current]
})

watch(() => props.videoItem, (newValue, oldValue) => {
  console.log(props.videoItem);
  if(
      props.videoItem.type_name == '电视剧' ||
      props.videoItem.type_name == '国产剧' ||
      props.videoItem.type_id_1 == 2
  ){
    state.videoType  = 1
  }else{
    state.videoType  = 2
  }
  state.show = true
})

function getVideoItem(e,i){
  console.log(e);
  state.jiIndex =  i
  const videoList = {
    url: e.url,
    title: props.videoItem.vod_name + e.title,
    poster: props.videoItem.vod_pic
  }
  uni.setStorage({
    key: 'videoList',
    data: videoList,
    success() {
      uni.navigateTo({
        url: '/pages/video/videoPlay'
      })
    }
  });
}
</script>

<style scoped lang="scss">
.scrollY {
  padding-bottom: 100rpx;
  height: 400rpx;

  .actives {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 26rpx;
    padding: 24rpx;
    box-sizing: border-box;

    .item {
      width: 100%;
      height: 100%;
      background-color: rgba(239, 239, 239, 1);
      border-radius: 8rpx;
      font-size: 28rpx;
      text-align: center;
      line-height: 80rpx;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 0 12rpx;
      box-sizing: border-box;
    }

    .active {
      background-color: rgba(41, 201, 120, 0.09);
      color: rgba(41, 201, 120, 1);
      border: 2rpx solid rgba(41, 201, 120, 1);
    }
  }

  .actives2 {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }

}

</style>
