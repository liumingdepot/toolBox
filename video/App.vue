<script>
	export default {
		onLaunch() {},
		onShow() {},
		onHide() {}
	}
</script>

<style lang="scss">
	/* #ifndef APP-NVUE */
	@import "@/uni_modules/uview-ui/index.scss";

	/*每个页面公共css */
	::-webkit-scrollbar {
		display: none;
	}

	page {
		background-image: url('/static/bg.png');
		background-repeat: no-repeat;
		background-position: top;
		background-attachment: fixed;
		width: 100vw;
		background-size: 100%;
		background-color: #f9f9f9;
	}

	/* #endif */
</style>
