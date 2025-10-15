<template>
  <view class="content">
    <image src="/static/my/wd.png" class="topImg"></image>
    <view class="box">
      <view class="top">
        <view class="logo"></view>
        <view>
          <view class="title">梭影TV</view>
          <view class="text">V{{version}}</view>
        </view>
      </view>
      <view class="text">梭影TV是一个可以观看任何FF视频的软件，你们大家都懂的哦！</view>
    </view>
    <view class="grid">
      <view class="item" @tap="goUrl(1)">
        <view class="top">
          <image src="/static/my/people/icon1.png" class="icon"></image>
          <image src="/static/my/people/icon.png" class="icon"></image>
        </view>
        <view class="title">我的收藏</view>
        <view class="text">你喜欢的都在这里呢</view>
      </view>
      <view class="item " @tap="goUrl(2)">
        <view class="top">
          <image src="/static/my/people/icon2.png" class="icon"></image>
          <image src="/static/my/people/icon.png" class="icon"></image>
        </view>
        <view class="title">高级搜索</view>
        <view class="text">只有正确指令可以使用</view>
      </view>
      <view class="item" @tap="goUrl(3)">
        <view class="top">
          <image src="/static/my/people/icon3.png" class="icon"></image>
          <image src="/static/my/people/icon.png" class="icon"></image>
        </view>
        <view class="title">用户说</view>
        <view class="text">求片/反馈/防丢失</view>
      </view>
      <view class="item " @tap="goUrl(4)">
        <view class="top">
          <image src="/static/my/people/icon4.png" class="icon"></image>
          <image src="/static/my/people/icon.png" class="icon"></image>
        </view>
        <view class="title">特别鸣谢</view>
        <view class="text">请我喝杯茶</view>
      </view>
    </view>

    <view class="bottom">
      <image src="/static/my/people/bg.png" class="logo"></image>
    </view>

    <u-modal :show="show" title="请输入口令" @confirm="confirm">
      <u--input placeholder="获取口令请加vx 962398309" border="bottom" v-model="searchValue"
                style="width: 100%;" type="password"></u--input>
    </u-modal>
  </view>
</template>

<script>
export default {
  onHide() {
    uni.hideLoading()
  },
  data() {
    return {
      show: false,
      searchValue: '',
      version: 0
    }
  },
  onLoad() {
    const info = uni.getSystemInfoSync()
    this.version = info.appVersion
  },
  methods: {
    goUrl(index) {

    }
  }
}
</script>
<style>
page {
  background-image: url("/static/video/bg.png");
  background-size: 100% 100%;
}
</style>

<style scoped lang="scss">
.content {
  padding-bottom: 50rpx;

  .topImg {
    width: 96rpx;
    height: 52rpx;
    margin: 20rpx 40rpx;
    padding-top: var(--status-bar-height);
  }

  .box {
    margin: auto;
    width: 694rpx;
    background: #ffffff;
    border-radius: 16rpx;
    padding: 44rpx;
    box-sizing: border-box;

    .top {
      display: flex;
      align-items: center;

      .logo {
        width: 116rpx;
        height: 116rpx;
        background: #FFFFFF;
        border-radius: 20rpx;
        background-image: url('/static/logo.png');
        background-size: 100% 100%;
        margin-right: 34rpx;
      }

      .title {
        padding-top: 15rpx;
        font-size: 30rpx;
      }

      .text {
        margin-top: 10rpx;
        font-size: 26rpx;
        color: #82849A;
        line-height: 1.5;
      }
    }

    .text {
      margin-top: 15rpx;
      font-size: 26rpx;
      color: #82849A;
      line-height: 1.5;
    }
  }

  .grid {
    margin: 24rpx auto;
    width: 694rpx;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24rpx;

    .item {
      width: 100%;
      height: 100%;
      background: #ffffff;
      border-radius: 16rpx;
      padding: 36rpx;
      box-sizing: border-box;

      .top {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .icon {
          width: 76rpx;
          height: 76rpx;
        }
      }

      .title {
        font-size: 30rpx;
        padding-top: 42rpx;
        padding-bottom: 12rpx;
      }

      .text {
        font-size: 24rpx;
        color: #82849A;
      }
    }
  }

  .bottom {
    margin-top: 100rpx;
    width: 100vw;

    .logo {
      width: 518rpx;
      height: 158rpx;
      margin: 24rpx auto;
      display: block;
    }
  }
}
</style>
