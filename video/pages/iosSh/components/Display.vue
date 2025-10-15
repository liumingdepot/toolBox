<!-- Display.vue -->
<template>
  <view class="display">
    <view class="input">{{ input }}</view>
    <view class="output">{{ output }}</view>
  </view>
</template>

<script>
export default {
  name: 'Display',
  props: {
    input: String,
    output: String
  }
}
</script>

<style scoped>
.display {
  background-color: #000;
  color: #fff;
  font-size: 48rpx;
  padding-top: 120rpx;
  text-align: right;
  flex-grow: 1;
}

.input {
  font-size: 48rpx;
  opacity: 0.5;
  margin-bottom: 5rpx;
  height: 48rpx;
  line-height: 48rpx;
}


</style>