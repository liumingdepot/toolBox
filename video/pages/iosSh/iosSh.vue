<template>
	<view class="calculator">
		<Display :input="input" :output="output" />
		<view class="buttons">
			<Button label="C" type="clear" @click="clear" />
			<Button label="+/-" @click="sign" />
			<Button label="%" @click="percent" />
			<Button label="÷" type="operator" @click="operator('/')" />
			<Button label="7" @click="append(7)" />
			<Button label="8" @click="append(8)" />
			<Button label="9" @click="append(9)" />
			<Button label="×" type="operator" @click="operator('*')" />
			<Button label="4" @click="append(4)" />
			<Button label="5" @click="append(5)" />
			<Button label="6" @click="append(6)" />
			<Button label="-" type="operator" @click="operator('-')" />
			<Button label="1" @click="append(1)" />
			<Button label="2" @click="append(2)" />
			<Button label="3" @click="append(3)" />
			<Button label="+" type="operator" @click="operator('+')" />
			<Button label="0" type="w150" @click="append(0)" />
			<Button label="." @click="decimal" />
			<Button label="=" type="operator" @click="equal" />
		</view>
	</view>
</template>

<script>
	import Button from './components/Button.vue'
	import Display from './components/Display.vue'
	import { Interpreter } from "./eval5.min.js";
	export default {
		name: 'Calculator',
		components: {
			Button,
			Display
		},
		data() {
			return {
				input: '',
				output: '0'
			}
		},
		methods: {
			append(value) {
				if(this.input.toString() === "0"){
					this.input = value.toString();
				}else{
					this.input += value.toString()
				}
			},
			clear() {
				this.input = ''
				this.output = '0'
			},
			sign() {
				if(!this.input) { return}
				this.input = (-parseFloat(this.input)).toString()
			},
			percent() {
				if(!this.input){return}
				this.input = (parseFloat(this.input) / 100).toString()
			},
			decimal() {
				if (!this.input.includes('.')) {
					this.input += '.'
				}
			},
			operator(operator) {
				if (this.input === '') {
					return
				}

				if (this.input.endsWith(operator)) {
					return
				}

				if (this.input.endsWith('+') || this.input.endsWith('-') || this.input.endsWith('*') || this.input
					.endsWith('/')) {
					this.input = this.input.slice(0, -1) + operator
				} else {
					this.input += operator
				}
			},
			equal() {
				const interpreter = new Interpreter(window);
				// let result = eval(this.input)
				let result = interpreter.evaluate(this.input)

				if (isNaN(result) || !isFinite(result)) {
					this.output = 'Error'
				} else {
					this.output = result.toString()
				}
			}
		}
	}
</script>

<style>
	
	.buttons {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding-bottom: 60rpx;
		
	}


	.calculator {
		background-color: #1c1c1e;
		height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.display {
		background-color: #000;
		color: #fff;
		font-size: 48px;
		padding: 30px;
		text-align: right;
		flex-grow: 1;
	}

	.input {
		font-size: 24px;
		opacity: 0.5;
		margin-bottom: 5px;
	}

	.button {
		background-color: #333;
		color: #fff;
		font-size: 24px;
		border-radius: 100%;
		width: 75px;
		height: 75px;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		margin: 5px;
		transition: background-color 0.3s;
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


	.row {
		display: flex;
		flex-wrap: wrap;
	}
</style>


<style scoped>
	view,
	button,
	input {
		box-sizing: border-box;
		font-family: Arial, Helvetica, sans-serif;
		-webkit-tap-highlight-color: transparent;
	}
	
	input {
		outline: none !important;
		border: none !important;
	}
	
	button {
		margin: 0;
		padding: 0;
		border-radius: 0;
		border: none;
		font-size: 60rpx;
		background-color: rgba(0, 0, 0, 0);
	}
	
	button::after {
		border: none;
	}
	
	/* // 点击时样式 */
	.button-hover {
		color: rgba(0, 0, 0, 0.6);
		background-color: #fff;
	}
	
	
	
	/* flex-布局 */
	.flex {
		display: flex;
		flex-wrap: wrap;
	}
	
	.f1 {
		flex: 1;
	}
	
	.f2 {
		flex: 2;
	}
	
	.f3 {
		flex: 3;
	}
	
	/* 垂直居中 */
	.fvertical {
		align-items: center;
	}
	
	/* 水平居中 */
	.fcenter {
		justify-content: center;
	}
	
	/* 右对齐 */
	.fright {
		flex-direction: row;
		justify-content: flex-end;
	}
	
	/* 左右对齐 */
	.fbetween {
		justify-content: space-between;
	}
	
	/* 水平对齐 */
	.faround {
		justify-content: space-around;
	}
	
	/* 字体 */
	.st {
		font-size: 40rpx;
		line-height: 40rpx;
	}
	
	.sf {
		font-size: 36rpx;
		line-height: 36rpx;
	}
	
	.s1 {
		font-size: 32rpx;
		line-height: 32rpx;
	}
	
	.s2 {
		font-size: 28rpx;
		line-height: 28rpx;
	}
	
	.s3 {
		font-size: 24rpx !important;
		line-height: 24rpx;
	}
	
	.s26 {
		font-size: 26rpx;
		line-height: 26rpx;
	}
	
	.s30 {
		font-size: 30rpx;
		line-height: 30rpx;
	}
	
	.s40 {
		font-size: 40rpx !important;
		line-height: 40rpx;
	}
	
	.bold {
		font-weight: bold;
	}
	
	.ab-color {
		color: #ababab;
	}
	
	.article-navg {
		padding-right: 10rpx;
		color: #999;
	}
	
	.theme-color {
		color: #f13131;
	}
	
	.theme-bg {
		background-color: #f13131;
	}
	
	.white {
		color: #fff;
	}
	
	.black {
		color: #333;
	}
	
	.red {
		color: #ff0000;
	}
	
	.gray {
		color: #999;
	}
	
	.blue {
		color: #2196f3;
	}
	
	.color-abab {
		color: #AAABAF;
	}
	
	.color-8e {
		color: #8e8e8e;
	}
	
	.color-4d {
		color: #707473
	}
	
	.b0-color {
		color: #b0b0b0
	}
	
	.color-9a {
		color: #9a9a9a;
	}
	
	.color-8f {
		color: #555
	}
	
	.color-333 {
		color: #333
	}
	
	.color-666 {
		color: #666;
	}
	
	.color-999 {
		color: #999999;
	}
	
	.color-aaabaf {
		color: #AAABAF;
	}
	
	.color-ff6 {
		color: #FF6F00;
	}
	
	.color-00d {
		color: #00D6B3;
	}
	
	.color-ff3333 {
		color: #ff3333;
	}
	
	.color-c2c5ce {
		color: #C2C5CE;
	}
	
	.color-ea4a4a {
		color: #EA4A4A;
	}
	
	.color-ccc {
		color: #CCCCCC;
	}
	
	.color-1989fa {
		color: #1989fa;
	}
	
	.border_top_f1f1 {
		border-top: 1px solid #F1F1F1
	}
	
	.border_fafa {
		border-bottom: 1px solid #fafafa
	}
	
	.bg {
		background-color: #3489FF;
	}
	
	.bg-primary {
		background-color: #00a8ff;
	}
	
	
	.bg-warning {
		background-color: #fbc531;
	}
	
	.bg-success {
		background-color: #4cd137;
	}
	
	.bg-error {
		background-color: #f00;
	}
	
	.color-primary {
		color: #00a8ff;
	}
	
	.color-warning {
		color: #fbc531;
	}
	
	.color-success {
		color: #4cd137;
	}
	
	.color-error {
		color: #f00;
	}
	
	
	.line-ed {
		width: 100%;
		height: 20rpx;
		background-color: #F5F7FA;
	}
	
	.line-ed-min {
		width: 100%;
		height: 10rpx;
		background-color: #ededed;
	}
	
	.bg-999 {
		background-color: #999999 !important;
	}
	
	.bg-ccc {
		background-color: #CCCCCC;
	}
	
	
	.evaluate-text {
		text-align: center;
	}
	
	/* 文本超出... */
	.ellipsis {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.ellipsis-2 {
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		text-overflow: ellipsis;
	}
	
	.ellipsis-3 {
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		text-overflow: ellipsis;
	}
	
	/* 卡片阴影 */
	.card {
		box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
		background-color: #fff;
	}
	
	/* 卡片式圆角 */
	.radius {
		border-radius: 10rpx;
	}
	
	.radius-top {
		border-top-left-radius: 10rpx;
		border-top-right-radius: 10rpx;
	}
	
	.radius-bottom {
		border-bottom-left-radius: 10rpx;
		border-bottom-right-radius: 10rpx;
	}
	
	
	
	/* 整体页面 */
	page {
		/* width: 100%;
		box-sizing: border-box;
		background-color: #fff;
		min-height: 100vh;
		font-family: Arial, Helvetica, sans-serif; */
		/* padding-bottom: 60rpx; */
	}
	
	/* iphoneX 吸底适配 */
	.iphonex_bottom_btn {
		bottom: 52rpx !important;
	}
	
	.iphonex_bottom_btn::after {
		content: "";
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		transform: translateY(100%);
		height: 52rpx;
		background: #fff;
		z-index: 10;
	}
	
	.iphonex_bottom_view {
		width: 100%;
		height: 52rpx;
	}
	
	/* 滑动出现动画 */
	.slideY {
		animation: slide-y 0.5s;
	}
	
	@keyframes slide-y {
		0% {
			transform: translateY(100px);
			opacity: 0;
		}
	
		100% {
			transform: translateY(0px);
			opacity: 1;
		}
	}
	
	/* 球类 */
	.ball {
		width: 60rpx;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		display: inline-block;
		border-radius: 100%;
		margin-right: 10rpx;
		overflow: hidden;
	}
	
	.red-ball {
		background-color: #f13131;
	}
	
	.blue-ball {
		background-color: #1c3bd8;
	}
	
	.bj {
		width: 40rpx;
		height: 40rpx;
		line-height: 40rpx;
		text-align: center;
		display: inline-block;
		border-radius: 2px;
		margin-right: 10rpx;
		overflow: hidden;
		color: #fff;
		font-size: 28rpx;
		font-weight: bold;
	}
	
	.bg-title-1 {
		background-color: #3489FF;
	}
	
	.bg-title-2 {
		background-color: #FF1C51;
	}
	
	.bg-title-3 {
		background-color: #FFC61C;
	}
	
	
	.nav-top {
		width: 100%;
		padding: 0 20rpx;
		height: 80rpx;
		border-bottom: 1px solid #eee;
	}
	
	.nav-top-l {
		height: 100%;
	}
	
	.iphonex_top {
		padding-top: 40rpx;
	}
	
	/* iphoneX 吸底适配 */
	.iphonex_bottom_btn {
		bottom: 52rpx !important;
	}
	
	.iphonex_bottom_btn::after {
		content: "";
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		transform: translateY(100%);
		height: 52rpx;
		background: #fff;
		z-index: 10;
	}
	
	.iphonex_bottom_view {
		width: 100%;
		height: 52rpx;
	}
	
	/* 滑动出现动画 */
	.slideY {
		animation: slide-y 0.5s;
	}
	
	@keyframes slide-y {
		0% {
			transform: translateY(100px);
			opacity: 0;
		}
	
		100% {
			transform: translateY(0px);
			opacity: 1;
		}
	}
	
	/* 三角形 */
	.arrow {
		position: relative;
	}
	
	.arrow:after {
		content: '';
		display: inline-block;
		width: 16rpx;
		height: 16rpx;
		border: 2rpx solid #a3a3a3;
		border-bottom: none;
		border-left: none;
		transform: rotate(45deg);
	}
	
	.arrow-white {
		position: relative;
	}
	
	.arrow-white:after {
		content: '';
		display: inline-block;
		width: 16rpx;
		height: 16rpx;
		border: 2px solid #FFFFFF;
		border-bottom: none;
		border-left: none;
		transform: rotate(45deg);
	}
	
	.loadmore {
		padding: 30rpx 0;
	}
	
	uni-toast .uni-toast {
		width: auto;
		padding: 16rpx;
		font-size: 24rpx;
	}
	
	.uni-toast .uni-icon_toast {
		display: none;
	}
	
	.uni-toast .uni-toast__content {
		margin: 0;
	}
	
	.nodata {
		text-align: center;
	}
	
	.add-list-file {
		width: 192rpx;
		height: 192rpx;
		background-color: #f4f5f6;
		border-radius: 8rpx;
		text-align: center;
		margin-top: 20rpx;
		margin-right: 10rpx;
		position: relative;
	}
	
	.file-close {
		position: absolute;
		top: 10rpx;
		right: 10rpx;
	}
	
	.file-icon {
		padding-top: 50rpx;
		padding-bottom: 18rpx;
	}
	
	
	.file-list-item {
		height: 80rpx;
		line-height: 80rpx;
	}
	
	
	
	.myPopup .u-drawer-content-visible {
		width: 30px !important;
		height: 30px !important;
		top: 48% !important;
		left: 48% !important;
		transform: translate(-50%, -50%) !important;
		font-size: 36px !important;
	
	}
	
	.myPopup .u-mode-center-box {
		background: transparent !important;
	
	}
	
	.u-radio {
		width: 100% !important;
		border-bottom: 2rpx solid #ccc;
		padding: 8px;
	}
	
	.noticeContent .u-drawer-center {
		width: 70%;
		height: 200px;
		margin: 50% auto 0;
		transform: translateY(-50%);
		border-radius: 10px;
	}
	
	
	.icon-you {
		width: 40rpx;
		height: 40rpx;
		position: relative;
	
	}
	
	.icon-you:after,
	.icon-you:before {
		border: 5px solid transparent;
		border-left: 8px solid #FFFFFF;
		width: 0;
		height: 0;
		position: absolute;
		top: 10rpx;
		right: -0rpx;
		content: ' '
	}
	
	.icon-you::before {
		border-left-color: #666666;
		right: -2rpx;
	}
	
	.empty {
		position: absolute;
		top: 30%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	
	.foot-goods {
		padding: 30rpx 20rpx;
	}
	
	.foot-goods-title {
		padding-bottom: 20rpx;
	}
	
	.foot-goods-box {}
	
	.foot-goods-box-item {
		width: 200rpx;
	}
	
	.foot-goods-box-item-name {
		padding-top: 25rpx;
	}
	
	.foot-goods-box-item {
		margin-right: 15rpx;
	}
	
	.list-box-item-tag-item {
		padding: 8rpx;
		background-color: #007AFF;
		margin-left: 10rpx;
		margin-bottom: 10rpx;
	}
	
</style>