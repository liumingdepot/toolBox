<template>
  <view class="bg">
    <view class="bg-image" :style="wrapStyle"></view>
    <view class="bg-mask"></view>
  </view>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: ''
    },
    filter: {
      type: [Number, String],
      default: 0
    },
    showMask: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    wrapStyle() {
      return {backgroundImage: 'url(' + this.img + ')', filter: 'blur(' + this.filter + 'px)'}
    }
  },
  data() {
    return {};
  }
}
</script>

<style lang="scss">
.bg {
  .bg-image {
    position: absolute;
    z-index: 0;
    right: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: .9;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .bg-mask {
    position: absolute;
    z-index: 0;
    right: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, .35);
  }
}
</style>
