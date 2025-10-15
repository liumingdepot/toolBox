<template>
	<view :class="['button', type]"  @click="$emit('click')">
		{{ label }}
	</view>
</template>

<script>
	export default {
		name: 'Button',
		props: {
			label: String,
			type: String
		},
		
	}
</script>

<style scoped>
	.w150{
		width: 340rpx !important;
		border-radius: 80rpx !important;
		text-align: left !important;
		display: flex;
		justify-content: start;
		padding-left: 60rpx;
	}
	.button {
		  /* padding: 20rpx; */
		  border-radius: 50%;
		  background-color: #e0e0e0;
		  border: none;
		  color: #333;
		  font-weight: bold;
		  font-size: 36rpx;
		  margin: 10rpx;
		  cursor: pointer;
		  box-shadow: 0 3rpx 6rpx rgba(0, 0, 0, 0.2);
		  transition: all 0.2s;
	}

	.button:hover {
		background-color: #444;
	}

	.operator {
		background-color: #f5a623;
		color: #fff;
	}

	.clear {
		background-color: #d3d3d3;
		color: #000;
	}

</style>
